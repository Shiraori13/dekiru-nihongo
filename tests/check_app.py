"""Browser checks. Run: python tests/check_app.py (requires Playwright and Edge)."""
import sys,re,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
(ROOT/'.work').mkdir(exist_ok=True)
sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':1440,'height':1000},reduced_motion='reduce')
    page=context.new_page();errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    page.wait_for_function('typeof READINGS !== "undefined" && document.querySelectorAll(".exercise-item").length === 71')
    page.evaluate('document.fonts.ready')
    assert page.locator('#fcKanji').inner_text()=='私'
    assert page.evaluate('RAW_VOCAB.length')==921
    assert page.evaluate('new Set(RAW_VOCAB.map(w => `${w.l}:${w.t}`)).size')==45
    assert page.evaluate('RAW_VOCAB.every(w => w.k && w.h && w.m && w.p >= 2 && w.p <= 45 && !w.h.includes("|"))')
    assert page.evaluate('Object.keys(TOPIC_DETAILS).length')==45
    assert page.evaluate('RAW_VOCAB.every(w => TOPIC_DETAILS[w.t])')
    assert page.evaluate('READINGS.every(r => r.blocks.flat().every(t => typeof t === "number" ? Boolean(READING_LEXICON[t]) : !/[ぁ-龥ァ-ヺ0-9]/.test(t)))')
    expected_pages=set(range(1,77))-{1,9,25,42,59}
    assert set(page.evaluate('READINGS.map(r => r.page)'))==expected_pages
    source={}
    for block in (ROOT/'data/readings-source.txt').read_text(encoding='utf-8').split('\n@')[1:]:
        header,*lines=block.strip().splitlines();source[int(header.split('|')[0])]=lines
    annotated=page.evaluate('READINGS.map(r => ({page:r.page,lines:r.blocks.map(b => b.map(t => typeof t === "number" ? READING_LEXICON[t].k : t).join(""))}))')
    assert all(r['lines']==source[r['page']] for r in annotated)
    page.locator('[data-mode=list]').click()
    for lesson,count in [(4,68),(5,59),(6,55),(7,70),(8,81)]:
        page.select_option('#lessonSelect',str(lesson))
        assert page.locator('.vocab-row').count()==count
        assert page.locator('#topicSelect option').count()==4
    page.fill('#searchBox','khong-co-tu-nay')
    assert page.locator('#vocabTableBody').inner_text().startswith('Không tìm thấy')
    page.fill('#searchBox','');page.select_option('#lessonSelect','4')
    page.locator('[data-mode=quiz]').click();page.select_option('#quizCountSelect','5')
    page.get_by_role('button',name='Bắt đầu làm bài',exact=True).click()
    for index in range(5):
        correct=page.evaluate('quizQuestions[quizIndex].m')
        assert len(set(page.locator('.quiz-opt-btn').all_inner_texts()))==4
        page.get_by_role('button',name=correct,exact=True).click()
        if index<4:page.wait_for_function(f'quizIndex === {index+1}')
    page.wait_for_function('document.getElementById("quizResult").style.display === "block"')
    assert page.locator('#finalScore').inner_text()=='100%'
    page.locator('[data-mode=reading]').click()
    assert not page.locator('#vocabFilters').is_visible()
    assert page.locator('.exercise-item').count()==71
    # Every source page, token and exercise must be reachable without reloading.
    reading_ids=page.evaluate('READINGS.map(r => r.id)')
    for id in reading_ids:
        page.locator(f'[data-reading="{id}"]').click()
        assert page.locator('.reading-word').count()>0
        assert page.locator('.glossary-word').count()>0
        assert page.locator('#readingSource').get_attribute('href').endswith(id.replace('reading-','page='))
    page.locator('[data-reading="reading-5"]').click()
    page.locator('.reading-word.kanji').first.click()
    assert page.locator('#wordDetail').is_visible()
    page.locator('#nextReading').click()
    page.locator('.reading-word').first.click()
    assert page.locator('#wordDetail').is_visible()
    page.keyboard.press('Escape');assert not page.locator('#wordDetail').is_visible()
    page.locator('#hintKanji').uncheck()
    assert page.locator('.kanji rt').first.evaluate('(el) => getComputedStyle(el).visibility')=='hidden'
    page.locator('#hintKanji').check();page.locator('#hintHiragana').check()
    assert page.locator('.hiragana rt').first.evaluate('(el) => getComputedStyle(el).visibility')=='visible'
    page.locator('#completeReading').click()
    assert page.locator('#readingProgressCount').inner_text()=='1 / 71'
    selected=page.locator('.exercise-item[aria-current=true]').get_attribute('data-reading')
    page.reload();page.locator('[data-mode=reading]').click()
    assert page.locator('.exercise-item[aria-current=true]').get_attribute('data-reading')==selected
    assert page.locator('#readingProgressCount').inner_text()=='1 / 71'
    page.select_option('#readingLesson','7');page.select_option('#readingKind','dialogue')
    assert page.locator('.exercise-item').count()==12
    page.fill('#readingSearch','no-such-reading');assert page.locator('#readingEmpty').is_visible()
    page.locator('#clearReadingFilters').click();assert page.locator('.exercise-item').count()==71
    # Desktop, dark and small-screen visual/layout checks.
    page.locator('[data-reading="reading-5"]').click()
    page.screenshot(path=str(ROOT/'.work/desktop.png'),full_page=True)
    page.locator('#themeToggle').click();page.screenshot(path=str(ROOT/'.work/dark.png'),full_page=True)
    page.locator('#themeToggle').click()
    for width in [390,320]:
        page.set_viewport_size({'width':width,'height':844})
        page.screenshot(path=str(ROOT/f'.work/mobile-{width}.png'),full_page=True)
        if page.evaluate('document.documentElement.scrollWidth > innerWidth'):
            print(page.evaluate('[...document.querySelectorAll("body *")].filter(e => e.getBoundingClientRect().right > innerWidth+1).slice(0,20).map(e => [e.tagName,e.id,e.className,e.getBoundingClientRect().width,e.getBoundingClientRect().right])'))
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'Overflow at {width}'
        page.locator('.reading-word').first.click()
        assert page.locator('#wordDetail').is_visible()
        assert page.locator('#wordDetail').evaluate('(el) => {const r=el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth;}')
        page.locator('.close-detail').click()
    page.set_viewport_size({'width':390,'height':844})
    page.screenshot(path=str(ROOT/'.work/mobile.png'),full_page=True)
    page.set_viewport_size({'width':320,'height':844})
    page.select_option('#readingFontSize','34')
    for id in reading_ids:
        page.locator(f'[data-reading="{id}"]').click()
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'Large-font overflow: {id}'
        assert page.locator('#readerArticle').evaluate('(el) => el.scrollWidth <= el.clientWidth+1'),f'Clipped article: {id}'
    # Corrupted or unavailable local storage must not prevent startup.
    page.evaluate('localStorage.setItem("dekiru_favs_v2","{"); localStorage.setItem("dekiru_reading_v1","null");localStorage.setItem("dekiru_reading_done_v1","{}")')
    page.reload();page.locator('[data-mode=reading]').click();assert page.locator('.exercise-item').count()==71
    blocked=browser.new_context()
    blocked.add_init_script('Object.defineProperty(window, "localStorage", {get(){throw new Error("Storage disabled")}})')
    bpage=blocked.new_page();bpage.on('pageerror',lambda e:errors.append(str(e)))
    bpage.goto((ROOT/'index.html').as_uri());bpage.locator('[data-mode=reading]').click()
    bpage.locator('#completeReading').click();assert bpage.locator('#readingProgressCount').inner_text()=='1 / 71'
    assert not errors,errors
    print('PASS: 921 vocabulary cards, 45 topics, 71 readings, quiz, filters, hints, glossary, progress, storage resilience, desktop/dark/mobile layouts; no JavaScript errors.')
    browser.close()
