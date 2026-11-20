/* All content is local so opening index.html directly also works. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  if (!$('readingTitle')) {
    $('readingMode').insertAdjacentHTML('beforeend', `<div class="reading-intro">
        <div><span class="eyebrow">JPD123 · ĐỌC & NÓI</span><h1>Đọc một chút, tiến bộ mỗi ngày.</h1><p>Chọn bài, bật gợi ý và luyện đọc thành tiếng theo nhịp của bạn.</p></div>
        <div class="reading-progress"><strong id="readingProgressCount">0 / 71</strong><p>bài đã luyện</p><progress id="readingProgress" value="0" max="71" aria-label="Tiến độ luyện đọc"></progress></div>
      </div>
      <div class="reading-layout">
        <aside class="reading-sidebar" aria-label="Chọn bài luyện đọc">
          <div class="chooser-head">
            <h2>Thư viện bài đọc <span aria-hidden="true">↗</span></h2>
            <div class="chooser-filters">
              <div><label for="readingLesson">Bài học</label><select id="readingLesson"><option value="all">Tất cả bài</option></select></div>
              <div><label for="readingKind">Dạng bài</label><select id="readingKind"><option value="all">Tất cả dạng</option><option value="passage">Đoạn văn</option><option value="dialogue">Hội thoại</option><option value="sentences">Câu luyện đọc</option></select></div>
            </div>
            <label for="readingSearch">Tìm tên, từ trong bài hoặc số trang</label><input id="readingSearch" type="text" placeholder="Ví dụ: gia đình, 東京, 27…">
          </div>
          <p id="readingResultCount" class="chooser-count" role="status"></p>
          <div id="exerciseList" class="exercise-list"></div>
        </aside>
        <div class="reader-column">
          <div id="readingEmpty" class="reader-card empty-state" hidden><p>Chưa tìm thấy bài phù hợp.</p><button class="small-btn" id="clearReadingFilters" style="margin-top:16px">Xóa bộ lọc</button></div>
          <div id="readerContent">
            <article class="reader-card" id="readerArticle">
              <div class="reader-heading">
                <div class="reader-meta"><span class="badge-topic" id="readingLessonBadge"></span><span id="readingKindLabel"></span><a id="readingSource" class="source-link" target="_blank" rel="noopener">Trang PDF ↗</a></div>
                <h2 id="readingTitle" lang="ja" tabindex="-1"></h2><p id="readingSubtitle"></p>
              </div>
              <div class="reader-controls" aria-label="Gợi ý và cỡ chữ">
                <label class="hint-chip"><input type="checkbox" id="hintKanji" checked>Kanji · Furigana</label>
                <label class="hint-chip"><input type="checkbox" id="hintKatakana" checked>Katakana · Kana</label>
                <label class="hint-chip"><input type="checkbox" id="hintHiragana">Hiragana · Romaji</label>
                <label class="size-control" for="readingFontSize">Cỡ chữ <select id="readingFontSize"><option value="22">22</option><option value="26" selected>26</option><option value="30">30</option><option value="34">34</option></select></label>
              </div>
              <p class="reader-tip">Chạm vào từ để xem cách đọc và nghĩa. Tắt gợi ý khi bạn muốn tự thử sức.</p>
              <div id="readingBody" class="reading-text-body show-kanji show-katakana" lang="ja"></div>
              <div class="reader-footer">
                <div class="audio-controls"><button class="small-btn primary" id="listenReading">▷ Nghe bài</button><button class="small-btn" id="stopReading" disabled aria-label="Dừng nghe">■ Dừng</button><label class="sr-only" for="readingRate">Tốc độ đọc</label><select id="readingRate" class="audio-rate"><option value="0.65">0,65×</option><option value="0.85" selected>0,85×</option><option value="1">1×</option></select></div>
                <button class="small-btn" id="completeReading" aria-pressed="false">✓ Đánh dấu đã luyện</button>
              </div>
              <p class="audio-status" id="readingAudioStatus" role="status">Giọng đọc tiếng Nhật của thiết bị.</p>
            </article>
            <div class="reader-navigation"><button class="small-btn" id="previousReading">← Bài trước</button><span id="readingPosition"></span><button class="small-btn" id="nextReading">Bài tiếp →</button></div>
            <div class="word-detail" id="wordDetail" hidden role="dialog" aria-modal="false" aria-label="Giải nghĩa từ đang chọn" lang="vi" tabindex="-1"></div>
            <section class="glossary-card" aria-labelledby="glossaryTitle">
              <div class="glossary-heading"><h3 id="glossaryTitle">Từ vựng trong bài <span id="glossaryCount"></span></h3><label class="sr-only" for="glossaryFilter">Loại từ trong bài</label><select id="glossaryFilter"><option value="words">Từ & cụm từ</option><option value="all">Tất cả, gồm trợ từ</option><option value="kanji">Kanji</option><option value="katakana">Katakana</option><option value="hiragana">Hiragana</option></select></div>
              <p class="glossary-desc">Theo thứ tự xuất hiện · Mỗi từ hiển thị một lần · Có cách đọc và nghĩa tiếng Việt.</p><div id="readingGlossary" class="glossary-grid"></div>
            </section>
            <details class="pronunciation-note"><summary>Mẹo đọc Kanji, Katakana và Hiragana</summary><p><strong>Kanji:</strong> đọc theo furigana phía trên. Chú ý số đếm: 4時 → よじ, 9時 → くじ, 1つ → ひとつ.</p><p><strong>Katakana:</strong> ー kéo dài âm trước (コーヒー); ッ ngắt một nhịp (サッカー); ャ・ュ・ョ nhỏ ghép với âm trước. Gợi ý kana giữ dấu ー để bạn thấy trường âm.</p><p><strong>Hiragana:</strong> は đọc <em>wa</em> khi là trợ từ, へ đọc <em>e</em>, を đọc <em>o</em>. っ ngắt một nhịp; ゃ・ゅ・ょ nhỏ là âm ghép. Romaji chỉ hỗ trợ bước đầu, hãy tập đọc trực tiếp kana.</p></details>
          </div>
        </div>
      </div>
      <p class="study-footer">Nguồn: Ôn speaking JPD123 – SV luyện đọc · 7 đoạn văn và 64 bài hội thoại/câu luyện đọc.<br>Tiến độ được lưu trên trình duyệt này.</p>`);
  }
  const kinds = { passage: 'Đoạn văn', dialogue: 'Hội thoại', sentences: 'Câu luyện đọc' };
  const labels = { kanji: 'Kanji', katakana: 'Katakana', hiragana: 'Hiragana' };
  const escape = text => String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const normalize = text => String(text).normalize('NFKC').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
  const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const writeStore = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { $('readingAudioStatus').textContent = 'Trình duyệt chưa cho phép lưu tiến độ. Bạn vẫn có thể luyện đọc bình thường.'; } };
  const saved = readStore('dekiru_reading_v1', {});
  const prefs = saved && typeof saved === 'object' ? saved : {};
  const savedDone = readStore('dekiru_reading_done_v1', []);
  const done = new Set(Array.isArray(savedDone) ? savedDone.filter(id => READINGS.some(r => r.id === id)) : []);
  let active = READINGS.find(r => r.id === prefs.selected) || READINGS.find(r => r.page === 5);
  let filtered = [...READINGS];
  let speechVersion = 0;
  let speaking = false;
  const sourceText = reading => reading.blocks.map(block => block.map(t => typeof t === 'number' ? READING_LEXICON[t].k : t).join('')).join('\n');
  const searchIndex = new Map(READINGS.map(r => [r.id, normalize(`${r.title} ${r.jp} ${r.page} ${sourceText(r)} ${r.blocks.flat().filter(t => typeof t === 'number').map(t => { const w = READING_LEXICON[t]; return `${w.h} ${w.r} ${w.m}`; }).join(' ')}`)]));

  function savePreferences() {
    writeStore('dekiru_reading_v1', { selected: active?.id, kanji: $('hintKanji').checked, katakana: $('hintKatakana').checked, hiragana: $('hintHiragana').checked, fontSize: $('readingFontSize').value, rate: $('readingRate').value });
  }
  function updateProgress() {
    $('readingProgressCount').textContent = `${done.size} / ${READINGS.length}`;
    $('readingProgress').max = READINGS.length;
    $('readingProgress').value = done.size;
    const completed = active && done.has(active.id);
    $('completeReading').setAttribute('aria-pressed', String(Boolean(completed)));
    $('completeReading').textContent = completed ? '✓ Đã luyện · Bỏ đánh dấu' : '✓ Đánh dấu đã luyện';
  }
  function renderChoices() {
    $('readingResultCount').textContent = `${filtered.length} bài phù hợp`;
    $('exerciseList').innerHTML = filtered.map(r => `<button class="exercise-item" data-reading="${r.id}" aria-current="${active?.id === r.id}"><small>BÀI ${r.lesson} · ${kinds[r.kind]} · Tr. ${r.page}</small><strong>${escape(r.title)}</strong>${done.has(r.id) ? '<span class="exercise-check" aria-label="Đã luyện">✓</span>' : ''}</button>`).join('');
  }
  function filterReadings() {
    const lesson = $('readingLesson').value;
    const kind = $('readingKind').value;
    const query = normalize($('readingSearch').value.trim());
    filtered = READINGS.filter(r => (lesson === 'all' || r.lesson === Number(lesson)) && (kind === 'all' || r.kind === kind) && (!query || searchIndex.get(r.id).includes(query)));
    if (!filtered.some(r => r.id === active?.id)) active = filtered[0] || null;
    renderReading();
    renderChoices();
  }
  function applyHints() {
    ['kanji','katakana','hiragana'].forEach(type => $('readingBody').classList.toggle(`show-${type}`, $(`hint${type[0].toUpperCase()+type.slice(1)}`).checked));
    $('readingBody').style.setProperty('--reading-size', `${$('readingFontSize').value}px`);
    savePreferences();
  }
  function wordHTML(id) {
    const w = READING_LEXICON[id];
    const hint = w.kind === 'hiragana' ? w.r : w.h;
    return `<button class="reading-word ${w.kind}" style="--word-length:${Math.max(w.k.length,w.h.length*.48,w.r.length*.28)}" data-word="${id}" aria-label="${escape(w.k)}: xem cách đọc và nghĩa"><ruby>${escape(w.k)}<rp>(</rp><rt>${escape(hint)}</rt><rp>)</rp></ruby></button>`;
  }
  function renderReading() {
    stopAudio();
    $('readingMode').append($('wordDetail'));
    $('readingEmpty').hidden = Boolean(active);
    $('readerContent').hidden = !active;
    $('wordDetail').hidden = true;
    if (!active) return;
    $('readingLessonBadge').textContent = `Bài ${active.lesson}`;
    $('readingKindLabel').textContent = kinds[active.kind];
    $('readingSource').href = `sources/speaking.pdf#page=${active.page}`;
    $('readingSource').textContent = `PDF · trang ${active.page} ↗`;
    $('readingTitle').textContent = active.jp;
    $('readingSubtitle').textContent = active.title;
    $('readingBody').innerHTML = active.blocks.map((tokens,index) => {
      const dialogue = typeof tokens[0] === 'string' && /^[AB]$/.test(tokens[0]) && tokens[1] === '：';
      const words = (dialogue ? tokens.slice(2) : tokens).map(t => typeof t === 'number' ? wordHTML(t) : escape(t)).join('');
      return `<p class="reading-block${dialogue ? ' dialogue-line' : ''}" data-block="${index}">${dialogue ? `<span class="speaker-tag speaker-${tokens[0].toLowerCase()}">${tokens[0]}</span><span class="dialogue-content">${words}</span>` : words}</p>`;
    }).join('');
    const index = filtered.findIndex(r => r.id === active.id);
    $('previousReading').disabled = index <= 0;
    $('nextReading').disabled = index < 0 || index === filtered.length-1;
    $('readingPosition').textContent = `${index+1} / ${filtered.length}`;
    $('readerArticle').classList.remove('fade-in');
    requestAnimationFrame(() => $('readerArticle').classList.add('fade-in'));
    updateProgress();
    applyHints();
    renderGlossary();
  }
  function selectReading(id, focus = true) {
    const reading = filtered.find(r => r.id === id);
    if (!reading) return;
    active = reading;
    renderReading();
    renderChoices();
    if (focus) $('readingTitle').focus({ preventScroll: true });
    if (window.innerWidth <= 760) $('readerArticle').scrollIntoView({ behavior: reducedMotion() ? 'instant' : 'smooth', block: 'start' });
  }
  function reducedMotion() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function renderGlossary() {
    if (!active) return;
    const filter = $('glossaryFilter').value;
    const ids = [...new Set(active.blocks.flat().filter(t => typeof t === 'number'))].filter(id => filter === 'all' || (filter === 'words' ? !READING_LEXICON[id].grammar : READING_LEXICON[id].kind === filter));
    $('glossaryCount').textContent = `(${ids.length})`;
    $('readingGlossary').innerHTML = ids.length ? ids.map(id => {
      const w = READING_LEXICON[id];
      return `<button class="glossary-word" data-word="${id}"><strong lang="ja">${escape(w.k)}</strong><span class="word-kana" lang="ja">${escape(w.h)}</span><span class="word-meaning">${escape(w.m)}</span></button>`;
    }).join('') : '<p class="glossary-desc">Bài này không có từ thuộc loại đã chọn.</p>';
  }
  let detailOrigin = null;
  function showWord(id, origin) {
    const word = READING_LEXICON[id];
    if (!word) return;
    detailOrigin = origin;
    document.querySelectorAll('.reading-word.is-selected').forEach(el => el.classList.remove('is-selected'));
    document.querySelectorAll(`.reading-word[data-word="${id}"]`).forEach(el => el.classList.add('is-selected'));
    $('wordDetail').hidden = false;
    $('wordDetail').innerHTML = `<button class="close-detail" aria-label="Đóng giải nghĩa">×</button><div class="word-detail-heading"><strong lang="ja">${escape(word.k)}</strong><span class="badge-topic">${labels[word.kind]}</span></div><p><span lang="ja">${escape(word.h)}</span> <small>· ${escape(word.r)}</small></p><p>${escape(word.m)}</p>`;
    // Keep the hint in the viewport, even for words near the top of a long passage.
    $('wordDetail').focus({ preventScroll: true });
  }
  function closeWord() {
    $('wordDetail').hidden = true;
    document.querySelectorAll('.reading-word.is-selected').forEach(el => el.classList.remove('is-selected'));
    detailOrigin?.focus({ preventScroll: true });
  }
  function updateVoice() {
    const first=readingPieces()[0]?.text;
    const available=!!first&&StudyAudio.available(first);
    $('listenReading').disabled=!available;
    if(!speaking) $('readingAudioStatus').textContent=available?'Bản ghi tiếng Nhật đi kèm trang; dùng được trên Firefox và không cần cài giọng Nhật.':'Chưa có bản ghi hoặc giọng Nhật. Kiểm tra thư mục assets/audio hoặc cài giọng Japanese.';
  }
  function stopAudio() {
    speechVersion++;
    speaking = false;
    StudyAudio.stop();
    $('stopReading').disabled = true;
    $('listenReading').textContent = '▷ Nghe bài';
    document.querySelectorAll('.is-speaking').forEach(el => el.classList.remove('is-speaking'));
    updateVoice();
  }
  function readingPieces() {
    return active ? active.blocks.flatMap((tokens,index) => {
      const dialogue = typeof tokens[0] === 'string' && /^[AB]$/.test(tokens[0]);
      const text = (dialogue ? tokens.slice(2) : tokens).map(t => typeof t === 'number' ? READING_LEXICON[t].h : t).join('').replace(/[（）「」／—]/g,'');
      return (text.match(/[^。！？]+[。！？]?/g) || []).map(text => ({text,index}));
    }) : [];
  }
  function playReading() {
    if (!active) return;
    stopAudio();
    const version=speechVersion,pieces=readingPieces();
    speaking=true;$('stopReading').disabled=false;$('listenReading').textContent='↻ Nghe từ đầu';
    const reset=()=>{speaking=false;$('stopReading').disabled=true;$('listenReading').textContent='▷ Nghe bài';document.querySelectorAll('.is-speaking').forEach(el=>el.classList.remove('is-speaking'));};
    StudyAudio.play(pieces,{rate:Number($('readingRate').value),onPiece(i,piece){
      if(version!==speechVersion)return;
      document.querySelectorAll('.is-speaking').forEach(el => el.classList.remove('is-speaking'));
      document.querySelector(`[data-block="${piece.index}"]`)?.classList.add('is-speaking');
      $('readingAudioStatus').textContent = `Đang đọc · ${i+1} / ${pieces.length} câu`;
    },onEnd(){if(version===speechVersion){reset();$('readingAudioStatus').textContent='Đã nghe hết bài. Đến lượt bạn đọc thành tiếng!';}},onError(text){if(version===speechVersion){reset();$('readingAudioStatus').textContent='Chưa phát được: '+text;}},onStop(){reset();}});
  }
  window.stopReadingAudio = stopAudio;
  ['readingLesson','readingKind'].forEach(id => $(id).addEventListener('change', filterReadings));
  $('readingSearch').addEventListener('input', filterReadings);
  $('clearReadingFilters').addEventListener('click', () => { $('readingLesson').value = 'all'; $('readingKind').value = 'all'; $('readingSearch').value = ''; filterReadings(); });
  $('exerciseList').addEventListener('click', e => { const button = e.target.closest('[data-reading]'); if (button) selectReading(button.dataset.reading); });
  ['hintKanji','hintKatakana','hintHiragana','readingFontSize'].forEach(id => $(id).addEventListener('change',applyHints));
  $('readingRate').addEventListener('change', () => { stopAudio(); savePreferences(); });
  $('glossaryFilter').addEventListener('change',renderGlossary);
  $('readingMode').addEventListener('click', e => { const button = e.target.closest('[data-word]'); if (button) showWord(Number(button.dataset.word),button); if (e.target.closest('.close-detail')) closeWord(); });
  $('readingMode').addEventListener('keydown', e => { if (e.key === 'Escape' && !$('wordDetail').hidden) closeWord(); });
  document.addEventListener('pointerdown', e => {
    if (!$('wordDetail').hidden && !e.target.closest('#wordDetail, [data-word]')) {
      $('wordDetail').hidden = true;
      document.querySelectorAll('.reading-word.is-selected').forEach(el => el.classList.remove('is-selected'));
    }
  });
  $('previousReading').addEventListener('click', () => { const i = filtered.indexOf(active); if (i>0) selectReading(filtered[i-1].id); });
  $('nextReading').addEventListener('click', () => { const i = filtered.indexOf(active); if (i<filtered.length-1) selectReading(filtered[i+1].id); });
  $('completeReading').addEventListener('click', () => { if (!active) return; done.has(active.id) ? done.delete(active.id) : done.add(active.id); writeStore('dekiru_reading_done_v1',[...done]); updateProgress(); renderChoices(); });
  $('listenReading').addEventListener('click',playReading);
  $('stopReading').addEventListener('click',stopAudio);
  window.addEventListener('pagehide',stopAudio);
  StudyAudio.subscribe(updateVoice);
  for (let i=1;i<=7;i++) { const option = document.createElement('option'); option.value = i; option.textContent = `Bài ${i}`; $('readingLesson').append(option); }
  for (const type of ['kanji','katakana','hiragana']) if (typeof prefs[type] === 'boolean') $(`hint${type[0].toUpperCase()+type.slice(1)}`).checked = prefs[type];
  if (['22','26','30','34'].includes(prefs.fontSize)) $('readingFontSize').value = prefs.fontSize;
  if (['0.65','0.85','1'].includes(prefs.rate)) $('readingRate').value = prefs.rate;
  renderReading();
  renderChoices();
})();
