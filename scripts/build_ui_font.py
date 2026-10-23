"""Subset the official variable Plus Jakarta Sans font for offline Vietnamese UI.

Usage: python scripts/build_ui_font.py path/to/PlusJakartaSans.ttf
Retains Latin/Vietnamese glyphs, punctuation and the variable weight axis.
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from fontTools import subset
from fontTools.ttLib import TTFont


if len(sys.argv) != 2:
    raise SystemExit(__doc__)
font = TTFont(sys.argv[1])
options = subset.Options()
options.layout_features = ['*']
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes=[
    *range(0x20, 0x250),
    *range(0x1e00, 0x1f00),
    *range(0x2000, 0x2070),
    0x20ab, 0x20ac, 0x2212, 0x2190, 0x2192,
])
subsetter.subset(font)
font.flavor = 'woff2'
target = ROOT / 'assets/fonts/PlusJakartaSans-latin.woff2'
font.save(target)
print(f'Created {target.name}: {target.stat().st_size:,} bytes')
