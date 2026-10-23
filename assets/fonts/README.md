# Packaged study and interface fonts

`PlusJakartaSans-latin.woff2` (45,800 bytes) supplies the offline Vietnamese interface, including the complete Vietnamese Latin Extended Additional range and variable weights 200–800. It is preloaded locally; the application no longer requests Google Fonts. Japanese text falls back to the packaged Noto Sans JP and component fonts below.

Source: [Google Fonts — Plus Jakarta Sans](https://github.com/google/fonts/tree/main/ofl/plusjakartasans), original file `PlusJakartaSans[wght].ttf`, downloaded 2026-10-23. License: [OFL-PlusJakartaSans.txt](OFL-PlusJakartaSans.txt).

- Source TTF SHA-256: `89b3fb38aa0d275d7a731d0d817a4f1622b316b4d7fbdecdf02ee9099ff68bc8`.
- Packaged WOFF2 SHA-256: `e489f0fbd8e599a75cfe96b6e585af566dc5fbd4f464a691234156a033f40928`.
- Regenerate: `python scripts/build_ui_font.py path/to/PlusJakartaSans.ttf` (pinned fontTools/Brotli in `requirements-dev.txt`).

## Japanese study font

`NotoSansJP-study.woff2` is a subset of the variable Noto Sans JP font, keeping the characters used by this application, kana, Latin basics and Japanese punctuation. The weight range remains variable.

Source: [Google Fonts — Noto Sans JP](https://github.com/google/fonts/tree/main/ofl/notosansjp). Original file: `NotoSansJP[wght].ttf`.

The font is distributed under the SIL Open Font License 1.1; see `OFL.txt`. The copyright and license are retained with this subset.

Regenerate with `python scripts/build_font.py path/to/NotoSansJP.ttf` after adding new Japanese characters to the study data.

Regenerated for the four lesson 6–7 papers on 2026-10-23. All Japanese code points in their questions, options and explanations are covered by the packaged fonts and checked in `tests/check_chapter67.py`.

`DekiruComponents.woff2` (2,208 bytes) supplies seven KanjiVG component labels
absent from the original JP font: 㑒 丆 业 戋 龰 龶 龷. It is a renamed subset of
[Noto Sans SC](https://github.com/google/fonts/tree/main/ofl/notosanssc), loaded
only when those code points are displayed. License: `OFL-components.txt`.
Source TTF SHA-256: `a3041811a78c361b1de50f953c805e0244951c21c5bd412f7232ef0d899af0da`.
Regenerate: `python scripts/build_components_font.py path/to/NotoSansSC.ttf`.
