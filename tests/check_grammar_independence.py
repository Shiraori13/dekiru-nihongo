"""No paired-sentence leaks; lexical hints show reading/meaning without filled answers."""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch, install_legacy_readiness, reset_attempt_store
install_legacy_readiness()

with sync_playwright() as p:
    browser=launch(p)
    page=browser.new_page(viewport={'width':1280,'height':900},reduced_motion='reduce')
    page.route('https://**/*',lambda route:route.abort())
    errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    result=page.evaluate('''() => {
      const {questions,units}=GRAMMAR_DATA,S=GrammarSupport;
      const contexts=questions.map(S.fullContext).filter(Boolean);
      if(new Set(contexts).size!==contexts.length)throw Error('Duplicate sentence contexts');
      const pairs=questions.filter(q=>q.id.endsWith('-order-v2')&&q.id.startsWith('practice-'));
      pairs.forEach(q=>{const id=q.id.replace('-order-v2','-choice');const choice=questions.find(c=>c.id===id||c.id===id+'-v3');if(!choice||choice.contextJP===q.contextJP)throw Error('Choice/order share a solution');});
      questions.forEach(q=>{if(S.hintsFor(q).unknown.length)throw Error('Missing hint: '+q.id);});
      const garden=questions.find(q=>q.id==='g4-adjective-choice');
      if(!S.hintsFor(garden).words.some(w=>w.word==='庭'&&w.reading==='にわ'))throw Error('Vietnamese-only prompt lacks common vocabulary hints');
      const assertPlan=list=>{for(let i=0;i<list.length;i++)for(let j=i+1;j<list.length;j++)if(!S.compatible(list[i],list[j]))throw Error('Leaking pair');};
      const checks=[questions,...units.map(u=>questions.filter(q=>q.unit===u.id))];
      checks.forEach(list=>{for(let i=0;i<5;i++){const picked=S.plan(list);assertPlan(picked);if(picked.length<S.capacity(list))throw Error('Wrong capacity');}});
      units.forEach(u=>{if(S.capacity(questions.filter(q=>q.unit===u.id))<15)throw Error('Not enough independent tasks for '+u.id);});
      const fill=questions.find(q=>q.type==='fill'&&q.answer==='読み方');
      const exposure=questions.find(q=>q.type==='order'&&q.tokens.join('').includes('読み方'));
      if(S.compatible(fill,exposure))throw Error('A visible answer must conflict with its fill task');
      const te=questions.find(q=>q.type==='fill'&&q.answer==='書いて');
      const teChoice=questions.find(q=>q.id==='g7-te-choice');
      if(S.compatible(te,teChoice))throw Error('Choice options can also expose a fill answer');
      questions.filter(q=>q.type==='fill').forEach(q=>{if(S.hintsFor(q).words.some(w=>[q.answer,...q.answers].includes(w.word)))throw Error('Lexical hint supplies an inflected answer');});
      const readings=S.hintsFor({prompt:'4時・14時・24時・30分・8分',type:'fill'}).words;
      for(const [word,reading] of [['4時','よじ'],['14時','じゅうよじ'],['24時','にじゅうよじ'],['30分','さんじゅっぷん'],['8分','はっぷん']])if(!readings.some(w=>w.word===word&&w.reading===reading))throw Error('Wrong counter reading');
      return {capacity:S.capacity(questions),pairs:pairs.length,fill:fill.id,exposure:exposure.id};
    }''')
    # A restored fill question must show the dictionary lemma, not its conjugated answer.
    ids=page.evaluate('''()=>[GRAMMAR_DATA.questions.find(q=>q.type==='fill'&&q.answers?.includes('書いて')).id,GRAMMAR_DATA.questions.find(q=>q.id==='g4-location-choice').id]''')
    page.evaluate('''ids=>localStorage.setItem('dekiru_grammar_v1',JSON.stringify({session:{ids,answers:{},hints:{},index:0,submitted:false}}))''',ids)
    page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
    assert page.locator('#grKanjiHints').is_visible()
    assert not page.locator('#grKanjiHints').evaluate('(el)=>el.open')
    page.locator('#grKanjiHints summary').click()
    hints=page.locator('#grKanjiHints').inner_text()
    assert '書く' in hints and 'かく' in hints and 'viết' in hints
    assert '書いて' not in hints and 'かいて' not in hints
    assert page.locator('.gr-map-answered').count()==0
    page.locator('#grFill').fill('書いて')
    page.locator('[data-gr-next]').click();page.locator('[data-gr-prev]').click()
    assert page.locator('#grKanjiHints').evaluate('(el)=>el.open')
    assert page.locator('#grFill').input_value()=='書いて'
    page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
    assert page.locator('#grKanjiHints').evaluate('(el)=>el.open')
    assert page.locator('#grFill').input_value()=='書いて'
    for width in [390,320]:
        page.set_viewport_size({'width':width,'height':900})
        for theme in ['light','dark']:
            page.evaluate('(theme)=>document.body.dataset.theme=theme',theme)
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
            page.locator('#grQuestionTitle').scroll_into_view_if_needed()
            page.screenshot(path=str(ROOT/f'.work/grammar-kanji-hints-{width}-{theme}.png'))
    # Old attempts containing a leaking pair are trimmed and the valid answer survives.
    page.evaluate('''pair=>localStorage.setItem('dekiru_grammar_v1',JSON.stringify({session:{ids:[pair.fill,pair.exposure],answers:{[pair.fill]:'読み方'},hints:{},index:0,submitted:false}}))''',result)
    page.reload();page.locator('[data-mode=grammar]').click();page.locator('#grPracticeTab').click()
    assert page.locator('#grUpdateNotice').is_visible()
    assert page.locator('#grMap button').count()==1
    assert page.locator('#grFill').input_value()=='読み方'
    page.locator('[data-gr-submit]').click()
    assert page.locator('.gr-review.is-correct').count()==1
    assert not errors,errors
    browser.close()
    print(f'PASS: {result["pairs"]} distinct replacement contexts, independent plans, complete Kanji hints, correct readings, persistence, no answer leakage and 320/390px layouts.')
