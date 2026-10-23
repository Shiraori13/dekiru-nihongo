"""Imported document loading must never delete another tab's authoritative work."""
import http.server
import sys
import threading
from functools import partial
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), partial(Quiet, directory=str(ROOT)))
threading.Thread(target=server.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{server.server_port}/index.html'


def open_exam(page, wait=True):
    page.goto(URL)
    page.evaluate('void switchMode("exam")')
    if wait:
        page.wait_for_selector('#examMode[data-ready=true]', state='attached')


def instrument(page, prefix):
    def replace(route):
        response = route.fetch()
        route.fulfill(response=response, body=prefix + '\n' + response.text())
    page.route('**/assets/exams.js', replace)


def persisted(page):
    return page.evaluate('''()=>new Promise((resolve,reject)=>{
      const request=indexedDB.open('dekiru_attempts_v2',1);
      request.onsuccess=()=>{
        const database=request.result,tx=database.transaction('state','readonly');
        const read=tx.objectStore('state').get('current');
        tx.oncomplete=()=>{database.close();resolve({attempt:read.result.attempt,history:read.result.history});};
        tx.onerror=()=>reject(tx.error);
      };request.onerror=()=>reject(request.error);
    })''')


def seed_import(page, exam_id):
    page.evaluate('''async id=>{
      const e={...ExamCore.validate(ExamCore.documentOf(DEKIRU_EXAMS.find(e=>e.id==='chapter45-1'))),id};
      e.title='Imported tab regression '+id;
      await ExamCore.store.put(e);
    }''', exam_id)
    page.reload()
    page.evaluate('void switchMode("exam")')
    page.wait_for_selector('#examMode[data-ready=true]', state='attached')
    page.select_option('#exMinutes', '0')
    page.locator(f'[data-ex-start="{exam_id}"]').click()
    page.wait_for_selector('[data-ex-answer="1"]')
    page.locator('[data-ex-answer="1"]').click()
    page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
    page.locator('[data-ex-submit]').click()
    page.locator('#exConfirmAccept').click()
    page.wait_for_selector('#exScore')
    page.locator('[data-ex-restart]').click()
    page.wait_for_selector('[data-ex-answer="2"]')
    page.locator('[data-ex-answer="2"]').click()
    page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
    return persisted(page)


try:
    with sync_playwright() as playwright:
        browser = launch(playwright)
        errors = []

        def context():
            ctx = browser.new_context()
            ctx.route('https://**/*', lambda route: route.abort())
            ctx.on('page', lambda page: page.on('pageerror', lambda error: errors.append(str(error))))
            return ctx

        # Pause A after its document snapshot, while B imports and starts a new exam.
        ctx = context()
        b = ctx.new_page()
        open_exam(b)
        a = ctx.new_page()
        instrument(a, '''{
          const initialize=AttemptStore.prototype.init;
          AttemptStore.prototype.init=async function(...args){
            window.importInitReached=true;
            await new Promise(resolve=>window.releaseImportInit=resolve);
            return initialize.apply(this,args);
          };
        }''')
        open_exam(a, wait=False)
        a.wait_for_function('window.importInitReached===true')
        before = seed_import(b, 'import-init-race')
        a.evaluate('releaseImportInit()')
        a.wait_for_selector('#examMode[data-ready=true]', state='attached')
        assert persisted(a) == before
        assert 'import-init-race' in a.locator('#exLibrary').inner_text()
        assert a.locator('#exLibraryStatus').is_hidden()
        ctx.close()

        # An already open tab resolves a new imported active attempt and its history.
        ctx = context()
        a, b = ctx.new_page(), ctx.new_page()
        open_exam(a)
        open_exam(b)
        before = seed_import(b, 'import-live-tab')
        a.wait_for_function('document.querySelector("#exLibrary").textContent.includes("import-live-tab") && !!document.querySelector("[data-ex-resume]")')
        assert persisted(a) == before
        a.locator('[data-ex-resume]').click()
        a.wait_for_selector('[data-ex-answer="2"]')
        assert a.locator('[data-ex-answer="2"]').is_disabled()
        assert a.locator('[data-ex-answer="2"]').get_attribute('aria-pressed') == 'true'
        a.locator('[data-ex-tab="history"]').click()
        assert 'import-live-tab' in a.locator('#exHistory').inner_text()
        ctx.close()

        # Failing document reads preserve both records; an explicit retry recovers.
        ctx = context()
        b = ctx.new_page()
        open_exam(b)
        before = seed_import(b, 'import-read-retry')
        a = ctx.new_page()
        instrument(a, '''{
          window.failImportedReads=true;
          const list=ExamCore.store.list;
          ExamCore.store.list=()=>window.failImportedReads
            ? Promise.reject(Error('transient document read')) : list();
        }''')
        open_exam(a)
        assert persisted(a) == before
        assert 'vẫn được giữ' in a.locator('#exLibraryStatus').inner_text()
        assert a.locator('[data-ex-start="chapter45-1"]').is_disabled()
        a.evaluate('window.failImportedReads=false')
        a.locator('[data-ex-library-retry]').click()
        a.wait_for_function('document.querySelector("#exLibraryStatus").hidden')
        assert 'import-read-retry' in a.locator('#exLibrary').inner_text()
        assert 'Đã tải lại đề' in a.locator('#exNotice').inner_text()
        assert persisted(a) == before
        ctx.close()
        assert not errors, errors
        browser.close()
    print('PASS: stale imported-library initialization, live-tab import refresh, retained attempt/history on document read failure, and explicit retry recovery.')
finally:
    server.shutdown()
