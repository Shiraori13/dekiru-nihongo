"""Appearance controls preserve real study attempts and safely store custom images."""
import json
import struct
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright
from fontTools.ttLib import TTFont
from browser_support import launch
from glass_support import serve, ready, mode, close_appearance, geometry, OUT


def png(width=48, height=32, color=(117, 213, 198)):
    """Small deterministic raster fixture; no image service or extra dependency."""
    def chunk(kind, data):
        return struct.pack('>I', len(data)) + kind + data + struct.pack('>I', zlib.crc32(kind + data))
    rows = (b'\0' + bytes(color) * width) * height
    return (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>2I5B', width, height, 8, 2, 0, 0, 0))
            + chunk(b'IDAT', zlib.compress(rows)) + chunk(b'IEND', b''))


def upload(page, data=None, name='background.png', mime='image/png'):
    page.locator('#appearanceUpload').set_input_files(
        {'name': name, 'mimeType': mime, 'buffer': png() if data is None else data})
    page.wait_for_function('!Appearance.getState().uploadBusy')


def state(page):
    return page.evaluate('Appearance.getState()')


def settings(page, theme='dark', background='sakura'):
    """Use the visible controls, without invoking application setters."""
    page.locator('#appearanceToggle').click()
    page.locator('#appearanceTheme' + theme.title()).click()
    page.locator(f'[data-background-choice="{background}"]').click()
    page.locator('#appearanceOpacity').fill('72')
    page.locator('#appearanceBlur').fill('8')
    close_appearance(page)


def study_state(page):
    return page.evaluate('''()=>({mode:currentMode,quiz:{questions:quizQuestions,answers:quizAnswers,
      options:quizOptionSets,index:quizIndex,run:quizRun,state:quizState},
      grammar:localStorage.getItem('dekiru_grammar_v1'),exam:localStorage.getItem('dekiru_exam_attempt_v1')})''')


def background_blob(page):
    return page.evaluate('''()=>new Promise((resolve,reject)=>{
      const r=indexedDB.open('dekiru_appearance_v1',1);r.onerror=()=>reject(r.error);
      r.onsuccess=()=>{const db=r.result,tx=db.transaction('background','readonly'),read=tx.objectStore('background').get('custom');
        tx.oncomplete=async()=>{const b=read.result;db.close();if(!(b instanceof Blob)){resolve(null);return;}
          const image=await createImageBitmap(b);resolve({size:b.size,type:b.type,width:image.width,height:image.height});image.close();};
        tx.onerror=()=>reject(tx.error);};
    })''')


def custom_url(page):
    return page.evaluate('''()=>{
      const styles=[getComputedStyle(document.documentElement),getComputedStyle(document.body),getComputedStyle(document.body,'::before'),
        ...[...document.querySelectorAll('[class*=background]')].map(e=>getComputedStyle(e))];
      const values=styles.flatMap(s=>[s.backgroundImage,...[...s].filter(n=>n.startsWith('--')).map(n=>s.getPropertyValue(n))]);
      const value=values.find(v=>/blob:/.test(v));return value?value.match(/blob:[^"')\s]+/)[0]:null;
    }''')


def custom_is_usable(page):
    """Load the actual CSS URL to detect a revoked, missing or corrupt background."""
    address = custom_url(page)
    return bool(address) and page.evaluate('''async url=>{
      const img=new Image();img.src=url;await img.decode();return img.naturalWidth>0&&img.naturalHeight>0;
    }''', address)


def feature_theme(page, feature):
    """A stylesheet loaded later must retain the shared study material/text colors."""
    selectors = {'grammar': ('.gr-detail', '#grStart'), 'exam': ('.ex-card', '.ex-primary')}
    card, button = selectors[feature]
    report = page.evaluate('''([feature,card,button])=>{
      const probe=document.createElement('span');probe.style.cssText='position:absolute;visibility:hidden;background:var(--surface-strong);color:var(--primary-text)';
      document.body.append(probe);const expected=getComputedStyle(probe),surface=expected.backgroundColor,text=expected.color;probe.remove();
      return {links:document.querySelectorAll(`link[href="assets/${feature==='exam'?'exams':'grammar'}.css"]`).length,
        surface,text,card:getComputedStyle(document.querySelector(card)).backgroundColor,
        button:getComputedStyle(document.querySelector(button)).color};
    }''', [feature, card, button])
    assert report['links'] == 1 and report['surface'] == report['card'] and report['text'] == report['button'], report


server, URL = serve()
OUT.mkdir(parents=True, exist_ok=True)
try:
    with sync_playwright() as p:
        browser = launch(p)
        errors = []

        def context(**kwargs):
            ctx = browser.new_context(viewport={'width':1440,'height':1000}, reduced_motion='reduce', **kwargs)
            ctx.route('https://**/*', lambda route: route.abort())
            return ctx

        ctx = context()
        # The existing theme choice remains the first-load authority.
        ctx.add_init_script('if(!localStorage.getItem("dekiru_theme"))localStorage.setItem("dekiru_theme","dark");')
        page = ctx.new_page()
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.clock.install()
        page.goto(URL)
        ready(page)
        # Verify offline Vietnamese coverage in the bundled face, not a system fallback.
        vietnamese = set('ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯư') | {chr(n) for n in range(0x1ea0,0x1efa)}
        cmap = TTFont(ROOT / 'assets/fonts/PlusJakartaSans-latin.woff2').getBestCmap()
        assert all(ord(char) in cmap for char in vietnamese)
        assert page.evaluate('''async()=>{const faces=await document.fonts.load('17px "Plus Jakarta Sans"','Giao diện · Khôi phục · Ngữ pháp');
          return faces.length>0&&faces.every(face=>face.status==='loaded')&&getComputedStyle(document.body).fontFamily.startsWith('"Plus Jakarta Sans"');}''')
        assert not page.evaluate('performance.getEntriesByType("resource").some(r=>/fonts\\.googleapis|fonts\\.gstatic/.test(r.name))')
        assert page.locator('body').get_attribute('data-theme') == 'dark'
        assert page.locator('#appearanceDialog').is_hidden()
        assert page.locator('[data-mode=appearance]').count() == 0
        assert page.locator('#appearanceToggle').count() == page.locator('#themeToggle').count() == 1
        geometry(page)

        # Mouse, native keyboard trapping, Escape and actual-trigger restoration.
        before = study_state(page)
        page.locator('#appearanceToggle').click()
        dialog = page.locator('#appearanceDialog')
        assert dialog.evaluate('(d)=>d instanceof HTMLDialogElement&&d.open&&d.matches(":modal")')
        assert dialog.get_attribute('aria-label') or dialog.get_attribute('aria-labelledby')
        assert page.evaluate('!!document.activeElement.closest("#appearanceDialog")')
        for key in ['Tab'] * 24 + ['Shift+Tab'] * 24:
            page.keyboard.press(key)
            assert page.evaluate('!!document.activeElement.closest("#appearanceDialog")')
        close_appearance(page)
        assert page.evaluate('document.activeElement.id') == 'appearanceToggle'
        page.keyboard.press('Enter')
        assert dialog.is_visible()
        page.locator('[data-appearance-close]').click()
        page.wait_for_function('!document.querySelector("#appearanceDialog").open')
        assert page.evaluate('document.activeElement.id') == 'appearanceToggle'
        page.keyboard.press('Space')
        assert dialog.is_visible()
        close_appearance(page)
        assert study_state(page) == before

        # Existing D shortcut must ignore text entry and compose with all controls.
        page.locator('#searchBox').focus()
        page.keyboard.type('d')
        assert page.locator('body').get_attribute('data-theme') == 'dark', page.evaluate('''()=>({
          focus:document.activeElement.tagName+'#'+document.activeElement.id,value:document.querySelector('#searchBox').value,
          dialogs:[...document.querySelectorAll('dialog[open]')].map(e=>e.id)})''')
        page.locator('#searchBox').fill('')
        page.locator('#appearanceToggle').focus()
        page.keyboard.press('d')
        assert page.locator('body').get_attribute('data-theme') == 'light'
        page.locator('#themeToggle').click()
        page.locator('#appearanceToggle').click()
        assert page.locator('#appearanceThemeDark').get_attribute('aria-pressed') == 'true'
        page.locator('#appearanceThemeLight').click()
        assert page.evaluate('localStorage.getItem("dekiru_theme")') == 'light'
        page.locator('[data-background-choice=ocean]').click()
        assert page.locator('[data-background-choice=ocean]').get_attribute('aria-pressed') == 'true'
        assert page.locator('[data-background-choice=mint]').get_attribute('aria-pressed') == 'false'
        page.locator('#appearanceOpacity').fill('72')
        page.locator('#appearanceBlur').fill('8')
        page.locator('#appearanceFontSize').select_option('20')
        actual = state(page)
        assert actual['theme'] == 'light' and actual['background'] == 'ocean', actual
        assert actual['glassAlpha'] == .72 and actual['glassBlur'] == 8 and actual['uiSize'] == 20, actual
        assert page.evaluate('parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--glass-alpha"))') == .72
        assert page.evaluate('getComputedStyle(document.documentElement).getPropertyValue("--glass-blur").trim()') == '8px'
        assert page.locator('body').evaluate('(e)=>parseFloat(getComputedStyle(e).fontSize)') == 20
        assert page.locator('#appSidebar').evaluate('(e)=>getComputedStyle(e).opacity') == '1'
        assert page.locator('.flashcard-face').first.evaluate('(e)=>getComputedStyle(e).opacity') == '1'
        close_appearance(page)
        page.reload()
        ready(page)
        assert state(page)['background'] == 'ocean' and state(page)['uiSize'] == 20
        assert state(page)['theme'] == 'light' and state(page)['glassAlpha'] == .72 and state(page)['glassBlur'] == 8

        mode(page, 'reading')
        page.locator('#readingFontSize').select_option('34')
        settings(page)
        assert page.locator('#readingBody').evaluate('(e)=>getComputedStyle(e).fontSize') == '34px'
        assert page.locator('#readingFontSize').input_value() == '34'
        page.set_viewport_size({'width':320,'height':568})
        geometry(page)
        page.locator('#appearanceToggle').click()
        assert page.locator('#appearanceDialog').evaluate('(d)=>d.scrollWidth<=d.clientWidth')
        page.locator('#appearanceReset').scroll_into_view_if_needed()
        assert page.locator('#appearanceReset').evaluate('e=>e.getBoundingClientRect().bottom<=innerHeight')
        page.screenshot(path=str(OUT / 'glass-drawer-large-type-320.png'))
        close_appearance(page)
        page.set_viewport_size({'width':1440,'height':1000})

        # Invalid data never replaces the selected preset; valid image uses Blob IDB.
        page.locator('#appearanceToggle').click()
        for data, name, mime in [(b'broken image bytes','broken.png','image/png'), (b'not an image','note.txt','text/plain')]:
            previous = state(page)['background']
            upload(page, data, name, mime)
            page.wait_for_function('document.querySelector("#appearanceUploadStatus").textContent.trim().length>0')
            assert state(page)['background'] == previous
            assert page.locator('#appearanceUploadStatus').inner_text().strip()
        page.evaluate('''()=>{window.revokedAppearanceURLs=[];const revoke=URL.revokeObjectURL.bind(URL);URL.revokeObjectURL=u=>{revokedAppearanceURLs.push(u);revoke(u);};}''')
        upload(page)
        page.wait_for_function('Appearance.getState().background==="custom"')
        blob = background_blob(page)
        assert blob and blob['width'] == 48 and blob['height'] == 32, blob
        assert custom_is_usable(page)
        first_url = custom_url(page)
        for preset in ['mint','sakura','ocean']:
            page.locator(f'[data-background-choice="{preset}"]').click()
            assert page.evaluate('!getComputedStyle(document.querySelector("#appBackground")).backgroundImage.includes("blob:")'), preset
            assert state(page)['background'] == preset
            page.locator('[data-background-choice=custom]').click()
            assert page.evaluate('getComputedStyle(document.querySelector("#appBackground")).backgroundImage.includes("blob:")')
            assert custom_is_usable(page)
        saved = page.evaluate('localStorage.getItem("dekiru_appearance_v1")')
        assert len(saved) < 4096 and 'base64' not in saved and 'blob:' not in saved, saved
        close_appearance(page)
        page.reload()
        ready(page)
        assert state(page)['background'] == 'custom'
        assert state(page)['theme'] == 'dark'
        assert custom_is_usable(page)
        assert custom_url(page) != first_url, 'A restored Blob must receive a fresh object URL'
        page.locator('#appearanceToggle').click()
        page.locator('[data-background-choice=mint]').click()
        close_appearance(page)
        page.reload()
        ready(page)
        assert state(page)['background'] == 'mint' and state(page)['hasCustomImage']
        assert page.evaluate('!getComputedStyle(document.querySelector("#appBackground")).backgroundImage.includes("blob:")')
        page.locator('#appearanceToggle').click()
        page.locator('[data-background-choice=custom]').click()
        page.evaluate('''()=>{window.revokedAppearanceURLs=[];const revoke=URL.revokeObjectURL.bind(URL);URL.revokeObjectURL=u=>{revokedAppearanceURLs.push(u);revoke(u);};}''')
        previous_url = custom_url(page)
        upload(page, png(color=(227, 195, 221)))
        assert page.evaluate('(url)=>revokedAppearanceURLs.includes(url)', previous_url)
        assert custom_is_usable(page)
        # A large but valid image must be bounded before persistence.
        upload(page, png(4000, 3000))
        page.wait_for_function('document.querySelector("#appearanceUploadStatus").textContent.trim().length>0')
        blob = background_blob(page)
        assert blob and max(blob['width'],blob['height']) <= 2560, blob
        assert custom_is_usable(page)
        removed_url = custom_url(page)
        page.locator('#appearanceRemoveImage').click()
        page.wait_for_function('Appearance.getState().background!=="custom"')
        assert background_blob(page) is None
        assert page.evaluate('(url)=>revokedAppearanceURLs.includes(url)', removed_url)
        close_appearance(page)

        # Customize while each real question and its answer controls are mounted.
        mode(page, 'quiz')
        page.locator('input[name=quizCount][value="5"]').check()
        page.locator('.quiz-start-btn').click()
        page.locator('.quiz-opt-btn').first.click()
        before = study_state(page)
        page.evaluate('window.preservedQuestion=document.querySelector("#quizBox")')
        settings(page, 'light', 'mint')
        assert study_state(page) == before
        assert page.evaluate('preservedQuestion===document.querySelector("#quizBox")')
        assert page.locator('.quiz-opt-btn[aria-pressed=true]').count() == 1

        mode(page, 'grammar')
        feature_theme(page, 'grammar')
        page.locator('[data-gr-drill]').click()
        if page.locator('input[name=grAnswer]').count():
            page.locator('input[name=grAnswer]').first.check()
        elif page.locator('#grFill').count():
            page.locator('#grFill').fill('回答テスト')
        else:
            page.locator('[data-gr-token]').first.click()
        page.locator('[data-gr-hint]').click()
        page.locator('#grKanjiHints > summary').click()
        page.wait_for_function('''()=>{const s=JSON.parse(localStorage.getItem('dekiru_grammar_v1')).session;return s.kanjiHints[s.ids[s.index]]===true;}''')
        before = study_state(page)
        page.evaluate('window.preservedQuestion=document.querySelector("#grQuestionTitle")')
        settings(page, 'dark', 'ocean')
        feature_theme(page, 'grammar')
        assert study_state(page) == before
        assert page.evaluate('preservedQuestion===document.querySelector("#grQuestionTitle")')
        assert page.locator('#grHint').is_visible() and page.locator('#grKanjiHints').evaluate('(e)=>e.open')

        mode(page, 'exam')
        feature_theme(page, 'exam')
        page.locator('#exMinutes').select_option('45')
        page.locator('[data-ex-start="chapter45-1"]').click()
        page.locator('[data-ex-answer="2"]').click()
        page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
        page.locator('[data-ex-flag]').click()
        page.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
        before = study_state(page)
        page.evaluate('window.preservedQuestion=document.querySelector("#exQuestionHeading")')
        clock_before = page.locator('#exClockValue').inner_text()
        page.locator('#appearanceToggle').click()
        page.locator('#appearanceThemeLight').click()
        page.locator('[data-background-choice=sakura]').click()
        page.clock.fast_forward(2100)
        assert page.locator('#exClockValue').inner_text() != clock_before
        close_appearance(page)
        assert study_state(page) == before
        assert page.evaluate('preservedQuestion===document.querySelector("#exQuestionHeading")')
        assert page.locator('[data-ex-answer="2"]').get_attribute('aria-pressed') == 'true'
        assert page.locator('[data-ex-flag]').get_attribute('aria-pressed') == 'true'

        # Reset may only remove appearance data, including custom image Blobs.
        page.evaluate('''async()=>{
          localStorage.setItem('dekiru_favs_v2',JSON.stringify(['fixture-favorite']));
          localStorage.setItem('dekiru_history_v1',JSON.stringify([{id:'fixture-history'}]));
          const fixture={...ExamCore.validate(ExamCore.documentOf(DEKIRU_EXAMS.find(e=>e.id==='chapter45-1'))),id:'import-appearance-test',kind:'imported'};
          await ExamCore.store.put(fixture);
          window.appearancePreservedKeys=Object.fromEntries(Object.keys(localStorage).filter(k=>!['dekiru_appearance_v1','dekiru_theme'].includes(k)).map(k=>[k,localStorage.getItem(k)]));
          window.appearancePreservedDocuments=await ExamCore.store.list();
          const probe=new AttemptStore();await probe.init(null,[]);const {leaseUntil,...authority}=probe.current;
          window.appearancePreservedAuthority=JSON.stringify(authority);window.appearancePreservedLease=leaseUntil;
        }''')
        before = study_state(page)
        page.locator('#appearanceToggle').click()
        upload(page)
        page.wait_for_function('Appearance.getState().background==="custom"')
        page.locator('#appearanceReset').click()
        page.wait_for_function('Appearance.getState().background==="mint"')
        assert background_blob(page) is None
        close_appearance(page)
        assert study_state(page) == before
        assert page.evaluate('''async()=>{
          const same=Object.entries(appearancePreservedKeys).every(([k,v])=>localStorage.getItem(k)===v);
          const probe=new AttemptStore();await probe.init(null,[]);
          const {leaseUntil,...authority}=probe.current;
          return same&&JSON.stringify(await ExamCore.store.list())===JSON.stringify(appearancePreservedDocuments)&&
            JSON.stringify(authority)===appearancePreservedAuthority&&leaseUntil>=appearancePreservedLease;
        }''')
        assert state(page)['theme'] == 'light' and state(page)['uiSize'] == 17
        # Removing an image and immediately choosing a preset must still delete it.
        page.locator('#appearanceToggle').click()
        upload(page)
        page.evaluate('''()=>{document.querySelector('#appearanceRemoveImage').click();document.querySelector('[data-background-choice=sakura]').click();}''')
        assert state(page)['background'] == 'sakura' and background_blob(page) is None
        # A replacement uploaded after removal is the only image that may persist.
        upload(page, png(96, 64, (191, 216, 236)))
        replacement = background_blob(page)
        assert replacement and replacement['width'] == 96 and replacement['height'] == 64
        assert custom_is_usable(page)
        close_appearance(page)
        # A quick preset click after reset cannot cancel deletion of reset-owned data.
        page.locator('#appearanceToggle').click()
        before = study_state(page)
        page.evaluate('''async()=>{const pending=Appearance.reset();document.querySelector('[data-background-choice=ocean]').click();await pending;}''')
        assert state(page)['background'] == 'ocean' and background_blob(page) is None
        close_appearance(page)
        assert study_state(page) == before
        ctx.close()

        # Blocked stores: presets and quizzes continue; status states session limits.
        blocked = context()
        blocked.add_init_script('''for(const k of ['localStorage','indexedDB'])Object.defineProperty(window,k,{get(){throw Error('blocked test')}});''')
        bp = blocked.new_page()
        bp.on('pageerror', lambda error: errors.append(str(error)))
        bp.goto(URL)
        ready(bp)
        bp.locator('#appearanceToggle').click()
        assert 'phiên' in bp.locator('#appearanceStorageStatus').inner_text().lower()
        bp.locator('[data-background-choice=ocean]').click()
        bp.locator('#appearanceThemeDark').click()
        assert state(bp)['background'] == 'ocean' and state(bp)['theme'] == 'dark'
        upload(bp)
        bp.wait_for_function('document.querySelector("#appearanceUploadStatus").textContent.trim().length>0')
        assert 'phiên' in bp.locator('#appearanceStorageStatus').inner_text().lower()
        close_appearance(bp)
        mode(bp, 'quiz')
        bp.locator('input[name=quizCount][value="5"]').check()
        bp.locator('.quiz-start-btn').click()
        bp.locator('.quiz-opt-btn').first.click()
        assert bp.locator('.quiz-opt-btn[aria-pressed=true]').count() == 1
        blocked.close()

        # An image write failure must leave other IndexedDB databases usable.
        failed = context()
        fp = failed.new_page()
        fp.on('pageerror', lambda error: errors.append(str(error)))
        fp.goto(URL)
        ready(fp)
        fp.evaluate('''()=>{window.appearanceWriteAborted=false;const original=IDBObjectStore.prototype.put;
          IDBObjectStore.prototype.put=function(...args){const request=original.apply(this,args);
            if(this.transaction.db.name==='dekiru_appearance_v1'&&this.name==='background'){
              const transaction=this.transaction;queueMicrotask(()=>{appearanceWriteAborted=true;transaction.abort();});
            }return request;};}''')
        fp.locator('#appearanceToggle').click()
        upload(fp)
        fp.wait_for_function('document.querySelector("#appearanceUploadStatus").textContent.trim().length>0')
        assert fp.evaluate('appearanceWriteAborted'), 'The background put must reach an actual transaction before failure'
        assert 'phiên' in fp.locator('#appearanceStorageStatus').inner_text().lower()
        close_appearance(fp)
        mode(fp, 'exam')
        fp.locator('#exMinutes').select_option('0')
        fp.locator('[data-ex-start="chapter45-1"]').click()
        fp.locator('[data-ex-answer="1"]').click()
        fp.wait_for_function('document.querySelector("#examMode").dataset.saving!=="true"')
        assert fp.evaluate('JSON.parse(localStorage.dekiru_exam_attempt_v1).answers[0]') == 1
        fp.reload()
        ready(fp)
        assert state(fp)['background'] == 'mint' and not state(fp)['hasCustomImage']
        failed.close()

        # A later settings quota failure reports the session limit and stays live.
        quota = context()
        qp = quota.new_page()
        qp.on('pageerror', lambda error: errors.append(str(error)))
        qp.goto(URL)
        ready(qp)
        persisted = qp.evaluate('localStorage.getItem("dekiru_appearance_v1")')
        qp.evaluate('''()=>{const original=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){
          if(k==='dekiru_appearance_v1'||k==='dekiru_theme')throw Error('quota test');return original.call(this,k,v);};}''')
        settings(qp, 'dark', 'sakura')
        assert state(qp)['theme'] == 'dark' and state(qp)['background'] == 'sakura'
        assert qp.evaluate('localStorage.getItem("dekiru_appearance_v1")') == persisted
        qp.locator('#appearanceToggle').click()
        assert 'phiên' in qp.locator('#appearanceStorageStatus').inner_text().lower()
        close_appearance(qp)
        mode(qp, 'flashcard')
        qp.locator('#fcNext').click()
        assert qp.evaluate('currentIndex') == 1
        quota.close()

        # Corrupt preferences cannot make study unavailable or create an image URL.
        corrupt = context()
        corrupt.add_init_script('localStorage.setItem("dekiru_appearance_v1","{invalid-json");')
        cp = corrupt.new_page()
        cp.on('pageerror', lambda error: errors.append(str(error)))
        cp.goto(URL)
        ready(cp)
        assert state(cp)['background'] == 'mint' and not state(cp)['hasCustomImage']
        cp.locator('#fcNext').click()
        assert cp.evaluate('currentIndex') == 1
        corrupt.close()

        # Both supported transports load the relative assets and usable controls.
        transport = context()
        tp = transport.new_page()
        tp.on('pageerror', lambda error: errors.append(str(error)))
        for address in [(ROOT / 'index.html').as_uri(), URL.replace('/index.html','/dekiru-nihongo/index.html')]:
            tp.goto(address)
            ready(tp)
            settings(tp, 'dark', 'ocean')
            assert state(tp)['theme'] == 'dark' and state(tp)['background'] == 'ocean'
            mode(tp, 'reading')
            assert tp.locator('#readingTitle').is_visible()
        transport.close()
        assert not errors, errors
        browser.close()
    print('PASS: mouse/keyboard drawer, focus return, legacy theme and D shortcut, presets/sliders/fonts, image validation/Blob persistence/resize/revoke, storage failures, reset isolation, live quiz/grammar/exam preservation, file:// and Pages prefix.')
finally:
    server.shutdown()
