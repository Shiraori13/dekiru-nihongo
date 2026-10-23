"""Actual-user regressions for full-width study layout and daily visit streak.

The date fixtures have independent expected results. UI assertions interact with
the original controls; no grading, study-state or layout code is patched.
"""
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance, geometry

OUT = ROOT / os.environ.get('DEKIRU_STUDY_LAYOUT_EVIDENCE_DIR', 'audits/evidence/study-layout')


def loaded(page):
    ready(page)
    page.wait_for_function('!!window.VisitStreak')
    page.evaluate('VisitStreak.ready')


def snapshot(page):
    return page.evaluate('''()=>({questions:quizQuestions,options:quizOptionSets,
      answers:quizAnswers,index:quizIndex,run:quizRun,state:quizState})''')


def theme(page, name):
    page.locator('#appearanceToggle').click()
    page.locator('#appearanceTheme' + name.title()).click()
    close_appearance(page)


def reveal(page, selector):
    keys = page.locator(selector).first.evaluate('''e=>{
      const keys=[];for(let p=e.parentElement;p;p=p.parentElement)
        if(p.tagName==='DETAILS'&&!p.open&&p.dataset.mobileKey)keys.unshift(p.dataset.mobileKey);
      return keys;}''')
    for key in keys:
        page.locator(f'[data-mobile-key="{key}"] > summary').click()


def bounds(page, selector):
    return page.locator(selector).first.evaluate('''e=>{
      const r=e.getBoundingClientRect(),s=getComputedStyle(e);
      return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom,
        font:parseFloat(s.fontSize),display:s.display};}''')


def header(page):
    width = page.viewport_size['width']
    result = {s:bounds(page, s) for s in ['header', '.nav-container', '.nav-controls',
              '#contextSearchToggle', '#streakButton', '#themeToggle']}
    streak = result['#streakButton']
    assert streak['width'] >= 42 and streak['height'] >= 42, result
    assert page.locator('#streakButton').get_attribute('aria-label'), result
    assert result['#themeToggle']['right'] <= width + 1, result
    if width > 760:
        # A single 24px inner inset remains, rather than a reserved empty lane.
        assert 12 <= result['header']['right'] - result['#themeToggle']['right'] <= 32, result
        if page.locator('#contextSearchToggle').is_visible():
            assert 4 <= streak['x'] - result['#contextSearchToggle']['right'] <= 20, result
            assert result['#contextSearchToggle']['width'] >= result['header']['width'] - 370, result
    else:
        result['brand'] = bounds(page, '.mobile-brand')
        result['appearance'] = bounds(page, '#appearanceToggle')
        controls = sorted([result['brand'], streak, result['appearance'], result['#themeToggle']], key=lambda r:r['x'])
        for left, right in zip(controls, controls[1:]):
            assert left['right'] <= right['x'] + 1, result
        assert result['#themeToggle']['right'] <= width - 4, result
        assert result['header']['height'] <= 90, result
    return result


def quiz_geometry(page):
    box, area = bounds(page, '#quizBox'), bounds(page, '#quizMode')
    assert abs(box['right'] - area['right']) <= 1, {'box':box, 'area':area}
    assert abs(box['x'] - area['x']) <= 1, {'box':box, 'area':area}
    assert page.locator('.quiz-opt-btn[aria-pressed=true]').count() == 1
    return {'panel':box, 'area':area}


def picker(page, name):
    if name == 'kanji':
        sidebar, detail = '.kanji-sidebar', '.kanji-word-card'
        selector, title, metadata = '#kanjiWordList .kanji-item', '#kanjiWordList .kanji-item strong', '#kanjiWordList .kanji-item span'
        reveal(page, '#kanjiLesson')
        page.locator('#kanjiLesson').select_option('6')
        assert page.locator(selector).count() > 3
        chosen = page.locator(selector).nth(3)
        expected = chosen.locator('strong').inner_text()
        chosen.click()
        assert page.locator('#kanjiWordTitle').inner_text() == expected
    else:
        sidebar, detail = '.gr-sidebar', '#grDetail'
        selector, title, metadata = '#grUnitList [data-gr-unit]', '#grUnitList strong', '#grUnitList small'
        reveal(page, '[data-gr-chapter="6"]')
        page.locator('[data-gr-chapter="6"]').click()
        reveal(page, selector)
        assert page.locator(selector).count() > 3
        chosen = page.locator(selector).nth(3)
        expected = chosen.locator('strong').inner_text()
        chosen.click()
        assert page.locator('#grDetailTitle').inner_text() == expected
    # CSS remains measurable when compact picker has closed after selection.
    result = {'sidebar':bounds(page, sidebar), 'detail':bounds(page, detail),
              'titleFont':bounds(page, title)['font'], 'metadataFont':bounds(page, metadata)['font'],
              'selected':expected}
    assert result['titleFont'] >= 16, result
    assert result['metadataFont'] >= 13, result
    if page.viewport_size['width'] > 1180:
        assert 280 <= result['sidebar']['width'] <= 380, result
        assert result['detail']['width'] >= 550, result
        assert result['detail']['x'] >= result['sidebar']['right'], result
        assert result['detail']['width'] >= result['sidebar']['width'] * 1.5, result
    else:
        assert result['detail']['width'] >= page.viewport_size['width'] - 160, result
    assert page.locator(selector + '[aria-current=true]').count() == 1
    return result


def shot(page, name, region=None):
    if region:
        page.locator(region).first.evaluate('''e=>scrollTo({top:Math.max(0,
          scrollY+e.getBoundingClientRect().top-document.querySelector('header').getBoundingClientRect().height-36),behavior:'instant'})''')
    else:
        page.evaluate('scrollTo(0,0)')
    page.screenshot(path=str(OUT / 'after' / name))


server, URL = serve()
(OUT / 'after').mkdir(parents=True, exist_ok=True)
report = {'layouts':[], 'streak':{}, 'checks':[]}
try:
    with sync_playwright() as p:
        browser = launch(p)
        report['browser'] = os.environ.get('DEKIRU_BROWSER','chromium')
        report['browserVersion'] = browser.version
        errors = []

        def context():
            ctx = browser.new_context(viewport={'width':1920,'height':1000},
                                      timezone_id='Asia/Ho_Chi_Minh', reduced_motion='reduce')
            ctx.route('https://**/*', lambda route:route.abort())
            return ctx

        ctx = context()
        page = ctx.new_page()
        page.on('pageerror', lambda e:errors.append(str(e)))
        page.goto(URL)
        loaded(page)
        assert page.evaluate('VisitStreak.getState().current') == 1
        assert page.evaluate('VisitStreak.getState().markedToday')
        assert page.locator('#streakCount').inner_text() == '1'
        mode(page,'quiz')
        page.locator('input[name=quizCount][value="10"]').check()
        page.locator('.quiz-start-btn').click()
        assert bounds(page, '#quizBox')['y'] >= bounds(page, 'header')['bottom'], 'Header obscures a new attempt'
        page.locator('.quiz-opt-btn').nth(1).click()
        page.locator('#quizNextQuestion').click()
        page.locator('.quiz-opt-btn').nth(2).click()
        attempt = snapshot(page)
        assert sum(answer is not None for answer in attempt['answers']) == 2
        for width,height in [(1920,1000),(1440,1000),(1280,1000),(768,1024),(390,844),(320,568)]:
            page.set_viewport_size({'width':width,'height':height})
            for color in ['light','dark']:
                theme(page,color)
                for name in ['flashcard','quiz','kanji','grammar']:
                    mode(page,name)
                    actual = {'width':width,'theme':color,'mode':name,'header':header(page)}
                    geometry(page)
                    if name == 'quiz':
                        actual['quiz'] = quiz_geometry(page)
                    if name in ['kanji','grammar']:
                        actual['picker'] = picker(page,name)
                    assert snapshot(page) == attempt, 'Responsive navigation or study picker replaced the partial quiz'
                    if width in [1920,390] or (width == 320 and color == 'dark'):
                        shot(page,f'{name}-{width}-{color}.png')
                        if name in ['kanji','grammar'] and width==1920:
                            shot(page,f'{name}-selection-{width}-{color}.png', '.kanji-layout' if name=='kanji' else '.gr-layout')
                        if name in ['kanji','grammar'] and width<=760:
                            reveal(page,'#kanjiLesson' if name=='kanji' else '#grUnitList [data-gr-unit]')
                            shot(page,f'{name}-picker-open-{width}-{color}.png',f'[data-mobile-key="{name}-picker"]')
                            # Close the same native disclosure rather than resetting it.
                            page.locator(f'[data-mobile-key="{name}-picker"] > summary').click()
                    report['layouts'].append(actual)
                mode(page,'quiz')
                page.locator('#streakButton').click()
                assert page.locator('#streakDialog').evaluate('d=>d.open&&d.matches(":modal")')
                for _ in range(4):
                    page.keyboard.press('Tab')
                    assert page.evaluate('!!document.activeElement.closest("#streakDialog")')
                if width in [1920,390]:
                    shot(page,f'streak-{width}-{color}.png')
                page.keyboard.press('ArrowRight')
                page.keyboard.press('Enter')
                # Enter may close via focused Close, or leave modal open.
                if page.locator('#streakDialog').evaluate('d=>d.open'):
                    page.keyboard.press('Escape')
                assert page.evaluate('document.activeElement.id') == 'streakButton'
                assert snapshot(page) == attempt, 'Streak dialog leaked study shortcuts'
        report['checks'].append('Six widths, both themes, full header/quiz width, original selections, readable pickers and main content, modal keyboard focus.')

        # Reset only the appearance, keeping the visit record and partial quiz.
        saved_visit = page.evaluate('VisitStreak.getState()')
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceReset').click()
        close_appearance(page)
        assert page.evaluate('VisitStreak.getState()') == saved_visit
        assert snapshot(page) == attempt

        # The same visit cannot increment again, including another tab.
        second = ctx.new_page()
        second.on('pageerror',lambda e:errors.append(str(e)))
        second.goto(URL)
        loaded(second)
        assert second.evaluate('VisitStreak.getState().current') == 1
        second.reload()
        loaded(second)
        assert second.evaluate('VisitStreak.getState().current') == 1
        assert second.evaluate('VisitStreak.getState().totalDays') == 1
        second.close()
        ctx.close()

        # Independent date expectations, including local calendar boundary.
        dates = context()
        dp = dates.new_page()
        dp.on('pageerror',lambda e:errors.append(str(e)))
        dp.clock.install(time=datetime(2026,10,22,17,5,tzinfo=timezone.utc))  # Oct23 00:05 in Vietnam.
        dp.goto(URL)
        loaded(dp)
        assert dp.evaluate('VisitStreak.getState().today') == '2026-10-23'
        assert dp.evaluate('VisitStreak.getState().current') == 1
        dp.clock.set_system_time(datetime(2026,10,23,17,5,tzinfo=timezone.utc))
        dp.reload()
        loaded(dp)
        assert dp.evaluate('VisitStreak.getState().current') == 2
        assert dp.evaluate('VisitStreak.getState().best') == 2
        dp.reload()
        loaded(dp)
        assert dp.evaluate('VisitStreak.getState().current') == 2
        dp.clock.set_system_time(datetime(2026,10,25,17,5,tzinfo=timezone.utc))
        dp.reload()
        loaded(dp)
        actual = dp.evaluate('VisitStreak.getState()')
        assert actual['today'] == '2026-10-26' and actual['current'] == 1 and actual['best'] == 2 and actual['totalDays'] == 3, actual
        assert actual['dates'] == ['2026-10-23','2026-10-24','2026-10-26'], actual
        dp.locator('#streakButton').click()
        assert dp.locator('#streakCalendar li').count() == 14
        assert dp.locator('#streakCalendar li[data-visited=true]').count() == 3
        assert dp.locator('#streakCalendar li[aria-current=date]').count() == 1
        report['streak']['consecutiveAndGap'] = actual
        dp.keyboard.press('Escape')
        # Malformed/future records must not boost the score or break the app.
        dp.evaluate('''()=>{localStorage.setItem('dekiru_visit_v1:2026-10-25','broken');
          localStorage.setItem('dekiru_visit_v1:2026-10-27',JSON.stringify({version:1,date:'2026-10-27'}));
          localStorage.setItem('dekiru_visit_v1:2026-02-30',JSON.stringify({version:1,date:'2026-02-30'}));}''')
        dp.reload()
        loaded(dp)
        assert dp.evaluate('VisitStreak.getState().current') == 1
        assert dp.evaluate('VisitStreak.getState().totalDays') == 3
        dates.close()
        report['checks'].append('Visit day1; same-day reload/two tabs stable; local midnight; next day2; gap resets1/best2; real14-day marks; malformed/future records ignored.')

        # Staying on the visible page across midnight also records the new day.
        midnight = context()
        mp = midnight.new_page()
        mp.on('pageerror',lambda e:errors.append(str(e)))
        mp.clock.install(time=datetime(2026,10,23,16,59,59,tzinfo=timezone.utc))
        mp.goto(URL)
        loaded(mp)
        assert mp.evaluate('VisitStreak.getState().today') == '2026-10-23'
        mp.clock.fast_forward(2100)
        assert mp.evaluate('VisitStreak.getState().today') == '2026-10-24'
        assert mp.evaluate('VisitStreak.getState().current') == 2
        assert mp.locator('#streakButton').get_attribute('data-lit') == 'true'
        report['streak']['visibleMidnight'] = mp.evaluate('VisitStreak.getState()')
        midnight.close()

        # When localStorage is denied, study remains usable and status is honest.
        blocked = context()
        blocked.add_init_script('''Object.defineProperty(window,'localStorage',{get(){throw Error('blocked regression fixture')}});''')
        bp = blocked.new_page()
        bp.on('pageerror',lambda e:errors.append(str(e)))
        bp.goto(URL)
        loaded(bp)
        assert bp.evaluate('VisitStreak.getState().storage') == 'session'
        assert bp.evaluate('VisitStreak.getState().current') == 1
        assert bp.locator('#streakStorageFlag').is_visible()
        bp.locator('#streakButton').click()
        assert 'phiên' in bp.locator('#streakStorageStatus').inner_text().lower()
        bp.keyboard.press('Escape')
        mode(bp,'quiz')
        bp.locator('input[name=quizCount][value="5"]').check()
        bp.locator('.quiz-start-btn').click()
        bp.locator('.quiz-opt-btn').first.click()
        assert bp.locator('.quiz-opt-btn[aria-pressed=true]').count() == 1
        report['streak']['blockedStorage'] = bp.evaluate('VisitStreak.getState()')
        blocked.close()

        # Keep the static/local deployment contract for the new controls too.
        local = context()
        for address in [ROOT.joinpath('index.html').as_uri(),URL.replace('/index.html','/dekiru-nihongo/index.html')]:
            lp = local.new_page()
            lp.on('pageerror',lambda e:errors.append(str(e)))
            lp.goto(address)
            loaded(lp)
            geometry(lp)
            header(lp)
            lp.locator('#streakButton').click()
            assert lp.locator('#streakCalendar li').count() == 14
            lp.keyboard.press('Escape')
            mode(lp,'quiz')
            lp.locator('input[name=quizCount][value="5"]').check()
            lp.locator('.quiz-start-btn').click()
            lp.locator('.quiz-opt-btn').first.click()
            quiz_geometry(lp)
            lp.close()
        local.close()
        report['checks'].append('Blocked storage session fallback, file:// and GitHub Pages project prefix; no unhandled JS errors.')
        assert not errors,errors
        report['unhandledErrors'] = errors
        (OUT / f'results-{report["browser"]}.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
        browser.close()
    print('PASS: full-width header/quiz, readable functional pickers, partial quiz preserved, daily streak dates/reload/tabs/storage/focus, static deployment.')
finally:
    server.shutdown()
