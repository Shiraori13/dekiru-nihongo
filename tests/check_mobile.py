"""Mobile navigation, disclosures, overlap, study/test flows and desktop restoration."""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch, install_legacy_readiness, reset_attempt_store
install_legacy_readiness(interactions=False)

def mode(page,name):
    button=page.locator(f'[data-mode="{name}"]')
    if not button.is_visible():page.locator('#mobileMore').click()
    button.click();page.wait_for_function('(m)=>document.body.dataset.mobileMode===m',arg=name)

def toggle(page,key):page.locator(f'[data-mobile-key="{key}"] > summary').click()
def open_fold(page,key):
    if not page.locator(f'[data-mobile-key="{key}"]').evaluate('(d)=>d.open'):toggle(page,key)

def geometry(page):
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),'Horizontal overflow'
    assert page.evaluate('''()=>{
      const h=document.querySelector('header').getBoundingClientRect(),n=document.querySelector('.mode-tabs').getBoundingClientRect();
      return h.height<=78&&h.top>=-1&&Math.abs(n.bottom-innerHeight)<=1&&n.top>h.bottom&&n.height>=64&&n.height<=92;
    }'''),'Header/navigation overlap or nav attached to header'

with sync_playwright() as p:
    browser=launch(p)
    context=browser.new_context(viewport={'width':390,'height':844},has_touch=True,**({'is_mobile':True} if browser.browser_type.name=='chromium' else {}),reduced_motion='reduce')
    context.route('https://**/*',lambda r:r.abort())
    page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri());page.wait_for_selector('body[data-mobile-ready=true]')
    page.wait_for_selector('#examMode[data-ready=true]',state='attached')
    geometry(page)
    assert page.locator('.mode-tabs [data-mode]').count()==4
    assert page.locator('#mobileMenu [data-mode]').count()==3
    assert page.locator('#mobileMenu').is_hidden()
    assert page.locator('.flashcard-container').bounding_box()['y']<410
    assert not page.locator('#lessonSelect').is_visible()
    toggle(page,'vocab-filters');page.select_option('#lessonSelect','4');page.select_option('#topicSelect',index=1)
    toggle(page,'vocab-filters');assert 'Bài 4' in page.locator('[data-mobile-key=vocab-filters] summary').inner_text()
    page.locator('.flashcard-container').click();assert page.evaluate('isFlipped')
    page.locator('#fcNext').click();assert page.evaluate('currentIndex')==1
    page.locator('#mobileMore').click();page.keyboard.press('Escape')
    assert page.locator('#mobileMenu').is_hidden() and page.evaluate('document.activeElement.id')=='mobileMore'
    # Filtering and stacked cards, with progressively revealed entries.
    mode(page,'list');open_fold(page,'vocab-filters');page.select_option('#lessonSelect','all');page.fill('#searchBox','');toggle(page,'vocab-filters')
    page.wait_for_function('document.querySelectorAll(".vocab-row.mobile-list-pending").length===871')
    assert page.locator('.vocab-row:visible').count()==50
    page.locator('.mobile-list-more button').click();assert page.locator('.vocab-row:visible').count()==100
    open_fold(page,'vocab-filters');page.fill('#searchBox','khong-co-tu-dekiru');assert page.locator('.mobile-list-more').is_hidden()
    page.fill('#searchBox','');toggle(page,'vocab-filters');assert page.locator('.vocab-row:visible').count()==50
    page.evaluate('()=>{window.mobileRafCount=0;window.originalRaf=requestAnimationFrame;window.requestAnimationFrame=(fn)=>{mobileRafCount++;return originalRaf(fn);};}')
    page.wait_for_timeout(250)
    assert page.evaluate('mobileRafCount')<=3,'Idle list keeps scheduling layout updates'
    page.evaluate('()=>{window.requestAnimationFrame=originalRaf;}')
    # Reading enters the actual reading instead of a long open library.
    mode(page,'reading');assert page.locator('#readingTitle').bounding_box()['y']<420
    assert page.locator('#readingLesson').is_hidden()
    open_fold(page,'reading-picker');page.select_option('#readingLesson','5')
    page.locator('.exercise-item').first.click()
    page.wait_for_function('!document.querySelector("[data-mobile-key=reading-picker]").open')
    assert page.locator('#readingTitle').is_visible()
    open_fold(page,'reading-tools');page.select_option('#readingFontSize','34');page.locator('#hintHiragana').check()
    assert page.locator('#readingBody').evaluate('(e)=>getComputedStyle(e).fontSize')=='34px'
    toggle(page,'reading-tools')
    page.locator('.reading-word').first.click()
    assert page.locator('#wordDetail').is_visible()
    assert page.locator('#wordDetail').evaluate('(e)=>e.getBoundingClientRect().bottom<document.querySelector(".mode-tabs").getBoundingClientRect().top')
    page.locator('.close-detail').click()
    open_fold(page,'reading-glossary');assert page.locator('#readingGlossary').is_visible()
    # Both writing tools remain available without stacking both boards.
    mode(page,'kanji');open_fold(page,'kanji-picker');page.select_option('#kanjiLesson','4');page.locator('.kanji-item').first.click()
    page.wait_for_function('!document.querySelector("[data-mobile-key=kanji-picker]").open')
    assert page.locator('#kanjiStrokeSvg').is_visible() and page.locator('#kanjiCanvas').is_hidden()
    page.locator('[data-mobile-writing="1"]').click();assert page.locator('#kanjiCanvas').is_visible() and page.locator('#kanjiStrokeSvg').is_hidden()
    page.locator('#kanjiCanvas').scroll_into_view_if_needed();rect=page.locator('#kanjiCanvas').bounding_box()
    page.mouse.move(rect['x']+40,rect['y']+45);page.mouse.down();page.mouse.move(rect['x']+130,rect['y']+100,steps=6);page.mouse.up()
    assert '1 nét' in page.locator('#kanjiCanvasStatus').inner_text()
    page.locator('#kanjiUndo').click();assert page.locator('#kanjiUndo').is_disabled()
    page.locator('[data-mobile-writing="0"]').click();page.locator('#kanjiStepNext').click();assert page.locator('#kanjiStrokeRange').input_value()=='1'
    # Grammar filters, picker and drill are still fully usable.
    mode(page,'grammar');open_fold(page,'grammar-filters');page.locator('[data-gr-chapter="4"]').click();toggle(page,'grammar-filters')
    open_fold(page,'grammar-picker');page.locator('[data-gr-unit="g4-duration"]').click()
    page.wait_for_function('!document.querySelector("[data-mobile-key=grammar-picker]").open')
    page.locator('[data-gr-drill]').click();page.wait_for_selector('[data-mobile-key=grammar-map] > summary')
    assert page.locator('#grMap').is_hidden();assert page.locator('#grSetupForm').is_hidden()
    open_fold(page,'grammar-map');page.locator('[data-gr-jump="1"]').click()
    page.locator('[data-gr-submit]').click();page.wait_for_selector('.gr-review .mobile-fold > summary')
    assert page.locator('.gr-review .mobile-fold[open]').count()==1
    page.locator('.gr-review .mobile-fold > summary').nth(1).click();assert page.locator('.gr-review').nth(1).locator('h3').is_visible()
    # Quiz hides the unrelated vocabulary controls while answering.
    mode(page,'quiz');page.locator('input[name=quizCount][value="5"]').check();page.locator('.quiz-start-btn').click()
    page.wait_for_function('document.body.classList.contains("mobile-quiz-active")')
    assert page.locator('[data-mobile-key=vocab-filters]').is_hidden()
    assert page.locator('#quizQuestionMap').is_hidden()
    page.locator('.quiz-opt-btn').first.click();open_fold(page,'quiz-map');page.locator('#quizQuestionMap button').nth(1).click()
    page.locator('#quizSubmit').click();page.locator('#quizSubmitAnyway').click();page.wait_for_selector('.quiz-review-card .mobile-fold')
    assert page.locator('.quiz-review-card .mobile-fold[open]').count()==1
    # Exam leaves the paper readable, stores choices, and unfolds only the requested review.
    mode(page,'exam');page.select_option('#exMinutes','0');page.locator('[data-ex-start="chapter45-1"]').click()
    page.wait_for_selector('.mobile-paper-progress')
    assert page.locator('.mobile-paper-progress').is_visible()
    assert page.locator('.ex-hero').is_hidden() and page.locator('#examMode > .ex-tabs').is_hidden()
    page.locator('[data-ex-answer="0"]').click();assert '1/45' in page.locator('.mobile-paper-progress').inner_text()
    page.locator('[data-ex-submit]').click()
    assert page.locator('#exConfirm').evaluate('(d)=>{const r=d.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}')
    page.locator('#exConfirmAccept').click();page.wait_for_selector('.ex-review .mobile-fold > summary')
    assert page.locator('.ex-review .mobile-fold[open]').count()==1
    page.locator('.ex-review .mobile-fold > summary').nth(1).click()
    assert page.locator('.ex-review').nth(1).locator('.ex-solution').is_visible()
    open_fold(page,'exam-result-map');page.locator('[data-ex-jump="12"]').click()
    page.wait_for_function("""document.querySelector('[data-ex-review="12"] .mobile-fold').open""")
    assert page.locator('[data-ex-review="12"] .ex-solution').is_visible()
    # Compact widths and landscape; floating word/audio panels leave navigation clear.
    for width,height in [(320,568),(390,844),(430,932),(740,390)]:
      page.set_viewport_size({'width':width,'height':height})
      for theme in ['light','dark']:
        page.evaluate('(t)=>document.body.dataset.theme=t',theme)
        for name in ['flashcard','reading','kanji','grammar','exam','quiz','list']:
          mode(page,name);geometry(page)
        mode(page,'flashcard');page.screenshot(path=str(ROOT/f'.work/mobile-{width}-{theme}-home.png'))
        mode(page,'reading');page.locator('.reading-word').first.click()
        assert page.locator('#wordDetail').evaluate('(e)=>{const r=e.getBoundingClientRect();return r.top>=0&&r.right<=innerWidth&&r.bottom<document.querySelector(".mode-tabs").getBoundingClientRect().top;}')
        page.evaluate('document.querySelector("#audioFeedback").hidden=false;document.querySelector("#audioHelp").hidden=false;document.querySelector("#audioMessage").textContent="Kiểm tra bố cục thông báo âm thanh dài trên điện thoại."')
        assert page.evaluate('document.querySelector("#audioFeedback").getBoundingClientRect().bottom<document.querySelector("#wordDetail").getBoundingClientRect().top'),'Floating panels overlap'
        page.evaluate('document.querySelector("#audioFeedback").hidden=true')
        page.locator('.close-detail').click()
    # Resizing back to desktop restores all 7 nav actions and the original full controls.
    page.set_viewport_size({'width':1440,'height':1000});page.wait_for_function('document.querySelector("#sidebarNavigation .mode-tabs")!==null')
    assert page.locator('#sidebarNavigation [data-mode]').count()==7
    assert page.locator('#mobileMore').count()==0
    mode(page,'reading');assert page.locator('#readingLesson').is_visible() and page.locator('#readingFontSize').is_visible()
    assert page.locator('.reading-sidebar').bounding_box()['width']>=230
    mode(page,'kanji');assert page.locator('#kanjiCanvas').is_visible() and page.locator('#kanjiStrokeSvg').is_visible()
    mode(page,'list');assert page.locator('.vocab-row:visible').count()==921
    assert page.locator('.vocab-table thead').evaluate('(e)=>getComputedStyle(e).position')!='absolute'
    mode(page,'grammar');page.locator('#grLearnTab').click();assert page.locator('#grTopic').is_visible() and page.locator('#grUnitList').is_visible()
    page.screenshot(path=str(ROOT/'.work/mobile-desktop-restored.png'))
    assert not errors,errors
    browser.close()
    # Firefox also exercises native details/dialog and restoration across the breakpoint.
    ff=p.firefox.launch(headless=True);fp=ff.new_page(viewport={'width':390,'height':844});ff_errors=[];fp.on('pageerror',lambda e:ff_errors.append(str(e)))
    fp.goto((ROOT/'index.html').as_uri());fp.wait_for_selector('body[data-mobile-ready=true]');geometry(fp)
    for name in ['kanji','reading','grammar','exam','quiz','list','flashcard']:mode(fp,name);geometry(fp)
    fp.reload();fp.wait_for_selector('body[data-mobile-ready=true]');geometry(fp)
    fp.set_viewport_size({'width':1280,'height':900});fp.wait_for_function('document.querySelectorAll("#sidebarNavigation [data-mode]").length===7')
    assert not ff_errors,ff_errors
    ff.close()
    print('PASS: mobile geometry/navigation, 7 modes, pickers/filters, progressive list, reading hints and panels, writing, grammar/quiz/exam flows, review disclosures, 320/390/430/740 light/dark, desktop restoration and Firefox.')
