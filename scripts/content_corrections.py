"""Apply reviewed decisions by question ID/option text, never cyclic positions."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]

def apply(exams, fingerprint):
    decisions=json.loads((ROOT/'audits/content-decisions.json').read_text(encoding='utf-8'))['exams']
    for exam in exams:
        previous=fingerprint(exam)
        invalid=[]
        for index,q in enumerate(exam['questions']):
            change=decisions.get(q['id'])
            if not change: continue
            if 'prompt' in change:q['prompt']=change['prompt'];invalid.append(index)
            if 'replaceOptions' in change:
                q['options']=[change['replaceOptions'].get(o,o) for o in q['options']];invalid.append(index)
            if 'completed' in change:q['solution']['completed']=change['completed']
            if 'meaning' in change:q['solution']['meaning']=change['meaning']
            for option,reason in change.get('reasonsByOption',{}).items():
                q['solution']['options'][q['options'].index(option)]=reason
        if fingerprint(exam)!=previous:
            exam['migrations']={old:sorted(set(invalid)) for old in [previous,*exam.pop('legacyFingerprints',[])]}
        exam['contentVersion']='2026-10-22'
