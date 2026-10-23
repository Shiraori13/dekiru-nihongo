"""Real UI regression cases with independent expected answers and two-tab races."""
import http.server, threading, sys, json
from pathlib import Path
from functools import partial
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
URL=f'http://127.0.0.1:{server.server_port}/index.html'
KEY='dekiru_exam_attempt_v1'
def ready(page,mode):
    page.evaluate('(m)=>switchMode(m)',mode)
    page.wait_for_selector('#examMode[data-ready=true]' if mode=='exam' else '#grDetailTitle',state='attached')
def state(page):return page.evaluate(f'JSON.parse(localStorage.getItem("{KEY}"))')
def answers(page,n):page.wait_for_function('(n)=>JSON.parse(localStorage.dekiru_exam_attempt_v1).answers.filter(Number.isInteger).length===n',arg=n)
try:
 with sync_playwright() as p:
    browser=launch(p);ctx=browser.new_context(viewport={'width':1280,'height':1000},reduced_motion='reduce');ctx.route('https://**/*',lambda r:r.abort())
    a=ctx.new_page();errors=[];a.on('pageerror',lambda e:errors.append(str(e)));a.goto(URL)
    # Generate every available 料理 entry under actual engine; no duplicate meaning.
    a.evaluate('switchMode("quiz")')
    for lesson in [1,2]:
      a.evaluate('''l=>{showQuizSetup(true);currentFiltered=RAW_VOCAB.filter(w=>w.k==='料理'&&w.l===l);document.querySelector('input[name=quizCount][value="custom"]').checked=true;document.querySelector('#quizCustomCount').value='1';startQuizEngine();}''',lesson)
      options=a.evaluate('quizOptionSets[0]')
      assert sum('nấu ăn' in opt.lower() or 'món ăn /' in opt.lower() for opt in options)==1,options
      a.get_by_role('button',name='Nấu ăn / Món ăn' if lesson==1 else 'Món ăn / Nấu ăn',exact=True).click()
      a.locator('#quizSubmit').click();assert a.locator('#finalScore').inner_text()=='100%'
    # A legacy option spelling still receives the independently expected mark.
    assert a.evaluate('QuizCore.equivalent("Nấu ăn / Món ăn","Món ăn / Nấu ăn")')
    for stored,alternative in [('Nấu ăn / Món ăn','Món ăn / Nấu ăn'),('Thầy/Cô giáo','Giáo viên')]:
      # A compatible in-memory snapshot may contain a reviewed alternate label.
      # Exercise the actual answer handler, submission and review, not only core.
      a.evaluate('''([stored,alternative])=>{
        showQuizSetup(true);currentFiltered=[RAW_VOCAB.find(w=>w.m===stored)];
        document.querySelector('input[name=quizCount][value="custom"]').checked=true;
        document.querySelector('#quizCustomCount').value='1';startQuizEngine();
        quizOptionSets[0]=quizOptionSets[0].map(o=>o===stored?alternative:o);
        renderQuizQuestion();
      }''',[stored,alternative])
      a.get_by_role('button',name=alternative,exact=True).click()
      a.locator('#quizSubmit').click()
      assert a.locator('#finalScore').inner_text()=='100%'
      assert a.locator('#quizCorrectCount').inner_text()=='1'
      assert a.locator('.quiz-review-card.incorrect').count()==0
    ready(a,'grammar');a.locator('[data-gr-drill]').click();a.locator('[data-gr-hint]').click()
    a.locator('[data-gr-next]').click()
    before=a.evaluate('JSON.parse(localStorage.dekiru_grammar_v1).session')
    a.locator('#grLearnTab').click();a.locator('[data-gr-drill]').click()
    assert a.locator('.study-confirm').is_visible()
    a.keyboard.press('Escape')
    assert a.evaluate('JSON.parse(localStorage.dekiru_grammar_v1).session')==before
    a.locator('#grLearnTab').click();a.locator('[data-gr-drill]').click();a.locator('[data-continue]').click()
    assert a.evaluate('JSON.parse(localStorage.dekiru_grammar_v1).session')==before
    a.locator('#grLearnTab').click();a.locator('[data-gr-drill]').click();a.locator('[data-replace]').click()
    assert a.evaluate('JSON.parse(localStorage.dekiru_grammar_v1).session.index')==0
    a.evaluate('''()=>{const s=JSON.parse(localStorage.dekiru_grammar_v1);s.session.optionOrders='broken';s.session.hintOpen='broken';localStorage.dekiru_grammar_v1=JSON.stringify(s);}''')
    a.reload();ready(a,'grammar');a.locator('#grPracticeTab').click();assert a.locator('#grQuestionTitle').is_visible()
    ready(a,'exam');a.select_option('#exMinutes','0');a.locator('[data-ex-start="chapter45-1"]').click();a.wait_for_selector('[data-ex-answer]')
    a.locator('[data-ex-answer="0"]').click();answers(a,1)
    b=ctx.new_page();b.on('pageerror',lambda e:errors.append(str(e)));b.goto(URL);ready(b,'exam');b.locator('[data-ex-resume]').click()
    assert b.locator('[data-ex-answer="1"]').is_disabled()
    a.locator('[data-ex-next]').click();a.wait_for_function("document.querySelector('#exMapStatus').textContent.startsWith('Câu 2:')")
    a.locator('[data-ex-answer="1"]').click();answers(a,2)
    b.locator('[data-ex-next]').click();assert len([x for x in state(a)['answers'] if x is not None])==2
    # Explicit takeover atomically revokes A, including its already queued stale edits.
    b.locator('[data-ex-takeover]').click();b.locator('#exConfirmAccept').click();b.wait_for_function('!document.querySelector("[data-ex-answer]").disabled')
    b.locator('[data-ex-flag]').click();b.wait_for_function('JSON.parse(localStorage.dekiru_exam_attempt_v1).flags.some(Boolean)')
    a.wait_for_function('document.querySelector("[data-ex-answer]").disabled')
    assert len([x for x in state(a)['answers'] if x is not None])==2
    b.locator('[data-ex-submit]').click();b.locator('#exConfirmAccept').click();b.wait_for_selector('#exScore')
    first=state(b);assert first['submittedAt']
    b.locator('[data-ex-restart]').click();b.wait_for_selector('[data-ex-answer]')
    fresh=state(b);assert fresh['id']!=first['id'];assert fresh['order']!=first['order']
    # A direct old-client write cannot override authoritative attempt or history.
    a.evaluate('(s)=>localStorage.setItem("dekiru_exam_attempt_v1",JSON.stringify(s))',first)
    b.locator('[data-ex-answer="2"]').click();answers(b,1)
    assert state(b)['id']==fresh['id']
    assert a.evaluate('JSON.parse(localStorage.dekiru_exam_history_v1).filter(h=>h.id===JSON.parse(localStorage.dekiru_exam_history_v1)[0].id).length')==1
    # Owner closes; takeover can continue immediately without waiting for lease expiry.
    latest=state(b)
    b.close();a.reload();ready(a,'exam');a.locator('[data-ex-resume]').click()
    if a.locator('[data-ex-answer="0"]').is_disabled():
      a.locator('[data-ex-takeover]').click();a.locator('#exConfirmAccept').click()
    a.wait_for_function('!document.querySelector("[data-ex-answer]").disabled')
    restored=state(a)
    assert restored['answers']==latest['answers'] and restored['answers'][0]==2
    assert restored['id']==fresh['id'] and restored['order']==fresh['order']
    assert restored['flags']==latest['flags'] and restored['startedAt']==fresh['startedAt']
    assert not errors,errors
    browser.close()
 print('PASS: equivalent meanings; grammar cancel/continue/new preserve state; two tabs, takeover, stale legacy writes, new-attempt fencing, single history and owner close.')
finally:server.shutdown()
