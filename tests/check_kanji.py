"""Kanji coverage, filters, writing lifecycle, persistence and custom quiz checks."""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
(ROOT/'.work').mkdir(exist_ok=True)

with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':1440,'height':1100})
    context.route('https://**/*',lambda route:route.abort())
    page=context.new_page(); errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    page.wait_for_function('typeof KANJI_CHARACTERS !== "undefined" && document.querySelectorAll(".kanji-item").length === 607')
    page.locator('[data-mode=kanji]').click()
    assert page.locator('#kanjiMode').is_visible()
    assert not page.locator('#vocabFilters').is_visible()
    assert page.evaluate('Object.keys(KANJI_CHARACTERS).length')==496
    assert page.evaluate('KANJI_SOURCES.filter(s => s.supplement).length')==4
    assert page.evaluate('KANJI_SOURCES.every(s => RAW_VOCAB[s.index].k === s.word && RAW_VOCAB[s.index].l === s.lesson && RAW_VOCAB[s.index].t === s.topic && RAW_VOCAB[s.index].p === s.page)')
    assert page.evaluate('Object.values(KANJI_CHARACTERS).every(c => c.meaning && c.strokes.length === c.numbers.length && c.strokes.length > 0)')
    assert page.evaluate('KANJI_CHARACTERS["学"].hv[0]')=='học'
    assert page.evaluate('KANJI_CHARACTERS["桜"].hv[0]')=='anh'
    assert page.evaluate('KANJI_CHARACTERS["払"].hv[0]')=='phất'
    assert page.evaluate('KANJI_CHARACTERS["込"].hv.length')==0
    # Every lesson/topic is still represented, including valid empty scopes.
    for lesson in range(1,16):
        page.select_option('#kanjiLesson',str(lesson))
        assert page.locator('#kanjiTopic option').count()==4
        topics=page.locator('#kanjiTopic option').evaluate_all('(els) => els.slice(1).map(e => e.value)')
        for topic in topics:
            page.select_option('#kanjiTopic',topic)
            expected=page.evaluate('([l,t]) => KANJI_SOURCES.filter(s => s.lesson===l && s.topic===t).length',[lesson,topic])
            assert page.locator('.kanji-item').count()==expected,(lesson,topic)
            assert page.locator('#kanjiEmpty').is_visible()==(expected==0)
    page.locator('#clearKanjiFilters').click()
    page.fill('#kanjiSearch','hoc')
    assert page.locator('.kanji-item').count()>0
    assert '学' in page.locator('.kanji-item strong').all_inner_texts() or page.locator('.kanji-item strong').evaluate_all('(els) => els.some(e => e.textContent.includes("学"))')
    page.fill('#kanjiSearch','no-such-kanji')
    assert page.locator('#kanjiEmpty').is_visible()
    assert not page.locator('#kanjiStudy').is_visible()
    page.locator('#clearKanjiFilters').click()
    # Visit all 496 glyphs and validate the generated SVG geometry in the browser.
    checked=page.evaluate('''() => {
      const seen = new Set();
      for (const source of KANJI_SOURCES) {
        const chars = [...new Set([...source.word].filter(c => KANJI_CHARACTERS[c]))];
        if (chars.every(c => seen.has(c))) continue;
        document.querySelector(`[data-kanji-word="${source.index}"]`).click();
        for (const c of chars) {
          document.querySelector(`[data-kanji-char="${c}"]`).click();
          const paths = [...document.querySelectorAll('#kanjiStrokeSvg .kanji-stroke')];
          if (paths.length !== KANJI_CHARACTERS[c].strokes.length || paths.some(p => !Number.isFinite(p.getTotalLength()) || p.getTotalLength() <= 0)) throw new Error(c);
          seen.add(c);
        }
      }
      return seen.size;
    }''')
    assert checked==496
    page.evaluate('document.querySelector(`[data-kanji-word="${KANJI_SOURCES.find(s => s.word === "日本").index}"]`).click()')
    page.locator('[data-kanji-char="日"]').click()
    assert page.locator('#kanjiStrokeCount').inner_text()=='4 nét'
    page.locator('#kanjiStepNext').click()
    assert page.locator('#kanjiStrokeRange').input_value()=='1'
    page.locator('#kanjiStepBack').click()
    assert page.locator('#kanjiStrokeRange').input_value()=='0'
    page.locator('#kanjiShowAll').click()
    assert page.locator('#kanjiStrokeRange').input_value()=='4'
    page.locator('#kanjiNumbers').uncheck()
    assert page.locator('.kanji-stroke-number').evaluate_all('(els) => els.every(e => e.style.visibility === "hidden")')
    page.locator('#kanjiNumbers').check()
    page.select_option('#kanjiSpeed','350')
    page.locator('#kanjiPlay').click()
    page.wait_for_function('document.querySelector("#kanjiPlay").getAttribute("aria-pressed") === "false"')
    assert page.locator('#kanjiStrokeRange').input_value()=='4'
    page.locator('#kanjiPlay').click()
    page.locator('[data-kanji-char="本"]').click()
    page.wait_for_timeout(700)
    assert page.locator('#kanjiStrokeRange').input_value()=='0'
    assert page.locator('#kanjiPlay').get_attribute('aria-pressed')=='false'
    page.locator('#kanjiPlay').click()
    page.locator('[data-mode=reading]').click()
    assert page.locator('#kanjiPlay').get_attribute('aria-pressed')=='false'
    page.locator('[data-mode=kanji]').click()
    page.locator('#kanjiCanvas').scroll_into_view_if_needed()
    box=page.locator('#kanjiCanvas').bounding_box()
    page.mouse.move(box['x']+box['width']*.2,box['y']+box['height']*.3)
    page.mouse.down();page.mouse.move(box['x']+box['width']*.8,box['y']+box['height']*.3,steps=12);page.mouse.up()
    assert '1 nét tự do' in page.locator('#kanjiCanvasStatus').inner_text()
    assert page.locator('#kanjiUndo').is_enabled()
    assert page.locator('#kanjiCanvas').evaluate('(c) => c.getContext("2d").getImageData(0,0,c.width,c.height).data.some(x => x !== 0)')
    page.locator('#kanjiUndo').click()
    assert page.locator('#kanjiUndo').is_disabled()
    page.locator('#kanjiGuide').uncheck()
    assert page.locator('#kanjiTraceGuide g').evaluate('(e) => e.style.visibility')=='hidden'
    page.locator('#kanjiComplete').click()
    assert page.locator('#kanjiProgressCount').inner_text()=='1 / 607'
    page.reload();page.locator('[data-mode=kanji]').click()
    assert page.locator('#kanjiComplete').get_attribute('aria-pressed')=='true'
    assert page.locator('#kanjiProgressCount').inner_text()=='1 / 607'
    page.select_option('#kanjiStatus','done')
    assert page.locator('.kanji-item').count()==1
    page.locator('#kanjiComplete').click()
    assert page.locator('#kanjiEmpty').is_visible()
    page.locator('#clearKanjiFilters').click()
    page.evaluate('document.querySelector(`[data-kanji-word="${KANJI_SOURCES.find(s => s.word === "日本").index}"]`).click()')
    page.locator('.kanji-related-word').first.click()
    assert page.locator('#kanjiLesson').input_value()!='all'
    assert page.locator('#kanjiTopic').input_value()!='all'
    assert page.locator('.kanji-character-tab[aria-pressed=true] strong').inner_text()=='日'
    # Responsive display of every word at the narrowest viewport.
    page.locator('#clearKanjiFilters').click()
    for width in [320,390,768,1440]:
        page.set_viewport_size({'width':width,'height':1000})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
    page.set_viewport_size({'width':320,'height':1000})
    page.evaluate('''() => {
      for (const button of document.querySelectorAll('[data-kanji-word]')) {
        button.click();
        if(document.documentElement.scrollWidth > innerWidth) throw new Error(button.textContent);
      }
    }''')
    page.screenshot(path=str(ROOT/'.work/kanji-mobile.png'),full_page=True)
    page.locator('#themeToggle').click()
    page.wait_for_function('document.querySelector("#kanjiCanvas").getContext("2d").strokeStyle === "#a5a7ff"')
    # Exercise actual touch events through Chromium, with pointer capture on canvas.
    page.locator('#kanjiCanvas').scroll_into_view_if_needed()
    box=page.locator('#kanjiCanvas').bounding_box()
    client=context.new_cdp_session(page)
    client.send('Emulation.setTouchEmulationEnabled',{'enabled':True,'maxTouchPoints':1})
    client.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':box['x']+box['width']*.2,'y':box['y']+box['height']*.4}]})
    client.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':box['x']+box['width']*.8,'y':box['y']+box['height']*.4}]})
    client.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]})
    assert '1 nét tự do' in page.locator('#kanjiCanvasStatus').inner_text()
    page.locator('#kanjiClearCanvas').click()
    assert page.locator('#kanjiClearCanvas').is_disabled()
    client.send('Emulation.setTouchEmulationEnabled',{'enabled':False})
    client.detach()
    page.screenshot(path=str(ROOT/'.work/kanji-dark.png'),full_page=True)
    # Custom quiz must reject invalid entries and respect the exact requested count.
    page.locator('[data-mode=quiz]').click()
    page.select_option('#lessonSelect','4')
    page.locator('input[name="quizCount"][value="custom"]').check()
    assert page.locator('#quizCustomCount').get_attribute('max')=='68'
    for invalid in ['', '0','-1','1.5','69','999999999999999999']:
        page.fill('#quizCustomCount',invalid)
        page.get_by_role('button',name='Bắt đầu làm bài',exact=True).click()
        assert page.locator('#quizCountError').is_visible(),invalid
        assert not page.locator('#quizBox').is_visible()
    for count in [1,7,68]:
        page.fill('#quizCustomCount',str(count))
        page.locator('#quizCustomCount').press('Enter')
        assert page.evaluate('quizQuestions.length')==count
        assert page.locator('#quizProgress').inner_text()==f'Câu hỏi 1 / {count}'
        page.evaluate('showQuizSetup()')
    page.fill('#quizCustomCount','68')
    page.select_option('#topicSelect',page.locator('#topicSelect option').nth(1).get_attribute('value'))
    page.get_by_role('button',name='Bắt đầu làm bài',exact=True).click()
    assert page.locator('#quizCountError').is_visible()
    page.fill('#searchBox','not-a-word')
    page.get_by_role('button',name='Bắt đầu làm bài',exact=True).click()
    assert 'Không có từ' in page.locator('#quizCountError').inner_text()
    page.fill('#searchBox','');page.select_option('#topicSelect','all')
    page.locator('input[name="quizCount"][value="15"]').check()
    page.get_by_role('button',name='Bắt đầu làm bài',exact=True).click()
    assert page.evaluate('quizQuestions.length')==15
    assert not errors,errors
    # Corrupt and blocked localStorage must not prevent study.
    for initial in ['localStorage.setItem("dekiru_kanji_v1", "broken")', 'localStorage.setItem("dekiru_kanji_v1", JSON.stringify({done:42,selected:[]}))', 'Object.defineProperty(window,"localStorage",{get(){throw new Error("blocked");}})']:
        broken=browser.new_context()
        broken.route('https://**/*',lambda route:route.abort())
        broken.add_init_script(initial)
        tab=broken.new_page();tab.on('pageerror',lambda e:errors.append(str(e)))
        tab.goto((ROOT/'index.html').as_uri());tab.locator('[data-mode=kanji]').click()
        assert tab.locator('.kanji-item').count()==607
        tab.locator('#kanjiComplete').click()
        assert tab.locator('#kanjiProgressCount').inner_text()=='1 / 607'
        broken.close()
    assert not errors,errors
    browser.close()
print('PASS: 607 source mappings, 496 glyphs, all 45 topics, offline study, writing, persistence, mobile layout and custom quiz counts.')
