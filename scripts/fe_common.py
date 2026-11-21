"""Shared, deterministic assembly for the JPD123 #Thi FE exam bank.

Covers both:
- 3 real SU26 FE/RE papers transcribed & editorially reviewed from
  sources/FE/JPD123_FE+RE_SU26.pdf (fe-su26-re-1, fe-su26-fe-2, fe-su26-b5re-3)
- 4 newly authored FE mock papers matching the real EOS FE matrix
  (fe-mock-1 .. fe-mock-4, 30 questions each including 1 reading passage).

Option text and per-option explanations stay paired in source lists and are
rotated together deterministically so A/B/C/D keys are evenly distributed.
"""
from collections import Counter
from copy import deepcopy
from pathlib import Path
import unicodedata

from exam67_common import RULES as RULES_67

ROOT = Path(__file__).resolve().parents[1]

VALID_CATEGORIES = {
    'reading',
    'spelling',
    'vocabulary',
    'grammar',
    'dialogue',
    'translation',
    'comprehension',
}

FE_MOCK_MATRIX = dict(
    reading=3,
    spelling=3,
    grammar=11,
    dialogue=4,
    vocabulary=6,
    comprehension=3,
)

RULES = {
    **RULES_67,
    'g4-location': 'Nêu vị trí một địa danh trong một quốc gia/khu vực dùng Địa danh は + Quốc gia の + phương hướng（東・西・南・北・真ん中）です. Chú ý nối bằng trợ từ の trước phương hướng.',
    'g4-duration': 'Hỏi khoảng thời gian di chuyển dùng AからBまで どのくらいですか (trong tiếng Nhật thực tế どれくらい cũng chuẩn). Trả lời phương tiện dùng で (riêng đi bộ là 歩いて), thời lượng dùng 時間／分くらいです.',
    'g4-adjective': 'Tính từ đuôi い kết thúc bằng い đứng trực tiếp trước です (寒い・高い); tính từ đuôi な (静か・きれい・にぎやか) bỏ な trước です. Chú ý きれい là tính từ đuôi な dù kết thúc bằng い.',
    'g4-negative': 'Phủ định hiện tại: tính từ đuôi い đổi い → くないです (ngoại lệ いい → よくないです); tính từ đuôi な và danh từ dùng じゃありません／ではありません (không chia くない).',
    'g4-modifier': 'Bổ nghĩa danh từ: tính từ い + N (古い町), tính từ な + な + N (きれいなところ). Hỏi đặc điểm của danh từ dùng どんな + N ですか; tránh bỏ thiếu な sau tính từ đuôi な như きれい.',
    'g4-existence': 'Giới thiệu sự vật có ở một địa điểm dùng Địa điểm に + N が + あります (cho vật/cảnh quan/công trình). Trợ từ に chỉ nơi tồn tại, が đánh dấu sự vật xuất hiện.',
    'g4-connect': 'Nối hai câu/ý bổ sung cùng chiều dùng そして (Và, hơn nữa); nối hai ý tương phản dùng が (Nhưng). Phân biệt そして (thêm tính chất/ý song song) với それから (trình tự hành động trước–sau).',
    'g4-degree': 'Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.',
    'g4-ne': 'Tiểu từ cuối câu ね dùng để tìm sự đồng tình, chia sẻ cảm nhận (暑いですね) hoặc xác nhận thông tin với người nghe; khác よ dùng khi báo thông tin mới cho người nghe.',
    'g5-past': 'Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.',
    'g5-with': 'Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.',
    'g5-somewhere': 'Hỏi có đi đâu đó không dùng どこか（へ）行きますか／行きましたか; phủ định hoàn toàn không đi đâu dùng どこ（へ）も行きません／行きませんでした. Tương tự cho なにも + phủ định.',
    'g5-past-i': 'Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.',
    'g5-past-na': 'Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.',
    'g5-reason': 'Hỏi lý do dùng どうして…ですか／ましたか; trả lời nêu nguyên nhân dùng [Lý do] から (đặt cuối câu đáp hoặc nối 2 vế [Nguyên nhân]から、[Kết quả]). Chú ý đồng nhất thì giữa hai vế.',
    'g5-want-noun': 'Diễn tả mong muốn có một đồ vật/danh từ dùng N が ほしいです (phủ định: ほしくないです; không muốn gì cả: なにもほしくないです). Trợ từ đánh dấu đối tượng mong muốn là が.',
    'g5-like': 'Nói thích hoặc ghét một đối tượng dùng N が 好きです／嫌いです. 好き và 嫌い đều là tính từ đuôi な nên phủ định là 好きじゃありません và bổ nghĩa danh từ cần な.',
    'g5-want-verb': 'Diễn tả muốn làm hành động dùng V(bỏ ます) + たいです (phủ định: たくないです). Tính từ たい biến đổi giống tính từ đuôi い; tân ngữ thường đi với を hoặc が.',
    'g5-purpose': 'Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.',
}

DEFAULT_KANJI_RULE = (
    'Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu '
    'trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). '
    'Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.'
)

DEFAULT_VOCAB_RULE = (
    'Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật '
    'sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.'
)

DEFAULT_READING_RULE = (
    'Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), '
    'mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.'
)


def _canon(text: str) -> str:
    return unicodedata.normalize('NFKC', text).replace(' ', '').replace('\u3000', '').replace('\n', '').replace('\t', '')


def q(category, lesson, topic, unit, prompt, correct, distractors,
      completed, meaning, why, reasons, rule=None,
      source='', origin='authored',
      passage_id='', passage_title='', passage=''):
    assert category in VALID_CATEGORIES, f'Invalid category: {category}'
    assert 1 <= lesson <= 15 and topic in (0, 1, 2), (lesson, topic)
    assert len(distractors) == len(reasons) == 3, prompt
    all_opts = [correct, *distractors]
    assert len({_canon(o) for o in all_opts}) == 4, f'Duplicate options: {prompt} -> {all_opts}'
    if unit:
        assert unit in RULES, f'Unknown unit: {unit}'
    if not rule:
        if unit and unit in RULES:
            rule = RULES[unit]
        elif category in ('reading', 'spelling'):
            rule = DEFAULT_KANJI_RULE
        elif category == 'comprehension':
            rule = DEFAULT_READING_RULE
        else:
            rule = DEFAULT_VOCAB_RULE
    assert all(
        isinstance(s, str) and s.strip()
        for s in [prompt, correct, completed, meaning, why, rule, *distractors, *reasons]
    ), prompt
    assert len(rule.strip()) > 70, f'Rule too short ({len(rule)}): {prompt}'
    assert all(len(s.strip()) > 10 for s in [why, *reasons]), f'Option reason too short: {prompt}'
    item = dict(
        category=category,
        lesson=lesson,
        topic=topic,
        unit=unit,
        prompt=prompt.strip(),
        options=[o.strip() for o in all_opts],
        answer=0,
        explanation=why.strip(),
        origin=origin,
        solution=dict(
            completed=completed.strip(),
            meaning=meaning.strip(),
            rule=rule.strip(),
            options=[why.strip(), *(r.strip() for r in reasons)],
        ),
    )
    if source:
        item['source'] = source
    if passage:
        assert passage_id and passage_title, f'Missing passage metadata: {prompt}'
        item['passageId'] = passage_id
        item['passageTitle'] = passage_title
        item['passage'] = passage.strip()
    return item


def assemble_fe(source_papers, mock_papers, existing_prompts=None):
    existing_prompts = set(existing_prompts or ())
    result = []
    mock_prompts = set()
    all_ids = set()

    expected_source_ids = ['fe-su26-re-1', 'fe-su26-fe-2', 'fe-su26-b5re-3']
    expected_mock_ids = ['fe-mock-1', 'fe-mock-2', 'fe-mock-3', 'fe-mock-4']

    assert len(source_papers) == 3, len(source_papers)
    assert len(mock_papers) == 4, len(mock_papers)

    for paper_idx, raw in enumerate([*source_papers, *mock_papers], 1):
        paper = deepcopy(raw)
        is_source = paper_idx <= 3
        expected_id = expected_source_ids[paper_idx - 1] if is_source else expected_mock_ids[paper_idx - 4]
        assert paper['id'] == expected_id, (paper['id'], expected_id)
        assert paper['kind'] == ('fe-source' if is_source else 'fe-authored'), paper['id']
        assert paper.get('tags') == ['Thi FE'], paper['id']
        questions = paper['questions']
        assert len(questions) in (30, 31), (paper['id'], len(questions))

        if not is_source:
            assert len(questions) == 30, paper['id']
            assert Counter(item['category'] for item in questions) == FE_MOCK_MATRIX, (
                paper['id'],
                Counter(item['category'] for item in questions),
            )
            assert set(paper['lessons']) == {4, 5, 6, 7}, paper['id']
            assert {item['lesson'] for item in questions} >= {4, 5, 6, 7}, paper['id']

        paper_prompts = set()
        key_counts = [0, 0, 0, 0]
        prefix = paper['id']
        for q_idx, item in enumerate(questions):
            canon_prompt = _canon(item['prompt'])
            assert canon_prompt not in paper_prompts, f'Duplicate prompt in {paper["id"]}: {item["prompt"]}'
            paper_prompts.add(canon_prompt)
            if not is_source:
                assert canon_prompt not in mock_prompts, f'Duplicate mock prompt: {item["prompt"]}'
                assert canon_prompt not in existing_prompts, f'Mock duplicates existing prompt: {item["prompt"]}'
                mock_prompts.add(canon_prompt)
            else:
                existing_prompts.add(canon_prompt)

            qid = f'{prefix}-{q_idx + 1:02}'
            assert qid not in all_ids, qid
            all_ids.add(qid)
            item['id'] = qid

            if item.get('source'):
                src_path = ROOT / item['source'].split('#', 1)[0]
                assert src_path.is_file(), f'Missing source file: {item["source"]}'

            if item['category'] == 'comprehension':
                assert item.get('passage') and item.get('passageId') and item.get('passageTitle'), qid

            # Rotate options & per-option explanations together deterministically.
            # Choose shift so A/B/C/D are evenly distributed (7-8 each per 30-31q paper).
            shift = (q_idx + paper_idx) % 4
            correct_text = item['options'][0]
            item['options'] = item['options'][shift:] + item['options'][:shift]
            notes = item['solution']['options']
            item['solution']['options'] = notes[shift:] + notes[:shift]
            item['answer'] = item['options'].index(correct_text)
            assert item['solution']['options'][item['answer']] == item['explanation'], qid
            key_counts[item['answer']] += 1

        assert all(6 <= c <= 9 for c in key_counts), f'Unbalanced keys in {paper["id"]}: {key_counts}'
        paper['contentVersion'] = '2026-11-21'
        result.append(paper)

    assert len(result) == 7
    return result
