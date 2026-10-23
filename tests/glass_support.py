"""Unpatched browser helpers for the liquid glass acceptance checks."""
import http.server
import os
import threading
from functools import partial
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / os.environ.get('DEKIRU_EVIDENCE_DIR', 'audits/evidence/glass')


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def translate_path(self, path):
        if path.startswith('/dekiru-nihongo/'):
            path = path.replace('/dekiru-nihongo', '', 1)
        return super().translate_path(path)


def serve():
    server = http.server.ThreadingHTTPServer(
        ('127.0.0.1', 0), partial(Quiet, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server, f'http://127.0.0.1:{server.server_port}/index.html'


def ready(page):
    page.wait_for_function('!!window.Appearance')
    page.evaluate('async()=>{await Appearance.ready;await document.fonts.ready;}')
    page.wait_for_selector('body[data-mobile-ready=true]', state='attached')


def mode(page, name):
    # Viewport CSS updates before the matchMedia/resize handler moves the
    # original buttons. Wait for that actual move before choosing menu/sidebar.
    page.wait_for_function('''()=>matchMedia('(max-width:760px)').matches
      ? !!document.querySelector('#mobileMore')&&document.querySelectorAll('.mode-tabs [data-mode]').length===4
      : !document.querySelector('#mobileMore')&&document.querySelectorAll('#sidebarNavigation .mode-tabs [data-mode]').length===7''')
    button = page.locator(f'[data-mode="{name}"]')
    if not button.is_visible():
        page.locator('#mobileMore').click()
    button.click()
    page.wait_for_function('(m)=>currentMode===m', arg=name)
    if name in ['reading', 'kanji', 'grammar', 'exam']:
        page.evaluate('(m)=>FeatureLoader.ensure(m)', name)
    page.wait_for_function('(m)=>document.body.dataset.mobileMode===m', arg=name)


def close_appearance(page):
    page.keyboard.press('Escape')
    # Native close queues its event (including focus restoration) after .open
    # becomes false. Do not type into a newly focused input before that event.
    page.wait_for_function('''!document.querySelector("#appearanceDialog").open &&
      !document.querySelector('[data-appearance-open][aria-expanded="true"]')''')


def geometry(page):
    result = page.evaluate('''()=>{
      const bounds=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom};};
      const sidebar=document.querySelector('#appSidebar'),header=document.querySelector('header'),main=document.querySelector('main');
      const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);
      return {width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,
        sidebar:bounds(sidebar),header:bounds(header),main:bounds(main),duplicateIds:ids.filter((id,i)=>ids.indexOf(id)!==i),
        originalButtons:[...document.querySelectorAll('[data-mode]')].map(e=>e.dataset.mode)};
    }''')
    assert not result['overflow'], result
    assert not result['duplicateIds'], result['duplicateIds']
    assert sorted(result['originalButtons']) == sorted(
        ['flashcard', 'quiz', 'list', 'reading', 'kanji', 'grammar', 'exam']), result
    if result['width'] > 1100:
        assert 224 <= result['sidebar']['width'] <= 240, result
        assert result['main']['x'] >= result['sidebar']['right'] - 1, result
        assert result['header']['x'] >= result['sidebar']['right'] - 1, result
    elif result['width'] > 760:
        assert 64 <= result['sidebar']['width'] <= 112, result
        assert result['main']['x'] >= result['sidebar']['right'] - 1, result
    else:
        assert page.locator('#appSidebar').is_hidden()
        assert page.locator('.mode-tabs [data-mode]').count() == 4
        assert page.locator('#mobileMenu [data-mode]').count() == 3
        assert page.locator('#mobileAppearanceHost #appearanceToggle').count() == 1
    return result
