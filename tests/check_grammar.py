"""Exercise grading, lesson coverage, persistence and responsive grammar UI."""
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch, install_legacy_readiness, reset_attempt_store
install_legacy_readiness()

with sync_playwright() as p:
    browser=launch(p)
    context=browser.new_context(viewport={'width':1280,'height':1000},reduced_motion='reduce')
    context.route('https://**/*',lambda route:route.abort())
    page=context.new_page();errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    page.locator('[data-mode=grammar]').click()
    data=page.evaluate('GRAMMAR_DATA')
    units=data['units'];questions=data['questions']
    assert len(units)==37, len(units)
    assert len(questions)==666
    assert all(sum(q['unit']==u['id'] for q in questions)==18 for u in units)
    assert len({q['id'] for q in questions})==len(questions)
    assert {(u['lesson'],u['topic']) for u in units}=={(l,t) for l in range(4,8) for t in range(3)}
    for q in questions:
        assert q['unit'] in {u['id'] for u in units}
        if q['type']=='choice':
            assert len(set(q['options']))==len(q['options'])
            assert q['answer'] in q['options']
        if q['type']=='order': assert ''.join(q['tokens'])==q['answer']
    assert page.locator('#vocabFilters').is_hidden()
    for lesson in range(4,8):
        page.locator(f'[data-gr-chapter="{lesson}"]').click()
        assert page.locator('#grUnitList button').count()==sum(u['lesson']==lesson for u in units)
        assert page.locator('#grTopic option').count()==4
    page.locator('[data-gr-chapter=all]').click()
    page.locator('#grSearch').fill('khong-co-mau-nay')
    assert page.locator('#grUnitList button').count()==0
    page.locator('#grPracticeTab').click()
    assert page.locator('#grStart').is_disabled()
    page.locator('#grSearch').fill('')
    # All questions: answer via actual controls; verify no grading until submit.
    page.locator('#grCount').fill(page.locator('#grCount').get_attribute('max'))
    page.locator('#grStart').click()
    assert page.locator('.gr-map-answered').count()==0
    ids=page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.ids')
    byid={q['id']:q for q in questions}
    def answer(q):
        if q['type']=='choice':
            page.locator('input[name=grAnswer]').evaluate_all('(els,a)=>els.find(el=>el.value===a).click()',q['answer'])
        elif q['type']=='fill':
            page.locator('#grFill').fill(q.get('answers',[q['answer']])[-1])
        else:
            for i in range(len(q['tokens'])): page.locator(f'[data-gr-token="{i}"]').click()
    seen=set();first_state=None
    while True:
        for n,id in enumerate(ids):
            answer(byid[id])
            assert page.locator('.gr-review').count()==0
            if n<len(ids)-1: page.locator('[data-gr-next]').click()
        assert page.locator('.gr-map-answered').count()==len(ids)
        page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
        assert page.locator('.gr-map-answered').count()==len(ids)
        page.locator('[data-gr-submit]').click()
        assert page.locator('.gr-review.is-correct').count()==len(ids)
        assert page.locator('[data-gr-retry]').is_disabled()
        if first_state is None:first_state=page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1"))')
        seen.update(ids)
        if len(seen)==len(questions):break
        # Restore another compatible batch to cover all questions, never a leaking pair.
        ids=page.evaluate('(seen)=>GrammarSupport.plan(GRAMMAR_DATA.questions.filter(q=>!seen.includes(q.id))).map(q=>q.id)',list(seen))
        page.evaluate('''ids=>{const saved=JSON.parse(localStorage.getItem('dekiru_grammar_v1'));saved.session={ids,answers:{},hints:{},kanjiHints:{},index:0,submitted:false};localStorage.setItem('dekiru_grammar_v1',JSON.stringify(saved));}''',ids)
        page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
    assert len(seen)==666
    page.evaluate('(state)=>localStorage.setItem("dekiru_grammar_v1",JSON.stringify(state))',first_state)
    page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
    # Wrong/partial/skipped answers and retry only failed questions.
    page.locator('[data-gr-again]').click()
    ids=page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.ids')
    q=byid[ids[0]]
    if q['type']=='fill': page.locator('#grFill').fill('sai')
    elif q['type']=='choice': page.locator('input[name=grAnswer]').evaluate_all('(els,a)=>els.find(el=>el.value!==a).click()',q['answer'])
    else: page.locator('[data-gr-token]').first.click()
    page.locator('[data-gr-next]').click(); answer(byid[ids[1]])
    page.locator('[data-gr-hint]').click()
    page.locator('[data-gr-submit]').click()
    assert page.locator('.gr-review.is-correct').count()==1
    assert page.locator('.gr-review.is-wrong, .gr-review.is-skipped').count()==len(ids)-1
    assert len(page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).weak'))==len(ids)-1
    page.locator('[data-gr-review-unit]').first.click()
    assert page.locator('#grLearn').is_visible()
    page.locator('[data-gr-done]').click()
    assert page.locator('#grDoneCount').inner_text().startswith('1 /')
    page.locator('#grPracticeTab').click();page.locator('[data-gr-retry]').click()
    retried=page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.ids')
    assert len(retried)==len(ids)-1 and ids[1] not in retried
    # A different filter must leave the active attempt unchanged.
    page.locator('[data-gr-chapter="4"]').click()
    assert page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.ids')==retried
    if not page.locator('#grType').is_visible():
        page.locator('[data-mobile-key="grammar-setup"] > summary').click()
    page.locator('#grType').select_option('fill');page.locator('#grCount').fill('0')
    page.locator('#grStart').click()
    assert page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.ids')==retried
    page.locator('#grCount').fill('1')
    page.locator('#grLearnTab').click();page.locator('[data-gr-chapter="7"]').click()
    page.locator('[data-gr-unit="g7-te"]').click()
    assert page.locator('.gr-te-table tbody tr').count()==16
    for width in [1280,390,320]:
        page.set_viewport_size({'width':width,'height':900})
        for theme in ['light','dark']:
            page.evaluate('(theme)=>document.body.dataset.theme=theme',theme)
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
            page.screenshot(path=str(ROOT/f'.work/grammar-{width}-{theme}.png'),full_page=True)
    page.locator('[data-gr-drill]').click(); page.locator('.study-confirm [data-replace]').click() if page.locator('.study-confirm').is_visible() else None
    drill_count=page.evaluate('GrammarSupport.capacity(GRAMMAR_DATA.questions.filter(q=>q.unit==="g7-te"))')
    assert 15<=drill_count<=18
    assert page.locator('#grMap button').count()==drill_count
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    page.screenshot(path=str(ROOT/'.work/grammar-practice-mobile.png'),full_page=True)
    # Unrelated flashcard shortcuts do not navigate grammar questions.
    before=page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.index')
    page.locator('#grQuestionTitle').focus();page.keyboard.press('ArrowRight')
    assert page.evaluate('JSON.parse(localStorage.getItem("dekiru_grammar_v1")).session.index')==before
    page.locator('[data-gr-submit]').click()
    assert page.locator('.gr-review.is-skipped').count()==drill_count
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    page.screenshot(path=str(ROOT/'.work/grammar-results-mobile.png'),full_page=True)
    assert not errors,errors
    print('Chapter counts:',{l:sum(next(u for u in units if u['id']==q['unit'])['lesson']==l for q in questions) for l in range(4,8)})
    # Corrupted and unavailable storage must not break study or grading.
    page.evaluate('localStorage.setItem("dekiru_grammar_v1", JSON.stringify({done:["unknown"],weak:["unknown"],session:{ids:["unknown"]}}))')
    page.reload();page.locator('[data-mode=grammar]').click()
    assert page.locator('#grDoneCount').inner_text()=='0 / 37'
    assert page.locator('#grSessionBadge').inner_text()==''
    blocked=browser.new_context(viewport={'width':390,'height':844})
    blocked.route('https://**/*',lambda route:route.abort())
    blocked.add_init_script('Object.defineProperty(window,"localStorage",{get(){throw new Error("blocked")}})')
    other=blocked.new_page();other.on('pageerror',lambda e:errors.append(str(e)))
    other.goto((ROOT/'index.html').as_uri());other.locator('[data-mode=grammar]').click()
    other.locator('[data-gr-drill]').click(); other.locator('.study-confirm [data-replace]').click() if other.locator('.study-confirm').is_visible() else None;other.locator('[data-gr-submit]').click()
    assert other.locator('.gr-review.is-skipped').count()==18
    assert 'không lưu được' in other.locator('#grSaveStatus').inner_text()
    assert not errors,errors
    browser.close()
    print(f'PASS: {len(units)} grammar units, 12 topics, {len(questions)} exercises; grading, retry, resume, filtering, mobile and dark mode.')
