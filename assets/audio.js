/* One player for all modes. Bundled MP3s work without OS speech voices. */
(() => {
  'use strict';
  const clean = text => String(text).normalize('NFKC').replace(/\((.*?)\)/g,'$1').replace(/[～~]/g,'').split('/')[0].replace(/\s+/g,' ').trim();
  let synth=null;
  try {synth=window.speechSynthesis;} catch { /* MP3s do not require Web Speech. */ }
  let voice = null, media = null, utterance = null, version = 0, callbacks = null;
  let timer = 0, hideTimer = 0, startedTimer = 0;
  const listeners = new Set();
  const box = document.createElement('aside');
  box.id='audioFeedback'; box.className='audio-feedback'; box.hidden=true;
  box.innerHTML='<div><span id="audioMessage" role="status" aria-live="polite"></span><div class="audio-feedback-actions"><button type="button" id="audioStop">■ Dừng</button><button type="button" id="audioClose" aria-label="Đóng thông báo âm thanh">×</button></div></div><details id="audioHelp" hidden><summary>Cách bật âm thanh trên Firefox</summary><p>Bấm biểu tượng loa trên tab để bỏ tắt tiếng. Trong quyền của trang, cho phép tự động phát âm thanh, rồi bấm Nghe lại. Kiểm tra bộ trộn âm lượng của hệ điều hành và thiết bị đầu ra.</p><p>Bản ghi đi kèm trang không cần cài giọng Nhật. Giọng thiết bị chỉ dùng dự phòng khi không tải được bản ghi; nếu muốn dùng giọng này, thêm Japanese trong cài đặt giọng nói của hệ điều hành rồi mở lại Firefox.</p></details>';
  document.body.append(box);
  const credit=document.createElement('small');credit.className='audio-credit';
  credit.innerHTML='Giọng tổng hợp HTS Mei · <a href="assets/audio/README.md" target="_blank" rel="noopener">Nguồn và giấy phép</a>';
  box.append(credit);
  const message = document.getElementById('audioMessage');
  function notify(text,error=false) {
    clearTimeout(hideTimer);box.hidden=false;box.classList.toggle('has-error',error);
    message.textContent=text;document.getElementById('audioHelp').hidden=!error;
    document.getElementById('audioStop').disabled=!callbacks;
  }
  function refreshVoices() {
    try {voice=synth?.getVoices().find(v=>/^ja(?:[-_]|$)/i.test(v.lang))||null;} catch {voice=null;}
    listeners.forEach(fn=>fn());
  }
  function source(text) {
    return window.DEKIRU_AUDIO?.files[clean(text)] || null;
  }
  function stop() {
    const previous=callbacks;callbacks=null;version++;
    clearTimeout(timer);clearTimeout(startedTimer);clearTimeout(hideTimer);
    if(media) {media.pause();media.removeAttribute('src');media.load();media=null;}
    if(utterance&&synth) {try{synth.cancel();}catch{}}
    utterance=null;
    document.getElementById('audioStop').disabled=true;
    box.hidden=true;
    previous?.onStop?.();
  }
  function fail(token,text) {
    if(token!==version) return;
    const previous=callbacks;stop();notify(text,true);previous?.onError?.(text);
  }
  function play(input,options={}) {
    stop();refreshVoices();
    const pieces=(Array.isArray(input)?input:[{text:input}]).map(p=>typeof p==='string'?{text:clean(p)}:{...p,text:clean(p.text)}).filter(p=>p.text);
    if(!pieces.length) {notify('Chưa có nội dung để phát.',true);return;}
    callbacks=options;const token=version;
    function next(i) {
      if(token!==version) return;
      clearTimeout(startedTimer);
      if(i>=pieces.length) {
        const previous=callbacks;callbacks=null;utterance=null;media=null;
        notify('Đã nghe xong.');hideTimer=setTimeout(()=>{if(token===version)box.hidden=true;},3000);
        previous?.onEnd?.();return;
      }
      const piece=pieces[i],file=source(piece.text);
      options.onPiece?.(i,piece);
      notify(`Đang tải âm thanh${pieces.length>1?` · ${i+1}/${pieces.length}`:''}…`);
      let fallbackUsed=false,voiceWait=0;
      function device() {
        if(token!==version) return;
        refreshVoices();
        if(!voice&&synth&&voiceWait++<6) {timer=setTimeout(device,200);return;}
        if(!voice||!synth||!window.SpeechSynthesisUtterance) {
          fail(token,'Chưa phát được âm thanh: không tải được bản ghi và máy chưa có giọng Nhật. Kiểm tra kết nối hoặc tải đủ thư mục assets/audio.');return;
        }
        // Retain this object until end/error; some speech engines otherwise stop silently.
        utterance=new SpeechSynthesisUtterance(piece.text);utterance.voice=voice;utterance.lang='ja-JP';
        utterance.rate=Number(options.rate)||0.85;utterance.volume=1;
        utterance.onstart=()=>{if(token===version){clearTimeout(startedTimer);notify('Đang phát · Giọng Nhật của thiết bị');}};
        utterance.onend=()=>{if(token===version)next(i+1);};
        utterance.onerror=e=>{if(token===version)fail(token,`Giọng thiết bị chưa phát được (${e.error||'speech-error'}). Hãy kiểm tra quyền âm thanh hoặc thử lại bản ghi.`);};
        startedTimer=setTimeout(()=>fail(token,'Giọng thiết bị không bắt đầu phát. Hãy kiểm tra giọng Nhật và quyền âm thanh trong Firefox.'),10000);
        try{synth.resume?.();synth.speak(utterance);}catch{fail(token,'Trình duyệt không khởi động được giọng đọc.');}
      }
      if(!file) {device();return;}
      const player=new Audio();media=player;player.preload='auto';player.volume=1;player.muted=false;
      player.playbackRate=Number(options.rate)||0.85;
      player.onplaying=()=>{if(token===version){clearTimeout(startedTimer);notify(`Đang phát · Bản ghi tiếng Nhật (tổng hợp)${pieces.length>1?` · ${i+1}/${pieces.length}`:''}`);}};
      player.onended=()=>{if(token===version){player.removeAttribute('src');next(i+1);}};
      function fallback() {
        if(token!==version||fallbackUsed) return;fallbackUsed=true;clearTimeout(startedTimer);
        player.onplaying=player.onended=player.onerror=null;player.pause();player.removeAttribute('src');player.load();
        media=null;device();
      }
      player.onerror=fallback;
      startedTimer=setTimeout(fallback,12000);
      player.src=`assets/audio/${file}`;
      // Invoke play inside the click handler, preserving Firefox user activation.
      try {
        const promise=player.play();
        promise?.catch(error=>{
          if(token!==version) return;
          if(error.name==='NotAllowedError') fail(token,'Firefox đang chặn phát âm thanh. Cho phép âm thanh của trang rồi bấm Nghe lại.');
          else if(error.name!=='AbortError') fallback();
        });
      } catch {fallback();}
    }
    next(0);
  }
  window.StudyAudio={play,stop,clean,source,available:text=>Boolean(source(text)||voice),subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn);}};
  document.getElementById('audioStop').addEventListener('click',()=>{stop();notify('Đã dừng phát.');});
  document.getElementById('audioClose').addEventListener('click',()=>{stop();box.hidden=true;});
  window.addEventListener('pagehide',stop);
  synth?.addEventListener?.('voiceschanged',refreshVoices);
  // Some engines populate voices late without firing voiceschanged.
  [0,300,1000,2500].forEach(delay=>setTimeout(refreshVoices,delay));
})();
