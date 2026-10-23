// Authored exam bank; see EXAM_AUDIT.md and scripts/build_exams.py.
window.DEKIRU_EXAMS = [
  {
    "id": "material-adapted-01",
    "title": "Đề mẫu từ ảnh · bản hiệu đính",
    "description": "44 câu từ Material, thêm câu 18 còn thiếu. Có nội dung bài 6 và một số chữ Hán mở rộng; không phải đề giới hạn bài 4–5. Đáp án và giải thích do ứng dụng biên soạn vì ảnh không có đáp án.",
    "lessons": [
      4,
      5,
      6
    ],
    "minutes": 45,
    "kind": "sample",
    "questions": [
      {
        "id": "sample-01",
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "A：Bさん、先週、（　）。\nB：おだいばへ行きました。",
        "options": [
          "どこへ行きましたか",
          "いつ行きましたか",
          "どこでしましたか",
          "何をしましたか"
        ],
        "answer": 0,
        "explanation": "B trả lời địa điểm đến bằng へ, nên hỏi どこへ行きましたか. Đã sửa lựa chọn lỗi どこでいきましたか trong ảnh.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (16).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：Bさん、先週、どこへ行きましたか。 B：おだいばへ行きました。",
          "meaning": "A hỏi tuần trước B đã đi đâu; B đáp đã đến Odaiba.",
          "rule": "どこへ行きましたか hỏi đã đến đâu. へ đánh dấu đích đến, còn で đánh dấu nơi thực hiện hành động. B đã trả lời おだいばへ nên câu hỏi phải hỏi địa điểm đến; 行きました là quá khứ lịch sự.",
          "options": [
            "B trả lời địa điểm đến bằng へ, nên hỏi どこへ行きましたか. Đã sửa lựa chọn lỗi どこでいきましたか trong ảnh.",
            "いつ hỏi khi nào, nhưng B không trả lời thời gian.",
            "どこでしましたか hỏi nơi làm một việc, không khớp 行きました.",
            "何を hỏi đã làm gì, không khớp câu đáp về nơi đến."
          ]
        }
      },
      {
        "id": "sample-02",
        "category": "translation",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn bản dịch: Thứ bảy tuần trước, tôi đã leo núi cùng bạn.",
        "options": [
          "来週の土曜日、友達と一緒に山に登りました。",
          "先週の土曜日、友達に一緒に山に登りました。",
          "先週の土曜日、友達と一緒に山を見ました。",
          "先週の土曜日、友達と一緒に山に登りました。"
        ],
        "answer": 3,
        "explanation": "先週 = tuần trước; と = cùng; 登りました = đã leo. Đã sửa lỗi のばりました và chuẩn hóa lựa chọn để có một đáp án.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (17).png",
        "origin": "transcribed",
        "solution": {
          "completed": "先週の土曜日、友達と一緒に山に登りました。",
          "meaning": "Thứ bảy tuần trước tôi đã leo núi cùng bạn.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "来週 là tuần sau, trái với tuần trước.",
            "Người đi cùng dùng と, không dùng 友達に一緒に.",
            "山を見ました là đã ngắm núi, không phải đã leo núi.",
            "先週 = tuần trước; と = cùng; 登りました = đã leo. Đã sửa lỗi のばりました và chuẩn hóa lựa chọn để có một đáp án."
          ]
        }
      },
      {
        "id": "sample-03",
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「どっかい」.",
        "options": [
          "読会",
          "国解",
          "読解",
          "国会"
        ],
        "answer": 2,
        "explanation": "読解（どっかい）= đọc hiểu. Đây là từ trong đề ảnh, không phải từ mới bài 4–5.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (18).png",
        "origin": "transcribed",
        "solution": {
          "completed": "読解（どっかい）",
          "meaning": "Đọc hiểu.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "読会 không phải cách viết chuẩn của từ どっかい trong câu này.",
            "国解 không phải từ 読解; thay 読 bằng 国 làm sai cách viết.",
            "読解（どっかい）= đọc hiểu. Đây là từ trong đề ảnh, không phải từ mới bài 4–5.",
            "国会 đọc こっかい, nghĩa là quốc hội."
          ]
        }
      },
      {
        "id": "sample-04",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "きのう、天気が（　）ですから、どこへも（　）。",
        "options": [
          "いい・行きませんでした",
          "わるかった・行きませんでした",
          "わるかった・行きました",
          "いい・行きました"
        ],
        "answer": 1,
        "explanation": "Hôm qua trời xấu nên không đi đâu: 悪かった + どこへも行きませんでした.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (19).png",
        "origin": "transcribed",
        "solution": {
          "completed": "きのう、天気がわるかったですから、どこへも行きませんでした。",
          "meaning": "Vì hôm qua trời xấu nên tôi đã không đi đâu cả.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "いい không phải quá khứ của “xấu”, dù vế sau đã phủ định đúng.",
            "Hôm qua trời xấu nên không đi đâu: 悪かった + どこへも行きませんでした.",
            "どこへも trong mẫu này cần phủ định, không dùng 行きました.",
            "いい là hiện tại; 行きました còn trái với どこへも + phủ định."
          ]
        }
      },
      {
        "id": "sample-05",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "おもしろい映画を（　）です。",
        "options": [
          "見たい",
          "食べたい",
          "会いたい",
          "買います"
        ],
        "answer": 0,
        "explanation": "映画を見る → 見たい. Muốn xem một bộ phim thú vị.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (20).png",
        "origin": "transcribed",
        "solution": {
          "completed": "おもしろい映画を見たいです。",
          "meaning": "Tôi muốn xem một bộ phim thú vị.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "映画を見る → 見たい. Muốn xem một bộ phim thú vị.",
            "食べたい là muốn ăn, không phù hợp với 映画.",
            "会いたい là muốn gặp một người, không dùng để xem phim.",
            "買います là mua và không thể nối trực tiếp thành 買いますです."
          ]
        }
      },
      {
        "id": "sample-06",
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「よみもの」.",
        "options": [
          "飲み物",
          "買い物",
          "食べ物",
          "読み物"
        ],
        "answer": 3,
        "explanation": "読み物（よみもの）= tài liệu, sách báo để đọc.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (21).png",
        "origin": "transcribed",
        "solution": {
          "completed": "読み物（よみもの）",
          "meaning": "Sách báo hoặc tài liệu để đọc.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "飲み物（のみもの）là đồ uống.",
            "買い物（かいもの）là mua sắm.",
            "食べ物（たべもの）là đồ ăn.",
            "読み物（よみもの）= tài liệu, sách báo để đọc."
          ]
        }
      },
      {
        "id": "sample-07",
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "A：先週の日曜日、（　）。\nB：いいえ、どこへも（　）。",
        "options": [
          "図書館へ行きましたか・行きました",
          "図書館へ行きました・行きませんでした",
          "どこかへ行きましたか・行きませんでした",
          "どこへ行きましたか・行きました"
        ],
        "answer": 2,
        "explanation": "Hỏi “có đi đâu không” dùng どこかへ; trả lời không đi đâu dùng どこへも + phủ định. Chuẩn hóa câu hỏi để lời đáp tự nhiên.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (22).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：先週の日曜日、どこかへ行きましたか。 B：いいえ、どこへも行きませんでした。",
          "meaning": "Chủ nhật tuần trước bạn có đi đâu không? — Không, tôi không đi đâu cả.",
          "rule": "どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.",
          "options": [
            "Câu hỏi có thể hỏi thư viện, nhưng 行きました vẫn mâu thuẫn với lời đáp phủ định.",
            "図書館へ行きました thiếu か để thành câu hỏi; không hợp cặp hỏi–đáp này.",
            "Hỏi “có đi đâu không” dùng どこかへ; trả lời không đi đâu dùng どこへも + phủ định. Chuẩn hóa câu hỏi để lời đáp tự nhiên.",
            "行きました là khẳng định, mâu thuẫn với いいえ、どこへも."
          ]
        }
      },
      {
        "id": "sample-08",
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "横浜（　）野球の試合（　）あります。",
        "options": [
          "は・に",
          "で・が",
          "に・が",
          "で・を"
        ],
        "answer": 1,
        "explanation": "Sự kiện diễn ra ở đâu dùng で; 野球の試合が là sự kiện được tổ chức.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (23).png",
        "origin": "transcribed",
        "solution": {
          "completed": "横浜で野球の試合があります。",
          "meaning": "Có trận bóng chày diễn ra ở Yokohama.",
          "rule": "Sự kiện diễn ra tại địa điểm dùng で; sự kiện, cuộc hẹn hoặc vật đang có dùng があります. 人と約束があります nói có hẹn với ai. Vé là vật mỏng/phẳng nên đếm bằng 枚（まい）.",
          "options": [
            "は・に không tạo được cấu trúc địa điểm で + sự kiện があります.",
            "Sự kiện diễn ra ở đâu dùng で; 野球の試合が là sự kiện được tổ chức.",
            "Trận đấu là sự kiện diễn ra tại nơi đó, nên dùng で chứ không phải に.",
            "あります không lấy tân ngữ を; sự kiện cần が."
          ]
        }
      },
      {
        "id": "sample-09",
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「きこく」.",
        "options": [
          "帰国",
          "会国",
          "見国",
          "問国"
        ],
        "answer": 0,
        "explanation": "帰国（きこく）= về nước.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (24).png",
        "origin": "transcribed",
        "solution": {
          "completed": "帰国（きこく）",
          "meaning": "Trở về nước.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "帰国（きこく）= về nước.",
            "会国 không phải cách viết của きこく; cần chữ 帰 là trở về.",
            "見国 không phải từ 帰国; 見 là nhìn.",
            "問国 không phải từ 帰国; 問 liên quan đến hỏi."
          ]
        }
      },
      {
        "id": "sample-10",
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "あした、（　）約束があります。Chọn cách nói ‘có hẹn với bạn’.",
        "options": [
          "友達の",
          "野球の",
          "約束の",
          "友達と"
        ],
        "answer": 3,
        "explanation": "友達と約束があります = có hẹn với bạn.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (25).png",
        "origin": "transcribed",
        "solution": {
          "completed": "あした、友達と約束があります。",
          "meaning": "Ngày mai tôi có hẹn với bạn.",
          "rule": "Sự kiện diễn ra tại địa điểm dùng で; sự kiện, cuộc hẹn hoặc vật đang có dùng があります. 人と約束があります nói có hẹn với ai. Vé là vật mỏng/phẳng nên đếm bằng 枚（まい）.",
          "options": [
            "友達の約束 nói lời hứa/cuộc hẹn của bạn, không nêu người có hẹn cùng tôi.",
            "野球の約束 không diễn đạt cuộc hẹn với một người trong ngữ cảnh này.",
            "約束の約束 lặp từ, không nêu được người hẹn.",
            "友達と約束があります = có hẹn với bạn."
          ]
        }
      },
      {
        "id": "sample-11",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "パソコンは高かったから、（　）。Chọn “đã không mua”.",
        "options": [
          "買いました",
          "会いませんでした",
          "買いませんでした",
          "会いました"
        ],
        "answer": 2,
        "explanation": "高かったから nêu lý do đắt; đã không mua là 買いませんでした. Thêm nghĩa yêu cầu để đáp án duy nhất.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (26).png",
        "origin": "transcribed",
        "solution": {
          "completed": "パソコンは高かったから、買いませんでした。",
          "meaning": "Vì máy tính đã đắt nên tôi đã không mua.",
          "rule": "どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.",
          "options": [
            "買いました là đã mua, trái với yêu cầu đã không mua.",
            "会いませんでした là đã không gặp, sai hành động.",
            "高かったから nêu lý do đắt; đã không mua là 買いませんでした. Thêm nghĩa yêu cầu để đáp án duy nhất.",
            "会いました là đã gặp, sai động từ cần dùng với việc mua máy tính."
          ]
        }
      },
      {
        "id": "sample-12",
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "私の趣味は（　）です。Chọn từ “karaoke”.",
        "options": [
          "歌手",
          "カラオケ",
          "チケット",
          "ツアー"
        ],
        "answer": 1,
        "explanation": "カラオケ = karaoke; 趣味はカラオケです = sở thích của tôi là hát karaoke. Đã sửa カラオケ trong ảnh và thêm ngữ cảnh nghĩa.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (27).png",
        "origin": "transcribed",
        "solution": {
          "completed": "私の趣味はカラオケです。",
          "meaning": "Sở thích của tôi là hát karaoke.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "歌手（かしゅ）là ca sĩ, khác hoạt động karaoke.",
            "カラオケ = karaoke; 趣味はカラオケです = sở thích của tôi là hát karaoke. Đã sửa カラオケ trong ảnh và thêm ngữ cảnh nghĩa.",
            "チケット là vé, không phải karaoke.",
            "ツアー là chuyến tham quan theo đoàn."
          ]
        }
      },
      {
        "id": "sample-13",
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "A：映画はおもしろかったですか。\nB：いいえ、（　）です。",
        "options": [
          "おもしろくなかった",
          "おもしろかった",
          "おもしろくないでした",
          "おもしろいでした"
        ],
        "answer": 0,
        "explanation": "Quá khứ phủ định của おもしろい là おもしろくなかった. Thêm いいえ để phân biệt có/không.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (28).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：映画はおもしろかったですか。 B：いいえ、おもしろくなかったです。",
          "meaning": "Phim đã hay không? — Không, phim đã không hay.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "Quá khứ phủ định của おもしろい là おもしろくなかった. Thêm いいえ để phân biệt có/không.",
            "おもしろかった là khẳng định quá khứ, trái với いいえ.",
            "Phủ định quá khứ không tạo bằng くないでした; cần くなかったです.",
            "Không thêm でした trực tiếp sau おもしろい; còn thiếu nghĩa phủ định."
          ]
        }
      },
      {
        "id": "sample-14",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "新宿駅（　）渋谷駅（　）（　）近いですか。",
        "options": [
          "と・と・どちらも",
          "の・は・どちらも",
          "の・は・どちらが",
          "と・と・どちらが"
        ],
        "answer": 3,
        "explanation": "So sánh hai lựa chọn: AとBとどちらが近いですか.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (29).png",
        "origin": "transcribed",
        "solution": {
          "completed": "新宿駅と渋谷駅とどちらが近いですか。",
          "meaning": "Ga Shinjuku và ga Shibuya, ga nào gần hơn?",
          "rule": "Hỏi giữa hai lựa chọn: AとBとどちらが…ですか. Nêu bên nổi bật: Aのほうが…です. So sánh với mốc B: AはBより…です. Giữ đúng vai trò từng trợ từ; どちらも nghĩa là cả hai, không phải từ hỏi.",
          "options": [
            "どちらも là cả hai; câu đang cần từ hỏi どちらが.",
            "の・は không ghép thành cặp AとBと, và どちらも không phải từ hỏi.",
            "どちらが đúng chức năng hỏi, nhưng hai vị trí đầu vẫn cần と・と.",
            "So sánh hai lựa chọn: AとBとどちらが近いですか."
          ]
        }
      },
      {
        "id": "sample-15",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "日本（　）食べ物（　）何（　）（　）好きですか。",
        "options": [
          "を・の・が・いちばん",
          "の・で・が・いっしょに",
          "の・で・が・いちばん",
          "の・を・で・いっしょに"
        ],
        "answer": 2,
        "explanation": "日本の食べ物で何がいちばん好きですか = thích món nào nhất trong các món Nhật.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (30).png",
        "origin": "transcribed",
        "solution": {
          "completed": "日本の食べ物で何がいちばん好きですか。",
          "meaning": "Trong các món ăn Nhật, bạn thích món nào nhất?",
          "rule": "Phạm vi で + đối tượng が + いちばん + tính từ. Với câu hỏi dùng 何がいちばん…ですか. の nối danh từ, で giới hạn nhóm so sánh, が nêu đối tượng; いっしょに là cùng nhau, không có nghĩa “nhất”.",
          "options": [
            "日本を食べ物の không tạo cụm “các món ăn Nhật”; cần 日本の食べ物で.",
            "Các trợ từ đầu đúng nhưng いっしょに không có nghĩa “nhất”.",
            "日本の食べ物で何がいちばん好きですか = thích món nào nhất trong các món Nhật.",
            "を không giới hạn phạm vi so sánh; いっしょに là cùng nhau."
          ]
        }
      },
      {
        "id": "sample-16",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "スポーツで野球がいちばん（　）です。Chọn “thú vị”.",
        "options": [
          "おおきい",
          "おもしろい",
          "あたらしい",
          "おおい"
        ],
        "answer": 1,
        "explanation": "おもしろい = thú vị; いちばん = nhất. Bổ sung nghĩa để tránh lựa chọn theo ý kiến cá nhân.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (31).png",
        "origin": "transcribed",
        "solution": {
          "completed": "スポーツで野球がいちばんおもしろいです。",
          "meaning": "Trong các môn thể thao, bóng chày thú vị nhất.",
          "rule": "Phạm vi で + đối tượng が + いちばん + tính từ. Với câu hỏi dùng 何がいちばん…ですか. の nối danh từ, で giới hạn nhóm so sánh, が nêu đối tượng; いっしょに là cùng nhau, không có nghĩa “nhất”.",
          "options": [
            "おおきい là lớn, không phải thú vị.",
            "おもしろい = thú vị; いちばん = nhất. Bổ sung nghĩa để tránh lựa chọn theo ý kiến cá nhân.",
            "あたらしい là mới, không phải thú vị.",
            "おおい là nhiều, không phải thú vị."
          ]
        }
      },
      {
        "id": "sample-17",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "A：日曜日、何をしましたか。\nB：公園（　）行きました。公園（　）写真（　）撮りました。",
        "options": [
          "へ・で・を",
          "で・へ・を",
          "で・で・を",
          "で・へ・が"
        ],
        "answer": 0,
        "explanation": "へ chỉ đích đến, で nơi chụp, を đánh dấu 写真. Đã sửa lỗi いたしました trong ảnh.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (32).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：日曜日、何をしましたか。 B：公園へ行きました。公園で写真を撮りました。",
          "meaning": "Chủ nhật bạn đã làm gì? — Tôi đến công viên và chụp ảnh ở đó.",
          "rule": "Phân biệt ba vai trò: 公園へ行く dùng へ cho đích đến; 公園で写真を撮る dùng で cho nơi hành động và を cho đối tượng được chụp. Hai động từ đều kể việc Chủ nhật đã qua nên dùng ました.",
          "options": [
            "へ chỉ đích đến, で nơi chụp, を đánh dấu 写真. Đã sửa lỗi いたしました trong ảnh.",
            "で không đánh dấu đích đến của 行く; へ cũng không chỉ nơi chụp ảnh.",
            "Vị trí đầu cần へ để đánh dấu nơi đến.",
            "で ở vị trí đích đến và へ ở vị trí nơi chụp đều không khớp. 写真 là tân ngữ của 撮る nên cũng cần を, không dùng が."
          ]
        }
      },
      {
        "id": "sample-18",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "家から駅まで、電車（　）10分です。",
        "options": [
          "を",
          "が",
          "と",
          "で"
        ],
        "answer": 3,
        "explanation": "Phương tiện đi lại dùng で. Câu 18 không có trong ảnh, được biên soạn bổ sung và đánh dấu riêng.",
        "origin": "added",
        "solution": {
          "completed": "家から駅まで、電車で10分です。",
          "meaning": "Từ nhà đến ga, đi tàu điện mất mười phút.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "を không đánh dấu phương tiện đi lại.",
            "が đánh dấu chủ thể/sự vật, không đánh dấu phương tiện.",
            "と chỉ người cùng đi hoặc liệt kê, không có nghĩa bằng tàu điện.",
            "Phương tiện đi lại dùng で. Câu 18 không có trong ảnh, được biên soạn bổ sung và đánh dấu riêng."
          ]
        }
      },
      {
        "id": "sample-19",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "新宿駅（　）ほう（　）近いです。",
        "options": [
          "の・を",
          "は・より",
          "の・が",
          "は・が"
        ],
        "answer": 2,
        "explanation": "Aのほうが近いです = A gần hơn.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (33).png",
        "origin": "transcribed",
        "solution": {
          "completed": "新宿駅のほうが近いです。",
          "meaning": "Phía ga Shinjuku gần hơn.",
          "rule": "Hỏi giữa hai lựa chọn: AとBとどちらが…ですか. Nêu bên nổi bật: Aのほうが…です. So sánh với mốc B: AはBより…です. Giữ đúng vai trò từng trợ từ; どちらも nghĩa là cả hai, không phải từ hỏi.",
          "options": [
            "のほう đúng cách nối danh từ, nhưng を không đánh dấu bên được so sánh trước 近いです; mẫu cần が.",
            "は・より không tạo được mẫu Aのほうが.",
            "Aのほうが近いです = A gần hơn.",
            "Trước ほう cần の để tạo 新宿駅のほう."
          ]
        }
      },
      {
        "id": "sample-20",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "この町の説明です：（　）、六月がいちばん暑いです。",
        "options": [
          "音楽で",
          "一年で",
          "スポーツで",
          "季節を"
        ],
        "answer": 1,
        "explanation": "一年で là phạm vi so sánh “trong một năm”. Đây là mô tả một thị trấn giả định, không phải kết luận về khí hậu Nhật Bản.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (34).png",
        "origin": "transcribed",
        "solution": {
          "completed": "この町は一年で、六月がいちばん暑いです。",
          "meaning": "Ở thị trấn giả định này, tháng sáu nóng nhất trong năm.",
          "rule": "一年で giới hạn phạm vi so sánh là các tháng trong một năm; 六月が nêu tháng đứng đầu; いちばん暑い là nóng nhất. Đây là dữ kiện giả định của thị trấn trong câu, không phải quy luật khí hậu chung.",
          "options": [
            "音楽で là trong âm nhạc, không phù hợp việc so các tháng.",
            "一年で là phạm vi so sánh “trong một năm”. Đây là mô tả một thị trấn giả định, không phải kết luận về khí hậu Nhật Bản.",
            "スポーツで là trong các môn thể thao, không phải trong năm.",
            "季節を không tạo phạm vi so sánh và を không dùng ở vị trí này."
          ]
        }
      },
      {
        "id": "sample-21",
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「国会」.",
        "options": [
          "こっかい",
          "かいけん",
          "しゃかい",
          "かいしゃ"
        ],
        "answer": 0,
        "explanation": "国会（こっかい）= quốc hội.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (35).png",
        "origin": "transcribed",
        "solution": {
          "completed": "国会（こっかい）",
          "meaning": "Quốc hội.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "国会（こっかい）= quốc hội.",
            "かいけん là cách đọc của từ khác như 会見, không phải 国会.",
            "しゃかい là 社会, nghĩa là xã hội.",
            "かいしゃ là 会社, nghĩa là công ty."
          ]
        }
      },
      {
        "id": "sample-22",
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「来日」.",
        "options": [
          "きじつ",
          "らいに",
          "きにち",
          "らいにち"
        ],
        "answer": 3,
        "explanation": "来日（らいにち）= đến Nhật.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (36).png",
        "origin": "transcribed",
        "solution": {
          "completed": "来日（らいにち）",
          "meaning": "Đến Nhật Bản.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "きじつ là cách đọc của từ khác như 期日; không phải 来日.",
            "らいに thiếu âm ち của 日 trong từ này.",
            "きにち không phải cách đọc chuẩn; 来 đọc らい trong 来日.",
            "来日（らいにち）= đến Nhật."
          ]
        }
      },
      {
        "id": "sample-23",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「はなす」.",
        "options": [
          "書す",
          "見す",
          "話す",
          "聞す"
        ],
        "answer": 2,
        "explanation": "話す（はなす）= nói, trò chuyện.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (38).png",
        "origin": "transcribed",
        "solution": {
          "completed": "話す（はなす）",
          "meaning": "Nói, trò chuyện.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "Động từ viết chuẩn là 書く, không phải 書す.",
            "Động từ xem chuẩn là 見る, không phải 見す.",
            "話す（はなす）= nói, trò chuyện.",
            "Động từ nghe chuẩn là 聞く, không phải 聞す."
          ]
        }
      },
      {
        "id": "sample-24",
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "B lặp lại thời điểm ‘lần tới à?’ trước khi từ chối. A：今度、ビールを飲みませんか。\nB：ああ、（　）。すみません。今度はちょっと…。",
        "options": [
          "飲みましょう",
          "今度ですか",
          "そうですかね",
          "いいですね"
        ],
        "answer": 1,
        "explanation": "今度ですか lặp lại thời điểm trước khi từ chối nhẹ. Đã làm rõ lựa chọn để tránh nhiều cách đáp đều tự nhiên.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (39).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：今度、ビールを飲みませんか。 B：ああ、今度ですか。すみません。今度はちょっと…。",
          "meaning": "Lần tới cùng uống bia nhé? — À, lần tới à? Xin lỗi, lần tới thì hơi khó…",
          "rule": "Vませんか dùng để mời cùng làm. Có thể nhận lời bằng いいですね và Vましょう. Khi từ chối nhẹ, dùng すみません、…はちょっと… rồi nêu lý do bằng から. Phản hồi phải phù hợp với phần hội thoại tiếp theo.",
          "options": [
            "飲みましょう nhận lời cùng uống, trái với 今度はちょっと….",
            "今度ですか lặp lại thời điểm trước khi từ chối nhẹ. Đã làm rõ lựa chọn để tránh nhiều cách đáp đều tự nhiên.",
            "そうですかね gợi sự không chắc chắn, không phải phản hồi lặp lại thời điểm đang được kiểm tra.",
            "いいですね có thể hưởng ứng ý tưởng trước khi từ chối, nhưng không lặp lại thời điểm ‘lần tới à?’ như yêu cầu cụ thể của câu này."
          ]
        }
      },
      {
        "id": "sample-25",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "国へ（　）帰ります。Chọn “để gặp gia đình”.",
        "options": [
          "家族に会いに",
          "スキーを買いに",
          "木を買いに",
          "食事に"
        ],
        "answer": 0,
        "explanation": "会います → 会いに; 家族に会いに帰ります = về nước để gặp gia đình. Bổ sung nghĩa vì nhiều mục đích về nước đều có thể đúng.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (40).png",
        "origin": "transcribed",
        "solution": {
          "completed": "国へ家族に会いに帰ります。",
          "meaning": "Tôi về nước để gặp gia đình.",
          "rule": "家族に会います dùng に để chỉ người gặp. Lấy 会い từ 会います, thêm に để tạo 会いに rồi nối 帰ります. Vì vậy câu có hai に với hai vai trò khác nhau: người gặp và mục đích về nước.",
          "options": [
            "会います → 会いに; 家族に会いに帰ります = về nước để gặp gia đình. Bổ sung nghĩa vì nhiều mục đích về nước đều có thể đúng.",
            "スキーを買いに là để mua ván trượt, khác nghĩa đề yêu cầu.",
            "木を買いに là để mua cây/gỗ, khác nghĩa đề yêu cầu.",
            "食事に là để dùng bữa, không phải để gặp gia đình."
          ]
        }
      },
      {
        "id": "sample-26",
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "田中さん、（　）行きませんか。Chọn “cùng nhau”.",
        "options": [
          "もう",
          "ぜひ",
          "まだ",
          "いっしょに"
        ],
        "answer": 3,
        "explanation": "いっしょに = cùng nhau. ぜひ cũng có thể đi với lời mời nên câu có thêm nghĩa đích cần chọn.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (41).png",
        "origin": "transcribed",
        "solution": {
          "completed": "田中さん、いっしょに行きませんか。",
          "meaning": "Anh/chị Tanaka, cùng đi nhé?",
          "rule": "いっしょに là trạng từ “cùng nhau”, đứng trước hành động. ぜひ cũng có thể dùng trong lời mời nhưng nghĩa là rất mong/nhất định, nên không đáp ứng nghĩa đích “cùng nhau” được đề chỉ rõ.",
          "options": [
            "もう là đã/rồi, không có nghĩa cùng nhau.",
            "ぜひ là nhất định/rất mong; có thể dùng với lời mời nhưng không mang nghĩa “cùng nhau”.",
            "まだ là chưa/vẫn, không có nghĩa cùng nhau.",
            "いっしょに = cùng nhau. ぜひ cũng có thể đi với lời mời nên câu có thêm nghĩa đích cần chọn."
          ]
        }
      },
      {
        "id": "sample-27",
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "A：何時に会いますか。\nB：五時は（　）。\nA：五時です（　）。わかりました。",
        "options": [
          "どうですか・よ",
          "どちらですか・ね",
          "どうですか・ね",
          "どちらですか・よ"
        ],
        "answer": 2,
        "explanation": "どうですか để đề xuất giờ; ね xác nhận lại giờ vừa nghe.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (42).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：何時に会いますか。 B：五時はどうですか。 A：五時ですね。わかりました。",
          "meaning": "Mấy giờ gặp nhau? — Năm giờ được không? — Năm giờ nhỉ, tôi hiểu rồi.",
          "rule": "Nはどうですか dùng đề xuất một phương án như giờ hẹn. Người nghe có thể lặp lại Nですね để xác nhận thông tin vừa nghe. どちら hỏi lựa chọn giữa hai bên; よ dùng báo tin, khác ね dùng xác nhận.",
          "options": [
            "どうですか đề xuất đúng, nhưng câu cuối đang xác nhận nên cần ね.",
            "ね xác nhận đúng, nhưng giờ hẹn là một đề xuất với どうですか.",
            "どうですか để đề xuất giờ; ね xác nhận lại giờ vừa nghe.",
            "どちら hỏi bên nào; よ không xác nhận lại giờ vừa nghe như ね."
          ]
        }
      },
      {
        "id": "sample-28",
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán của「どくしょ」.",
        "options": [
          "問書",
          "読書",
          "読物",
          "聞物"
        ],
        "answer": 1,
        "explanation": "読書（どくしょ）= việc đọc sách.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (43).png",
        "origin": "transcribed",
        "solution": {
          "completed": "読書（どくしょ）",
          "meaning": "Việc đọc sách.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "問書 không phải cách viết của 読書; cần 読書, không ghép chữ theo nghĩa đoán.",
            "読書（どくしょ）= việc đọc sách.",
            "読物 liên quan đến sách/tài liệu đọc, thường viết 読み物 và đọc よみもの, không phải どくしょ.",
            "聞物 không phải cách viết của 読書; chữ cần là 読, liên quan đọc."
          ]
        }
      },
      {
        "id": "sample-29",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「きます」.",
        "options": [
          "来ます",
          "会ます",
          "きまする",
          "聞ます"
        ],
        "answer": 0,
        "explanation": "来ます（きます）= đến.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (44).png",
        "origin": "transcribed",
        "solution": {
          "completed": "来ます（きます）",
          "meaning": "Đến.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "来ます（きます）= đến.",
            "会う chia lịch sự là 会います（あいます）, không phải 会ます.",
            "きまする không phải dạng lịch sự chuẩn của 来る.",
            "聞く chia lịch sự là 聞きます（ききます）, không phải 聞ます."
          ]
        }
      },
      {
        "id": "sample-30",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「今、何時ですか。」.",
        "options": [
          "いま、なんがつですか",
          "こん、なんじですか",
          "いぬ、なんがつですか",
          "いま、なんじですか"
        ],
        "answer": 3,
        "explanation": "今 = いま; 何時 = なんじ. Đã viết trọn cách đọc của câu.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (45).png",
        "origin": "transcribed",
        "solution": {
          "completed": "今、何時ですか。（いま、なんじですか。）",
          "meaning": "Bây giờ là mấy giờ?",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "なんがつ là tháng mấy, không phải mấy giờ.",
            "今 trong câu chỉ hiện tại đọc いま, không đọc こん riêng lẻ.",
            "いぬ là chó; なんがつ hỏi tháng. Cả hai đều không khớp câu.",
            "今 = いま; 何時 = なんじ. Đã viết trọn cách đọc của câu."
          ]
        }
      },
      {
        "id": "sample-31",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "あした、（買い物します → ＿＿）行きませんか。",
        "options": [
          "買い物します",
          "買い物し",
          "買い物に",
          "買い物"
        ],
        "answer": 2,
        "explanation": "買い物 là danh từ hoạt động, nên 買い物に行く; 買い物しに cũng hợp ngữ pháp nhưng không có trong lựa chọn.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (46).png",
        "origin": "transcribed",
        "solution": {
          "completed": "あした、買い物に行きませんか。",
          "meaning": "Ngày mai cùng đi mua sắm nhé?",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "Không đặt cả 買い物します trước に行く; dùng danh từ hoạt động 買い物に.",
            "買い物し thiếu に; 買い物しに mới có thể diễn đạt mục đích.",
            "買い物 là danh từ hoạt động, nên 買い物に行く; 買い物しに cũng hợp ngữ pháp nhưng không có trong lựa chọn.",
            "買い物 đứng trực tiếp trước 行く thiếu に chỉ mục đích."
          ]
        }
      },
      {
        "id": "sample-32",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「会話」.",
        "options": [
          "かいぎ",
          "かいわ",
          "かいしゃ",
          "かいけん"
        ],
        "answer": 1,
        "explanation": "会話（かいわ）= hội thoại.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (47).png",
        "origin": "transcribed",
        "solution": {
          "completed": "会話（かいわ）",
          "meaning": "Hội thoại.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "かいぎ là 会議, cuộc họp.",
            "会話（かいわ）= hội thoại.",
            "かいしゃ là 会社, công ty.",
            "かいけん là cách đọc của từ khác như 会見, cuộc gặp/họp báo."
          ]
        }
      },
      {
        "id": "sample-33",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách viết「くにへ かえります」.",
        "options": [
          "国へ帰ります",
          "国へ来ます",
          "会へ帰ります",
          "会へ来ます"
        ],
        "answer": 0,
        "explanation": "国 = nước/quốc gia; 帰ります = trở về.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (48).png",
        "origin": "transcribed",
        "solution": {
          "completed": "国へ帰ります。（くにへかえります。）",
          "meaning": "Tôi trở về nước.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "国 = nước/quốc gia; 帰ります = trở về.",
            "来ます là đến, không phải trở về.",
            "会 không có nghĩa quốc gia; cần 国.",
            "Sai cả chữ 国 và động từ 帰ります; 来ます là đến."
          ]
        }
      },
      {
        "id": "sample-34",
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A：今度、ご飯を食べませんか。\nB：（　）。食べましょう。",
        "options": [
          "いいですか",
          "そうですか",
          "そうでした",
          "いいですね"
        ],
        "answer": 3,
        "explanation": "いいですね nhận lời rủ cùng ăn; 食べましょう = cùng ăn nhé.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (49).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：今度、ご飯を食べませんか。 B：いいですね。食べましょう。",
          "meaning": "Lần tới cùng ăn nhé? — Hay đấy, cùng ăn thôi.",
          "rule": "Vませんか dùng để mời cùng làm. Có thể nhận lời bằng いいですね và Vましょう. Khi từ chối nhẹ, dùng すみません、…はちょっと… rồi nêu lý do bằng から. Phản hồi phải phù hợp với phần hội thoại tiếp theo.",
          "options": [
            "いいですか hỏi có được không, không trực tiếp nhận lời như câu sau yêu cầu.",
            "そうですか chỉ tiếp nhận thông tin, chưa hưởng ứng lời mời.",
            "そうでした là dạng quá khứ “đã là như vậy”, không hợp lời mời mới.",
            "いいですね nhận lời rủ cùng ăn; 食べましょう = cùng ăn nhé."
          ]
        }
      },
      {
        "id": "sample-35",
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn lượng từ chuyên dùng cho vé (vật mỏng, phẳng): サッカーのチケットが（　）あります。",
        "options": [
          "三つ",
          "さんさつ",
          "さんまい",
          "三本"
        ],
        "answer": 2,
        "explanation": "Vé là vật mỏng/phẳng, dùng 枚（まい）: 三枚（さんまい）.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (50).png",
        "origin": "transcribed",
        "solution": {
          "completed": "サッカーのチケットが三枚（さんまい）あります。",
          "meaning": "Tôi có ba vé bóng đá.",
          "rule": "Vé là vật mỏng và phẳng nên dùng lượng từ 枚（まい）. 三枚 đọc さんまい, đặt sau が trong チケットが三枚あります. Không dùng 本 cho vật dài hoặc 冊 cho sách.",
          "options": [
            "つ là cách đếm chung, nhưng vé có lượng từ chuyên dùng 枚.",
            "冊 đếm sách/vở, không dùng cho vé.",
            "Vé là vật mỏng/phẳng, dùng 枚（まい）: 三枚（さんまい）.",
            "本 đếm vật dài, không dùng cho vé."
          ]
        }
      },
      {
        "id": "sample-36",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "服を（　）行きませんか。",
        "options": [
          "買い",
          "買いに",
          "飲いに",
          "飲い"
        ],
        "answer": 1,
        "explanation": "買います bỏ ます rồi thêm に: 服を買いに行く.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (51).png",
        "origin": "transcribed",
        "solution": {
          "completed": "服を買いに行きませんか。",
          "meaning": "Cùng đi mua quần áo nhé?",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "買い là gốc đúng nhưng cần thêm に trước 行く.",
            "買います bỏ ます rồi thêm に: 服を買いに行く.",
            "飲いに không phải gốc của 飲みます; quần áo cũng không phải thứ để uống.",
            "飲い vừa sai gốc vừa thiếu に chỉ mục đích."
          ]
        }
      },
      {
        "id": "sample-37",
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A：あした、お好み焼きを食べませんか。\nB：すみません。あしたはちょっと…。（　）があります（　）。",
        "options": [
          "約束・から",
          "用事・ちょっと",
          "約束・ちょっと",
          "用事・を"
        ],
        "answer": 0,
        "explanation": "約束がありますから nêu lý do có hẹn nên từ chối.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (52).png",
        "origin": "transcribed",
        "solution": {
          "completed": "すみません。あしたはちょっと…。約束がありますから。",
          "meaning": "Xin lỗi, ngày mai hơi khó… vì tôi có hẹn.",
          "rule": "Vませんか dùng để mời cùng làm. Có thể nhận lời bằng いいですね và Vましょう. Khi từ chối nhẹ, dùng すみません、…はちょっと… rồi nêu lý do bằng から. Phản hồi phải phù hợp với phần hội thoại tiếp theo.",
          "options": [
            "約束がありますから nêu lý do có hẹn nên từ chối.",
            "用事があります có thể là lý do, nhưng ちょっと không nối thành đuôi nêu nguyên nhân.",
            "約束 phù hợp, nhưng phải kết thúc lý do với から, không phải ちょっと.",
            "用事 phù hợp nghĩa có việc, nhưng を không nối câu nêu lý do sau あります."
          ]
        }
      },
      {
        "id": "sample-38",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "おいしいですから、ぜひ（　）です。",
        "options": [
          "食べます",
          "食べに",
          "食べにいます",
          "食べたい"
        ],
        "answer": 3,
        "explanation": "Muốn ăn = 食べたいです. Không dùng 食べますです.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (53).png",
        "origin": "transcribed",
        "solution": {
          "completed": "おいしいですから、ぜひ食べたいです。",
          "meaning": "Vì ngon nên tôi rất muốn ăn.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "食べます không nối trực tiếp với です và không diễn đạt mong muốn.",
            "食べに chỉ mục đích đi; không kết thúc bằng 食べにです.",
            "食べにいます không phải mẫu diễn đạt mong muốn và không nối thêm です như vậy.",
            "Muốn ăn = 食べたいです. Không dùng 食べますです."
          ]
        }
      },
      {
        "id": "sample-39",
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「社会」.",
        "options": [
          "かいけん",
          "かいしゃ",
          "しゃかい",
          "こうかい"
        ],
        "answer": 2,
        "explanation": "社会（しゃかい）= xã hội.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (54).png",
        "origin": "transcribed",
        "solution": {
          "completed": "社会（しゃかい）",
          "meaning": "Xã hội.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "かいけん không phải cách đọc của 社会.",
            "かいしゃ là 会社; vị trí các chữ/âm khác với 社会.",
            "社会（しゃかい）= xã hội.",
            "こうかい là cách đọc của từ khác như 公開; không phải 社会."
          ]
        }
      },
      {
        "id": "sample-40",
        "category": "translation",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Chọn bản dịch: Hôm qua thời tiết đẹp. Và phong cảnh rất đẹp.",
        "options": [
          "きのう、天気がよかったです。そして、景色はとてもきれかったです。",
          "きのう、天気がよかったです。そして、景色はとてもきれいでした。",
          "きのう、天気がよかったです。そして、景色はとてもきれいです。",
          "きのう、天気がいいです。そして、景色はとてもきれいでした。"
        ],
        "answer": 1,
        "explanation": "いい → よかった; きれい là tính từ な → きれいでした. Ảnh có hai lựa chọn giống nhau, đã thay một lựa chọn.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (55).png",
        "origin": "transcribed",
        "solution": {
          "completed": "きのう、天気がよかったです。そして、景色はとてもきれいでした。",
          "meaning": "Hôm qua thời tiết đẹp, và phong cảnh rất đẹp.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "きれい là tính từ な, không chia thành きれかったです.",
            "いい → よかった; きれい là tính từ な → きれいでした. Ảnh có hai lựa chọn giống nhau, đã thay một lựa chọn.",
            "きれいです là hiện tại; câu đang kể cảnh hôm qua nên dùng きれいでした.",
            "いいです là hiện tại; cần quá khứ ngoại lệ よかったです."
          ]
        }
      },
      {
        "id": "sample-41",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán của「こんげつ」.",
        "options": [
          "今月",
          "玲月",
          "玲目",
          "今目"
        ],
        "answer": 0,
        "explanation": "今月（こんげつ）= tháng này.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (56).png",
        "origin": "transcribed",
        "solution": {
          "completed": "今月（こんげつ）",
          "meaning": "Tháng này.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "今月（こんげつ）= tháng này.",
            "玲 không thay cho 今 trong từ 今月.",
            "Sai cả chữ 今 lẫn chữ 月; 目 là mắt.",
            "今目 dùng 目 thay cho 月, nên không có nghĩa tháng này."
          ]
        }
      },
      {
        "id": "sample-42",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "A：（　）食べますか。\nB：レストラン（　）食べます。",
        "options": [
          "今週に・で",
          "何時に・に",
          "どこに・に",
          "どこで・で"
        ],
        "answer": 3,
        "explanation": "Hỏi nơi diễn ra hành động dùng どこで, trả lời レストランで.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (57).png",
        "origin": "transcribed",
        "solution": {
          "completed": "A：どこで食べますか。 B：レストランで食べます。",
          "meaning": "Bạn ăn ở đâu? — Tôi ăn ở nhà hàng.",
          "rule": "Hỏi nơi thực hiện hành động dùng どこで + động từ. Trả lời bằng địa điểm + で + động từ: レストランで食べます. に chỉ nơi tồn tại/đích đến ở mẫu khác, không thay で của hành động ăn.",
          "options": [
            "今週 hỏi thời gian, không khớp lời đáp nêu nơi; 今週 thường không thêm に ở đây.",
            "何時に hỏi giờ, trong khi レストラン là địa điểm; nơi ăn dùng で.",
            "どこに chỉ nơi đến/tồn tại ở mẫu khác; nơi hành động 食べる dùng で.",
            "Hỏi nơi diễn ra hành động dùng どこで, trả lời レストランで."
          ]
        }
      },
      {
        "id": "sample-43",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc「今週」.",
        "options": [
          "こんじゅう",
          "せんしゅう",
          "こんしゅう",
          "らいしゅう"
        ],
        "answer": 2,
        "explanation": "今週 = tuần này, đọc こんしゅう.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (58).png",
        "origin": "transcribed",
        "solution": {
          "completed": "今週（こんしゅう）",
          "meaning": "Tuần này.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "しゅう không đổi thành じゅう trong 今週.",
            "せんしゅう là 先週, tuần trước.",
            "今週 = tuần này, đọc こんしゅう.",
            "らいしゅう là 来週, tuần sau."
          ]
        }
      },
      {
        "id": "sample-44",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "新宿駅（　）渋谷駅（　）近いです。",
        "options": [
          "と・より",
          "は・より",
          "は・と",
          "と・と"
        ],
        "answer": 1,
        "explanation": "AはBより近いです = A gần hơn B.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (59).png",
        "origin": "transcribed",
        "solution": {
          "completed": "新宿駅は渋谷駅より近いです。",
          "meaning": "Ga Shinjuku gần hơn ga Shibuya.",
          "rule": "Hỏi giữa hai lựa chọn: AとBとどちらが…ですか. Nêu bên nổi bật: Aのほうが…です. So sánh với mốc B: AはBより…です. Giữ đúng vai trò từng trợ từ; どちらも nghĩa là cả hai, không phải từ hỏi.",
          "options": [
            "より đúng ở mốc B, nhưng A cần は trong mẫu được hỏi.",
            "AはBより近いです = A gần hơn B.",
            "と chỉ liệt kê/cùng nhau, không đánh dấu mốc so sánh như より.",
            "と・と thường xuất hiện trong câu hỏi AとBとどちらが; không tạo câu so sánh này."
          ]
        }
      },
      {
        "id": "sample-45",
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "映画（　）何（　）（　）好きですか。",
        "options": [
          "で・が・いちばん",
          "の・で・いっしょに",
          "の・で・いちばん",
          "で・が・いっしょに"
        ],
        "answer": 0,
        "explanation": "映画で何がいちばん好きですか hỏi thích phim nào nhất.",
        "source": "Material/chim-20261020T143204Z-1-001/chim/Screenshot (60).png",
        "origin": "transcribed",
        "solution": {
          "completed": "映画で何がいちばん好きですか。",
          "meaning": "Trong các bộ phim, bạn thích phim nào nhất?",
          "rule": "Phạm vi で + đối tượng が + いちばん + tính từ. Với câu hỏi dùng 何がいちばん…ですか. の nối danh từ, で giới hạn nhóm so sánh, が nêu đối tượng; いっしょに là cùng nhau, không có nghĩa “nhất”.",
          "options": [
            "映画で何がいちばん好きですか hỏi thích phim nào nhất.",
            "の không nêu phạm vi, で không đánh dấu đối tượng thích, いっしょに không có nghĩa nhất.",
            "いちばん đúng nghĩa nhất, nhưng hai trợ từ đầu cần で・が.",
            "で・が đúng, nhưng いっしょに là cùng nhau, không phải nhất."
          ]
        }
      }
    ],
    "migrations": {
      "e6411499": [
        9,
        17,
        18,
        23,
        34
      ]
    },
    "contentVersion": "2026-10-22"
  },
  {
    "id": "chapter45-1",
    "title": "Bài 4–5 · Đề 01",
    "description": "Hành trình và ngày nghỉ · Đủ 19 mục ngữ pháp, 6 topic. Câu mới theo dạng đề ảnh, không dùng mẫu so sánh hay lời rủ của bài 6.",
    "lessons": [
      4,
      5
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "id": "c45-1-01",
        "category": "reading",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Cách đọc của「新幹線」là gì?",
        "options": [
          "しんがんせん",
          "しんかんぜん",
          "しんかせん",
          "しんかんせん"
        ],
        "answer": 3,
        "explanation": "新幹線 = tàu cao tốc Shinkansen, đọc しんかんせん.",
        "solution": {
          "completed": "新幹線（しんかんせん）",
          "meaning": "Tàu cao tốc Shinkansen.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "幹 đọc かん, không phải がん trong từ này.",
            "線 đọc せん, không phải ぜん.",
            "Thiếu âm ん của 幹（かん）.",
            "新幹線 = tàu cao tốc Shinkansen, đọc しんかんせん."
          ]
        }
      },
      {
        "id": "c45-1-02",
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Cách đọc của「温泉」là gì?",
        "options": [
          "おうせん",
          "おんさん",
          "おんせん",
          "おんぜん"
        ],
        "answer": 2,
        "explanation": "温泉（おんせん）= suối nước nóng.",
        "solution": {
          "completed": "温泉（おんせん）",
          "meaning": "Suối nước nóng.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "温 ở đây là おん, không phải おう.",
            "泉 đọc せん, không phải さん.",
            "温泉（おんせん）= suối nước nóng.",
            "泉 đọc せん, không đổi thành ぜん trong 温泉."
          ]
        }
      },
      {
        "id": "c45-1-03",
        "category": "reading",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Cách đọc của「涼しい」là gì?",
        "options": [
          "あつしい",
          "すずしい",
          "さむしい",
          "すずい"
        ],
        "answer": 1,
        "explanation": "涼しい（すずしい）= mát mẻ.",
        "solution": {
          "completed": "涼しい（すずしい）",
          "meaning": "Mát mẻ.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Đây không phải cách đọc chuẩn; 暑い đọc あつい và là một từ khác.",
            "涼しい（すずしい）= mát mẻ.",
            "Đây không phải cách đọc của 涼しい; 寒い mới liên quan đến lạnh.",
            "Thiếu âm し trong phần しい."
          ]
        }
      },
      {
        "id": "c45-1-04",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Cách đọc của「美術館」là gì?",
        "options": [
          "びじゅつかん",
          "びじつかん",
          "びじゅっかん",
          "びしゅつかん"
        ],
        "answer": 0,
        "explanation": "美術館（びじゅつかん）= bảo tàng mỹ thuật.",
        "solution": {
          "completed": "美術館（びじゅつかん）",
          "meaning": "Bảo tàng mỹ thuật.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "美術館（びじゅつかん）= bảo tàng mỹ thuật.",
            "術 đọc じゅつ, không phải じつ.",
            "Cần âm つ của 術, không thay bằng âm ngắt っ.",
            "Âm じゅ có dấu đục, không đọc しゅ."
          ]
        }
      },
      {
        "id": "c45-1-05",
        "category": "reading",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Cách đọc của「今朝」là gì?",
        "options": [
          "こんあさ",
          "いまあさ",
          "きょうあさ",
          "けさ"
        ],
        "answer": 3,
        "explanation": "今朝 đọc đặc biệt là けさ: sáng nay.",
        "solution": {
          "completed": "今朝（けさ）",
          "meaning": "Sáng nay.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Không ghép máy móc 今＝こん và 朝＝あさ; cả từ đọc けさ.",
            "Không đọc theo từng chữ いま＋あさ trong từ 今朝.",
            "きょうあさ không phải cách đọc của từ ghép 今朝.",
            "今朝 đọc đặc biệt là けさ: sáng nay."
          ]
        }
      },
      {
        "id": "c45-1-06",
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Cách đọc của「自転車」là gì?",
        "options": [
          "じてんじゃ",
          "してんしゃ",
          "じてんしゃ",
          "じでんしゃ"
        ],
        "answer": 2,
        "explanation": "自転車（じてんしゃ）= xe đạp.",
        "solution": {
          "completed": "自転車（じてんしゃ）",
          "meaning": "Xe đạp.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "車 đọc しゃ, không phải じゃ ở từ này.",
            "自 đọc じ có dấu đục, không phải し.",
            "自転車（じてんしゃ）= xe đạp.",
            "転 đọc てん, không phải でん."
          ]
        }
      },
      {
        "id": "c45-1-07",
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Theo mục từ bài 5 trong PDF, chọn cách đọc của「景色」.",
        "options": [
          "げしき",
          "けしき",
          "けいしょく",
          "けしょく"
        ],
        "answer": 1,
        "explanation": "景色（けしき）= phong cảnh.",
        "solution": {
          "completed": "景色（けしき）",
          "meaning": "Phong cảnh.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Âm đầu là け, không phải げ.",
            "景色（けしき）= phong cảnh.",
            "けいしょく cũng có trong từ điển, dùng trong văn viết. Câu này yêu cầu cách đọc mục từ bài 5 của PDF là けしき; không coi mọi cách đọc khác là không tồn tại.",
            "色 ở đây được đọc trong cụm しき, không phải しょく."
          ]
        }
      },
      {
        "id": "c45-1-08",
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán cho「ひがし」.",
        "options": [
          "東",
          "西",
          "南",
          "北"
        ],
        "answer": 0,
        "explanation": "東 = đông, đọc ひがし.",
        "solution": {
          "completed": "東（ひがし）",
          "meaning": "Phía đông.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "東 = đông, đọc ひがし.",
            "西（にし）là phía tây.",
            "南（みなみ）là phía nam.",
            "北（きた）là phía bắc."
          ]
        }
      },
      {
        "id": "c45-1-09",
        "category": "spelling",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ Hán cho「じんじゃ」.",
        "options": [
          "会社",
          "社会",
          "教会",
          "神社"
        ],
        "answer": 3,
        "explanation": "神社（じんじゃ）= đền Thần đạo.",
        "solution": {
          "completed": "神社（じんじゃ）",
          "meaning": "Đền Thần đạo.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "会社（かいしゃ）là công ty.",
            "社会（しゃかい）là xã hội.",
            "教会（きょうかい）là nhà thờ, không phải 神社.",
            "神社（じんじゃ）= đền Thần đạo."
          ]
        }
      },
      {
        "id": "c45-1-10",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán cho「せんしゅう」.",
        "options": [
          "来週",
          "毎週",
          "先週",
          "今週"
        ],
        "answer": 2,
        "explanation": "先週（せんしゅう）= tuần trước.",
        "solution": {
          "completed": "先週（せんしゅう）",
          "meaning": "Tuần trước.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "来週（らいしゅう）là tuần sau.",
            "毎週（まいしゅう）là mỗi tuần.",
            "先週（せんしゅう）= tuần trước.",
            "今週（こんしゅう）là tuần này."
          ]
        }
      },
      {
        "id": "c45-1-11",
        "category": "spelling",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ Hán cho「きょねん」.",
        "options": [
          "毎年",
          "去年",
          "今年",
          "来年"
        ],
        "answer": 1,
        "explanation": "去年（きょねん）= năm ngoái.",
        "solution": {
          "completed": "去年（きょねん）",
          "meaning": "Năm ngoái.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "毎年（まいとし／まいねん）là mỗi năm.",
            "去年（きょねん）= năm ngoái.",
            "今年（ことし）là năm nay.",
            "来年（らいねん）là năm sau."
          ]
        }
      },
      {
        "id": "c45-1-12",
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Từ nào nghĩa là “chua”?",
        "options": [
          "すっぱい",
          "甘い",
          "辛い",
          "苦い"
        ],
        "answer": 0,
        "explanation": "すっぱい = chua; 甘い ngọt, 辛い cay, 苦い đắng.",
        "solution": {
          "completed": "すっぱい",
          "meaning": "Chua.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "すっぱい = chua; 甘い ngọt, 辛い cay, 苦い đắng.",
            "甘い（あまい）nghĩa là ngọt.",
            "辛い（からい）nghĩa là cay.",
            "苦い（にがい）nghĩa là đắng."
          ]
        }
      },
      {
        "id": "c45-1-13",
        "category": "vocabulary",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "「ルームメイト」nghĩa là gì?",
        "options": [
          "Người yêu",
          "Gia đình",
          "Nhân viên cửa hàng",
          "Bạn cùng phòng"
        ],
        "answer": 3,
        "explanation": "ルームメイト = bạn cùng phòng.",
        "solution": {
          "completed": "ルームメイト",
          "meaning": "Bạn cùng phòng.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Người yêu là 恋人（こいびと）.",
            "Gia đình là 家族（かぞく）.",
            "Nhân viên cửa hàng không phải nghĩa của từ mượn roommate này.",
            "ルームメイト = bạn cùng phòng."
          ]
        }
      },
      {
        "id": "c45-1-14",
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "「借ります」nghĩa là gì?",
        "options": [
          "Leo núi",
          "Làm ra",
          "Mượn",
          "Chụp ảnh"
        ],
        "answer": 2,
        "explanation": "借ります（かります）= vay/mượn.",
        "solution": {
          "completed": "借ります（かります）",
          "meaning": "Vay, mượn.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Leo núi dùng 登ります（のぼります）.",
            "Làm ra/chế tạo dùng 作ります（つくります）.",
            "借ります（かります）= vay/mượn.",
            "Chụp ảnh dùng 撮ります（とります）."
          ]
        }
      },
      {
        "id": "c45-1-15",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-location",
        "prompt": "ハノイはベトナム（　）北です。",
        "options": [
          "に",
          "の",
          "で",
          "を"
        ],
        "answer": 1,
        "explanation": "Quốc gia の phương hướng: ベトナムの北.",
        "solution": {
          "completed": "ハノイはベトナムの北です。",
          "meaning": "Hà Nội ở phía bắc Việt Nam.",
          "rule": "Địa danh は quốc gia の phương hướng です. の nối quốc gia với 北・南・東・西・真ん中 để tạo cụm chỉ vị trí. Đây không phải nơi diễn ra hành động nên không thay の bằng で.",
          "options": [
            "に không tạo cụm ベトナムの北 chỉ phía bắc của Việt Nam.",
            "Quốc gia の phương hướng: ベトナムの北.",
            "で chỉ nơi hành động/phương tiện, không nối quốc gia với phương hướng.",
            "を đánh dấu tân ngữ, không nối hai danh từ này."
          ]
        }
      },
      {
        "id": "c45-1-16",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "家から学校までバス（　）三十分くらいです。",
        "options": [
          "で",
          "の",
          "を",
          "が"
        ],
        "answer": 0,
        "explanation": "で chỉ phương tiện; 三十分くらい = khoảng 30 phút.",
        "solution": {
          "completed": "家から学校までバスで三十分くらいです。",
          "meaning": "Từ nhà đến trường, đi xe buýt mất khoảng ba mươi phút.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "で chỉ phương tiện; 三十分くらい = khoảng 30 phút.",
            "の không đánh dấu phương tiện đi lại.",
            "を không có nghĩa “bằng xe buýt” ở đây.",
            "が không đánh dấu phương tiện."
          ]
        }
      },
      {
        "id": "c45-1-17",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-adjective",
        "prompt": "この町は（　）です。Chọn dạng đúng của 静か.",
        "options": [
          "静かな",
          "静かい",
          "静かく",
          "静か"
        ],
        "answer": 3,
        "explanation": "Tính từ な bỏ な khi đứng trước です.",
        "solution": {
          "completed": "この町は静かです。",
          "meaning": "Thị trấn này yên tĩnh.",
          "rule": "Tính từ い giữ nguyên đuôi trước です. Tính từ な bỏ な khi kết thúc câu với です; chỉ thêm な khi bổ nghĩa danh từ. 静か・有名・きれい thuộc nhóm な, kể cả khi きれい có âm cuối い.",
          "options": [
            "静かな dùng trước danh từ, không dùng 静かなです.",
            "静か không phải tính từ い để thêm い.",
            "静かく không phải dạng kết thúc câu chuẩn của tính từ な.",
            "Tính từ な bỏ な khi đứng trước です."
          ]
        }
      },
      {
        "id": "c45-1-18",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "このスープは熱いですか。いいえ、（　）です。",
        "options": [
          "熱かった",
          "熱いくない",
          "熱くない",
          "熱いじゃない"
        ],
        "answer": 2,
        "explanation": "熱い bỏ い + くない → 熱くない.",
        "solution": {
          "completed": "このスープは熱いですか。いいえ、熱くないです。",
          "meaning": "Súp này nóng không? — Không, không nóng.",
          "rule": "Phủ định tính từ い: bỏ い rồi thêm くないです. Tính từ な dùng じゃありません hoặc ではありません. Ngoại lệ いい dùng gốc よ: よくないです. Chọn dạng phủ định phù hợp với lời đáp いいえ.",
          "options": [
            "熱かった là đã nóng, không phải hiện tại phủ định.",
            "Phải bỏ い trước くない, không giữ thành 熱いくない.",
            "熱い bỏ い + くない → 熱くない.",
            "熱い là tính từ い; phủ định cơ bản cần 熱くない, không dùng 熱いじゃない."
          ]
        }
      },
      {
        "id": "c45-1-19",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "あそこは（　）お寺です。Chọn “ngôi chùa nổi tiếng”.",
        "options": [
          "有名の",
          "有名な",
          "有名",
          "有名い"
        ],
        "answer": 1,
        "explanation": "有名な + danh từ お寺.",
        "solution": {
          "completed": "あそこは有名なお寺です。",
          "meaning": "Đằng kia là một ngôi chùa nổi tiếng.",
          "rule": "Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.",
          "options": [
            "の không thay cho な khi tính từ な bổ nghĩa danh từ.",
            "有名な + danh từ お寺.",
            "Thiếu な khi 有名 bổ nghĩa cho お寺.",
            "有名 không phải tính từ い."
          ]
        }
      },
      {
        "id": "c45-1-20",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-existence",
        "prompt": "この町（　）大きい川（　）あります。",
        "options": [
          "に・が",
          "で・を",
          "に・を",
          "を・が"
        ],
        "answer": 0,
        "explanation": "Nơi tồn tại に, sự vật が.",
        "solution": {
          "completed": "この町に大きい川があります。",
          "meaning": "Ở thị trấn này có một con sông lớn.",
          "rule": "Mẫu giới thiệu sự vật tồn tại: địa điểm に + sự vật が + あります. に đánh dấu nơi tồn tại, が đánh dấu sự vật. で dùng cho nơi diễn ra hành động hoặc sự kiện, không thay に trong câu tồn tại cơ bản này.",
          "options": [
            "Nơi tồn tại に, sự vật が.",
            "Cần に cho nơi tồn tại và が cho sự vật; で・を đều không khớp mẫu.",
            "に đúng, nhưng 川 cần が, không phải を.",
            "を không đánh dấu nơi tồn tại."
          ]
        }
      },
      {
        "id": "c45-1-21",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Chọn “nhưng”: このビルは古いです（　）、きれいです。",
        "options": [
          "を",
          "で",
          "に",
          "が"
        ],
        "answer": 3,
        "explanation": "が nối hai ý tương phản: cũ nhưng đẹp.",
        "solution": {
          "completed": "このビルは古いですが、きれいです。",
          "meaning": "Tòa nhà này cũ nhưng đẹp/sạch.",
          "rule": "そして nối thêm thông tin cùng chiều; が sau một mệnh đề lịch sự nêu ý tương phản. Trong Aですが、Bです, giữ です trước が. が nối mệnh đề ở đây khác が đánh dấu sự vật trong あります.",
          "options": [
            "を không nối hai mệnh đề với nghĩa nhưng.",
            "で không đứng sau です để nối tương phản như vậy.",
            "に không có chức năng nối hai ý trái chiều.",
            "が nối hai ý tương phản: cũ nhưng đẹp."
          ]
        }
      },
      {
        "id": "c45-1-22",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "私の町は冬、あまり（　）。",
        "options": [
          "寒いなです",
          "寒くです",
          "寒くないです",
          "寒いです"
        ],
        "answer": 2,
        "explanation": "あまり + phủ định = không lạnh lắm.",
        "solution": {
          "completed": "私の町は冬、あまり寒くないです。",
          "meaning": "Thị trấn của tôi vào mùa đông không lạnh lắm.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "寒い là tính từ い, không thêm な; còn thiếu phủ định.",
            "寒くです không phải dạng kết thúc câu; cần 寒くないです.",
            "あまり + phủ định = không lạnh lắm.",
            "あまり cần phủ định trong mẫu này, không đi với 寒いです."
          ]
        }
      },
      {
        "id": "c45-1-23",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-ne",
        "prompt": "Hai người cùng ngắm tuyết: 雪はきれいです（　）。Chọn đuôi “nhỉ”.",
        "options": [
          "で",
          "ね",
          "を",
          "に"
        ],
        "answer": 1,
        "explanation": "ね tìm sự đồng tình về điều hai người cùng thấy.",
        "solution": {
          "completed": "雪はきれいですね。",
          "meaning": "Tuyết đẹp nhỉ.",
          "rule": "ね đứng sau câu để chia sẻ cảm nhận hoặc tìm sự đồng tình về điều người nói và người nghe cùng nhận thấy. Tiếng Việt thường dịch là “nhỉ/nhé”. Nó không thay cho trợ từ đứng sau danh từ.",
          "options": [
            "で không làm đuôi chia sẻ cảm nhận.",
            "ね tìm sự đồng tình về điều hai người cùng thấy.",
            "を đánh dấu tân ngữ sau danh từ, không làm đuôi đồng tình sau です.",
            "に không có nghĩa nhỉ khi đặt sau です."
          ]
        }
      },
      {
        "id": "c45-1-24",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "きのう、部屋を（　）。Chọn “đã dọn”.",
        "options": [
          "掃除しました",
          "掃除します",
          "掃除しません",
          "掃除するでした"
        ],
        "answer": 0,
        "explanation": "昨日 là hôm qua; 掃除します → 掃除しました.",
        "solution": {
          "completed": "きのう、部屋を掃除しました。",
          "meaning": "Hôm qua tôi đã dọn phòng.",
          "rule": "Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.",
          "options": [
            "昨日 là hôm qua; 掃除します → 掃除しました.",
            "掃除します là hiện tại/tương lai, chưa thể hiện đã dọn.",
            "掃除しません là phủ định hiện tại, sai cả thời và nghĩa.",
            "Không ghép thể từ điển する với でした để chia động từ quá khứ."
          ]
        }
      },
      {
        "id": "c45-1-25",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "先週、家族（　）食事しました。Chọn “cùng”.",
        "options": [
          "を",
          "の",
          "へ",
          "と"
        ],
        "answer": 3,
        "explanation": "Người cùng thực hiện hành động dùng と.",
        "solution": {
          "completed": "先週、家族と食事しました。",
          "meaning": "Tuần trước tôi đã ăn cùng gia đình.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "を đánh dấu tân ngữ, không chỉ người cùng thực hiện việc ăn trong 家族と食事しました.",
            "の nối danh từ; 家族の食事 nói bữa ăn của gia đình, không phải cùng gia đình ăn.",
            "へ chỉ hướng đến, không đánh dấu người cùng thực hiện hành động. Cần 家族と.",
            "Người cùng thực hiện hành động dùng と."
          ]
        }
      },
      {
        "id": "c45-1-26",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "A：きのう、（　）行きましたか。\nB：はい、デパートへ行きました。Chọn “đâu đó”.",
        "options": [
          "だれへ",
          "何を",
          "どこかへ",
          "どこへも"
        ],
        "answer": 2,
        "explanation": "どこかへ hỏi có đến một nơi nào không.",
        "solution": {
          "completed": "A：きのう、どこかへ行きましたか。 B：はい、デパートへ行きました。",
          "meaning": "Hôm qua bạn có đi đâu không? — Có, tôi đã đến trung tâm thương mại.",
          "rule": "どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.",
          "options": [
            "だれへ hỏi hướng tới ai, không phải có đến nơi nào đó.",
            "何を hỏi đối tượng làm gì, không đánh dấu nơi đến của 行く.",
            "どこかへ hỏi có đến một nơi nào không.",
            "どこへも dùng với phủ định “không nơi nào”, không hợp lời đáp đã đi."
          ]
        }
      },
      {
        "id": "c45-1-27",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "先月の旅行は（　）です。Chọn quá khứ của 楽しい.",
        "options": [
          "楽しいだった",
          "楽しかった",
          "楽しいでした",
          "楽しくでした"
        ],
        "answer": 1,
        "explanation": "楽しい bỏ い + かった → 楽しかった.",
        "solution": {
          "completed": "先月の旅行は楽しかったです。",
          "meaning": "Chuyến đi tháng trước rất vui.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "だった không gắn trực tiếp sau 楽しい để chia tính từ い.",
            "楽しい bỏ い + かった → 楽しかった.",
            "Không ghép でした trực tiếp sau tính từ い.",
            "楽しく là dạng nối/trạng từ, không thêm でした để tạo quá khứ."
          ]
        }
      },
      {
        "id": "c45-1-28",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "昨日は（　）。Chọn quá khứ của 暇です.",
        "options": [
          "暇でした",
          "暇かったです",
          "暇なでした",
          "暇いでした"
        ],
        "answer": 0,
        "explanation": "暇 là tính từ な, nên 暇でした.",
        "solution": {
          "completed": "昨日は暇でした。",
          "meaning": "Hôm qua tôi đã rảnh.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "暇 là tính từ な, nên 暇でした.",
            "暇 thuộc nhóm な, không chia bằng かった.",
            "な không đứng trước でした ở vị trí kết thúc câu.",
            "暇い không phải tính từ chuẩn."
          ]
        }
      },
      {
        "id": "c45-1-29",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Chọn “vì”: 風邪でした（　）、山に登りませんでした。",
        "options": [
          "まで",
          "を",
          "に",
          "から"
        ],
        "answer": 3,
        "explanation": "Lý do 風邪でした + から dẫn tới không leo núi.",
        "solution": {
          "completed": "風邪でしたから、山に登りませんでした。",
          "meaning": "Vì bị cảm nên tôi đã không leo núi.",
          "rule": "どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.",
          "options": [
            "まで chỉ điểm kết thúc, không nối lý do.",
            "を không nối sau mệnh đề でした để chỉ nguyên nhân.",
            "に không có chức năng nối lý do với kết quả ở đây.",
            "Lý do 風邪でした + から dẫn tới không leo núi."
          ]
        }
      },
      {
        "id": "c45-1-30",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "私は新しい自転車（　）ほしいです。",
        "options": [
          "と",
          "で",
          "が",
          "へ"
        ],
        "answer": 2,
        "explanation": "Nがほしいです = muốn có đồ vật N.",
        "solution": {
          "completed": "私は新しい自転車がほしいです。",
          "meaning": "Tôi muốn có một chiếc xe đạp mới.",
          "rule": "Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.",
          "options": [
            "と chỉ cùng/và, không đánh dấu đối tượng của ほしい.",
            "で không dùng cho vật muốn sở hữu trong Nがほしい.",
            "Nがほしいです = muốn có đồ vật N.",
            "へ chỉ hướng đến, không đánh dấu vật muốn có."
          ]
        }
      },
      {
        "id": "c45-1-31",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "私はアニメ（　）好きです。",
        "options": [
          "で",
          "が",
          "へ",
          "を"
        ],
        "answer": 1,
        "explanation": "Đối tượng của 好き đi với が.",
        "solution": {
          "completed": "私はアニメが好きです。",
          "meaning": "Tôi thích hoạt hình.",
          "rule": "Nが好きです／嫌いです nói thích/ghét N. 好き・嫌い là tính từ な; phủ định dùng じゃありません, không bỏ い của 嫌い. あまり好きじゃありません nghĩa là không thích lắm.",
          "options": [
            "で không đánh dấu đối tượng của 好き trong mẫu này.",
            "Đối tượng của 好き đi với が.",
            "へ chỉ hướng, không đánh dấu đối tượng thích.",
            "好き là tính từ trong mẫu Nが好き; không dùng を như tân ngữ động từ."
          ]
        }
      },
      {
        "id": "c45-1-32",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Chọn “muốn chụp”: 景色の写真を（　）です。",
        "options": [
          "撮りたい",
          "撮るたい",
          "撮りますたい",
          "撮りに"
        ],
        "answer": 0,
        "explanation": "撮ります bỏ ます rồi thêm たい.",
        "solution": {
          "completed": "景色の写真を撮りたいです。",
          "meaning": "Tôi muốn chụp ảnh phong cảnh.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "撮ります bỏ ます rồi thêm たい.",
            "撮る là thể từ điển; phải dùng gốc 撮り trước たい.",
            "Cần bỏ ます trước khi thêm たい.",
            "撮りに chỉ mục đích đi, không diễn đạt mong muốn với です."
          ]
        }
      },
      {
        "id": "c45-1-33",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "温泉に（　）行きます。Chọn “đi để ngâm/tắm”.",
        "options": [
          "入りますに",
          "入るに",
          "入りを",
          "入りに"
        ],
        "answer": 3,
        "explanation": "入ります bỏ ます → 入り; mục đích dùng 入りに.",
        "solution": {
          "completed": "温泉に入りに行きます。",
          "meaning": "Tôi đi để tắm/ngâm suối nước nóng.",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "Phải bỏ ます của 入ります trước に.",
            "Không dùng thể từ điển 入る trực tiếp trước に chỉ mục đích.",
            "を không thay に chỉ mục đích trước 行く.",
            "入ります bỏ ます → 入り; mục đích dùng 入りに."
          ]
        }
      },
      {
        "id": "c45-1-34",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn “hai tiếng rưỡi”: 新幹線で（　）です。",
        "options": [
          "二時半",
          "二時間を半",
          "二時に半",
          "二時間半"
        ],
        "answer": 3,
        "explanation": "Khoảng thời gian dùng 時間; 時 là giờ trên đồng hồ.",
        "solution": {
          "completed": "新幹線で二時間半です。",
          "meaning": "Đi tàu cao tốc mất hai tiếng rưỡi.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "二時半 là hai giờ rưỡi trên đồng hồ, không phải thời lượng.",
            "Không chen を giữa 時間 và 半.",
            "に không chen giữa 時 và 半 và vẫn thiếu đơn vị thời lượng 時間.",
            "Khoảng thời gian dùng 時間; 時 là giờ trên đồng hồ."
          ]
        }
      },
      {
        "id": "c45-1-35",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn “không cay lắm”: この料理はあまり（　）。",
        "options": [
          "辛かったです",
          "辛いではありません",
          "辛くないです",
          "辛いです"
        ],
        "answer": 2,
        "explanation": "あまり + phủ định; 辛い → 辛くない.",
        "solution": {
          "completed": "この料理はあまり辛くないです。",
          "meaning": "Món này không cay lắm.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "辛かった là đã cay, không có nghĩa không cay lắm.",
            "辛い thuộc nhóm い, không chia phủ định bằng ではありません.",
            "あまり + phủ định; 辛い → 辛くない.",
            "あまり cần phủ định trong mẫu này."
          ]
        }
      },
      {
        "id": "c45-1-36",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "昨夜、友達（　）レストラン（　）食事しました。",
        "options": [
          "の・に",
          "と・で",
          "に・で",
          "と・を"
        ],
        "answer": 1,
        "explanation": "と là cùng ai; で là nơi diễn ra việc ăn.",
        "solution": {
          "completed": "昨夜、友達とレストランで食事しました。",
          "meaning": "Tối qua tôi đã dùng bữa cùng bạn tại nhà hàng.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "の không chỉ người cùng ăn; に không chỉ nơi hành động ăn trong mẫu này.",
            "と là cùng ai; で là nơi diễn ra việc ăn.",
            "Người cùng ăn cần と, không phải に.",
            "と đúng, nhưng nơi ăn cần で, không phải を."
          ]
        }
      },
      {
        "id": "c45-1-37",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "昨日のかばんは（　）です。Chọn quá khứ của 安い.",
        "options": [
          "安かった",
          "安いでした",
          "安くでした",
          "安いかった"
        ],
        "answer": 0,
        "explanation": "安い bỏ い + かった → 安かった.",
        "solution": {
          "completed": "昨日のかばんは安かったです。",
          "meaning": "Chiếc túi nói đến hôm qua đã rẻ.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "安い bỏ い + かった → 安かった.",
            "Không thêm でした trực tiếp sau 安い.",
            "安く không ghép với でした để tạo quá khứ tính từ い.",
            "Cần bỏ い rồi thêm かった, không tạo 安いかった."
          ]
        }
      },
      {
        "id": "c45-1-38",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "先週の仕事は（　）。Chọn “đã vất vả”.",
        "options": [
          "大変かったです",
          "大変なでした",
          "大変いでした",
          "大変でした"
        ],
        "answer": 3,
        "explanation": "大変 là tính từ な; quá khứ dùng でした.",
        "solution": {
          "completed": "先週の仕事は大変でした。",
          "meaning": "Công việc tuần trước đã vất vả.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "大変 là tính từ な, không chia bằng かった.",
            "な không đứng trước でした ở vị trí kết thúc câu.",
            "大変い không phải dạng từ chuẩn.",
            "大変 là tính từ な; quá khứ dùng でした."
          ]
        }
      },
      {
        "id": "c45-1-39",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "日曜日、映画を（　）行きます。",
        "options": [
          "見るに",
          "見を",
          "見に",
          "見ますに"
        ],
        "answer": 2,
        "explanation": "見ます → 見に; dùng gốc trước ます + に行く.",
        "solution": {
          "completed": "日曜日、映画を見に行きます。",
          "meaning": "Chủ nhật tôi đi xem phim.",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "Không dùng thể từ điển 見る trước に trong mẫu này.",
            "を không thay に chỉ mục đích đi.",
            "見ます → 見に; dùng gốc trước ます + に行く.",
            "Cần bỏ ます trước に chỉ mục đích."
          ]
        }
      },
      {
        "id": "c45-1-40",
        "category": "dialogue",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "A：あなたの町は（　）町ですか。\nB：緑が多い町です。",
        "options": [
          "だれと",
          "どんな",
          "どのくらい",
          "いつ"
        ],
        "answer": 1,
        "explanation": "どんな町 hỏi đặc điểm của thị trấn.",
        "solution": {
          "completed": "A：あなたの町はどんな町ですか。 B：緑が多い町です。",
          "meaning": "Thị trấn của bạn thế nào? — Là một thị trấn có nhiều cây xanh.",
          "rule": "Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.",
          "options": [
            "だれと hỏi người cùng làm, không khớp câu đáp.",
            "どんな町 hỏi đặc điểm của thị trấn.",
            "どのくらい hỏi thời lượng/mức độ, không trực tiếp hỏi loại thị trấn.",
            "いつ hỏi thời gian, không khớp câu đáp về đặc điểm."
          ]
        }
      },
      {
        "id": "c45-1-41",
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "A：昨日の温泉は（　）。\nB：気持ちがよかったです。",
        "options": [
          "どうでしたか",
          "何時ですか",
          "どこへ行きますか",
          "何を買いますか"
        ],
        "answer": 0,
        "explanation": "どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
        "solution": {
          "completed": "A：昨日の温泉はどうでしたか。 B：気持ちがよかったです。",
          "meaning": "Suối nước nóng hôm qua thế nào? — Rất dễ chịu.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
            "何時ですか hỏi mấy giờ, không hỏi cảm nhận.",
            "どこへ行きますか hỏi nơi sẽ đến, không hỏi cảm nhận quá khứ.",
            "何を買いますか hỏi sẽ mua gì, không khớp câu đáp về trải nghiệm."
          ]
        }
      },
      {
        "id": "c45-1-42",
        "category": "dialogue",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "A：あさって、何をしたいですか。\nB：絵を（　）です。",
        "options": [
          "かくたい",
          "かきますたい",
          "かきに",
          "かきたい"
        ],
        "answer": 3,
        "explanation": "Câu hỏi 何をしたい hỏi muốn làm gì; かきたい = muốn vẽ.",
        "solution": {
          "completed": "A：あさって、何をしたいですか。 B：絵をかきたいです。",
          "meaning": "Ngày kia bạn muốn làm gì? — Tôi muốn vẽ tranh.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "Không gắn たい sau thể từ điển かく.",
            "Phải bỏ ます trước たい.",
            "かきに chỉ mục đích đi, không trả lời mong muốn với です.",
            "Câu hỏi 何をしたい hỏi muốn làm gì; かきたい = muốn vẽ."
          ]
        }
      },
      {
        "id": "c45-1-43",
        "category": "translation",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Dịch: Thành phố của tôi vào mùa hè không nóng lắm.",
        "options": [
          "私の町は夏、あまり寒くないです。",
          "私の町は冬、あまり暑くないです。",
          "私の町は夏、あまり暑くないです。",
          "私の町は夏、とても暑いです。"
        ],
        "answer": 2,
        "explanation": "夏 = mùa hè; あまり暑くない = không nóng lắm.",
        "solution": {
          "completed": "私の町は夏、あまり暑くないです。",
          "meaning": "Thành phố của tôi vào mùa hè không nóng lắm.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "寒くない nghĩa không lạnh, đổi sai tính chất thời tiết.",
            "冬 là mùa đông, không phải mùa hè 夏.",
            "夏 = mùa hè; あまり暑くない = không nóng lắm.",
            "とても暑い nghĩa rất nóng, trái với không nóng lắm."
          ]
        }
      },
      {
        "id": "c45-1-44",
        "category": "translation",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Dịch: Hôm kia tôi đã mua sắm cùng bạn cùng phòng.",
        "options": [
          "おととい、ルームメイトと買い物しませんでした。",
          "おととい、ルームメイトと買い物しました。",
          "あさって、ルームメイトと買い物します。",
          "おととい、ルームメイトに買い物しました。"
        ],
        "answer": 1,
        "explanation": "おととい = hôm kia; と = cùng; しました là quá khứ khẳng định.",
        "solution": {
          "completed": "おととい、ルームメイトと買い物しました。",
          "meaning": "Hôm kia tôi đã mua sắm cùng bạn cùng phòng.",
          "rule": "Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.",
          "options": [
            "しませんでした là đã không mua sắm, trái với câu cần dịch.",
            "おととい = hôm kia; と = cùng; しました là quá khứ khẳng định.",
            "あさって là ngày kia và します là tương lai/hiện tại, không phải việc hôm kia.",
            "Người cùng mua sắm dùng と, không dùng に."
          ]
        }
      },
      {
        "id": "c45-1-45",
        "category": "translation",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Dịch: Vì trời đã mưa nên tôi đã không ra ngoài.",
        "options": [
          "雨でしたから、出かけませんでした。",
          "雨ですから、出かけます。",
          "雨でしたまで、出かけませんでした。",
          "雨でしたから、出かけました。"
        ],
        "answer": 0,
        "explanation": "Lý do quá khứ 雨でしたから; kết quả phủ định quá khứ 出かけませんでした.",
        "solution": {
          "completed": "雨でしたから、出かけませんでした。",
          "meaning": "Vì trời đã mưa nên tôi đã không ra ngoài.",
          "rule": "どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.",
          "options": [
            "Lý do quá khứ 雨でしたから; kết quả phủ định quá khứ 出かけませんでした.",
            "雨です và 出かけます không kể đúng việc quá khứ, còn đổi kết quả thành đi ra ngoài.",
            "まで không nối nguyên nhân với kết quả.",
            "出かけました là đã ra ngoài, trái với phủ định của đề."
          ]
        }
      }
    ],
    "migrations": {
      "ae7f8d73": [
        6
      ]
    },
    "contentVersion": "2026-10-22"
  },
  {
    "id": "chapter45-2",
    "title": "Bài 4–5 · Đề 02",
    "description": "Thành phố và trải nghiệm · Đủ 19 mục ngữ pháp, 6 topic. Câu mới theo dạng đề ảnh, không dùng mẫu so sánh hay lời rủ của bài 6.",
    "lessons": [
      4,
      5
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "id": "c45-2-01",
        "category": "reading",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc từ「飛行機」.",
        "options": [
          "ひこき",
          "ひごうき",
          "ひこうき",
          "びこうき"
        ],
        "answer": 2,
        "explanation": "飛行機（ひこうき）= máy bay.",
        "solution": {
          "completed": "飛行機（ひこうき）",
          "meaning": "Máy bay.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Thiếu âm う biểu thị trường âm こう.",
            "行 trong từ này đọc こう, không phải ごう.",
            "飛行機（ひこうき）= máy bay.",
            "Âm đầu là ひ, không đổi thành び."
          ]
        }
      },
      {
        "id": "c45-2-02",
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Đọc từ「教会」.",
        "options": [
          "きょうがい",
          "きょうかい",
          "きょかい",
          "こうかい"
        ],
        "answer": 1,
        "explanation": "教会（きょうかい）= nhà thờ.",
        "solution": {
          "completed": "教会（きょうかい）",
          "meaning": "Nhà thờ.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "会 đọc かい, không phải がい ở đây.",
            "教会（きょうかい）= nhà thờ.",
            "Thiếu âm う của trường âm きょう.",
            "Thiếu âm ghép ゃ/ょ đúng trong きょう; từ không đọc こうかい."
          ]
        }
      },
      {
        "id": "c45-2-03",
        "category": "reading",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Đọc từ「一年中」.",
        "options": [
          "いちねんじゅう",
          "いちねんちゅう",
          "いっねんじゅう",
          "ひとねんじゅう"
        ],
        "answer": 0,
        "explanation": "一年中（いちねんじゅう）= quanh năm.",
        "solution": {
          "completed": "一年中（いちねんじゅう）",
          "meaning": "Quanh năm, suốt cả năm.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "一年中（いちねんじゅう）= quanh năm.",
            "中 trong nghĩa suốt khoảng thời gian đọc じゅう, không phải ちゅう ở từ này.",
            "一年 đọc いちねん; không biến ち thành âm ngắt っ.",
            "一年 ở từ này đọc いちねん, không đọc ひとねん."
          ]
        }
      },
      {
        "id": "c45-2-04",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc từ「部屋」.",
        "options": [
          "ぶや",
          "へい",
          "べや",
          "へや"
        ],
        "answer": 3,
        "explanation": "部屋（へや）= căn phòng.",
        "solution": {
          "completed": "部屋（へや）",
          "meaning": "Căn phòng.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Không dùng âm ぶ của 部 để ghép máy móc thành ぶや.",
            "屋 ở đây đọc や, không phải い.",
            "Âm đầu là へ, không phải べ.",
            "部屋（へや）= căn phòng."
          ]
        }
      },
      {
        "id": "c45-2-05",
        "category": "reading",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Đọc từ「晩ご飯」.",
        "options": [
          "ばんごめし",
          "はんごはん",
          "ばんごはん",
          "よるごはん"
        ],
        "answer": 2,
        "explanation": "晩ご飯（ばんごはん）= cơm tối.",
        "solution": {
          "completed": "晩ご飯（ばんごはん）",
          "meaning": "Cơm tối.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "飯 trong ご飯 đọc はん, không đọc めし trong cụm này.",
            "晩 đọc ばん có dấu đục, không đọc はん.",
            "晩ご飯（ばんごはん）= cơm tối.",
            "よるごはん thường là 夜ご飯; chữ 晩 trong từ đang hỏi đọc ばん."
          ]
        }
      },
      {
        "id": "c45-2-06",
        "category": "reading",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Theo mục từ bệnh cảm ở bài 5 trong PDF, đọc「風邪」.",
        "options": [
          "ふじゃ",
          "かぜ",
          "ふうじゃ",
          "かざ"
        ],
        "answer": 1,
        "explanation": "風邪（かぜ）= cảm/cảm cúm.",
        "solution": {
          "completed": "風邪（かぜ）",
          "meaning": "Cảm, cảm cúm.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "ふじゃ không phải cách đọc chuẩn của 風邪.",
            "風邪（かぜ）= cảm/cảm cúm.",
            "ふうじゃ là cách đọc trong thuật ngữ y học cổ. Mục từ chỉ bệnh cảm trong bài 5 đang hỏi đọc かぜ; không phủ nhận cách đọc chuyên ngành.",
            "Âm cuối là ぜ, không phải ざ."
          ]
        }
      },
      {
        "id": "c45-2-07",
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Đọc từ「写真」.",
        "options": [
          "しゃしん",
          "しゃじん",
          "じゃしん",
          "しょしん"
        ],
        "answer": 0,
        "explanation": "写真（しゃしん）= ảnh.",
        "solution": {
          "completed": "写真（しゃしん）",
          "meaning": "Ảnh chụp.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "写真（しゃしん）= ảnh.",
            "真 đọc しん, không phải じん trong 写真.",
            "写 đọc しゃ, không phải じゃ.",
            "写 đọc しゃ với ゃ nhỏ, không phải しょ."
          ]
        }
      },
      {
        "id": "c45-2-08",
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Viết「みなみ」bằng chữ Hán.",
        "options": [
          "北",
          "東",
          "西",
          "南"
        ],
        "answer": 3,
        "explanation": "南（みなみ）= phía nam.",
        "solution": {
          "completed": "南（みなみ）",
          "meaning": "Phía nam.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "北（きた）là phía bắc.",
            "東（ひがし）là phía đông.",
            "西（にし）là phía tây.",
            "南（みなみ）= phía nam."
          ]
        }
      },
      {
        "id": "c45-2-09",
        "category": "spelling",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Viết「みどり」bằng chữ Hán.",
        "options": [
          "縁",
          "録",
          "緑",
          "線"
        ],
        "answer": 2,
        "explanation": "緑（みどり）= màu xanh, cây xanh.",
        "solution": {
          "completed": "緑（みどり）",
          "meaning": "Màu xanh; cây xanh.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "縁 là một chữ khác, thường gặp ở 縁（えん／ふち）, không phải màu xanh.",
            "録 là chữ dùng trong ghi chép/ghi âm, không phải 緑.",
            "緑（みどり）= màu xanh, cây xanh.",
            "線（せん）là đường/dây, không phải 緑."
          ]
        }
      },
      {
        "id": "c45-2-10",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Viết「かぞく」bằng chữ Hán.",
        "options": [
          "家俗",
          "家族",
          "家旅",
          "家続"
        ],
        "answer": 1,
        "explanation": "家族（かぞく）= gia đình.",
        "solution": {
          "completed": "家族（かぞく）",
          "meaning": "Gia đình.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "俗 không thay cho 族 trong 家族.",
            "家族（かぞく）= gia đình.",
            "Cần chữ 族, không phải 旅 trong từ 家族.",
            "続 không thay cho 族 để tạo từ gia đình."
          ]
        }
      },
      {
        "id": "c45-2-11",
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Viết「らいねん」bằng chữ Hán.",
        "options": [
          "来年",
          "今年",
          "去年",
          "毎年"
        ],
        "answer": 0,
        "explanation": "来年（らいねん）= sang năm.",
        "solution": {
          "completed": "来年（らいねん）",
          "meaning": "Sang năm.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "来年（らいねん）= sang năm.",
            "今年（ことし）là năm nay.",
            "去年（きょねん）là năm ngoái.",
            "毎年（まいとし／まいねん）là mỗi năm."
          ]
        }
      },
      {
        "id": "c45-2-12",
        "category": "vocabulary",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "「ところ」nghĩa là gì?",
        "options": [
          "Phút",
          "Người",
          "Dòng sông",
          "Nơi, chỗ"
        ],
        "answer": 3,
        "explanation": "ところ = nơi, chỗ.",
        "solution": {
          "completed": "ところ",
          "meaning": "Nơi, chỗ.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Phút là 分, không phải ところ.",
            "Người là 人（ひと）.",
            "Dòng sông là 川（かわ）.",
            "ところ = nơi, chỗ."
          ]
        }
      },
      {
        "id": "c45-2-13",
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn nghĩa của「冷たい」.",
        "options": [
          "Ấm áp về thời tiết",
          "Nóng về thời tiết",
          "Lạnh khi chạm/uống",
          "Lạnh về thời tiết"
        ],
        "answer": 2,
        "explanation": "冷たい dùng cho vật, nước; 寒い thường dùng cho thời tiết.",
        "solution": {
          "completed": "冷たい（つめたい）",
          "meaning": "Lạnh khi chạm, uống hoặc cảm nhận nhiệt độ của vật.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Ấm áp về thời tiết dùng 暖かい（あたたかい）.",
            "Nóng về thời tiết dùng 暑い（あつい）.",
            "冷たい dùng cho vật, nước; 寒い thường dùng cho thời tiết.",
            "Lạnh về thời tiết thường dùng 寒い（さむい）."
          ]
        }
      },
      {
        "id": "c45-2-14",
        "category": "vocabulary",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn nghĩa của「食事します」.",
        "options": [
          "Mua sắm",
          "Dùng bữa",
          "Giặt đồ",
          "Dọn phòng"
        ],
        "answer": 1,
        "explanation": "食事します（しょくじします）= dùng bữa.",
        "solution": {
          "completed": "食事します（しょくじします）",
          "meaning": "Dùng bữa, ăn uống.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Mua sắm dùng 買い物します（かいものします）.",
            "食事します（しょくじします）= dùng bữa.",
            "Giặt đồ dùng 洗濯します（せんたくします）.",
            "Dọn phòng dùng 掃除します（そうじします）."
          ]
        }
      },
      {
        "id": "c45-2-15",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-location",
        "prompt": "Chọn “phía nam của Nhật Bản”: 日本（　）南です。",
        "options": [
          "の",
          "と",
          "を",
          "へ"
        ],
        "answer": 0,
        "explanation": "の nối 日本 với 南.",
        "solution": {
          "completed": "日本の南です。",
          "meaning": "Ở phía nam của Nhật Bản.",
          "rule": "Địa danh は quốc gia の phương hướng です. の nối quốc gia với 北・南・東・西・真ん中 để tạo cụm chỉ vị trí. Đây không phải nơi diễn ra hành động nên không thay の bằng で.",
          "options": [
            "の nối 日本 với 南.",
            "と nghĩa là và/cùng, không chỉ quan hệ “của”.",
            "を không nối 日本 với 南.",
            "へ chỉ hướng đến, không tạo cụm “phía nam của Nhật”."
          ]
        }
      },
      {
        "id": "c45-2-16",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "駅から教会まで（　）十分です。Chọn “đi bộ”.",
        "options": [
          "歩いてで",
          "歩きますで",
          "歩くを",
          "歩いて"
        ],
        "answer": 3,
        "explanation": "歩いて dùng trực tiếp, không thêm で.",
        "solution": {
          "completed": "駅から教会まで歩いて十分です。",
          "meaning": "Từ ga đến nhà thờ, đi bộ mất mười phút.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "歩いて đã mang nghĩa đi bộ; thêm で là thừa và sai mẫu.",
            "歩きます không nối với で để nói phương tiện.",
            "歩くを không phải cách diễn đạt đi bộ.",
            "歩いて dùng trực tiếp, không thêm で."
          ]
        }
      },
      {
        "id": "c45-2-17",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-adjective",
        "prompt": "あのビルは（　）です。Chọn dạng đúng của 高い.",
        "options": [
          "高く",
          "高くな",
          "高い",
          "高いな"
        ],
        "answer": 2,
        "explanation": "Tính từ い giữ nguyên đuôi trước です.",
        "solution": {
          "completed": "あのビルは高いです。",
          "meaning": "Tòa nhà kia cao.",
          "rule": "Tính từ い giữ nguyên đuôi trước です. Tính từ な bỏ な khi kết thúc câu với です; chỉ thêm な khi bổ nghĩa danh từ. 静か・有名・きれい thuộc nhóm な, kể cả khi きれい có âm cuối い.",
          "options": [
            "高く là dạng nối/trạng từ, không thay 高い trước です ở câu khẳng định này.",
            "高くな không phải dạng tính từ hoàn chỉnh đứng trước です. Câu khẳng định theo mẫu bài 4 là 高いです.",
            "Tính từ い giữ nguyên đuôi trước です.",
            "高い là tính từ い nên không thêm な."
          ]
        }
      },
      {
        "id": "c45-2-18",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "この町はにぎやかですか。いいえ、（　）。",
        "options": [
          "にぎやかいではありません",
          "にぎやかじゃありません",
          "にぎやかくないです",
          "にぎやかったです"
        ],
        "answer": 1,
        "explanation": "にぎやか là tính từ な; phủ định dùng じゃありません.",
        "solution": {
          "completed": "この町はにぎやかですか。いいえ、にぎやかじゃありません。",
          "meaning": "Thị trấn này nhộn nhịp không? — Không, không nhộn nhịp.",
          "rule": "Phủ định tính từ い: bỏ い rồi thêm くないです. Tính từ な dùng じゃありません hoặc ではありません. Ngoại lệ いい dùng gốc よ: よくないです. Chọn dạng phủ định phù hợp với lời đáp いいえ.",
          "options": [
            "にぎやかい không phải dạng từ chuẩn.",
            "にぎやか là tính từ な; phủ định dùng じゃありません.",
            "にぎやか thuộc nhóm な nên không thêm くない.",
            "Không chia tính từ な bằng かった."
          ]
        }
      },
      {
        "id": "c45-2-19",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "ここは（　）町です。Chọn “thị trấn nhỏ”.",
        "options": [
          "小さい",
          "小さいな",
          "小さく",
          "小さなな"
        ],
        "answer": 0,
        "explanation": "Tính từ い + danh từ: 小さい町.",
        "solution": {
          "completed": "ここは小さい町です。",
          "meaning": "Đây là một thị trấn nhỏ.",
          "rule": "Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.",
          "options": [
            "Tính từ い + danh từ: 小さい町.",
            "Tính từ い không cần thêm な trước danh từ.",
            "小さく là dạng khác, không bổ nghĩa trực tiếp cho 町 theo mẫu này.",
            "小さな tự nó có thể bổ nghĩa danh từ, nhưng 小さなな lặp な nên sai."
          ]
        }
      },
      {
        "id": "c45-2-20",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-existence",
        "prompt": "山の近くに温泉（　）あります。",
        "options": [
          "を",
          "へ",
          "と",
          "が"
        ],
        "answer": 3,
        "explanation": "温泉が là sự vật tồn tại.",
        "solution": {
          "completed": "山の近くに温泉があります。",
          "meaning": "Gần núi có suối nước nóng.",
          "rule": "Mẫu giới thiệu sự vật tồn tại: địa điểm に + sự vật が + あります. に đánh dấu nơi tồn tại, が đánh dấu sự vật. で dùng cho nơi diễn ra hành động hoặc sự kiện, không thay に trong câu tồn tại cơ bản này.",
          "options": [
            "あります không dùng を đánh dấu sự vật tồn tại.",
            "へ chỉ hướng đi, không đánh dấu 温泉 là sự vật đang có.",
            "と không đánh dấu sự vật được giới thiệu với あります.",
            "温泉が là sự vật tồn tại."
          ]
        }
      },
      {
        "id": "c45-2-21",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Chọn “và”: ここは静かです。（　）、緑が多いです。",
        "options": [
          "だれと",
          "どのくらい",
          "そして",
          "どうして"
        ],
        "answer": 2,
        "explanation": "そして bổ sung một đặc điểm cùng chiều.",
        "solution": {
          "completed": "ここは静かです。そして、緑が多いです。",
          "meaning": "Nơi này yên tĩnh. Và có nhiều cây xanh.",
          "rule": "そして nối thêm thông tin cùng chiều; が sau một mệnh đề lịch sự nêu ý tương phản. Trong Aですが、Bです, giữ です trước が. が nối mệnh đề ở đây khác が đánh dấu sự vật trong あります.",
          "options": [
            "だれと hỏi cùng ai, không phải từ nối.",
            "どのくらい hỏi bao lâu/mức độ, không có nghĩa và.",
            "そして bổ sung một đặc điểm cùng chiều.",
            "どうして hỏi tại sao, không nối thêm một đặc điểm."
          ]
        }
      },
      {
        "id": "c45-2-22",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn “rất”: このメロンは（　）甘いです。",
        "options": [
          "どうして",
          "とても",
          "あまり",
          "どんな"
        ],
        "answer": 1,
        "explanation": "とても + tính từ khẳng định = rất ngọt.",
        "solution": {
          "completed": "このメロンはとても甘いです。",
          "meaning": "Quả dưa này rất ngọt.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "どうして hỏi lý do, không diễn đạt rất.",
            "とても + tính từ khẳng định = rất ngọt.",
            "あまり không có nghĩa rất và cần phủ định ở mẫu này.",
            "どんな là từ hỏi loại/đặc điểm, không phải từ chỉ mức độ."
          ]
        }
      },
      {
        "id": "c45-2-23",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-ne",
        "prompt": "Hai người cùng thấy trời mát: 涼しいです（　）。Chọn đuôi “nhỉ”.",
        "options": [
          "ね",
          "を",
          "と",
          "へ"
        ],
        "answer": 0,
        "explanation": "ね gắn sau câu lịch sự để cùng chia sẻ cảm nhận.",
        "solution": {
          "completed": "涼しいですね。",
          "meaning": "Mát mẻ nhỉ.",
          "rule": "ね đứng sau câu để chia sẻ cảm nhận hoặc tìm sự đồng tình về điều người nói và người nghe cùng nhận thấy. Tiếng Việt thường dịch là “nhỉ/nhé”. Nó không thay cho trợ từ đứng sau danh từ.",
          "options": [
            "ね gắn sau câu lịch sự để cùng chia sẻ cảm nhận.",
            "を không gắn sau です để tìm đồng tình.",
            "と không làm đuôi nhỉ trong câu này.",
            "へ chỉ hướng, không dùng sau です như vậy."
          ]
        }
      },
      {
        "id": "c45-2-24",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "先週の日曜日は洗濯を（　）。Chọn “đã không làm”.",
        "options": [
          "しません",
          "します",
          "するません",
          "しませんでした"
        ],
        "answer": 3,
        "explanation": "Quá khứ phủ định lịch sự: しませんでした.",
        "solution": {
          "completed": "先週の日曜日は洗濯をしませんでした。",
          "meaning": "Chủ nhật tuần trước tôi đã không giặt đồ.",
          "rule": "Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.",
          "options": [
            "しません là phủ định hiện tại, thiếu quá khứ.",
            "します là khẳng định hiện tại, sai cả nghĩa và thời.",
            "するません không phải cách chia phủ định của します.",
            "Quá khứ phủ định lịch sự: しませんでした."
          ]
        }
      },
      {
        "id": "c45-2-25",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn “một mình”: 日曜日、（　）買い物しました。",
        "options": [
          "一人を",
          "一人の",
          "一人で",
          "一人と"
        ],
        "answer": 2,
        "explanation": "一人で = một mình.",
        "solution": {
          "completed": "日曜日、一人で買い物しました。",
          "meaning": "Chủ nhật tôi đã đi mua sắm một mình.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "を không tạo cụm trạng ngữ một mình.",
            "の cần danh từ theo sau, không bổ nghĩa trực tiếp cho 買い物しました.",
            "一人で = một mình.",
            "と chỉ cùng với, không tạo nghĩa một mình."
          ]
        }
      },
      {
        "id": "c45-2-26",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "先週は（　）行きませんでした。Chọn “không đi đâu cả”.",
        "options": [
          "いつに",
          "どこへも",
          "どこかへも",
          "だれと"
        ],
        "answer": 1,
        "explanation": "どこへも + phủ định = không đến bất cứ đâu.",
        "solution": {
          "completed": "先週はどこへも行きませんでした。",
          "meaning": "Tuần trước tôi không đi đâu cả.",
          "rule": "どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.",
          "options": [
            "いつに hỏi thời gian, không tạo nghĩa không đi đâu cả.",
            "どこへも + phủ định = không đến bất cứ đâu.",
            "Không dùng どこかへも để nói không đi đâu; mẫu là どこへも + phủ định.",
            "だれと là cùng ai, không có nghĩa không nơi nào."
          ]
        }
      },
      {
        "id": "c45-2-27",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "昨日の映画は（　）です。Chọn quá khứ phủ định của おもしろい.",
        "options": [
          "おもしろくなかった",
          "おもしろくないでした",
          "おもしろいじゃなかった",
          "おもしろかった"
        ],
        "answer": 0,
        "explanation": "Phủ định quá khứ: bỏ い + くなかった.",
        "solution": {
          "completed": "昨日の映画はおもしろくなかったです。",
          "meaning": "Bộ phim hôm qua đã không hay.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "Phủ định quá khứ: bỏ い + くなかった.",
            "Phủ định quá khứ cần くなかった, không phải くないでした.",
            "おもしろい là tính từ い nên không chia phủ định theo じゃなかった.",
            "おもしろかった là khẳng định đã hay, trái với yêu cầu phủ định."
          ]
        }
      },
      {
        "id": "c45-2-28",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "おとといは（　）。Chọn “đã không mưa”.",
        "options": [
          "雨くなかったです",
          "雨じゃありません",
          "雨でした",
          "雨じゃありませんでした"
        ],
        "answer": 3,
        "explanation": "雨 là danh từ; phủ định quá khứ 雨じゃありませんでした.",
        "solution": {
          "completed": "おとといは雨じゃありませんでした。",
          "meaning": "Hôm kia trời đã không mưa.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "雨 là danh từ, không chia như tính từ い bằng くなかった.",
            "じゃありません là phủ định hiện tại, thiếu quá khứ.",
            "雨でした là đã mưa, trái nghĩa đã không mưa.",
            "雨 là danh từ; phủ định quá khứ 雨じゃありませんでした."
          ]
        }
      },
      {
        "id": "c45-2-29",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "A：（　）服を買いませんでしたか。\nB：高かったですから。",
        "options": [
          "どんな",
          "だれを",
          "どうして",
          "どのくらい"
        ],
        "answer": 2,
        "explanation": "どうして hỏi lý do; trả lời với から.",
        "solution": {
          "completed": "A：どうして服を買いませんでしたか。 B：高かったですから。",
          "meaning": "Tại sao bạn đã không mua quần áo? — Vì đã đắt.",
          "rule": "どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.",
          "options": [
            "どんな cần danh từ để hỏi loại/đặc điểm, không hỏi tại sao.",
            "だれを hỏi người làm đối tượng, không hợp lời đáp vì đắt.",
            "どうして hỏi lý do; trả lời với から.",
            "どのくらい hỏi mức độ/thời lượng, không hỏi lý do."
          ]
        }
      },
      {
        "id": "c45-2-30",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "Chọn “muốn có”: 今、新しいカメラが（　）です。",
        "options": [
          "会いたい",
          "ほしい",
          "飲みたい",
          "行きたい"
        ],
        "answer": 1,
        "explanation": "Muốn sở hữu đồ vật dùng ほしい.",
        "solution": {
          "completed": "今、新しいカメラがほしいです。",
          "meaning": "Bây giờ tôi muốn có một chiếc máy ảnh mới.",
          "rule": "Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.",
          "options": [
            "会いたい nghĩa là muốn gặp, không dùng cho việc sở hữu máy ảnh.",
            "Muốn sở hữu đồ vật dùng ほしい.",
            "飲みたい nghĩa là muốn uống, không phải muốn sở hữu máy ảnh.",
            "行きたい nghĩa là muốn đi, không phù hợp đồ vật muốn có."
          ]
        }
      },
      {
        "id": "c45-2-31",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "私はゲームがあまり（　）。Chọn “không thích lắm”.",
        "options": [
          "好きじゃありません",
          "好きです",
          "好きくないです",
          "好きいです"
        ],
        "answer": 0,
        "explanation": "好き là tính từ な; あまり好きじゃありません.",
        "solution": {
          "completed": "私はゲームがあまり好きじゃありません。",
          "meaning": "Tôi không thích trò chơi lắm.",
          "rule": "Nが好きです／嫌いです nói thích/ghét N. 好き・嫌い là tính từ な; phủ định dùng じゃありません, không bỏ い của 嫌い. あまり好きじゃありません nghĩa là không thích lắm.",
          "options": [
            "好き là tính từ な; あまり好きじゃありません.",
            "あまり trong nghĩa không…lắm cần phủ định, không dùng 好きです.",
            "好き là tính từ な, không dùng くない.",
            "好きい không phải dạng tính từ chuẩn."
          ]
        }
      },
      {
        "id": "c45-2-32",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Chọn “muốn vẽ”: 今度の休みに絵を（　）です。",
        "options": [
          "かくたい",
          "かきますたい",
          "かきましたたい",
          "かきたい"
        ],
        "answer": 3,
        "explanation": "かきます → かきたい; không gắn たい sau thể từ điển.",
        "solution": {
          "completed": "今度の休みに絵をかきたいです。",
          "meaning": "Kỳ nghỉ tới tôi muốn vẽ tranh.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "Không thêm たい sau thể từ điển かく.",
            "Phải bỏ ます trước たい.",
            "Không thêm たい sau dạng quá khứ かきました.",
            "かきます → かきたい; không gắn たい sau thể từ điển."
          ]
        }
      },
      {
        "id": "c45-2-33",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "デパートへ服を（　）行きます。",
        "options": [
          "買うに",
          "買いを",
          "買いに",
          "買いますに"
        ],
        "answer": 2,
        "explanation": "買います → 買いに; へ chỉ nơi đến, に chỉ mục đích.",
        "solution": {
          "completed": "デパートへ服を買いに行きます。",
          "meaning": "Tôi đến trung tâm thương mại để mua quần áo.",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "買う là thể từ điển; cần gốc 買い.",
            "買いを không phải cụm mục đích; cần 買いに.",
            "買います → 買いに; へ chỉ nơi đến, に chỉ mục đích.",
            "Phải bỏ ます trước に chỉ mục đích."
          ]
        }
      },
      {
        "id": "c45-2-34",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn “khoảng”: 飛行機で三時間（　）です。",
        "options": [
          "を",
          "と",
          "くらい",
          "に"
        ],
        "answer": 2,
        "explanation": "くらい đứng sau thời lượng để nói xấp xỉ.",
        "solution": {
          "completed": "飛行機で三時間くらいです。",
          "meaning": "Đi máy bay mất khoảng ba tiếng.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "を không thể hiện khoảng chừng.",
            "と không diễn đạt khoảng thời gian xấp xỉ.",
            "くらい đứng sau thời lượng để nói xấp xỉ.",
            "に không có nghĩa xấp xỉ khi đứng sau thời lượng này."
          ]
        }
      },
      {
        "id": "c45-2-35",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "この建物はきれいですか。いいえ、（　）。",
        "options": [
          "きれかったです",
          "きれいじゃありません",
          "きれくないです",
          "きれいくないです"
        ],
        "answer": 1,
        "explanation": "きれい thuộc tính từ な; không chia như tính từ い.",
        "solution": {
          "completed": "この建物はきれいですか。いいえ、きれいじゃありません。",
          "meaning": "Tòa nhà này đẹp/sạch không? — Không, không đẹp/sạch.",
          "rule": "Phủ định tính từ い: bỏ い rồi thêm くないです. Tính từ な dùng じゃありません hoặc ではありません. Ngoại lệ いい dùng gốc よ: よくないです. Chọn dạng phủ định phù hợp với lời đáp いいえ.",
          "options": [
            "Không chia きれい bằng かった; câu cũng đang cần phủ định hiện tại.",
            "きれい thuộc tính từ な; không chia như tính từ い.",
            "きれい là tính từ な, không bỏ い thành きれくない.",
            "Không thêm くない trực tiếp vào きれい."
          ]
        }
      },
      {
        "id": "c45-2-36",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "昨夜、一人で晩ご飯を（　）。Chọn “đã làm”.",
        "options": [
          "作りました",
          "作ります",
          "作りません",
          "作るでした"
        ],
        "answer": 0,
        "explanation": "作ります → 作りました; 一人で = một mình.",
        "solution": {
          "completed": "昨夜、一人で晩ご飯を作りました。",
          "meaning": "Tối qua tôi đã nấu cơm tối một mình.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "作ります → 作りました; 一人で = một mình.",
            "作ります chưa diễn đạt đã làm.",
            "作りません là phủ định hiện tại, không phải đã làm.",
            "作るでした không phải cách chia quá khứ lịch sự của 作る."
          ]
        }
      },
      {
        "id": "c45-2-37",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "去年の旅行は（　）です。Chọn quá khứ phủ định của 楽しい.",
        "options": [
          "楽しいくなかった",
          "楽しいじゃなかった",
          "楽しくないでした",
          "楽しくなかった"
        ],
        "answer": 3,
        "explanation": "Bỏ い + くなかった để nói đã không vui.",
        "solution": {
          "completed": "去年の旅行は楽しくなかったです。",
          "meaning": "Chuyến đi năm ngoái đã không vui.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "Bỏ い trước くなかった, không giữ thành 楽しいくなかった.",
            "楽しい là tính từ い, không chia phủ định theo じゃなかった.",
            "Không nối でした sau dạng くない; cần くなかったです.",
            "Bỏ い + くなかった để nói đã không vui."
          ]
        }
      },
      {
        "id": "c45-2-38",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "あの公園は昨日（　）。Chọn “đã không yên tĩnh”.",
        "options": [
          "静かなでした",
          "静かじゃありません",
          "静かじゃありませんでした",
          "静かくなかったです"
        ],
        "answer": 2,
        "explanation": "Tính từ な phủ định quá khứ dùng じゃありませんでした.",
        "solution": {
          "completed": "あの公園は昨日静かじゃありませんでした。",
          "meaning": "Công viên kia hôm qua đã không yên tĩnh.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "静かな dùng trước danh từ, không ghép なでした.",
            "じゃありません chỉ phủ định hiện tại; thiếu でした cho quá khứ.",
            "Tính từ な phủ định quá khứ dùng じゃありませんでした.",
            "静か thuộc nhóm な, không chia bằng くなかった."
          ]
        }
      },
      {
        "id": "c45-2-39",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Chọn “đã muốn uống”: 昨日は冷たい水を（　）です。",
        "options": [
          "飲みますたかった",
          "飲みたかった",
          "飲みたいでした",
          "飲むたかった"
        ],
        "answer": 1,
        "explanation": "飲みたい chia như tính từ い: 飲みたかった.",
        "solution": {
          "completed": "昨日は冷たい水を飲みたかったです。",
          "meaning": "Hôm qua tôi đã muốn uống nước lạnh.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "Phải bỏ ます trước khi thêm たかった.",
            "飲みたい chia như tính từ い: 飲みたかった.",
            "たい chia quá khứ thành たかった, không thêm でした trực tiếp.",
            "Cần gốc 飲み, không phải thể từ điển 飲む trước たかった."
          ]
        }
      },
      {
        "id": "c45-2-40",
        "category": "dialogue",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "A：家から駅までどのくらいですか。\nB：（　）。Chọn câu trả lời thời lượng.",
        "options": [
          "歩いて十五分です",
          "歩いて十五時です",
          "歩いて十五人です",
          "歩いて十五円です"
        ],
        "answer": 0,
        "explanation": "分 là phút; 時 là giờ trên đồng hồ; 人 đếm người; 円 là tiền.",
        "solution": {
          "completed": "A：家から駅までどのくらいですか。 B：歩いて十五分です。",
          "meaning": "Từ nhà đến ga mất bao lâu? — Đi bộ mất mười lăm phút.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "分 là phút; 時 là giờ trên đồng hồ; 人 đếm người; 円 là tiền.",
            "十五時 là 15 giờ trên đồng hồ, không trả lời thời lượng đi bộ.",
            "十五人 là mười lăm người.",
            "十五円 là mười lăm yên, không phải thời lượng."
          ]
        }
      },
      {
        "id": "c45-2-41",
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "A：おととい、どこかへ行きましたか。\nB：はい、（　）。",
        "options": [
          "温泉へ行きます",
          "温泉へ行きたいです",
          "温泉へ行きませんでした",
          "温泉へ行きました"
        ],
        "answer": 3,
        "explanation": "Câu hỏi việc đã làm dùng 行きましたか; lời xác nhận dùng quá khứ khẳng định.",
        "solution": {
          "completed": "A：おととい、どこかへ行きましたか。 B：はい、温泉へ行きました。",
          "meaning": "Hôm kia bạn có đi đâu không? — Có, tôi đã đến suối nước nóng.",
          "rule": "どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.",
          "options": [
            "行きます nói hiện tại/tương lai, không xác nhận việc hôm kia.",
            "行きたいです nói mong muốn, không xác nhận đã đi.",
            "行きませんでした là đã không đi, mâu thuẫn với はい trong cặp đáp này.",
            "Câu hỏi việc đã làm dùng 行きましたか; lời xác nhận dùng quá khứ khẳng định."
          ]
        }
      },
      {
        "id": "c45-2-42",
        "category": "dialogue",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "A：今、何がほしいですか。\nB：（　）。",
        "options": [
          "新しい服が飲みたいです",
          "新しい服が会いたいです",
          "新しい服がほしいです",
          "新しい服が行きたいです"
        ],
        "answer": 2,
        "explanation": "ほしい hỏi vật muốn có; たい hỏi hành động muốn làm.",
        "solution": {
          "completed": "A：今、何がほしいですか。 B：新しい服がほしいです。",
          "meaning": "Bây giờ bạn muốn có gì? — Tôi muốn có quần áo mới.",
          "rule": "Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.",
          "options": [
            "飲みたい là muốn uống, không phù hợp với quần áo.",
            "会いたい là muốn gặp người, không diễn đạt sở hữu quần áo.",
            "ほしい hỏi vật muốn có; たい hỏi hành động muốn làm.",
            "行きたい là muốn đi, không diễn đạt muốn có quần áo."
          ]
        }
      },
      {
        "id": "c45-2-43",
        "category": "translation",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Dịch: Thị trấn này nhỏ nhưng nhộn nhịp.",
        "options": [
          "この町は小さいですが、静かです。",
          "この町は小さいですが、にぎやかです。",
          "この町は大きいですが、にぎやかです。",
          "この町は小さいですから、にぎやかです。"
        ],
        "answer": 1,
        "explanation": "小さい = nhỏ; が = nhưng; にぎやか = nhộn nhịp.",
        "solution": {
          "completed": "この町は小さいですが、にぎやかです。",
          "meaning": "Thị trấn này nhỏ nhưng nhộn nhịp.",
          "rule": "そして nối thêm thông tin cùng chiều; が sau một mệnh đề lịch sự nêu ý tương phản. Trong Aですが、Bです, giữ です trước が. が nối mệnh đề ở đây khác が đánh dấu sự vật trong あります.",
          "options": [
            "静か là yên tĩnh, trái với nhộn nhịp にぎやか.",
            "小さい = nhỏ; が = nhưng; にぎやか = nhộn nhịp.",
            "大きい là lớn, không phải nhỏ.",
            "ですから có nghĩa vì/nên, không diễn đạt quan hệ tương phản nhưng."
          ]
        }
      },
      {
        "id": "c45-2-44",
        "category": "translation",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Dịch: Bài kiểm tra hôm qua đã không khó.",
        "options": [
          "昨日のテストは難しくなかったです。",
          "昨日のテストは難しかったです。",
          "昨日のテストは難しくないでした。",
          "明日のテストは難しくないです。"
        ],
        "answer": 0,
        "explanation": "難しい → 難しくなかった; 昨日 = hôm qua.",
        "solution": {
          "completed": "昨日のテストは難しくなかったです。",
          "meaning": "Bài kiểm tra hôm qua đã không khó.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "難しい → 難しくなかった; 昨日 = hôm qua.",
            "難しかった là đã khó, trái với phủ định.",
            "Tính từ い phủ định quá khứ dùng くなかった, không phải くないでした.",
            "明日 là ngày mai; câu chỉ phủ định hiện tại, không kể hôm qua."
          ]
        }
      },
      {
        "id": "c45-2-45",
        "category": "translation",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Dịch: Tôi đến bảo tàng mỹ thuật để xem tranh.",
        "options": [
          "美術館へ絵を見ますに行きます。",
          "美術館で絵を買いに行きます。",
          "美術館へ絵を見たくないです。",
          "美術館へ絵を見に行きます。"
        ],
        "answer": 3,
        "explanation": "Đích đến へ; tân ngữ を; 見に chỉ mục đích đi.",
        "solution": {
          "completed": "美術館へ絵を見に行きます。",
          "meaning": "Tôi đến bảo tàng mỹ thuật để xem tranh.",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "Phải bỏ ます trước に để tạo 見に.",
            "で không đánh dấu đích đến; 買いに là đi mua, không phải đi xem.",
            "見たくない là không muốn xem, trái với mục đích đề yêu cầu.",
            "Đích đến へ; tân ngữ を; 見に chỉ mục đích đi."
          ]
        }
      }
    ],
    "migrations": {
      "43b98026": [
        5,
        16
      ]
    },
    "contentVersion": "2026-10-22"
  },
  {
    "id": "chapter45-3",
    "title": "Bài 4–5 · Đề 03",
    "description": "Mùa, sở thích và kế hoạch · Đủ 19 mục ngữ pháp, 6 topic. Câu mới theo dạng đề ảnh, không dùng mẫu so sánh hay lời rủ của bài 6.",
    "lessons": [
      4,
      5
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "id": "c45-3-01",
        "category": "reading",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「電車」.",
        "options": [
          "でんさ",
          "でんしゃ",
          "てんしゃ",
          "でんじゃ"
        ],
        "answer": 1,
        "explanation": "電車（でんしゃ）= tàu điện.",
        "solution": {
          "completed": "電車（でんしゃ）",
          "meaning": "Tàu điện.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "車 đọc しゃ với ゃ nhỏ, không phải さ.",
            "電車（でんしゃ）= tàu điện.",
            "電 đọc でん có dấu đục, không đọc てん.",
            "車 đọc しゃ, không đổi thành じゃ trong từ này."
          ]
        }
      },
      {
        "id": "c45-3-02",
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「有名」.",
        "options": [
          "ゆうめい",
          "ゆめい",
          "ゆうみょう",
          "うめい"
        ],
        "answer": 0,
        "explanation": "有名（ゆうめい）= nổi tiếng.",
        "solution": {
          "completed": "有名（ゆうめい）",
          "meaning": "Nổi tiếng.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "有名（ゆうめい）= nổi tiếng.",
            "Thiếu âm う của trường âm ゆう.",
            "名 trong 有名 đọc めい, không phải みょう.",
            "Thiếu âm ゆ đầu từ; 有 đọc ゆう."
          ]
        }
      },
      {
        "id": "c45-3-03",
        "category": "reading",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「暖かい」.",
        "options": [
          "あたかい",
          "あったかいな",
          "あたたがい",
          "あたたかい"
        ],
        "answer": 3,
        "explanation": "暖かい（あたたかい）= ấm áp, thường nói thời tiết.",
        "solution": {
          "completed": "暖かい（あたたかい）",
          "meaning": "Ấm áp, thường nói thời tiết.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "Thiếu một âm た; dạng chuẩn là あたたかい.",
            "あったかい là cách nói khẩu ngữ; lựa chọn còn thêm な sai với tính từ い. Đề hỏi cách đọc chuẩn của 暖かい.",
            "Âm か không đổi thành が trong 暖かい.",
            "暖かい（あたたかい）= ấm áp, thường nói thời tiết."
          ]
        }
      },
      {
        "id": "c45-3-04",
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「恋人」.",
        "options": [
          "れんじん",
          "こびと",
          "こいびと",
          "こいひと"
        ],
        "answer": 2,
        "explanation": "恋人（こいびと）= người yêu.",
        "solution": {
          "completed": "恋人（こいびと）",
          "meaning": "Người yêu.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "恋人 không ghép theo âm On thành れんじん.",
            "こびと thường là 小人, không phải 恋人; từ này có âm い.",
            "恋人（こいびと）= người yêu.",
            "人 trong từ ghép này đọc びと, không phải ひと."
          ]
        }
      },
      {
        "id": "c45-3-05",
        "category": "reading",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「先月」.",
        "options": [
          "さきげつ",
          "せんげつ",
          "せんがつ",
          "せつげん"
        ],
        "answer": 1,
        "explanation": "先月（せんげつ）= tháng trước.",
        "solution": {
          "completed": "先月（せんげつ）",
          "meaning": "Tháng trước.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "先 ở 先月 đọc せん, không dùng さき.",
            "先月（せんげつ）= tháng trước.",
            "月 ở đây đọc げつ, không phải がつ.",
            "Đảo sai thứ tự các âm; cần せん＋げつ."
          ]
        }
      },
      {
        "id": "c45-3-06",
        "category": "reading",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「気持ちがいい」.",
        "options": [
          "きもちがいい",
          "きもちがよいな",
          "けもちがいい",
          "きもじがいい"
        ],
        "answer": 0,
        "explanation": "気持ちがいい（きもちがいい）= cảm giác dễ chịu/sảng khoái.",
        "solution": {
          "completed": "気持ちがいい（きもちがいい）",
          "meaning": "Cảm giác dễ chịu, thoải mái, sảng khoái.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "気持ちがいい（きもちがいい）= cảm giác dễ chịu/sảng khoái.",
            "Đổi いい thành よいな không phải cách đọc nguyên cụm được hỏi; な cũng không nối như vậy.",
            "気 ở đây đọc き, không phải け.",
            "持ち đọc もち, không phải もじ."
          ]
        }
      },
      {
        "id": "c45-3-07",
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Theo mục từ bài 5 trong PDF, chọn cách đọc của「今年」.",
        "options": [
          "こんねん",
          "きょねん",
          "らいねん",
          "ことし"
        ],
        "answer": 3,
        "explanation": "今年 đọc ことし, nghĩa là năm nay.",
        "solution": {
          "completed": "今年（ことし）",
          "meaning": "Năm nay.",
          "rule": "Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.",
          "options": [
            "こんねん cũng là cách đọc có thật, thường trang trọng. Đề yêu cầu đúng cách đọc của mục từ bài 5 trong PDF là ことし, không phủ nhận cách đọc này.",
            "きょねん là 去年, năm ngoái.",
            "らいねん là 来年, năm sau.",
            "今年 đọc ことし, nghĩa là năm nay."
          ]
        }
      },
      {
        "id": "c45-3-08",
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách viết của「まんなか」.",
        "options": [
          "真ん仲",
          "真ん央",
          "真ん中",
          "間ん中"
        ],
        "answer": 2,
        "explanation": "真ん中（まんなか）= chính giữa.",
        "solution": {
          "completed": "真ん中（まんなか）",
          "meaning": "Chính giữa.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "仲 không thay cho 中 trong từ này.",
            "央 không thay cho 中 trong cách viết 真ん中.",
            "真ん中（まんなか）= chính giữa.",
            "Cần 真, không phải 間 trong cách viết 真ん中."
          ]
        }
      },
      {
        "id": "c45-3-09",
        "category": "spelling",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách viết của「やま」.",
        "options": [
          "石",
          "山",
          "川",
          "田"
        ],
        "answer": 1,
        "explanation": "山（やま）= núi.",
        "solution": {
          "completed": "山（やま）",
          "meaning": "Núi.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "石（いし）là đá.",
            "山（やま）= núi.",
            "川（かわ）là sông.",
            "田（た）là ruộng."
          ]
        }
      },
      {
        "id": "c45-3-10",
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách viết của「しゅうまつ」.",
        "options": [
          "週末",
          "週未",
          "周末",
          "週本"
        ],
        "answer": 0,
        "explanation": "週末（しゅうまつ）= cuối tuần.",
        "solution": {
          "completed": "週末（しゅうまつ）",
          "meaning": "Cuối tuần.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "週末（しゅうまつ）= cuối tuần.",
            "末 là cuối, khác 未 là chưa; phải viết 週末.",
            "周 không thay 週 là tuần trong từ 週末.",
            "本 không thay 末 trong từ cuối tuần."
          ]
        }
      },
      {
        "id": "c45-3-11",
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách viết của「こんばん」.",
        "options": [
          "今朝",
          "昨晩",
          "明晩",
          "今晩"
        ],
        "answer": 3,
        "explanation": "今晩（こんばん）= tối nay.",
        "solution": {
          "completed": "今晩（こんばん）",
          "meaning": "Tối nay.",
          "rule": "Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.",
          "options": [
            "今朝（けさ）là sáng nay.",
            "昨晩（さくばん）là tối qua.",
            "明晩（みょうばん）là tối mai.",
            "今晩（こんばん）= tối nay."
          ]
        }
      },
      {
        "id": "c45-3-12",
        "category": "vocabulary",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Từ「低い」có nghĩa nào?",
        "options": [
          "Ít",
          "Nhiều",
          "Thấp",
          "Cao"
        ],
        "answer": 2,
        "explanation": "低い（ひくい）= thấp; 少ない = ít.",
        "solution": {
          "completed": "低い（ひくい）",
          "meaning": "Thấp.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Ít về số lượng là 少ない（すくない）.",
            "Nhiều là 多い（おおい）.",
            "低い（ひくい）= thấp; 少ない = ít.",
            "Cao là 高い（たかい）."
          ]
        }
      },
      {
        "id": "c45-3-13",
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Từ「温かい」nói về món ăn có nghĩa nào?",
        "options": [
          "Đắng",
          "Ấm",
          "Nóng bức",
          "Chua"
        ],
        "answer": 1,
        "explanation": "温かい = ấm khi cảm nhận, dùng cho đồ ăn/nước; 暖かい thường dùng cho khí hậu.",
        "solution": {
          "completed": "温かい（あたたかい）",
          "meaning": "Ấm khi cảm nhận đồ ăn, đồ uống hoặc đồ vật.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "Đắng là 苦い（にがい）.",
            "温かい = ấm khi cảm nhận, dùng cho đồ ăn/nước; 暖かい thường dùng cho khí hậu.",
            "Nóng bức về thời tiết là 暑い; không phải nhiệt độ ấm của món ăn.",
            "Chua là すっぱい."
          ]
        }
      },
      {
        "id": "c45-3-14",
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Từ「絵」có nghĩa nào?",
        "options": [
          "Tranh",
          "Phong cảnh",
          "Ảnh chụp",
          "Máy ảnh"
        ],
        "answer": 0,
        "explanation": "絵（え）= tranh; 写真 là ảnh chụp; 景色 là phong cảnh.",
        "solution": {
          "completed": "絵（え）",
          "meaning": "Tranh, hình vẽ.",
          "rule": "Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.",
          "options": [
            "絵（え）= tranh; 写真 là ảnh chụp; 景色 là phong cảnh.",
            "Phong cảnh là 景色（けしき）.",
            "Ảnh chụp là 写真（しゃしん）, khác tranh vẽ 絵.",
            "Máy ảnh là カメラ."
          ]
        }
      },
      {
        "id": "c45-3-15",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-location",
        "prompt": "この町は国（　）真ん中です。",
        "options": [
          "で",
          "が",
          "を",
          "の"
        ],
        "answer": 3,
        "explanation": "国の真ん中 = chính giữa đất nước.",
        "solution": {
          "completed": "この町は国の真ん中です。",
          "meaning": "Thị trấn này ở chính giữa đất nước.",
          "rule": "Địa danh は quốc gia の phương hướng です. の nối quốc gia với 北・南・東・西・真ん中 để tạo cụm chỉ vị trí. Đây không phải nơi diễn ra hành động nên không thay の bằng で.",
          "options": [
            "で không nối danh từ quốc gia với vị trí bên trong.",
            "が không tạo cụm danh từ 国の真ん中.",
            "を đánh dấu đối tượng của động từ, không phù hợp câu vị trí với です.",
            "国の真ん中 = chính giữa đất nước."
          ]
        }
      },
      {
        "id": "c45-3-16",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "A：空港から町まで（　）ですか。\nB：車で一時間半です。",
        "options": [
          "何を",
          "だれと",
          "どのくらい",
          "どんな"
        ],
        "answer": 2,
        "explanation": "どのくらい hỏi thời lượng; 一時間半 = một tiếng rưỡi.",
        "solution": {
          "completed": "A：空港から町までどのくらいですか。 B：車で一時間半です。",
          "meaning": "Từ sân bay đến thị trấn mất bao lâu? — Đi ô tô mất một tiếng rưỡi.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "何を hỏi làm gì với đối tượng nào, không khớp thời lượng.",
            "だれと hỏi cùng ai, không khớp 一時間半.",
            "どのくらい hỏi thời lượng; 一時間半 = một tiếng rưỡi.",
            "どんな hỏi loại/đặc điểm, không hỏi thời lượng."
          ]
        }
      },
      {
        "id": "c45-3-17",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-adjective",
        "prompt": "この神社は（　）です。Chọn dạng đúng của 有名.",
        "options": [
          "有名く",
          "有名",
          "有名な",
          "有名い"
        ],
        "answer": 1,
        "explanation": "有名 là tính từ な; câu miêu tả dùng 有名です.",
        "solution": {
          "completed": "この神社は有名です。",
          "meaning": "Ngôi đền này nổi tiếng.",
          "rule": "Tính từ い giữ nguyên đuôi trước です. Tính từ な bỏ な khi kết thúc câu với です; chỉ thêm な khi bổ nghĩa danh từ. 静か・有名・きれい thuộc nhóm な, kể cả khi きれい có âm cuối い.",
          "options": [
            "有名く không phải dạng khẳng định chuẩn.",
            "有名 là tính từ な; câu miêu tả dùng 有名です.",
            "有名な cần có danh từ theo sau, không ghép なです.",
            "有名 là tính từ な, không thêm い."
          ]
        }
      },
      {
        "id": "c45-3-18",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "ここの天気はいいですか。いいえ、（　）です。",
        "options": [
          "よくない",
          "いくない",
          "いいじゃない",
          "よかった"
        ],
        "answer": 0,
        "explanation": "Ngoại lệ いい có gốc よ: よくない.",
        "solution": {
          "completed": "ここの天気はいいですか。いいえ、よくないです。",
          "meaning": "Thời tiết ở đây đẹp không? — Không, không đẹp.",
          "rule": "Phủ định tính từ い: bỏ い rồi thêm くないです. Tính từ な dùng じゃありません hoặc ではありません. Ngoại lệ いい dùng gốc よ: よくないです. Chọn dạng phủ định phù hợp với lời đáp いいえ.",
          "options": [
            "Ngoại lệ いい có gốc よ: よくない.",
            "いい là ngoại lệ dùng gốc よ, không tạo いくない.",
            "Không dùng いいじゃない để diễn đạt phủ định cơ bản trong mẫu này.",
            "よかった là đã tốt/đẹp, không phải hiện tại phủ định."
          ]
        }
      },
      {
        "id": "c45-3-19",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "A：ここは（　）ところですか。\nB：静かなところです。",
        "options": [
          "どのくらい",
          "だれと",
          "いつ",
          "どんな"
        ],
        "answer": 3,
        "explanation": "どんなところ hỏi nơi có đặc điểm thế nào.",
        "solution": {
          "completed": "A：ここはどんなところですか。 B：静かなところです。",
          "meaning": "Đây là nơi như thế nào? — Là một nơi yên tĩnh.",
          "rule": "Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.",
          "options": [
            "どのくらい hỏi mức độ/thời lượng, không hỏi đặc điểm một nơi.",
            "だれと hỏi cùng ai.",
            "いつ hỏi khi nào, không phù hợp với 静かなところ.",
            "どんなところ hỏi nơi có đặc điểm thế nào."
          ]
        }
      },
      {
        "id": "c45-3-20",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-existence",
        "prompt": "A：この町に何がありますか。\nB：古いお城（　）あります。",
        "options": [
          "を",
          "まで",
          "が",
          "で"
        ],
        "answer": 2,
        "explanation": "Có một lâu đài cổ: 古いお城があります.",
        "solution": {
          "completed": "A：この町に何がありますか。 B：古いお城があります。",
          "meaning": "Thị trấn này có gì? — Có một lâu đài cổ.",
          "rule": "Mẫu giới thiệu sự vật tồn tại: địa điểm に + sự vật が + あります. に đánh dấu nơi tồn tại, が đánh dấu sự vật. で dùng cho nơi diễn ra hành động hoặc sự kiện, không thay に trong câu tồn tại cơ bản này.",
          "options": [
            "を dùng cho tân ngữ hành động, không dùng với あります ở đây.",
            "まで chỉ điểm kết thúc, không đánh dấu sự vật.",
            "Có một lâu đài cổ: 古いお城があります.",
            "で không đánh dấu lâu đài là sự vật tồn tại."
          ]
        }
      },
      {
        "id": "c45-3-21",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Chọn “nhưng”: この料理は辛いです（　）、おいしいです。",
        "options": [
          "の",
          "が",
          "に",
          "を"
        ],
        "answer": 1,
        "explanation": "Giữ dạng lịch sự 辛いです trước từ nối が.",
        "solution": {
          "completed": "この料理は辛いですが、おいしいです。",
          "meaning": "Món này cay nhưng ngon.",
          "rule": "そして nối thêm thông tin cùng chiều; が sau một mệnh đề lịch sự nêu ý tương phản. Trong Aですが、Bです, giữ です trước が. が nối mệnh đề ở đây khác が đánh dấu sự vật trong あります.",
          "options": [
            "の không thay từ nối が sau です.",
            "Giữ dạng lịch sự 辛いです trước từ nối が.",
            "に không nối hai mệnh đề tương phản.",
            "を không nối sau です để nói nhưng."
          ]
        }
      },
      {
        "id": "c45-3-22",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn “hơi”: このコーヒーは（　）苦いです。",
        "options": [
          "少し",
          "あまり",
          "どんな",
          "何時"
        ],
        "answer": 0,
        "explanation": "少し = hơi/một chút; あまり cần dạng phủ định.",
        "solution": {
          "completed": "このコーヒーは少し苦いです。",
          "meaning": "Cà phê này hơi đắng.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "少し = hơi/một chút; あまり cần dạng phủ định.",
            "あまり nghĩa không…lắm và cần phủ định, không đồng nghĩa hơi.",
            "どんな không diễn đạt mức độ hơi.",
            "何時 hỏi mấy giờ, không chỉ mức độ đắng."
          ]
        }
      },
      {
        "id": "c45-3-23",
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-ne",
        "prompt": "Cùng ăn món ngon: おいしいです（　）。Chọn đuôi “nhỉ”.",
        "options": [
          "に",
          "で",
          "が",
          "ね"
        ],
        "answer": 3,
        "explanation": "です + ね thể hiện tìm sự đồng tình.",
        "solution": {
          "completed": "おいしいですね。",
          "meaning": "Ngon nhỉ.",
          "rule": "ね đứng sau câu để chia sẻ cảm nhận hoặc tìm sự đồng tình về điều người nói và người nghe cùng nhận thấy. Tiếng Việt thường dịch là “nhỉ/nhé”. Nó không thay cho trợ từ đứng sau danh từ.",
          "options": [
            "に không tạo đuôi đồng tình sau です.",
            "で không dùng làm đuôi nhỉ.",
            "が có thể nối mệnh đề tương phản nhưng không phải đuôi “nhỉ” được hỏi.",
            "です + ね thể hiện tìm sự đồng tình."
          ]
        }
      },
      {
        "id": "c45-3-24",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "おととい、美術館へ（　）。Chọn “đã đi”.",
        "options": [
          "行きません",
          "行くでした",
          "行きました",
          "行きます"
        ],
        "answer": 2,
        "explanation": "おととい = hôm kia; cần 行きました.",
        "solution": {
          "completed": "おととい、美術館へ行きました。",
          "meaning": "Hôm kia tôi đã đi bảo tàng mỹ thuật.",
          "rule": "Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.",
          "options": [
            "行きません là phủ định hiện tại, không phải đã đi.",
            "行くでした không phải dạng quá khứ lịch sự chuẩn của 行く.",
            "おととい = hôm kia; cần 行きました.",
            "行きます chưa diễn đạt việc đã xảy ra."
          ]
        }
      },
      {
        "id": "c45-3-25",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn “sau đó”: 昨日、洗濯しました。（　）、ゲームをしました。",
        "options": [
          "だれと",
          "それから",
          "どうして",
          "どんな"
        ],
        "answer": 1,
        "explanation": "それから chỉ trình tự làm việc tiếp theo.",
        "solution": {
          "completed": "昨日、洗濯しました。それから、ゲームをしました。",
          "meaning": "Hôm qua tôi đã giặt đồ. Sau đó tôi đã chơi trò chơi.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "だれと hỏi cùng ai, không phải từ nối thứ tự.",
            "それから chỉ trình tự làm việc tiếp theo.",
            "どうして hỏi lý do, không nối trình tự các việc.",
            "どんな hỏi đặc điểm/loại, không có nghĩa sau đó."
          ]
        }
      },
      {
        "id": "c45-3-26",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "A：週末、どこかへ行きましたか。\nB：いいえ、どこへも（　）。",
        "options": [
          "行きませんでした",
          "行きました",
          "行きます",
          "行きますでした"
        ],
        "answer": 0,
        "explanation": "いいえ và どこへも yêu cầu phủ định; câu đang nói cuối tuần đã qua.",
        "solution": {
          "completed": "A：週末、どこかへ行きましたか。 B：いいえ、どこへも行きませんでした。",
          "meaning": "Cuối tuần bạn có đi đâu không? — Không, tôi đã không đi đâu cả.",
          "rule": "どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.",
          "options": [
            "いいえ và どこへも yêu cầu phủ định; câu đang nói cuối tuần đã qua.",
            "行きました là khẳng định, trái với いいえ、どこへも.",
            "行きます là khẳng định hiện tại/tương lai, sai cả thời lẫn phủ định.",
            "行きますでした là cách chia sai; cần 行きませんでした."
          ]
        }
      },
      {
        "id": "c45-3-27",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "去年の冬の天気は（　）です。Chọn quá khứ của いい.",
        "options": [
          "いいでした",
          "いかった",
          "よいでした",
          "よかった"
        ],
        "answer": 3,
        "explanation": "いい → よかった; không phải いかった.",
        "solution": {
          "completed": "去年の冬の天気はよかったです。",
          "meaning": "Thời tiết mùa đông năm ngoái đã đẹp.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "Không thêm でした trực tiếp sau いい.",
            "いい là ngoại lệ dùng gốc よ, không tạo いかった.",
            "よい vẫn là tính từ い; quá khứ là よかった, không phải よいでした.",
            "いい → よかった; không phải いかった."
          ]
        }
      },
      {
        "id": "c45-3-28",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "先週のテストは（　）。Chọn “đã đơn giản”.",
        "options": [
          "簡単なでした",
          "簡単いです",
          "簡単でした",
          "簡単かったです"
        ],
        "answer": 2,
        "explanation": "簡単 là tính từ な; dạng quá khứ là 簡単でした.",
        "solution": {
          "completed": "先週のテストは簡単でした。",
          "meaning": "Bài kiểm tra tuần trước đã đơn giản.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "な không đứng ngay trước でした khi kết thúc câu.",
            "簡単い không phải dạng từ chuẩn và chưa có quá khứ.",
            "簡単 là tính từ な; dạng quá khứ là 簡単でした.",
            "簡単 thuộc nhóm な, không dùng かった."
          ]
        }
      },
      {
        "id": "c45-3-29",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "忙しかったです（　）、恋人に会いませんでした。Chọn “vì”.",
        "options": [
          "を",
          "から",
          "まで",
          "の"
        ],
        "answer": 1,
        "explanation": "忙しかったですから = vì đã bận.",
        "solution": {
          "completed": "忙しかったですから、恋人に会いませんでした。",
          "meaning": "Vì đã bận nên tôi đã không gặp người yêu.",
          "rule": "どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.",
          "options": [
            "を không nối mệnh đề lý do với kết quả.",
            "忙しかったですから = vì đã bận.",
            "まで không nối hai mệnh đề để nêu nguyên nhân.",
            "の không thay từ nối lý do から sau です."
          ]
        }
      },
      {
        "id": "c45-3-30",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "私は車が（　）です。Chọn “không muốn có”.",
        "options": [
          "ほしくない",
          "ほしいじゃない",
          "ほしくません",
          "ほしいくない"
        ],
        "answer": 0,
        "explanation": "ほしい chia như tính từ い: ほしくない.",
        "solution": {
          "completed": "私は車がほしくないです。",
          "meaning": "Tôi không muốn có ô tô.",
          "rule": "Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.",
          "options": [
            "ほしい chia như tính từ い: ほしくない.",
            "ほしい chia như tính từ い, không dùng ほしいじゃない trong mẫu cơ bản này.",
            "ほしくません không phải dạng phủ định chuẩn.",
            "Phải bỏ い trước くない, không tạo ほしいくない."
          ]
        }
      },
      {
        "id": "c45-3-31",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "Chọn “ghét”: 私は苦いコーヒーが（　）です。",
        "options": [
          "ほしい",
          "安い",
          "忙しい",
          "嫌い"
        ],
        "answer": 3,
        "explanation": "嫌い = ghét; đây là tính từ な dù kết thúc bằng い.",
        "solution": {
          "completed": "私は苦いコーヒーが嫌いです。",
          "meaning": "Tôi ghét cà phê đắng.",
          "rule": "Nが好きです／嫌いです nói thích/ghét N. 好き・嫌い là tính từ な; phủ định dùng じゃありません, không bỏ い của 嫌い. あまり好きじゃありません nghĩa là không thích lắm.",
          "options": [
            "ほしい là muốn có, không phải ghét.",
            "安い là rẻ, không diễn đạt thái độ ghét.",
            "忙しい là bận rộn, không có nghĩa ghét.",
            "嫌い = ghét; đây là tính từ な dù kết thúc bằng い."
          ]
        }
      },
      {
        "id": "c45-3-32",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Chọn “không muốn xem”: 今晩はテレビを（　）です。",
        "options": [
          "見たいじゃない",
          "見ますたくない",
          "見たくない",
          "見たいくない"
        ],
        "answer": 2,
        "explanation": "たい chia phủ định thành たくない.",
        "solution": {
          "completed": "今晩はテレビを見たくないです。",
          "meaning": "Tối nay tôi không muốn xem ti vi.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "たい chia như tính từ い, không dùng たいじゃない ở mẫu này.",
            "Phải dùng gốc 見 rồi たくない, không giữ ます.",
            "たい chia phủ định thành たくない.",
            "たい chuyển thành たくない, không giữ い trước くない."
          ]
        }
      },
      {
        "id": "c45-3-33",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "友達に（　）町へ行きます。Chọn “để gặp”.",
        "options": [
          "会いを",
          "会いに",
          "会いますに",
          "会うに"
        ],
        "answer": 1,
        "explanation": "会います → 会いに; 友達に会いに行く.",
        "solution": {
          "completed": "友達に会いに町へ行きます。",
          "meaning": "Tôi đến thị trấn để gặp bạn.",
          "rule": "Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.",
          "options": [
            "を không thay に để nối mục đích với 行く.",
            "会います → 会いに; 友達に会いに行く.",
            "Không giữ ます khi tạo gốc mục đích 会いに.",
            "会う là thể từ điển, không phải gốc dùng trước に ở mẫu này."
          ]
        }
      },
      {
        "id": "c45-3-34",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn “từ ga đến lâu đài”: 駅（　）お城（　）歩いて二十分です。",
        "options": [
          "で・が",
          "から・まで",
          "まで・から",
          "に・を"
        ],
        "answer": 1,
        "explanation": "から chỉ điểm xuất phát; まで chỉ điểm kết thúc.",
        "solution": {
          "completed": "駅からお城まで歩いて二十分です。",
          "meaning": "Từ ga đến lâu đài, đi bộ mất hai mươi phút.",
          "rule": "AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.",
          "options": [
            "で・が không đánh dấu hai đầu hành trình.",
            "から chỉ điểm xuất phát; まで chỉ điểm kết thúc.",
            "まで・から đảo điểm xuất phát và kết thúc.",
            "に・を không tạo cặp từ…đến… trong câu thời lượng."
          ]
        }
      },
      {
        "id": "c45-3-35",
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "この町に（　）川があります。Chọn “con sông lớn”.",
        "options": [
          "大きい",
          "大きいな",
          "大きく",
          "大きいの"
        ],
        "answer": 0,
        "explanation": "大きい đứng trực tiếp trước danh từ 川.",
        "solution": {
          "completed": "この町に大きい川があります。",
          "meaning": "Ở thị trấn này có một con sông lớn.",
          "rule": "Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.",
          "options": [
            "大きい đứng trực tiếp trước danh từ 川.",
            "大きい là tính từ い, không thêm な.",
            "大きく không bổ nghĩa trực tiếp cho danh từ 川 ở mẫu này.",
            "Không chen の giữa 大きい và 川."
          ]
        }
      },
      {
        "id": "c45-3-36",
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "今朝、恋人に（　）。Chọn “đã gặp”.",
        "options": [
          "会います",
          "会いません",
          "会うでした",
          "会いました"
        ],
        "answer": 3,
        "explanation": "今朝 ở đây là buổi sáng đã qua; 会いました là đã gặp.",
        "solution": {
          "completed": "今朝、恋人に会いました。",
          "meaning": "Sáng nay tôi đã gặp người yêu.",
          "rule": "Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.",
          "options": [
            "会います chưa thể hiện việc đã gặp.",
            "会いません là không/sẽ không gặp, sai cả nghĩa và thời.",
            "会うでした không phải cách chia quá khứ chuẩn.",
            "今朝 ở đây là buổi sáng đã qua; 会いました là đã gặp."
          ]
        }
      },
      {
        "id": "c45-3-37",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "昨日の山は（　）です。Chọn quá khứ của 寒い.",
        "options": [
          "寒くでした",
          "寒いなでした",
          "寒かった",
          "寒いでした"
        ],
        "answer": 2,
        "explanation": "寒い bỏ い + かった → 寒かった.",
        "solution": {
          "completed": "昨日の山は寒かったです。",
          "meaning": "Trên núi hôm qua đã lạnh.",
          "rule": "Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.",
          "options": [
            "寒く không dùng với でした để chia quá khứ ở đây.",
            "寒い là tính từ い nên không thêm な.",
            "寒い bỏ い + かった → 寒かった.",
            "Không ghép でした trực tiếp sau 寒い."
          ]
        }
      },
      {
        "id": "c45-3-38",
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "先月の仕事は（　）。Chọn “đã không đơn giản”.",
        "options": [
          "簡単じゃありません",
          "簡単じゃありませんでした",
          "簡単くなかったです",
          "簡単なかったです"
        ],
        "answer": 1,
        "explanation": "簡単 là tính từ な; phủ định quá khứ dùng じゃありませんでした.",
        "solution": {
          "completed": "先月の仕事は簡単じゃありませんでした。",
          "meaning": "Công việc tháng trước đã không đơn giản.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "じゃありません thiếu quá khứ でした.",
            "簡単 là tính từ な; phủ định quá khứ dùng じゃありませんでした.",
            "簡単 thuộc nhóm な, không chia bằng くなかった.",
            "簡単なかった không phải dạng phủ định quá khứ chuẩn."
          ]
        }
      },
      {
        "id": "c45-3-39",
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "Chọn phủ định đúng của 嫌いです：嫌い（　）。",
        "options": [
          "じゃありません",
          "くないです",
          "いくないです",
          "なかったです"
        ],
        "answer": 0,
        "explanation": "嫌い là tính từ な; không bỏ đuôi い khi phủ định.",
        "solution": {
          "completed": "嫌いじゃありません。",
          "meaning": "Không ghét.",
          "rule": "Nが好きです／嫌いです nói thích/ghét N. 好き・嫌い là tính từ な; phủ định dùng じゃありません, không bỏ い của 嫌い. あまり好きじゃありません nghĩa là không thích lắm.",
          "options": [
            "嫌い là tính từ な; không bỏ đuôi い khi phủ định.",
            "嫌い thuộc nhóm な nên không dùng くない.",
            "Không thêm いくない sau 嫌い.",
            "なかった không gắn trực tiếp vào 嫌い theo cách chia này."
          ]
        }
      },
      {
        "id": "c45-3-40",
        "category": "dialogue",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "A：この料理はどうですか。\nB：（　）。Chọn “không ngọt lắm”.",
        "options": [
          "とても甘いです",
          "あまり甘いです",
          "甘いくないです",
          "あまり甘くないです"
        ],
        "answer": 3,
        "explanation": "あまり甘くない = không ngọt lắm.",
        "solution": {
          "completed": "A：この料理はどうですか。 B：あまり甘くないです。",
          "meaning": "Món này thế nào? — Không ngọt lắm.",
          "rule": "とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).",
          "options": [
            "とても甘い là rất ngọt, trái nghĩa yêu cầu.",
            "あまり cần phủ định trong mẫu không…lắm.",
            "Cần bỏ い trước くない; 甘いくない là sai.",
            "あまり甘くない = không ngọt lắm."
          ]
        }
      },
      {
        "id": "c45-3-41",
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "A：先週の仕事はどうでしたか。\nB：（　）。Chọn “đã vất vả”.",
        "options": [
          "大変かったです",
          "大変なです",
          "大変でした",
          "大変です"
        ],
        "answer": 2,
        "explanation": "どうでしたか hỏi cảm nhận quá khứ; 大変でした là quá khứ tính từ な.",
        "solution": {
          "completed": "A：先週の仕事はどうでしたか。 B：大変でした。",
          "meaning": "Công việc tuần trước thế nào? — Đã vất vả.",
          "rule": "Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.",
          "options": [
            "大変 là tính từ な, không chia bằng かった.",
            "な không đứng trước です khi kết thúc câu, và chưa có quá khứ.",
            "どうでしたか hỏi cảm nhận quá khứ; 大変でした là quá khứ tính từ な.",
            "大変です là hiện tại, không đáp đúng thời quá khứ."
          ]
        }
      },
      {
        "id": "c45-3-42",
        "category": "dialogue",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "A：来年、何をしたいですか。\nB：（　）。Chọn “muốn leo núi”.",
        "options": [
          "山に登りにです",
          "山に登りたいです",
          "山に登るたいです",
          "山に登りますたいです"
        ],
        "answer": 1,
        "explanation": "登ります bỏ ます + たい → 登りたい.",
        "solution": {
          "completed": "A：来年、何をしたいですか。 B：山に登りたいです。",
          "meaning": "Năm sau bạn muốn làm gì? — Tôi muốn leo núi.",
          "rule": "Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.",
          "options": [
            "登りに chỉ mục đích đi, không kết thúc mong muốn bằng にです.",
            "登ります bỏ ます + たい → 登りたい.",
            "登る là thể từ điển; cần gốc 登り trước たい.",
            "Phải bỏ ます trước たい."
          ]
        }
      },
      {
        "id": "c45-3-43",
        "category": "translation",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-existence",
        "prompt": "Dịch: Ở thị trấn này có một nhà thờ cổ.",
        "options": [
          "この町に古い教会があります。",
          "この町で古い教会をあります。",
          "この町に新しい教会があります。",
          "この町に古い教会がありません。"
        ],
        "answer": 0,
        "explanation": "Nơi tồn tại に; sự vật が; 古い = cổ/cũ.",
        "solution": {
          "completed": "この町に古い教会があります。",
          "meaning": "Ở thị trấn này có một nhà thờ cổ.",
          "rule": "Mẫu giới thiệu sự vật tồn tại: địa điểm に + sự vật が + あります. に đánh dấu nơi tồn tại, が đánh dấu sự vật. で dùng cho nơi diễn ra hành động hoặc sự kiện, không thay に trong câu tồn tại cơ bản này.",
          "options": [
            "Nơi tồn tại に; sự vật が; 古い = cổ/cũ.",
            "Nơi tồn tại dùng に, sự vật dùng が; で・を không đúng mẫu này.",
            "新しい là mới, trái với cổ/cũ 古い.",
            "ありません phủ định sự tồn tại, trái với câu có nhà thờ."
          ]
        }
      },
      {
        "id": "c45-3-44",
        "category": "translation",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Dịch: Hôm qua tôi đã giặt đồ. Sau đó, tôi đã chơi trò chơi.",
        "options": [
          "明日、洗濯します。それから、ゲームをします。",
          "昨日、掃除しました。それから、ゲームをしました。",
          "昨日、洗濯しました。どうして、ゲームをしました。",
          "昨日、洗濯しました。それから、ゲームをしました。"
        ],
        "answer": 3,
        "explanation": "洗濯 = giặt đồ; それから = sau đó; cả hai việc đều ở quá khứ.",
        "solution": {
          "completed": "昨日、洗濯しました。それから、ゲームをしました。",
          "meaning": "Hôm qua tôi đã giặt đồ. Sau đó, tôi đã chơi trò chơi.",
          "rule": "Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.",
          "options": [
            "明日 và dạng します nói kế hoạch ngày mai, không kể việc hôm qua.",
            "掃除 là dọn dẹp, khác 洗濯 là giặt đồ.",
            "どうして hỏi tại sao, không nối trình tự như それから.",
            "洗濯 = giặt đồ; それから = sau đó; cả hai việc đều ở quá khứ."
          ]
        }
      },
      {
        "id": "c45-3-45",
        "category": "translation",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "Dịch: Tôi muốn có một chiếc máy ảnh mới.",
        "options": [
          "私は新しいカメラがほしくないです。",
          "私は新しいカメラが行きたいです。",
          "私は新しいカメラがほしいです。",
          "私は古いカメラがほしいです。"
        ],
        "answer": 2,
        "explanation": "新しい = mới; Nがほしいです = muốn có N.",
        "solution": {
          "completed": "私は新しいカメラがほしいです。",
          "meaning": "Tôi muốn có một chiếc máy ảnh mới.",
          "rule": "Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.",
          "options": [
            "ほしくない là không muốn có, trái với mong muốn khẳng định.",
            "行きたい là muốn đi, không nói muốn sở hữu máy ảnh.",
            "新しい = mới; Nがほしいです = muốn có N.",
            "古い là cũ, trái với mới 新しい."
          ]
        }
      }
    ],
    "legacyFingerprints": [
      "ce1662f2"
    ],
    "contentVersion": "2026-10-22"
  },
  {
    "id": "chapter67-1",
    "title": "Bài 6–7 · Đề 01",
    "description": "Rủ bạn chơi thể thao, so sánh địa điểm và hẹn giờ; tìm nhà bạn, cùng chuẩn bị và giúp việc trong buổi gặp mặt. 45 câu mới theo ma trận đề mẫu, đủ 18 mục ngữ pháp và 6 chủ đề bài 6–7.",
    "lessons": [
      6,
      7
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Trong lịch thể thao, chọn cách đọc của「試合」.",
        "options": [
          "しやい",
          "じあい",
          "しあう",
          "しあい"
        ],
        "answer": 3,
        "explanation": "試合 đọc しあい: 試 là し, 合 là あい trong từ này.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "試合（しあい）",
          "meaning": "Trận đấu.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "Không có âm や giữa し và あい; phải đọc しあい.",
            "Âm đầu là し, không đổi thành âm đục じ.",
            "Đuôi của danh từ 試合 là あい, không phải あう.",
            "試合 đọc しあい: 試 là し, 合 là あい trong từ này."
          ]
        },
        "id": "c67-1-01"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Trong danh sách đồ đi bơi,「水着」đọc thế nào?",
        "options": [
          "すいぎ",
          "みつぎ",
          "みずぎ",
          "みずき"
        ],
        "answer": 2,
        "explanation": "Mục từ 水着 đọc みずぎ; âm cuối ぎ có dấu đục.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "水着（みずぎ）",
          "meaning": "Đồ bơi.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "Không dùng âm すい của 水 để ghép thành すいぎ.",
            "水 đọc みず trong từ này; つ không thay cho ず.",
            "Mục từ 水着 đọc みずぎ; âm cuối ぎ có dấu đục.",
            "着 trong từ này đọc ぎ, không phải き."
          ]
        },
        "id": "c67-1-02"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Phương tiện đến điểm hẹn là「地下鉄」. Chọn cách đọc.",
        "options": [
          "ちかでつ",
          "ちかてつ",
          "ちがてつ",
          "じかてつ"
        ],
        "answer": 1,
        "explanation": "地下鉄 gồm ちか và てつ; không có âm đục ở hai phần này.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "地下鉄（ちかてつ）",
          "meaning": "Tàu điện ngầm.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "鉄 đọc てつ, không đổi thành でつ.",
            "地下鉄 gồm ちか và てつ; không có âm đục ở hai phần này.",
            "下 ở đây đọc か, không phải が.",
            "地 trong từ này đọc ち, không phải じ."
          ]
        },
        "id": "c67-1-03"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Trên sơ đồ nhà bạn, chữ「隣」có cách đọc nào?",
        "options": [
          "となり",
          "どなり",
          "となる",
          "とおり"
        ],
        "answer": 0,
        "explanation": "Danh từ vị trí 隣 đọc となり, gồm ba âm と・な・り.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "隣（となり）",
          "meaning": "Bên cạnh, sát bên.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "Danh từ vị trí 隣 đọc となり, gồm ba âm と・な・り.",
            "Âm đầu と không có dấu đục, nên không đọc どなり.",
            "Âm cuối là り; となる không phải cách đọc của 隣.",
            "とおり là cách đọc của từ khác như 通り, không phải 隣."
          ]
        },
        "id": "c67-1-04"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Đồ uống được cất trong「冷蔵庫」. Chọn âm đọc.",
        "options": [
          "れいそうこ",
          "れぞうこ",
          "れいぞうご",
          "れいぞうこ"
        ],
        "answer": 3,
        "explanation": "冷蔵庫 đọc れいぞうこ; giữ đủ れい và ぞう.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "冷蔵庫（れいぞうこ）",
          "meaning": "Tủ lạnh.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "蔵 trong từ này đọc ぞう có dấu đục, không phải そう.",
            "Thiếu い của phần れい; cách đọc đầy đủ là れいぞうこ.",
            "庫 đọc こ, không đổi thành ご trong từ này.",
            "冷蔵庫 đọc れいぞうこ; giữ đủ れい và ぞう."
          ]
        },
        "id": "c67-1-05"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Khi tìm bạn đang nấu ăn, chọn cách đọc của「台所」.",
        "options": [
          "だいところ",
          "だいどこる",
          "だいどころ",
          "たいどころ"
        ],
        "answer": 2,
        "explanation": "台所 đọc だいどころ; cả だ và ど đều có dấu đục.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "台所（だいどころ）",
          "meaning": "Nhà bếp.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "Phần 所 trong từ ghép là どころ, không phải ところ.",
            "Âm cuối là ろ; không đổi thành る.",
            "台所 đọc だいどころ; cả だ và ど đều có dấu đục.",
            "台 trong từ này đọc だい, không phải たい."
          ]
        },
        "id": "c67-1-06"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Viết bằng Hán tự từ「やくそく」với nghĩa “cuộc hẹn, lời hứa”.",
        "options": [
          "約東",
          "約束",
          "用事",
          "予約"
        ],
        "answer": 1,
        "explanation": "約束 là mục từ やくそく; 束 là chữ thứ hai của từ này.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "約束（やくそく）",
          "meaning": "Cuộc hẹn, lời hứa.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "Chữ thứ hai phải là 束; 東 không tạo từ 約束.",
            "約束 là mục từ やくそく; 束 là chữ thứ hai của từ này.",
            "用事 đọc ようじ, nghĩa là việc bận.",
            "予約 đọc よやく, nghĩa là đặt trước; khác từ được hỏi."
          ]
        },
        "id": "c67-1-07"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Trên bản đồ đến nhà bạn,「こうばん」(đồn cảnh sát nhỏ) viết thế nào?",
        "options": [
          "交番",
          "交反",
          "校番",
          "交通"
        ],
        "answer": 0,
        "explanation": "交番 viết bằng 交 và 番, đọc こうばん.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "交番（こうばん）",
          "meaning": "Đồn cảnh sát, chốt cảnh sát.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "交番 viết bằng 交 và 番, đọc こうばん.",
            "反 không thay cho 番 trong từ chỉ đồn cảnh sát.",
            "Chữ đầu là 交; 校 dùng trong những từ như 学校.",
            "交通 đọc こうつう và nói về giao thông, không phải đồn cảnh sát."
          ]
        },
        "id": "c67-1-08"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách viết「さとう」, loại gia vị ngọt dùng trong bếp.",
        "options": [
          "砂唐",
          "佐糖",
          "塩",
          "砂糖"
        ],
        "answer": 3,
        "explanation": "Đường ăn là 砂糖, đọc さとう; cần đúng cả hai chữ.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "砂糖（さとう）",
          "meaning": "Đường ăn.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "Chữ thứ hai phải là 糖, không phải 唐.",
            "佐 không thay cho 砂 trong từ 砂糖.",
            "塩 đọc しお và nghĩa là muối, khác gia vị ngọt.",
            "Đường ăn là 砂糖, đọc さとう; cần đúng cả hai chữ."
          ]
        },
        "id": "c67-1-09"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Để nói “cửa sổ”,「まど」viết bằng chữ Hán nào?",
        "options": [
          "門",
          "戸",
          "窓",
          "空"
        ],
        "answer": 2,
        "explanation": "窓 là chữ của まど, chỉ cửa sổ của căn phòng.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "窓（まど）",
          "meaning": "Cửa sổ.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "門 đọc もん trong nghĩa cổng, khác 窓.",
            "戸 đọc と trong nghĩa cửa, không phải mục từ まど.",
            "窓 là chữ của まど, chỉ cửa sổ của căn phòng.",
            "空 có thể chỉ bầu trời hoặc sự trống, không phải cửa sổ."
          ]
        },
        "id": "c67-1-10"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ của「ちず」, vật dùng xem đường đến sân thi đấu.",
        "options": [
          "図地",
          "地図",
          "池図",
          "地国"
        ],
        "answer": 1,
        "explanation": "地図 đọc ちず, gồm 地 trước và 図 sau.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "地図（ちず）",
          "meaning": "Bản đồ.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "Thứ tự chữ bị đảo; bản đồ viết 地図.",
            "地図 đọc ちず, gồm 地 trước và 図 sau.",
            "池 không thay cho 地 trong từ bản đồ.",
            "Chữ thứ hai là 図; 国 không tạo từ 地図."
          ]
        },
        "id": "c67-1-11"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Trong danh sách môn thể thao,「やきゅう」(bóng chày) viết thế nào?",
        "options": [
          "野球",
          "野求",
          "夜球",
          "野玉"
        ],
        "answer": 0,
        "explanation": "野球 là cách viết chuẩn của やきゅう.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "野球（やきゅう）",
          "meaning": "Bóng chày.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "野球 là cách viết chuẩn của やきゅう.",
            "求 không thay cho 球 trong tên môn bóng chày.",
            "Chữ đầu là 野; 夜 có nghĩa đêm và không tạo từ này.",
            "Cần chữ 球 trong 野球; 玉 không thay thế ở mục từ này."
          ]
        },
        "id": "c67-1-12"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Bạn hỏi cách đọc chữ Nhật:「かんじ」(chữ Hán) viết thế nào?",
        "options": [
          "漢宇",
          "感じ",
          "幹字",
          "漢字"
        ],
        "answer": 3,
        "explanation": "漢字 là cách viết từ かんじ khi nghĩa là chữ Hán.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "漢字（かんじ）",
          "meaning": "Chữ Hán.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "字 là chữ viết; 宇 không thay được chữ này.",
            "感じ cũng đọc かんじ nhưng nghĩa là cảm giác, khác nghĩa được yêu cầu.",
            "幹 không thay cho 漢 trong tên gọi chữ Hán.",
            "漢字 là cách viết từ かんじ khi nghĩa là chữ Hán."
          ]
        },
        "id": "c67-1-13"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Muốn ghi từ「でんわ」với nghĩa “điện thoại”, chọn cách viết.",
        "options": [
          "電活",
          "電車",
          "電話",
          "電語"
        ],
        "answer": 2,
        "explanation": "電話 đọc でんわ, gồm 電 và 話.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "電話（でんわ）",
          "meaning": "Điện thoại.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "活 khác chữ 話; cách viết chuẩn là 電話.",
            "電車 đọc でんしゃ và là tàu điện, khác điện thoại.",
            "電話 đọc でんわ, gồm 電 và 話.",
            "語 không thay cho 話 trong từ điện thoại."
          ]
        },
        "id": "c67-1-14"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Bạn đưa tạm quyển sách của mình cho người khác dùng.「貸します」ở đây nghĩa là gì?",
        "options": [
          "Mua",
          "Cho mượn",
          "Mượn từ người khác",
          "Trả lại"
        ],
        "answer": 1,
        "explanation": "貸します diễn tả chủ thể cho người khác mượn đồ của mình.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "本を貸します。",
          "meaning": "Tôi cho mượn sách.",
          "rule": "Chọn nghĩa của mục từ trong tình huống cụ thể; phân biệt người thực hiện và hướng của hành động.",
          "options": [
            "Mua dùng 買います; 貸します không nói về mua bán.",
            "貸します diễn tả chủ thể cho người khác mượn đồ của mình.",
            "Mượn của người khác là 借ります, hướng hành động ngược với 貸します.",
            "Trả lại dùng 返します, không phải 貸します."
          ]
        },
        "id": "c67-1-15"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Rủ bạn cùng chơi tennis vào thứ sáu tới bằng ませんか: 来週の金曜日、いっしょにテニスを（　）。",
        "options": [
          "しませんか",
          "しました",
          "しませんでした",
          "するましょうか"
        ],
        "answer": 0,
        "explanation": "します bỏ ます, thêm ませんか thành lời rủ しませんか.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "来週の金曜日、いっしょにテニスをしませんか。",
          "meaning": "Thứ sáu tuần sau cùng chơi tennis nhé?",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "します bỏ ます, thêm ませんか thành lời rủ しませんか.",
            "しました kể việc đã làm, không thực hiện lời rủ cho tuần tới.",
            "しませんでした nói đã không làm, khác lời mời cùng chơi.",
            "するましょうか ghép sai; thân của します là し."
          ]
        },
        "id": "c67-1-16"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Điền trợ từ cho NƠI TỔ CHỨC: 日曜日、学校（　）スポーツのイベントがあります。",
        "options": [
          "に",
          "を",
          "から",
          "で"
        ],
        "answer": 3,
        "explanation": "Sự kiện được tổ chức tại 学校 nên địa điểm dùng で.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "日曜日、学校でスポーツのイベントがあります。",
          "meaning": "Chủ nhật có sự kiện thể thao diễn ra tại trường.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "に chỉ nơi tồn tại trong mẫu có đồ vật; ở đây đang nói nơi tổ chức sự kiện.",
            "を không đánh dấu địa điểm tổ chức với あります.",
            "から nêu điểm bắt đầu hoặc lý do, không nêu nơi tổ chức ở đây.",
            "Sự kiện được tổ chức tại 学校 nên địa điểm dùng で."
          ]
        },
        "id": "c67-1-17"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Đếm đúng BỐN tấm vé: チケットが（　）あります。",
        "options": [
          "四冊",
          "四人",
          "四枚",
          "四本"
        ],
        "answer": 2,
        "explanation": "Vé mỏng, phẳng nên dùng 枚; 四枚 đọc よんまい.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "チケットが四枚あります。",
          "meaning": "Có bốn tấm vé.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "冊 đếm sách, vở đóng thành quyển, không đếm vé.",
            "人 đếm người, không đếm những tấm vé.",
            "Vé mỏng, phẳng nên dùng 枚; 四枚 đọc よんまい.",
            "本 đếm vật dài như bút, không phù hợp với vé."
          ]
        },
        "id": "c67-1-18"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Hỏi “Công viên và trường học, nơi nào rộng hơn?”: 公園（　）学校（　）（　）広いですか。",
        "options": [
          "より・より・どちらも",
          "と・と・どちらが",
          "と・と・どちらも",
          "の・の・どちらが"
        ],
        "answer": 1,
        "explanation": "Mẫu hỏi hai lựa chọn là AとBとどちらが + tính từ + ですか.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "公園と学校とどちらが広いですか。",
          "meaning": "Giữa công viên và trường học, nơi nào rộng hơn?",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "より nêu mốc so sánh; không dùng cặp より với どちらも để hỏi bên nào.",
            "Mẫu hỏi hai lựa chọn là AとBとどちらが + tính từ + ですか.",
            "どちらも nghĩa là cả hai, không hỏi nơi nào hơn.",
            "の không liệt kê hai đối tượng theo mẫu AとBとどちらが."
          ]
        },
        "id": "c67-1-19"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Dữ kiện: quán A cách sân 100m, quán B cách sân 500m. Nói “A gần hơn B”: Aの店はBの店（　）近いです。",
        "options": [
          "より",
          "まで",
          "と",
          "の"
        ],
        "answer": 0,
        "explanation": "より đặt sau mốc B; A ở gần hơn theo hai khoảng cách đã cho.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "Aの店はBの店より近いです。",
          "meaning": "Quán A gần hơn quán B.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "より đặt sau mốc B; A ở gần hơn theo hai khoảng cách đã cho.",
            "まで chỉ giới hạn đến đâu, không tạo so sánh hơn ở câu này.",
            "と thường nối hai lựa chọn hoặc chỉ người cùng làm; không thay より ở đây.",
            "の nối danh từ với danh từ, không nối B với tính từ 近い theo nghĩa hơn."
          ]
        },
        "id": "c67-1-20"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Hỏi môn thích NHẤT trong các môn thể thao: スポーツ（　）何がいちばん好きですか。",
        "options": [
          "を",
          "に",
          "へ",
          "で"
        ],
        "answer": 3,
        "explanation": "で giới hạn phạm vi so sánh là các môn thể thao.",
        "source": "sources/speaking.pdf#page=46",
        "origin": "authored",
        "solution": {
          "completed": "スポーツで何がいちばん好きですか。",
          "meaning": "Trong các môn thể thao, bạn thích môn nào nhất?",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "を không nêu phạm vi so sánh nhất trong mẫu này.",
            "に không giới hạn nhóm so sánh trước 何がいちばん好きですか.",
            "へ chỉ hướng đến, không giới hạn nhóm môn thể thao.",
            "で giới hạn phạm vi so sánh là các môn thể thao."
          ]
        },
        "id": "c67-1-21"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "Hỏi “Bạn ĐÃ đi hồ bơi đó CHƯA?”: （　）あのプールへ行きましたか。",
        "options": [
          "いちばん",
          "どう",
          "もう",
          "どちら"
        ],
        "answer": 2,
        "explanation": "もう kết hợp Vましたか để hỏi việc đã làm tính đến hiện tại.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "もうあのプールへ行きましたか。",
          "meaning": "Bạn đã đến hồ bơi đó chưa?",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "いちばん nghĩa là nhất, không hỏi việc đã hoàn thành.",
            "どう hỏi thế nào, không thay cho もう trong nghĩa được yêu cầu.",
            "もう kết hợp Vましたか để hỏi việc đã làm tính đến hiện tại.",
            "どちら hỏi bên nào hoặc phía nào, không biểu thị “đã…chưa”."
          ]
        },
        "id": "c67-1-22"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Đề xuất giờ xuất phát “Bốn giờ rưỡi thì sao?”: 四時半（　）。",
        "options": [
          "にどのですか",
          "はどうですか",
          "がどれですか",
          "をどうですか"
        ],
        "answer": 1,
        "explanation": "Nはどうですか đưa giờ bốn rưỡi ra làm phương án để bàn.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "四時半はどうですか。",
          "meaning": "Bốn giờ rưỡi thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "どの phải đi trước danh từ; にどのですか không tạo câu đề xuất đúng.",
            "Nはどうですか đưa giờ bốn rưỡi ra làm phương án để bàn.",
            "どれ hỏi chọn một vật; không dùng がどれですか để đề xuất giờ này.",
            "を không nối danh từ chỉ giờ với どうですか trong mẫu đề xuất."
          ]
        },
        "id": "c67-1-23"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Bạn biết tuyến xe, người nghe chưa biết. Chọn đuôi câu để báo thông tin mới: このバスは駅へ行きます（　）。",
        "options": [
          "よ",
          "ね",
          "を",
          "に"
        ],
        "answer": 0,
        "explanation": "よ báo cho người nghe thông tin mà người nói biết về tuyến xe.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "このバスは駅へ行きますよ。",
          "meaning": "Xe buýt này đi đến ga đấy.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "よ báo cho người nghe thông tin mà người nói biết về tuyến xe.",
            "ね tìm đồng tình hoặc xác nhận thông tin chung, khác chức năng báo tin được yêu cầu.",
            "を đánh dấu đối tượng của động từ, không đứng cuối câu như đuôi báo tin.",
            "に có nhiều chức năng trợ từ nhưng không làm đuôi báo thông tin sau 行きます."
          ]
        },
        "id": "c67-1-24"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Nói vị trí hiện tại của một người: ミンさんは庭に（　）。",
        "options": [
          "あります",
          "しました",
          "行きませんでした",
          "います"
        ],
        "answer": 3,
        "explanation": "Người dùng います; 庭に đánh dấu nơi Minh đang có mặt.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "ミンさんは庭にいます。",
          "meaning": "Bạn Minh đang ở trong vườn.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "あります dùng cho đồ vật, cây cối trong mẫu tồn tại, không dùng cho Minh.",
            "しました diễn tả đã làm, không chỉ sự có mặt của người tại 庭に.",
            "行きませんでした nói đã không đi; không diễn đạt Minh đang ở trong vườn.",
            "Người dùng います; 庭に đánh dấu nơi Minh đang có mặt."
          ]
        },
        "id": "c67-1-25"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Giới thiệu có một con chó trước trường: 学校の前に犬（　）います。",
        "options": [
          "で",
          "から",
          "が",
          "を"
        ],
        "answer": 2,
        "explanation": "が đánh dấu con chó được giới thiệu trong mẫu địa điểm に N が います.",
        "source": "sources/speaking.pdf#page=62",
        "origin": "authored",
        "solution": {
          "completed": "学校の前に犬がいます。",
          "meaning": "Trước trường có một con chó.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "で chỉ nơi hành động hoặc công cụ ở mẫu khác, không đứng sau 犬 ở đây.",
            "から nêu điểm xuất phát, không đánh dấu con vật được giới thiệu.",
            "が đánh dấu con chó được giới thiệu trong mẫu địa điểm に N が います.",
            "を không đánh dấu chủ thể tồn tại với います."
          ]
        },
        "id": "c67-1-26"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Trong hoạt động thể thao, thể て của「遊びます（遊ぶ）」là gì?",
        "options": [
          "遊んて",
          "遊んで",
          "遊って",
          "遊びて"
        ],
        "answer": 1,
        "explanation": "遊ぶ thuộc nhóm 1; động từ tận cùng ぶ đổi thành んで.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "遊ぶ → 遊んで",
          "meaning": "Chơi → dạng て là 遊んで.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "Sau ん ở nhóm ぶ, đuôi đúng là で có dấu đục, không phải て.",
            "遊ぶ thuộc nhóm 1; động từ tận cùng ぶ đổi thành んで.",
            "って dành cho các đuôi う・つ・る của nhóm 1, không phải ぶ.",
            "Không giữ gốc ます 遊び rồi thêm て; ぶ phải đổi thành んで."
          ]
        },
        "id": "c67-1-27"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Để tiếp tục học mẫu て, chọn thể て của「来ます（来る）」.",
        "options": [
          "来て（きて）",
          "来って（きって）",
          "来いて（きいて）",
          "来んで（きんで）"
        ],
        "answer": 0,
        "explanation": "来る là động từ bất quy tắc, thể て đọc きて và viết 来て.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "来る → 来て（きて）",
          "meaning": "Đến → dạng て là 来て.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "来る là động từ bất quy tắc, thể て đọc きて và viết 来て.",
            "来る không áp dụng quy tắc る→って của nhóm 1.",
            "Không đổi 来る theo quy tắc く→いて; dạng đúng là 来て.",
            "来る không thuộc nhóm đuôi む・ぶ・ぬ để đổi thành んで."
          ]
        },
        "id": "c67-1-28"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Nhờ bạn pha/rót trà: すみませんが、お茶を（　）ください。",
        "options": [
          "入れます",
          "入れる",
          "入れました",
          "入れて"
        ],
        "answer": 3,
        "explanation": "入れる thuộc nhóm 2: bỏ る thêm て, rồi nối ください.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "すみませんが、お茶を入れてください。",
          "meaning": "Xin lỗi, bạn pha trà giúp tôi nhé.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "入れます là dạng lịch sự; không nối trực tiếp với ください.",
            "入れる là thể từ điển; mẫu yêu cầu ở đây cần thể て.",
            "入れました là quá khứ lịch sự, không nối với ください để nhờ làm.",
            "入れる thuộc nhóm 2: bỏ る thêm て, rồi nối ください."
          ]
        },
        "id": "c67-1-29"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Nói “cắt pizza BẰNG dao”: ピザをナイフ（　）切ります。",
        "options": [
          "が",
          "と",
          "で",
          "に"
        ],
        "answer": 2,
        "explanation": "ナイフ là dụng cụ; dùng で sau tên dụng cụ.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "ピザをナイフで切ります。",
          "meaning": "Tôi cắt pizza bằng dao.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "が đánh dấu chủ thể trong mẫu khác, không biểu thị “bằng dao”.",
            "と có thể chỉ làm cùng ai, không thay で cho dụng cụ cắt.",
            "ナイフ là dụng cụ; dùng で sau tên dụng cụ.",
            "に không đánh dấu con dao dùng làm dụng cụ ở đây."
          ]
        },
        "id": "c67-1-30"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Hỏi CÁCH CHƠI trò này: このゲームの（　）を教えてください。",
        "options": [
          "遊びます方",
          "遊び方",
          "遊ぶ方",
          "遊んで方"
        ],
        "answer": 1,
        "explanation": "Lấy 遊び từ 遊びます rồi thêm 方: 遊び方.",
        "source": "sources/speaking.pdf#page=73",
        "origin": "authored",
        "solution": {
          "completed": "このゲームの遊び方を教えてください。",
          "meaning": "Hãy chỉ cho tôi cách chơi trò này.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "Phải bỏ ます trước 方; 遊びます方 không phải dạng cần điền.",
            "Lấy 遊び từ 遊びます rồi thêm 方: 遊び方.",
            "遊ぶ方 có thể gợi nghĩa khác tùy ngữ cảnh; không phải danh từ “cách chơi” theo mẫu gốc ます + 方.",
            "Không nối thể て 遊んで với 方 để gọi cách chơi."
          ]
        },
        "id": "c67-1-31"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Có ba chiếc cốc; hỏi chiếc màu đỏ là cái nào: 赤いコップは（　）ですか。",
        "options": [
          "どれ",
          "どの",
          "だれ",
          "いつ"
        ],
        "answer": 0,
        "explanation": "どれ tự đứng làm đại từ hỏi vật; sau chỗ trống không có danh từ.",
        "source": "sources/speaking.pdf#page=64",
        "origin": "authored",
        "solution": {
          "completed": "赤いコップはどれですか。",
          "meaning": "Chiếc cốc màu đỏ là cái nào?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "どれ tự đứng làm đại từ hỏi vật; sau chỗ trống không có danh từ.",
            "どの cần một danh từ ngay sau, như どのコップ; không đứng một mình trước です.",
            "だれ hỏi người, không hỏi chiếc cốc.",
            "いつ hỏi thời gian, không hỏi chọn một chiếc cốc."
          ]
        },
        "id": "c67-1-32"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Bạn nhìn thấy họ nói chuyện ngay lúc này. 友達は今、庭で（　）。",
        "options": [
          "話しました",
          "話しませんでした",
          "話すいます",
          "話しています"
        ],
        "answer": 3,
        "explanation": "話す→話して + います diễn tả hành động đang diễn ra trước mắt.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "友達は今、庭で話しています。",
          "meaning": "Các bạn đang nói chuyện trong vườn.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "話しました kể hành động đã làm, khác việc đang diễn ra.",
            "話しませんでした là đã không nói chuyện, trái tình huống.",
            "Không nối thể từ điển 話す với います; cần 話しています.",
            "話す→話して + います diễn tả hành động đang diễn ra trước mắt."
          ]
        },
        "id": "c67-1-33"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Bạn muốn tự mình giúp mang hành lý. 荷物を（　）。 Chọn lời ĐỀ NGHỊ GIÚP.",
        "options": [
          "持ちました",
          "持ちませんでした",
          "持ちましょうか",
          "持ってください"
        ],
        "answer": 2,
        "explanation": "持ちます bỏ ます rồi thêm ましょうか để chủ động đề nghị giúp.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "荷物を持ちましょうか。",
          "meaning": "Để tôi mang hành lý giúp nhé?",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "持ちました kể đã mang rồi, không đề nghị giúp.",
            "持ちませんでした nói đã không mang, không phải lời đề nghị.",
            "持ちます bỏ ます rồi thêm ましょうか để chủ động đề nghị giúp.",
            "持ってください nhờ người nghe mang, đổi người thực hiện so với yêu cầu."
          ]
        },
        "id": "c67-1-34"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "Hỏi AI đã mang đàn tới: 誰（　）ギターを持って来ましたか。",
        "options": [
          "で",
          "が",
          "を",
          "に"
        ],
        "answer": 1,
        "explanation": "が sau 誰 đánh dấu người thực hiện chưa biết của 持って来ました.",
        "source": "sources/speaking.pdf#page=68",
        "origin": "authored",
        "solution": {
          "completed": "誰がギターを持って来ましたか。",
          "meaning": "Ai đã mang đàn ghi-ta đến?",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "で không đánh dấu chủ thể “ai” của hành động mang đàn đến.",
            "が sau 誰 đánh dấu người thực hiện chưa biết của 持って来ました.",
            "を dành cho đối tượng; ở câu này ギターを đã là đồ được mang.",
            "に không đánh dấu người thực hiện trong mẫu 誰が Vましたか."
          ]
        },
        "id": "c67-1-35"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Trên bàn còn bánh mì. Nói “VẪN CÒN”: パンは（　）。",
        "options": [
          "まだあります",
          "もうありません",
          "まだです",
          "もうありました"
        ],
        "answer": 0,
        "explanation": "まだあります diễn tả đồ vật, thức ăn vẫn còn tại thời điểm nói.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "パンはまだあります。",
          "meaning": "Bánh mì vẫn còn.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだあります diễn tả đồ vật, thức ăn vẫn còn tại thời điểm nói.",
            "もうありません nghĩa là đã hết, trái dữ kiện còn bánh.",
            "まだです thường trả lời “chưa làm” ở mẫu bài 6, không nói đủ ý “vẫn còn bánh”.",
            "もうありました là đã có ở một thời điểm quá khứ, không biểu thị trạng thái vẫn còn hiện tại."
          ]
        },
        "id": "c67-1-36"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A rủ đi xem thể thao sáng mai. B CÓ VIỆC BẬN và muốn từ chối nhẹ. Chọn lời B.",
        "options": [
          "いいですね。ぜひ行きましょう。",
          "ありがとうございます。お願いします。",
          "はい、もう見ました。",
          "すみません。明日の午前はちょっと…。用事がありますから。"
        ],
        "answer": 3,
        "explanation": "…はちょっと… từ chối nhẹ; 用事がありますから nêu lý do phù hợp dữ kiện.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "A：明日の午前、いっしょにスポーツを見に行きませんか。 B：すみません。明日の午前はちょっと…。用事がありますから。",
          "meaning": "A: Sáng mai cùng đi xem thể thao nhé? B: Xin lỗi, sáng mai thì hơi khó… vì tôi có việc bận.",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "行きましょう nhận lời cùng đi, trái yêu cầu từ chối vì bận.",
            "お願いします nhận một đề nghị giúp; không từ chối lời rủ và không nêu việc bận.",
            "もう見ました nói đã xem, không diễn đạt lý do có việc bận sáng mai.",
            "…はちょっと… từ chối nhẹ; 用事がありますから nêu lý do phù hợp dữ kiện."
          ]
        },
        "id": "c67-1-37"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "A：テニスとサッカーとどちらが好きですか。 B thích CẢ HAI. Chọn câu trả lời.",
        "options": [
          "サッカーのほうが好きです。",
          "どちらも好きじゃありません。",
          "どちらも好きです。",
          "テニスのほうが好きです。"
        ],
        "answer": 2,
        "explanation": "どちらも chỉ cả hai lựa chọn; 好きです khẳng định đều thích.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "A：テニスとサッカーとどちらが好きですか。 B：どちらも好きです。",
          "meaning": "A: Bạn thích tennis hay bóng đá? B: Tôi thích cả hai.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "サッカーのほうが好きです chọn bóng đá là bên thích hơn.",
            "好きじゃありません phủ định sự yêu thích, trái dữ kiện thích cả hai.",
            "どちらも chỉ cả hai lựa chọn; 好きです khẳng định đều thích.",
            "テニスのほうが好きです nói thích tennis hơn, không nói thích cả hai theo yêu cầu."
          ]
        },
        "id": "c67-1-38"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "A：もう友達に電話しましたか。 B đến giờ CHƯA GỌI. Chọn lời đáp ngắn bài 6.",
        "options": [
          "はい、まだです。",
          "いいえ、まだです。",
          "はい、電話しました。",
          "いいえ、もう電話しました。"
        ],
        "answer": 1,
        "explanation": "いいえ、まだです phủ định việc đã làm tính đến bây giờ, đúng dữ kiện chưa gọi.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "A：もう友達に電話しましたか。 B：いいえ、まだです。",
          "meaning": "A: Bạn đã gọi điện cho bạn mình chưa? B: Chưa.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "はい xác nhận đã làm nhưng まだです nói chưa; hai phần không nhất quán ở lời đáp này.",
            "いいえ、まだです phủ định việc đã làm tính đến bây giờ, đúng dữ kiện chưa gọi.",
            "はい、電話しました xác nhận đã gọi, trái dữ kiện.",
            "もう電話しました nghĩa là đã gọi rồi; không nói chưa gọi dù đầu câu có いいえ."
          ]
        },
        "id": "c67-1-39"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "A：駅の前はどうですか。 B đồng ý tập trung ở địa điểm vừa đề xuất. Chọn lời B.",
        "options": [
          "そうしましょう。",
          "駅はどこですか。",
          "誰がいますか。",
          "もうありません。"
        ],
        "answer": 0,
        "explanation": "そうしましょう nhận phương án vừa đưa ra để cùng thực hiện.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "A：駅の前はどうですか。 B：そうしましょう。",
          "meaning": "A: Trước ga thì sao? B: Cứ làm như vậy nhé.",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "そうしましょう nhận phương án vừa đưa ra để cùng thực hiện.",
            "駅はどこですか hỏi vị trí nhà ga, không phải nhận phương án.",
            "誰がいますか hỏi có ai ở đó, không xác nhận đồng ý điểm hẹn.",
            "もうありません nói đã hết đồ vật, không dùng để nhận đề xuất địa điểm."
          ]
        },
        "id": "c67-1-40"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "A：すみませんが、スプーンを取ってください。 B đồng ý sẽ lấy giúp. Chọn lời đáp.",
        "options": [
          "いいえ、取りません。",
          "どちらが近いですか。",
          "まだありません。",
          "はい、いいですよ。"
        ],
        "answer": 3,
        "explanation": "はい、いいですよ nhận lời làm việc người kia vừa nhờ.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "A：すみませんが、スプーンを取ってください。 B：はい、いいですよ。",
          "meaning": "A: Xin lỗi, lấy giúp tôi cái thìa nhé. B: Vâng, được chứ.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "いいえ、取りません từ chối lấy, trái yêu cầu đồng ý.",
            "どちらが近いですか hỏi so sánh khoảng cách, không nhận lời nhờ lấy thìa.",
            "まだありません nói chưa có, không diễn đạt sẽ lấy giúp người nhờ.",
            "はい、いいですよ nhận lời làm việc người kia vừa nhờ."
          ]
        },
        "id": "c67-1-41"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "A：いすを持って行きましょうか。 B muốn NHẬN sự giúp đỡ ấy. Chọn lời B.",
        "options": [
          "いすを持って行きました。",
          "何時に行きますか。",
          "ありがとうございます。お願いします。",
          "いいえ、大丈夫です。"
        ],
        "answer": 2,
        "explanation": "ありがとうございます。お願いします cảm ơn và nhận đề nghị giúp mang ghế.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "A：いすを持って行きましょうか。 B：ありがとうございます。お願いします。",
          "meaning": "A: Để tôi mang ghế đi giúp nhé? B: Cảm ơn, nhờ bạn nhé.",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "持って行きました kể việc đã mang ghế đi, không nhận lời đề nghị hiện tại.",
            "何時に行きますか hỏi giờ đi, không diễn đạt nhận sự giúp đỡ ấy.",
            "ありがとうございます。お願いします cảm ơn và nhận đề nghị giúp mang ghế.",
            "いいえ、大丈夫です thường từ chối giúp một cách nhẹ nhàng, khác ý muốn nhận."
          ]
        },
        "id": "c67-1-42"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "A：ケーキはまだありますか。 B nhìn đĩa trống: bánh ĐÃ HẾT. Chọn lời B.",
        "options": [
          "はい、たくさんあります。",
          "いいえ、もうありません。",
          "はい、まだあります。",
          "いいえ、まだです。"
        ],
        "answer": 1,
        "explanation": "もうありません nói không còn nữa; いいえ trả lời phủ định câu hỏi còn bánh không.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "A：ケーキはまだありますか。 B：いいえ、もうありません。",
          "meaning": "A: Còn bánh ngọt không? B: Không, hết rồi.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "たくさんあります nói có nhiều, trái dữ kiện bánh không còn.",
            "もうありません nói không còn nữa; いいえ trả lời phủ định câu hỏi còn bánh không.",
            "まだあります nói vẫn còn, trái dữ kiện đĩa trống và bánh hết.",
            "まだです trả lời “chưa” cho việc làm, không phải trạng thái đồ ăn đã hết."
          ]
        },
        "id": "c67-1-43"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Chọn bản dịch đúng: “Con mèo ở dưới chiếc ghế.”",
        "options": [
          "猫はいすの下にいます。",
          "猫はいすの上にいます。",
          "猫はいすの下にあります。",
          "猫はいすを下にいます。"
        ],
        "answer": 0,
        "explanation": "いすの下 là dưới ghế; に đánh dấu vị trí, mèo dùng います.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "猫はいすの下にいます。",
          "meaning": "Con mèo ở dưới chiếc ghế.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "いすの下 là dưới ghế; に đánh dấu vị trí, mèo dùng います.",
            "上 là bên trên, đổi vị trí so với “dưới”.",
            "あります dùng cho đồ vật, cây cối; mèo là động vật nên dùng います.",
            "Cần の nối vật mốc いす với 下; を không tạo cụm vị trí này."
          ]
        },
        "id": "c67-1-44"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn bản dịch: “Bây giờ anh Nam đang rửa đĩa trong bếp.”",
        "options": [
          "今、ナムさんは台所でお皿を洗いました。",
          "今、ナムさんは台所でお皿を洗いましょうか。",
          "今、ナムさんは台所でお皿を洗ってください。",
          "今、ナムさんは台所でお皿を洗っています。"
        ],
        "answer": 3,
        "explanation": "洗う→洗って + います diễn tả đang rửa; 台所で nêu nơi hành động.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "今、ナムさんは台所でお皿を洗っています。",
          "meaning": "Bây giờ anh Nam đang rửa đĩa trong bếp.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "洗いました là đã rửa, không chuyển được nghĩa đang diễn ra của câu đích.",
            "洗いましょうか là đề nghị giúp rửa, không phải tường thuật hành động đang diễn ra.",
            "洗ってください là lời nhờ rửa, đổi chức năng câu so với bản dịch cần chọn.",
            "洗う→洗って + います diễn tả đang rửa; 台所で nêu nơi hành động."
          ]
        },
        "id": "c67-1-45"
      }
    ],
    "contentVersion": "2026-10-23"
  },
  {
    "id": "chapter67-2",
    "title": "Bài 6–7 · Đề 02",
    "description": "Hẹn gặp ở thư viện, chọn sự kiện âm nhạc trong cộng đồng rồi chuẩn bị bữa tiệc tại nhà: vị trí, cách làm, nhờ giúp và kể hoạt động đang diễn ra. 45 câu mới theo ma trận đề mẫu, đủ 18 mục ngữ pháp và 6 chủ đề bài 6–7.",
    "lessons": [
      6,
      7
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Lịch sự kiện ghi「来月」. Đọc mục từ chỉ tháng sau này thế nào?",
        "options": [
          "きげつ",
          "らげつ",
          "らいげつ",
          "らいがつ"
        ],
        "answer": 2,
        "explanation": "来月 đọc らいげつ; 月 trong từ này đọc げつ.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "来月（らいげつ）",
          "meaning": "Tháng sau.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "来 ở từ này đọc らい, không ghép thành きげつ.",
            "Thiếu âm い của phần らい; cần đọc đủ らいげつ.",
            "来月 đọc らいげつ; 月 trong từ này đọc げつ.",
            "月 ở 来月 đọc げつ, không dùng がつ của tên tháng."
          ]
        },
        "id": "c67-2-01"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Trên áp phích âm nhạc, chọn âm đọc「歌手」.",
        "options": [
          "うたて",
          "かしゅ",
          "がしゅ",
          "かしゅう"
        ],
        "answer": 1,
        "explanation": "歌手 đọc かしゅ; 手 ở từ này là しゅ, không có trường âm.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "歌手（かしゅ）",
          "meaning": "Ca sĩ.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "Không ghép các âm うた và て để đọc tên nghề 歌手.",
            "歌手 đọc かしゅ; 手 ở từ này là しゅ, không có trường âm.",
            "歌 đọc か không có dấu đục ở từ ghép này.",
            "Thêm う làm dài âm cuối không đúng cách đọc 歌手."
          ]
        },
        "id": "c67-2-02"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Địa điểm ăn sau buổi nhạc là「居酒屋」. Chọn cách đọc.",
        "options": [
          "いざかや",
          "いさかや",
          "いざけや",
          "いざかおく"
        ],
        "answer": 0,
        "explanation": "居酒屋 đọc いざかや; 酒 trong từ này có phần ざか.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "居酒屋（いざかや）",
          "meaning": "Quán rượu kiểu Nhật.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "居酒屋 đọc いざかや; 酒 trong từ này có phần ざか.",
            "Âm ざ có dấu đục, không đọc さ trong từ này.",
            "酒 ở từ này không đọc phần ざけ; đúng là ざか.",
            "屋 đọc や trong tên quán này, không đọc おく."
          ]
        },
        "id": "c67-2-03"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Bạn chờ ở cửa soát vé. Chọn cách đọc「改札」.",
        "options": [
          "がいさつ",
          "かいざつ",
          "かいさち",
          "かいさつ"
        ],
        "answer": 3,
        "explanation": "改札 đọc かいさつ; cả か và さ đều không có dấu đục.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "改札（かいさつ）",
          "meaning": "Cổng soát vé.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "改 đọc かい, không phải がい trong từ này.",
            "札 đọc さつ, không đổi thành ざつ.",
            "Âm cuối là つ, không đổi thành ち.",
            "改札 đọc かいさつ; cả か và さ đều không có dấu đục."
          ]
        },
        "id": "c67-2-04"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Thiết bị hâm món ăn mang tên「電子レンジ」. Chọn âm đọc.",
        "options": [
          "てんしれんじ",
          "でんしれじ",
          "でんしれんじ",
          "でんじれんじ"
        ],
        "answer": 2,
        "explanation": "電子 đọc でんし; phần レンジ được ghi cách đọc bằng hiragana là れんじ.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "電子レンジ（でんしれんじ）",
          "meaning": "Lò vi sóng.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "電 đọc でん có dấu đục, không phải てん.",
            "Phần れんじ cần âm ん; れじ là cách đọc của một từ mượn khác.",
            "電子 đọc でんし; phần レンジ được ghi cách đọc bằng hiragana là れんじ.",
            "子 ở 電子 đọc し, không phải じ."
          ]
        },
        "id": "c67-2-05"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Trong công thức món mặn, chữ「塩」đọc là gì?",
        "options": [
          "さとう",
          "しお",
          "しよう",
          "しょう"
        ],
        "answer": 1,
        "explanation": "塩 đọc しお, gồm し và お tách nhau.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "塩（しお）",
          "meaning": "Muối.",
          "rule": "Đọc đúng cả mục từ; chú ý trường âm, âm ghép và âm đục. Không ghép tùy ý âm của từng chữ Hán.",
          "options": [
            "さとう là 砂糖, nghĩa là đường ăn; không phải cách đọc 塩.",
            "塩 đọc しお, gồm し và お tách nhau.",
            "しよう thêm âm よ không có trong cách đọc 塩.",
            "しょう có âm ghép nhỏ ょ và trường âm, khác しお."
          ]
        },
        "id": "c67-2-06"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách viết「きせつ」, từ dùng gọi xuân, hạ, thu, đông.",
        "options": [
          "季節",
          "季説",
          "期節",
          "季接"
        ],
        "answer": 0,
        "explanation": "季節 là cách viết của きせつ khi chỉ các mùa trong năm.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "季節（きせつ）",
          "meaning": "Mùa.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "季節 là cách viết của きせつ khi chỉ các mùa trong năm.",
            "説 không thay cho 節 trong từ gọi mùa.",
            "Chữ đầu của 季節 là 季; 期 không tạo mục từ này.",
            "接 khác 節; cách viết chuẩn của mùa là 季節."
          ]
        },
        "id": "c67-2-07"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Tin nhắn nói lịch “tuần này”:「こんしゅう」viết thế nào?",
        "options": [
          "来週",
          "先週",
          "今周",
          "今週"
        ],
        "answer": 3,
        "explanation": "今週 là tuần này; 今 nêu hiện tại và 週 là tuần.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "今週（こんしゅう）",
          "meaning": "Tuần này.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "来週 đọc らいしゅう và nghĩa là tuần sau.",
            "先週 đọc せんしゅう và nghĩa là tuần trước.",
            "周 không thay cho 週 trong mục từ 今週.",
            "今週 là tuần này; 今 nêu hiện tại và 週 là tuần."
          ]
        },
        "id": "c67-2-08"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ cho「たべもの」, nghĩa là đồ ăn mang đến tiệc.",
        "options": [
          "買い物",
          "食べ者",
          "食べ物",
          "飲み物"
        ],
        "answer": 2,
        "explanation": "食べ物 là những thứ để ăn; 物 là chữ chỉ vật trong mục từ.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "食べ物（たべもの）",
          "meaning": "Đồ ăn.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "買い物 đọc かいもの và nghĩa là việc mua sắm hoặc đồ mua.",
            "者 chỉ người trong nhiều từ; không thay 物 trong 食べ物.",
            "食べ物 là những thứ để ăn; 物 là chữ chỉ vật trong mục từ.",
            "飲み物 đọc のみもの và nghĩa là đồ uống."
          ]
        },
        "id": "c67-2-09"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Trên sơ đồ điểm hẹn, “máy bán hàng tự động”「じどうはんばいき」viết thế nào?",
        "options": [
          "自働販売機",
          "自動販売機",
          "自動販買機",
          "自動反売機"
        ],
        "answer": 1,
        "explanation": "Từ chuẩn là 自動販売機: tự động + bán hàng + máy.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "自動販売機（じどうはんばいき）",
          "meaning": "Máy bán hàng tự động.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "Phần tự động viết 自動; 働 không thay 動 trong mục từ này.",
            "Từ chuẩn là 自動販売機: tự động + bán hàng + máy.",
            "Trong 販売, chữ thứ hai là 売 nghĩa là bán, không phải 買 nghĩa là mua.",
            "販 có bộ 貝; 反 không thay cho 販 trong 販売."
          ]
        },
        "id": "c67-2-10"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Ghi nhãn “đĩa”: chọn Hán tự của「さら」.",
        "options": [
          "皿",
          "血",
          "冊",
          "目"
        ],
        "answer": 0,
        "explanation": "皿 là chữ viết của さら, vật dùng đựng món ăn.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "皿（さら）",
          "meaning": "Đĩa.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "皿 là chữ viết của さら, vật dùng đựng món ăn.",
            "血 có nét khác và nghĩa là máu, không phải đĩa.",
            "冊 là lượng từ đếm sách, không phải chữ của さら.",
            "目 nghĩa là mắt trong cách dùng cơ bản, không phải đĩa."
          ]
        },
        "id": "c67-2-11"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Trong chương trình văn nghệ, từ「うた」(bài hát) viết thế nào?",
        "options": [
          "話",
          "詩",
          "音",
          "歌"
        ],
        "answer": 3,
        "explanation": "歌 là cách viết mục từ うた chỉ bài hát.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "歌（うた）",
          "meaning": "Bài hát.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "話 đọc はなし khi chỉ chuyện hoặc câu chuyện, không phải うた nghĩa là bài hát.",
            "詩 đọc し và chỉ thơ, khác mục từ bài hát.",
            "音 đọc おと trong nghĩa âm thanh, không phải うた.",
            "歌 là cách viết mục từ うた chỉ bài hát."
          ]
        },
        "id": "c67-2-12"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách viết động từ「もちます」với nghĩa “cầm, mang”.",
        "options": [
          "特ちます",
          "待します",
          "持ちます",
          "待ちます"
        ],
        "answer": 2,
        "explanation": "持ちます dùng chữ 持 và phần ちます để diễn tả cầm, mang.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "持ちます（もちます）",
          "meaning": "Cầm, mang.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "特 không thay cho 持; 特ちます không viết đúng động từ này.",
            "待します không phải cách viết của もちます; chữ và phần đuôi đều không phù hợp.",
            "持ちます dùng chữ 持 và phần ちます để diễn tả cầm, mang.",
            "待ちます đọc まちます, nghĩa là đợi."
          ]
        },
        "id": "c67-2-13"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách viết「あけます」, nghĩa là MỞ cửa sổ.",
        "options": [
          "明けます",
          "開けます",
          "閉めます",
          "空けます"
        ],
        "answer": 1,
        "explanation": "Mở cửa sổ dùng 窓を開けます; cần chữ 開.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "開けます（あけます）",
          "meaning": "Mở cửa sổ, cửa ra vào.",
          "rule": "Đối chiếu đồng thời cách đọc và nghĩa được yêu cầu. Chữ có hình hoặc âm gần nhau không tự thay thế nhau.",
          "options": [
            "明けます cũng đọc あけます trong những nghĩa như trời sáng, không dùng cho mở cửa sổ.",
            "Mở cửa sổ dùng 窓を開けます; cần chữ 開.",
            "閉めます đọc しめます và nghĩa là đóng, ngược yêu cầu.",
            "空けます cũng đọc あけます nhưng thường nói làm trống chỗ, không phải mở cửa sổ."
          ]
        },
        "id": "c67-2-14"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Bếp có「たくさん」đĩa cho bữa tiệc. Từ này chỉ số lượng thế nào?",
        "options": [
          "Nhiều",
          "Một chút",
          "Không có cái nào",
          "Chỉ một cái"
        ],
        "answer": 0,
        "explanation": "たくさん nói số lượng nhiều; không nêu một con số đếm cố định.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "お皿がたくさんあります。",
          "meaning": "Có nhiều đĩa.",
          "rule": "Chọn nghĩa của mục từ trong tình huống cụ thể; phân biệt người thực hiện và hướng của hành động.",
          "options": [
            "たくさん nói số lượng nhiều; không nêu một con số đếm cố định.",
            "Một chút là 少し; không diễn đạt mức nhiều của たくさん.",
            "Không có dùng phủ định như ありません; khác nghĩa nhiều.",
            "たくさん không giới hạn số lượng ở một cái."
          ]
        },
        "id": "c67-2-15"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Thư viện tổ chức buổi hòa nhạc. Điền nơi tổ chức: 図書館（　）小さいコンサートがあります。",
        "options": [
          "に",
          "へ",
          "を",
          "で"
        ],
        "answer": 3,
        "explanation": "で đánh dấu địa điểm tổ chức sự kiện コンサート.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "図書館で小さいコンサートがあります。",
          "meaning": "Có một buổi hòa nhạc nhỏ diễn ra tại thư viện.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "に dùng cho nơi tồn tại của sự vật trong mẫu khác; câu này nói nơi tổ chức hòa nhạc.",
            "へ chỉ hướng đi đến; không đánh dấu địa điểm tổ chức với あります.",
            "を không đánh dấu nơi tổ chức sự kiện trong cấu trúc này.",
            "で đánh dấu địa điểm tổ chức sự kiện コンサート."
          ]
        },
        "id": "c67-2-16"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn từ để nói “Chiều mai tôi có VIỆC BẬN”: 明日の午後は（　）があります。",
        "options": [
          "まだ",
          "どちら",
          "用事",
          "いっしょに"
        ],
        "answer": 2,
        "explanation": "用事があります là mẫu nói có việc cần làm, phù hợp nghĩa đã cho.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "明日の午後は用事があります。",
          "meaning": "Chiều mai tôi có việc bận.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "まだ là trạng từ “vẫn/chưa”, không mang nghĩa việc bận trước があります.",
            "どちら hỏi bên nào hoặc phía nào; không nêu việc bận.",
            "用事があります là mẫu nói có việc cần làm, phù hợp nghĩa đã cho.",
            "いっしょに là trạng từ “cùng nhau”, không phải danh từ cho chỗ trống này."
          ]
        },
        "id": "c67-2-17"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Hỏi thư viện nào gần hơn trong HAI thư viện A, B: Aの図書館とBの図書館と（　）近いですか。",
        "options": [
          "だれを",
          "どちらが",
          "どちらも",
          "どの"
        ],
        "answer": 1,
        "explanation": "AとBとどちらが + tính từ hỏi so sánh giữa hai lựa chọn.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "Aの図書館とBの図書館とどちらが近いですか。",
          "meaning": "Giữa thư viện A và thư viện B, thư viện nào gần hơn?",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "だれを hỏi người là đối tượng, không hỏi chọn giữa hai thư viện.",
            "AとBとどちらが + tính từ hỏi so sánh giữa hai lựa chọn.",
            "どちらも nghĩa là cả hai, không hỏi lựa chọn nào gần hơn.",
            "どの phải đứng trước một danh từ; không nối trực tiếp với 近い."
          ]
        },
        "id": "c67-2-18"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Hai phòng nhạc: phòng xanh 60m², phòng đỏ 30m². Nói “phòng xanh rộng hơn”: 青い部屋（　）広いです。",
        "options": [
          "のほうが",
          "より",
          "をほうが",
          "のほうを"
        ],
        "answer": 0,
        "explanation": "Aのほうが nêu bên có đặc điểm nổi bật hơn; phòng xanh rộng hơn theo dữ kiện.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "青い部屋のほうが広いです。",
          "meaning": "Phòng màu xanh rộng hơn.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "Aのほうが nêu bên có đặc điểm nổi bật hơn; phòng xanh rộng hơn theo dữ kiện.",
            "より sẽ đặt phòng xanh làm mốc; câu chưa nêu bên rộng hơn và không đúng nghĩa đích.",
            "Cần の nối 部屋 với ほう; をほうが ghép sai cấu trúc.",
            "Trong mẫu này dùng が sau ほう để nêu bên được so sánh, không dùng を."
          ]
        },
        "id": "c67-2-19"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Điền “nhất” vào sở thích âm nhạc: 音楽でジャズが（　）好きです。",
        "options": [
          "どちら",
          "より",
          "もう",
          "いちばん"
        ],
        "answer": 3,
        "explanation": "いちばん diễn tả mức cao nhất trong phạm vi 音楽.",
        "source": "sources/speaking.pdf#page=46",
        "origin": "authored",
        "solution": {
          "completed": "音楽でジャズがいちばん好きです。",
          "meaning": "Trong các thể loại âm nhạc, tôi thích jazz nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "どちら hỏi giữa hai lựa chọn, không có nghĩa nhất.",
            "より dùng sau mốc so sánh, không đứng ở đây để thay nghĩa nhất.",
            "もう nghĩa là đã/rồi trong nhiều ngữ cảnh, không diễn tả mức thích nhất.",
            "いちばん diễn tả mức cao nhất trong phạm vi 音楽."
          ]
        },
        "id": "c67-2-20"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "Bạn muốn hỏi việc đã làm: 「もうポスターを見ましたか。」. Để trả lời CHƯA theo mẫu ngắn bài 6: いいえ、（　）。",
        "options": [
          "まだでした",
          "見ました",
          "まだです",
          "もうです"
        ],
        "answer": 2,
        "explanation": "まだです trả lời việc chưa làm tính đến thời điểm hiện tại.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "いいえ、まだです。",
          "meaning": "Không, tôi chưa xem.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "まだでした đặt trạng thái chưa vào quá khứ; khác câu hỏi về tính đến hiện tại.",
            "見ました là đã xem, trái dữ kiện chưa xem và lời mở đầu いいえ.",
            "まだです trả lời việc chưa làm tính đến thời điểm hiện tại.",
            "もうです không phải lời đáp chuẩn của mẫu “chưa làm” này."
          ]
        },
        "id": "c67-2-21"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Đề xuất món ăn cho buổi liên hoan: ピザ（　）どうですか。",
        "options": [
          "で",
          "は",
          "を",
          "に"
        ],
        "answer": 1,
        "explanation": "Nはどうですか đưa pizza ra làm một phương án món ăn.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "ピザはどうですか。",
          "meaning": "Pizza thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "で không tạo nghĩa “pizza thì sao?” theo mẫu đang học.",
            "Nはどうですか đưa pizza ra làm một phương án món ăn.",
            "を không nối danh từ với どうですか theo mẫu đề xuất cần dùng.",
            "に không thay は trong mẫu đề xuất Nはどうですか này."
          ]
        },
        "id": "c67-2-22"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Bạn vừa nghe giờ bắt đầu là 11h và muốn XÁC NHẬN lại: 十一時です（　）。",
        "options": [
          "ね",
          "よ",
          "を",
          "に"
        ],
        "answer": 0,
        "explanation": "ね lặp lại thông tin vừa nghe để kiểm tra hai bên đã hiểu thống nhất.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "十一時ですね。",
          "meaning": "Mười một giờ, đúng nhỉ.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "ね lặp lại thông tin vừa nghe để kiểm tra hai bên đã hiểu thống nhất.",
            "よ thường báo tin từ phía người nói; khác mục đích xác nhận lại giờ vừa nghe trong đề.",
            "を không làm đuôi xác nhận sau です.",
            "に là trợ từ chỉ thời điểm/vị trí ở cấu trúc khác, không đứng đây để xác nhận."
          ]
        },
        "id": "c67-2-23"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Nói túi xách ở TRÊN bàn: かばんはテーブル（　）上にあります。",
        "options": [
          "を",
          "で",
          "へ",
          "の"
        ],
        "answer": 3,
        "explanation": "の nối vật mốc テーブル với từ vị trí 上 thành テーブルの上.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "かばんはテーブルの上にあります。",
          "meaning": "Túi xách ở trên bàn.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "を đánh dấu đối tượng của hành động, không nối bàn với vị trí trên.",
            "で không nối hai danh từ テーブル và 上 thành cụm chỉ vị trí này.",
            "へ chỉ hướng đến, không nối vật mốc với 上.",
            "の nối vật mốc テーブル với từ vị trí 上 thành テーブルの上."
          ]
        },
        "id": "c67-2-24"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Nhìn vào phòng nhạc, hỏi “Trong phòng có AI?”: 部屋に（　）いますか。",
        "options": [
          "どこで",
          "いつを",
          "誰が",
          "何を"
        ],
        "answer": 2,
        "explanation": "誰が hỏi người đang tồn tại ở địa điểm đã nêu; người dùng います.",
        "source": "sources/speaking.pdf#page=62",
        "origin": "authored",
        "solution": {
          "completed": "部屋に誰がいますか。",
          "meaning": "Trong phòng có ai?",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "どこで hỏi nơi hành động; câu đã nêu 部屋に và đang hỏi người.",
            "いつを không tạo cụm hỏi người đang có mặt trong phòng.",
            "誰が hỏi người đang tồn tại ở địa điểm đã nêu; người dùng います.",
            "何を hỏi đối tượng của hành động, không hỏi ai có mặt với います."
          ]
        },
        "id": "c67-2-25"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Trước khi học “đang hát”, chọn thể て đúng của「歌います（歌う）」.",
        "options": [
          "歌んで",
          "歌って",
          "歌いて",
          "歌うて"
        ],
        "answer": 1,
        "explanation": "歌う là nhóm 1 đuôi う; đổi う thành って.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "歌う → 歌って",
          "meaning": "Hát → dạng て là 歌って.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "んで dùng cho đuôi む・ぶ・ぬ, không dùng cho 歌う.",
            "歌う là nhóm 1 đuôi う; đổi う thành って.",
            "いて là đuôi đổi từ く ở phần lớn động từ nhóm 1, không phải từ 歌う.",
            "歌う ở dạng chuẩn bài học đổi thành 歌って, không giữ う rồi thêm て."
          ]
        },
        "id": "c67-2-26"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Luyện thể て với sách ở thư viện:「読みます（読む）」chuyển thành gì?",
        "options": [
          "読んで",
          "読って",
          "読みて",
          "読んて"
        ],
        "answer": 0,
        "explanation": "読む thuộc nhóm 1; む đổi thành んで.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "読む → 読んで",
          "meaning": "Đọc → dạng て là 読んで.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "読む thuộc nhóm 1; む đổi thành んで.",
            "って là đuôi đổi cho う・つ・る, không phù hợp với 読む.",
            "Không giữ 読み từ gốc ます rồi thêm て; cần đổi む thành んで.",
            "Sau ん phải dùng で có dấu đục trong dạng 読んで."
          ]
        },
        "id": "c67-2-27"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Muốn NHỜ bạn đóng cửa sổ cho đỡ ồn: 窓を（　）ください。",
        "options": [
          "閉めます",
          "閉める",
          "閉めました",
          "閉めて"
        ],
        "answer": 3,
        "explanation": "閉める thuộc nhóm 2: 閉めて + ください tạo lời nhờ làm.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "窓を閉めてください。",
          "meaning": "Bạn đóng cửa sổ giúp tôi nhé.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "閉めます là dạng lịch sự, không nối trực tiếp với ください.",
            "閉める là thể từ điển; cần thể て trước ください.",
            "閉めました kể việc đã đóng; không dùng trước ください để nhờ hiện tại.",
            "閉める thuộc nhóm 2: 閉めて + ください tạo lời nhờ làm."
          ]
        },
        "id": "c67-2-28"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Nói viết lời nhắn BẰNG bút: ペン（　）メッセージを書きます。",
        "options": [
          "が",
          "へ",
          "で",
          "に"
        ],
        "answer": 2,
        "explanation": "で đặt sau ペン để đánh dấu dụng cụ dùng viết.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "ペンでメッセージを書きます。",
          "meaning": "Tôi viết lời nhắn bằng bút.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "が nêu chủ thể ở mẫu khác, không mang nghĩa bằng bút.",
            "へ chỉ hướng đến, không chỉ công cụ viết.",
            "で đặt sau ペン để đánh dấu dụng cụ dùng viết.",
            "に không đánh dấu cây bút làm dụng cụ thực hiện hành động này."
          ]
        },
        "id": "c67-2-29"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Muốn hỏi CÁCH DÙNG máy ảnh: このカメラの（　）を教えてください。",
        "options": [
          "使います方",
          "使い方",
          "使う方",
          "使って方"
        ],
        "answer": 1,
        "explanation": "使います bỏ ます rồi thêm 方 thành 使い方, nghĩa là cách dùng.",
        "source": "sources/speaking.pdf#page=73",
        "origin": "authored",
        "solution": {
          "completed": "このカメラの使い方を教えてください。",
          "meaning": "Hãy chỉ cho tôi cách dùng chiếc máy ảnh này.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "Cần bỏ ます; 使います方 không đúng cấu trúc gốc ます + 方.",
            "使います bỏ ます rồi thêm 方 thành 使い方, nghĩa là cách dùng.",
            "使う方 có thể có nghĩa khác theo ngữ cảnh; không phải dạng danh từ “cách dùng” của mẫu này.",
            "Không nối thể て với 方 để tạo từ cách dùng."
          ]
        },
        "id": "c67-2-30"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Trên bàn có ba con dao. Hỏi dùng con nào: （　）ナイフを使いますか。",
        "options": [
          "どの",
          "どれ",
          "だれ",
          "いつ"
        ],
        "answer": 0,
        "explanation": "どの đứng ngay trước danh từ ナイフ để hỏi con dao nào.",
        "source": "sources/speaking.pdf#page=64",
        "origin": "authored",
        "solution": {
          "completed": "どのナイフを使いますか。",
          "meaning": "Bạn sẽ dùng con dao nào?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "どの đứng ngay trước danh từ ナイフ để hỏi con dao nào.",
            "どれ tự đứng thay danh từ, không nối trực tiếp thành どれナイフ.",
            "だれ hỏi người; không bổ nghĩa ナイフ để chọn dao.",
            "いつ hỏi thời gian, không bổ nghĩa danh từ chỉ con dao."
          ]
        },
        "id": "c67-2-31"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Đàn ghi-ta đang phát tiếng; bạn thấy Lan chơi ngay lúc này: ランさんは今、ギターを（　）。",
        "options": [
          "弾きました",
          "弾きませんでした",
          "弾くいます",
          "弾いています"
        ],
        "answer": 3,
        "explanation": "弾く→弾いて + います diễn tả hành động đang diễn ra trước mắt.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "ランさんは今、ギターを弾いています。",
          "meaning": "Bây giờ bạn Lan đang chơi ghi-ta.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "弾きました là đã chơi, không nêu hành động đang diễn ra.",
            "弾きませんでした nói đã không chơi, trái việc đang nhìn thấy.",
            "Không nối 弾く với います; phải dùng thể て 弾いて.",
            "弾く→弾いて + います diễn tả hành động đang diễn ra trước mắt."
          ]
        },
        "id": "c67-2-32"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Đề nghị TỰ MÌNH giúp lấy cốc ra: コップを（　）。",
        "options": [
          "出しました",
          "出しませんでした",
          "出しましょうか",
          "出してください"
        ],
        "answer": 2,
        "explanation": "出します bỏ ます, thêm ましょうか để đề nghị mình giúp lấy ra.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "コップを出しましょうか。",
          "meaning": "Để tôi lấy cốc ra giúp nhé?",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "出しました kể đã lấy ra, không đề nghị giúp.",
            "出しませんでした nói đã không lấy ra, không thực hiện lời đề nghị.",
            "出します bỏ ます, thêm ましょうか để đề nghị mình giúp lấy ra.",
            "出してください nhờ người nghe lấy cốc ra, đổi người thực hiện so với yêu cầu."
          ]
        },
        "id": "c67-2-33"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "A hỏi ai đã làm món salad. B xác định chính Hana làm: ハナさん（　）作りました。",
        "options": [
          "の",
          "が",
          "を",
          "で"
        ],
        "answer": 1,
        "explanation": "が nêu người được xác định trong câu trả lời cho 誰が作りましたか.",
        "source": "sources/speaking.pdf#page=68",
        "origin": "authored",
        "solution": {
          "completed": "ハナさんが作りました。",
          "meaning": "Bạn Hana là người đã làm.",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "の nối danh từ, không nối ハナさん với 作りました để xác định người làm.",
            "が nêu người được xác định trong câu trả lời cho 誰が作りましたか.",
            "を đánh dấu đối tượng, không đánh dấu Hana là người làm trong câu này.",
            "で không đánh dấu người thực hiện hành động 作りました."
          ]
        },
        "id": "c67-2-34"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Trong bình vẫn còn nước trái cây. Nói “Nước trái cây VẪN CÒN”: ジュースは（　）。",
        "options": [
          "まだあります",
          "もうありません",
          "まだです",
          "ありませんでした"
        ],
        "answer": 0,
        "explanation": "まだあります cho biết đồ uống vẫn còn ở thời điểm hiện tại.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "ジュースはまだあります。",
          "meaning": "Nước trái cây vẫn còn.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだあります cho biết đồ uống vẫn còn ở thời điểm hiện tại.",
            "もうありません nghĩa là đã hết, trái dữ kiện còn trong bình.",
            "まだです là lời đáp “chưa làm” theo mẫu bài 6, không nói đủ ý vẫn còn đồ uống.",
            "ありませんでした nói đã không có trong quá khứ, không nêu trạng thái vẫn còn hiện tại."
          ]
        },
        "id": "c67-2-35"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Rủ bạn cùng nghe nhạc ở thư viện bằng ませんか: 図書館でいっしょに音楽を（　）。",
        "options": [
          "聞きました",
          "聞きませんでした",
          "聞くましょう",
          "聞きませんか"
        ],
        "answer": 3,
        "explanation": "聞きます bỏ ます rồi thêm ませんか tạo lời rủ cùng nghe.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "図書館でいっしょに音楽を聞きませんか。",
          "meaning": "Cùng nghe nhạc ở thư viện nhé?",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "聞きました kể đã nghe, không mời cùng nghe trong kế hoạch.",
            "聞きませんでした nói đã không nghe, khác ý rủ cùng làm.",
            "聞くましょう ghép sai; mẫu rủ phải dùng gốc 聞き.",
            "聞きます bỏ ます rồi thêm ませんか tạo lời rủ cùng nghe."
          ]
        },
        "id": "c67-2-36"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A：土曜日、コンサートへ行きませんか。 B RẤT MUỐN ĐI và nhận lời. Chọn lời B.",
        "options": [
          "もうありません。",
          "どこへも行きませんでした。",
          "いいですね。ぜひ行きましょう。",
          "すみません。土曜日はちょっと…。"
        ],
        "answer": 2,
        "explanation": "いいですね bày tỏ hưởng ứng; ぜひ行きましょう nhận lời đi cùng một cách tích cực.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "A：土曜日、コンサートへ行きませんか。 B：いいですね。ぜひ行きましょう。",
          "meaning": "A: Thứ bảy đi nghe hòa nhạc nhé? B: Hay đấy, nhất định cùng đi nhé.",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "もうありません nói đã hết, không nhận lời rủ đi nghe nhạc.",
            "行きませんでした kể đã không đi trong quá khứ, không nhận lời cho thứ bảy.",
            "いいですね bày tỏ hưởng ứng; ぜひ行きましょう nhận lời đi cùng một cách tích cực.",
            "…はちょっと… từ chối nhẹ, trái dữ kiện rất muốn đi và nhận lời."
          ]
        },
        "id": "c67-2-37"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "A：昼と夜とどちらがいいですか。 B chọn buổi TỐI thuận tiện hơn. Chọn lời đáp.",
        "options": [
          "朝がいちばん早いです。",
          "夜のほうがいいです。",
          "昼のほうがいいです。",
          "どちらもだめです。"
        ],
        "answer": 1,
        "explanation": "夜のほうがいいです chọn 夜 là phương án tốt hơn trong hai thời điểm.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "A：昼と夜とどちらがいいですか。 B：夜のほうがいいです。",
          "meaning": "A: Ban ngày và buổi tối, lúc nào tiện hơn? B: Buổi tối tiện hơn.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "朝がいちばん早いです nói buổi sáng sớm nhất, không trả lời lựa chọn tối thuận tiện hơn.",
            "夜のほうがいいです chọn 夜 là phương án tốt hơn trong hai thời điểm.",
            "昼のほうがいいです chọn ban ngày, trái yêu cầu chọn buổi tối.",
            "どちらもだめです nói cả hai đều không được, không chọn tối."
          ]
        },
        "id": "c67-2-38"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "A：何時に図書館で会いますか。 B muốn ĐỀ XUẤT hai giờ. Chọn lời B.",
        "options": [
          "二時はどうですか。",
          "二時に会いました。",
          "何時がいちばん高いですか。",
          "二時はまだありません。"
        ],
        "answer": 0,
        "explanation": "二時はどうですか dùng Nはどうですか để đưa giờ hai giờ ra bàn.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "A：何時に図書館で会いますか。 B：二時はどうですか。",
          "meaning": "A: Mấy giờ gặp ở thư viện? B: Hai giờ thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "二時はどうですか dùng Nはどうですか để đưa giờ hai giờ ra bàn.",
            "会いました kể cuộc gặp đã xảy ra, không đề xuất giờ cho cuộc hẹn.",
            "いちばん高い hỏi mức cao/giá cao nhất, không đề xuất giờ gặp.",
            "まだありません không đề xuất giờ hai giờ theo mẫu đang học."
          ]
        },
        "id": "c67-2-39"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "A：会場は公園の中ですよ。 B muốn XÁC NHẬN vị trí vừa nghe: 公園の中です（　）。",
        "options": [
          "よ",
          "を",
          "から",
          "ね"
        ],
        "answer": 3,
        "explanation": "ね trong lời B lặp lại để kiểm tra vị trí vừa nghe từ A.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "A：会場は公園の中ですよ。 B：公園の中ですね。",
          "meaning": "A: Địa điểm tổ chức ở trong công viên đấy. B: Ở trong công viên, đúng nhỉ.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "よ trong lời B thường báo thông tin về phía người nghe; khác ý xác nhận lại dữ kiện mới nghe.",
            "を không làm đuôi xác nhận sau です.",
            "から sẽ mở một lý do khi nối sau câu, không diễn tả xác nhận vị trí ở đây.",
            "ね trong lời B lặp lại để kiểm tra vị trí vừa nghe từ A."
          ]
        },
        "id": "c67-2-40"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "A hỏi vị trí của bạn bè: 友達はどこにいますか。 B biết họ ở NGOÀI thư viện. Chọn lời B.",
        "options": [
          "図書館の外にあります。",
          "図書館の外で食べます。",
          "図書館の外にいます。",
          "図書館の中にいます。"
        ],
        "answer": 2,
        "explanation": "外 là bên ngoài; người dùng います để nói nơi có mặt.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "A：友達はどこにいますか。 B：図書館の外にいます。",
          "meaning": "A: Các bạn đang ở đâu? B: Ở ngoài thư viện.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "あります dùng cho đồ vật/cây cối trong mẫu này; các bạn là người nên dùng います.",
            "食べます nói hoạt động ăn, không diễn đạt trực tiếp sự có mặt theo câu trả lời vị trí được yêu cầu.",
            "外 là bên ngoài; người dùng います để nói nơi có mặt.",
            "中 là bên trong, đổi vị trí so với dữ kiện ở ngoài."
          ]
        },
        "id": "c67-2-41"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "A：すみませんが、そのフォークを貸してください。 B sẵn lòng CHO MƯỢN. Chọn lời B.",
        "options": [
          "どちらが広いですか。",
          "はい、どうぞ。",
          "いいえ、貸しません。",
          "もう行きました。"
        ],
        "answer": 1,
        "explanation": "はい、どうぞ nhận lời và đưa vật được hỏi cho người mượn dùng.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "A：すみませんが、そのフォークを貸してください。 B：はい、どうぞ。",
          "meaning": "A: Xin lỗi, cho tôi mượn chiếc nĩa đó nhé. B: Vâng, bạn dùng đi.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "どちらが広いですか hỏi bên nào rộng hơn, không đáp lời nhờ cho mượn.",
            "はい、どうぞ nhận lời và đưa vật được hỏi cho người mượn dùng.",
            "貸しません từ chối cho mượn, trái dữ kiện sẵn lòng.",
            "もう行きました nói đã đi rồi, không nhận lời nhờ cho mượn nĩa."
          ]
        },
        "id": "c67-2-42"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "A thấy chủ nhà bận và muốn đề nghị MÌNH SẼ MỞ cửa. Chọn lời A.",
        "options": [
          "ドアを開けましょうか。",
          "ドアを開けてください。",
          "ドアを開けましたか。",
          "ドアを開けませんでした。"
        ],
        "answer": 0,
        "explanation": "開けましょうか chủ động đề nghị người nói mở cửa giúp chủ nhà.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "A：ドアを開けましょうか。 B：お願いします。",
          "meaning": "A: Để tôi mở cửa giúp nhé? B: Nhờ bạn nhé.",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "開けましょうか chủ động đề nghị người nói mở cửa giúp chủ nhà.",
            "開けてください nhờ người nghe mở cửa; đổi vai người thực hiện.",
            "開けましたか hỏi đã mở chưa, không đề nghị giúp mở.",
            "開けませんでした kể đã không mở, không thực hiện lời đề nghị."
          ]
        },
        "id": "c67-2-43"
      },
      {
        "category": "translation",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn bản dịch: “Thư viện này yên tĩnh hơn quán cà phê đó.”",
        "options": [
          "あの喫茶店はこの図書館より静かです。",
          "この図書館はあの喫茶店よりにぎやかです。",
          "この図書館はあの喫茶店を静かです。",
          "この図書館はあの喫茶店より静かです。"
        ],
        "answer": 3,
        "explanation": "AはBより静かです nói A yên tĩnh hơn B; B là quán cà phê làm mốc.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "この図書館はあの喫茶店より静かです。",
          "meaning": "Thư viện này yên tĩnh hơn quán cà phê đó.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "Đảo A và B nên thành quán cà phê yên tĩnh hơn thư viện, ngược câu đích.",
            "にぎやか là nhộn nhịp, không phải yên tĩnh.",
            "を không nêu mốc so sánh; cần より sau あの喫茶店.",
            "AはBより静かです nói A yên tĩnh hơn B; B là quán cà phê làm mốc."
          ]
        },
        "id": "c67-2-44"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Dịch đúng: “Bây giờ Mai đang gọi điện ở ngoài.”",
        "options": [
          "今、マイさんは中で電話をかけています。",
          "今、マイさんは外で電話をかけてください。",
          "今、マイさんは外で電話をかけています。",
          "今、マイさんは外で電話をかけました。"
        ],
        "answer": 2,
        "explanation": "かける→かけて + います diễn tả đang gọi; 外で là nơi hành động ở ngoài.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "今、マイさんは外で電話をかけています。",
          "meaning": "Bây giờ Mai đang gọi điện ở ngoài.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "中で đổi nơi hành động thành bên trong, trái câu đích ở ngoài.",
            "かけてください là lời nhờ gọi điện, không tường thuật Mai đang gọi.",
            "かける→かけて + います diễn tả đang gọi; 外で là nơi hành động ở ngoài.",
            "かけました nói đã gọi, không giữ nghĩa đang diễn ra."
          ]
        },
        "id": "c67-2-45"
      }
    ],
    "contentVersion": "2026-10-23"
  },
  {
    "id": "chapter67-3",
    "title": "Bài 6–7 · Đề 03",
    "description": "Đi xem thể thao và lễ hội trong thành phố: chọn điểm đến, hẹn gặp, hỏi vị trí và chuẩn bị đồ ăn nước uống. Đủ 18 mục ngữ pháp, 6 topic; ma trận 45 câu theo đề mẫu ảnh.",
    "lessons": [
      6,
      7
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Trên lịch thể thao có chữ「試合」. Chọn cách đọc của từ này.",
        "options": [
          "じあい",
          "しあい",
          "しごと",
          "しえい"
        ],
        "answer": 1,
        "explanation": "試合 đọc là しあい, nghĩa là trận đấu.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "試合（しあい）",
          "meaning": "Trận đấu.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "じあい đổi sai âm đầu し thành じ; đây không phải cách đọc của 試合.",
            "試合 đọc là しあい, nghĩa là trận đấu.",
            "しごと là cách đọc của 仕事, nghĩa là công việc; không đọc 試合 như vậy.",
            "しえい đổi sai âm あ trong あい thành え; 試合 đọc là しあい."
          ]
        },
        "id": "c67-3-01"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Trong phần phương tiện đi chơi,「地下鉄」được đọc thế nào?",
        "options": [
          "ちかてつ",
          "ちかでん",
          "ちがてつ",
          "じかてつ"
        ],
        "answer": 0,
        "explanation": "地下鉄 đọc là ちかてつ, nghĩa là tàu điện ngầm.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "地下鉄（ちかてつ）",
          "meaning": "Tàu điện ngầm.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "地下鉄 đọc là ちかてつ, nghĩa là tàu điện ngầm.",
            "ちかでん thay sai phần 鉄（てつ）bằng でん; không phải cách đọc của 地下鉄.",
            "ちがてつ làm đục âm か thành が; 地下 đọc là ちか trong từ này.",
            "じかてつ đổi sai âm đầu ち thành じ; toàn từ đọc là ちかてつ."
          ]
        },
        "id": "c67-3-02"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Tính từ「近い」trong phần chọn địa điểm đi chơi có cách đọc nào?",
        "options": [
          "とおい",
          "はやい",
          "ひろい",
          "ちかい"
        ],
        "answer": 3,
        "explanation": "近い đọc là ちかい, nghĩa là gần.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "近い（ちかい）",
          "meaning": "Gần.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "とおい là 遠い, nghĩa là xa, trái nghĩa với 近い.",
            "はやい là 早い, nghĩa là sớm; không phải cách đọc của 近い.",
            "ひろい là 広い, nghĩa là rộng; không đọc 近い như vậy.",
            "近い đọc là ちかい, nghĩa là gần."
          ]
        },
        "id": "c67-3-03"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Một biển chỉ đường ghi「交番」. Chọn cách đọc đúng.",
        "options": [
          "こばん",
          "こうはん",
          "こうばん",
          "こうえん"
        ],
        "answer": 2,
        "explanation": "交番 đọc là こうばん, nghĩa là đồn cảnh sát nhỏ.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "交番（こうばん）",
          "meaning": "Đồn cảnh sát nhỏ.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "こばん bỏ mất âm dài う của こう; 交番 đọc là こうばん.",
            "こうはん làm mất dấu đục của ばん; cách đọc đúng là こうばん.",
            "交番 đọc là こうばん, nghĩa là đồn cảnh sát nhỏ.",
            "こうえん là cách đọc của 公園, công viên; 番 không đọc là えん."
          ]
        },
        "id": "c67-3-04"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Từ chỉ vị trí「後ろ」trên sơ đồ khu lễ hội đọc là gì?",
        "options": [
          "そと",
          "うしろ",
          "まえ",
          "となり"
        ],
        "answer": 1,
        "explanation": "後ろ đọc là うしろ, nghĩa là phía sau.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "後ろ（うしろ）",
          "meaning": "Phía sau.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "そと là 外, bên ngoài; không phải cách đọc của 後ろ.",
            "後ろ đọc là うしろ, nghĩa là phía sau.",
            "まえ là 前, phía trước; khác hướng với 後ろ.",
            "となり là 隣, bên cạnh; không phải phía sau."
          ]
        },
        "id": "c67-3-05"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Ở bàn chuẩn bị đồ ăn có lọ ghi「塩」. Chữ này đọc thế nào?",
        "options": [
          "しお",
          "さとう",
          "しょうゆ",
          "しろ"
        ],
        "answer": 0,
        "explanation": "塩 đọc là しお, nghĩa là muối.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "塩（しお）",
          "meaning": "Muối.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "塩 đọc là しお, nghĩa là muối.",
            "さとう là 砂糖, đường; không phải cách đọc của 塩.",
            "しょうゆ là nước tương; đây là một gia vị khác với 塩.",
            "しろ thay âm お bằng ろ; 塩 đọc là しお, không có âm ろ."
          ]
        },
        "id": "c67-3-06"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Đồ cần mang đến bể bơi là「みずぎ」. Chọn cách viết đúng.",
        "options": [
          "水木",
          "木着",
          "水気",
          "水着"
        ],
        "answer": 3,
        "explanation": "水着 đọc là みずぎ, nghĩa là đồ bơi.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "水着（みずぎ）",
          "meaning": "Đồ bơi.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "水木 ghép 水 với 木, không viết được từ みずぎ chỉ đồ bơi.",
            "木着 dùng 木 thay cho 水; từ đồ bơi cần chữ 水 và 着.",
            "水気 là từ khác, đọc みずけ và chỉ độ ẩm/hơi nước; không phải đồ bơi.",
            "水着 đọc là みずぎ, nghĩa là đồ bơi."
          ]
        },
        "id": "c67-3-07"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Trên thực đơn, mục「のみもの」có nghĩa là đồ uống. Chọn cách viết.",
        "options": [
          "買い物",
          "読み物",
          "飲み物",
          "食べ物"
        ],
        "answer": 2,
        "explanation": "飲み物 đọc là のみもの, nghĩa là đồ uống.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "飲み物（のみもの）",
          "meaning": "Đồ uống.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "買い物 đọc かいもの, nghĩa là việc mua sắm; không khớp のみもの.",
            "読み物 đọc よみもの, nghĩa là sách báo/tài liệu để đọc; khác đồ uống.",
            "飲み物 đọc là のみもの, nghĩa là đồ uống.",
            "食べ物 đọc たべもの, nghĩa là đồ ăn; không phải đồ uống."
          ]
        },
        "id": "c67-3-08"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách viết「とります」với nghĩa “lấy” một đồ vật giúp bạn.",
        "options": [
          "乗ります",
          "取ります",
          "撮ります",
          "持ちます"
        ],
        "answer": 1,
        "explanation": "取ります đọc là とります, nghĩa là lấy.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "取ります（とります）",
          "meaning": "Lấy.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "乗ります đọc のります, nghĩa là lên phương tiện; khác cả âm và nghĩa.",
            "取ります đọc là とります, nghĩa là lấy.",
            "撮ります cũng đọc とります nhưng nghĩa là chụp ảnh; đề yêu cầu lấy đồ vật.",
            "持ちます đọc もちます, nghĩa là cầm/mang; không viết từ とります."
          ]
        },
        "id": "c67-3-09"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Người biểu diễn chọn một「うた」, nghĩa là bài hát. Chọn chữ đúng.",
        "options": [
          "歌",
          "花",
          "音",
          "話"
        ],
        "answer": 0,
        "explanation": "歌 đọc là うた, nghĩa là bài hát.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "歌（うた）",
          "meaning": "Bài hát.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "歌 đọc là うた, nghĩa là bài hát.",
            "花 đọc はな, nghĩa là hoa; khác với bài hát.",
            "音 đọc おと trong nghĩa âm thanh; không viết từ うた.",
            "話 có cách đọc はなし khi chỉ câu chuyện; không phải chữ của うた."
          ]
        },
        "id": "c67-3-10"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chuyến đi diễn ra vào「らいしゅう」, tức tuần sau. Chọn cách viết.",
        "options": [
          "今週",
          "来月",
          "先週",
          "来週"
        ],
        "answer": 3,
        "explanation": "来週 đọc là らいしゅう, nghĩa là tuần sau.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "来週（らいしゅう）",
          "meaning": "Tuần sau.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "今週 đọc こんしゅう, tuần này; khác mốc thời gian tuần sau.",
            "来月 đọc らいげつ, tháng sau; sai đơn vị thời gian.",
            "先週 đọc せんしゅう, tuần trước; ngược hướng thời gian với 来週.",
            "来週 đọc là らいしゅう, nghĩa là tuần sau."
          ]
        },
        "id": "c67-3-11"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Bạn đã có cuộc hẹn:「やくそく」. Chọn cách viết đúng của từ này.",
        "options": [
          "用事",
          "予束",
          "約束",
          "約東"
        ],
        "answer": 2,
        "explanation": "約束 đọc là やくそく, nghĩa là lời hứa; cuộc hẹn.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "約束（やくそく）",
          "meaning": "Lời hứa; cuộc hẹn.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "用事 đọc ようじ, việc cần làm/việc bận; không viết từ やくそく.",
            "予束 dùng sai chữ đầu 予; やくそく được viết bằng 約 và 束.",
            "約束 đọc là やくそく, nghĩa là lời hứa; cuộc hẹn.",
            "約東 dùng 東 thay cho 束; hai chữ có nét gần nhau nhưng đây không phải やくそく."
          ]
        },
        "id": "c67-3-12"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Để giữ mát nước uống, ta dùng「れいぞうこ」. Chọn cách viết.",
        "options": [
          "電子レンジ",
          "冷蔵庫",
          "冷蔵車",
          "冷像庫"
        ],
        "answer": 1,
        "explanation": "冷蔵庫 đọc là れいぞうこ, nghĩa là tủ lạnh.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "冷蔵庫（れいぞうこ）",
          "meaning": "Tủ lạnh.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "電子レンジ đọc でんしれんじ, lò vi sóng; đó là thiết bị khác.",
            "冷蔵庫 đọc là れいぞうこ, nghĩa là tủ lạnh.",
            "冷蔵車 có chữ 車, chỉ xe lạnh và không đọc là れいぞうこ.",
            "冷像庫 thay sai 蔵 bằng 像; đây không phải cách viết chuẩn của tủ lạnh."
          ]
        },
        "id": "c67-3-13"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách viết「あけます」với nghĩa “mở” cửa sổ.",
        "options": [
          "開けます",
          "閉めます",
          "明けます",
          "置きます"
        ],
        "answer": 0,
        "explanation": "開けます đọc là あけます, nghĩa là mở.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "開けます（あけます）",
          "meaning": "Mở.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "開けます đọc là あけます, nghĩa là mở.",
            "閉めます đọc しめます, nghĩa là đóng; trái với hành động mở cửa sổ.",
            "明けます cũng đọc あけます nhưng dùng với việc trời sáng/kỳ hạn kết thúc; mở cửa sổ viết 開けます.",
            "置きます đọc おきます, nghĩa là đặt/để; không phải mở."
          ]
        },
        "id": "c67-3-14"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Huy muốn nói “Cùng lái xe đi chơi nhé?” Chọn từ chỉ việc lái xe đi chơi:（　）をしませんか。",
        "options": [
          "セール",
          "コンサート",
          "カラオケ",
          "ドライブ"
        ],
        "answer": 3,
        "explanation": "ドライブ là hoạt động lái xe đi chơi; ドライブをします diễn đạt thực hiện hoạt động đó.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "ドライブをしませんか。",
          "meaning": "Cùng lái xe đi chơi nhé?",
          "rule": "Đối chiếu mục từ và cách đọc chuẩn trong PDF New words list, bài 6, topic 1. Phân biệt âm dài, âm đục, âm ngắt và nghĩa của từng mục từ; không coi các cách đọc khác tồn tại trong từ điển là sai nếu chưa xác định ngữ cảnh.",
          "options": [
            "セール là đợt giảm giá; không có nghĩa là lái xe đi chơi.",
            "コンサート là buổi hòa nhạc; không chỉ chuyến đi bằng ô tô.",
            "カラオケ là karaoke; đó là hoạt động hát, khác mục tiêu của câu.",
            "ドライブ là hoạt động lái xe đi chơi; ドライブをします diễn đạt thực hiện hoạt động đó."
          ]
        },
        "id": "c67-3-15"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Điền lời rủ cùng xem bóng đá chiều mai: あしたの午後、一緒にサッカーを（　）。",
        "options": [
          "見ました",
          "見てください",
          "見ませんか",
          "見ませんでした"
        ],
        "answer": 2,
        "explanation": "Vませんか tạo lời rủ cùng thực hiện; 見ます chuyển thành 見ませんか.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "あしたの午後、一緒にサッカーを見ませんか。",
          "meaning": "Chiều mai cùng xem bóng đá nhé?",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "見ました kể đã xem; không thể hiện lời mời và không khớp あした.",
            "見てください yêu cầu người nghe xem, không phải lời rủ hai người cùng xem.",
            "Vませんか tạo lời rủ cùng thực hiện; 見ます chuyển thành 見ませんか.",
            "見ませんでした kể đã không xem trong quá khứ; không rủ xem chiều mai."
          ]
        },
        "id": "c67-3-16"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Thông báo sự kiện: 土曜日、公園（　）お祭り（　）あります。Chọn cặp trợ từ.",
        "options": [
          "を・に",
          "で・が",
          "に・が",
          "で・を"
        ],
        "answer": 1,
        "explanation": "Sự kiện diễn ra tại 公園 dùng で; お祭り là sự kiện được giới thiệu nên dùng が.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "土曜日、公園でお祭りがあります。",
          "meaning": "Thứ bảy có lễ hội diễn ra ở công viên.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "を không chỉ nơi tổ chức và に không đánh dấu sự kiện; cả hai vị trí đều sai.",
            "Sự kiện diễn ra tại 公園 dùng で; お祭り là sự kiện được giới thiệu nên dùng が.",
            "に・が phù hợp với sự tồn tại của đồ vật ở một nơi; ở đây 公園 là nơi tổ chức lễ hội nên cần で.",
            "で chỉ đúng nơi diễn ra, nhưng を không đánh dấu sự kiện với あります; cần が."
          ]
        },
        "id": "c67-3-17"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Bạn có sáu tấm vé vào xem thể thao: チケットが六（　）あります。",
        "options": [
          "枚",
          "本",
          "冊",
          "人"
        ],
        "answer": 0,
        "explanation": "Vé là vật mỏng, phẳng nên đếm bằng 枚; 六枚 đọc ろくまい.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "チケットが六枚あります。",
          "meaning": "Tôi có sáu tấm vé.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "Vé là vật mỏng, phẳng nên đếm bằng 枚; 六枚 đọc ろくまい.",
            "本 đếm vật dài như chai/bút; không phải lượng từ của vé.",
            "冊 đếm sách/vở; tấm vé không phải một cuốn sách.",
            "人 đếm người; câu đang đếm tấm vé."
          ]
        },
        "id": "c67-3-18"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Hỏi bên nào rộng hơn giữa hai công viên: 青山公園と緑公園と（　）広いですか。",
        "options": [
          "どちらも",
          "どのが",
          "何を",
          "どちらが"
        ],
        "answer": 3,
        "explanation": "AとBとどちらが…ですか hỏi chọn một trong hai đối tượng để so sánh đặc điểm.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "青山公園と緑公園とどちらが広いですか。",
          "meaning": "Công viên Aoyama và công viên Midori, bên nào rộng hơn?",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "どちらも là cả hai; không tạo câu hỏi bên nào có đặc điểm nổi bật hơn.",
            "どの phải bổ nghĩa một danh từ; どのが đứng riêng như vậy không hoàn chỉnh.",
            "何を hỏi đối tượng của hành động; 広い là tính từ và không nhận を ở đây.",
            "AとBとどちらが…ですか hỏi chọn một trong hai đối tượng để so sánh đặc điểm."
          ]
        },
        "id": "c67-3-19"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Cần nói “Cửa hàng A rẻ hơn cửa hàng B”: A店はB店（　）安いです。",
        "options": [
          "で",
          "と",
          "より",
          "のほうが"
        ],
        "answer": 2,
        "explanation": "より đặt sau mốc so sánh B店; đối tượng được nhận xét là A店.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "A店はB店より安いです。",
          "meaning": "Cửa hàng A rẻ hơn cửa hàng B.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "で không đánh dấu mốc so sánh B; mẫu so sánh hơn cần より.",
            "と có thể nối hai đối tượng nhưng riêng B店と không tạo nghĩa hơn B trong cấu trúc này.",
            "より đặt sau mốc so sánh B店; đối tượng được nhận xét là A店.",
            "のほうが sau B店 sẽ đưa B thành phía rẻ hơn, không diễn đạt đúng A rẻ hơn B trong câu này."
          ]
        },
        "id": "c67-3-20"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Điền nghĩa “nhất” khi chọn môn thích nhất: スポーツでテニスが（　）好きです。",
        "options": [
          "より",
          "いちばん",
          "どちら",
          "まだ"
        ],
        "answer": 1,
        "explanation": "で giới hạn nhóm là thể thao; いちばん nêu mức độ cao nhất trong nhóm đó.",
        "source": "sources/speaking.pdf#page=46",
        "origin": "authored",
        "solution": {
          "completed": "スポーツでテニスがいちばん好きです。",
          "meaning": "Trong các môn thể thao, tôi thích quần vợt nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "より đánh dấu mốc so sánh sau một danh từ; không đứng một mình ở đây để nói nhất.",
            "で giới hạn nhóm là thể thao; いちばん nêu mức độ cao nhất trong nhóm đó.",
            "どちら hỏi một trong hai lựa chọn; không có nghĩa là nhất.",
            "まだ là vẫn/chưa tùy cấu trúc; không tạo ý so sánh nhất."
          ]
        },
        "id": "c67-3-21"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "A：もうこの公園へ行きましたか。 B：（　）。Điền lời đáp “Chưa”.",
        "options": [
          "いいえ、まだです",
          "はい、行きました",
          "いいえ、もうです",
          "はい、まだです"
        ],
        "answer": 0,
        "explanation": "もうVましたか hỏi đã làm tính đến hiện tại chưa; いいえ、まだです đáp chưa.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "A：もうこの公園へ行きましたか。 B：いいえ、まだです。",
          "meaning": "Bạn đã đến công viên này chưa? — Chưa.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "もうVましたか hỏi đã làm tính đến hiện tại chưa; いいえ、まだです đáp chưa.",
            "はい、行きました trả lời có, đã đến rồi; trái với nghĩa cần chọn.",
            "もうです không phải lời đáp chưa; もう không thay thế まだ trong mẫu này.",
            "はい xác nhận có nhưng まだです lại nói chưa, nên hai phần mâu thuẫn với câu hỏi."
          ]
        },
        "id": "c67-3-22"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Đề xuất giờ tập trung, nghĩa là “Chín giờ rưỡi thì sao?”: 九時半は（　）。",
        "options": [
          "どこですか",
          "だれですか",
          "何枚ですか",
          "どうですか"
        ],
        "answer": 3,
        "explanation": "Nはどうですか đề xuất một phương án; ở đây phương án là giờ hẹn 九時半.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "九時半はどうですか。",
          "meaning": "Chín giờ rưỡi thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "どこですか hỏi ở đâu; không đề xuất một giờ.",
            "だれですか hỏi là ai; không hợp với danh từ chỉ thời gian 九時半.",
            "何枚ですか hỏi số tấm; không dùng để đề xuất giờ tập trung.",
            "Nはどうですか đề xuất một phương án; ở đây phương án là giờ hẹn 九時半."
          ]
        },
        "id": "c67-3-23"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Bạn vừa được hẹn “十時です”. Điền đuôi xác nhận lại thông tin: 十時です（　）。わかりました。",
        "options": [
          "に",
          "が",
          "ね",
          "を"
        ],
        "answer": 2,
        "explanation": "ね xác nhận thông tin giờ hẹn người nghe vừa cung cấp, phù hợp việc nhắc lại 十時.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "十時ですね。わかりました。",
          "meaning": "Mười giờ nhỉ. Tôi hiểu rồi.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "に có thể đánh dấu thời điểm trước động từ, nhưng không làm đuôi xác nhận sau です.",
            "が đánh dấu chủ ngữ hoặc nối mệnh đề; không thể hiện xác nhận lại giờ trong câu này.",
            "ね xác nhận thông tin giờ hẹn người nghe vừa cung cấp, phù hợp việc nhắc lại 十時.",
            "を đánh dấu tân ngữ trước động từ, không đứng sau です để xác nhận."
          ]
        },
        "id": "c67-3-24"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Một con chó đang ở dưới ghế: 犬はいすの下に（　）。Chọn động từ tồn tại.",
        "options": [
          "使います",
          "います",
          "あります",
          "食べます"
        ],
        "answer": 1,
        "explanation": "犬 là động vật nên dùng います; いすの下に nêu vị trí ở dưới ghế.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "犬はいすの下にいます。",
          "meaning": "Con chó ở dưới ghế.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "使います là dùng; không thay cho động từ tồn tại của con chó.",
            "犬 là động vật nên dùng います; いすの下に nêu vị trí ở dưới ghế.",
            "あります dùng cho đồ vật/cây/công trình; không dùng cho con chó trong nghĩa tồn tại này.",
            "食べます là ăn, không diễn đạt con chó có mặt tại một vị trí."
          ]
        },
        "id": "c67-3-25"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Giới thiệu có hoa ở trước cửa hàng: 店の前（　）花（　）あります。",
        "options": [
          "に・が",
          "で・が",
          "に・を",
          "を・で"
        ],
        "answer": 0,
        "explanation": "Nơi tồn tại dùng に; 花 là sự vật mới được giới thiệu nên đi với が và あります.",
        "source": "sources/speaking.pdf#page=62",
        "origin": "authored",
        "solution": {
          "completed": "店の前に花があります。",
          "meaning": "Trước cửa hàng có hoa.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "Nơi tồn tại dùng に; 花 là sự vật mới được giới thiệu nên đi với が và あります.",
            "で・が nhầm nơi tồn tại thành nơi diễn ra hành động/sự kiện; ở đây cần に.",
            "に chỉ đúng nơi tồn tại nhưng 花を không kết hợp với あります để giới thiệu có hoa.",
            "を không đánh dấu vị trí và で không đánh dấu vật được giới thiệu; cần に・が."
          ]
        },
        "id": "c67-3-26"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chuẩn bị mang nước đi chơi. Chuyển 持ちます（持つ）sang thể て.",
        "options": [
          "持ちて",
          "持いて",
          "持んで",
          "持って"
        ],
        "answer": 3,
        "explanation": "持つ thuộc nhóm 1, đuôi つ đổi thành って: 持って.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "持つ → 持って",
          "meaning": "Cầm/mang: thể て là 持って.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "持ちて giữ gốc ます rồi thêm て; đó không phải quy tắc chia 持つ.",
            "持いて áp dụng nhầm dạng く→いて; 持つ có đuôi つ.",
            "持んで áp dụng nhầm dạng む・ぶ・ぬ→んで; 持つ cần って.",
            "持つ thuộc nhóm 1, đuôi つ đổi thành って: 持って."
          ]
        },
        "id": "c67-3-27"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Trong kế hoạch tới bể bơi, động từ 泳ぎます（泳ぐ）có thể て nào?",
        "options": [
          "泳って",
          "泳ぎて",
          "泳いで",
          "泳いて"
        ],
        "answer": 2,
        "explanation": "Động từ nhóm 1 kết thúc bằng ぐ đổi thành いで; 泳ぐ→泳いで.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "泳ぐ → 泳いで",
          "meaning": "Bơi: thể て là 泳いで.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "泳って áp dụng nhầm đuôi う・つ・る→って; từ này kết thúc bằng ぐ.",
            "泳ぎて chỉ ghép gốc ます với て; 泳ぐ phải đổi ぐ thành いで.",
            "Động từ nhóm 1 kết thúc bằng ぐ đổi thành いで; 泳ぐ→泳いで.",
            "泳いて dùng て không đục, thuộc quy tắc く; 泳ぐ phải dùng いで."
          ]
        },
        "id": "c67-3-28"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Bạn muốn mượn bản đồ và nhờ bạn cho mượn: すみませんが、地図を（　）。",
        "options": [
          "貸しますください",
          "貸してください",
          "貸しましょうか",
          "貸しました"
        ],
        "answer": 1,
        "explanation": "貸す→貸して; Vてください là nhờ người nghe làm. Người nghe cho mượn nên dùng 貸してください.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "すみませんが、地図を貸してください。",
          "meaning": "Xin lỗi, hãy cho tôi mượn bản đồ.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "貸しますください ghép ます với ください sai; cần thể て là 貸して.",
            "貸す→貸して; Vてください là nhờ người nghe làm. Người nghe cho mượn nên dùng 貸してください.",
            "貸しましょうか là người nói đề nghị cho người khác mượn; đảo vai so với việc đi mượn bản đồ.",
            "貸しました kể đã cho mượn trong quá khứ; không nhờ cho mượn bây giờ."
          ]
        },
        "id": "c67-3-29"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Muốn nói dùng nĩa ăn bánh: フォーク（　）ケーキを食べます。",
        "options": [
          "で",
          "に",
          "が",
          "を"
        ],
        "answer": 0,
        "explanation": "で đánh dấu dụng cụ thực hiện hành động; ケーキを là thứ được ăn.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "フォークでケーキを食べます。",
          "meaning": "Tôi ăn bánh bằng nĩa.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "で đánh dấu dụng cụ thực hiện hành động; ケーキを là thứ được ăn.",
            "に không đánh dấu dụng cụ ăn trong mẫu này; cần フォークで.",
            "が sẽ đặt nĩa làm chủ thể, không chỉ công cụ dùng để ăn.",
            "を đánh dấu đối tượng; câu đã có ケーキを và cần で cho dụng cụ."
          ]
        },
        "id": "c67-3-30"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Không biết dùng máy bán hàng tự động. Điền “cách dùng”: この自動販売機の（　）を教えてください。",
        "options": [
          "使う方",
          "使って方",
          "使います方",
          "使い方"
        ],
        "answer": 3,
        "explanation": "使います bỏ ます được 使い, thêm 方 thành 使い方; の nối thiết bị với cách dùng.",
        "source": "sources/speaking.pdf#page=73",
        "origin": "authored",
        "solution": {
          "completed": "この自動販売機の使い方を教えてください。",
          "meaning": "Hãy chỉ tôi cách dùng máy bán hàng tự động này.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "使う方 không tạo danh từ cách dùng trong mẫu V gốc ます＋方; phải dùng 使い方.",
            "使って方 lấy thể て ghép với 方; đây không phải cách tạo từ chỉ phương pháp.",
            "使います方 giữ ます trước 方 nên sai cấu tạo; cần bỏ ます.",
            "使います bỏ ます được 使い, thêm 方 thành 使い方; の nối thiết bị với cách dùng."
          ]
        },
        "id": "c67-3-31"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Có ba chiếc cốc khác màu. Hỏi “Dùng chiếc cốc nào?”:（　）コップを使いますか。",
        "options": [
          "だれ",
          "どう",
          "どの",
          "どれ"
        ],
        "answer": 2,
        "explanation": "どの bổ nghĩa trực tiếp danh từ コップ; dùng khi hỏi chọn một vật trong số nhiều vật.",
        "source": "sources/speaking.pdf#page=64",
        "origin": "authored",
        "solution": {
          "completed": "どのコップを使いますか。",
          "meaning": "Dùng chiếc cốc nào?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "だれ hỏi người; ở đây đang hỏi lựa chọn cốc.",
            "どう hỏi cách thức/nhận xét; không bổ nghĩa danh từ コップ như どの.",
            "どの bổ nghĩa trực tiếp danh từ コップ; dùng khi hỏi chọn một vật trong số nhiều vật.",
            "どれ tự thay cho một đồ vật; không đứng trực tiếp trước danh từ コップ."
          ]
        },
        "id": "c67-3-32"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Ngay lúc này Mai đang gọi điện: 今、マイさんは電話を（　）。",
        "options": [
          "かけますでした",
          "かけています",
          "かけました",
          "かけましょう"
        ],
        "answer": 1,
        "explanation": "Hành động đang diễn ra dùng Vて＋います; かける→かけて→かけています.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "今、マイさんは電話をかけています。",
          "meaning": "Bây giờ Mai đang gọi điện.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "かけますでした là cách ghép sai ます và でした, không phải dạng đang làm.",
            "Hành động đang diễn ra dùng Vて＋います; かける→かけて→かけています.",
            "かけました kể đã gọi điện; không diễn tả việc đang diễn ra ngay lúc này.",
            "かけましょう đề nghị cùng gọi; không thông báo Mai đang gọi."
          ]
        },
        "id": "c67-3-33"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Bạn thấy Lan có chiếc túi nặng và chủ động đề nghị mình cầm giúp: そのかばんを（　）。",
        "options": [
          "持ちましょうか",
          "持ってください",
          "持ちましたか",
          "持ちませんでした"
        ],
        "answer": 0,
        "explanation": "Gốc 持ち＋ましょうか là người nói đề nghị làm giúp người nghe.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "そのかばんを持ちましょうか。",
          "meaning": "Để tôi cầm chiếc túi đó giúp nhé?",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "Gốc 持ち＋ましょうか là người nói đề nghị làm giúp người nghe.",
            "持ってください nhờ người nghe cầm túi; không phải mình đề nghị cầm giúp.",
            "持ちましたか hỏi đã cầm chưa; không đưa ra sự giúp đỡ.",
            "持ちませんでした kể đã không cầm trong quá khứ; không đề nghị giúp."
          ]
        },
        "id": "c67-3-34"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "Muốn biết người đã mua bánh mì: 誰（　）パンを買いましたか。",
        "options": [
          "を",
          "で",
          "の",
          "が"
        ],
        "answer": 3,
        "explanation": "誰が hỏi chủ thể thực hiện hành động; パンを đã là đối tượng được mua.",
        "source": "sources/speaking.pdf#page=68",
        "origin": "authored",
        "solution": {
          "completed": "誰がパンを買いましたか。",
          "meaning": "Ai đã mua bánh mì?",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "を sẽ biến 誰 thành đối tượng, trong khi câu cần hỏi người mua và đã có パンを.",
            "で không đánh dấu chủ thể chưa biết của hành động 買いました.",
            "の nối danh từ hoặc chỉ sở hữu, không đánh dấu người thực hiện trước động từ ở đây.",
            "誰が hỏi chủ thể thực hiện hành động; パンを đã là đối tượng được mua."
          ]
        },
        "id": "c67-3-35"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Bánh kẹp vẫn còn trên bàn. Điền lời đáp đúng nghĩa: サンドイッチはまだありますか。— はい、（　）。",
        "options": [
          "まだです",
          "ありませんでした",
          "まだあります",
          "もうありません"
        ],
        "answer": 2,
        "explanation": "まだあります nói đồ ăn vẫn còn; phù hợp lời xác nhận はい và bối cảnh trên bàn còn bánh.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "サンドイッチはまだありますか。— はい、まだあります。",
          "meaning": "Còn bánh kẹp không? — Có, vẫn còn.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだです là chưa làm trong mẫu hỏi đã làm chưa; không diễn đạt còn bánh.",
            "ありませんでした nói đã không có ở quá khứ; câu hỏi đang nói lượng bánh hiện tại.",
            "まだあります nói đồ ăn vẫn còn; phù hợp lời xác nhận はい và bối cảnh trên bàn còn bánh.",
            "もうありません nghĩa là đã hết, trái với vẫn còn và lời xác nhận はい."
          ]
        },
        "id": "c67-3-36"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A：今晩、一緒にお祭りへ行きませんか。 B：（　）。用事がありますから。Chọn lời từ chối nhẹ.",
        "options": [
          "わあ、ぜひ一緒に行きたいです",
          "すみません。今晩はちょっと",
          "いいですね。ぜひ行きましょう",
          "ありがとうございます。行きます"
        ],
        "answer": 1,
        "explanation": "…はちょっと… là cách từ chối nhẹ, hợp lý do có việc bận phía sau.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "A：今晩、一緒にお祭りへ行きませんか。 B：すみません。今晩はちょっと…。用事がありますから。",
          "meaning": "Tối nay cùng đi lễ hội nhé? — Xin lỗi, tối nay thì hơi khó… Vì tôi có việc bận.",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "ぜひ一緒に行きたいです bày tỏ rất muốn đi cùng; không phải lời từ chối nhẹ cần điền.",
            "…はちょっと… là cách từ chối nhẹ, hợp lý do có việc bận phía sau.",
            "いいですね。ぜひ行きましょう nhận lời và rủ cùng đi, không khớp yêu cầu từ chối.",
            "ありがとうございます。行きます cảm ơn và xác nhận sẽ đi; trái mục đích từ chối."
          ]
        },
        "id": "c67-3-37"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Đang bàn món ăn trưa: A：ラーメンはどうですか。 B：（　）。Chọn câu đồng ý “Cùng làm như vậy nhé”.",
        "options": [
          "そうしましょう",
          "まだです",
          "ラーメンはどこですか",
          "何時でしたか"
        ],
        "answer": 0,
        "explanation": "そうしましょう đồng ý thực hiện phương án vừa được đề xuất.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "A：ラーメンはどうですか。 B：そうしましょう。",
          "meaning": "Mì ramen thì sao? — Cùng làm như vậy nhé.",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "そうしましょう đồng ý thực hiện phương án vừa được đề xuất.",
            "まだです là chưa; không bày tỏ đồng ý với phương án ăn trưa.",
            "ラーメンはどこですか hỏi ramen ở đâu; không có nghĩa cùng làm như vậy.",
            "何時でしたか hỏi lại mấy giờ trong quá khứ; không chấp nhận đề xuất món ăn."
          ]
        },
        "id": "c67-3-38"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "A：（　）。 B：はい、食べました。Điền câu hỏi “Bạn đã ăn món okonomiyaki chưa?”.",
        "options": [
          "お好み焼きを食べませんか",
          "どこでお好み焼きを食べましたか",
          "誰がお好み焼きを食べましたか",
          "もうお好み焼きを食べましたか"
        ],
        "answer": 3,
        "explanation": "もう＋Vましたか hỏi đã làm tính đến hiện tại chưa; はい、食べました là lời đáp tương ứng.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "A：もうお好み焼きを食べましたか。 B：はい、食べました。",
          "meaning": "Bạn đã ăn món okonomiyaki chưa? — Rồi, tôi ăn rồi.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "食べませんか rủ cùng ăn, không hỏi đã ăn chưa; lời đáp của B kể việc đã làm.",
            "どこで hỏi nơi đã ăn, cần đáp một địa điểm thay vì chỉ はい.",
            "誰が hỏi ai đã ăn, cần xác định người thay vì lời xác nhận đã ăn.",
            "もう＋Vましたか hỏi đã làm tính đến hiện tại chưa; はい、食べました là lời đáp tương ứng."
          ]
        },
        "id": "c67-3-39"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "A：すみませんが、スプーンを取ってください。 B：（　）。Chọn lời nhận làm giúp.",
        "options": [
          "いいえ、まだ食べません",
          "あしたは何時ですか",
          "はい、いいですよ",
          "スプーンはありませんでしたか"
        ],
        "answer": 2,
        "explanation": "はい、いいですよ là lời nhận làm việc người khác vừa nhờ.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "A：すみませんが、スプーンを取ってください。 B：はい、いいですよ。",
          "meaning": "Xin lỗi, hãy lấy thìa giúp tôi. — Vâng, được thôi.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "いいえ、まだ食べません nói chưa ăn/sẽ chưa ăn, không đáp lời nhờ lấy thìa.",
            "あしたは何時ですか hỏi giờ ngày mai; không liên quan lời nhờ hiện tại.",
            "はい、いいですよ là lời nhận làm việc người khác vừa nhờ.",
            "スプーンはありませんでしたか hỏi lại việc có thìa ở quá khứ, không nhận lấy giúp."
          ]
        },
        "id": "c67-3-40"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "A：誰がこのお茶を入れましたか。 B：（　）。Chọn lời đáp xác định Nam là người đã pha.",
        "options": [
          "台所で飲みました",
          "ナムさんが入れました",
          "ナムさんを入れました",
          "ナムさんと飲みました"
        ],
        "answer": 1,
        "explanation": "Câu hỏi 誰が tìm người thực hiện; đáp ナムさんが nêu rõ chủ thể pha trà.",
        "source": "sources/speaking.pdf#page=68",
        "origin": "authored",
        "solution": {
          "completed": "A：誰がこのお茶を入れましたか。 B：ナムさんが入れました。",
          "meaning": "Ai đã pha trà này? — Nam đã pha.",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "台所で飲みました nói nơi đã uống là bếp, không trả lời ai pha trà.",
            "Câu hỏi 誰が tìm người thực hiện; đáp ナムさんが nêu rõ chủ thể pha trà.",
            "ナムさんを đặt Nam làm đối tượng được cho vào, không phải người pha trà.",
            "ナムさんと飲みました nói đã uống cùng Nam, không xác định ai pha."
          ]
        },
        "id": "c67-3-41"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "A：ジュースはまだありますか。 B：（　）。Chọn lời đáp “Không, đã hết rồi”.",
        "options": [
          "いいえ、もうありません",
          "はい、まだあります",
          "いいえ、まだ飲みません",
          "はい、これから飲みます"
        ],
        "answer": 0,
        "explanation": "もうありません nói không còn nữa; いいえ phủ định câu hỏi còn không.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "A：ジュースはまだありますか。 B：いいえ、もうありません。",
          "meaning": "Còn nước trái cây không? — Không, đã hết rồi.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "もうありません nói không còn nữa; いいえ phủ định câu hỏi còn không.",
            "はい、まだあります xác nhận vẫn còn; trái với yêu cầu đã hết.",
            "まだ飲みません nói chưa uống/sẽ chưa uống; không nói nước đã hết.",
            "これから飲みます nói từ bây giờ sẽ uống; không trả lời lượng nước còn hay hết."
          ]
        },
        "id": "c67-3-42"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "A：テーブルを外へ出しましょうか。 B：（　）。Chọn lời nhận sự giúp đỡ.",
        "options": [
          "誰が出しましたか",
          "テーブルはどれですか",
          "外は寒かったです",
          "ありがとうございます。お願いします"
        ],
        "answer": 3,
        "explanation": "ありがとうございます。お願いします cảm ơn và nhận đề nghị giúp của A.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "A：テーブルを外へ出しましょうか。 B：ありがとうございます。お願いします。",
          "meaning": "Để tôi mang bàn ra ngoài giúp nhé? — Cảm ơn. Nhờ bạn nhé.",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "誰が出しましたか hỏi ai đã mang ra, không nhận lời đề nghị đang được đưa ra.",
            "テーブルはどれですか hỏi bàn nào, không có nghĩa nhận sự giúp đỡ.",
            "外は寒かったです kể ngoài trời đã lạnh, không trả lời nhận giúp.",
            "ありがとうございます。お願いします cảm ơn và nhận đề nghị giúp của A."
          ]
        },
        "id": "c67-3-43"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Chọn bản dịch: Quán cà phê ở giữa ngân hàng và bưu điện.",
        "options": [
          "銀行は喫茶店と郵便局の間にあります。",
          "喫茶店は銀行と郵便局の前にあります。",
          "喫茶店は銀行と郵便局の間にあります。",
          "喫茶店は銀行と郵便局の間にいます。"
        ],
        "answer": 2,
        "explanation": "喫茶店は là vật cần tìm; 銀行と郵便局の間に là giữa hai mốc; công trình dùng あります.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "喫茶店は銀行と郵便局の間にあります。",
          "meaning": "Quán cà phê ở giữa ngân hàng và bưu điện.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "Câu này đặt 銀行 làm đối tượng ở giữa quán cà phê và bưu điện, đổi sai quan hệ vị trí.",
            "前 là phía trước; đề yêu cầu 間, ở giữa ngân hàng và bưu điện.",
            "喫茶店は là vật cần tìm; 銀行と郵便局の間に là giữa hai mốc; công trình dùng あります.",
            "います dùng cho người/động vật; quán cà phê là công trình nên dùng あります."
          ]
        },
        "id": "c67-3-44"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn bản dịch: Bây giờ, chị gái tôi đang rót nước vào cốc.",
        "options": [
          "今、姉はコップに水を入れましょうか。",
          "今、姉はコップに水を入れています。",
          "今、姉はコップに水を入れました。",
          "今、姉はコップから水を出しています。"
        ],
        "answer": 1,
        "explanation": "入れています là đang cho vào; コップに là nơi nhận và 水を là vật được cho vào.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "今、姉はコップに水を入れています。",
          "meaning": "Bây giờ, chị gái tôi đang rót nước vào cốc.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "入れましょうか là đề nghị cho vào giúp; không kể chị đang rót nước.",
            "入れています là đang cho vào; コップに là nơi nhận và 水を là vật được cho vào.",
            "入れました là đã cho vào trong quá khứ; không thể hiện hành động đang diễn ra.",
            "コップから水を出しています là đang lấy nước ra khỏi cốc, đảo hướng của hành động."
          ]
        },
        "id": "c67-3-45"
      }
    ],
    "contentVersion": "2026-10-23"
  },
  {
    "id": "chapter67-4",
    "title": "Bài 6–7 · Đề 04",
    "description": "Ngày nghỉ với hòa nhạc và cuộc hẹn, rồi đến nhà bạn nấu ăn, xem ảnh và cùng vui. Đủ 18 mục ngữ pháp, 6 topic; ma trận 45 câu theo đề mẫu ảnh.",
    "lessons": [
      6,
      7
    ],
    "minutes": 45,
    "kind": "authored",
    "questions": [
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Thông báo hòa nhạc có chữ「来月」. Chọn cách đọc đúng.",
        "options": [
          "らいげつ",
          "こんげつ",
          "らいしゅう",
          "らいがつ"
        ],
        "answer": 0,
        "explanation": "来月 đọc là らいげつ, nghĩa là tháng sau.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "来月（らいげつ）",
          "meaning": "Tháng sau.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "来月 đọc là らいげつ, nghĩa là tháng sau.",
            "こんげつ là 今月, tháng này; không phải 来月.",
            "らいしゅう là 来週, tuần sau; 月 trong từ này đọc げつ.",
            "らいがつ dùng sai âm がつ; 来月 là từ ghép có cách đọc らいげつ."
          ]
        },
        "id": "c67-4-01"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Trên danh sách nơi ăn tối có「居酒屋」. Từ này đọc thế nào?",
        "options": [
          "いさかや",
          "いざけや",
          "きょしゅや",
          "いざかや"
        ],
        "answer": 3,
        "explanation": "居酒屋 đọc là いざかや, nghĩa là quán rượu kiểu nhật.",
        "source": "sources/new-words.pdf#page=19",
        "origin": "authored",
        "solution": {
          "completed": "居酒屋（いざかや）",
          "meaning": "Quán rượu kiểu Nhật.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "いさかや thiếu dấu đục ở ざ; cách đọc chuẩn là いざかや.",
            "いざけや đổi sai âm か thành け; toàn từ đọc là いざかや.",
            "きょしゅや ghép âm Hán máy móc, không phải cách đọc của mục từ 居酒屋.",
            "居酒屋 đọc là いざかや, nghĩa là quán rượu kiểu nhật."
          ]
        },
        "id": "c67-4-02"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Hai bạn hẹn gặp gần「改札」. Chọn cách đọc của từ này.",
        "options": [
          "かいせつ",
          "かいざつ",
          "かいさつ",
          "かいしゃ"
        ],
        "answer": 2,
        "explanation": "改札 đọc là かいさつ, nghĩa là cổng soát vé.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "改札（かいさつ）",
          "meaning": "Cổng soát vé.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "かいせつ đổi sai さつ thành せつ; 改札 đọc là かいさつ.",
            "かいざつ làm đục sai âm さ; từ này dùng さつ, không phải ざつ.",
            "改札 đọc là かいさつ, nghĩa là cổng soát vé.",
            "かいしゃ là 会社, công ty; không phải cổng soát vé."
          ]
        },
        "id": "c67-4-03"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Bạn muốn hỏi cách viết「漢字」. Chọn cách đọc của từ trong ngoặc.",
        "options": [
          "かにじ",
          "かんじ",
          "かんし",
          "かんざ"
        ],
        "answer": 1,
        "explanation": "漢字 đọc là かんじ, nghĩa là chữ hán.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "漢字（かんじ）",
          "meaning": "Chữ Hán.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "かにじ đổi âm mũi ん thành に; mục từ là かんじ.",
            "漢字 đọc là かんじ, nghĩa là chữ hán.",
            "かんし làm mất dấu đục của じ; 漢字 đọc là かんじ.",
            "かんざ thay sai âm じ bằng ざ; không phải cách đọc của 漢字."
          ]
        },
        "id": "c67-4-04"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Nói về chơi đàn, động từ「弾きます」đọc thế nào?",
        "options": [
          "ひきます",
          "かきます",
          "ききます",
          "はきます"
        ],
        "answer": 0,
        "explanation": "弾きます đọc là ひきます, nghĩa là chơi đàn; gảy hoặc đánh nhạc cụ.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "弾きます（ひきます）",
          "meaning": "Chơi đàn; gảy hoặc đánh nhạc cụ.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "弾きます đọc là ひきます, nghĩa là chơi đàn; gảy hoặc đánh nhạc cụ.",
            "かきます là cách đọc của 書きます khi nói viết; không đọc 弾きます như vậy.",
            "ききます là 聞きます, nghe/hỏi; khác hành động chơi đàn.",
            "はきます đổi sai âm đầu ひ thành は; không phải cách đọc của 弾きます."
          ]
        },
        "id": "c67-4-05"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Trong món quà mang tới nhà bạn có「花」. Chọn cách đọc đúng.",
        "options": [
          "き",
          "いぬ",
          "うた",
          "はな"
        ],
        "answer": 3,
        "explanation": "花 đọc là はな, nghĩa là hoa.",
        "source": "sources/new-words.pdf#page=21",
        "origin": "authored",
        "solution": {
          "completed": "花（はな）",
          "meaning": "Hoa.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "き là 木, cây/gỗ; không phải cách đọc của 花.",
            "いぬ là 犬, con chó; không liên quan nghĩa hoa.",
            "うた là 歌, bài hát; không đọc chữ 花 như vậy.",
            "花 đọc là はな, nghĩa là hoa."
          ]
        },
        "id": "c67-4-06"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách viết「やきゅう」, tên môn bóng chày.",
        "options": [
          "野玉",
          "夜球",
          "野球",
          "野菜"
        ],
        "answer": 2,
        "explanation": "野球 đọc là やきゅう, nghĩa là bóng chày.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "野球（やきゅう）",
          "meaning": "Bóng chày.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "野玉 dùng 玉 thay cho 球; đây không phải cách viết chuẩn của やきゅう.",
            "夜球 dùng 夜 thay cho 野; từ bóng chày viết là 野球.",
            "野球 đọc là やきゅう, nghĩa là bóng chày.",
            "野菜 đọc やさい, rau; không phải tên môn bóng chày."
          ]
        },
        "id": "c67-4-07"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Bạn muốn nói「ぜんぶ」, nghĩa là toàn bộ. Chọn cách viết đúng.",
        "options": [
          "全都",
          "全部",
          "全分",
          "前部"
        ],
        "answer": 1,
        "explanation": "全部 đọc là ぜんぶ, nghĩa là toàn bộ.",
        "source": "sources/new-words.pdf#page=20",
        "origin": "authored",
        "solution": {
          "completed": "全部（ぜんぶ）",
          "meaning": "Toàn bộ.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "全都 dùng 都 thay cho 部; đây không phải cách viết chuẩn của ぜんぶ.",
            "全部 đọc là ぜんぶ, nghĩa là toàn bộ.",
            "全分 dùng 分 thay cho 部, không viết đúng mục từ ぜんぶ.",
            "前部 dùng 前 thay cho 全 và là từ khác; không có nghĩa toàn bộ trong mục từ này."
          ]
        },
        "id": "c67-4-08"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Khi pha trà, bạn lấy「さとう」, nghĩa là đường ăn. Chọn chữ đúng.",
        "options": [
          "砂糖",
          "砂湯",
          "塩",
          "砂唐"
        ],
        "answer": 0,
        "explanation": "砂糖 đọc là さとう, nghĩa là đường ăn.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "砂糖（さとう）",
          "meaning": "Đường ăn.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "砂糖 đọc là さとう, nghĩa là đường ăn.",
            "砂湯 dùng 湯 thay cho 糖; không viết đúng từ chỉ đường ăn.",
            "塩 đọc しお, nghĩa là muối; đó là một gia vị khác.",
            "砂唐 thiếu bộ 米 của 糖 và dùng sai chữ; さとう viết là 砂糖."
          ]
        },
        "id": "c67-4-09"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách viết「だいどころ」, nơi nấu ăn trong nhà.",
        "options": [
          "台前",
          "代所",
          "食堂",
          "台所"
        ],
        "answer": 3,
        "explanation": "台所 đọc là だいどころ, nghĩa là nhà bếp.",
        "source": "sources/new-words.pdf#page=23",
        "origin": "authored",
        "solution": {
          "completed": "台所（だいどころ）",
          "meaning": "Nhà bếp.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "台前 ghép sai chữ 前 vào sau 台; không viết từ だいどころ.",
            "代所 thay 台 bằng 代; không phải cách viết chuẩn của nhà bếp.",
            "食堂 đọc しょくどう, phòng ăn/nhà ăn; khác từ nhà bếp được hỏi.",
            "台所 đọc là だいどころ, nghĩa là nhà bếp."
          ]
        },
        "id": "c67-4-10"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Cuộc gặp ở trong「こんしゅう」, tức tuần này. Chọn cách viết.",
        "options": [
          "来週",
          "先週",
          "今週",
          "今月"
        ],
        "answer": 2,
        "explanation": "今週 đọc là こんしゅう, nghĩa là tuần này.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "今週（こんしゅう）",
          "meaning": "Tuần này.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "来週 đọc らいしゅう, tuần sau; không phải tuần này.",
            "先週 đọc せんしゅう, tuần trước; không khớp thời điểm hiện tại.",
            "今週 đọc là こんしゅう, nghĩa là tuần này.",
            "今月 đọc こんげつ, tháng này; sai đơn vị tuần."
          ]
        },
        "id": "c67-4-11"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Lý do không đi được là có「ようじ」, tức việc bận. Chọn cách viết.",
        "options": [
          "約束",
          "用事",
          "用寺",
          "幼事"
        ],
        "answer": 1,
        "explanation": "用事 đọc là ようじ, nghĩa là việc cần làm; việc bận.",
        "source": "sources/new-words.pdf#page=18",
        "origin": "authored",
        "solution": {
          "completed": "用事（ようじ）",
          "meaning": "Việc cần làm; việc bận.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "約束 đọc やくそく, lời hứa/cuộc hẹn; không viết từ ようじ.",
            "用事 đọc là ようじ, nghĩa là việc cần làm; việc bận.",
            "用寺 dùng 寺 thay cho 事; không viết đúng từ ようじ trong nghĩa việc bận.",
            "幼事 thay sai chữ đầu 用 bằng 幼; mục từ việc bận là 用事."
          ]
        },
        "id": "c67-4-12"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Bạn cần hâm thức ăn bằng「でんしれんじ」. Chọn tên thiết bị đúng.",
        "options": [
          "電子レンジ",
          "電車レンジ",
          "電子レジ",
          "冷蔵庫"
        ],
        "answer": 0,
        "explanation": "電子レンジ đọc là でんしれんじ, nghĩa là lò vi sóng.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "電子レンジ（でんしれんじ）",
          "meaning": "Lò vi sóng.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "電子レンジ đọc là でんしれんじ, nghĩa là lò vi sóng.",
            "電車レンジ dùng 電車 (tàu điện) thay 電子, không viết tên lò vi sóng.",
            "電子レジ thiếu âm ン trong レンジ; レジ là máy/quầy tính tiền.",
            "冷蔵庫 đọc れいぞうこ, tủ lạnh; không phải thiết bị hâm thức ăn."
          ]
        },
        "id": "c67-4-13"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách viết「あらいます」với nghĩa rửa bát đĩa.",
        "options": [
          "笑います",
          "払います",
          "使います",
          "洗います"
        ],
        "answer": 3,
        "explanation": "洗います đọc là あらいます, nghĩa là rửa; giặt.",
        "source": "sources/new-words.pdf#page=22",
        "origin": "authored",
        "solution": {
          "completed": "洗います（あらいます）",
          "meaning": "Rửa; giặt.",
          "rule": "Đối chiếu đủ chữ viết, âm đọc và nghĩa của mục từ; các từ cùng chủ đề hoặc các âm gần giống không thay thế nhau.",
          "options": [
            "笑います đọc わらいます, nghĩa là cười; không phải rửa.",
            "払います đọc はらいます, nghĩa là trả/thanh toán; khác âm đầu và nghĩa.",
            "使います đọc つかいます, nghĩa là dùng; không viết từ あらいます.",
            "洗います đọc là あらいます, nghĩa là rửa; giặt."
          ]
        },
        "id": "c67-4-14"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 2,
        "unit": "",
        "prompt": "Bạn rất muốn nhận lời mời hòa nhạc. Chọn từ có nghĩa “nhất định”:（　）行きたいです。",
        "options": [
          "どちらも",
          "少し",
          "ぜひ",
          "まだ"
        ],
        "answer": 2,
        "explanation": "ぜひ nhấn mạnh mong muốn hoặc lời mời, có nghĩa nhất định/rất muốn trong câu này.",
        "source": "sources/new-words.pdf#page=20",
        "origin": "authored",
        "solution": {
          "completed": "ぜひ行きたいです。",
          "meaning": "Tôi nhất định muốn đi.",
          "rule": "Đối chiếu mục từ và cách đọc chuẩn trong PDF New words list, bài 6, topic 3. Phân biệt âm dài, âm đục, âm ngắt và nghĩa của từng mục từ; không coi các cách đọc khác tồn tại trong từ điển là sai nếu chưa xác định ngữ cảnh.",
          "options": [
            "どちらも là cả hai lựa chọn; không làm trạng từ nhất định trong câu này.",
            "少し là một chút; không có nghĩa nhất định.",
            "ぜひ nhấn mạnh mong muốn hoặc lời mời, có nghĩa nhất định/rất muốn trong câu này.",
            "まだ là vẫn/chưa; không diễn đạt sự thiết tha nhất định muốn đi."
          ]
        },
        "id": "c67-4-15"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Chọn lời rủ cùng nghe nhạc jazz ngày nghỉ: 休みの日、一緒にジャズを（　）。",
        "options": [
          "聞いてください",
          "聞きませんか",
          "聞きました",
          "聞きませんでした"
        ],
        "answer": 1,
        "explanation": "聞きませんか là lời mời người nghe cùng thực hiện việc nghe nhạc.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "休みの日、一緒にジャズを聞きませんか。",
          "meaning": "Ngày nghỉ cùng nghe nhạc jazz nhé?",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "聞いてください yêu cầu người nghe nghe; không thể hiện lời rủ cùng làm.",
            "聞きませんか là lời mời người nghe cùng thực hiện việc nghe nhạc.",
            "聞きました kể đã nghe; không đặt lời mời cho ngày nghỉ.",
            "聞きませんでした kể đã không nghe trong quá khứ; không rủ cùng nghe."
          ]
        },
        "id": "c67-4-16"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Tối chủ nhật có hẹn với giáo viên: 日曜日の夜、先生と約束（　）あります。",
        "options": [
          "が",
          "を",
          "で",
          "へ"
        ],
        "answer": 0,
        "explanation": "約束があります diễn đạt có cuộc hẹn; が đánh dấu điều đang có.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "日曜日の夜、先生と約束があります。",
          "meaning": "Tối chủ nhật tôi có hẹn với giáo viên.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "約束があります diễn đạt có cuộc hẹn; が đánh dấu điều đang có.",
            "を đánh dấu tân ngữ của động từ hành động; あります không nhận 約束を trong mẫu này.",
            "で không đánh dấu cuộc hẹn tồn tại trong 約束があります.",
            "へ chỉ hướng đến, không nối 約束 với あります."
          ]
        },
        "id": "c67-4-17"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Nói nơi diễn ra hòa nhạc: あした、学校のホール（　）コンサートがあります。",
        "options": [
          "に",
          "を",
          "と",
          "で"
        ],
        "answer": 3,
        "explanation": "コンサート là sự kiện được tổ chức nên địa điểm diễn ra đi với で.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "あした、学校のホールでコンサートがあります。",
          "meaning": "Ngày mai có buổi hòa nhạc diễn ra tại hội trường của trường.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "に dùng nêu vị trí tồn tại của sự vật; câu này nêu nơi tổ chức sự kiện nên dùng で.",
            "を không chỉ địa điểm tổ chức trong mẫu コンサートがあります.",
            "と chỉ cùng/và trong các mẫu khác; không chỉ nơi diễn ra hòa nhạc.",
            "コンサート là sự kiện được tổ chức nên địa điểm diễn ra đi với で."
          ]
        },
        "id": "c67-4-18"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Cả hai bộ phim đều thú vị. Điền nghĩa “cả hai”: 二つの映画は（　）おもしろいです。",
        "options": [
          "どのも",
          "より",
          "どちらも",
          "どちらが"
        ],
        "answer": 2,
        "explanation": "どちらも nói cùng một nhận xét đúng với cả hai lựa chọn.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "二つの映画はどちらもおもしろいです。",
          "meaning": "Cả hai bộ phim đều thú vị.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "どの cần danh từ theo sau; どのも không phải đại từ cả hai trong mẫu này.",
            "より cần đứng sau mốc so sánh, không có nghĩa cả hai đều.",
            "どちらも nói cùng một nhận xét đúng với cả hai lựa chọn.",
            "どちらが dùng hỏi bên nào là chủ thể của đặc điểm; không có nghĩa cả hai đều."
          ]
        },
        "id": "c67-4-19"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "A：A駅とB駅とどちらが遠いですか。 B：B駅（　）遠いです。Điền “B xa hơn”.",
        "options": [
          "に",
          "のほうが",
          "より",
          "を"
        ],
        "answer": 1,
        "explanation": "B駅のほうが chọn B là phía có đặc điểm xa hơn khi trả lời so sánh hai nơi.",
        "source": "sources/speaking.pdf#page=47",
        "origin": "authored",
        "solution": {
          "completed": "A：A駅とB駅とどちらが遠いですか。 B：B駅のほうが遠いです。",
          "meaning": "Ga A và ga B, ga nào xa hơn? — Ga B xa hơn.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "に không tạo câu trả lời nêu bên xa hơn; cần のほうが sau B駅.",
            "B駅のほうが chọn B là phía có đặc điểm xa hơn khi trả lời so sánh hai nơi.",
            "B駅より đặt B làm mốc, tức một đối tượng khác xa hơn B; không khẳng định B xa hơn.",
            "を không đánh dấu chủ thể của tính từ 遠い."
          ]
        },
        "id": "c67-4-20"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Hỏi ca sĩ thích nhất trong một nhóm: 日本の歌手（　）誰（　）いちばん好きですか。",
        "options": [
          "で・が",
          "を・が",
          "で・に",
          "に・で"
        ],
        "answer": 0,
        "explanation": "で đánh dấu phạm vi 日本の歌手; 誰が hỏi người được thích nhất trong nhóm đó.",
        "source": "sources/speaking.pdf#page=46",
        "origin": "authored",
        "solution": {
          "completed": "日本の歌手で誰がいちばん好きですか。",
          "meaning": "Trong các ca sĩ Nhật Bản, bạn thích ai nhất?",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "で đánh dấu phạm vi 日本の歌手; 誰が hỏi người được thích nhất trong nhóm đó.",
            "を không giới hạn phạm vi so sánh; nhóm ca sĩ cần で.",
            "で nêu đúng phạm vi, nhưng 誰に không đánh dấu người được thích trong mẫu này; cần 誰が.",
            "に không giới hạn nhóm và で không đánh dấu người được thích; cả hai cần đổi thành で・が."
          ]
        },
        "id": "c67-4-21"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "Điền “đã” vào câu hỏi xem ảnh tính đến lúc này:（　）旅行の写真を見ましたか。",
        "options": [
          "どの",
          "どちらも",
          "あまり",
          "もう"
        ],
        "answer": 3,
        "explanation": "もう đi với Vましたか để hỏi đã thực hiện tính đến hiện tại chưa.",
        "source": "sources/speaking.pdf#page=55",
        "origin": "authored",
        "solution": {
          "completed": "もう旅行の写真を見ましたか。",
          "meaning": "Bạn đã xem ảnh chuyến du lịch chưa?",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "どの旅行の写真 có thể mang nghĩa ảnh của chuyến đi nào, nhưng không hỏi đã xem chưa theo nghĩa đề yêu cầu.",
            "どちらも là cả hai; không diễn đạt đã xem chưa.",
            "あまり thường đi với phủ định trong nghĩa không…lắm; không thay cho もう hỏi đã làm chưa.",
            "もう đi với Vましたか để hỏi đã thực hiện tính đến hiện tại chưa."
          ]
        },
        "id": "c67-4-22"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Đề xuất ngày đến nhà bạn: 来週の土曜日は（　）。Nghĩa cần chọn là “thì sao?”.",
        "options": [
          "どこでしたか",
          "誰ですか",
          "どうですか",
          "何人ですか"
        ],
        "answer": 2,
        "explanation": "Nはどうですか đưa một ngày cụ thể ra làm phương án để người nghe cân nhắc.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "来週の土曜日はどうですか。",
          "meaning": "Thứ bảy tuần sau thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "どこでしたか hỏi địa điểm trong quá khứ; không phải đề xuất thứ bảy tuần sau.",
            "誰ですか hỏi là ai; không phù hợp danh từ chỉ ngày.",
            "Nはどうですか đưa một ngày cụ thể ra làm phương án để người nghe cân nhắc.",
            "何人ですか hỏi số người, không đề xuất ngày gặp."
          ]
        },
        "id": "c67-4-23"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Nghe chủ nhà nói bắt đầu ăn lúc sáu giờ, bạn xác nhận lại: 六時です（　）。お願いします。",
        "options": [
          "へ",
          "ね",
          "に",
          "を"
        ],
        "answer": 1,
        "explanation": "ね lặp lại và xác nhận giờ vừa được người khác cho biết.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "六時ですね。お願いします。",
          "meaning": "Sáu giờ nhỉ. Nhờ bạn nhé.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "へ chỉ hướng đến trước động từ di chuyển; không có chức năng xác nhận giờ.",
            "ね lặp lại và xác nhận giờ vừa được người khác cho biết.",
            "に có thể đi sau giờ trước động từ, nhưng không đứng sau です làm đuôi xác nhận.",
            "を đánh dấu tân ngữ, không xác nhận thông tin ở cuối câu lịch sự."
          ]
        },
        "id": "c67-4-24"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Muốn nói chiếc đàn ở bên cạnh bàn: ギターはテーブル（　）隣（　）あります。",
        "options": [
          "の・に",
          "で・に",
          "の・で",
          "に・の"
        ],
        "answer": 0,
        "explanation": "の nối vật mốc テーブル với vị trí 隣; に đánh dấu vị trí chiếc đàn tồn tại.",
        "source": "sources/speaking.pdf#page=60",
        "origin": "authored",
        "solution": {
          "completed": "ギターはテーブルの隣にあります。",
          "meaning": "Chiếc đàn ghi-ta ở bên cạnh bàn.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "の nối vật mốc テーブル với vị trí 隣; に đánh dấu vị trí chiếc đàn tồn tại.",
            "で không nối danh từ vật mốc với 隣; cần テーブルの隣.",
            "の đúng ở vật mốc nhưng nơi tồn tại cần に, không phải で.",
            "に・の đặt sai cả hai quan hệ; mẫu đúng là vật mốc の vị trí に あります."
          ]
        },
        "id": "c67-4-25"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Giới thiệu có em gái ở trong phòng: 部屋に妹が（　）。",
        "options": [
          "あります",
          "使います",
          "入れます",
          "います"
        ],
        "answer": 3,
        "explanation": "妹 là người nên dùng います; 部屋に là nơi tồn tại và 妹が giới thiệu người có mặt.",
        "source": "sources/speaking.pdf#page=62",
        "origin": "authored",
        "solution": {
          "completed": "部屋に妹がいます。",
          "meaning": "Trong phòng có em gái tôi.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "あります dùng cho đồ vật/cây/công trình, không dùng cho 妹 là người.",
            "使います là dùng; không diễn đạt sự có mặt của em gái.",
            "入れます là cho vào, cần một đối tượng; không thay động từ tồn tại ở đây.",
            "妹 là người nên dùng います; 部屋に là nơi tồn tại và 妹が giới thiệu người có mặt."
          ]
        },
        "id": "c67-4-26"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Bạn muốn mượn máy ảnh. Thể て của 借ります（借りる, nhóm 2）là gì?",
        "options": [
          "借りんで",
          "借るて",
          "借りて",
          "借って"
        ],
        "answer": 2,
        "explanation": "借りる thuộc nhóm 2: bỏ る, thêm て; từ gốc ます là 借り rồi thêm て.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "借りる → 借りて",
          "meaning": "Mượn: thể て là 借りて.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "借りんで áp dụng nhầm đuôi む・ぶ・ぬ; 借りる chỉ bỏ る thêm て.",
            "借るて vừa bỏ sai り vừa giữ る trước て; dạng đúng là 借りて.",
            "借りる thuộc nhóm 2: bỏ る, thêm て; từ gốc ます là 借り rồi thêm て.",
            "借って chia như động từ nhóm 1 đuôi る, nhưng 借りる thuộc nhóm 2."
          ]
        },
        "id": "c67-4-27"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chuẩn bị đến buổi họp mặt: chia 来ます（来る）sang thể て và chọn cả cách đọc đúng.",
        "options": [
          "来りて（きりて）",
          "来て（きて）",
          "来て（くて）",
          "来って（くって）"
        ],
        "answer": 1,
        "explanation": "来る là động từ bất quy tắc nhóm 3; thể て là 来て và đọc きて.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "来る → 来て（きて）",
          "meaning": "Đến: thể て là 来て（きて）.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "来りて thêm り không có trong cách chia 来る; phải dùng 来て（きて）.",
            "来る là động từ bất quy tắc nhóm 3; thể て là 来て và đọc きて.",
            "Cách viết 来て đúng nhưng đọc くて sai; dạng này đọc きて.",
            "来って áp dụng sai quy tắc る→って của nhóm 1; 来る là bất quy tắc."
          ]
        },
        "id": "c67-4-28"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Muốn nhờ chỉ cách làm món ăn: この料理の作り方を（　）。",
        "options": [
          "教えてください",
          "教えましょうか",
          "教えました",
          "教えますください"
        ],
        "answer": 0,
        "explanation": "教える→教えて; 教えてください nhờ người nghe chỉ cho người nói.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "この料理の作り方を教えてください。",
          "meaning": "Hãy chỉ tôi cách làm món ăn này.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "教える→教えて; 教えてください nhờ người nghe chỉ cho người nói.",
            "教えましょうか là người nói đề nghị dạy giúp, đảo vai với việc xin được chỉ.",
            "教えました là đã chỉ/dạy trong quá khứ; không tạo lời nhờ.",
            "教えますください ghép ます với ください sai; cần thể て trước ください."
          ]
        },
        "id": "c67-4-29"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Nói việc cắt rau bằng dao: ナイフ（　）野菜（　）切ります。",
        "options": [
          "を・で",
          "に・を",
          "で・が",
          "で・を"
        ],
        "answer": 3,
        "explanation": "で đánh dấu dao là dụng cụ; を đánh dấu rau là thứ được cắt.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "ナイフで野菜を切ります。",
          "meaning": "Tôi cắt rau bằng dao.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "を・で đảo vai dao và rau: dao cần で, còn rau là đối tượng cần を.",
            "に không đánh dấu dụng cụ cắt trong mẫu này; ナイフ cần đi với で.",
            "で đúng ở dao nhưng が đặt rau làm chủ thể; đối tượng được cắt cần を.",
            "で đánh dấu dao là dụng cụ; を đánh dấu rau là thứ được cắt."
          ]
        },
        "id": "c67-4-30"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Từ 書きます, điền danh từ “cách viết”: この名前の（　）がわかりません。",
        "options": [
          "書いて方",
          "書きます方",
          "書き方",
          "書く方"
        ],
        "answer": 2,
        "explanation": "書きます bỏ ます rồi thêm 方 thành 書き方; の nối 名前 với cách viết.",
        "source": "sources/speaking.pdf#page=73",
        "origin": "authored",
        "solution": {
          "completed": "この名前の書き方がわかりません。",
          "meaning": "Tôi không biết cách viết tên này.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "書いて方 dùng thể て trước 方 sai cấu tạo; từ chỉ cách viết là 書き方.",
            "書きます方 giữ ます, trái quy tắc bỏ ます trước khi thêm 方.",
            "書きます bỏ ます rồi thêm 方 thành 書き方; の nối 名前 với cách viết.",
            "書く方 không tạo danh từ cách viết trong mẫu đang hỏi; cần gốc ます là 書き."
          ]
        },
        "id": "c67-4-31"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Trên bàn có bốn chiếc đĩa. Hỏi đĩa của mình là cái nào: 私のお皿は（　）ですか。",
        "options": [
          "いつ",
          "どれ",
          "どの",
          "だれ"
        ],
        "answer": 1,
        "explanation": "どれ tự đứng thay cho một đồ vật, không cần danh từ phía sau.",
        "source": "sources/speaking.pdf#page=64",
        "origin": "authored",
        "solution": {
          "completed": "私のお皿はどれですか。",
          "meaning": "Đĩa của tôi là cái nào?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "いつ hỏi thời điểm; câu đang xác định đồ vật nào.",
            "どれ tự đứng thay cho một đồ vật, không cần danh từ phía sau.",
            "どの cần một danh từ ngay sau; どのですか thiếu danh từ nên không hoàn chỉnh.",
            "だれ hỏi người; không dùng để chọn một chiếc đĩa."
          ]
        },
        "id": "c67-4-32"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Ngay bây giờ mẹ đang nói chuyện với bạn: 今、母は友達と（　）。",
        "options": [
          "話しています",
          "話しました",
          "話しましょう",
          "話しますでした"
        ],
        "answer": 0,
        "explanation": "話す→話して; thêm います để nói hành động đang diễn ra ngay lúc nói.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "今、母は友達と話しています。",
          "meaning": "Bây giờ mẹ tôi đang nói chuyện với bạn.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "話す→話して; thêm います để nói hành động đang diễn ra ngay lúc nói.",
            "話しました kể đã nói chuyện; không thể hiện đang diễn ra bây giờ.",
            "話しましょう rủ cùng nói chuyện; không mô tả hành động hiện tại của mẹ.",
            "話しますでした ghép sai ます với でした; không phải dạng đang làm."
          ]
        },
        "id": "c67-4-33"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Chủ nhà có nhiều việc. Bạn muốn đề nghị mình giúp:（　）。",
        "options": [
          "手伝ってください",
          "手伝いましたか",
          "手伝いませんでした",
          "手伝いましょうか"
        ],
        "answer": 3,
        "explanation": "手伝います bỏ ます, thêm ましょうか để người nói chủ động đề nghị giúp.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "手伝いましょうか。",
          "meaning": "Để tôi giúp nhé?",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "手伝ってください nhờ người nghe giúp mình, đảo chiều so với đề nghị giúp chủ nhà.",
            "手伝いましたか hỏi đã giúp chưa; không phải đề nghị làm giúp bây giờ.",
            "手伝いませんでした kể đã không giúp; không thể hiện ý sẵn sàng giúp.",
            "手伝います bỏ ます, thêm ましょうか để người nói chủ động đề nghị giúp."
          ]
        },
        "id": "c67-4-34"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "A：誰がこの写真を撮りましたか。 B：兄（　）撮りました。",
        "options": [
          "で",
          "に",
          "が",
          "を"
        ],
        "answer": 2,
        "explanation": "Câu hỏi 誰が tìm người chụp; câu trả lời dùng 兄が để xác định chủ thể ấy.",
        "source": "sources/speaking.pdf#page=68",
        "origin": "authored",
        "solution": {
          "completed": "A：誰がこの写真を撮りましたか。 B：兄が撮りました。",
          "meaning": "Ai đã chụp bức ảnh này? — Anh trai tôi đã chụp.",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "で không đánh dấu người thực hiện trong câu trả lời ai đã chụp.",
            "に có thể đánh dấu người nhận/đích trong mẫu khác; không xác định chủ thể chụp ở đây.",
            "Câu hỏi 誰が tìm người chụp; câu trả lời dùng 兄が để xác định chủ thể ấy.",
            "を đánh dấu đối tượng; ở đây anh trai là người chụp, không phải đối tượng của động từ."
          ]
        },
        "id": "c67-4-35"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Đĩa pizza đã hết, không còn miếng nào. Điền: ピザは（　）。",
        "options": [
          "もう食べましょう",
          "もうありません",
          "まだあります",
          "まだです"
        ],
        "answer": 1,
        "explanation": "もうありません nói một thứ đã không còn nữa, phù hợp bối cảnh đĩa đã hết pizza.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "ピザはもうありません。",
          "meaning": "Pizza đã hết rồi.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "もう食べましょう rủ bây giờ ăn thôi; không nói pizza đã hết.",
            "もうありません nói một thứ đã không còn nữa, phù hợp bối cảnh đĩa đã hết pizza.",
            "まだあります là vẫn còn, trái với bối cảnh không còn miếng nào.",
            "まだです là chưa trong mẫu hỏi đã làm chưa; không diễn đạt hết đồ ăn."
          ]
        },
        "id": "c67-4-36"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "A：金曜日、一緒にコンサートへ行きませんか。 B：（　）。Điền lời nhận rủ cùng đi.",
        "options": [
          "いいですね。行きましょう",
          "すみません。金曜日はちょっと",
          "金曜日は用事がありますから、行きません",
          "残念ですが、行きません"
        ],
        "answer": 0,
        "explanation": "いいですね hưởng ứng lời rủ; 行きましょう xác nhận cùng đi.",
        "source": "sources/speaking.pdf#page=43",
        "origin": "authored",
        "solution": {
          "completed": "A：金曜日、一緒にコンサートへ行きませんか。 B：いいですね。行きましょう。",
          "meaning": "Thứ sáu cùng đi hòa nhạc nhé? — Hay đấy. Cùng đi nhé.",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "いいですね hưởng ứng lời rủ; 行きましょう xác nhận cùng đi.",
            "金曜日はちょっと… là từ chối nhẹ; không nhận lời rủ.",
            "用事がありますから、行きません nêu lý do có việc và từ chối đi.",
            "残念ですが、行きません nói rất tiếc nhưng không đi; trái yêu cầu nhận lời."
          ]
        },
        "id": "c67-4-37"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "A：どこで会いますか。 B：（　）。Điền đề xuất “Trước cửa hàng bách hóa thì sao?”.",
        "options": [
          "デパートは何階ですか",
          "デパートで買いましたか",
          "デパートは広かったです",
          "デパートの前はどうですか"
        ],
        "answer": 3,
        "explanation": "デパートの前はどうですか đề xuất địa điểm gặp là trước cửa hàng bách hóa.",
        "source": "sources/speaking.pdf#page=50",
        "origin": "authored",
        "solution": {
          "completed": "A：どこで会いますか。 B：デパートの前はどうですか。",
          "meaning": "Gặp nhau ở đâu? — Trước cửa hàng bách hóa thì sao?",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "何階ですか hỏi tầng mấy; không đưa ra phương án trước cửa hàng.",
            "買いましたか hỏi đã mua ở cửa hàng chưa; không đề xuất nơi gặp.",
            "広かったです nhận xét cửa hàng đã rộng; không có chức năng đề xuất địa điểm.",
            "デパートの前はどうですか đề xuất địa điểm gặp là trước cửa hàng bách hóa."
          ]
        },
        "id": "c67-4-38"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Bạn đã ăn ở quán này và mách người chưa từng đến rằng món ăn ngon. Chọn câu phù hợp nghĩa “ngon đấy”.",
        "options": [
          "この店の料理を食べませんでした",
          "この店の料理はどれですか",
          "この店の料理はおいしいですよ",
          "この店の料理はおいしかったですか"
        ],
        "answer": 2,
        "explanation": "よ báo cho người nghe một thông tin người nói biết từ trải nghiệm, hợp tình huống mách món ngon.",
        "source": "sources/speaking.pdf#page=49",
        "origin": "authored",
        "solution": {
          "completed": "この店の料理はおいしいですよ。",
          "meaning": "Món ăn của quán này ngon đấy.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "食べませんでした nói đã không ăn; không đưa nhận xét ngon đấy.",
            "どれですか hỏi món nào; không thông báo chất lượng món ăn.",
            "よ báo cho người nghe một thông tin người nói biết từ trải nghiệm, hợp tình huống mách món ngon.",
            "おいしかったですか hỏi người nghe món ăn trước đó có ngon không, không báo tin ngon đấy."
          ]
        },
        "id": "c67-4-39"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "A：玄関に誰がいますか。 B：（　）。Chọn lời đáp nói có bố ở cửa ra vào.",
        "options": [
          "父を使います",
          "父がいます",
          "父があります",
          "靴があります"
        ],
        "answer": 1,
        "explanation": "誰がいますか hỏi người có mặt; 父がいます giới thiệu bố ở đó và dùng います cho người.",
        "source": "sources/speaking.pdf#page=62",
        "origin": "authored",
        "solution": {
          "completed": "A：玄関に誰がいますか。 B：父がいます。",
          "meaning": "Ở cửa ra vào có ai? — Có bố tôi.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "父を使います nghĩa là dùng bố, không mô tả bố có mặt ở cửa.",
            "誰がいますか hỏi người có mặt; 父がいます giới thiệu bố ở đó và dùng います cho người.",
            "父があります dùng động từ tồn tại của vật cho người; cần 父がいます.",
            "靴があります nói có giày, không trả lời câu hỏi ai có mặt."
          ]
        },
        "id": "c67-4-40"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "A：どのナイフを使いますか。 B：（　）。Chọn lời đáp chỉ “con dao đó”.",
        "options": [
          "そのナイフです",
          "そのです",
          "だれですか",
          "ナイフで切ります"
        ],
        "answer": 0,
        "explanation": "どのN hỏi chọn vật; そのN chỉ rõ vật được chọn và giữ danh từ ナイフ.",
        "source": "sources/speaking.pdf#page=64",
        "origin": "authored",
        "solution": {
          "completed": "A：どのナイフを使いますか。 B：そのナイフです。",
          "meaning": "Dùng con dao nào? — Con dao đó.",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "どのN hỏi chọn vật; そのN chỉ rõ vật được chọn và giữ danh từ ナイフ.",
            "その cần danh từ theo sau; そのです thiếu danh từ và không phải đại từ それ.",
            "だれですか hỏi ai, không chỉ con dao được chọn.",
            "ナイフで切ります nói cắt bằng dao, không xác định là con dao nào."
          ]
        },
        "id": "c67-4-41"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "A：ハーさんは今、何をしていますか。 B：（　）。Điền “Đang hát”.",
        "options": [
          "歌を歌いました",
          "歌を歌いましょう",
          "歌はもうありません",
          "歌を歌っています"
        ],
        "answer": 3,
        "explanation": "歌う→歌って＋います tạo 歌っています, trả lời hành động đang diễn ra.",
        "source": "sources/speaking.pdf#page=66",
        "origin": "authored",
        "solution": {
          "completed": "A：ハーさんは今、何をしていますか。 B：歌を歌っています。",
          "meaning": "Bây giờ Hà đang làm gì? — Đang hát.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "歌いました là đã hát trong quá khứ, không trả lời đang làm gì bây giờ.",
            "歌いましょう rủ cùng hát, không mô tả hành động hiện tại của Hà.",
            "歌はもうありません nói không còn bài hát nữa, không nói Hà đang hát.",
            "歌う→歌って＋います tạo 歌っています, trả lời hành động đang diễn ra."
          ]
        },
        "id": "c67-4-42"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "A：ケーキはまだありますか。 B：（　）。Điền lời đáp “Có, vẫn còn”.",
        "options": [
          "はい、まだです",
          "いいえ、食べました",
          "はい、まだあります",
          "いいえ、もうありません"
        ],
        "answer": 2,
        "explanation": "はい、まだあります xác nhận bánh vẫn còn ở thời điểm nói.",
        "source": "sources/speaking.pdf#page=69",
        "origin": "authored",
        "solution": {
          "completed": "A：ケーキはまだありますか。 B：はい、まだあります。",
          "meaning": "Còn bánh ngọt không? — Có, vẫn còn.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだです là chưa trong câu hỏi đã làm chưa; không nói còn lượng bánh.",
            "いいえ、食べました nói không, đã ăn; không diễn đạt có, vẫn còn như yêu cầu.",
            "はい、まだあります xác nhận bánh vẫn còn ở thời điểm nói.",
            "いいえ、もうありません phủ định và nói đã hết; trái nghĩa vẫn còn."
          ]
        },
        "id": "c67-4-43"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Chọn bản dịch: Xin lỗi, hãy đóng cửa sổ giúp tôi.",
        "options": [
          "すみませんが、窓を閉めました。",
          "すみませんが、窓を閉めてください。",
          "すみませんが、窓を開けてください。",
          "すみませんが、窓を閉めましょうか。"
        ],
        "answer": 1,
        "explanation": "閉める→閉めて; Vてください nhờ người nghe đóng cửa sổ, すみませんが làm mềm lời nhờ.",
        "source": "sources/speaking.pdf#page=63",
        "origin": "authored",
        "solution": {
          "completed": "すみませんが、窓を閉めてください。",
          "meaning": "Xin lỗi, hãy đóng cửa sổ giúp tôi.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "閉めました kể đã đóng cửa sổ, không yêu cầu làm giúp.",
            "閉める→閉めて; Vてください nhờ người nghe đóng cửa sổ, すみませんが làm mềm lời nhờ.",
            "開けてください là nhờ mở cửa sổ, ngược với đóng.",
            "閉めましょうか là người nói đề nghị mình đóng giúp, đảo vai so với lời nhờ người nghe."
          ]
        },
        "id": "c67-4-44"
      },
      {
        "category": "translation",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Chọn bản dịch: Để tôi mang ảnh đến nhà một người bạn giúp nhé?",
        "options": [
          "友達の家へ写真を持って行きましょうか。",
          "友達の家へ写真を持って行ってください。",
          "友達の家へ写真を持って行きましたか。",
          "友達の家へ写真を持って行きませんでした。"
        ],
        "answer": 0,
        "explanation": "持って行きます bỏ ます, thêm ましょうか để chủ động đề nghị mang ảnh đi giúp; へ chỉ nơi đến.",
        "source": "sources/speaking.pdf#page=67",
        "origin": "authored",
        "solution": {
          "completed": "友達の家へ写真を持って行きましょうか。",
          "meaning": "Để tôi mang ảnh đến nhà một người bạn giúp nhé?",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "持って行きます bỏ ます, thêm ましょうか để chủ động đề nghị mang ảnh đi giúp; へ chỉ nơi đến.",
            "持って行ってください nhờ người nghe mang ảnh đi; đổi người làm so với đề nghị mình làm giúp.",
            "持って行きましたか hỏi đã mang ảnh đến chưa; không đề nghị làm giúp.",
            "持って行きませんでした kể đã không mang ảnh đi trong quá khứ; trái chức năng đề nghị."
          ]
        },
        "id": "c67-4-45"
      }
    ],
    "contentVersion": "2026-10-23"
  }
];
