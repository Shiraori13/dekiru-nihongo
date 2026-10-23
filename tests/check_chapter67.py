"""Actual new-paper flow with fixed expected answers, font and mobile evidence."""
import http.server
import json
import os
import re
import sys
import threading
from functools import partial
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from fontTools.ttLib import TTFont
from browser_support import launch, continue_exam

OUT=ROOT/os.environ.get('DEKIRU_EVIDENCE_DIR','audits/evidence/chapter67');OUT.mkdir(parents=True,exist_ok=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
URL=f'http://127.0.0.1:{server.server_port}/index.html'

def open_mode(page):
    button=page.locator('[data-mode=exam]')
    if not button.is_visible():page.locator('#mobileMore').click()
    button.click()
    page.wait_for_selector('#examMode[data-ready=true]',state='attached')

def state(page):return page.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1)')
def settled(page):page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
def source_question(page,source):
    index=state(page)['order'].index(source)
    page.locator(f'[data-ex-jump="{index}"]').click();settled(page)
    return index

try:
 with sync_playwright() as playwright:
    browser=launch(playwright)
    context=browser.new_context(viewport={'width':1280,'height':900},reduced_motion='reduce')
    context.route('https://**/*',lambda r:r.abort())
    page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(URL)
    # The expanded bank remains deferred until the actual mode is opened.
    assert page.evaluate('typeof DEKIRU_EXAMS')=='undefined'
    open_mode(page);page.select_option('#exScope','6-7')
    assert page.locator('.ex-catalog .ex-card').count()==4
    assert page.locator('[data-ex-vocabulary="6-7"] .ex-vocabulary-list > div').count()==125
    metrics=page.evaluate('''()=>({dom:document.querySelectorAll('*').length,papers:DEKIRU_EXAMS.length,questions:DEKIRU_EXAMS.flatMap(e=>e.questions).length})''')
    # Glyph coverage is checked against every new question/option/explanation.
    text=page.evaluate('JSON.stringify(DEKIRU_EXAMS.filter(e=>e.id.startsWith("chapter67-")))')
    cmap=TTFont(ROOT/'assets/fonts/NotoSansJP-study.woff2').getBestCmap()
    cmap.update(TTFont(ROOT/'assets/fonts/DekiruComponents.woff2').getBestCmap())
    missing=sorted({c for c in text if re.match(r'[\u3000-\u30ff\u3400-\u9fff\uff66-\uff9f]',c) and ord(c) not in cmap})
    assert not missing,missing
    page.evaluate('document.fonts.ready')
    page.screenshot(path=str(OUT/'library-1280-light.png'))
    page.select_option('#exMinutes','0');page.locator('[data-ex-start="chapter67-1"]').click()
    page.wait_for_selector('[data-ex-answer]')
    original=state(page);assert original['order']!=list(range(45))
    source_question(page,0)
    page.get_by_role('button',name=re.compile('しあい')).filter(has_text='しあい').first.click();settled(page)
    # Set the second lexical answer correctly, then deliberately edit it wrong.
    source_question(page,1)
    page.locator('.ex-option').filter(has_text='みずぎ').click();settled(page)
    page.locator('.ex-option').filter(has_text='みずき').click();settled(page)
    page.locator('[data-ex-flag]').click();settled(page)
    before=state(page)
    assert sum(a is not None for a in before['answers'])==2
    page.reload();open_mode(page);page.locator('[data-ex-resume]').click();continue_exam(page)
    restored=state(page)
    for field in ['id','order','answers','flags','startedAt','minutes']:assert restored[field]==before[field],field
    # Changing catalog filters never replaces an active paper.
    page.locator('[data-ex-back]').first.click();page.select_option('#exScope','4-5')
    assert page.locator('[data-ex-resume]').is_visible() and state(page)['id']==original['id']
    page.select_option('#exScope','6-7');page.locator('[data-ex-resume]').click()
    page.locator('[data-ex-submit]').click();page.locator('#exConfirmAccept').click();page.wait_for_selector('#exScore')
    assert [page.locator('#ex'+s).inner_text() for s in ['Correct','Wrong','Skipped']]==['1','1','43']
    assert page.locator('#exScore').inner_text()=='0.22'
    assert page.locator('.ex-solution').count()==45
    with page.expect_download() as downloaded:page.locator('[data-ex-result-export]').click()
    result=json.loads(Path(downloaded.value.path()).read_text(encoding='utf-8'))
    assert (result['correct'],result['wrong'],result['skipped'])==(1,1,43)
    row=next(q for q in result['questions'] if q['sourceNumber']==2)
    assert row['options'][row['chosen']]=='みずき'
    assert row['options'][row['correct']]=='みずぎ'
    assert len(row['solution']['options'])==4
    page.screenshot(path=str(OUT/'result-1280-light.png'))
    for width,height in [(320,568),(390,844)]:
      page.set_viewport_size({'width':width,'height':height})
      for theme in ['light','dark']:
        page.evaluate('(t)=>document.body.dataset.theme=t',theme)
        page.locator('[data-ex-back]').first.click();page.select_option('#exScope','6-7');page.evaluate('scrollTo(0,0)')
        page.screenshot(path=str(OUT/f'library-{width}-{theme}.png'))
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        assert page.locator('#exScope').is_visible()
        page.locator('[data-ex-resume]').click();page.wait_for_selector('#exScore')
        page.screenshot(path=str(OUT/f'result-{width}-{theme}.png'))
    page.set_viewport_size({'width':390,'height':844});page.evaluate('document.body.dataset.theme="dark"')
    page.locator('[data-ex-back]').first.click();page.locator('[data-ex-start="chapter67-4"]').click()
    page.wait_for_selector('[data-ex-answer]');page.screenshot(path=str(OUT/'question-390-dark.png'))
    assert not page.locator('.ex-solution').count()
    local=browser.new_context(viewport={'width':1280,'height':900})
    local.route('https://**/*',lambda r:r.abort());lp=local.new_page();lp.on('pageerror',lambda e:errors.append(str(e)))
    lp.goto((ROOT/'index.html').as_uri());open_mode(lp);lp.select_option('#exScope','6-7')
    assert lp.locator('.ex-catalog .ex-card').count()==4
    assert not errors,errors
    (OUT/'browser.json').write_text(json.dumps({'browser':browser.browser_type.name,'version':browser.version,'transport':['HTTP','file://'],'expandedLibrary':metrics,'unhandledPageErrors':errors},indent=2),encoding='utf-8')
    browser.close()
 print('PASS: new67 papers lazy loaded; 125-word scope; all new glyphs; independent correct/wrong/blank/edit score1/1/43; reload/order/flags/clock; filter keeps active paper; 11 mobile/desktop screenshots; detailed result export and file://; no JS errors.')
finally:server.shutdown()
