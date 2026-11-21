"""End-to-end Playwright verification for #Thi FE exams (3 SU26 source + 4 mock)."""
import http.server
import json
import sys
import threading
from functools import partial
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from fontTools.ttLib import TTFont
from browser_support import launch, continue_exam


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), partial(Quiet, directory=str(ROOT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{server.server_port}/index.html'
OUT = ROOT / '.work' / 'fe-verify'
OUT.mkdir(parents=True, exist_ok=True)


def open_exam(page):
    button = page.locator('[data-mode=exam]')
    if not button.is_visible():
        page.locator('#mobileMore').click()
    button.click()
    page.wait_for_selector('#examMode[data-ready=true]', state='attached')


def settled(page):
    page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')


try:
    with sync_playwright() as p:
        browser = launch(p)
        ctx = browser.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce')
        ctx.route('https://**/*', lambda r: r.abort())
        page = ctx.new_page()
        errors = []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.goto(URL)

        # Sidebar badge reflects 15 exams.
        assert page.locator('[data-badge-mode="exam"]').inner_text().strip() == '15'
        open_exam(page)

        # Filter to #Thi FE and verify all 7 FE cards & #Thi FE hashtags.
        page.select_option('#exScope', 'fe')
        cards = page.locator('#exLibrary .ex-card')
        assert cards.count() == 7
        ids = cards.evaluate_all('els => els.map(el => el.dataset.exId)')
        assert ids == [
            'fe-su26-re-1',
            'fe-su26-fe-2',
            'fe-su26-b5re-3',
            'fe-mock-1',
            'fe-mock-2',
            'fe-mock-3',
            'fe-mock-4',
        ]
        hashtags = page.locator('#exLibrary .ex-card .ex-hashtag').all_inner_texts()
        assert hashtags == ['#Thi FE'] * 7

        # Verify glyph coverage across all 7 FE exams.
        fe_text = page.evaluate('JSON.stringify(DEKIRU_EXAMS.filter(e => e.kind.startsWith("fe-")))')
        cmap = TTFont(ROOT / 'assets/fonts/NotoSansJP-study.woff2').getBestCmap()
        cmap.update(TTFont(ROOT / 'assets/fonts/DekiruComponents.woff2').getBestCmap())
        import re
        missing = sorted({c for c in fe_text if re.match(r'[\u3000-\u30ff\u3400-\u9fff\uff66-\uff9f]', c) and ord(c) not in cmap})
        assert not missing, missing
        page.evaluate('document.fonts.ready')
        page.screenshot(path=str(OUT / 'fe-library-1280-light.png'))

        # Start 31-question SU26 B5 RE exam, check reading passage PN=6, reload restore, and grade.
        page.select_option('#exMinutes', '0')
        page.locator('[data-ex-start="fe-su26-b5re-3"]').click()
        page.wait_for_selector('[data-ex-answer]')
        assert page.locator('.ex-title-row .ex-hashtag').inner_text() == '#Thi FE'
        assert page.locator('#exRun .ex-map button').count() == 31
        assert page.locator('#exAnsweredCount').inner_text() == '0/31 đã chọn'
        state31 = page.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
        assert len(state31['order']) == 31
        assert state31['order'][-4:] == [27, 28, 29, 30]

        # Jump to Q28 (index 27) and inspect reading passage PN=6.
        page.locator('[data-ex-jump="27"]').click()
        settled(page)
        assert page.locator('.ex-passage').is_visible()
        assert 'PN=6' in page.locator('.ex-passage-head').inner_text()
        assert '起（お）きました' in page.locator('.ex-passage-text').inner_text()
        page.screenshot(path=str(OUT / 'fe-reading-pn6-1280-light.png'))

        # Answer Q28 correctly and Q29 wrongly, flag Q29, reload and verify restore.
        q28_ans = page.evaluate('DEKIRU_EXAMS.find(e=>e.id==="fe-su26-b5re-3").questions[27].answer')
        q29_ans = page.evaluate('DEKIRU_EXAMS.find(e=>e.id==="fe-su26-b5re-3").questions[28].answer')
        page.locator(f'[data-ex-answer="{q28_ans}"]').click()
        settled(page)
        page.locator('[data-ex-jump="28"]').click()
        settled(page)
        page.locator(f'[data-ex-answer="{(q29_ans + 1) % 4}"]').click()
        settled(page)
        page.locator('[data-ex-flag]').click()
        settled(page)
        before = page.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')

        page.reload()
        open_exam(page)
        assert '2/31 câu đã chọn' in page.locator('[data-ex-resume]').locator('..').inner_text()
        page.locator('[data-ex-resume]').click()
        continue_exam(page)
        after = page.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
        assert after['order'] == before['order'] and after['answers'] == before['answers'] and after['flags'] == before['flags']

        page.locator('[data-ex-submit]').click()
        page.locator('#exConfirmAccept').click()
        page.wait_for_selector('#exScore')
        assert [page.locator('#ex' + s).inner_text() for s in ['Correct', 'Wrong', 'Skipped']] == ['1', '1', '29']
        assert page.locator('.ex-solution').count() == 31
        assert page.locator('.ex-review .ex-passage').count() == 4
        assert page.locator('.ex-title-row .ex-hashtag').inner_text() == '#Thi FE'

        # Start newly authored 30-question FE mock 1, verify passage grouping, submit & export JSON.
        page.locator('[data-ex-back]').first.click()
        page.select_option('#exScope', 'fe')
        page.locator('[data-ex-start="fe-mock-1"]').click()
        page.wait_for_selector('[data-ex-answer]')
        state30 = page.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
        assert len(state30['order']) == 30 and state30['order'][-3:] == [27, 28, 29]
        page.locator('[data-ex-jump="27"]').click()
        settled(page)
        assert 'FE-M1' in page.locator('.ex-passage-head').inner_text()
        page.locator('[data-ex-submit]').click()
        page.locator('#exConfirmAccept').click()
        page.wait_for_selector('#exScore')
        assert page.locator('.ex-solution').count() == 30
        with page.expect_download() as dl:
            page.locator('[data-ex-result-export]').click()
        exported = json.loads(Path(dl.value.path()).read_text(encoding='utf-8'))
        assert len(exported['questions']) == 30
        assert exported['questions'][27]['passage'] and 'FE-M1' in exported['questions'][27]['passageTitle']

        # Responsive 320px & 390px light & dark checks with zero overflow.
        for width, height in [(320, 568), (390, 844), (1280, 900)]:
            page.set_viewport_size({'width': width, 'height': height})
            for theme in ['light', 'dark']:
                page.evaluate('(t)=>document.body.dataset.theme=t', theme)
                page.locator('[data-ex-back]').first.click()
                page.select_option('#exScope', 'fe')
                page.evaluate('scrollTo(0,0)')
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), (width, theme, 'fe-lib')
                if width in (390, 1280) and theme == 'dark':
                    page.screenshot(path=str(OUT / f'fe-library-{width}-{theme}.png'))
                page.locator('[data-ex-resume]').click()
                page.wait_for_selector('#exScore')
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), (width, theme, 'fe-result')

        assert not errors, errors
        browser.close()
    print('PASS: 7 #Thi FE papers UI/hashtag/filter, 30 & 31 question runs, PN=6 & FE-M1 reading passages, reload/score/export, font coverage, 320/390/1280 light/dark, zero JS errors.')
finally:
    server.shutdown()
    server.server_close()
