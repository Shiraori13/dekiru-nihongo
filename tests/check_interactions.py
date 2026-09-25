"""Small-screen vocabulary and speech lifecycle checks, including offline use."""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
(ROOT/'.work').mkdir(exist_ok=True)
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':320,'height':844},reduced_motion='reduce')
    context.route('https://**/*',lambda route:route.abort())
    context.add_init_script('''
      window.__voices = [];
      window.__spoken = [];
      window.__current = null;
      window.__cancels = 0;
      window.__listeners = {};
      window.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
      Object.defineProperty(window, 'speechSynthesis', {value: {
        getVoices() { return window.__voices; },
        addEventListener(event, fn) { window.__listeners[event] = fn; },
        cancel() { window.__cancels++; window.__current = null; },
        speak(u) { window.__spoken.push(u); window.__current = u; }
      }});
    ''')
    page=context.new_page();errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    page.wait_for_function('typeof READINGS !== "undefined"')
    page.evaluate('document.fonts.ready')
    assert page.evaluate('document.fonts.check(\'26px "Noto Sans JP"\')')
    assert page.evaluate('[...document.fonts].some(f => f.family === "Noto Sans JP" && f.status === "loaded")')
    page.screenshot(path=str(ROOT/'.work/flashcard-mobile.png'),full_page=True)
    clipped=page.evaluate('''() => {
      const bad=[];
      for(let i=0;i<RAW_VOCAB.length;i++) {
        currentIndex=i; updateCardUI();
        const faces=[...document.querySelectorAll('.flashcard-face')];
        if(faces.some(e => e.scrollWidth>e.clientWidth+2 || e.scrollHeight>e.clientHeight+2)) bad.push(RAW_VOCAB[i].k);
      }
      currentIndex=0; updateCardUI();
      return bad;
    }''')
    print('Clipped flashcards:',clipped)
    assert not clipped
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.locator('.flashcard-container').click()
    page.fill('#searchBox','no-such-word')
    assert not page.locator('#flashcardInner').evaluate('(el) => el.classList.contains("is-flipped")')
    assert page.locator('#fcFavBtn').is_disabled()
    assert page.locator('#fcTopicTag').inner_text()=='Không có kết quả'
    page.fill('#searchBox','')
    page.locator('.flashcard-container').focus()
    page.keyboard.press('Space')
    assert page.locator('#flashcardInner').evaluate('(el) => el.classList.contains("is-flipped")')
    page.keyboard.press('Space')
    assert not page.locator('#flashcardInner').evaluate('(el) => el.classList.contains("is-flipped")')
    # Voice loading, per-sentence playback, cancellation and stale callbacks.
    page.locator('[data-mode=reading]').click()
    page.fill('#readingSearch','とうきょう')
    assert page.locator('.exercise-item').count()>0
    page.fill('#readingSearch','')
    page.locator('[data-reading="reading-5"]').click()
    page.locator('.reading-word.kanji').first.click()
    page.screenshot(path=str(ROOT/'.work/hint-mobile.png'))
    page.locator('.close-detail').click()
    assert page.locator('#listenReading').is_disabled()
    page.evaluate('window.__voices=[{lang:"ja-JP",name:"Japanese test voice"}]; window.__listeners.voiceschanged()')
    assert page.locator('#listenReading').is_enabled()
    page.locator('#listenReading').click()
    assert page.locator('#stopReading').is_enabled()
    assert page.locator('.is-speaking').count()==1
    assert page.evaluate('__current.lang')=='ja-JP'
    assert page.evaluate('__current.rate')==0.85
    page.evaluate('window.__oldEnd=__current.onend; __current.onend()')
    assert page.evaluate('__spoken.length')==2
    page.locator('#stopReading').click()
    assert page.locator('#stopReading').is_disabled()
    assert page.locator('.is-speaking').count()==0
    page.evaluate('__oldEnd()')
    assert page.evaluate('__spoken.length')==2
    page.locator('#listenReading').click()
    page.locator('#nextReading').click()
    assert page.locator('#stopReading').is_disabled()
    page.locator('#listenReading').click()
    page.locator('[data-mode=flashcard]').click()
    assert page.evaluate('__current === null')
    page.locator('[data-mode=reading]').click()
    page.select_option('#readingRate','0.65')
    page.locator('#listenReading').click()
    assert page.evaluate('__current.rate')==0.65
    page.evaluate('for(let i=0;__current && i<100;i++){const u=__current;__current=null;u.onend();}')
    assert 'Đã nghe hết bài' in page.locator('#readingAudioStatus').inner_text()
    page.locator('#listenReading').click()
    page.evaluate('__current.onerror({error:"synthesis-failed"})')
    assert 'Chưa phát được' in page.locator('#readingAudioStatus').inner_text()
    assert page.locator('#stopReading').is_disabled()
    page.locator('#listenReading').click()
    page.locator('#stopReading').click()
    assert not errors,errors
    print('PASS: all flashcards at 320px offline, empty state, keyboard flip, voice loading, sentence playback, completion, stop, tab/exercise change, error recovery and stale audio callbacks.')
    browser.close()
