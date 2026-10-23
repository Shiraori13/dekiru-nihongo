"""Atomic authority, stale revision fencing, simultaneous expiry and storage failures."""
import sys,http.server,threading
from pathlib import Path
from functools import partial
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start();URL=f'http://127.0.0.1:{server.server_port}/index.html'
def open_exam(page):
    page.goto(URL);page.evaluate('async()=>{await switchMode("exam");await FeatureLoader.ensure("exam");}')
def start(page):
    page.locator('[data-ex-start="chapter45-1"]').click();page.wait_for_selector('[data-ex-answer]')
try:
 with sync_playwright() as p:
    browser=launch(p);ctx=browser.new_context();ctx.route('https://**/*',lambda r:r.abort())
    errors=[];a=ctx.new_page();a.on('pageerror',lambda e:errors.append(str(e)));open_exam(a);a.select_option('#exMinutes','0');start(a)
    a.evaluate('''async()=>{window.probe=new AttemptStore();await probe.init(null,[]);await probe.claim(probe.current.attempt.id,true);}''')
    old=a.evaluate('({id:probe.current.attempt.id,rev:probe.current.revision})')
    b=ctx.new_page();b.on('pageerror',lambda e:errors.append(str(e)));open_exam(b)
    b.evaluate('''async()=>{window.probe=new AttemptStore();await probe.init(null,[]);await probe.claim(probe.current.attempt.id,true);}''')
    a.evaluate('async()=>{await probe.refresh();await probe.claim(probe.current.attempt.id,true);}')
    assert a.evaluate('async old=>(await probe.change(old.id,old.rev,{type:"answer",index:1,value:1})).conflict',old)
    # Both proposals share one expected revision; exactly one can commit.
    got=a.evaluate('''async()=>{const {attempt,revision}=probe.current;const r=await Promise.all([probe.change(attempt.id,revision,{type:'answer',index:0,value:3}),probe.change(attempt.id,revision,{type:'answer',index:1,value:1})]);return r.map(x=>!!x.changed);}''')
    assert got==[True,False],got
    assert a.evaluate('probe.current.attempt.answers[0]')==3
    assert a.evaluate('probe.current.attempt.answers[1]') is None
    b.close();ctx.close()
    # The read-only tab can finalize a due deadline atomically. Neither stale
    # editors nor simultaneous ticks can create a duplicate history row.
    ctx=browser.new_context();ctx.route('https://**/*',lambda r:r.abort());a=ctx.new_page();open_exam(a);start(a)
    original=a.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
    b=ctx.new_page();open_exam(b);b.locator('[data-ex-resume]').click()
    assert b.locator('[data-ex-answer="0"]').is_disabled()
    b.clock.install();b.clock.fast_forward(45*60000+100)
    b.wait_for_function('JSON.parse(localStorage.dekiru_exam_attempt_v1).submittedAt>0')
    a.wait_for_function('JSON.parse(localStorage.dekiru_exam_history_v1).length===1')
    state=a.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
    assert state['submittedAt']==original['startedAt']+45*60000
    assert state['answers']==[None]*45
    a.evaluate('''async()=>{const reader=new AttemptStore();await reader.init(null,[]);await reader.expire(reader.current.attempt.id);await reader.expire(reader.current.attempt.id);}''')
    assert a.evaluate('JSON.parse(localStorage.dekiru_exam_history_v1).length')==1
    ctx.close()
    # Both stores blocked: usable session, no false claim of persistent saving.
    ctx=browser.new_context();ctx.route('https://**/*',lambda r:r.abort())
    ctx.add_init_script('''for(const k of ['localStorage','indexedDB'])Object.defineProperty(window,k,{get(){throw Error('blocked')}});''')
    a=ctx.new_page();a.on('pageerror',lambda e:errors.append(str(e)));open_exam(a);a.select_option('#exMinutes','0');start(a)
    a.locator('[data-ex-answer="2"]').click();a.wait_for_function('document.querySelector("[data-ex-answer=\\"2\\"]").getAttribute("aria-pressed")==="true"')
    assert 'Chỉ giữ trong phiên' in a.locator('#exSaveStatus').inner_text()
    a.locator('[data-ex-submit]').click();a.locator('#exConfirmAccept').click();a.wait_for_selector('#exScore');ctx.close()
    # A mid-session write failure creates a separate memory copy, leaving the
    # persisted original untouched. It never falls back to unsafe LS overwrites.
    ctx=browser.new_context();ctx.route('https://**/*',lambda r:r.abort());a=ctx.new_page();open_exam(a);a.select_option('#exMinutes','0');start(a)
    original=a.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
    a.evaluate('''()=>{const original=IDBDatabase.prototype.transaction;IDBDatabase.prototype.transaction=function(names,mode,...rest){if(mode==='readwrite'&&names==='state')throw Error('quota test');return original.call(this,names,mode,...rest);};}''')
    a.locator('[data-ex-answer="1"]').click();a.wait_for_function('document.querySelector("[data-ex-answer=\\"1\\"]").getAttribute("aria-pressed")==="true"')
    assert 'bản sao' in a.locator('#exNotice').inner_text()
    assert a.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')==original
    assert 'Chỉ giữ trong phiên' in a.locator('#exSaveStatus').inner_text()
    assert not errors,errors
    browser.close()
 print('PASS: atomic CAS conflict, one editor, read-only timeout, exact deadline, once-only history, blocked stores and isolated memory copy on write failure.')
finally:server.shutdown()
