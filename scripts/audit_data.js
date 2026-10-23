/* Reproducible per-ID inventory. A structural pass is not a language certificate. */
'use strict';
const fs=require('node:fs'), vm=require('node:vm'), crypto=require('node:crypto');
const ctx={window:{},Blob};vm.createContext(ctx);
for(const file of ['data/vocabulary.js','data/readings.js','data/grammar.js','data/grammar-practice.js','data/exams.js','data/meaning-groups.js','assets/quiz-core.js','assets/grammar-core.js','assets/exam-core.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),ctx);Object.assign(ctx,ctx.window);
}
const {words,readings,grammar}=vm.runInContext('({words:RAW_VOCAB,readings:READINGS,grammar:GRAMMAR_DATA})',ctx);
const decisions=JSON.parse(fs.readFileSync('audits/content-decisions.json','utf8'));
const digest=q=>crypto.createHash('sha256').update(JSON.stringify(q)).digest('hex');
const csv=(path,rows)=>{
  const fields=Object.keys(rows[0]);
  fs.writeFileSync(path,'\ufeff'+[fields,...rows.map(r=>fields.map(k=>r[k]))].map(row=>row.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\n')+'\n');
};
const units=new Map(grammar.units.map(u=>[u.id,u]));
const grammarRows=grammar.questions.map(q=>{
  const u=units.get(q.unit),change=decisions.grammar[q.id];
  return {id:q.id,lesson:u.lesson,topic:u.topic,unit:q.unit,type:q.type,prompt:q.prompt,
    accepted:JSON.stringify([q.answer,...q.answers||[],...q.alternatives||[]]),options_or_tokens:JSON.stringify(q.options||q.tokens||[]),explanation:q.explanation,
    issue:change?.issue||'Không phát hiện lỗi sau rà soát theo quy tắc/mẫu; chưa có khóa độc lập cho câu biên soạn.',
    decision:change?.status||'retain',
    source:change?.source||`sources/speaking.pdf#page=${u.pages[0]}; data/grammar.js:${u.id}`,
    structure:'pass',language_status:'rule-reviewed; authored-sentence-no-official-key',
    pending:q.type==='order'?'Chưa chứng minh danh sách trật tự chấp nhận bao trùm mọi cách nói tự nhiên.':'Chưa có giáo viên/khóa độc lập duyệt từng câu biên soạn.',sha256:digest(q)};
});
const examRows=ctx.DEKIRU_EXAMS.flatMap(e=>e.questions.map((q,i)=>{
  const change=decisions.exams[q.id],u=units.get(q.unit);
  const target=q.prompt.match(/「([^」]+)」/)?.[1];
  const word=words.find(w=>q.category==='spelling'
    ? w.h===target&&w.k===q.options[q.answer]
    : w.k===target&&(q.category!=='reading'||q.options[q.answer]===w.h));
  const added=e.id.startsWith('chapter67-');
  return {id:q.id,paper:e.id,source_number:i+1,lesson:q.lesson,topic:q.topic,unit:q.unit,prompt:q.prompt,options:JSON.stringify(q.options),key_index:q.answer,key_letter:'ABCD'[q.answer],expected:q.options[q.answer],completed:q.solution.completed,meaning:q.solution.meaning,rule:q.solution.rule,reasons:JSON.stringify(q.solution.options),
    issue:change?.issue||(added?'Câu mới bài 6–7, biên soạn theo ma trận đề mẫu; chưa có khóa đáp án chính thức.':'Không phát hiện lỗi trong rà soát ngữ cảnh, lựa chọn và lời giải; ảnh gốc không có khóa đáp án.'),
    decision:change?.status||(added?'add-chapter67':'retain'),source:change?.source||(word?`sources/new-words.pdf#page=${word.p}`:u?`sources/speaking.pdf#page=${u.pages[0]}`:q.source||'scripts/build_exams.py; scripts/exam_solutions.py'),
    structure:'pass',language_status:word?'pdf-headword-matched; no-official-exam-key':'rule-reviewed; no-official-exam-key',
    pending:!u&&!word?'Cần đối chiếu từ điển/giáo viên riêng cho mục ngoài danh sách hoặc bản chuyển thể.':'Cần giáo viên duyệt độc lập lời giải/độ tự nhiên; không coi điểm tối đa tự động là chứng minh khóa đúng.',sha256:digest(q)};
}));
const wordRows=words.map((w,i)=>({id:`v-${i.toString().padStart(3,'0')}`,lesson:w.l,topic:w.t,kanji:w.k,reading:w.h,meaning:w.m,group:ctx.QuizCore.sense(w.m).id,facets:JSON.stringify(ctx.QuizCore.sense(w.m).facets),source:`sources/new-words.pdf#page=${w.p}`,decision:ctx.QuizCore.sense(w.m).id.startsWith('literal:')?'exact-gloss-only':'curated-gloss-group',pending:'Nhóm mặc định không tự suy đoán đồng nghĩa. Không gộp cách đọc/ngữ cảnh theo mặt Kanji.'}));
fs.mkdirSync('audits',{recursive:true});csv('audits/grammar.csv',grammarRows);csv('audits/exams.csv',examRows);csv('audits/vocabulary.csv',wordRows);
const summary={date:'2026-10-23',vocabulary:words.length,readings:readings.length,grammarUnits:grammar.units.length,grammarExercises:grammarRows.length,examPapers:ctx.DEKIRU_EXAMS.length,examQuestions:examRows.length,countsChanged:true,scopeChange:{previousExamPapers:4,previousExamQuestions:180,addedExamPapers:4,addedExamQuestions:180,lessons:[6,7],reason:'Bổ sung bốn đề 45 câu theo yêu cầu, bám đúng ma trận đề mẫu; không thay ngân hàng bốn đề cũ.'},officialAnswerKeyAvailable:false,reviewMethod:`All generator banks and ${examRows.length} expanded paper rows reviewed; structural invariants automated; sources support headwords/models, not every authored sentence. Chapter 6–7 additions: audits/CHAPTER67_EXAMS.md.`,structuralChecks:'node tests/check_logic.js; node tests/check_chapter67.js',contentDecisions:decisions};
fs.writeFileSync('audits/content-summary.json',JSON.stringify(summary,null,2)+'\n');
const addedPapers=ctx.DEKIRU_EXAMS.filter(e=>e.id.startsWith('chapter67-'));
const categoriesOf=e=>e.questions.reduce((out,q)=>(out[q.category]=(out[q.category]||0)+1,out),{});
const chapter67Matrix={
  date:'2026-10-23',basis:'material-adapted-01; source screenshots in Material, same six question categories',
  sampleCategories:categoriesOf(ctx.DEKIRU_EXAMS.find(e=>e.kind==='sample')),
  targetCategories:{reading:6,spelling:8,vocabulary:1,grammar:21,dialogue:7,translation:2},
  vocabularySource:'sources/new-words.pdf#page=18',vocabularyCount:words.filter(w=>[6,7].includes(w.l)).length,
  papers:addedPapers.map(p=>({id:p.id,title:p.title,description:p.description,lessons:p.lessons,minutes:p.minutes,
    count:p.questions.length,categories:categoriesOf(p),units:[...new Set(p.questions.map(q=>q.unit).filter(Boolean))].sort(),
    topics:[...new Set(p.questions.map(q=>`${q.lesson}:${q.topic}`))].sort()})),
  units:grammar.units.filter(u=>[6,7].includes(u.lesson)).map(u=>({id:u.id,lesson:u.lesson,topic:u.topic,title:u.title,formula:u.formula,speakingPages:u.pages})),
  officialAnswerKeyAvailable:false,independentTeacherReview:'pending'
};
fs.writeFileSync('audits/chapter67-matrix.json',JSON.stringify(chapter67Matrix,null,2)+'\n');
console.log(`Inventory written: ${wordRows.length} vocabulary, ${grammarRows.length} grammar, ${examRows.length} exam IDs. Pending verification remains explicit.`);
