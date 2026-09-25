"""Create the local Japanese study font from the official Noto Sans JP TTF.

Usage: python scripts/build_font.py path/to/NotoSansJP.ttf
Requires fonttools and brotli. The full source TTF is not needed at runtime.
"""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
from fontTools import subset
from fontTools.ttLib import TTFont

if len(sys.argv)!=2:
    raise SystemExit('Usage: python scripts/build_font.py path/to/NotoSansJP.ttf')
chars=set()
for path in [ROOT/'index.html',*(ROOT/'data').glob('*.js'),ROOT/'data/readings-source.txt',*(ROOT/'assets').glob('*.js')]:
    chars.update(map(ord,path.read_text(encoding='utf-8')))
for start,end in [(0x20,0x7f),(0x3000,0x3100),(0x31f0,0x3200),(0xff00,0xfff0)]:
    chars.update(range(start,end))
font=TTFont(sys.argv[1])
options=subset.Options()
options.layout_features=['*']
subsetter=subset.Subsetter(options=options)
subsetter.populate(unicodes=chars)
subsetter.subset(font)
font.flavor='woff2'
target=ROOT/'assets/fonts/NotoSansJP-study.woff2'
font.save(target)
print(f'Created {target.name}: {target.stat().st_size:,} bytes')
