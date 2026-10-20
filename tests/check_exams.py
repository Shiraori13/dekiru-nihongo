"""Full-paper grading, restore, import validation, images, timer and mobile UI.

Run: python tests/check_exams.py (Playwright/Edge/Firefox installed locally).
"""
import http.server,json,sys,threading
from functools import partial
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass

server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_port}/index.html'
def open_exam(page,exam='chapter45-1',minutes='0'):
    page.locator('[data-mode=exam]').click();page.wait_for_selector('#examMode[data-ready=true]')
    page.select_option('#exMinutes',minutes);page.locator(f'[data-ex-start="{exam}"]').click()
    if page.locator('#exConfirm').is_visible():page.locator('#exConfirmAccept').click()

def seed(page,exam='chapter45-1',answers=None,minutes=0,age=0):
    page.evaluate('''([id,answers,minutes,age])=>{
      const e=DEKIRU_EXAMS.find(e=>e.id===id);
      localStorage.setItem('dekiru_exam_attempt_v1',JSON.stringify({id:crypto.randomUUID(),examId:id,
        fingerprint:ExamCore.fingerprint(e),answers:answers||Array(45).fill(null),flags:Array(45).fill(false),
        index:0,startedAt:Date.now()-age,minutes,submittedAt:null}));
    }''',[exam,answers,minutes,age])
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()

try:
 with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':1280,'height':1000},reduced_motion='reduce')
    context.route('https://**/*',lambda route:route.abort())
    page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto(url);page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    audit=page.evaluate('''()=>{
      const units=GRAMMAR_DATA.units.filter(u=>u.lesson<6).map(u=>u.id);
      return DEKIRU_EXAMS.map(e=>({id:e.id,count:e.questions.length,unique:new Set(e.questions.map(q=>q.prompt)).size,
        valid:ExamCore.validate(ExamCore.documentOf(e)).questions.length,
        categories:e.questions.reduce((r,q)=>(r[q.category]=(r[q.category]||0)+1,r),{}),
        units:units.filter(u=>e.questions.some(q=>q.unit===u)),lessons:[...new Set(e.questions.map(q=>q.lesson))],
        sources:e.questions.filter(q=>q.source).map(q=>q.source),added:e.questions.filter(q=>q.origin==='added').map(q=>q.id)}));
    }''')
    assert len(audit)==4
    for e in audit:
        assert e['count']==e['unique']==e['valid']==45,e
        for path in e['sources']:assert (ROOT/path).is_file(),path
        if e['id'].startswith('chapter'):
            assert len(e['units'])==19 and set(e['lessons'])=={4,5},e
            assert e['categories']==dict(reading=7,spelling=4,vocabulary=3,grammar=25,dialogue=3,translation=3),e
        else:assert len(e['sources'])==44 and e['added']==['sample-18']
    assert page.evaluate('new Set(DEKIRU_EXAMS.filter(e=>e.kind==="authored").flatMap(e=>e.questions.map(q=>q.prompt))).size')==135
    open_exam(page)
    assert page.locator('#exLibrary .ex-vocabulary-list > div').count()==127
    assert not page.locator('#vocabFilters').is_visible()
    assert page.locator('#exRun .ex-map button').count()==45
    assert page.locator('#exRun .is-answered').count()==0
    for index in [0,4,44]:
        page.locator(f'[data-ex-jump="{index}"]').click()
        assert page.locator('#exMapStatus').inner_text()==f'Câu {index+1}: Chưa chọn'
        assert page.locator('.ex-option[aria-pressed=true]').count()==0
    page.locator('[data-ex-jump="0"]').click();page.keyboard.press('2')
    assert page.locator('[data-ex-answer="1"]').get_attribute('aria-pressed')=='true'
    assert page.locator('#exRun .is-answered').count()==1
    page.locator('[data-ex-flag]').click();assert page.locator('#exRun .is-flagged').count()==1
    page.locator('[data-ex-clear]').click();assert page.locator('#exRun .is-answered').count()==0
    page.locator('[data-ex-answer="2"]').click();page.locator('[data-ex-next]').click()
    assert page.locator('.ex-option[aria-pressed=true]').count()==0
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()
    assert page.locator('#exMapStatus').inner_text()=='Câu 2: Chưa chọn'
    page.locator('[data-ex-jump="0"]').click()
    assert page.locator('[data-ex-answer="2"]').get_attribute('aria-pressed')=='true'
    assert page.locator('[data-ex-flag]').get_attribute('aria-pressed')=='true'
    page.locator('[data-ex-submit]').click();assert page.locator('#exConfirm').is_visible()
    page.locator('#exConfirmCancel').click();assert not page.locator('#exConfirm').is_visible()
    # Grade every question from all four exams through real UI; keyboard and map never reveal keys.
    for exam in page.evaluate('DEKIRU_EXAMS.map(e=>e.id)'):
        page.locator('[data-ex-back]').click();page.select_option('#exMinutes','0')
        page.locator(f'[data-ex-start="{exam}"]').click()
        if page.locator('#exConfirm').is_visible():page.locator('#exConfirmAccept').click()
        answers=page.evaluate('(id)=>{const e=DEKIRU_EXAMS.find(e=>e.id===id),s=JSON.parse(localStorage.getItem("dekiru_exam_attempt_v1"));return s.order.map(i=>e.questions[i].answer);}',exam)
        for i,a in enumerate(answers):
            page.locator(f'[data-ex-jump="{i}"]').click();page.locator(f'[data-ex-answer="{a}"]').click()
        assert page.locator('.ex-progress').get_attribute('value')=='45'
        assert page.locator('.ex-review').count()==0
        page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click()
        assert page.locator('#exCorrect').inner_text()=='45' and page.locator('#exScore').inner_text()=='10.00'
        assert page.locator('.ex-review.is-correct').count()==45
        assert page.locator('#exRun .ex-map .is-correct').count()==45
    answers=page.evaluate('DEKIRU_EXAMS[1].questions.map((q,i)=>i===0?q.answer:i===1?(q.answer+1)%4:null)')
    seed(page,answers=answers)
    page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click()
    assert [page.locator('#ex'+s).inner_text() for s in ['Correct','Wrong','Skipped']]==['1','1','43']
    page.select_option('#exReviewFilter','wrong');assert page.locator('.ex-review').count()==1
    page.select_option('#exReviewFilter','skipped');assert page.locator('.ex-review').count()==43
    page.locator('[data-ex-jump="1"]').click();assert page.locator('.ex-review').count()==45
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()
    assert page.locator('#exSkipped').inner_text()=='43'
    page.locator('[data-ex-tab=history]').click();assert page.locator('.ex-history-row').count()==5
    page.locator('[data-ex-history]').first.click();assert page.locator('#exScore').inner_text()=='0.22'
    with page.expect_download() as saved:
        page.locator('[data-ex-result-export]').click()
    result=json.loads(Path(saved.value.path()).read_text(encoding='utf-8'))
    assert result['correct']==1 and result['skipped']==43
    # Timeout is wall-clock based; reload and changing modes cannot pause it.
    seed(page,minutes=1,age=61000)
    assert page.locator('#exSkipped').inner_text()=='45'
    assert 'Tự động nộp' in page.locator('#exRun').inner_text()
    # A running paper must still expire while viewing an older result.
    seed(page,exam='chapter45-2',minutes=1,age=57000)
    page.locator('[data-ex-tab=history]').click();page.locator('[data-ex-history]').first.click()
    page.wait_for_function('JSON.parse(localStorage.getItem("dekiru_exam_attempt_v1")).submittedAt>0')
    page.locator('[data-ex-tab=library]').click();page.locator('[data-ex-resume]').click()
    assert 'Bài 4–5 · Đề 02' in page.locator('#exRun h2').first.inner_text()
    assert page.locator('#exSkipped').inner_text()=='45'
    # Import malformed/valid/untrusted documents, preview before persist, and reload IndexedDB.
    page.locator('[data-ex-tab=builder]').click()
    document=page.evaluate('ExamCore.documentOf(DEKIRU_EXAMS[1])')
    def upload(data,name='exam.json'):
        previous=page.locator('#exNotice').inner_text()
        page.locator('#exImportFile').set_input_files({'name':name,'mimeType':'application/json','buffer':json.dumps(data,ensure_ascii=False).encode()})
        page.wait_for_function('(previous)=>!document.querySelector("#exPreview").hidden || document.querySelector("#exNotice").textContent!==previous',arg=previous)
    bad=json.loads(json.dumps(document));bad['exam']['questions'].pop();upload(bad)
    assert 'đúng 45' in page.locator('#exNotice').inner_text()
    bad=json.loads(json.dumps(document));bad['exam']['questions'][0]['answer']=4;upload(bad)
    assert 'answer' in page.locator('#exNotice').inner_text()
    bad=json.loads(json.dumps(document));bad['exam']['questions'][1]['prompt']=bad['exam']['questions'][0]['prompt'];upload(bad)
    assert 'trùng' in page.locator('#exNotice').inner_text()
    bad=json.loads(json.dumps(document));bad['exam']['questions'][0]['options'][1]=bad['exam']['questions'][0]['options'][0];upload(bad)
    assert 'lựa chọn bị trùng' in page.locator('#exNotice').inner_text()
    bad=json.loads(json.dumps(document));bad['exam']['questions'][0]['image']='data:image/svg+xml;base64,PHN2Zz4=';upload(bad)
    assert 'PNG/JPEG/WebP' in page.locator('#exNotice').inner_text()
    document['exam']['title']='<img src=x onerror="window.injected=true">'
    upload(document);assert page.locator('#exPreview').is_visible()
    assert page.locator('#exPreview img').count()==0 and page.evaluate('window.injected') is None
    assert page.locator('.ex-preview-list article').count()==45
    page.locator('[data-ex-import-cancel]').click()
    assert page.locator('#exEditTitle').input_value()==document['exam']['title']
    page.locator('[data-ex-editor-preview]').click()
    page.locator('[data-ex-import-confirm]').click();page.wait_for_selector('[data-ex-delete]')
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    page.locator('[data-mode=exam]').click();assert page.locator('[data-ex-delete]').count()==1
    imported=page.locator('[data-ex-delete]').get_attribute('data-ex-delete')
    page.select_option('#exMinutes','0');page.locator(f'[data-ex-start="{imported}"]').click()
    assert page.locator('.ex-options button').count()==4
    # Partial draft, real image import, fields and image survive save/reload.
    page.locator('[data-ex-tab=builder]').click()
    page.locator('[data-ex-editor-reset]').click();page.locator('#exConfirmAccept').click()
    page.fill('#exEditTitle','Đề từ ảnh')
    page.fill('#exEditPrompt','Chọn đáp án trong ảnh câu 1.')
    for i,l in enumerate('ABCD'):page.fill('#exEditOption'+str(i),l)
    page.select_option('#exEditAnswer','2')
    first_image=sorted((ROOT/'Material').rglob('*.png'))[0]
    page.locator('#exImportImages').set_input_files(str(first_image))
    page.wait_for_selector('#exEditImage img');assert page.locator('#exEditImage img').evaluate('(im)=>im.complete && im.naturalWidth>0')
    page.locator('#exEditImage [data-ex-picture]').click();assert page.locator('#exImageViewer').is_visible()
    page.locator('[data-ex-zoom]').click();assert page.locator('[data-ex-zoom]').get_attribute('aria-pressed')=='true'
    page.keyboard.press('Escape');assert not page.locator('#exImageViewer').is_visible()
    page.locator('[data-ex-draft-save]').click();page.wait_for_function('document.querySelector("#exNotice").textContent.includes("Đã lưu bản nháp")')
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    page.locator('[data-mode=exam]').click();page.locator('[data-ex-tab=builder]').click()
    assert page.locator('#exEditTitle').input_value()=='Đề từ ảnh'
    assert page.locator('#exEditPrompt').input_value()=='Chọn đáp án trong ảnh câu 1.'
    assert page.locator('#exEditImage img').count()==1
    assert page.locator('#exEditAnswer').input_value()=='2'
    page.locator('[data-ex-editor-next]').click();assert page.locator('#exEditPrompt').input_value()==''
    page.locator('[data-ex-editor-preview]').click();assert 'Tên đề' not in page.locator('#exEditorError').inner_text()
    assert 'Câu 2' in page.locator('#exEditorError').inner_text()
    # Fill all 45 rows using the same controls, then import and solve an image-backed exam.
    for i in range(1,45):
        page.fill('#exEditPrompt',f'Chọn đáp án trong ảnh câu {i+1}.')
        for j,l in enumerate('ABCD'):page.fill('#exEditOption'+str(j),l)
        page.select_option('#exEditAnswer','2')
        if i<44:page.locator('[data-ex-editor-next]').click()
    page.locator('[data-ex-editor-preview]').click();assert page.locator('#exPreview').is_visible()
    page.locator('[data-ex-import-confirm]').click();page.wait_for_function('document.querySelectorAll("[data-ex-delete]").length===2')
    card=page.locator('.ex-card').filter(has=page.get_by_role('heading',name='Đề từ ảnh',exact=True))
    image_id=card.locator('[data-ex-start]').get_attribute('data-ex-start')
    page.select_option('#exMinutes','0');card.locator('[data-ex-start]').click()
    page.locator('#exConfirmAccept').click()
    image_position=page.evaluate('JSON.parse(localStorage.getItem("dekiru_exam_attempt_v1")).order.indexOf(0)')
    page.locator(f'[data-ex-jump="{image_position}"]').click()
    assert page.locator('#exRun .ex-question-image').count()==1
    page.locator('[data-ex-back]').click()
    with page.expect_download() as saved:page.locator(f'[data-ex-export="{image_id}"]').click()
    exported=json.loads(Path(saved.value.path()).read_text(encoding='utf-8'))
    assert exported['exam']['questions'][0]['image'].startswith('data:image/jpeg;base64,')
    page.locator(f'[data-ex-delete="{image_id}"]').click();page.locator('#exConfirmCancel').click()
    assert page.locator(f'[data-ex-delete="{image_id}"]').count()==1
    page.locator(f'[data-ex-delete="{image_id}"]').click();page.locator('#exConfirmAccept').click()
    page.wait_for_function('(id)=>!document.querySelector(`[data-ex-delete="${id}"]`)',arg=image_id)
    assert not page.locator('[data-ex-resume]').count()
    # Responsive light/dark states, navigation and no layout overflow.
    for width in [320,390,1280]:
      page.set_viewport_size({'width':width,'height':950})
      for theme in ['light','dark']:
        page.evaluate('(t)=>document.documentElement.dataset.theme=t',theme)
        page.locator('[data-ex-tab=library]').click()
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,theme,'library')
        open_exam(page)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,theme,'run')
        page.screenshot(path=str(ROOT/f'.work/exam-{width}-{theme}.png'),full_page=True)
        page.locator('[data-ex-tab=builder]').click()
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,theme,'builder')
    # Storage failures do not break built-in exams or claim progress was saved.
    blocked=browser.new_context()
    blocked.add_init_script('Storage.prototype.setItem=function(){throw new DOMException("blocked","SecurityError")}; Object.defineProperty(window,"indexedDB",{get(){throw Error("blocked")}})')
    blocked_page=blocked.new_page();blocked_page.goto(url);open_exam(blocked_page)
    blocked_page.locator('[data-ex-answer="0"]').click()
    assert 'Không lưu được' in blocked_page.locator('#exSaveStatus').inner_text()
    assert blocked_page.locator('#exRun .is-answered').count()==1
    assert not errors,errors
    browser.close()
    # Firefox, including local file:// entrypoint, uses the same bank and restore logic.
    firefox=p.firefox.launch(headless=True)
    fp=firefox.new_page(viewport={'width':390,'height':844});ff_errors=[];fp.on('pageerror',lambda e:ff_errors.append(str(e)))
    fp.goto((ROOT/'index.html').as_uri());open_exam(fp)
    fp.locator('[data-ex-answer="0"]').click();fp.reload();fp.wait_for_selector('#examMode[data-ready=true]',state='attached')
    fp.locator('[data-mode=exam]').click();fp.locator('[data-ex-resume]').click()
    assert fp.locator('[data-ex-answer="0"]').get_attribute('aria-pressed')=='true'
    assert fp.evaluate('document.documentElement.scrollWidth<=innerWidth')
    assert not ff_errors,ff_errors
    firefox.close()
    print('PASS: 4x45 exam audit, all 180 answers graded, marks, restore, wrong/skipped review, timer, history, JSON validation/XSS, preview/import/export/delete, 45-row image editor, draft persistence, blocked storage, 320/390/1280 light/dark, Firefox file://.')
finally:server.shutdown();server.server_close()
