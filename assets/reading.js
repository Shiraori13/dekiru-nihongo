/* All content is local so opening index.html directly also works. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
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
  let voice = null;
  let speechVersion = 0;
  let utterance = null;
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
    if (!('speechSynthesis' in window)) {
      voice = null;
      $('listenReading').disabled = true;
      $('readingAudioStatus').textContent = 'Trình duyệt này chưa hỗ trợ đọc thành tiếng. Bạn vẫn có thể luyện bằng gợi ý.';
      return;
    }
    voice = speechSynthesis.getVoices().find(v => /^ja([_-]|$)/i.test(v.lang)) || null;
    $('listenReading').disabled = !voice;
    if (!speaking) $('readingAudioStatus').textContent = voice ? `Giọng Nhật: ${voice.name} · Âm thanh tổng hợp của thiết bị.` : 'Thiết bị chưa có giọng đọc tiếng Nhật. Thêm giọng Japanese trong cài đặt giọng nói để nghe bài.';
  }
  function stopAudio() {
    speechVersion++;
    speaking = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    utterance = null;
    $('stopReading').disabled = true;
    $('listenReading').textContent = '▷ Nghe bài';
    document.querySelectorAll('.is-speaking').forEach(el => el.classList.remove('is-speaking'));
    updateVoice();
  }
  function playReading() {
    if (!active || !voice) return;
    stopAudio();
    const version = speechVersion;
    speaking = true;
    $('stopReading').disabled = false;
    $('listenReading').textContent = '↻ Nghe từ đầu';
    const pieces = active.blocks.flatMap((tokens,index) => {
      const dialogue = typeof tokens[0] === 'string' && /^[AB]$/.test(tokens[0]);
      const text = (dialogue ? tokens.slice(2) : tokens).map(t => typeof t === 'number' ? READING_LEXICON[t].h : t).join('').replace(/[（）「」／—]/g,'');
      return (text.match(/[^。！？]+[。！？]?/g) || []).map(text => ({text,index}));
    });
    function speakPiece(i) {
      if (version !== speechVersion) return;
      if (i >= pieces.length) { stopAudio(); $('readingAudioStatus').textContent = 'Đã nghe hết bài. Đến lượt bạn đọc thành tiếng!'; return; }
      const piece = pieces[i];
      document.querySelectorAll('.is-speaking').forEach(el => el.classList.remove('is-speaking'));
      document.querySelector(`[data-block="${piece.index}"]`)?.classList.add('is-speaking');
      $('readingAudioStatus').textContent = `Đang đọc · ${i+1} / ${pieces.length} câu`;
      utterance = new SpeechSynthesisUtterance(piece.text);
      utterance.voice = voice;
      utterance.lang = 'ja-JP';
      utterance.rate = Number($('readingRate').value);
      utterance.onend = () => speakPiece(i+1);
      utterance.onerror = event => { if (version !== speechVersion) return; stopAudio(); if (event.error !== 'canceled' && event.error !== 'interrupted') $('readingAudioStatus').textContent = 'Chưa phát được giọng đọc. Hãy thử lại hoặc kiểm tra giọng Nhật trên thiết bị.'; };
      speechSynthesis.speak(utterance);
    }
    speakPiece(0);
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
  if ('speechSynthesis' in window) speechSynthesis.addEventListener('voiceschanged',updateVoice);
  for (let i=1;i<=7;i++) { const option = document.createElement('option'); option.value = i; option.textContent = `Bài ${i}`; $('readingLesson').append(option); }
  for (const type of ['kanji','katakana','hiragana']) if (typeof prefs[type] === 'boolean') $(`hint${type[0].toUpperCase()+type.slice(1)}`).checked = prefs[type];
  if (['22','26','30','34'].includes(prefs.fontSize)) $('readingFontSize').value = prefs.fontSize;
  if (['0.65','0.85','1'].includes(prefs.rate)) $('readingRate').value = prefs.rate;
  renderReading();
  renderChoices();
})();
