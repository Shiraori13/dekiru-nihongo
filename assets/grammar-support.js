/* Question independence and lexical hints, shared by study UI and regression checks. */
(() => {
  'use strict';
  const normalize=s=>String(s).normalize('NFKC').replace(/[\s。、,.!?！？「」『』（）()：:…—|]/g,'');
  const questions=GRAMMAR_DATA.questions;
  const visible=q=>q.prompt+' '+(q.type==='order'?q.tokens.join(''):'');
  const exposure=q=>visible(q)+' '+(q.type==='choice'?q.options.join(' '):'');
  const fullContext=q=>q.contextJP||(q.type==='order'?q.answer:'');
  function targets(q) {
    return [...new Set([q.answer,...(q.answers||[]),...(q.alternatives||[])].map(normalize))].filter(t=>
      t.length>=3 && (/\p{Script=Han}/u.test(t)||t.length>=5&&/(?:くないです|くなかったです|かったです|ませんでした|たいです|たくないです)$/.test(t)));
  }
  const info=new Map(questions.map(q=>[q.id,{text:normalize(exposure(q)),context:normalize(fullContext(q)),targets:targets(q)}]));
  const graph=new Map(questions.map(q=>[q.id,new Set()]));
  for(let i=0;i<questions.length;i++) for(let j=i+1;j<questions.length;j++) {
    const a=questions[i],b=questions[j],x=info.get(a.id),y=info.get(b.id);
    if(x.context&&x.context===y.context||x.targets.some(t=>y.text.includes(t))||y.targets.some(t=>x.text.includes(t))) {
      graph.get(a.id).add(b.id);graph.get(b.id).add(a.id);
    }
  }
  const compatible=(a,b)=>a.id!==b.id&&!graph.get(a.id)?.has(b.id);
  const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  function independent(items) {
    const picked=[];for(const q of items) if(picked.every(other=>compatible(q,other)))picked.push(q);return picked;
  }
  const capacities=new Map();
  function basePlan(items) {
    const key=items.map(q=>q.id).sort().join('|');
    if(capacities.has(key))return capacities.get(key);
    const ids=new Set(items.map(q=>q.id));
    const degree=q=>[...graph.get(q.id)].filter(id=>ids.has(id)).length;
    const sorted=[...items].sort((a,b)=>degree(a)-degree(b)||a.id.localeCompare(b.id));
    const variants=[sorted,items,[...items].reverse()].map(independent).sort((a,b)=>b.length-a.length);
    capacities.set(key,variants[0]);return variants[0];
  }
  function plan(items,count=Infinity) {
    const stable=basePlan(items),limit=Math.min(count,stable.length);
    const alternatives=[stable,...[0,1,2].map(()=>independent(shuffle(items)))].filter(a=>a.length>=limit);
    return shuffle(alternatives[Math.floor(Math.random()*alternatives.length)]).slice(0,limit);
  }

  // Use complete headwords, not isolated on/kun readings guessed from characters.
  // Inflected verbs/adjectives point to a dictionary headword, never the requested form.
  const lexemes=[],matchers=[];
  const add=(word,reading,meaning,aliases=[word],priority=1)=>{
    if(!/\p{Script=Han}/u.test(word)||!reading||!meaning)return;
    const entry={word,reading,meaning};lexemes.push(entry);
    aliases.filter(Boolean).forEach(surface=>matchers.push({surface,entry,priority}));
  };
  RAW_VOCAB.filter(w=>!w.example).forEach(w=>{
    let word=w.k.normalize('NFKC'),reading=w.h.normalize('NFKC');
    // Remove optional な and support both honorific and plain spellings.
    word=word.replace(/\(な\)$/,'');reading=reading.replace(/\(な\)$/,'');
    for(const keep of [true,false]) {
      const form=s=>s.replace(/\((.*?)\)/g,(_,p)=>keep?p:'');
      const k=form(word),h=form(reading).split('/')[0];
      if(k.endsWith('ます'))continue;
      if(k.endsWith('い')) add(k,h,w.m,[k,k.slice(0,-1)+'く',k.slice(0,-1)+'かった'],2);
      else add(k,h,w.m,[k],2);
    }
  });
  const verbRows=`行く/いく/đi/行き/行って
来る/くる/đến/来/来て
帰る/かえる/về/帰り/帰って
食べる/たべる/ăn/食べ/食べて
飲む/のむ/uống/飲み/飲んで
読む/よむ/đọc/読み/読んで
書く/かく/viết/書き/書いて
聞く/きく/nghe; hỏi/聞き/聞いて
見る/みる/xem; nhìn/見/見て
買う/かう/mua/買い/買って
会う/あう/gặp/会い/会って
作る/つくる/làm; chế biến/作り/作って
洗う/あらう/rửa/洗い/洗って
切る/きる/cắt/切り/切って
取る/とる/lấy/取り/取って
持つ/もつ/cầm; mang/持ち/持って
置く/おく/đặt; để/置き/置いて
出す/だす/lấy ra; đưa ra/出し/出して
入れる/いれる/cho vào; pha (trà)/入れ/入れて
入る/はいる/vào; tắm (suối nước nóng)/入り/入って
開ける/あける/mở/開け/開けて
閉める/しめる/đóng/閉め/閉めて
貸す/かす/cho mượn/貸し/貸して
借りる/かりる/mượn/借り/借りて
教える/おしえる/dạy; chỉ bảo/教え/教えて
使う/つかう/sử dụng/使い/使って
待つ/まつ/đợi/待ち/待って
手伝う/てつだう/giúp đỡ/手伝い/手伝って
弾く/ひく/chơi (nhạc cụ)/弾き/弾いて
歌う/うたう/hát/歌い/歌って
話す/はなす/nói chuyện/話し/話して
泳ぐ/およぐ/bơi/泳ぎ/泳いで
遊ぶ/あそぶ/chơi/遊び/遊んで
撮る/とる/chụp (ảnh)/撮り/撮って
登る/のぼる/leo/登り/登って
座る/すわる/ngồi/座り/座って
習う/ならう/học (từ ai)/習い/習って
調べる/しらべる/tra cứu; tìm hiểu/調べ/調べて
焼く/やく/nướng/焼き/焼いて
乗る/のる/lên; đi (phương tiện)/乗り/乗って
休む/やすむ/nghỉ/休み/休んで
出かける/でかける/ra ngoài/出かけ/出かけて
死ぬ/しぬ/chết/死に/死んで
迎える/むかえる/đón/迎え/迎えて
勉強する/べんきょうする/học/勉強し/勉強して
掃除する/そうじする/dọn dẹp/掃除し/掃除して
洗濯する/せんたくする/giặt giũ/洗濯し/洗濯して
旅行する/りょこうする/du lịch/旅行し/旅行して
散歩する/さんぽする/đi dạo/散歩し/散歩して
電話する/でんわする/gọi điện/電話し/電話して`;
  verbRows.split('\n').forEach(row=>{
    const [word,reading,meaning,stem,te]=row.split('/');
    add(word,reading,meaning,[word,stem,te,te.slice(0,-1)],4);
  });
  const extras=`庭/にわ/vườn
映画/えいが/phim
食事/しょくじ/bữa ăn; việc dùng bữa
買い物/かいもの/việc mua sắm
子供/こども/trẻ em
誰/だれ/ai
教室/きょうしつ/phòng học
本屋/ほんや/hiệu sách
日本語/にほんご/tiếng Nhật
田中/たなか/Tanaka (họ người)
バス停/バスてい/trạm xe buýt
後/あと/sau
時間/じかん/tiếng; khoảng thời gian
半/はん/rưỡi; một nửa
時/じ/giờ (trên đồng hồ)
分/ふん・ぷん/phút; cách đọc thay đổi theo số đi trước
月/がつ/tháng (trong tên tháng)
枚/まい/tấm; tờ (lượng từ cho vật mỏng)
月曜日/げつようび/thứ hai
火曜日/かようび/thứ ba
水曜日/すいようび/thứ tư
木曜日/もくようび/thứ năm
金曜日/きんようび/thứ sáu
土曜日/どようび/thứ bảy
日曜日/にちようび/chủ nhật
空港/くうこう/sân bay
橋/はし/cầu
道/みち/đường
村/むら/làng
港/みなと/cảng
島/しま/đảo
湖/みずうみ/hồ
池/いけ/ao
寮/りょう/ký túc xá
門/もん/cổng
鍵/かぎ/chìa khóa
机/つくえ/bàn học; bàn làm việc
箱/はこ/hộp
鳥/とり/chim
鉛筆/えんぴつ/bút chì
住所/じゅうしょ/địa chỉ
入れ物/いれもの/đồ đựng; hộp đựng
新聞/しんぶん/báo
果物/くだもの/trái cây
動物/どうぶつ/động vật
塩/しお/muối
砂糖/さとう/đường (ăn)
卵/たまご/trứng
名前/なまえ/tên
天気/てんき/thời tiết
景色/けしき/phong cảnh
待ち合わせ/まちあわせ/cuộc hẹn gặp
札幌/さっぽろ/Sapporo
福岡/ふくおか/Fukuoka
奈良/なら/Nara
大阪/おおさか/Osaka
京都/きょうと/Kyoto
東京/とうきょう/Tokyo
日本/にほん/Nhật Bản
韓国/かんこく/Hàn Quốc
富士山/ふじさん/núi Phú Sĩ
明後日/あさって/ngày kia
料理/りょうり/món ăn; nấu ăn
読み方/よみかた/cách đọc
書き方/かきかた/cách viết
作り方/つくりかた/cách làm
使い方/つかいかた/cách sử dụng
行き方/いきかた/cách đi
弾き方/ひきかた/cách chơi nhạc cụ
切り方/きりかた/cách cắt
歌い方/うたいかた/cách hát
持ち方/もちかた/cách cầm
食べ方/たべかた/cách ăn
遊び方/あそびかた/cách chơi
入れ方/いれかた/cách cho vào; cách pha
勉強/べんきょう/việc học
方/かた/cách (trong từ chỉ cách làm)
字/じ/chữ
紙/かみ/giấy
赤い/あかい/đỏ
青い/あおい/xanh dương
長い/ながい/dài
若い/わかい/trẻ
速い/はやい/nhanh
強い/つよい/mạnh`;
  extras.split('\n').forEach(row=>{const [word,reading,meaning]=row.split('/');add(word,reading,meaning,[word],5);});
  const digit=['','いち','に','さん','よん','ご','ろく','なな','はち','きゅう'];
  const number=n=>n===0?'れい':n<10?digit[n]:(n>=20?digit[Math.floor(n/10)]:'')+'じゅう'+digit[n%10];
  for(let n=1;n<=60;n++) {
    const end=n%10,stem=n>=10?(n>=20?digit[Math.floor(n/10)]:'')+(end===0?'じゅっ':'じゅう'):'';
    const minute=stem+(end===0?'':({1:'いっ',2:'に',3:'さん',4:'よん',5:'ご',6:'ろっ',7:'なな',8:'はっ',9:'きゅう'}[end]))+([0,1,3,4,6,8].includes(end)?'ぷん':'ふん');
    add(`${n}分`,minute,`${n} phút`,[`${n}分`],6);
    if(n<=24) {
      const hour=([4,7,9].includes(end)?(n>=10?number(n-end):'')+({4:'よ',7:'しち',9:'く'}[end]):number(n));
      add(`${n}時`,hour+'じ',`${n} giờ (trên đồng hồ)`,[`${n}時`],6);
      add(`${n}時間`,hour+'じかん',`khoảng thời gian ${n} tiếng`,[`${n}時間`],6);
      add(`${n}時間半`,hour+'じかんはん',`${n} tiếng rưỡi`,[`${n}時間半`],6);
    }
    if(n<=12)add(`${n}月`,({4:'し',7:'しち',9:'く'}[n]||number(n))+'がつ',`tháng ${n}`,[`${n}月`],6);
    if(n<=20)add(`${n}枚`,number(n)+'まい',`${n} tấm/tờ`,[`${n}枚`],6);
  }
  matchers.sort((a,b)=>b.surface.length-a.surface.length||b.priority-a.priority);
  function scan(text) {
    text=text.normalize('NFKC');const words=[],unknown=[];const used=new Set();
    for(let i=0;i<text.length;) {
      const found=matchers.find(m=>text.startsWith(m.surface,i));
      if(found) {if(!used.has(found.entry.word)){words.push(found.entry);used.add(found.entry.word);}i+=found.surface.length;}
      else {if(/\p{Script=Han}/u.test(text[i]))unknown.push(text[i]);i++;}
    }
    return {words,unknown:[...new Set(unknown)]};
  }
  function hintsFor(q) {
    const result=scan(visible(q));
    // A Vietnamese-only instruction can still explain vocabulary shared by ALL
    // alternatives, without identifying which alternative has the right grammar.
    if(!result.words.length&&!result.unknown.length&&q.type==='choice'&&q.options?.length) {
      const alternatives=q.options.map(scan);
      result.words=alternatives[0].words.filter(w=>normalize(w.word)!==normalize(q.answer)&&alternatives.every(a=>a.words.some(other=>other.word===w.word)));
    }
    return result;
  }
  window.GrammarSupport={compatible,plan,capacity:items=>basePlan(items).length,hintsFor,visible,fullContext};
})();
