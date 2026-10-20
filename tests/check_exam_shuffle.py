"""Stable shuffled papers, old attempts/history, and detailed solutions after submission."""
import json,subprocess,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
KEY='dekiru_exam_attempt_v1'
HISTORY='dekiru_exam_history_v1'

with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':1280,'height':1000},reduced_motion='reduce')
    context.route('https://**/*',lambda r:r.abort())
    page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri());page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    old_data=subprocess.run(['git','show','4763d2b:data/exams.js'],capture_output=True,check=True,encoding='utf-8',cwd=ROOT).stdout
    old_fps=page.evaluate('''source=>{
      const old=Function('window',source+';return window.DEKIRU_EXAMS;')({});
      return old.map(e=>({id:e.id,fingerprint:ExamCore.fingerprint(e)}));
    }''',old_data)
    assert page.evaluate('''old=>old.every(o=>{const e=DEKIRU_EXAMS.find(e=>e.id===o.id);return ExamCore.fingerprint(e)===o.fingerprint || e.legacyFingerprints.includes(o.fingerprint);})''',old_fps)
    assert page.evaluate('''()=>{
      const originals=JSON.stringify(DEKIRU_EXAMS.map(e=>e.questions.map(q=>q.id)));
      for(let n=0;n<200;n++){
        const a=ExamCore.shuffleOrder(45),b=ExamCore.shuffleOrder(45,a);
        if(!ExamCore.validOrder(a,45)||!ExamCore.validOrder(b,45)||a.every((x,i)=>x===i)||b.every((x,i)=>x===a[i]))return false;
      }
      const originalRandom=Math.random;Math.random=()=>0.999999;
      try {if(ExamCore.shuffleOrder(45).every((n,i)=>n===i))return false;
        if(ExamCore.shuffleOrder(2,[1,0]).join()!=='1,0')return false;
      } finally{Math.random=originalRandom;}
      return JSON.stringify(DEKIRU_EXAMS.map(e=>e.questions.map(q=>q.id)))===originals;
    }''')
    assert page.evaluate('''()=>DEKIRU_EXAMS.flatMap(e=>e.questions).every(q=>{
      const s=q.solution;return s.completed&&s.meaning&&s.rule.length>70&&s.options.length===4&&s.options.every(t=>t.length>10)&&s.options[q.answer]===q.explanation;
    })''')
    doc=page.evaluate('ExamCore.documentOf(DEKIRU_EXAMS[1])')
    assert all(q['solution'] for q in doc['exam']['questions'])
    bad=json.loads(json.dumps(doc));bad['exam']['questions'][0]['solution']['options'].pop()
    assert page.evaluate('d=>{try{ExamCore.validate(d);return false}catch(e){return e.message.includes("4 lựa chọn")}}',bad)
    page.locator('[data-mode=exam]').click();page.select_option('#exMinutes','0');page.locator('[data-ex-start="chapter45-1"]').click()
    first=page.evaluate(f'JSON.parse(localStorage.getItem("{KEY}"))')
    assert len(first['order'])==45 and first['order']!=list(range(45))
    q=page.evaluate('(i)=>DEKIRU_EXAMS[1].questions[i]',first['order'][0])
    assert page.locator('#exRun .ex-prompt').inner_text()==q['prompt']
    assert page.locator('.ex-solution').count()==0
    page.locator(f'[data-ex-answer="{q["answer"]}"]').click();page.locator('[data-ex-flag]').click()
    page.locator('[data-ex-next]').click();page.locator('[data-mode=flashcard]').click();page.locator('[data-mode=exam]').click()
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached');page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()
    restored=page.evaluate(f'JSON.parse(localStorage.getItem("{KEY}"))')
    assert restored['order']==first['order'] and restored['answers'][0]==q['answer'] and restored['flags'][0]
    page.locator('[data-ex-jump="0"]').click();assert page.locator('#exRun .ex-prompt').inner_text()==q['prompt']
    page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click()
    assert page.locator('#exCorrect').inner_text()=='1' and page.locator('#exSkipped').inner_text()=='44'
    assert page.locator('.ex-solution').count()==45
    assert page.locator('.ex-review').first.locator('.ex-solution-standard p').first.inner_text()==q['solution']['completed']
    page.locator('.ex-option-analysis summary').first.click()
    for j,option in enumerate(q['options']):
        item=page.locator('.ex-option-analysis').first.locator('dl > div').nth(j)
        assert item.locator('dt span').inner_text()==option
        assert item.locator('dd').inner_text()==q['solution']['options'][j]
    with page.expect_download() as saved:page.locator('[data-ex-result-export]').click()
    exported=json.loads(Path(saved.value.path()).read_text(encoding='utf-8'))
    assert exported['order']==first['order']
    assert exported['questions'][0]['sourceNumber']==first['order'][0]+1
    assert exported['questions'][0]['solution']==q['solution'] and exported['questions'][0]['chosen']==q['answer']
    page.locator('[data-ex-restart]').click()
    second=page.evaluate(f'JSON.parse(localStorage.getItem("{KEY}"))')
    assert second['order']!=first['order'] and not any(a is not None for a in second['answers'])
    page.locator('[data-ex-tab=history]').click();page.locator('[data-ex-history]').first.click()
    assert page.locator('.ex-review').first.locator('.ex-prompt').inner_text()==q['prompt']
    assert page.locator('#exCorrect').inner_text()=='1'
    # Every review must retain its key/notes in the same shuffled order, including image sources.
    for e in page.evaluate('DEKIRU_EXAMS.map(e=>e.id)'):
        page.evaluate('''id=>{
          const e=DEKIRU_EXAMS.find(e=>e.id===id),order=ExamCore.shuffleOrder(45);
          localStorage.setItem('dekiru_exam_attempt_v1',JSON.stringify({id:crypto.randomUUID(),examId:id,fingerprint:ExamCore.fingerprint(e),order,
            answers:order.map((n,i)=>i%3===0?e.questions[n].answer:i%3===1?(e.questions[n].answer+1)%4:null),flags:Array(45).fill(false),index:0,startedAt:Date.now()-10000,minutes:0,submittedAt:Date.now()}));
        }''',e)
        page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached');page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()
        assert [page.locator('#ex'+name).inner_text() for name in ['Correct','Wrong','Skipped']]==['15','15','15']
        expected=page.evaluate('''()=>{const s=JSON.parse(localStorage.getItem('dekiru_exam_attempt_v1'));const e=DEKIRU_EXAMS.find(e=>e.id===s.examId);return s.order.map(i=>e.questions[i]);}''')
        assert page.locator('.ex-solution').count()==45
        actual=page.locator('.ex-review').evaluate_all('''cards=>cards.map(c=>({prompt:c.querySelector('.ex-prompt').textContent,completed:c.querySelector('.ex-solution-standard p').textContent,reasons:[...c.querySelectorAll('.ex-option-analysis dd')].map(e=>e.textContent),source:c.querySelector('a')?.getAttribute('href')}))''')
        from urllib.parse import unquote
        for got,want in zip(actual,expected):
            assert got['prompt']==want['prompt'] and got['completed']==want['solution']['completed']
            assert got['reasons']==want['solution']['options']
            if want.get('source'):assert unquote(got['source'])==want['source']
    # Existing papers, including the clarified 今年 question, keep original positions and choices.
    for old in old_fps:
        page.evaluate('''o=>{
          const e=DEKIRU_EXAMS.find(e=>e.id===o.id),s={id:'legacy-'+o.id,examId:o.id,fingerprint:o.fingerprint,answers:e.questions.map(q=>q.answer),flags:Array(45).fill(false),index:7,startedAt:Date.now()-1000,minutes:0,submittedAt:null};
          localStorage.setItem('dekiru_exam_attempt_v1',JSON.stringify(s));localStorage.setItem('dekiru_exam_history_v1',JSON.stringify([{...s,id:'old-result',submittedAt:Date.now()}]));
        }''',old)
        page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached');page.locator('[data-mode=exam]').click();page.locator('[data-ex-resume]').click()
        assert 'Câu 8:' in page.locator('#exMapStatus').inner_text()
        page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click()
        assert page.locator('#exCorrect').inner_text()=='45'
        page.locator('[data-ex-tab=history]').click();page.locator('[data-ex-history="old-result"]').click()
        assert page.locator('#exCorrect').inner_text()=='45'
    # A corrupted order must never silently attach answers to different questions.
    page.evaluate("localStorage.setItem('dekiru_exam_attempt_v1',JSON.stringify({...JSON.parse(localStorage.getItem('dekiru_exam_attempt_v1')),order:Array(45).fill(0)}))")
    page.reload();page.wait_for_selector('#examMode[data-ready=true]',state='attached');page.locator('[data-mode=exam]').click()
    assert 'không còn khớp' in page.locator('#exNotice').inner_text() and not page.locator('[data-ex-resume]').count()
    # Plain imported explanation remains visible without generated/guessed teaching notes.
    assert page.evaluate('d=>{delete d.exam.questions[0].solution;return !ExamCore.validate(d).questions[0].solution}',doc)
    page.locator('[data-ex-start="chapter45-1"]').click();page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click()
    for width in [320,390,1280]:
      page.set_viewport_size({'width':width,'height':950})
      for theme in ['light','dark']:
        page.evaluate('(t)=>document.documentElement.dataset.theme=t',theme)
        page.locator('.ex-option-analysis summary').first.click()
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,theme)
        page.screenshot(path=str(ROOT/f'.work/exam-solutions-{width}-{theme}.png'),full_page=True)
    assert not errors,errors
    browser.close()
    firefox=p.firefox.launch(headless=True)
    fp=firefox.new_page();fp.goto((ROOT/'index.html').as_uri());fp.wait_for_selector('#examMode[data-ready=true]',state='attached')
    fp.locator('[data-mode=exam]').click();fp.select_option('#exMinutes','0');fp.locator('[data-ex-start="chapter45-2"]').click()
    order=fp.evaluate(f'JSON.parse(localStorage.getItem("{KEY}")).order');assert order!=list(range(45))
    fp.reload();fp.wait_for_selector('#examMode[data-ready=true]',state='attached');fp.locator('[data-mode=exam]').click();fp.locator('[data-ex-resume]').click()
    assert fp.evaluate(f'JSON.parse(localStorage.getItem("{KEY}")).order')==order
    fp.locator('[data-ex-submit]').click();fp.locator('#exConfirmAccept').click();assert fp.locator('.ex-solution').count()==45
    firefox.close()
    print('PASS: 180 detailed solutions, option/source alignment, 200 randomized plans, stable answers/flags/order across reload/history/export, legacy progress and grades, invalid-order protection, import validation, responsive light/dark, Firefox file://.')
