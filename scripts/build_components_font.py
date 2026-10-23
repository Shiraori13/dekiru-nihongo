"""Subset the seven KanjiVG component labels absent from the Japanese font.

Usage: python scripts/build_components_font.py .work/NotoSansSC.ttf
Source: https://github.com/google/fonts/tree/main/ofl/notosanssc
License: assets/fonts/OFL-components.txt. Source font is not needed at runtime.
"""
import sys,hashlib
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'.tools'))
from fontTools import subset
from fontTools.ttLib import TTFont
if len(sys.argv)!=2:raise SystemExit(__doc__)
path=Path(sys.argv[1]);font=TTFont(path);chars='㑒丆业戋龰龶龷'
assert all(ord(c) in font.getBestCmap() for c in chars)
options=subset.Options();options.layout_features=['*'];s=subset.Subsetter(options=options);s.populate(text=chars);s.subset(font)
for record in font['name'].names:
    if record.nameID in [1,4,6]:record.string=('DekiruComponents' if record.nameID==6 else 'Dekiru Components').encode(record.getEncoding(),errors='replace')
font.flavor='woff2';target=ROOT/'assets/fonts/DekiruComponents.woff2';font.save(target)
print('Source SHA256:',hashlib.sha256(path.read_bytes()).hexdigest());print('Components bytes:',target.stat().st_size)
