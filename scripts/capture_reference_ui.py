"""Capture repeatable reference screenshots through the real quiz controls.

Run `python scripts/capture_reference_ui.py before` before presentation changes,
then run with `after` after changing them. Each browser context is disposable;
the seed is only a screenshot fixture, never part of production quiz logic.
"""
import hashlib
import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT / '.tools'), str(ROOT / 'tests')]
from playwright.sync_api import sync_playwright
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance

stage = sys.argv[1] if len(sys.argv) > 1 else 'before'
if stage not in ['before', 'after']:
    raise SystemExit('Choose before or after.')
out = ROOT / 'audits/evidence/reference'
out.mkdir(parents=True, exist_ok=True)
if stage == 'before':
    paths = [ROOT / 'index.html'] + list((ROOT / 'assets').rglob('*')) + list((ROOT / 'data').rglob('*'))
    hashes = {str(path.relative_to(ROOT)).replace('\\', '/'):hashlib.sha256(path.read_bytes()).hexdigest()
              for path in paths if path.is_file()}
    (out / 'before-hashes.json').write_text(json.dumps(hashes, indent=2), encoding='utf-8')

server, url = serve()
reports = []
try:
    with sync_playwright() as p:
        browser = launch(p)
        for width,height in [(1600,1000),(1440,900),(390,844)]:
            ctx = browser.new_context(viewport={'width':width,'height':height}, reduced_motion='reduce')
            ctx.route('https://**/*', lambda route: route.abort())
            page = ctx.new_page()
            page.goto(url)
            ready(page)
            mode(page, 'quiz')
            page.locator('input[name=quizCount][value="5"]').check()
            page.evaluate('''()=>{window.referenceOriginalRandom=Math.random;let seed=92713;
              Math.random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};}''')
            page.locator('.quiz-start-btn').click()
            page.evaluate('Math.random=window.referenceOriginalRandom;delete window.referenceOriginalRandom;')
            page.locator('.quiz-opt-btn').nth(1).click()
            for theme in ['light','dark']:
                page.locator('#appearanceToggle').click()
                page.locator('#appearanceTheme'+theme.title()).click()
                close_appearance(page)
                page.evaluate('scrollTo(0,0)')
                page.wait_for_timeout(150)
                page.screenshot(path=str(out/f'{stage}-quiz-{width}-{theme}.png'))
                states=page.evaluate('''()=>({questions:quizQuestions,options:quizOptionSets,answers:quizAnswers,index:quizIndex,
                  prompt:document.querySelector('#quizKanji').textContent,
                  optionsVisible:[...document.querySelectorAll('.quiz-opt-btn')].map(e=>e.textContent),
                  header:document.querySelector('header').getBoundingClientRect().toJSON(),
                  sidebar:document.querySelector('#appSidebar').getBoundingClientRect().toJSON()})''')
                reports.append({'width':width,'height':height,'theme':theme,**states})
                if width==1600:
                    page.locator('#appearanceToggle').click()
                    page.screenshot(path=str(out/f'{stage}-drawer-{width}-{theme}.png'))
                    close_appearance(page)
            ctx.close()
        (out/f'{stage}-screens.json').write_text(json.dumps({'browser':browser.browser_type.name,'version':browser.version,
          'fixture':'Seed 92713 installed before real Start click for matching screenshots; second answer selected.',
          'screens':reports},ensure_ascii=False,indent=2),encoding='utf-8')
        browser.close()
    print(f'Captured {stage}: 6 quiz views + 2 drawer views with matching question fixture.')
finally:
    server.shutdown()
