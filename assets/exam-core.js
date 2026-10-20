/* Exam documents are data, never executable code. */
(() => {
  'use strict';
  const categories={reading:'Đọc chữ Hán',spelling:'Viết chữ Hán',vocabulary:'Từ vựng',grammar:'Ngữ pháp',dialogue:'Hội thoại',translation:'Dịch câu'};
  const text=(value,max,name,required=true)=>{
    if(typeof value!=='string'||value.length>max||required&&!value.trim()) throw Error(`${name}: cần văn bản${required?' không trống':''}, tối đa ${max} ký tự.`);
    return value.trim();
  };
  function validateSolution(s,name){
    if(!s||typeof s!=='object'||!Array.isArray(s.options)||s.options.length!==4)throw Error(`${name}: solution cần có giải thích cho đủ 4 lựa chọn.`);
    return {completed:text(s.completed,2500,`${name}, câu hoàn chỉnh`),meaning:text(s.meaning,2000,`${name}, nghĩa`),rule:text(s.rule,2500,`${name}, quy tắc`),options:s.options.map(reason=>text(reason,1600,`${name}, phân tích lựa chọn`))};
  }
  function validate(input) {
    if(!input||input.format!=='dekiru-exam'||input.version!==1||!input.exam) throw Error('File cần có format: "dekiru-exam", version: 1 và exam. Hãy tải file đề mẫu để sửa.');
    if(new Blob([JSON.stringify(input)]).size>30*1024*1024)throw Error('Đề vượt 30 MB. Hãy giảm hoặc xóa bớt ảnh trước khi lưu.');
    const e=input.exam;
    if(!Array.isArray(e.questions)||e.questions.length!==45) throw Error('Mỗi đề phải có đúng 45 câu hỏi.');
    const seen=new Set();
    const questions=e.questions.map((q,i)=>{
      const n=`Câu ${i+1}`;
      if(!q||typeof q!=='object') throw Error(`${n}: dữ liệu không hợp lệ.`);
      const prompt=text(q.prompt,2500,`${n}, đề bài`);
      const canonical=prompt.normalize('NFKC').replace(/\s/g,'');
      if(seen.has(canonical)) throw Error(`${n}: đề bài bị trùng với một câu trước đó.`);seen.add(canonical);
      if(!Array.isArray(q.options)||q.options.length!==4) throw Error(`${n}: cần đúng 4 lựa chọn.`);
      const options=q.options.map(o=>text(o,1000,`${n}, lựa chọn`));
      if(new Set(options.map(o=>o.normalize('NFKC').replace(/\s/g,''))).size!==4) throw Error(`${n}: các lựa chọn bị trùng.`);
      if(!Number.isInteger(q.answer)||q.answer<0||q.answer>3) throw Error(`${n}: answer phải là số 0, 1, 2 hoặc 3 (A đến D).`);
      if(!Number.isInteger(q.lesson)||q.lesson<1||q.lesson>15||!Number.isInteger(q.topic)||q.topic<0||q.topic>2) throw Error(`${n}: lesson phải từ 1–15; topic từ 0–2.`);
      if(!Object.hasOwn(categories,q.category)) throw Error(`${n}: category chưa đúng. Dùng reading, spelling, vocabulary, grammar, dialogue hoặc translation.`);
      const image=q.image||'';
      if(typeof image!=='string'||image.length>2000000||image&&!/^data:image\/(?:png|jpeg|webp);base64,[a-zA-Z0-9+/=]+$/.test(image)) throw Error(`${n}: ảnh cần là PNG/JPEG/WebP dạng data URL, dưới 2 MB.`);
      const result={id:`q${i+1}`,prompt,options,answer:q.answer,lesson:q.lesson,topic:q.topic,category:q.category,unit:typeof q.unit==='string'?q.unit.slice(0,80):'',explanation:text(q.explanation??'',2000,`${n}, giải thích`,false)};
      if(q.solution!==undefined){
        result.solution=validateSolution(q.solution,n);
      }
      if(image)result.image=image;
      return result;
    });
    const minutes=e.minutes??45;
    if(!Number.isInteger(minutes)||minutes<1||minutes>180) throw Error('Thời gian gợi ý phải từ 1 đến 180 phút.');
    return {title:text(e.title,140,'Tên đề'),description:text(e.description??'',1200,'Mô tả',false),minutes,lessons:[...new Set(questions.map(q=>q.lesson))].sort((a,b)=>a-b),questions,kind:'imported'};
  }
  function documentOf(exam){return {format:'dekiru-exam',version:1,exam:{title:exam.title,description:exam.description,minutes:exam.minutes,questions:exam.questions.map(({prompt,options,answer,lesson,topic,category,unit,explanation,image,solution})=>({prompt,options,answer,lesson,topic,category,unit,explanation,...(image?{image}:{}),...(solution?{solution}:{})}))}};}
  function fingerprint(exam) {
    // Adding teaching notes must not invalidate an existing answer sheet or its history.
    const doc=documentOf(exam);doc.exam.questions.forEach(q=>delete q.solution);
    const value=JSON.stringify(doc);let hash=2166136261;
    for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}
    return (hash>>>0).toString(16);
  }
  function validOrder(order,count){return Array.isArray(order)&&order.length===count&&new Set(order).size===count&&order.every(n=>Number.isInteger(n)&&n>=0&&n<count);}
  function shuffleOrder(count,previous=[]){
    const order=Array.from({length:count},(_,i)=>i);
    for(let i=count-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
    if(count>1)while(order.every((n,i)=>n===i)||count>2&&order.every((n,i)=>n===previous[i]))order.push(order.shift());
    return order;
  }
  function orderedExam(exam,order){
    if(!validOrder(order,exam.questions.length))throw Error('Thứ tự câu hỏi không hợp lệ.');
    return {...exam,questions:order.map(i=>exam.questions[i])};
  }
  function grade(exam,answers) {
    const states=exam.questions.map((q,i)=>!Number.isInteger(answers[i])?'skipped':answers[i]===q.answer?'correct':'wrong');
    const correct=states.filter(s=>s==='correct').length,wrong=states.filter(s=>s==='wrong').length;
    return {states,correct,wrong,skipped:states.length-correct-wrong,percent:Math.round(correct/states.length*100),score:(correct/states.length*10).toFixed(2)};
  }
  let dbPromise;
  function db(){
    if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{
      const request=indexedDB.open('dekiru_exams_v1',1);
      request.onupgradeneeded=()=>request.result.createObjectStore('documents',{keyPath:'id'});
      request.onsuccess=()=>{request.result.onversionchange=()=>request.result.close();resolve(request.result);};
      request.onerror=()=>reject(Error('Không mở được bộ nhớ đề.'));
      request.onblocked=()=>reject(Error('Hãy đóng tab Dekiru khác rồi mở lại để dùng bộ nhớ đề.'));
    });
    return dbPromise;
  }
  async function transaction(action,data) {
    const database=await db();
    return new Promise((resolve,reject)=>{
      const tx=database.transaction('documents',action==='getAll'?'readonly':'readwrite'),store=tx.objectStore('documents');
      const request=action==='getAll'?store.getAll():action==='put'?store.put(data):store.delete(data);
      tx.oncomplete=()=>resolve(request.result);tx.onerror=()=>reject(Error('Không lưu được. Bộ nhớ có thể đã đầy hoặc bị chặn.'));tx.onabort=()=>reject(Error('Thao tác lưu bị gián đoạn.'));
    });
  }
  window.ExamCore={categories,validate,validateSolution,documentOf,fingerprint,validOrder,shuffleOrder,orderedExam,grade,store:{list:()=>transaction('getAll'),put:e=>transaction('put',e),remove:id=>transaction('delete',id)}};
})();
