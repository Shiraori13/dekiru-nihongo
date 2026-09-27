/* Offline kanji lessons. Data attribution: sources/kanji/README.md. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value).normalize('NFKC').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/đ/g, 'd');
  const characters = word => [...new Set([...word.k].filter(c => KANJI_CHARACTERS[c]))];
  const key = word => JSON.stringify([word.l, word.t, word.k]);
  const entries = KANJI_SOURCES.map(source => ({...RAW_VOCAB[source.index], ...source, key:key(RAW_VOCAB[source.index])}));
  const wordsByIndex = new Map(entries.map(word => [word.index, word]));
  const validKeys = new Set(entries.map(word => word.key));
  const hvLabel = char => KANJI_CHARACTERS[char].hv.join(' / ') || 'Chữ Nhật tạo';
  const hvWord = word => characters(word).map(hvLabel).join(' · ');
  const searchText = new Map(entries.map(word => [word.index, normalize([word.k,word.h,word.m,word.pdf,hvWord(word),...characters(word).map(c => KANJI_CHARACTERS[c].meaning)].join(' '))]));
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('dekiru_kanji_v1')) || {}; } catch { /* usable without storage */ }
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
  const done = new Set((Array.isArray(saved.done) ? saved.done : []).filter(k => validKeys.has(k)));
  let active = entries.find(word => word.key === saved.selected) || entries.find(word => word.k === '学生') || entries[0];
  let activeChar = characters(active)[0];
  let filtered = [...entries];
  let currentStep = 0, frame = 0, playing = false;
  let pathNodes = [], numberNodes = [], drawing = null, pointerId = null;
  const drawings = [];
  const canvas = $('kanjiCanvas');
  const context = canvas.getContext('2d');
  const grid = '<path class="guide-line" d="M54.5 0V109 M0 54.5H109 M0 0L109 109 M109 0L0 109"/>';
  const wordNotes = {
    '学生':'学生 đọc là がくせい, nghĩa là học sinh/sinh viên. 学 gợi việc học; 生 gắn với người học trong từ này.',
    '先生':'先生 (せんせい) dùng để gọi giáo viên và một số người có chuyên môn. Âm từng chữ là tiên + sinh; nghĩa trong bài là thầy/cô giáo.',
    '日本':'日本 đọc là にほん trong bài này. 日 là nhật, 本 là bản: liên hệ với tên nước Nhật Bản.',
    '大学':'大学 (だいがく): trường đại học. 大 là đại, 学 là học; dễ liên hệ với từ “đại học” trong tiếng Việt.',
    '勉強します':'勉強 (べんきょう) nghĩa là học tập. Âm miễn + cường chỉ giúp nhớ mặt chữ; đừng dịch từ này thành “miễn cưỡng”. します biến danh từ thành hành động.',
    '手紙':'手紙 (てがみ) nghĩa là thư. 手 là thủ (tay), 紙 là chỉ (giấy); cần nhớ nghĩa của cả từ là “thư”.',
    '大丈夫(な)':'大丈夫 (だいじょうぶ) thường nghĩa là ổn, không sao. Không dùng nghĩa “đại trượng phu” của tiếng Việt để dịch câu tiếng Nhật.',
    '上手(な)':'上手 (じょうず) nghĩa là giỏi, khéo. Cả từ có cách đọc cố định; không ghép các cách đọc rời của 上 và 手.',
    '下手(な)':'下手 (へた) nghĩa là kém, vụng. Hãy nhớ へた cho cả từ; âm hạ + thủ chỉ dùng để nhận diện chữ.',
    '大人':'大人 đọc là おとな, nghĩa là người lớn. Đây là cách đọc của cả từ, không tách お và とな thành cách đọc riêng của hai chữ.',
    '子供':'子供 (こども) nghĩa là trẻ em. Nhớ cách đọc và nghĩa của cả từ.',
    '今日':'今日 đọc là きょう trong bài, nghĩa là hôm nay. Cách đọc cả từ không phải phép ghép máy móc từng chữ.',
    '明日':'明日 đọc theo kana ghi trong bài; あした là ngày mai. Âm minh + nhật chỉ giúp nhớ mặt chữ.',
    '昨日':'昨日 (きのう) nghĩa là hôm qua. Tạc + nhật là âm Hán Việt từng chữ, không phải cách phát âm tiếng Nhật.',
    '今年':'今年 (ことし) nghĩa là năm nay. Nhớ cách đọc ことし cho cả từ.',
    '一昨日':'一昨日 (おととい) nghĩa là hôm kia. Đọc cả từ theo kana.',
    '明後日':'明後日 (あさって) nghĩa là ngày kia. Đọc cả từ theo kana.',
    '風邪':'風邪 (かぜ) là cảm, cảm lạnh. Đừng nhầm với 風 (かぜ), nghĩa là gió.',
    '風呂':'風呂 (ふろ) nghĩa là bồn tắm/việc tắm. Hai chữ ở đây cần học như một từ; nghĩa gốc từng chữ không giải thích trực tiếp nghĩa cả từ.',
    '(お)風呂':'お風呂 (おふろ) là bồn tắm/việc tắm; お làm cách nói lịch sự hơn. Học 風呂 như một từ.',
    '音楽':'音楽 (おんがく) nghĩa là âm nhạc. 楽 có âm Hán Việt nhạc trong nghĩa âm nhạc và lạc trong nghĩa vui.',
    '楽しい':'楽しい (たのしい) nghĩa là vui. Nhớ chữ 楽 với nghĩa lạc/vui; chữ này còn xuất hiện trong 音楽 (âm nhạc).',
    '写真':'写真 (しゃしん) nghĩa là ảnh chụp. 写 gợi chụp/sao lại, 真 gợi sự thật.',
    '映画':'映画 (えいが) nghĩa là phim. 映 gợi chiếu, 画 gợi hình ảnh.',
    '会社':'会社 (かいしゃ) nghĩa là công ty; đừng đảo thứ tự thành 社会 (しゃかい), nghĩa là xã hội.',
    '会社員':'会社員 (かいしゃいん) nghĩa là nhân viên công ty. 員 chỉ thành viên/nhân viên.',
    '兄弟':'兄弟 (きょうだい) trong bài dùng với nghĩa anh chị em. Nghĩa cả từ có thể rộng hơn nghĩa riêng huynh + đệ.',
    '主人':'主人 (しゅじん) trong chủ đề gia đình dùng để nói về chồng mình. Hãy đọc nghĩa theo ngữ cảnh của bài.',
    '奥さん':'奥さん (おくさん) dùng để gọi/nói về vợ của người khác. さん là hậu tố lịch sự bằng kana.',
    'お土産':'お土産 (おみやげ) là quà mang về sau chuyến đi. Nhớ cách đọc みやげ cho 土産.',
    '土産':'土産 (みやげ) là quà mang về sau chuyến đi; cách đọc gắn với cả từ.',
    '切手':'切手 (きって) nghĩa là tem. Chú ý っ nhỏ ngắt một nhịp khi đọc.',
    '喫煙所':'喫煙所 (きつえんじょ) là nơi hút thuốc. PDF ghi bằng kana きつえんじょ; chữ Hán ở đây được bổ sung để học.',
    '喫茶店':'喫茶店 (きっさてん) là quán giải khát/cà phê. PDF ghi きっさてん; chú ý っ nhỏ.',
    '靴':'靴 (くつ) là giày. PDF ghi bằng hiragana; chữ Hán được bổ sung để nhận diện.',
    '申し込みます':'申し込みます (もうしこみます) nghĩa là đăng ký. 込 là chữ Nhật tạo; học こ trong こみます qua cả từ, không gán một âm Hán Việt để đọc tiếng Nhật.',
    '働きます':'働きます (はたらきます) nghĩa là làm việc. 働 là chữ Nhật tạo từ thành phần người và 動; “động” là âm đối chiếu thường dùng để hỗ trợ nhớ chữ.',
    '予約します':'予約 (よやく) nghĩa là đặt trước. Trong từ này, 予 tương ứng với 預, âm Hán Việt dự; 約 là ước.',
    '桜':'桜 (さくら) là hoa anh đào. Đây là dạng chữ Nhật của 櫻, âm Hán Việt anh.',
    '払います':'払います (はらいます) nghĩa là trả/chi trả. 払 là dạng chữ Nhật của 拂, âm Hán Việt phất.',
    '着ます':'着ます (きます) nghĩa là mặc. Đọc きます trong từ này; 着 còn đọc つ trong 着きます (đến nơi).',
    '着きます':'着きます (つきます) nghĩa là đến nơi. Phân biệt với 着ます (きます), nghĩa là mặc.'
  };

  function persist() {
    try { localStorage.setItem('dekiru_kanji_v1', JSON.stringify({done:[...done],selected:active?.key})); }
    catch { $('kanjiSaveStatus').textContent = 'Trình duyệt chưa cho phép lưu tiến độ. Bạn vẫn có thể học và tập viết.'; }
  }
  function updateProgress() {
    $('kanjiProgressCount').textContent = `${done.size} / ${entries.length}`;
    $('kanjiProgress').max = entries.length;
    $('kanjiProgress').value = done.size;
  }
  function updateTopics() {
    const lesson = $('kanjiLesson').value;
    const topics = [...new Set(RAW_VOCAB.filter(word => lesson === 'all' || word.l === Number(lesson)).map(word => word.t))];
    $('kanjiTopic').replaceChildren(new Option('Tất cả chủ đề','all'), ...topics.map(topic => new Option(getTopicLabel(topic),topic)));
  }
  function renderList() {
    $('kanjiWordList').innerHTML = filtered.map(word => `<button class="kanji-item" data-kanji-word="${word.index}" aria-current="${word === active}"><strong lang="ja">${escape(word.k)}</strong><span class="kanji-item-hv">${escape(hvWord(word))}</span><span>${done.has(word.key) ? '✓ Đã học · ' : ''}Bài ${word.l} · ${escape(word.m)}</span></button>`).join('');
    const unique = new Set(filtered.flatMap(characters)).size;
    $('kanjiResultCount').textContent = `${filtered.length} từ · ${unique} chữ Hán trong phạm vi chọn`;
  }
  function filterWords(preferred) {
    const lesson = $('kanjiLesson').value, topic = $('kanjiTopic').value, query = normalize($('kanjiSearch').value.trim()), status = $('kanjiStatus').value;
    filtered = entries.filter(word => (lesson === 'all' || word.l === Number(lesson)) && (topic === 'all' || word.t === topic) && (!query || searchText.get(word.index).includes(query)) && (status === 'all' || done.has(word.key) === (status === 'done')));
    active = filtered.find(word => word.index === preferred) || filtered.find(word => word === active) || filtered[0];
    stopAnimation();
    $('kanjiEmpty').hidden = Boolean(active);
    $('kanjiStudy').hidden = !active;
    renderList();
    if (active) selectWord(active);
    else clearCanvas();
  }
  function selectWord(word, keepCharacter = false) {
    stopAnimation();
    active = word;
    const chars = characters(word);
    if (!keepCharacter || !chars.includes(activeChar)) activeChar = chars[0];
    $('kanjiWordTitle').textContent = word.k;
    $('kanjiWordKana').textContent = word.h;
    $('kanjiWordMeaning').textContent = word.m;
    $('kanjiWordLesson').textContent = `Bài ${word.l} · ${getTopicLabel(word.t)}`;
    $('kanjiPdfLink').href = `sources/new-words.pdf#page=${word.p}`;
    $('kanjiPdfLink').textContent = `PDF · trang ${word.p} ↗`;
    $('kanjiPdfSpelling').textContent = `Trong PDF: ${word.pdf}${word.supplement ? ' · Có chữ Hán bổ sung cho cách viết kana trong tài liệu.' : ''}`;
    $('kanjiWordNote').textContent = wordNotes[word.k] || (word.k.endsWith('ます')
      ? 'Học chữ Hán cùng phần kana đi kèm; ます là đuôi lịch sự của động từ. Xem nghĩa của cả từ ở phía trên, rồi chọn từng chữ để luyện viết.'
      : 'Âm Hán Việt dưới mỗi chữ giúp liên hệ và nhớ mặt chữ. Nghĩa và cách đọc của cả từ được ghi ở phía trên; không ghép âm Hán Việt để đọc tiếng Nhật.');
    $('kanjiCharacterTabs').innerHTML = chars.map(char => `<button class="kanji-character-tab" data-kanji-char="${char}" aria-pressed="${char === activeChar}" aria-label="Học chữ ${char}: ${escape(hvLabel(char))}"><strong lang="ja">${char}</strong><small>${escape(hvLabel(char))}</small></button>`).join('');
    const position = filtered.indexOf(active);
    $('kanjiPosition').textContent = `${position + 1} / ${filtered.length}`;
    $('kanjiPrevious').disabled = position <= 0;
    $('kanjiNext').disabled = position === filtered.length - 1;
    $('kanjiComplete').setAttribute('aria-pressed',String(done.has(word.key)));
    $('kanjiComplete').textContent = done.has(word.key) ? '✓ Đã học' : '✓ Đánh dấu đã học';
    document.querySelectorAll('[data-kanji-word]').forEach(button => button.setAttribute('aria-current',String(Number(button.dataset.kanjiWord) === word.index)));
    renderCharacter();
    persist();
  }
  function renderCharacter() {
    stopAnimation();
    const data = KANJI_CHARACTERS[activeChar];
    $('kanjiCharacterHeading').innerHTML = `<span lang="ja">${activeChar}</span>${escape(hvLabel(activeChar))}`;
    $('kanjiCharacterMeaning').textContent = data.meaning;
    const positions = {left:'trái',right:'phải',top:'trên',bottom:'dưới',tare:'bao phía trên/trái',kamae:'bao ngoài',nyou:'bao phía dưới/trái'};
    $('kanjiParts').textContent = data.parts.length ? 'Thành phần hình thể: ' + data.parts.map(part => `${part.element}${part.position ? ` (${positions[part.position] || part.position})` : ''}`).join(' + ') + '.' : 'Chữ đơn thể: quan sát vị trí từng nét trong ô vuông.';
    $('kanjiOn').textContent = 'On: ' + (data.on.join(' · ') || 'Không có âm On trong dữ liệu.');
    $('kanjiKun').textContent = 'Kun: ' + (data.kun.join(' · ') || 'Không có âm Kun trong dữ liệu.');
    $('kanjiStrokeCount').textContent = `${data.strokes.length} nét`;
    const ghost = `<g class="kanji-stroke-ghost">${data.strokes.map(d => `<path d="${escape(d)}"/>`).join('')}</g>`;
    $('kanjiStrokeSvg').innerHTML = grid + ghost + data.strokes.map(d => `<path class="kanji-stroke" d="${escape(d)}"/>`).join('') + data.numbers.map((matrix,i) => `<text class="kanji-stroke-number" transform="matrix(${matrix.join(' ')})">${i+1}</text>`).join('') + '<circle class="kanji-start-dot" r="1.8"/>';
    $('kanjiStrokeSvg').setAttribute('aria-label',`Thứ tự ${data.strokes.length} nét của chữ ${activeChar}`);
    $('kanjiTraceGuide').innerHTML = grid + ghost;
    $('kanjiTraceGuide').querySelector('g').style.visibility = $('kanjiGuide').checked ? 'visible' : 'hidden';
    pathNodes = [...$('kanjiStrokeSvg').querySelectorAll('.kanji-stroke')];
    numberNodes = [...$('kanjiStrokeSvg').querySelectorAll('.kanji-stroke-number')];
    $('kanjiStrokeRange').max = pathNodes.length;
    showStep(0);
    clearCanvas();
    renderRelated();
  }
  function showStep(step) {
    currentStep = Math.max(0, Math.min(step, pathNodes.length));
    pathNodes.forEach((node,i) => {
      node.style.visibility = i < currentStep ? 'visible' : 'hidden';
      node.style.strokeDasharray = '';
      node.style.strokeDashoffset = '';
      node.classList.toggle('is-current',i === currentStep - 1);
    });
    numberNodes.forEach((node,i) => node.style.visibility = $('kanjiNumbers').checked && i < currentStep ? 'visible' : 'hidden');
    const dot = $('kanjiStrokeSvg').querySelector('circle');
    const target = pathNodes[Math.max(0,currentStep - 1)];
    if (target && dot) { const point = target.getPointAtLength(0); dot.setAttribute('cx',point.x); dot.setAttribute('cy',point.y); }
    $('kanjiStrokeRange').value = currentStep;
    $('kanjiStrokeLabel').textContent = `${currentStep} / ${pathNodes.length}`;
    $('kanjiStepBack').disabled = currentStep === 0;
    $('kanjiStepNext').disabled = currentStep === pathNodes.length;
  }
  function stopAnimation() {
    cancelAnimationFrame(frame);
    frame = 0; playing = false;
    $('kanjiPlay').textContent = '▶ Viết mẫu';
    $('kanjiPlay').setAttribute('aria-pressed','false');
    if (pathNodes.length) showStep(currentStep);
  }
  window.stopKanjiAnimation = stopAnimation;
  function playAnimation() {
    if (playing) { stopAnimation(); return; }
    if (!active) return;
    stopAnimation(); showStep(0);
    playing = true;
    $('kanjiPlay').textContent = '■ Dừng';
    $('kanjiPlay').setAttribute('aria-pressed','true');
    let start = null, index = 0;
    const duration = Number($('kanjiSpeed').value);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = now => {
      if (!playing) return;
      if (start === null) { start = now; showStep(index+1); }
      const node = pathNodes[index], length = node.getTotalLength();
      if (!reduced) { node.style.strokeDasharray = length; node.style.strokeDashoffset = length * (1 - Math.min(1,(now-start)/duration)); }
      if (now-start >= duration+180) {
        index++; start = null;
        if (index === pathNodes.length) { stopAnimation(); return; }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  }
  function renderRelated() {
    const seen = new Set([active.k]);
    const related = entries.filter(word => {
      if (!word.k.includes(activeChar) || seen.has(word.k)) return false;
      seen.add(word.k); return true;
    });
    $('kanjiRelated').innerHTML = related.length ? related.map(word => `<button class="kanji-related-word" data-kanji-related="${word.index}"><strong lang="ja">${escape(word.k)}</strong><span lang="ja">${escape(word.h)}</span><span>Bài ${word.l} · ${escape(word.m)}</span></button>`).join('') : '<p class="kanji-note">Chưa có từ khác chứa chữ này trong danh sách.</p>';
  }
  function drawCanvas() {
    context.clearRect(0,0,canvas.width,canvas.height);
    const ink = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#5b50cc';
    context.strokeStyle = ink; context.fillStyle = ink;
    context.lineWidth = 15; context.lineCap = 'round'; context.lineJoin = 'round';
    for (const line of drawings) {
      if (!line.length) continue;
      context.beginPath(); context.moveTo(line[0][0]*canvas.width,line[0][1]*canvas.height);
      for (const point of line.slice(1)) context.lineTo(point[0]*canvas.width,point[1]*canvas.height);
      if (line.length === 1) { context.arc(line[0][0]*canvas.width,line[0][1]*canvas.height,7.5,0,Math.PI*2); context.fill(); }
      else context.stroke();
    }
    $('kanjiUndo').disabled = $('kanjiClearCanvas').disabled = !drawings.length;
    $('kanjiCanvasStatus').textContent = drawings.length ? `Đã viết ${drawings.length} nét tự do. Đối chiếu với ${pathNodes.length} nét mẫu; ô viết không chấm điểm.` : 'Dùng chuột, bút hoặc ngón tay. Ô viết không chấm điểm; bạn cũng có thể luyện trên giấy.';
  }
  function endDrawing() {
    if (pointerId !== null && canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
    drawing = null; pointerId = null;
  }
  function clearCanvas() { endDrawing(); drawings.length = 0; drawCanvas(); }
  function pointOf(event) { const rect = canvas.getBoundingClientRect(); return [Math.min(1,Math.max(0,(event.clientX-rect.left)/rect.width)),Math.min(1,Math.max(0,(event.clientY-rect.top)/rect.height))]; }
  canvas.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || drawing) return;
    event.preventDefault(); pointerId = event.pointerId; canvas.setPointerCapture(pointerId);
    drawing = [pointOf(event)]; drawings.push(drawing); drawCanvas();
  });
  canvas.addEventListener('pointermove', event => {
    if (!drawing || event.pointerId !== pointerId) return;
    event.preventDefault(); drawing.push(pointOf(event)); drawCanvas();
  });
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => canvas.addEventListener(type, event => { if (event.pointerId === pointerId) endDrawing(); }));
  $('kanjiUndo').addEventListener('click', () => { endDrawing(); drawings.pop(); drawCanvas(); });
  $('kanjiClearCanvas').addEventListener('click', clearCanvas);
  $('kanjiGuide').addEventListener('change', () => { $('kanjiTraceGuide').querySelector('g').style.visibility = $('kanjiGuide').checked ? 'visible' : 'hidden'; });
  $('kanjiLesson').append(...Array.from({length:15},(_,i) => new Option(`Bài ${i+1}`,i+1)));
  $('kanjiLesson').addEventListener('change', () => { updateTopics(); filterWords(); });
  ['kanjiTopic','kanjiStatus'].forEach(id => $(id).addEventListener('change', () => filterWords()));
  $('kanjiSearch').addEventListener('input', () => filterWords());
  $('clearKanjiFilters').addEventListener('click', () => { $('kanjiLesson').value = $('kanjiStatus').value = 'all'; $('kanjiSearch').value = ''; updateTopics(); filterWords(); });
  $('kanjiWordList').addEventListener('click', event => { const button = event.target.closest('[data-kanji-word]'); if (button) selectWord(wordsByIndex.get(Number(button.dataset.kanjiWord))); });
  $('kanjiCharacterTabs').addEventListener('click', event => {
    const button = event.target.closest('[data-kanji-char]');
    if (!button) return;
    activeChar = button.dataset.kanjiChar;
    document.querySelectorAll('[data-kanji-char]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
    renderCharacter();
  });
  $('kanjiPrevious').addEventListener('click', () => { const word = filtered[filtered.indexOf(active)-1]; if (word) selectWord(word); });
  $('kanjiNext').addEventListener('click', () => { const word = filtered[filtered.indexOf(active)+1]; if (word) selectWord(word); });
  $('kanjiComplete').addEventListener('click', () => { if (!active) return; done.has(active.key) ? done.delete(active.key) : done.add(active.key); persist(); updateProgress(); filterWords(); });
  $('kanjiRelated').addEventListener('click', event => {
    const button = event.target.closest('[data-kanji-related]');
    if (!button) return;
    const word = wordsByIndex.get(Number(button.dataset.kanjiRelated));
    const char = activeChar;
    $('kanjiLesson').value = word.l; updateTopics(); $('kanjiTopic').value = word.t;
    $('kanjiSearch').value = ''; $('kanjiStatus').value = 'all'; filterWords(word.index);
    activeChar = char; selectWord(word,true);
  });
  $('kanjiPlay').addEventListener('click', playAnimation);
  $('kanjiStepBack').addEventListener('click', () => { stopAnimation(); showStep(currentStep-1); });
  $('kanjiStepNext').addEventListener('click', () => { stopAnimation(); showStep(currentStep+1); });
  $('kanjiShowAll').addEventListener('click', () => { stopAnimation(); showStep(pathNodes.length); });
  $('kanjiStrokeRange').addEventListener('input', () => { const step = Number($('kanjiStrokeRange').value); stopAnimation(); showStep(step); });
  $('kanjiNumbers').addEventListener('change', () => { stopAnimation(); showStep(currentStep); });
  $('kanjiSpeed').addEventListener('change', stopAnimation);
  document.addEventListener('visibilitychange', () => { if (document.hidden) { stopAnimation(); endDrawing(); } });
  new MutationObserver(drawCanvas).observe(document.body,{attributes:true,attributeFilter:['data-theme']});
  updateTopics(); updateProgress(); filterWords(active.index);
})();
