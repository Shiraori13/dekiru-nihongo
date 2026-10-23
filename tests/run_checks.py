"""Run standalone suites sequentially; keep failures and artifacts for review."""
import os, subprocess, json, time, sys
from datetime import datetime, timezone
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/os.environ.get('DEKIRU_RESULTS_DIR','.work/test-results');OUT.mkdir(parents=True,exist_ok=True)
selected=sys.argv[1:]
results=json.loads((OUT/'results.json').read_text(encoding='utf-8')) if selected and (OUT/'results.json').exists() else []
tests=[ROOT/'tests'/name for name in selected] if selected else sorted((ROOT/'tests').glob('check_*.py'))
for test in tests:
    start=time.time()
    try:
        r=subprocess.run(['python',str(test)],cwd=ROOT,capture_output=True,encoding='utf-8',errors='replace',timeout=480,env={**os.environ,'PYTHONUTF8':'1'})
        result={'test':test.name,'code':r.returncode,'seconds':round(time.time()-start,1),'output':r.stdout+r.stderr}
    except subprocess.TimeoutExpired:
        result={'test':test.name,'code':'timeout','seconds':480}
    result['browser_config']=os.environ.get('DEKIRU_BROWSER','edge' if os.name=='nt' else 'chromium')
    result['completed_utc']=datetime.now(timezone.utc).isoformat()
    results=[r for r in results if r['test']!=test.name]+[result]
    (OUT/'results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
    print(test.name,result['code'],flush=True)
raise SystemExit(any(r['code']!=0 for r in results))
