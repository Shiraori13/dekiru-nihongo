"""Reference-design acceptance on the actual static app and original controls.

This supplements the grading/storage suites: it checks the visual specification
at computed-style level and records real screenshots, without mocking study state.
"""
import hashlib
import json
import os
import struct
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance, geometry

OUT = ROOT / os.environ.get('DEKIRU_REFERENCE_EVIDENCE_DIR', 'audits/evidence/reference')


def snapshot(page):
    return page.evaluate('''()=>({questions:quizQuestions,options:quizOptionSets,
      answers:quizAnswers,index:quizIndex,run:quizRun,state:quizState})''')


def details(page):
    return page.evaluate('''()=>{
      const css=(selector)=>{const e=document.querySelector(selector),s=getComputedStyle(e),r=e.getBoundingClientRect();
        return {font:parseFloat(s.fontSize),weight:s.fontWeight,color:s.color,background:s.backgroundColor,
          image:s.backgroundImage,border:s.borderColor,radius:s.borderRadius,width:r.width,height:r.height,
          x:r.x,right:r.right,display:s.display};};
      return {width:innerWidth,heading:css('.quiz-workspace-heading h1'),prompt:css('#quizKanji'),
        option:css('.quiz-option-text'),choice:css('.quiz-opt-btn[aria-pressed=true]'),
        badge:css('.quiz-opt-btn[aria-pressed=true] .quiz-option-letter'),
        primary:css('#quizSubmit'),nav:css('[data-mode=quiz]'),
        logo:css('.brand-logo'),header:css('header'),background:css('#appBackground'),
        body:css('body'),root:getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()};
    }''')


def set_theme(page, theme):
    page.locator('#appearanceToggle').click()
    page.locator('#appearanceTheme' + theme.title()).click()
    close_appearance(page)


def rgb(color):
    # Color serialization is RGB(A) in the browsers supported by the suite.
    import re
    return tuple(float(value) for value in re.findall(r'[\d.]+', color)[:3])


def teal(color):
    red, green, blue = rgb(color)
    return green >= red + 35 and blue >= red + 20 and abs(green - blue) < 55


def teal_surface(style):
    import re
    return teal(style['background']) or any(teal(color) for color in re.findall(r'rgba?\([^)]*\)',style['image']))


def visible_content(page):
    result = page.evaluate('''()=>{
      const visible=e=>!!e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
      const describe=e=>({id:e.id,tag:e.tagName,class:e.className,text:e.textContent.trim().slice(0,80)});
      return {outside:[...document.querySelectorAll('main button,main input:not([type=radio]):not([type=checkbox]),main select,main summary')]
        .filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.left < -1 || r.right>innerWidth+1;}).map(describe),
        clipped:[...document.querySelectorAll('main h1,main h2,main p,main .quiz-option-text,main .gr-option,main .ex-option')]
          .filter(visible).filter(e=>{const s=getComputedStyle(e);return (['hidden','clip'].includes(s.overflowX)&&e.scrollWidth>e.clientWidth+2)||
            (['hidden','clip'].includes(s.overflowY)&&e.scrollHeight>e.clientHeight+2);}).map(describe)};
    }''')
    assert not result['outside'] and not result['clipped'], result
    return result


def busy_png():
    """A deliberately detailed local-image fixture, not an application background."""
    width, height = 300, 200
    def chunk(kind, payload):
        return struct.pack('>I',len(payload))+kind+payload+struct.pack('>I',zlib.crc32(kind+payload))
    rows = bytearray()
    for y in range(height):
        rows.append(0)
        for x in range(width):
            rows.extend((255,55,135) if (x//9+y//9)%2 else (15,60,200))
    return b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>2I5B',width,height,8,2,0,0,0))+chunk(b'IDAT',zlib.compress(bytes(rows)))+chunk(b'IEND',b'')


server, URL = serve()
OUT.mkdir(parents=True, exist_ok=True)
report = {'measurements':[], 'checks':[]}
try:
    with sync_playwright() as p:
        browser = launch(p)
        errors = []
        failed_http = []
        ctx = browser.new_context(viewport={'width':1600,'height':1000}, reduced_motion='reduce')
        ctx.route('https://**/*', lambda route: route.abort())
        page = ctx.new_page()
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.on('response', lambda response: failed_http.append(response.url) if response.status>=400 else None)
        page.goto(URL)
        ready(page)
        initial = page.evaluate('Appearance.getState()')
        assert initial['theme']=='light' and initial['background']=='mint', initial
        assert .55 <= initial['glassAlpha'] <= .72 and 16 <= initial['glassBlur'] <= 24, initial
        assert not page.locator('#appearanceDialog').is_visible()
        assert page.locator('[data-mode]').count()==7
        assert not page.locator('[data-mode=appearance]').count()
        mode(page, 'quiz')
        page.locator('input[name=quizCount][value="5"]').check()
        page.locator('.quiz-start-btn').click()
        page.locator('.quiz-opt-btn').nth(1).click()
        assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==1
        original = snapshot(page)
        page.evaluate('window.referenceMarker=crypto.randomUUID()')
        marker = page.evaluate('referenceMarker')
        page.locator('#studyShortcuts .study-shortcut').first.click()
        page.wait_for_function('currentMode==="reading"')
        page.wait_for_selector('#readingBody')
        mode(page,'quiz')
        assert snapshot(page)==original, 'A study shortcut must keep the existing quiz'
        measurements = report['measurements']
        for width,height in [(1600,1000),(1440,900),(768,1024),(390,844),(320,568)]:
            page.set_viewport_size({'width':width,'height':height})
            mode(page, 'quiz')
            for theme in ['light','dark']:
                set_theme(page, theme)
                page.evaluate('scrollTo(0,0)')
                geometry(page)
                visible_content(page)
                actual = details(page)
                actual['theme'] = theme
                assert actual['prompt']['font'] >= 28, actual
                assert 18 <= actual['option']['font'] <= 23, actual
                assert actual['choice']['height'] >= 58, actual
                assert teal(actual['choice']['border']), actual
                assert teal_surface(actual['primary']), actual
                assert actual['badge']['background'] != actual['choice']['background'], actual
                assert page.locator('.quiz-option-letter').all_text_contents()==list('ABCD')
                if width>1100:
                    assert 40 <= actual['heading']['font'] <= 45, actual
                    assert 16 <= actual['nav']['font'] <= 18.5, actual
                    assert 80 <= actual['logo']['width'] <= 130, actual
                    assert 76 <= actual['header']['height'] <= 86, actual
                    assert actual['header']['x'] >= 260, actual
                assert snapshot(page)==original, 'Responsive or appearance change mutated the attempt'
                page.screenshot(path=str(OUT/f'qa-quiz-{width}-{theme}.png'))
                page.locator('#appearanceToggle').click()
                box = page.locator('#appearanceDialog').bounding_box()
                assert box['x']>=-1 and box['x']+box['width']<=width+1, box
                if width>1100:
                    assert 340 <= box['width'] <= 360, box
                assert page.evaluate('!!document.activeElement.closest("#appearanceDialog")')
                page.screenshot(path=str(OUT/f'qa-drawer-{width}-{theme}.png'))
                page.locator('#appearanceReset').scroll_into_view_if_needed()
                close_appearance(page)
                assert page.evaluate('document.activeElement.id')=='appearanceToggle'
                assert snapshot(page)==original
                measurements.append(actual)
        report['checks'].append('Five viewport sizes, both themes, original attempt and same 7 navigation controls.')

        # An actual local detailed image must not lower study-card opacity below
        # the reading floor. The image fixture also makes the screenshot inspectable.
        page.set_viewport_size({'width':1440,'height':900})
        mode(page, 'quiz')
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceThemeLight').click()
        page.locator('#appearanceUpload').set_input_files({'name':'detailed-check.png','mimeType':'image/png','buffer':busy_png()})
        page.wait_for_function('!Appearance.getState().uploadBusy')
        assert page.evaluate('Appearance.getState().background')=='custom'
        page.locator('#appearanceOpacity').fill('62')
        page.locator('#appearanceFontSize').select_option('20')
        close_appearance(page)
        assert snapshot(page)==original
        assert page.evaluate('parseFloat(getComputedStyle(document.body).fontSize)')==20
        card_color=page.locator('#quizBox').evaluate('e=>getComputedStyle(e).backgroundColor')
        import re
        alpha=[float(value) for value in re.findall(r'[\d.]+',card_color)]
        assert len(alpha)==3 or alpha[-1]>=.86, card_color
        visible_content(page)
        page.evaluate('scrollTo(0,0)')
        page.screenshot(path=str(OUT/'qa-detailed-image-ui20-desktop.png'))
        page.set_viewport_size({'width':320,'height':568})
        mode(page, 'quiz')
        geometry(page)
        visible_content(page)
        page.screenshot(path=str(OUT/'qa-detailed-image-ui20-mobile.png'))
        assert snapshot(page)==original
        page.locator('#appearanceToggle').click()
        page.locator('[data-background-choice=mint]').click()
        page.locator('#appearanceFontSize').select_option('17')
        close_appearance(page)
        for name in ['reading','kanji','grammar','exam','quiz']:
            mode(page,name)
            geometry(page)
        assert snapshot(page)==original
        assert page.evaluate('referenceMarker')==marker
        report['checks'].append('Detailed local image, opacity floor, UI20, original attempt across study areas; no reload.')

        # Late feature styles must share the same visual language. Start one
        # real grammar drill and one real untimed exam, without replacing them.
        page.set_viewport_size({'width':1440,'height':900})
        mode(page,'grammar')
        for key in page.locator('[data-gr-drill]').first.evaluate('''e=>{
          const keys=[];for(let p=e.parentElement;p;p=p.parentElement)
            if(p.tagName==='DETAILS'&&!p.open&&p.dataset.mobileKey)keys.unshift(p.dataset.mobileKey);
          return keys;}'''):
            page.locator(f'[data-mobile-key="{key}"] > summary').click()
        page.locator('[data-gr-drill]').first.click()
        page.wait_for_selector('#grQuestionTitle')
        grammar_prompt=page.locator('#grQuestionTitle').evaluate('e=>parseFloat(getComputedStyle(e).fontSize)')
        assert grammar_prompt>=28, grammar_prompt
        if page.locator('.gr-option').count():
            page.locator('.gr-option').first.click()
            assert page.locator('.gr-option input:checked').count()==1
            checked=page.locator('.gr-option:has(input:checked) > span')
            assert teal(checked.evaluate('e=>getComputedStyle(e).borderColor'))
            assert page.locator('.gr-option span[lang]').first.evaluate('e=>parseFloat(getComputedStyle(e).fontSize)')>=18
        page.screenshot(path=str(OUT/'qa-grammar-active-desktop.png'))
        mode(page,'exam')
        for key in page.locator('#exMinutes').evaluate('''e=>{
          const keys=[];for(let p=e.parentElement;p;p=p.parentElement)
            if(p.tagName==='DETAILS'&&!p.open&&p.dataset.mobileKey)keys.unshift(p.dataset.mobileKey);
          return keys;}'''):
            page.locator(f'[data-mobile-key="{key}"] > summary').click()
        page.locator('#exMinutes').select_option('0')
        page.locator('[data-ex-start="chapter45-1"]').click()
        page.wait_for_selector('[data-ex-answer="0"]')
        page.locator('[data-ex-answer="0"]').click()
        page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
        assert page.locator('#exQuestionHeading').evaluate('e=>parseFloat(getComputedStyle(e).fontSize)')<=16
        assert page.locator('.ex-prompt').evaluate('e=>parseFloat(getComputedStyle(e).fontSize)')>=28
        assert page.locator('.ex-option > span').first.evaluate('e=>parseFloat(getComputedStyle(e).fontSize)')>=18
        assert page.locator('.ex-option b').all_text_contents()==list('ABCD')
        assert teal(page.locator('.ex-option[aria-pressed=true]').evaluate('e=>getComputedStyle(e).borderColor'))
        page.screenshot(path=str(OUT/'qa-exam-active-desktop.png'))
        mode(page,'quiz')
        assert snapshot(page)==original
        report['checks'].append('Actual grammar/exam prompts and A-D options retain large shared typography and selected teal state after lazy CSS loads.')

        # Exercise the longest REAL meaning in a disposable all-921 quiz. This
        # catches a selector aimed at .quiz-options when the real DOM uses
        # #quizOptions.options-grid. No synthetic text or question replacement.
        long_context=browser.new_context(viewport={'width':1440,'height':900},reduced_motion='reduce')
        long_context.route('https://**/*',lambda route:route.abort())
        long_page=long_context.new_page()
        long_page.on('pageerror',lambda error:errors.append(str(error)))
        long_page.goto(URL)
        ready(long_page)
        mode(long_page,'quiz')
        long_page.locator('input[name=quizCount][value=all]').check()
        long_page.locator('.quiz-start-btn').click()
        assert long_page.locator('#quizQuestionMap button').count()==921
        long_fixture=long_page.evaluate('''()=>quizOptionSets.flatMap((options,index)=>options.map(text=>({index,text,
          length:text.length,word:quizQuestions[index].k}))).reduce((longest,item)=>item.length>longest.length?item:longest)''')
        # The current bank's longest original meaning is 54 characters. Its
        # length is asserted as a real useful fixture, not fabricated to reach 60.
        assert long_fixture['length']>=50,long_fixture
        disclosure=long_page.locator('[data-mobile-key="quiz-map"]')
        if not disclosure.evaluate('e=>e.open'):
            disclosure.locator(':scope > summary').click()
        long_page.locator('#quizQuestionMap button').nth(long_fixture['index']).click()
        assert long_page.evaluate('quizIndex')==long_fixture['index']
        long_page.wait_for_function('getComputedStyle(document.querySelector("#quizOptions")).gridTemplateColumns.trim().split(" ").filter(Boolean).length===1')
        long_layout=long_page.locator('#quizOptions').evaluate('''e=>{
          const r=e.getBoundingClientRect(),s=getComputedStyle(e);
          return {display:s.display,columns:s.gridTemplateColumns,width:r.width,
            options:[...e.querySelectorAll('.quiz-opt-btn')].map(button=>{
              const r=button.getBoundingClientRect(),label=button.querySelector('.quiz-option-text');
              return {x:r.x,width:r.width,text:label.textContent,clipped:label.scrollWidth>label.clientWidth+2||label.scrollHeight>label.clientHeight+2};})};}''')
        assert long_layout['display']=='grid',long_layout
        assert long_fixture['text'] in [option['text'] for option in long_layout['options']],long_fixture
        assert all(option['width']>=long_layout['width']-2 and not option['clipped'] for option in long_layout['options']),long_layout
        assert len({round(option['x'],1) for option in long_layout['options']})==1,long_layout
        long_page.locator('#quizOptions').scroll_into_view_if_needed()
        long_page.screenshot(path=str(OUT/'qa-long-real-vocabulary-options.png'))
        report['long_option_regression']={'fixture':long_fixture,'layout':long_layout}
        report['checks'].append('The longest real option from an all-921 quiz wraps in one full-width column without clipping, reached through the real question-map disclosure/button.')
        long_context.close()

        # Existing explicit values remain authoritative after changing defaults.
        legacy = browser.new_context(viewport={'width':1440,'height':900})
        legacy.add_init_script('''localStorage.setItem('dekiru_appearance_v1',JSON.stringify({version:1,theme:'dark',
          background:'sakura',glassAlpha:.82,glassBlur:14,uiSize:18}));localStorage.setItem('dekiru_theme','dark');''')
        saved = legacy.new_page()
        saved.on('pageerror', lambda error: errors.append(str(error)))
        saved.goto(URL.replace('/index.html','/dekiru-nihongo/index.html'))
        ready(saved)
        persisted=saved.evaluate('Appearance.getState()')
        assert persisted['theme']=='dark' and persisted['background']=='sakura' and persisted['glassAlpha']==.82 and persisted['glassBlur']==14 and persisted['uiSize']==18, persisted
        saved.reload()
        ready(saved)
        assert saved.evaluate('Appearance.getState().glassAlpha')==.82
        legacy.close()
        local = browser.new_context(viewport={'width':390,'height':844})
        offline = local.new_page()
        offline.on('pageerror', lambda error: errors.append(str(error)))
        offline.goto((ROOT/'index.html').as_uri())
        ready(offline)
        mode(offline,'quiz')
        offline.locator('#appearanceToggle').click()
        assert offline.locator('#appearanceDialog').is_visible()
        close_appearance(offline)
        geometry(offline)
        local.close()
        report['checks'].append('Explicit existing settings preserved, Pages prefix/reload and file://.')
        hashes_path=ROOT/'audits/evidence/reference/before-hashes.json'
        if hashes_path.exists():
            before=json.loads(hashes_path.read_text(encoding='utf-8'))
            changed=[name for name,digest in before.items() if name.startswith('data/') and hashlib.sha256((ROOT/name).read_bytes()).hexdigest()!=digest]
            assert not changed, changed
            report['checks'].append('All data/* hashes match the pre-refinement workspace snapshot.')
        assert not errors, errors
        assert not failed_http, failed_http
        report.update({'browser':browser.browser_type.name,'version':browser.version,'initial':initial,'unhandled_errors':errors,'http_failures':failed_http})
        (OUT/'reference-ui-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
        browser.close()
    print('PASS: reference geometry, teal selected answers/A-D, large offline typography, 5 widths light/dark, drawer focus/width, detailed image/UI20, unchanged quiz/data, saved old appearance, file:// and Pages prefix.')
finally:
    server.shutdown()
