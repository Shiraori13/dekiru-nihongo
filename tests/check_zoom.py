"""Native Chromium/Edge 200% page zoom, separate from device-scale emulation.

The dedicated profile sets Chromium's default zoom preference. Evidence verifies
the resulting 720 CSS px and DPR 2 inside a 1440 px viewport, scale 1.
Preference reference: chromium/src/chrome/browser/ui/zoom/chrome_zoom_level_prefs.cc
https://chromium.googlesource.com/chromium/src/+/lkgr/chrome/browser/ui/zoom/chrome_zoom_level_prefs.cc
"""
import sys,os,json,math,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
OUT=ROOT/os.environ.get('DEKIRU_EVIDENCE_DIR','audits/evidence/glass');OUT.mkdir(parents=True,exist_ok=True)
profile=Path(tempfile.mkdtemp(prefix='native-zoom-',dir=ROOT/'.work'));(profile/'Default').mkdir()
(profile/'Default/Preferences').write_text(json.dumps({'partition':{'default_zoom_level':{'x':math.log(2)/math.log(1.2)}}}),encoding='utf-8')
engine=os.environ.get('DEKIRU_BROWSER','edge' if os.name=='nt' else 'chromium')
options={'channel':'msedge' if engine=='edge' or engine=='firefox' and os.name=='nt' else 'chromium'}
if os.environ.get('DEKIRU_EXECUTABLE_PATH'):
    executable=Path(os.environ['DEKIRU_EXECUTABLE_PATH'])
    if 'headless_shell' in str(executable):
        candidates=list(executable.parents[2].glob('chromium-*/chrome-win64/chrome.exe'))
        if candidates:executable=candidates[-1]
    options={'executable_path':str(executable)}
with sync_playwright() as p:
    ctx=p.chromium.launch_persistent_context(str(profile),headless=True,viewport={'width':1440,'height':1000},reduced_motion='reduce',**options)
    ctx.route('https://**/*',lambda r:r.abort());page=ctx.pages[0];errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri());page.evaluate('document.fonts.ready')
    page.evaluate('async()=>{if(window.Appearance)await Appearance.ready;}')
    observed=page.evaluate('({width:innerWidth,dpr:devicePixelRatio,scale:visualViewport.scale,mobile:matchMedia("(max-width:760px)").matches})')
    assert observed=={'width':720,'dpr':2,'scale':1,'mobile':True},observed
    for theme in ['light','dark']:
      page.evaluate('(t)=>window.Appearance?Appearance.setTheme(t):document.body.dataset.theme=t',theme)
      for mode in ['flashcard','reading','kanji','grammar','exam','quiz','list']:
        button=page.locator(f'[data-mode={mode}]')
        if not button.is_visible():page.locator('#mobileMore').click()
        button.click();page.evaluate('(m)=>FeatureLoader.ensure(m)',mode);page.wait_for_timeout(60)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),mode
        page.screenshot(path=str(OUT/f'after-native-zoom-200-{mode}-{theme}.png'))
      page.locator('#appearanceToggle').click()
      assert page.locator('#appearanceDialog').evaluate('d=>{const r=d.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight;}')
      page.locator('#appearanceReset').scroll_into_view_if_needed()
      assert page.locator('#appearanceReset').evaluate('e=>e.getBoundingClientRect().bottom<=innerHeight')
      page.screenshot(path=str(OUT/f'after-native-zoom-200-drawer-{theme}.png'))
      page.keyboard.press('Escape')
      assert page.evaluate('document.activeElement.id')=='appearanceToggle'
    observed.update({'browser':ctx.browser.browser_type.name,'version':ctx.browser.version,'method':'native default page zoom preference; viewport 1440x1000; no device_scale_factor override'})
    (OUT/'native-zoom.json').write_text(json.dumps(observed,indent=2),encoding='utf-8')
    assert not errors,errors
    ctx.close()
print('PASS: native 200% zoom on Chromium/Edge; 7 modes, light/dark, 720 CSS px / DPR 2 / viewport 1440; no overflow or JS errors.')
