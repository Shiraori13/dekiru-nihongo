"""Real MP3 playback on Firefox/Edge without Japanese system voices, plus failures."""
import hashlib, http.server, json, sys, threading, os
from functools import partial
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
from browser_support import launch, install_legacy_readiness, reset_attempt_store
install_legacy_readiness()

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass

server=http.server.ThreadingHTTPServer(('127.0.0.1',0),partial(QuietHandler,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_port}/index.html'
try:
    with sync_playwright() as p:
        for engine in dict.fromkeys(['firefox',os.environ.get('DEKIRU_BROWSER','edge' if os.name=='nt' else 'chromium')]):
            browser=p.firefox.launch(headless=True) if engine=='firefox' else launch(p)
            context=browser.new_context(viewport={'width':390,'height':900},reduced_motion='reduce')
            context.route('https://**/*',lambda route:route.abort())
            context.add_init_script('''
              window.__speechCalls=0;window.__players=[];window.__rejectAudio=false;
              Object.defineProperty(window,'speechSynthesis',{value:{getVoices(){return [];},addEventListener(){},cancel(){},speak(){window.__speechCalls++;}}});
              const OriginalAudio=window.Audio;
              window.Audio=function(...args){const audio=new OriginalAudio(...args);window.__players.push(audio);return audio;};
              const play=HTMLMediaElement.prototype.play;
              HTMLMediaElement.prototype.play=function(){return window.__rejectAudio?Promise.reject(new DOMException('Blocked','NotAllowedError')):play.call(this);};
            ''')
            page=context.new_page();errors=[]
            page.on('pageerror',lambda e:errors.append(str(e)))
            page.goto(url)
            manifest=page.evaluate('DEKIRU_AUDIO.files')
            assert len(manifest)==1178
            for text,name in manifest.items():
                assert name==hashlib.sha256(text.encode()).hexdigest()[:20]+'.mp3'
                assert (ROOT/'assets/audio'/name).stat().st_size>500
            missing=page.evaluate('''() => {
              const missing=[];const check=t=>{if(!StudyAudio.source(t))missing.push(t);};
              RAW_VOCAB.forEach(w=>check(w.h));GRAMMAR_DATA.units.forEach(u=>check(u.example.kana));
              READINGS.forEach(r=>r.blocks.forEach(tokens=>{
                const dialogue=typeof tokens[0]==='string'&&/^[AB]$/.test(tokens[0]);
                const text=(dialogue?tokens.slice(2):tokens).map(t=>typeof t==='number'?READING_LEXICON[t].h:t).join('').replace(/[（）「」／—]/g,'');
                (text.match(/[^。！？]+[。！？]?/g)||[]).forEach(check);
              }));return missing;
            }''')
            assert not missing,missing
            page.locator('[data-fc-audio]').first.click()
            page.wait_for_function('__players.length && __players.at(-1).currentTime>0.03 && !__players.at(-1).paused')
            assert page.evaluate('__players.at(-1).muted===false && __players.at(-1).volume===1')
            assert 'Bản ghi' in page.locator('#audioMessage').inner_text()
            page.locator('#fcNext').click()
            assert page.evaluate('__players.every(p=>p.paused)')
            assert page.locator('#audioFeedback').is_hidden()
            page.locator('[data-mode=grammar]').click()
            page.locator('[data-gr-audio]').click()
            page.wait_for_function('__players.at(-1).currentTime>0.03 && !__players.at(-1).paused')
            page.locator('[data-mode=reading]').click()
            assert page.evaluate('__players.every(p=>p.paused)')
            assert page.locator('#listenReading').is_enabled()
            before=page.evaluate('__players.length')
            page.locator('#listenReading').click()
            page.wait_for_function('__players.at(-1).currentTime>0.03 && !__players.at(-1).paused')
            assert page.locator('.is-speaking').count()==1
            page.wait_for_function('(n)=>__players.length>n+1',arg=before,timeout=20000)
            page.locator('#stopReading').click()
            assert page.evaluate('__players.every(p=>p.paused)')
            assert page.locator('.is-speaking').count()==0
            # Denied permission must report the real issue and never pretend to play.
            page.evaluate('window.__rejectAudio=true')
            page.locator('#listenReading').click()
            page.wait_for_function('document.querySelector("#audioHelp").hidden===false')
            assert 'chặn' in page.locator('#audioMessage').inner_text()
            assert page.locator('#stopReading').is_disabled()
            assert page.locator('.is-speaking').count()==0
            assert page.evaluate('__speechCalls')==0
            page.locator('#audioHelp summary').click()
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
            page.screenshot(path=str(ROOT/f'.work/audio-{engine}-permission.png'),full_page=True)
            # Actual missing file: fall back, then report absent Japanese voice safely.
            page.evaluate('window.__rejectAudio=false; DEKIRU_AUDIO.files[StudyAudio.clean(RAW_VOCAB[0].h)]="missing-test.mp3"')
            page.locator('#audioClose').click()
            page.locator('[data-mode=flashcard]').click()
            page.evaluate('currentIndex=0;updateCardUI()')
            page.locator('[data-fc-audio]').first.click()
            page.wait_for_function('document.querySelector("#audioHelp").hidden===false')
            assert 'không tải được bản ghi' in page.locator('#audioMessage').inner_text()
            assert not errors,errors
            # file:// remains supported for users opening index.html directly.
            local=context.new_page();local.goto((ROOT/'index.html').as_uri())
            local.locator('[data-fc-audio]').first.click()
            local.wait_for_function('__players.length && __players.at(-1).currentTime>0.03 && !__players.at(-1).paused')
            local.evaluate('StudyAudio.stop()')
            browser.close()
            print(f'PASS {engine}: real MP3 progress, no OS voices, vocabulary/grammar/reading, stop, blocked permission, missing files, file:// and 1178-file coverage.')
finally:
    server.shutdown();server.server_close()
