"""Regressions for duplicated mobile labels and the reserved appearance lane.

Uses actual navigation/dialog controls without patching application behavior.
Screenshots and geometry are saved for a human review, in addition to assertions.
"""
import json
import os
import re
import struct
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance

OUT = ROOT / os.environ.get('DEKIRU_UI_SPACE_EVIDENCE_DIR', 'audits/evidence/ui-space')
NAMES = {
    'flashcard': 'Thẻ ghi nhớ', 'quiz': 'Kiểm tra từ vựng',
    'list': 'Danh sách', 'reading': 'Luyện đọc', 'kanji': 'Hán tự',
    'grammar': 'Ngữ pháp', 'exam': 'Luyện đề',
}


def rectangles(page):
    return page.evaluate('''()=>Object.fromEntries(['main','.flashcard-container'].map(selector=>{
      const r=document.querySelector(selector).getBoundingClientRect();
      return [selector,{x:r.x,y:r.y,width:r.width,height:r.height,right:r.right}];
    }))''')


def same_rectangles(before, after):
    for selector in before:
        for dimension, value in before[selector].items():
            assert abs(value - after[selector][dimension]) <= .1, {
                'element':selector, 'before':before, 'after':after}


def theme(page, name):
    page.locator('#appearanceToggle').click()
    page.locator('#appearanceTheme' + name.title()).click()
    close_appearance(page)


def navigation(page, width):
    """The seven original buttons survive every responsive move, once each."""
    page.wait_for_function('''mobile=>mobile
      ? document.querySelectorAll('.mode-tabs [data-mode]').length===4
        &&document.querySelectorAll('#mobileMenu [data-mode]').length===3
      : document.querySelectorAll('#sidebarNavigation [data-mode]').length===7
        &&!document.querySelector('#mobileMore')''', arg=width<=760)
    assert sorted(page.locator('[data-mode]').evaluate_all('(es)=>es.map(e=>e.dataset.mode)')) == sorted(NAMES)
    assert page.evaluate('''()=>originalNavButtons.every(e=>e.isConnected)
      &&originalNavButtons.length===document.querySelectorAll('[data-mode]').length''')
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), width


def menu_items(page):
    opaque_panel(page,'#mobileMenu')
    items = page.locator('#mobileMenu [data-mode]').evaluate_all('''es=>es.map(e=>({
      mode:e.dataset.mode,text:e.innerText.trim(),
      icons:[...e.querySelectorAll('svg')].filter(s=>s.getClientRects().length
        &&getComputedStyle(s).visibility!=='hidden').length,
      width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,
      desktopLabel:getComputedStyle(e.querySelector('.desktop-tab-label')).display,
      mobileLabel:getComputedStyle(e.querySelector('.mobile-tab-label')).display,
      clipped:e.scrollWidth>e.clientWidth+1||e.scrollHeight>e.clientHeight+1
    }))''')
    assert len(items)==3
    assert {item['mode'] for item in items} == {'quiz','list','kanji'}
    for item in items:
        assert item['text']==NAMES[item['mode']], item
        assert item['icons']==1, item
        assert item['desktopLabel']=='none' and item['mobileLabel']!='none', item
        assert item['height']>=44 and not item['clipped'], item
    return items


def opaque_panel(page,selector):
    """No backdrop-filter dependency: rendered text underneath must be hidden."""
    color=page.locator(selector).evaluate('e=>getComputedStyle(e).backgroundColor')
    channels=[float(part) for part in re.findall(r'[\d.]+',color)]
    assert len(channels)==3 or channels[-1]==1, {'selector':selector,'background':color}


def quiz_state(page):
    return page.evaluate('''()=>({questions:quizQuestions,options:quizOptionSets,
      answers:quizAnswers,index:quizIndex,run:quizRun,state:quizState})''')


def detailed_image():
    """Small contrasting PNG fixture kept in memory, never an app asset."""
    def chunk(kind,payload):
        return struct.pack('>I',len(payload))+kind+payload+struct.pack('>I',zlib.crc32(kind+payload))
    rows=b''.join(b'\x00'+b''.join(bytes((255,20,130) if (x+y)%2 else (10,200,250))
        for x in range(32)) for y in range(32))
    return b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>2I5B',32,32,8,2,0,0,0))+chunk(b'IDAT',zlib.compress(rows))+chunk(b'IEND',b'')


server, URL = serve()
OUT.mkdir(parents=True, exist_ok=True)
report = {'browser':os.environ.get('DEKIRU_BROWSER','edge'), 'mobile':[], 'desktop':[]}
try:
    with sync_playwright() as playwright:
        browser=launch(playwright)
        report['browserVersion']=browser.version
        context=browser.new_context(viewport={'width':1920,'height':1000},reduced_motion='reduce')
        context.route('https://**/*',lambda route:route.abort())
        page=context.new_page()
        errors=[]
        page.on('pageerror',lambda error:errors.append(str(error)))
        page.goto(URL)
        ready(page)
        page.evaluate('window.originalNavButtons=[...document.querySelectorAll("[data-mode]")]')

        # Full-width study area is stable while the settings overlay opens,
        # closes or changes theme. No permanent lane for a normally hidden panel.
        for width in [1280,1440,1600,1920]:
            page.set_viewport_size({'width':width,'height':1000})
            navigation(page,width)
            for name in ['light','dark']:
                theme(page,name)
                page.evaluate('scrollTo(0,0)')
                before=rectangles(page)
                assert 12<=width-before['main']['right']<=32, before
                assert before['main']['width']==before['.flashcard-container']['width'], before
                assert page.locator('#appearanceDialog').is_hidden()
                page.screenshot(path=str(OUT/f'after-closed-{width}-{name}.png'))
                page.locator('#appearanceToggle').click()
                opaque_panel(page,'#appearanceDialog')
                opened=rectangles(page)
                same_rectangles(before,opened)
                panel=page.locator('#appearanceDialog').bounding_box()
                assert panel['x']+panel['width']<=width+1 and panel['x']>=0, panel
                assert panel['x']<before['main']['right'], 'Settings must overlay the study area'
                assert page.evaluate('!!document.activeElement.closest("#appearanceDialog")')
                for _ in range(3):
                    page.keyboard.press('Tab')
                    assert page.evaluate('!!document.activeElement.closest("#appearanceDialog")')
                page.screenshot(path=str(OUT/f'after-open-{width}-{name}.png'))
                close_appearance(page)
                same_rectangles(before,rectangles(page))
                assert page.evaluate('document.activeElement.id')=='appearanceToggle'
                report['desktop'].append({'width':width,'theme':name,'before':before,'opened':opened,'panel':panel})

        # Resizing an already-open panel through the former 1500px breakpoint
        # must keep the same overlay policy, without suddenly reserving a lane.
        page.locator('#appearanceToggle').click()
        for width in [1440,1499,1500,1600,1920]:
            page.set_viewport_size({'width':width,'height':1000})
            during=rectangles(page)
            assert 12<=width-during['main']['right']<=32,during
            close_appearance(page)
            same_rectangles(during,rectangles(page))
            page.locator('#appearanceToggle').click()
        close_appearance(page)

        # Detailed custom backgrounds cannot show legible underlying study text
        # through the settings panel, even at the lowest glass opacity setting.
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceUpload').set_input_files({
            'name':'ui-space-check.png','mimeType':'image/png','buffer':detailed_image()})
        page.wait_for_function('Appearance.getState().background==="custom"&&!Appearance.getState().uploadBusy')
        page.locator('#appearanceOpacity').fill('55')
        for name in ['light','dark']:
            page.locator('#appearanceTheme'+name.title()).click()
            opaque_panel(page,'#appearanceDialog')
            page.screenshot(path=str(OUT/f'after-custom-low-opacity-{name}.png'))
        page.locator('[data-background-choice=mint]').click()
        page.locator('#appearanceOpacity').fill('66')
        close_appearance(page)

        # Keep a real partial quiz while moving the same original controls.
        mode(page,'quiz')
        page.locator('input[name=quizCount][value="5"]').check()
        page.locator('.quiz-start-btn').click()
        page.locator('.quiz-opt-btn').nth(1).click()
        attempt=quiz_state(page)
        assert sum(answer is not None for answer in attempt['answers'])==1
        for width,height in [(320,568),(390,844),(768,1024),(1920,1000),(390,844),(1440,1000)]:
            page.set_viewport_size({'width':width,'height':height})
            navigation(page,width)
            for name in ['light','dark']:
                theme(page,name)
                if width<=760:
                    page.locator('#mobileMore').click()
                    items=menu_items(page)
                    page.screenshot(path=str(OUT/f'after-menu-{width}-{name}.png'))
                    page.keyboard.press('Escape')
                    page.wait_for_function('!document.querySelector("#mobileMenu").open')
                    assert page.evaluate('document.activeElement.id')=='mobileMore'
                    report['mobile'].append({'width':width,'theme':name,'items':items})
                    # Each row activates its actual mode with one click.
                    for selected in ['list','kanji','quiz']:
                        page.locator('#mobileMore').click()
                        page.locator(f'#mobileMenu [data-mode={selected}]').click()
                        page.wait_for_function('mode=>currentMode===mode',arg=selected)
                        assert not page.locator('#mobileMenu').evaluate('e=>e.open')
                        assert page.locator(f'[data-mode={selected}]').get_attribute('aria-pressed')=='true'
                assert quiz_state(page)==attempt, 'Menu, resize or settings reset a partial quiz'
                assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==1

        # Largest supported UI text does not reintroduce the double row.
        page.set_viewport_size({'width':320,'height':568})
        navigation(page,320)
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceFontSize').select_option('20')
        close_appearance(page)
        page.locator('#mobileMore').click()
        menu_items(page)
        page.screenshot(path=str(OUT/'after-menu-320-dark-ui20.png'))
        page.keyboard.press('Escape')
        assert quiz_state(page)==attempt

        # CSS behavior is the same for file:// and the Pages project prefix.
        for address in [ROOT.joinpath('index.html').as_uri(),URL.replace('/index.html','/dekiru-nihongo/index.html')]:
            isolated=context.new_page()
            isolated.on('pageerror',lambda error:errors.append(str(error)))
            isolated.set_viewport_size({'width':390,'height':844})
            isolated.goto(address)
            ready(isolated)
            isolated.evaluate('window.originalNavButtons=[...document.querySelectorAll("[data-mode]")]')
            navigation(isolated,390)
            isolated.locator('#mobileMore').click()
            menu_items(isolated)
            isolated.keyboard.press('Escape')
            isolated.set_viewport_size({'width':1920,'height':1000})
            navigation(isolated,1920)
            before=rectangles(isolated)
            assert 12<=1920-before['main']['right']<=32, before
            isolated.locator('#appearanceToggle').click()
            same_rectangles(before,rectangles(isolated))
            isolated.close()
        assert not errors,errors
        report['unhandledErrors']=errors
        (OUT/f'results-{report["browser"]}.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
        browser.close()
    print('PASS: single mobile labels/icons, original navigation, full-width stable study area, focus, partial quiz, file/Pages prefix.')
finally:
    server.shutdown()
