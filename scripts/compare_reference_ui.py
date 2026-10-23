"""Compare captured before/after fixtures and bank hashes, not image pixels.

Run after scripts/capture_reference_ui.py has captured the matching two stages.
"""
import hashlib
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
out = root / 'audits/evidence/reference'
before = json.loads((out / 'before-screens.json').read_text(encoding='utf-8'))
after = json.loads((out / 'after-screens.json').read_text(encoding='utf-8'))
assert len(before['screens']) == len(after['screens']) == 6
for first, second in zip(before['screens'], after['screens']):
    for key in ['width','height','theme','questions','options','answers','index','prompt','optionsVisible']:
        assert first[key] == second[key], (first['width'],first['theme'],key)
hashes = json.loads((out / 'before-hashes.json').read_text(encoding='utf-8'))
changed = [name for name, digest in hashes.items() if hashlib.sha256((root/name).read_bytes()).hexdigest()!=digest]
data = [name for name in hashes if name.startswith('data/')]
assert not [name for name in changed if name.startswith('data/')]
report = {'matching_screenshot_states':6,'questions_options_answers_unchanged':True,
          'data_files_checked':len(data),'changed_data_files':[],
          'runtime_files_changed_since_refinement_baseline':changed}
(out / 'preservation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
