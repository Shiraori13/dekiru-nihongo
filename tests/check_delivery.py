"""Unpatched user flows: lazy loading/retry/races, layouts, glyphs and file URLs."""
import sys, http.server, threading, json, re
from pathlib import Path
from functools import partial
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from fontTools.ttLib import TTFont
from browser_support import launch
OUT=ROOT/'audits/evidence';OUT.mkdir(parents=True,exist_ok=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
    def translate_path(self,path):
        if path.startswith('/dekiru-nihongo/'):path=path.replace('/dekiru-nihongo','',1)
        return super().translate_path(path)
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
URL=f'http://127.0.0.1:{server.server_port}/index.html'
def mode(page,name):
    b=page.locator(f'[data-mode={name}]')
    if not b.is_visible():page.locator('#mobileMore').click()
    b.click()
    page.wait_for_function('(m)=>currentMode===m',arg=name)
    if name in ['reading','kanji','grammar','exam']:
        page.evaluate('(m)=>FeatureLoader.ensure(m)',name)
    page.wait_for_timeout(80)
def geometry(page):
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),'overflow'
    if page.viewport_size['width']<=760:
        assert page.locator('header').bounding_box()['height']<=78
        assert page.locator('.mode-tabs').bounding_box()['y']>page.locator('header').bounding_box()['height']
try:
 with sync_playwright() as p:
    browser=launch(p);ctx=browser.new_context(viewport={'width':390,'height':844},reduced_motion='reduce')
    ctx.route('https://**/*',lambda r:r.abort())
    page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(URL)
    page.wait_for_selector('body[data-mobile-ready=true]');page.evaluate('document.fonts.ready')
    assert page.evaluate('typeof GRAMMAR_DATA')=='undefined'
    assert page.evaluate('typeof READINGS')=='undefined'
    assert page.evaluate('typeof KANJI_CHARACTERS')=='undefined'
    assert page.evaluate('typeof DEKIRU_EXAMS')=='undefined'
    metrics=page.evaluate('''()=>({dom:document.querySelectorAll('*').length,documentBytes:performance.getEntriesByType('navigation')[0].decodedBodySize,resources:performance.getEntriesByType('resource').filter(r=>r.name.includes('127.0.0.1')).map(r=>({path:new URL(r.name).pathname,bytes:r.decodedBodySize}))})''')
    metrics['bytes']=metrics['documentBytes']+sum(r['bytes'] for r in metrics['resources']);metrics['requests']=len(metrics['resources'])+1
    (OUT/'after-metrics.json').write_text(json.dumps(metrics,indent=2),encoding='utf-8')
    assert metrics['bytes']<1000000,metrics
    # First load fails, displays a retry, then succeeds without duplicate init.
    failed=[]
    def once(route):
        if not failed: failed.append(True);route.abort()
        else: route.continue_()
    page.route('**/data/readings.js',once)
    page.locator('[data-mode=reading]').click();page.wait_for_selector('#featureStatus button')
    assert 'Không tải được' in page.locator('#featureStatus').inner_text()
    page.locator('#featureStatus button').click();page.wait_for_selector('#readingTitle')
    page.wait_for_function('document.querySelector("#featureStatus").hidden')
    # Rapid switching may finish old requests, but must leave the active view alone.
    page.evaluate('()=>{switchMode("kanji");switchMode("grammar");switchMode("flashcard");}')
    page.evaluate('async()=>{await FeatureLoader.ensure("kanji");await FeatureLoader.ensure("grammar");}')
    assert page.locator('#flashcardMode').is_visible() and not page.locator('#grammarMode').is_visible()
    awaiters=page.evaluate('''async()=>{await Promise.all([FeatureLoader.ensure('exam'),FeatureLoader.ensure('exam')]);return document.querySelectorAll('#exLibrary').length;}''')
    assert awaiters==1
    # Glyph coverage from actual rendered text in all seven modes, plus all data.
    font=TTFont(ROOT/'assets/fonts/NotoSansJP-study.woff2');cmap=font.getBestCmap()
    cmap.update(TTFont(ROOT/'assets/fonts/DekiruComponents.woff2').getBestCmap())
    texts=[]
    for width,height in [(320,568),(390,844),(768,1024),(1440,1000)]:
      page.set_viewport_size({'width':width,'height':height})
      for theme in ['light','dark']:
        page.evaluate('(t)=>document.body.dataset.theme=t',theme)
        for name in ['flashcard','quiz','list','reading','kanji','grammar','exam']:
          mode(page,name);geometry(page);page.evaluate('scrollTo(0,0)')
          texts.append(page.locator('body').text_content())
          page.screenshot(path=str(OUT/f'after-{name}-{width}-{theme}.png'))
    texts.extend(f.read_text(encoding='utf-8') for f in (ROOT/'data').glob('*.js'))
    missing=sorted({c for c in ''.join(texts) if re.match(r'[\u3000-\u30ff\u3400-\u9fff\uff66-\uff9f]',c) and ord(c) not in cmap})
    assert not missing,missing
    assert page.evaluate('''async()=>{const faces=await document.fonts.load('20px "Dekiru Components"','㑒丆业戋龰龶龷');return faces.length>0&&faces.every(f=>f.status==='loaded');}''')
    assert page.locator('body').evaluate('(e)=>getComputedStyle(e).fontFamily.includes("Noto Sans JP")')
    assert not any(marker in ''.join(texts) for marker in ['á»','áº','Ä‘','Ã ','Ã¢']), 'Corrupted UTF-8 label'
    page.set_viewport_size({'width':390,'height':844});page.evaluate('document.body.dataset.theme="dark"')
    mode(page,'exam');page.select_option('#exMinutes','0');page.locator('[data-ex-start="chapter45-1"]').click();page.wait_for_selector('.mobile-paper-progress time')
    page.screenshot(path=str(OUT/'after-exam-question-390-dark.png'))
    page.locator('[data-ex-answer="0"]').click();page.wait_for_function('document.querySelector("#exAnsweredCount").textContent.startsWith("1/")')
    page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click();page.wait_for_selector('#exScore');page.wait_for_timeout(80)
    page.screenshot(path=str(OUT/'after-exam-result-390-dark.png'))
    mode(page,'grammar');page.locator('[data-gr-drill]').click();page.wait_for_selector('#grQuestionTitle');page.wait_for_timeout(80)
    page.screenshot(path=str(OUT/'after-grammar-question-390-dark.png'))
    # 200% reflow equivalent: 1440 physical px -> 720 CSS px at device scale 2.
    zoom=browser.new_context(viewport={'width':720,'height':500},device_scale_factor=2,reduced_motion='reduce')
    zoom.route('https://**/*',lambda r:r.abort());zp=zoom.new_page();zp.goto(URL)
    for name in ['flashcard','reading','grammar','exam']:
      mode(zp,name);geometry(zp)
    zp.screenshot(path=str(OUT/'after-reflow-200-percent.png'))
    # Native dialog: focus remains inside, Escape restores the actual trigger.
    page.set_viewport_size({'width':1440,'height':1000});mode(page,'grammar')
    page.locator('#grLearnTab').click();page.locator('[data-gr-drill]').click()
    assert page.locator('.study-confirm [data-continue]').evaluate('(e)=>e===document.activeElement')
    for _ in range(5):page.keyboard.press('Tab');assert page.evaluate('!!document.activeElement.closest(".study-confirm")')
    page.keyboard.press('Escape');assert page.locator('[data-gr-drill]').evaluate('(e)=>e===document.activeElement')
    # Local files also load each feature on demand with no HTTP server.
    local=browser.new_context();local.route('https://**/*',lambda r:r.abort());lp=local.new_page();lp.on('pageerror',lambda e:errors.append(str(e)));lp.goto((ROOT/'index.html').as_uri())
    for name in ['reading','kanji','grammar','exam']:mode(lp,name)
    assert lp.locator('#examMode').get_attribute('data-ready')=='true'
    lp.goto(URL.replace('/index.html','/dekiru-nihongo/index.html'))
    for name in ['reading','kanji','grammar','exam']:mode(lp,name)
    assert lp.locator('#examMode').get_attribute('data-ready')=='true'
    # An active timed paper is necessary startup work after reload, even if the
    # learner remains on Flashcards. Other feature banks must stay unloaded.
    lp.select_option('#exMinutes','45');lp.locator('[data-ex-start="chapter45-1"]').click();lp.wait_for_selector('[data-ex-answer]')
    lp.reload();lp.wait_for_selector('#examMode[data-ready=true]',state='attached')
    assert lp.evaluate('currentMode')=='flashcard'
    assert lp.evaluate('typeof READINGS')=='undefined' and lp.evaluate('typeof KANJI_CHARACTERS')=='undefined'
    resume=lp.evaluate('''()=>({dom:document.querySelectorAll('*').length,resources:performance.getEntriesByType('resource').map(r=>({path:new URL(r.name).pathname,bytes:r.decodedBodySize})),documentBytes:performance.getEntriesByType('navigation')[0].decodedBodySize})''')
    (OUT/'resume-metrics.json').write_text(json.dumps(resume,indent=2),encoding='utf-8')
    lp.clock.install();lp.clock.fast_forward(45*60000+1000)
    lp.wait_for_function('JSON.parse(localStorage.dekiru_exam_attempt_v1).submittedAt>0')
    assert lp.evaluate('currentMode')=='flashcard'
    (OUT/'browser.json').write_text(json.dumps({'browser':browser.browser_type.name,'version':browser.version,'python':sys.version,'transport':['HTTP','file://','Pages subdirectory simulation'],'zoom':'200% reflow emulation, not browser-native zoom UI'},indent=2),encoding='utf-8')
    assert not errors,errors
    browser.close()
 print(f'PASS: initial {metrics["bytes"]} bytes / {metrics["dom"]} DOM; lazy retry/race/dedup, 56 light/dark mode screenshots, 320/390/768/1440, 200% reflow emulation, Japanese glyph coverage, keyboard dialog and file://.')
finally:server.shutdown()
