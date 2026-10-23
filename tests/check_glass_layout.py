"""Unpatched shell/responsive controls and the new appearance evidence matrix."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance, geometry, OUT


def shot(page, name):
    page.screenshot(path=str(OUT / f'glass-{name}.png'))


def reveal(page, selector):
    """Open actual disclosure controls when a responsive view requires it."""
    for key in page.locator(selector).evaluate('''e=>{
      const keys=[];for(let p=e.parentElement;p;p=p.parentElement)
        if(p.tagName==='DETAILS'&&!p.open&&p.dataset.mobileKey)keys.unshift(p.dataset.mobileKey);
      return keys;
    }'''):
        page.locator(f'[data-mobile-key="{key}"] > summary').click()


def set_theme(page, theme):
    page.locator('#appearanceToggle').click()
    page.locator('#appearanceTheme' + theme.title()).click()
    close_appearance(page)


def large_type_content(page):
    """Visible study text must wrap, and main controls remain inside the page.

    This checks clipping properties as well as page width; a fixed-height card
    can hide words without producing horizontal document overflow. Scrollable
    lists and the intentionally clipped screen-reader labels are not failures.
    """
    report = page.evaluate('''()=>{
      const visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
      const description=e=>({tag:e.tagName,id:e.id,class:e.className,text:e.textContent.trim().slice(0,90)});
      const controls=[...document.querySelectorAll('main button,main summary,main input:not([type=radio]):not([type=checkbox]):not([type=file]),main select,main textarea')]
        .filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.left < -1 || r.right > innerWidth+1;}).map(description);
      const clipped=[...document.querySelectorAll('main h1,main h2,main h3,main p,main button,main summary,main .flashcard-face,main .gr-option,main .ex-option')]
        .filter(visible).filter(e=>{const s=getComputedStyle(e);return (['hidden','clip'].includes(s.overflowX)&&e.scrollWidth>e.clientWidth+2)||
          (['hidden','clip'].includes(s.overflowY)&&e.scrollHeight>e.clientHeight+2);}).map(description);
      return {controlsOutsideViewport:controls,clippedText:clipped};
    }''')
    assert not report['controlsOutsideViewport'], report
    assert not report['clippedText'], report
    return report


server, URL = serve()
OUT.mkdir(parents=True, exist_ok=True)
try:
    with sync_playwright() as p:
        browser = launch(p)
        ctx = browser.new_context(viewport={'width':1440,'height':1000}, reduced_motion='reduce')
        ctx.route('https://**/*', lambda route: route.abort())
        page = ctx.new_page()
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.goto(URL)
        ready(page)
        geometry(page)
        assert page.locator('#sidebarNavigation .mode-tabs [data-mode]').count() == 7
        assert page.locator('#sidebarFooter #appearanceToggle').count() == 1
        assert page.locator('#appSidebar').inner_text().count('Dekiru Master') == 1
        assert page.locator('#appSidebar .brand-logo').evaluate('(e)=>e instanceof HTMLImageElement&&e.naturalWidth>0&&e.src.endsWith("assets/logo.svg")')
        assert '学' in (ROOT / 'assets/logo.svg').read_text(encoding='utf-8')
        assert page.locator('link[rel="icon"]').count() > 0
        assert not any('user-scalable=no' in content or 'maximum-scale=1' in content
                       for content in page.locator('meta[name=viewport]').evaluate_all('(es)=>es.map(e=>e.content)'))
        page.evaluate('''()=>{window.originalNavigation=[...document.querySelectorAll('[data-mode]')];
          window.originalAppearanceToggle=document.querySelector('#appearanceToggle');
          window.shellPageMarker=crypto.randomUUID();}''')
        marker = page.evaluate('shellPageMarker')
        titles = {}
        # The contextual title changes with the actual study area.
        for name in ['flashcard','quiz','list','reading','kanji','grammar','exam']:
            mode(page, name)
            titles[name] = page.locator('#areaTitle').inner_text().strip()
            assert titles[name]
            assert page.locator(f'[data-mode="{name}"]').get_attribute('aria-pressed') == 'true'
        assert len(set(titles.values())) == 7, titles
        assert not any('toàn' in title.lower() for title in titles.values()), titles

        # All responsive moves reuse the same buttons and preserve the selection.
        mode(page, 'grammar')
        for width,height in [(390,844),(1440,1000),(320,568),(768,1024),(1100,800),(1440,1000),(390,844)]:
            page.set_viewport_size({'width':width,'height':height})
            page.wait_for_function('(mobile)=>!!document.querySelector("#mobileMore")===mobile', arg=width<=760)
            geometry(page)
            assert page.evaluate('''()=>originalNavigation.every(e=>e.isConnected)&&originalNavigation.length===document.querySelectorAll('[data-mode]').length&&
              originalAppearanceToggle===document.querySelector('#appearanceToggle')''')
            assert page.evaluate('currentMode') == 'grammar'
            assert page.locator('[data-mode=grammar]').get_attribute('aria-pressed') == 'true'
            assert page.locator('#areaTitle').inner_text().strip() == titles['grammar']
        page.set_viewport_size({'width':1440,'height':1000})
        mode(page, 'quiz')
        page.locator('input[name=quizCount][value="5"]').check()
        page.locator('.quiz-start-btn').click()
        page.locator('.quiz-opt-btn').first.click()
        quiz_before = page.evaluate('({questions:quizQuestions,options:quizOptionSets,answers:quizAnswers,run:quizRun})')
        page.locator('#appSidebar .brand').click()
        assert page.evaluate('shellPageMarker') == marker, 'Brand unexpectedly reloaded the page'
        mode(page, 'quiz')
        assert page.evaluate('({questions:quizQuestions,options:quizOptionSets,answers:quizAnswers,run:quizRun})') == quiz_before

        # Main screens, both themes, representative phone/tablet/desktop sizes.
        measurements = []
        for width,height in [(320,568),(390,844),(768,1024),(1440,1000)]:
            page.set_viewport_size({'width':width,'height':height})
            for theme in ['light','dark']:
                set_theme(page, theme)
                for name in ['flashcard','quiz','list','reading','kanji','grammar','exam']:
                    mode(page, name)
                    page.evaluate('scrollTo(0,0)')
                    measured = geometry(page)
                    measurements.append({'mode':name,'theme':theme,'viewport':{'width':width,'height':height},**measured})
                    if name == 'reading':
                        assert page.locator('#readingBody').bounding_box()['width'] >= (250 if width<=390 else 440)
                    shot(page, f'{name}-{width}-{theme}')
                page.locator('#appearanceToggle').click()
                assert page.locator('#appearanceDialog').evaluate('''d=>{const r=d.getBoundingClientRect();return r.left>=-1&&r.right<=innerWidth+1&&r.top>=-1&&r.bottom<=innerHeight+1;}''')
                assert page.locator('#appearanceDialog').evaluate('(d)=>d.scrollWidth<=d.clientWidth')
                shot(page, f'drawer-{width}-{theme}')
                # Last control stays reachable through the panel's own scrolling.
                page.locator('#appearanceReset').scroll_into_view_if_needed()
                assert page.locator('#appearanceReset').evaluate('''e=>{const r=e.getBoundingClientRect(),d=e.closest('dialog').getBoundingClientRect();return r.top>=d.top&&r.bottom<=d.bottom+1;}''')
                close_appearance(page)

        # The largest UI setting applies to every main mode, not just the drawer.
        # Reading's independent 34px setting is covered by check_appearance.py.
        large_type = []
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceFontSize').select_option('20')
        close_appearance(page)
        for width,height in [(320,568),(1440,1000)]:
            page.set_viewport_size({'width':width,'height':height})
            for theme in ['light','dark']:
                set_theme(page, theme)
                for name in ['flashcard','quiz','list','reading','kanji','grammar','exam']:
                    mode(page, name)
                    page.evaluate('scrollTo(0,0)')
                    measured = geometry(page)
                    content = large_type_content(page)
                    assert page.locator('body').evaluate('(e)=>parseFloat(getComputedStyle(e).fontSize)') == 20
                    large_type.append({'mode':name,'theme':theme,'viewport':{'width':width,'height':height},
                        **measured,**content})
                    shot(page, f'{name}-{width}-{theme}-ui20')
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceFontSize').select_option('17')
        close_appearance(page)

        # Three active attempts and three result screens in each theme, phone/PC.
        for width,height in [(390,844),(1440,1000)]:
            page.set_viewport_size({'width':width,'height':height})
            for theme in ['light','dark']:
                set_theme(page, theme)
                mode(page, 'quiz')
                if page.locator('#quizResult').is_visible():
                    page.evaluate('retryQuiz()')
                geometry(page)
                shot(page, f'quiz-active-{width}-{theme}')
                page.locator('#quizSubmit').click()
                if page.locator('#quizSubmitAnyway').is_visible():
                    page.locator('#quizSubmitAnyway').click()
                page.wait_for_selector('#finalScore')
                geometry(page)
                shot(page, f'quiz-results-{width}-{theme}')

                mode(page, 'grammar')
                if page.locator('[data-gr-again]').is_visible():
                    page.locator('[data-gr-again]').click()
                elif not page.locator('[data-gr-submit]').is_visible():
                    reveal(page, '[data-gr-drill]')
                    page.locator('[data-gr-drill]').click()
                page.wait_for_selector('#grQuestionTitle')
                geometry(page)
                shot(page, f'grammar-active-{width}-{theme}')
                page.locator('[data-gr-submit]').click()
                page.wait_for_selector('#grResultTitle')
                geometry(page)
                shot(page, f'grammar-results-{width}-{theme}')

                mode(page, 'exam')
                if page.locator('[data-ex-restart]').is_visible():
                    page.locator('[data-ex-restart]').click()
                else:
                    reveal(page, '#exMinutes')
                    page.locator('#exMinutes').select_option('0')
                    page.locator('[data-ex-start="chapter45-1"]').click()
                page.wait_for_selector('[data-ex-answer="0"]')
                page.locator('[data-ex-answer="0"]').click()
                page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
                geometry(page)
                shot(page, f'exam-active-{width}-{theme}')
                page.locator('[data-ex-submit]').click()
                page.locator('#exConfirmAccept').click()
                page.wait_for_selector('#exScore')
                geometry(page)
                shot(page, f'exam-results-{width}-{theme}')

        # Short landscape and a keyboard-sized viewport keep the drawer reachable.
        for width,height in [(740,390),(390,360),(320,300)]:
            page.set_viewport_size({'width':width,'height':height})
            mode(page, 'reading')
            geometry(page)
            page.locator('#appearanceToggle').click()
            page.locator('#appearanceFontSize').focus()
            page.locator('#appearanceReset').scroll_into_view_if_needed()
            assert page.locator('#appearanceReset').evaluate('e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight+1;}')
            assert page.locator('#appearanceDialog').evaluate('d=>d.scrollWidth<=d.clientWidth')
            shot(page, f'drawer-short-{width}x{height}')
            close_appearance(page)
            assert page.evaluate('document.activeElement.id') == 'appearanceToggle'
        (OUT / 'glass-layout.json').write_text(json.dumps({'browser':browser.browser_type.name,'version':browser.version,
            'titles':titles,'measurements':measurements,'large_type_measurements':large_type}, ensure_ascii=False, indent=2), encoding='utf-8')
        assert not errors, errors
        browser.close()
    print('PASS: original 7 buttons and selection across breakpoints, 232px sidebar/compact rail/mobile nav, contextual titles, safe brand, 56 mode screenshots, 28 UI20px main-mode screenshots with text/control clipping checks, drawer and active/results light/dark screenshots, landscape and keyboard-height panel.')
finally:
    server.shutdown()
