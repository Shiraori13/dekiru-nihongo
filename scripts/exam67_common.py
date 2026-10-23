"""Shared, deterministic assembly for the authored lesson 6–7 papers.

The four authors' source lists keep answer text and per-option reasons together.
Rotation happens only here, after validation, and moves those pairs together.
"""
from collections import Counter
from copy import deepcopy
import json
from pathlib import Path
import re
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
VOCABULARY = json.loads((ROOT / 'data/vocabulary.js').read_text(encoding='utf-8')
                        .split('const RAW_VOCAB = ', 1)[1].strip().removesuffix(';'))

MATRIX = dict(reading=6, spelling=8, vocabulary=1, grammar=21, dialogue=7, translation=2)
UNIT_PAGES = {
    'g6-invite': 43, 'g6-event': 43, 'g6-compare': 47, 'g6-best': 46,
    'g6-already': 55, 'g6-suggest': 50, 'g6-particles': 49,
    'g7-location': 60, 'g7-there': 62, 'g7-te': 63, 'g7-request': 63,
    'g7-tool': 63, 'g7-how': 73, 'g7-which': 64, 'g7-progressive': 66,
    'g7-offer': 67, 'g7-who': 68, 'g7-remaining': 69,
}
RULES = {
    'g6-invite': 'Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.',
    'g6-event': 'Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.',
    'g6-compare': 'So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.',
    'g6-best': 'So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.',
    'g6-already': 'もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.',
    'g6-suggest': 'Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.',
    'g6-particles': 'よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.',
    'g7-location': 'Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….',
    'g7-there': 'Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.',
    'g7-te': 'Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.',
    'g7-request': 'Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.',
    'g7-tool': 'Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.',
    'g7-how': 'Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.',
    'g7-which': 'どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.',
    'g7-progressive': 'Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.',
    'g7-offer': 'Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.',
    'g7-who': 'Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.',
    'g7-remaining': 'Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.',
}


def q(category, lesson, topic, unit, prompt, correct, distractors,
      completed, meaning, why, reasons, rule=None):
    assert category in MATRIX and lesson in (6, 7) and topic in (0, 1, 2)
    assert len(distractors) == len(reasons) == 3
    assert len(set([correct, *distractors])) == 4, prompt
    if unit:
        assert unit in RULES and unit.startswith(f'g{lesson}-'), (unit, lesson)
    rule = rule or RULES.get(unit) or (
        f'Đối chiếu mục từ và cách đọc chuẩn trong PDF New words list, bài {lesson}, '
        f'topic {topic + 1}. Phân biệt âm dài, âm đục, âm ngắt và nghĩa của từng mục từ; '
        'không coi các cách đọc khác tồn tại trong từ điển là sai nếu chưa xác định ngữ cảnh.'
    )
    assert all(isinstance(s, str) and s.strip() for s in [prompt, correct, completed, meaning, why, rule, *distractors, *reasons])
    assert len(rule) > 70 and all(len(s) > 10 for s in [why, *reasons]), prompt
    lexical_page = 18 + (lesson - 6) * 3 + topic
    target = re.search(r'「([^」]+)」', prompt)
    if not unit and target:
        normalize = lambda s: unicodedata.normalize('NFKC', s)
        for word in VOCABULARY:
            if word['l'] != lesson:
                continue
            # Optional お is explicitly marked in the supplied PDF, not inferred.
            for prefix in ('', 'お'):
                kanji = word['k'].replace('(お)', prefix)
                kana = word['h'].replace('(お)', prefix)
                if ((category == 'spelling' and kana == target[1] and kanji == correct)
                        or (category != 'spelling' and normalize(kanji) == normalize(target[1]))):
                    lexical_page = word['p']
    source = (f'sources/speaking.pdf#page={UNIT_PAGES[unit]}' if unit
              else f'sources/new-words.pdf#page={lexical_page}')
    return dict(category=category, lesson=lesson, topic=topic, unit=unit,
                prompt=prompt, options=[correct, *distractors], answer=0,
                explanation=why, source=source, origin='authored',
                solution=dict(completed=completed, meaning=meaning,
                              rule=rule, options=[why, *reasons]))


def assemble(papers):
    result, prompts = [], set()
    for number, raw in enumerate(papers, 1):
        paper = deepcopy(raw)
        assert paper['id'] == f'chapter67-{number}'
        assert paper['lessons'] == [6, 7] and paper['kind'] == 'authored'
        questions = paper['questions']
        assert len(questions) == 45 and Counter(q['category'] for q in questions) == MATRIX
        assert {q['unit'] for q in questions if q['unit']} == set(RULES)
        assert {(q['lesson'], q['topic']) for q in questions} == {(l, t) for l in (6, 7) for t in range(3)}
        for index, question in enumerate(questions):
            assert question['prompt'] not in prompts, question['prompt']
            prompts.add(question['prompt'])
            question['id'] = f'c67-{number}-{index + 1:02}'
            shift = (index + number) % 4
            answer = question['options'][0]
            question['options'] = question['options'][shift:] + question['options'][:shift]
            notes = question['solution']['options']
            question['solution']['options'] = notes[shift:] + notes[:shift]
            question['answer'] = question['options'].index(answer)
            assert question['solution']['options'][question['answer']] == question['explanation']
        paper['contentVersion'] = '2026-10-23'
        result.append(paper)
    assert len(result) == 4
    return result
