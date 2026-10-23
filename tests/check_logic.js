/* Independent expected outcomes, plus exhaustive data invariants. Run with Node. */
'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const context = {window: {}, console, Blob};
vm.createContext(context);
for (const file of ['data/vocabulary.js','data/meaning-groups.js','assets/quiz-core.js','assets/grammar-core.js','assets/exam-core.js','data/grammar.js','data/grammar-practice.js','data/exams.js']) {
  vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file});
  // Browser classic scripts expose window names as global names.
  Object.assign(context,context.window);
}
const words=vm.runInContext('RAW_VOCAB',context), grammar=vm.runInContext('GRAMMAR_DATA',context);
const {QuizCore:quiz,GrammarCore:gr,ExamCore:ex,DEKIRU_EXAMS:papers}=context;
assert(quiz.equivalent('Nấu ăn / Món ăn','Món ăn / Nấu ăn'));
assert(quiz.equivalent('Thầy/Cô giáo','Giáo viên'));
assert(quiz.equivalent('Vào / Bước vào','Vào, đi vào'));
assert(!quiz.equivalent('Nghỉ','Nghi'));
assert(!quiz.equivalent('Nghe','Hỏi'));
assert(!quiz.equivalent('Biết (làm gì) / Có thể (làm gì)','Được hoàn thành, xong'));
assert(!quiz.equivalent('Cao, đắt','Thấp'));
// Sharing one sense does not make two polysemous glosses equivalent in full.
for(const [left,right] of [
  ['Mặc','Đeo / Treo'],['Mặc','Đeo / Mặc (phụ kiện)'],
  ['Làm, chơi','Cho / Làm'],['Gọi','Gọi điện thoại'],
  ['Lấy ra','Lấy ra / Đưa ra'],['Một chút, ít','Một chút / Hơi hơi'],
  ['Xin lỗi','Xin lỗi… cho tôi hỏi…'],['A / Ôi','A, à (nhận ra điều gì)'],
  ['Gia nhập, tham gia','Tham gia'],
  ['Buổi sáng / AM','Buổi sáng'],['Dùng bữa, ăn uống','Ăn'],['Hiểu, biết','Hiểu'],
  ['Nghỉ, nghỉ ngơi','Nghỉ'],['Thế à!','Vậy à?'],
  ['Ừ / Vâng (cách nói thân mật của はい)','Vâng (thân mật, suồng sã)'],
]){assert(!quiz.equivalent(left,right));assert(quiz.overlaps(left,right));}
const shuffle = list => [...list].reverse();
for (const w of words) {
  const options=quiz.options(w,words.filter(x=>x.l===w.l&&x.t===w.t),words,shuffle);
  assert.equal(options.length,4);
  assert.equal(options.filter(o=>quiz.equivalent(o,w.m)).length,1,JSON.stringify(w));
  for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)assert(!quiz.overlaps(options[i],options[j]));
  const otherSenses=words.filter(x=>x.k===w.k&&!quiz.equivalent(x.m,w.m));
  assert(options.every(o=>quiz.equivalent(o,w.m)||!otherSenses.some(s=>quiz.equivalent(o,s.m))));
}
assert.throws(()=>quiz.options(words[44],[words[44]],[words[44]],shuffle),/Không đủ 4/);
// Kanji/kana aliases are declared, not guessed from orthography.
const fill={type:'fill',answer:'行って',answers:['行って','いって']};
assert(gr.correct(fill,'いって。'));assert(gr.correct(fill,' 行って '));
assert(!gr.correct(fill,'いいて'));assert(!gr.correct(fill,''));
const order={type:'order',tokens:['私は','友達と','学校へ','行きます。'],answer:'私は友達と学校へ行きます。',alternatives:['私は学校へ友達と行きます。']};
assert(gr.correct(order,[0,1,2,3]));assert(gr.correct(order,[0,2,1,3]));
assert(!gr.correct(order,[0,2,3]));assert(!gr.correct(order,[0,1,1,3]));assert(!gr.correct(order,[3,2,1,0]));
const choice={type:'choice',options:['の','に','で','が'],answer:'の'};
assert(gr.correct(choice,'の'));assert(!gr.correct(choice,'に'));assert(!gr.correct(choice,null));
// Expected Japanese answers independently specified here, not read from keys.
for(const [id,wanted] of [['sample-01','どこへ行きましたか'],['sample-08','で・が'],['sample-13','おもしろくなかった'],['sample-35','さんまい']]){
  const q=papers.flatMap(e=>e.questions).find(q=>q.id===id);assert(q,id);
  assert.equal(q.options[q.answer],wanted,id);
}
// Independent expected keys, plus valid explanatory/contracted forms that
// must not be used as incorrect distractors for these broad target meanings.
for(const [id,wanted,validAlternative] of [
  ['practice-g4-adjective-1-choice','高い','高いの'],
  ['practice-g4-adjective-3-choice','古い','古いの'],
  ['practice-g4-adjective-6-choice','低い','低いの'],
  ['practice-g4-adjective-7-choice','新しい','新しいの'],
  ['g5-want-verb-choice','撮りたいです','撮ってたいです'],
  ['practice-g5-want-verb-0-choice','行きたいです','行ってたいです'],
  ['practice-g5-want-verb-2-choice','食べたいです','食べてたいです'],
  ['practice-g5-want-verb-3-choice','したいですか','してたいですか'],
  ['practice-g5-want-verb-4-choice','会いたいです','会ってたいです'],
  ['practice-g5-want-verb-6-choice','撮りたいです','撮ってたいです'],
  ['practice-g6-invite-2-choice-v3','泳ぎましょう','泳いでましょう'],
  ['practice-g6-invite-5-choice','飲みましょう','飲んでましょう'],
  ['practice-g6-suggest-3-choice','そうしましょう','そうしてましょう'],
  ['practice-g7-offer-0-choice','開けましょうか','開けてましょうか'],
  ['practice-g7-offer-1-choice','入れましょうか','入れてましょうか'],
  ['practice-g7-offer-2-choice','持ちましょうか','持ってましょうか'],
  ['practice-g7-offer-3-choice','取りましょうか','取ってましょうか'],
  ['practice-g7-offer-4-choice','切りましょうか','切ってましょうか'],
  ['practice-g7-offer-5-choice','閉めましょうか','閉めてましょうか'],
  ['practice-g7-offer-6-choice','持って来ましょうか','持って来てましょうか'],
  ['practice-g7-offer-7-choice','洗いましょうか','洗ってましょうか'],
]){
  const q=grammar.questions.find(q=>q.id===id);assert(q,id);
  assert.equal(q.answer,wanted,id);
  assert(!q.options.includes(validAlternative),id+' must exclude ambiguous valid form');
  assert(gr.correct(q,wanted),id);
}
const fixture={questions:[{answer:2},{answer:0},{answer:3},{answer:1}]};
let result=ex.grade(fixture,[2,1,null,1]);
assert.equal(result.correct,2);assert.equal(result.wrong,1);assert.equal(result.skipped,1);assert.equal(result.score,'5.00');
result=ex.grade(fixture,[2,0,null,1]);assert.equal(result.correct,3);assert.equal(result.score,'7.50');
assert.equal(words.length,921);assert.equal(grammar.units.length,37);assert.equal(grammar.questions.length,666);assert.equal(papers.length,8);
const ids=new Set();
for(const q of grammar.questions){
  assert(!ids.has(q.id),q.id);ids.add(q.id);
  assert(grammar.units.some(u=>u.id===q.unit));assert(q.explanation?.trim(),q.id);
  if(q.type==='choice'){assert.equal(new Set(q.options).size,q.options.length);assert(q.options.includes(q.answer));}
  if(q.type==='order'){
    assert.equal(q.tokens.join(''),q.answer,q.id);
    assert(!gr.correct(q,q.tokens.map((_,i)=>i).slice(1)),q.id);
    for(const alt of q.alternatives||[]){
      // Check the declared alternative can be made from the complete multiset.
      const canBuild=(rest,tokens)=>!tokens.length?rest==='':tokens.some((t,i)=>rest.startsWith(t)&&canBuild(rest.slice(t.length),tokens.filter((_,j)=>j!==i)));
      assert(canBuild(alt,[...q.tokens]),q.id+' alternative');
    }
  }
}
for(const paper of papers){assert.equal(ex.validate(ex.documentOf(paper)).questions.length,45);for(const q of paper.questions){assert.equal(q.solution.options.length,4);assert.equal(q.solution.options[q.answer],q.explanation);}}
console.log('PASS: 921 semantic option sets; independent synonym/polysemy/accent, fill/order and changed-answer grading fixtures; 666 grammar + 360 paper structural invariants. Content verification is tracked separately.');
