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
  },
  {
    "id": "fe-su26-re-1",
    "title": "Đề FE · SU26 RE (721295)",
    "description": "Đề thi thật JPD123_SU26_RE_721295 (30 câu: 27 trắc nghiệm + 3 đọc hiểu PN=5). Đã hiệu đính câu 17 (thay nhiễu trùng nghĩa どれくらい), câu 18 (sửa tham chiếu Bài 6), câu 30 (chuẩn hóa 来週) và cân bằng lại vị trí đáp án A–D.",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-source",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nきのう【来日】しました。",
        "options": [
          "あした",
          "らいじつ",
          "らいひ",
          "らいにち"
        ],
        "answer": 3,
        "explanation": "来日 đọc âm On là らいにち (đến Nhật Bản); từ ghép Kanji mở rộng JPD123.",
        "origin": "transcribed",
        "solution": {
          "completed": "きのう来日（らいにち）しました。",
          "meaning": "Hôm qua tôi đã đến Nhật Bản.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "あした là cách đọc của 明日 (ngày mai), không phải 来日.",
            "らいじつ sai âm On của 日 trong từ ghép này (đọc にち, không đọc じつ).",
            "らいひ ghép nhầm âm On らい với âm Kun ひ của chữ 日.",
            "来日 đọc âm On là らいにち (đến Nhật Bản); từ ghép Kanji mở rộng JPD123."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=3",
        "id": "fe-su26-re-1-01"
      },
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【今日】、ともだちと サッカーを します。",
        "options": [
          "きょにち",
          "いまひ",
          "きょう",
          "いまにち"
        ],
        "answer": 2,
        "explanation": "今日 có cách đọc đặc biệt (jukujikun) là きょう (hôm nay).",
        "origin": "transcribed",
        "solution": {
          "completed": "今日（きょう）、ともだちとサッカーをします。",
          "meaning": "Hôm nay tôi chơi bóng đá cùng bạn.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "きょにち sai vì đọc rút gọn きょ rồi ghép にち.",
            "いまひ là cách ghép âm Kun từng chữ, không dùng cho 今日.",
            "今日 có cách đọc đặc biệt (jukujikun) là きょう (hôm nay).",
            "いまにち ghép âm Kun いま và âm On にち, không phải cách đọc chuẩn."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=4",
        "id": "fe-su26-re-1-02"
      },
      {
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nへやに【小さい】ねこが います。",
        "options": [
          "こさい",
          "ちいさい",
          "ちいさ",
          "ちさい"
        ],
        "answer": 1,
        "explanation": "Tính từ đuôi い 小さい đọc đầy đủ là ちいさい (nhỏ, bé).",
        "origin": "transcribed",
        "solution": {
          "completed": "へやに小さい（ちいさい）ねこがいます。",
          "meaning": "Trong phòng có một con mèo nhỏ.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "こさい đọc nhầm chữ 小 thành こ như trong từ ghép 小さい ≠ こさい.",
            "Tính từ đuôi い 小さい đọc đầy đủ là ちいさい (nhỏ, bé).",
            "ちいさ thiếu đuôi い cuối của tính từ đuôi い trong ngữ cảnh này.",
            "ちさい thiếu trường âm い ở âm tiết đầu (đúng là ちいさい)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=5",
        "id": "fe-su26-re-1-03"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nあした ABCかいしゃで【けんがく】します。",
        "options": [
          "見学",
          "見字",
          "貝学",
          "貝字"
        ],
        "answer": 0,
        "explanation": "見学 (Kiến Học) đọc けんがく, nghĩa là tham quan thực tế để học hỏi.",
        "origin": "transcribed",
        "solution": {
          "completed": "あしたABCかいしゃで見学（けんがく）します。",
          "meaning": "Ngày mai tôi sẽ đi tham quan học tập ở công ty ABC.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "見学 (Kiến Học) đọc けんがく, nghĩa là tham quan thực tế để học hỏi.",
            "見字 sai chữ thứ hai: dùng 字 (chữ) thay vì 学 (học).",
            "貝学 sai chữ đầu: dùng 貝 (vỏ sò) thay vì 見 (nhìn, xem).",
            "貝字 sai cả hai chữ Hán thành phần."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=6",
        "id": "fe-su26-re-1-04"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nあの【おとこ】の人は だれですか。",
        "options": [
          "女",
          "田",
          "力",
          "男"
        ],
        "answer": 3,
        "explanation": "男 (Nam) đọc là おとこ, ghép thành 男の人 (người đàn ông).",
        "origin": "transcribed",
        "solution": {
          "completed": "あの男（おとこ）の人はだれですか。",
          "meaning": "Người đàn ông kia là ai vậy?",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "女 đọc là おんな (phụ nữ), trái nghĩa với おとこ.",
            "田 đọc là た (ruộng), chỉ là phần trên của chữ 男.",
            "力 đọc là ちから (sức lực), chỉ là phần dưới của chữ 男.",
            "男 (Nam) đọc là おとこ, ghép thành 男の人 (người đàn ông)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=7",
        "id": "fe-su26-re-1-05"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n【らいしゅう】、どうぶつえんで ともだちに あいます。",
        "options": [
          "今周",
          "来周",
          "来週",
          "今週"
        ],
        "answer": 2,
        "explanation": "来週 (Lai Chu) đọc らいしゅう (tuần sau), gồm chữ 来 và 週 (có bộ Sước).",
        "origin": "transcribed",
        "solution": {
          "completed": "来週（らいしゅう）、どうぶつえんでともだちにあいます。",
          "meaning": "Tuần sau tôi sẽ gặp bạn ở sở thú.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "今周 sai cả chữ đầu 今 lẫn chữ sau 周 (thiếu bộ Sước).",
            "来周 thiếu bộ Sước ở chữ 週; chữ 周 không dùng cho từ tuần lễ.",
            "来週 (Lai Chu) đọc らいしゅう (tuần sau), gồm chữ 来 và 週 (có bộ Sước).",
            "今週 đọc こんしゅう (tuần này), sai chữ đầu 今 thay vì 来."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=8",
        "id": "fe-su26-re-1-06"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nやまへ しゃしんを（　　）に行きます。",
        "options": [
          "とりたい",
          "とり",
          "とって",
          "とりま"
        ],
        "answer": 1,
        "explanation": "Mẫu mục đích V(bỏ ます) + に行きます: とります bỏ ます còn とり.",
        "origin": "transcribed",
        "solution": {
          "completed": "やまへしゃしんをとりにいきます。",
          "meaning": "Tôi lên núi để chụp ảnh.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "とりたい là dạng muốn làm (Vたい), không gắn trực tiếp trước に行きます.",
            "Mẫu mục đích V(bỏ ます) + に行きます: とります bỏ ます còn とり.",
            "とって là thể て, không dùng trước に行きます để chỉ mục đích.",
            "とりま không phải dạng chia hợp lệ của động từ とります."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=9",
        "id": "fe-su26-re-1-07"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nHong Kongは（　　）ところです。",
        "options": [
          "きれいな",
          "きれい",
          "きれいに",
          "きれいの"
        ],
        "answer": 0,
        "explanation": "きれい là tính từ đuôi な nên khi bổ nghĩa cho danh từ ところ phải thêm な → きれいなところ.",
        "origin": "transcribed",
        "solution": {
          "completed": "Hong Kongはきれいなところです。",
          "meaning": "Hồng Kông là một nơi đẹp.",
          "rule": "Bổ nghĩa danh từ: tính từ い + N (古い町), tính từ な + な + N (きれいなところ). Hỏi đặc điểm của danh từ dùng どんな + N ですか; tránh bỏ thiếu な sau tính từ đuôi な như きれい.",
          "options": [
            "きれい là tính từ đuôi な nên khi bổ nghĩa cho danh từ ところ phải thêm な → きれいなところ.",
            "きれい thiếu な khi đứng trước danh từ ところ.",
            "きれいに là dạng phó từ bổ nghĩa cho động từ, không bổ nghĩa danh từ.",
            "きれいの sai vì tính từ đuôi な nối danh từ bằng な, không dùng の."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=10",
        "id": "fe-su26-re-1-08"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA「しゅうまつ、何を たべますか。」\nB「（　　）。」\nA「いいですね。」",
        "options": [
          "すしをたべますか",
          "もうすしをたべましたか",
          "すしはいいですね",
          "すしはどうですか"
        ],
        "answer": 3,
        "explanation": "Nはどうですか dùng để đề xuất một món ăn/phương án, khớp với lời tán thành いいですね.",
        "origin": "transcribed",
        "solution": {
          "completed": "B「すしはどうですか。」A「いいですね。」",
          "meaning": "A: Cuối tuần ăn gì nhỉ? — B: Sushi thì sao? — A: Hay đấy.",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "すしをたべますか là câu hỏi có ăn sushi không, không tự nhiên bằng mẫu đề xuất đáp lại 何をたべますか.",
            "もうすしをたべましたか hỏi đã ăn sushi rồi chưa, sai thì và lệch câu hỏi về cuối tuần.",
            "すしはいいですね chỉ nhận xét sushi ngon/tốt, không phải câu hỏi gợi ý để A đáp いいですね.",
            "Nはどうですか dùng để đề xuất một món ăn/phương án, khớp với lời tán thành いいですね."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=11",
        "id": "fe-su26-re-1-09"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nサッカーの チケットが（　　）あります。",
        "options": [
          "にさい",
          "ふつか",
          "にまい",
          "ふたまい"
        ],
        "answer": 2,
        "explanation": "Lượng từ đếm vật mỏng phẳng như vé (チケット) là ～枚 (まい): 2 vé đọc là にまい.",
        "origin": "transcribed",
        "solution": {
          "completed": "サッカーのチケットがにまいあります。",
          "meaning": "Tôi có hai tấm vé bóng đá.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "にさい (2歳) dùng để đếm tuổi (2 tuổi), không dùng cho vé.",
            "ふつか (2日) là ngày mùng 2 hoặc 2 ngày, không phải lượng từ cho vé.",
            "Lượng từ đếm vật mỏng phẳng như vé (チケット) là ～枚 (まい): 2 vé đọc là にまい.",
            "ふたまい sai cách đọc số đếm với 枚 (số 2 đi với 枚 đọc にまい, không đọc ふたまい)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=12",
        "id": "fe-su26-re-1-10"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: どうして かいませんでしたか。\nB: （　　）。",
        "options": [
          "いいですね",
          "高（たか）かったですから",
          "はい、かいました",
          "そうですか"
        ],
        "answer": 1,
        "explanation": "Câu hỏi lý do どうして trả lời bằng ～から; đồng nhất thì quá khứ với かいませんでした → 高かったですから.",
        "origin": "transcribed",
        "solution": {
          "completed": "A: どうしてかいませんでしたか。B: 高かったですから。",
          "meaning": "A: Tại sao bạn đã không mua? — B: Vì nó đắt quá.",
          "rule": "Hỏi lý do dùng どうして…ですか／ましたか; trả lời nêu nguyên nhân dùng [Lý do] から (đặt cuối câu đáp hoặc nối 2 vế [Nguyên nhân]から、[Kết quả]). Chú ý đồng nhất thì giữa hai vế.",
          "options": [
            "いいですね (Hay đấy) là lời khen/tán thành, hoàn toàn không khớp ngữ cảnh.",
            "Câu hỏi lý do どうして trả lời bằng ～から; đồng nhất thì quá khứ với かいませんでした → 高かったですから.",
            "はい、かいました trả lời Có/Không, không trả lời được câu hỏi lý do どうして.",
            "そうですか (Vậy à?) dùng để phản hồi thông tin, không phải lời giải thích nguyên nhân."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=13",
        "id": "fe-su26-re-1-11"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n名前を（　　）ください。",
        "options": [
          "かいて",
          "かって",
          "かいたい",
          "かい"
        ],
        "answer": 0,
        "explanation": "Mẫu yêu cầu Vてください dùng thể て của 書きます (nhóm 1 đuôi く → いて): かいてください.",
        "origin": "transcribed",
        "solution": {
          "completed": "名前をかいてください。",
          "meaning": "Xin hãy viết tên của bạn.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "Mẫu yêu cầu Vてください dùng thể て của 書きます (nhóm 1 đuôi く → いて): かいてください.",
            "かって là thể て của 買います (mua), sai nghĩa với 名前 (tên).",
            "かいたい là dạng mong muốn (muốn viết), không đi với ください.",
            "かい không phải thể て của 書きます."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=14",
        "id": "fe-su26-re-1-12"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nバスは でんしゃ（　　）やすいです。",
        "options": [
          "が",
          "よりが",
          "のほうが",
          "より"
        ],
        "answer": 3,
        "explanation": "Mẫu so sánh hơn N1は N2より Aです dùng より sau mốc so sánh でんしゃ.",
        "origin": "transcribed",
        "solution": {
          "completed": "バスはでんしゃよりやすいです。",
          "meaning": "Xe buýt rẻ hơn tàu điện.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "が không dùng để tạo mốc so sánh \"hơn tàu điện\" sau でんしゃ.",
            "よりが ghép thừa trợ từ が ngay sau より, sai cấu trúc.",
            "のほうが đứng sau đối tượng nổi bật hơn; không đi với chủ đề バスは...でんしゃのほうが.",
            "Mẫu so sánh hơn N1は N2より Aです dùng より sau mốc so sánh でんしゃ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=15",
        "id": "fe-su26-re-1-13"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうは てんきが（　　）。",
        "options": [
          "よかたです",
          "いかったです",
          "よかったです",
          "いいでした"
        ],
        "answer": 2,
        "explanation": "Tính từ い ngoại lệ いい chuyển sang quá khứ khẳng định là よかったです (khớp きのう).",
        "origin": "transcribed",
        "solution": {
          "completed": "きのうはてんきがよかったです。",
          "meaning": "Hôm qua thời tiết đẹp.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "よかたです viết thiếu âm ngắt っ (đúng phải là よかったです).",
            "いかったです chia sai thân từ (phải đổi sang よい → よかった).",
            "Tính từ い ngoại lệ いい chuyển sang quá khứ khẳng định là よかったです (khớp きのう).",
            "いいでした sai vì いい là tính từ đuôi い, không gắn でした như danh từ/tính từ な."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=16",
        "id": "fe-su26-re-1-14"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nえいごと 日本語と（　　）すきです。",
        "options": [
          "どちらが",
          "どちらも",
          "どちら",
          "どちらか"
        ],
        "answer": 1,
        "explanation": "Câu trần thuật khẳng định nói thích cả hai đối tượng dùng どちらも (không cần thêm が).",
        "origin": "transcribed",
        "solution": {
          "completed": "えいごと日本語とどちらもすきです。",
          "meaning": "Tiếng Anh và tiếng Nhật, cả hai tôi đều thích.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "どちらが dùng cho câu hỏi lựa chọn có か ở cuối, không dùng trong câu kể kết thúc bằng です.",
            "Câu trần thuật khẳng định nói thích cả hai đối tượng dùng どちらも (không cần thêm が).",
            "どちら thiếu trợ từ も/が nên không hoàn chỉnh thành câu trần thuật.",
            "どちらか nghĩa là một trong hai, không tự nhiên trong câu khẳng định sở thích đơn giản này."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=17",
        "id": "fe-su26-re-1-15"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nりんごを（　　）ください。",
        "options": [
          "きって",
          "きて",
          "きり",
          "きいて"
        ],
        "answer": 0,
        "explanation": "切ります (きる: cắt) là động từ nhóm 1 ngoại lệ đuôi る nên chia thể て là きって.",
        "origin": "transcribed",
        "solution": {
          "completed": "りんごをきってください。",
          "meaning": "Xin hãy cắt/gọt quả táo.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "切ります (きる: cắt) là động từ nhóm 1 ngoại lệ đuôi る nên chia thể て là きって.",
            "きて là thể て của 来ます (đến) hoặc 着ます (mặc), không phải 切ります.",
            "きり là thể bỏ ます, không gắn trực tiếp với ください.",
            "きいて là thể て của 聞きます (nghe/hỏi), không hợp nghĩa với quả táo."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=18",
        "id": "fe-su26-re-1-16"
      },
      {
        "category": "dialogue",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: ハノイから 日本まで（　　）ですか。\nB: 五時間くらいです。",
        "options": [
          "どうくらい",
          "どんなくらい",
          "どこくらい",
          "どのくらい"
        ],
        "answer": 3,
        "explanation": "Hỏi khoảng thời gian di chuyển dùng どのくらい (đã hiệu đính nhiễu D từ đề gốc vốn ghi どれくらい — cũng là cách nói đúng trong tiếng Nhật).",
        "origin": "transcribed",
        "solution": {
          "completed": "A: ハノイから日本までどのくらいですか。B: 五時間くらいです。",
          "meaning": "A: Từ Hà Nội đến Nhật mất khoảng bao lâu? — B: Khoảng 5 tiếng.",
          "rule": "Hỏi khoảng thời gian di chuyển dùng AからBまで どのくらいですか (trong tiếng Nhật thực tế どれくらい cũng chuẩn). Trả lời phương tiện dùng で (riêng đi bộ là 歩いて), thời lượng dùng 時間／分くらいです.",
          "options": [
            "どうくらい không tồn tại trong tiếng Nhật (どう không ghép với くらい).",
            "どんなくらい sai ngữ pháp vì どんな phải đứng trước danh từ.",
            "どこくらい sai vì どこ hỏi địa điểm, không ghép với くらい để hỏi thời lượng.",
            "Hỏi khoảng thời gian di chuyển dùng どのくらい (đã hiệu đính nhiễu D từ đề gốc vốn ghi どれくらい — cũng là cách nói đúng trong tiếng Nhật)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=19",
        "id": "fe-su26-re-1-17"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nえいごと 日本語と（　　）が むずかしいですか。",
        "options": [
          "何",
          "どこ",
          "どちら",
          "どれ"
        ],
        "answer": 2,
        "explanation": "So sánh chọn giữa đúng 2 đối tượng (Bài 6 Dekiru) dùng nghi vấn từ どちら: N1とN2とどちらがAですか.",
        "origin": "transcribed",
        "solution": {
          "completed": "えいごと日本語とどちらがむずかしいですか。",
          "meaning": "Giữa tiếng Anh và tiếng Nhật, thứ tiếng nào khó hơn?",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "何 dùng trong so sánh nhất của cả một phạm vi (～で何が一番…), không dùng sau N1とN2と.",
            "どこ dùng để hỏi địa điểm, không dùng cho hai ngôn ngữ.",
            "So sánh chọn giữa đúng 2 đối tượng (Bài 6 Dekiru) dùng nghi vấn từ どちら: N1とN2とどちらがAですか.",
            "どれ dùng để chọn từ 3 vật trở lên, không dùng khi so sánh đúng 2 đối tượng."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=20",
        "id": "fe-su26-re-1-18"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nしゅうまつ（　　）の コンサートが あります。",
        "options": [
          "ドライブ",
          "ジャズ",
          "ツアー",
          "コメディ"
        ],
        "answer": 1,
        "explanation": "ジャズ (nhạc jazz) là thể loại âm nhạc kết hợp tự nhiên với コンサート (buổi hòa nhạc).",
        "origin": "transcribed",
        "solution": {
          "completed": "しゅうまつジャズのコンサートがあります。",
          "meaning": "Cuối tuần có buổi hòa nhạc jazz.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ドライブ là lái xe đi dạo, không khớp với hòa nhạc.",
            "ジャズ (nhạc jazz) là thể loại âm nhạc kết hợp tự nhiên với コンサート (buổi hòa nhạc).",
            "ツアー là chuyến du lịch theo tour, không phải thể loại hòa nhạc.",
            "コメディ là hài kịch/phim hài, không đi với コンサート."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=21",
        "id": "fe-su26-re-1-19"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nおんせんは（　　）です。",
        "options": [
          "きもちがいい",
          "むずかしい",
          "かんたん",
          "たいへん"
        ],
        "answer": 0,
        "explanation": "気持ちがいい (きもちがいい: dễ chịu, sảng khoái) phù hợp nhất để miêu tả cảm giác tắm suối nước nóng.",
        "origin": "transcribed",
        "solution": {
          "completed": "おんせんはきもちがいいです。",
          "meaning": "Suối nước nóng thật dễ chịu.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "気持ちがいい (きもちがいい: dễ chịu, sảng khoái) phù hợp nhất để miêu tả cảm giác tắm suối nước nóng.",
            "むずかしい nghĩa là khó, không dùng để miêu tả cảm giác tắm suối nước nóng.",
            "かんたん nghĩa là đơn giản/dễ dàng, lệch ngữ cảnh với おんせん.",
            "たいへん nghĩa là vất vả/khó khăn, không hợp sắc thái thư giãn của suối nước nóng."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=22",
        "id": "fe-su26-re-1-20"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）と りょうりを つくります。",
        "options": [
          "デパート",
          "アニメ",
          "ドライブ",
          "ルームメイト"
        ],
        "answer": 3,
        "explanation": "Trợ từ と chỉ người cùng thực hiện hành động, nên cần danh từ chỉ người là ルームメイト (bạn cùng phòng).",
        "origin": "transcribed",
        "solution": {
          "completed": "ルームメイトとりょうりをつくります。",
          "meaning": "Tôi nấu ăn cùng bạn cùng phòng.",
          "rule": "Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.",
          "options": [
            "デパート là trung tâm thương mại (địa điểm), không phải người đi cùng với と.",
            "アニメ là phim hoạt hình, không thể cùng nấu ăn.",
            "ドライブ là việc lái xe dạo chơi, không phải danh từ chỉ người.",
            "Trợ từ と chỉ người cùng thực hiện hành động, nên cần danh từ chỉ người là ルームメイト (bạn cùng phòng)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=23",
        "id": "fe-su26-re-1-21"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）で とんかつが いちばんすきです。",
        "options": [
          "くだもの",
          "のみもの",
          "たべもの",
          "かいもの"
        ],
        "answer": 2,
        "explanation": "とんかつ (thịt heo chiên xù) là món ăn nên phạm vi nhóm đúng là たべもの (đồ ăn).",
        "origin": "transcribed",
        "solution": {
          "completed": "たべものでとんかつがいちばんすきです。",
          "meaning": "Trong các món ăn, tôi thích tonkatsu nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "くだもの là trái cây, trong khi とんかつ là món thịt chiên.",
            "のみもの là đồ uống, không khớp với とんかつ.",
            "とんかつ (thịt heo chiên xù) là món ăn nên phạm vi nhóm đúng là たべもの (đồ ăn).",
            "かいもの là việc mua sắm, không phải nhóm món ăn chứa とんかつ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=24",
        "id": "fe-su26-re-1-22"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nまいばん、おさらを（　　）。",
        "options": [
          "ひきます",
          "あらいます",
          "すいます",
          "かけます"
        ],
        "answer": 1,
        "explanation": "おさら (cái đĩa) đi tự nhiên với động từ 洗います (あらいます: rửa).",
        "origin": "transcribed",
        "solution": {
          "completed": "まいばん、おさらをあらいます。",
          "meaning": "Mỗi tối tôi đều rửa đĩa.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ひきます nghĩa là chơi (đàn guitar/piano), không dùng cho đĩa.",
            "おさら (cái đĩa) đi tự nhiên với động từ 洗います (あらいます: rửa).",
            "すいます nghĩa là hút (thuốc lá), không đi với đĩa.",
            "かけます nghĩa là gọi (điện thoại) hoặc đeo/treo, không đi với おさら."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=25",
        "id": "fe-su26-re-1-23"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあした やまに（　　）。",
        "options": [
          "のぼります",
          "あいます",
          "とります",
          "かります"
        ],
        "answer": 0,
        "explanation": "Cụm cố định trong Bài 5 là 山に登ります (やまにのぼります: leo núi).",
        "origin": "transcribed",
        "solution": {
          "completed": "あしたやまにのぼります。",
          "meaning": "Ngày mai tôi sẽ leo núi.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "Cụm cố định trong Bài 5 là 山に登ります (やまにのぼります: leo núi).",
            "あいます là gặp (người), không dùng với núi.",
            "とります là chụp (ảnh) hoặc lấy, dùng trợ từ を thay vì に và không ghép やまにとります.",
            "かります là mượn đồ, không hợp nghĩa với やまに."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=26",
        "id": "fe-su26-re-1-24"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nハノイ（　　）サッカーの しあいが あります。",
        "options": [
          "から",
          "に",
          "へ",
          "で"
        ],
        "answer": 3,
        "explanation": "Nơi diễn ra một sự kiện (サッカーのしあい) đi với trợ từ で: Địa điểm で Sự kiện が あります.",
        "origin": "transcribed",
        "solution": {
          "completed": "ハノイでサッカーのしあいがあります。",
          "meaning": "Ở Hà Nội có trận đấu bóng đá.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "から nghĩa là từ (điểm xuất phát), không chỉ nơi tổ chức sự kiện.",
            "に dùng cho sự tồn tại tĩnh của người/vật, không dùng cho nơi diễn ra sự kiện.",
            "へ chỉ hướng di chuyển, không đi với しあいがあります.",
            "Nơi diễn ra một sự kiện (サッカーのしあい) đi với trợ từ で: Địa điểm で Sự kiện が あります."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=27",
        "id": "fe-su26-re-1-25"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nしゅうまつ どこ（　　）行きたいですね。",
        "options": [
          "で",
          "を",
          "か",
          "へ"
        ],
        "answer": 2,
        "explanation": "どこ + か tạo thành đại từ bất định どこか (nơi nào đó), có thể lược へ trước 行きたい.",
        "origin": "transcribed",
        "solution": {
          "completed": "しゅうまつどこか行きたいですね。",
          "meaning": "Cuối tuần muốn đi đâu đó nhỉ.",
          "rule": "Hỏi có đi đâu đó không dùng どこか（へ）行きますか／行きましたか; phủ định hoàn toàn không đi đâu dùng どこ（へ）も行きません／行きませんでした. Tương tự cho なにも + phủ định.",
          "options": [
            "どこで vừa sai trợ từ hướng đi của 行きます vừa sai sắc thái bất định.",
            "どこを không đi với động từ di chuyển đích đến 行きたい.",
            "どこ + か tạo thành đại từ bất định どこか (nơi nào đó), có thể lược へ trước 行きたい.",
            "どこへ thiếu か nên biến thành câu hỏi \"đi đâu\", sai với câu cảm thán kết thúc bằng ね."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=28",
        "id": "fe-su26-re-1-26"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nねこは へや（　　）なか（　　）います。",
        "options": [
          "X/で",
          "の/に",
          "の/で",
          "X/に"
        ],
        "answer": 1,
        "explanation": "Cấu trúc vị trí tồn tại: Danh từ địa điểm の + vị trí (なか) + に + います → の/に.",
        "origin": "transcribed",
        "solution": {
          "completed": "ねこはへやのなかにいます。",
          "meaning": "Con mèo ở bên trong phòng.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "X/で vừa thiếu の giữa へや và なか vừa sai trợ từ tồn tại で.",
            "Cấu trúc vị trí tồn tại: Danh từ địa điểm の + vị trí (なか) + に + います → の/に.",
            "の/で sai trợ từ thứ hai vì tồn tại với います phải dùng に, không dùng で.",
            "X/に thiếu trợ từ sở hữu の giữa hai danh từ へや và なか."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=29",
        "id": "fe-su26-re-1-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [PN=5] và chọn từ thích hợp điền vào ＿＿①＿＿:\nレストランで　＿＿①＿＿。",
        "options": [
          "しょくじ しました",
          "しょくじ します",
          "日本語を べんきょうしました",
          "日本語を べんきょうします"
        ],
        "answer": 0,
        "explanation": "Tại nhà hàng (レストランで) thực hiện việc dùng bữa (しょくじ) và câu nằm trong chuỗi kể chuyện Chủ nhật quá khứ → しょくじしました.",
        "origin": "transcribed",
        "solution": {
          "completed": "レストランでしょくじしました。",
          "meaning": "Tôi đã dùng bữa ở nhà hàng.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "Tại nhà hàng (レストランで) thực hiện việc dùng bữa (しょくじ) và câu nằm trong chuỗi kể chuyện Chủ nhật quá khứ → しょくじしました.",
            "しょくじします chia ở hiện tại/tương lai, lệch thì quá khứ của chuỗi sự việc Chủ nhật.",
            "日本語をべんきょうしました sai ngữ cảnh (ở nhà hàng không nối sang câu あまりおいしくなかったです).",
            "日本語をべんきょうします vừa sai ngữ cảnh nhà hàng vừa sai thì quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=30",
        "passageId": "fe-su26-pn5",
        "passageTitle": "Bài đọc · PN=5 (Đề 1 RE)",
        "passage": "私は　日曜日、しんじゅくへ　くつを　買いに　行きました。しんじゅくは　人が　おおかったです。レストランで　＿＿①＿＿。あまり　＿＿②＿＿。来週、ともだちと　しぶやへ　えいがを　見に　行きます。おもしろい　えいがを　見たいです。",
        "id": "fe-su26-re-1-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Đọc đoạn văn [PN=5] và chọn từ thích hợp điền vào ＿＿②＿＿:\nあまり　＿＿②＿＿。",
        "options": [
          "おいしいです",
          "おいしくないです",
          "おいしかったです",
          "おいしくなかったです"
        ],
        "answer": 3,
        "explanation": "Phó từ あまり bắt buộc đi với phủ định, và ngữ cảnh kể chuyện Chủ nhật quá khứ nên dùng quá khứ phủ định おいしくなかったです.",
        "origin": "transcribed",
        "solution": {
          "completed": "あまりおいしくなかったです。",
          "meaning": "Món ăn không ngon lắm.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "おいしいです là khẳng định hiện tại, sai cả với あまり lẫn thì quá khứ.",
            "おいしくないです là phủ định hiện tại, không khớp thì quá khứ của câu trước.",
            "おいしかったです là khẳng định quá khứ, không đi với phó từ あまり.",
            "Phó từ あまり bắt buộc đi với phủ định, và ngữ cảnh kể chuyện Chủ nhật quá khứ nên dùng quá khứ phủ định おいしくなかったです."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=31",
        "passageId": "fe-su26-pn5",
        "passageTitle": "Bài đọc · PN=5 (Đề 1 RE)",
        "passage": "私は　日曜日、しんじゅくへ　くつを　買いに　行きました。しんじゅくは　人が　おおかったです。レストランで　＿＿①＿＿。あまり　＿＿②＿＿。来週、ともだちと　しぶやへ　えいがを　見に　行きます。おもしろい　えいがを　見たいです。",
        "id": "fe-su26-re-1-29"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Đọc đoạn văn [PN=5] và chọn câu có nội dung ĐÚNG với đoạn văn:",
        "options": [
          "しんじゅくは ひとが すくないです。",
          "来週、ひとりで えいがを 見に 行きます。",
          "私は しんじゅくへ くつを 買いに 行きました。",
          "私は 土曜日、しんじゅくへ 行きました。"
        ],
        "answer": 2,
        "explanation": "Khớp hoàn toàn câu đầu tiên trong đoạn văn PN=5 (đã chuẩn hóa chính tả 来週 ở phương án nhiễu).",
        "origin": "transcribed",
        "solution": {
          "completed": "私は日曜日、しんじゅくへくつを買いに行きました。",
          "meaning": "Chủ nhật tôi đã đi Shinjuku để mua giày.",
          "rule": "Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.",
          "options": [
            "Sai chi tiết: đoạn văn nói 人がおおかったです (đông người), không phải すくない (ít người).",
            "Sai người đi cùng: đoạn văn nêu ともだちと (cùng bạn), không phải ひとりで (một mình).",
            "Khớp hoàn toàn câu đầu tiên trong đoạn văn PN=5 (đã chuẩn hóa chính tả 来週 ở phương án nhiễu).",
            "Sai thứ: đoạn văn nêu 日曜日 (Chủ nhật), không phải 土曜日 (Thứ bảy)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=32",
        "passageId": "fe-su26-pn5",
        "passageTitle": "Bài đọc · PN=5 (Đề 1 RE)",
        "passage": "私は　日曜日、しんじゅくへ　くつを　買いに　行きました。しんじゅくは　人が　おおかったです。レストランで　＿＿①＿＿。あまり　＿＿②＿＿。来週、ともだちと　しぶやへ　えいがを　見に　行きます。おもしろい　えいがを　見たいです。",
        "id": "fe-su26-re-1-30"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-su26-fe-2",
    "title": "Đề FE · SU26 FE (276190)",
    "description": "Đề thi thật JPD123_SU26_FE_276190 (30 câu: 27 trắc nghiệm + 3 đọc hiểu PN=4). Đã chuẩn hóa dấu câu (câu 6), sửa diễn đạt lời giải (câu 24), làm rõ ngữ cảnh (câu 26) và cân bằng vị trí đáp án A–D.",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-source",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n日本に【半年】います。",
        "options": [
          "ばんねん",
          "ばんどし",
          "はんとし",
          "はんどし"
        ],
        "answer": 2,
        "explanation": "半年 (bán niên: nửa năm) có cách đọc chuẩn là はんとし (không biến âm sang どし).",
        "origin": "transcribed",
        "solution": {
          "completed": "日本に半年（はんとし）います。",
          "meaning": "Tôi ở Nhật nửa năm.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "ばんねん sai âm đầu ば (đúng là はん) và âm sau ねん.",
            "ばんどし sai cả âm đầu ば lẫn âm đục どし.",
            "半年 (bán niên: nửa năm) có cách đọc chuẩn là はんとし (không biến âm sang どし).",
            "はんどし sai vì biến âm đục と → ど không đúng quy tắc đọc của 半年."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=34",
        "id": "fe-su26-fe-2-01"
      },
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【毎月】バーベキューをします。",
        "options": [
          "めいつき",
          "まいつき",
          "まいがつ",
          "まいづき"
        ],
        "answer": 1,
        "explanation": "毎月 (mỗi tháng) đọc là まいつき (hoặc まいげつ trong văn trang trọng), không biến âm đục.",
        "origin": "transcribed",
        "solution": {
          "completed": "毎月（まいつき）バーベキューをします。",
          "meaning": "Hàng tháng tôi đều tổ chức tiệc nướng BBQ.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "めいつき đọc sai chữ 毎 thành めい thay vì まい.",
            "毎月 (mỗi tháng) đọc là まいつき (hoặc まいげつ trong văn trang trọng), không biến âm đục.",
            "まいがつ đọc sai chữ 月 thành がつ (がつ dùng cho tên tháng 1–12).",
            "まいづき thêm âm đục づ sai quy tắc đọc chuẩn của 毎月."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=35",
        "id": "fe-su26-fe-2-02"
      },
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n大学の【休日】はいつですか。",
        "options": [
          "きゅうじつ",
          "きゅじつ",
          "やすみひ",
          "やすみび"
        ],
        "answer": 0,
        "explanation": "休日 (hưu nhật: ngày nghỉ) đọc theo âm On là きゅうじつ (có trường âm う).",
        "origin": "transcribed",
        "solution": {
          "completed": "大学の休日（きゅうじつ）はいつですか。",
          "meaning": "Ngày nghỉ của trường đại học là khi nào?",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "休日 (hưu nhật: ngày nghỉ) đọc theo âm On là きゅうじつ (có trường âm う).",
            "きゅじつ thiếu trường âm う ở âm tiết đầu きゅう.",
            "やすみひ ghép âm Kun từng chữ, không phải cách đọc của 休日.",
            "やすみび cũng là cách đọc ghép âm Kun không chuẩn cho từ 休日."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=36",
        "id": "fe-su26-fe-2-03"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nぎんこうは【ごぜん】9時からです。",
        "options": [
          "午見",
          "午後",
          "午先",
          "午前"
        ],
        "answer": 3,
        "explanation": "午前 (Ngọ Tiền) đọc ごぜん, nghĩa là buổi sáng (trước 12 giờ trưa).",
        "origin": "transcribed",
        "solution": {
          "completed": "ぎんこうは午前（ごぜん）9時からです。",
          "meaning": "Ngân hàng mở cửa từ 9 giờ sáng.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "午見 sai chữ sau: dùng 見 (nhìn) thay vì 前 (trước).",
            "午後 đọc ごご (buổi chiều), ngược nghĩa với ごぜん.",
            "午先 sai chữ sau: dùng 先 (tiên/trước đó) thay vì 前.",
            "午前 (Ngọ Tiền) đọc ごぜん, nghĩa là buổi sáng (trước 12 giờ trưa)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=37",
        "id": "fe-su26-fe-2-04"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nお【くに】は どちらですか。",
        "options": [
          "内",
          "向",
          "国",
          "肉"
        ],
        "answer": 2,
        "explanation": "国 (Quốc) đọc là くに (đất nước), bên trong khung 囗 có chữ 玉.",
        "origin": "transcribed",
        "solution": {
          "completed": "お国（くに）はどちらですか。",
          "meaning": "Đất nước của bạn là ở đâu?",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "内 đọc là うち/ない (bên trong), thiếu nét đáy khung 囗 và chữ 玉.",
            "向 đọc là むく (hướng về), không phải chữ 国.",
            "国 (Quốc) đọc là くに (đất nước), bên trong khung 囗 có chữ 玉.",
            "肉 đọc là にく (thịt), khác hẳn cấu tạo và nghĩa của 国."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=38",
        "id": "fe-su26-fe-2-05"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nどんな【りょうり】が すきですか。",
        "options": [
          "科野",
          "料理",
          "料野",
          "科理"
        ],
        "answer": 1,
        "explanation": "料理 (Liệu Lý) đọc りょうり (món ăn, nấu ăn); chữ 料 có bộ Mễ 米 bên trái.",
        "origin": "transcribed",
        "solution": {
          "completed": "どんな料理（りょうり）がすきですか。",
          "meaning": "Bạn thích món ăn như thế nào?",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "科野 sai cả hai chữ Hán thành phần.",
            "料理 (Liệu Lý) đọc りょうり (món ăn, nấu ăn); chữ 料 có bộ Mễ 米 bên trái.",
            "料野 sai chữ thứ hai: dùng 野 (dã/đồng) thay vì 理 (lý).",
            "科理 sai chữ đầu: dùng 科 (bộ Hòa 禾) thay vì 料 (bộ Mễ 米)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=39",
        "id": "fe-su26-fe-2-06"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n今 ギターを（　　）います。",
        "options": [
          "ひいて",
          "ひきて",
          "ひって",
          "ひいで"
        ],
        "answer": 0,
        "explanation": "弾きます (ひく: chơi đàn dây) thuộc nhóm 1 đuôi く → chia thể て là ひいて + います (đang chơi).",
        "origin": "transcribed",
        "solution": {
          "completed": "今ギターをひいています。",
          "meaning": "Bây giờ tôi đang chơi đàn guitar.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "弾きます (ひく: chơi đàn dây) thuộc nhóm 1 đuôi く → chia thể て là ひいて + います (đang chơi).",
            "ひきて không biến âm từ き sang い, sai quy tắc thể て nhóm 1.",
            "ひって chia nhầm theo nhóm đuôi う・つ・る.",
            "ひいで dùng âm đục で vốn dành cho động từ đuôi ぐ, không phải く."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=40",
        "id": "fe-su26-fe-2-07"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n先週 ともだちの いえへ（　　）。",
        "options": [
          "いきます",
          "いきませんでしたです",
          "いきましたです",
          "いきました"
        ],
        "answer": 3,
        "explanation": "Mốc thời gian 先週 (tuần trước) đòi hỏi động từ quá khứ lịch sự いきました.",
        "origin": "transcribed",
        "solution": {
          "completed": "先週ともだちのいえへいきました。",
          "meaning": "Tuần trước tôi đã đến nhà bạn.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "いきます chia ở hiện tại/tương lai, không khớp với 先週.",
            "いきませんでしたです thừa です sau ませんでした, sai ngữ pháp.",
            "いきましたです thừa です sau ました, sai ngữ pháp.",
            "Mốc thời gian 先週 (tuần trước) đòi hỏi động từ quá khứ lịch sự いきました."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=41",
        "id": "fe-su26-fe-2-08"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n日本の 食べ物で すしが（　　）すきです。",
        "options": [
          "たいへん",
          "とても",
          "いちばん",
          "ぜんぜん"
        ],
        "answer": 2,
        "explanation": "Cấu trúc so sánh nhất trong phạm vi Nで + đối tượng が + いちばん + tính từ → いちばん.",
        "origin": "transcribed",
        "solution": {
          "completed": "日本の食べ物ですしがいちばんすきです。",
          "meaning": "Trong các món ăn Nhật Bản, tôi thích sushi nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "たいへん nghĩa là vất vả/rất, không diễn đạt ý so sánh nhất trong phạm vi 日本の食べ物で.",
            "とても (rất) chỉ mức độ thông thường, không tạo cấu trúc so sánh nhất với phạm vi で.",
            "Cấu trúc so sánh nhất trong phạm vi Nで + đối tượng が + いちばん + tính từ → いちばん.",
            "ぜんぜん (hoàn toàn không) chỉ đi với câu phủ định, không hợp với すきです."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=42",
        "id": "fe-su26-fe-2-09"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこのケーキは あまいです。（　　）、おいしいです。",
        "options": [
          "いまから",
          "そして",
          "が",
          "それから"
        ],
        "answer": 1,
        "explanation": "Nối hai câu bổ sung đặc điểm cùng chiều (ngọt và ngon) dùng liên từ そして.",
        "origin": "transcribed",
        "solution": {
          "completed": "このケーキはあまいです。そして、おいしいです。",
          "meaning": "Chiếc bánh này ngọt. Và nó ngon.",
          "rule": "Nối hai câu/ý bổ sung cùng chiều dùng そして (Và, hơn nữa); nối hai ý tương phản dùng が (Nhưng). Phân biệt そして (thêm tính chất/ý song song) với それから (trình tự hành động trước–sau).",
          "options": [
            "いまから nghĩa là từ bây giờ, sai nghĩa hoàn toàn.",
            "Nối hai câu bổ sung đặc điểm cùng chiều (ngọt và ngon) dùng liên từ そして.",
            "が nối hai ý tương phản và đặt giữa câu chứ không mở đầu câu mới sau dấu chấm.",
            "それから dùng nối trình tự hành động trước–sau (rồi sau đó), không nối hai tính chất song song."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=43",
        "id": "fe-su26-fe-2-10"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n今 うちの なかに 女の人が（　　）。",
        "options": [
          "います",
          "あります",
          "ありました",
          "いました"
        ],
        "answer": 0,
        "explanation": "女の人 là người nên dùng động từ tồn tại います; trạng từ 今 (bây giờ) đòi hỏi thì hiện tại.",
        "origin": "transcribed",
        "solution": {
          "completed": "今うちのなかに女の人がいます。",
          "meaning": "Bây giờ trong nhà có một người phụ nữ.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "女の人 là người nên dùng động từ tồn tại います; trạng từ 今 (bây giờ) đòi hỏi thì hiện tại.",
            "あります chỉ dùng cho đồ vật/cây cối, không dùng cho người.",
            "ありました vừa sai loại danh từ (dùng cho vật) vừa sai thì quá khứ.",
            "いました đúng động từ cho người nhưng chia quá khứ, trái với 今."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=44",
        "id": "fe-su26-fe-2-11"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: ビールは まだ ありますか。\nB: いいえ、（　　）ありません。",
        "options": [
          "まだ",
          "いちばん",
          "より",
          "もう"
        ],
        "answer": 3,
        "explanation": "Phủ định cho まだありますか (vẫn còn không) là いいえ、もうありません (không còn nữa / hết rồi).",
        "origin": "transcribed",
        "solution": {
          "completed": "A: ビールはまだありますか。B: いいえ、もうありません。",
          "meaning": "A: Bia vẫn còn không? — B: Không, hết rồi.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだありません mang nghĩa \"chưa có\", không phải \"đã hết\" khi đáp lại まだありますか.",
            "いちばん dùng trong so sánh nhất, không đi với ありません ở ngữ cảnh này.",
            "より dùng trong so sánh hơn, không phù hợp ở đây.",
            "Phủ định cho まだありますか (vẫn còn không) là いいえ、もうありません (không còn nữa / hết rồi)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=45",
        "id": "fe-su26-fe-2-12"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: いっしょに バーベキューを しませんか。\nB: ええ、いいですね。（　　）。",
        "options": [
          "しました",
          "しましょうか",
          "しましょう",
          "しません"
        ],
        "answer": 2,
        "explanation": "Nhận lời rủ rê Vませんか dùng Vましょう (しましょう: chúng ta cùng làm nhé).",
        "origin": "transcribed",
        "solution": {
          "completed": "B: ええ、いいですね。しましょう。",
          "meaning": "A: Cùng làm tiệc nướng nhé? — B: Ừ, hay đấy. Cùng làm thôi!",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "しました là thì quá khứ (đã làm), sai hoàn toàn với lời rủ.",
            "しましょうか mang sắc thái đề nghị mình làm giúp hoặc hỏi ý kiến lại, không tự nhiên bằng しましょう khi đã tán thành いいですね.",
            "Nhận lời rủ rê Vませんか dùng Vましょう (しましょう: chúng ta cùng làm nhé).",
            "しません là phủ định (không làm), mâu thuẫn với ええ、いいですね."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=46",
        "id": "fe-su26-fe-2-13"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nカレーの（　　）をおしえます。",
        "options": [
          "つくりたかた",
          "つくりかた",
          "つくり",
          "つくかた"
        ],
        "answer": 1,
        "explanation": "Cách làm một việc: V(bỏ ます) + かた → つくります bỏ ます thành つくり + かた = つくりかた.",
        "origin": "transcribed",
        "solution": {
          "completed": "カレーのつくりかたをおしえます。",
          "meaning": "Tôi sẽ chỉ bạn cách làm món cà ri.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "つくりたかた thừa âm た, sai cấu tạo ngữ pháp.",
            "Cách làm một việc: V(bỏ ます) + かた → つくります bỏ ます thành つくり + かた = つくりかた.",
            "つくり thiếu hậu tố かた nên không mang nghĩa \"cách làm\".",
            "つくかた gắn かた vào thể từ điển つく thay vì gốc ます つくり."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=47",
        "id": "fe-su26-fe-2-14"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nけさ、10時に おきましたから、（　　）。",
        "options": [
          "何も たべませんでした",
          "うちで たべます",
          "たべません",
          "何も たべません"
        ],
        "answer": 0,
        "explanation": "Mốc thời gian けさ (sáng nay, đã qua) đi với vế kết quả ở quá khứ phủ định: 何もたべませんでした.",
        "origin": "transcribed",
        "solution": {
          "completed": "けさ、10時におきましたから、何もたべませんでした。",
          "meaning": "Sáng nay vì ngủ dậy lúc 10 giờ nên tôi đã không ăn gì cả.",
          "rule": "Hỏi lý do dùng どうして…ですか／ましたか; trả lời nêu nguyên nhân dùng [Lý do] から (đặt cuối câu đáp hoặc nối 2 vế [Nguyên nhân]から、[Kết quả]). Chú ý đồng nhất thì giữa hai vế.",
          "options": [
            "Mốc thời gian けさ (sáng nay, đã qua) đi với vế kết quả ở quá khứ phủ định: 何もたべませんでした.",
            "うちでたべます vừa sai thì hiện tại/tương lai vừa không hợp logic nhân quả ngủ dậy muộn.",
            "たべません chia ở hiện tại/tương lai, lệch thì với けさ…おきました.",
            "何もたべません đúng nghĩa phủ định nhưng chia hiện tại thay vì quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=48",
        "id": "fe-su26-fe-2-15"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nリンさん「パクさんは どこに いますか。」\nキムさん「となりの へやで ワンさんと（　　）。」",
        "options": [
          "はなしました",
          "はなしましょう",
          "はなしてください",
          "はなしています"
        ],
        "answer": 3,
        "explanation": "Câu hỏi どこにいますか hỏi vị trí hiện tại nên câu trả lời mô tả hành động đang diễn ra Vています: はなしています.",
        "origin": "transcribed",
        "solution": {
          "completed": "キムさん「となりのへやでワンさんとはなしています。」",
          "meaning": "Linh: Anh Park đang ở đâu? — Kim: Đang nói chuyện với anh Vương ở phòng bên cạnh.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "はなしました là thì quá khứ (đã nói chuyện), không trả lời tình trạng hiện tại.",
            "はなしましょう là lời rủ rê, sai ngữ cảnh trả lời về anh Park.",
            "はなしてください là lời nhờ vả yêu cầu, không khớp hội thoại.",
            "Câu hỏi どこにいますか hỏi vị trí hiện tại nên câu trả lời mô tả hành động đang diễn ra Vています: はなしています."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=49",
        "id": "fe-su26-fe-2-16"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: 日本で（　　）が いちばん さむいですか。\nB: 北海道（ほっかいどう）が いちばん さむいです。",
        "options": [
          "なに",
          "だれ",
          "どこ",
          "いつ"
        ],
        "answer": 2,
        "explanation": "Câu trả lời là địa danh 北海道 nên nghi vấn từ trong mẫu so sánh nhất phải hỏi nơi chốn: どこ.",
        "origin": "transcribed",
        "solution": {
          "completed": "A: 日本でどこがいちばんさむいですか。B: 北海道がいちばんさむいです。",
          "meaning": "A: Ở Nhật Bản nơi nào lạnh nhất? — B: Hokkaido lạnh nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "なに dùng để hỏi sự vật/món ăn, không hỏi địa danh.",
            "だれ dùng để hỏi người, không hợp ngữ cảnh thời tiết vùng miền.",
            "Câu trả lời là địa danh 北海道 nên nghi vấn từ trong mẫu so sánh nhất phải hỏi nơi chốn: どこ.",
            "いつ dùng để hỏi thời điểm (khi nào), không khớp câu trả lời Hokkaido."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=50",
        "id": "fe-su26-fe-2-17"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: 先週の 週末（しゅうまつ）、（　　）行きましたか。\nB: いいえ、どこも 行きませんでした。",
        "options": [
          "なにを",
          "どこかへ",
          "どこへ",
          "なにか"
        ],
        "answer": 1,
        "explanation": "Câu trả lời bắt đầu bằng いいえ (Có/Không) nên câu hỏi cần đại từ bất định どこかへ (đi đâu đó không).",
        "origin": "transcribed",
        "solution": {
          "completed": "A: 先週の週末、どこかへ行きましたか。B: いいえ、どこも行きませんでした。",
          "meaning": "A: Cuối tuần trước bạn có đi đâu không? — B: Không, tôi không đi đâu cả.",
          "rule": "Hỏi có đi đâu đó không dùng どこか（へ）行きますか／行きましたか; phủ định hoàn toàn không đi đâu dùng どこ（へ）も行きません／行きませんでした. Tương tự cho なにも + phủ định.",
          "options": [
            "なにを cũng hỏi đồ vật/hành động, không đi với 行きましたか.",
            "Câu trả lời bắt đầu bằng いいえ (Có/Không) nên câu hỏi cần đại từ bất định どこかへ (đi đâu đó không).",
            "どこへ hỏi địa điểm cụ thể (đi đâu), không trả lời bằng いいえ.",
            "なにか hỏi \"cái gì đó\", không hợp với động từ di chuyển 行きましたか."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=51",
        "id": "fe-su26-fe-2-18"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきょうは（　　）あついです。",
        "options": [
          "すこし",
          "あまり",
          "いちねんじゅう",
          "そして"
        ],
        "answer": 0,
        "explanation": "Câu khẳng định あついです đi tự nhiên với phó từ mức độ すこし (một chút, hơi).",
        "origin": "transcribed",
        "solution": {
          "completed": "きょうはすこしあついです。",
          "meaning": "Hôm nay hơi nóng một chút.",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "Câu khẳng định あついです đi tự nhiên với phó từ mức độ すこし (một chút, hơi).",
            "あまり phải đi với câu phủ định (あまりあつくないです), không đi với khẳng định あついです.",
            "いちねんじゅう nghĩa là quanh năm, mâu thuẫn với trạng từ chỉ một ngày きょう (hôm nay).",
            "そして là liên từ nối hai câu, không đứng bổ nghĩa mức độ cho tính từ あつい."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=52",
        "id": "fe-su26-fe-2-19"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n私は まいばん、ともだちに でんわを（　　）。",
        "options": [
          "かいます",
          "かきます",
          "うたいます",
          "かけます"
        ],
        "answer": 3,
        "explanation": "Cụm động từ cố định cho \"gọi điện thoại\" là 電話をかけます (でんわをかけます).",
        "origin": "transcribed",
        "solution": {
          "completed": "私はまいばん、ともだちにでんわをかけます。",
          "meaning": "Mỗi tối tôi đều gọi điện thoại cho bạn.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "かいます nghĩa là mua; ともだちにでんわをかいます không đúng collocation gọi điện.",
            "かきます nghĩa là viết/vẽ, không đi với でんわを.",
            "うたいます nghĩa là hát, dùng với 歌を, không đi với でんわを.",
            "Cụm động từ cố định cho \"gọi điện thoại\" là 電話をかけます (でんわをかけます)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=53",
        "id": "fe-su26-fe-2-20"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nスープに（　　）をいれます。",
        "options": [
          "れいぞうこ",
          "だいどころ",
          "しお",
          "いす"
        ],
        "answer": 2,
        "explanation": "しお (塩: muối) là gia vị hợp lý để cho vào món súp (スープに〜をいれます).",
        "origin": "transcribed",
        "solution": {
          "completed": "スープにしおをいれます。",
          "meaning": "Tôi cho muối vào súp.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "れいぞうこ là tủ lạnh, là nơi cất đồ ăn chứ không phải nguyên liệu bỏ vào súp.",
            "だいどころ là nhà bếp, không phải thứ bỏ vào súp.",
            "しお (塩: muối) là gia vị hợp lý để cho vào món súp (スープに〜をいれます).",
            "いす là cái ghế, không thể cho vào súp."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=54",
        "id": "fe-su26-fe-2-21"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）が ありませんから、うみへ 行きません。",
        "options": [
          "きせつ",
          "みずぎ",
          "たべもの",
          "やきゅう"
        ],
        "answer": 1,
        "explanation": "みずぎ (水着: đồ bơi) là vật dụng cần thiết để đi biển (うみへ行く).",
        "origin": "transcribed",
        "solution": {
          "completed": "みずぎがありませんから、うみへ行きません。",
          "meaning": "Vì không có đồ bơi nên tôi không đi biển.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "きせつ (mùa) không hợp nghĩa với mẫu がありませんから ở ngữ cảnh này.",
            "みずぎ (水着: đồ bơi) là vật dụng cần thiết để đi biển (うみへ行く).",
            "たべもの (đồ ăn) không phải lý do đặc trưng trực tiếp dẫn đến không đi biển như đồ bơi.",
            "やきゅう (bóng chày) không liên quan đến việc đi biển."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=55",
        "id": "fe-su26-fe-2-22"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあしたは（　　）ですから、ひるまで ねたいです。",
        "options": [
          "ひま",
          "きらい",
          "やすい",
          "たのしい"
        ],
        "answer": 0,
        "explanation": "ひま (rảnh rỗi) là lý do hợp lý để muốn ngủ đến trưa (ひるまでねたいです).",
        "origin": "transcribed",
        "solution": {
          "completed": "あしたはひまですから、ひるまでねたいです。",
          "meaning": "Vì ngày mai rảnh rỗi nên tôi muốn ngủ đến tận trưa.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ひま (rảnh rỗi) là lý do hợp lý để muốn ngủ đến trưa (ひるまでねたいです).",
            "きらい (ghét) không phù hợp làm chủ vị cho あしたは…ですから.",
            "やすい (rẻ) dùng cho giá cả, không miêu tả ngày mai.",
            "たのしい (vui vẻ) không tạo lý do trực tiếp cho việc muốn ngủ nướng đến trưa."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=56",
        "id": "fe-su26-fe-2-23"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n毎日（　　）を あらいます。",
        "options": [
          "コース",
          "ポスト",
          "ゲーム",
          "コップ"
        ],
        "answer": 3,
        "explanation": "コップ (cốc, ly) là vật dụng ăn uống cần rửa hàng ngày nên đi tự nhiên với あらいます (rửa).",
        "origin": "transcribed",
        "solution": {
          "completed": "毎日コップをあらいます。",
          "meaning": "Hàng ngày tôi đều rửa cốc.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "コース là khóa học/tuyến đường/thực đơn theo suất, không đi với あらいます.",
            "ポスト là hòm thư bưu điện, không phải đồ vật rửa mỗi ngày.",
            "ゲーム là trò chơi điện tử, không dùng với động từ あらいます.",
            "コップ (cốc, ly) là vật dụng ăn uống cần rửa hàng ngày nên đi tự nhiên với あらいます (rửa)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=57",
        "id": "fe-su26-fe-2-24"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nなに（　　）ほしくないです。",
        "options": [
          "に",
          "を",
          "も",
          "が"
        ],
        "answer": 2,
        "explanation": "Từ để hỏi + も + phủ định (なにもほしくないです) diễn tả phủ định hoàn toàn \"không muốn gì cả\".",
        "origin": "transcribed",
        "solution": {
          "completed": "なにもほしくないです。",
          "meaning": "Tôi không muốn có thứ gì cả.",
          "rule": "Diễn tả mong muốn có một đồ vật/danh từ dùng N が ほしいです (phủ định: ほしくないです; không muốn gì cả: なにもほしくないです). Trợ từ đánh dấu đối tượng mong muốn là が.",
          "options": [
            "に không đứng sau なに trước tính từ ほしい.",
            "を không dùng cho đối tượng của ほしい và không tạo nghĩa phủ định hoàn toàn.",
            "Từ để hỏi + も + phủ định (なにもほしくないです) diễn tả phủ định hoàn toàn \"không muốn gì cả\".",
            "なにがほしくないです sai sắc thái tự nhiên; câu phủ định hoàn toàn dùng なにも thay vì なにが."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=58",
        "id": "fe-su26-fe-2-25"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n日曜日 かぞく（　　）スーパーへ 行きます。",
        "options": [
          "で",
          "と",
          "か",
          "に"
        ],
        "answer": 1,
        "explanation": "Trợ từ と chỉ người cùng thực hiện hành động (かぞくと: cùng gia đình). (Ghi chú: đề gốc có nhiễu が vốn hợp cú pháp khi đổi chủ ngữ, đã thay bằng で để tránh mơ hồ.)",
        "origin": "transcribed",
        "solution": {
          "completed": "日曜日かぞくとスーパーへ行きます。",
          "meaning": "Chủ nhật tôi đi siêu thị cùng gia đình.",
          "rule": "Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.",
          "options": [
            "で chỉ địa điểm hoặc phương tiện, không dùng cho người cùng đi.",
            "Trợ từ と chỉ người cùng thực hiện hành động (かぞくと: cùng gia đình). (Ghi chú: đề gốc có nhiễu が vốn hợp cú pháp khi đổi chủ ngữ, đã thay bằng で để tránh mơ hồ.)",
            "か nghĩa là \"hoặc\", không nối một danh từ với động từ hành động.",
            "に chỉ đích đến hoặc thời điểm, không chỉ người cùng đi siêu thị."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=59",
        "id": "fe-su26-fe-2-26"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: 土曜日 どこ（　　）行きますか。\nB: はい、こうえんへ 行きます。",
        "options": [
          "か",
          "へ",
          "に",
          "も"
        ],
        "answer": 0,
        "explanation": "B đáp bằng はい (Có) nên câu hỏi phải dùng đại từ bất định どこか (có đi đâu đó không, lược へ).",
        "origin": "transcribed",
        "solution": {
          "completed": "A: 土曜日どこか行きますか。B: はい、こうえんへ行きます。",
          "meaning": "A: Thứ bảy bạn có đi đâu không? — B: Vâng, tôi đi công viên.",
          "rule": "Hỏi có đi đâu đó không dùng どこか（へ）行きますか／行きましたか; phủ định hoàn toàn không đi đâu dùng どこ（へ）も行きません／行きませんでした. Tương tự cho なにも + phủ định.",
          "options": [
            "B đáp bằng はい (Có) nên câu hỏi phải dùng đại từ bất định どこか (có đi đâu đó không, lược へ).",
            "どこへ hỏi cụ thể đi đâu, không trả lời bằng はい.",
            "どこに cũng là câu hỏi đích đến cụ thể, không khớp với lời đáp はい.",
            "どこも chỉ đi với câu phủ định (どこも行きません), không dùng trong câu hỏi khẳng định."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=60",
        "id": "fe-su26-fe-2-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [PN=4] và chọn từ thích hợp điền vào ＿＿①＿＿:\n日曜日、ともだちと　ちかくの　やまに　＿＿①＿＿。",
        "options": [
          "つくりました",
          "あいました",
          "はいりました",
          "のぼりました"
        ],
        "answer": 3,
        "explanation": "Cụm cố định \"leo núi\" là やまにのぼります; toàn bài kể kỷ niệm Chủ nhật đã qua → のぼりました.",
        "origin": "transcribed",
        "solution": {
          "completed": "日曜日、ともだちとちかくのやまにのぼりました。",
          "meaning": "Chủ nhật tôi đã leo ngọn núi gần nhà cùng bạn.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "つくりました nghĩa là làm/chế tạo, không đi với やまに.",
            "あいました nghĩa là gặp gỡ (người), không dùng với ngọn núi.",
            "はいりました nghĩa là đi vào (phòng/suối nước nóng), không dùng để leo núi.",
            "Cụm cố định \"leo núi\" là やまにのぼります; toàn bài kể kỷ niệm Chủ nhật đã qua → のぼりました."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=61",
        "passageId": "fe-su26-pn4",
        "passageTitle": "Bài đọc · PN=4 (Đề 2 FE)",
        "passage": "日曜日、ともだちと　ちかくの　やまに　＿＿①＿＿。てんきが　よかったですから、とても　きもちが　よかったです。やまで、おべんとうを　＿＿②＿＿。やまからの　けしきが　とても　きれいでした。それから、ふるいお寺を　見に　行きました。とてもおもしろかったです。とても　たのしい１日でした。また（lại）行きたいです。",
        "id": "fe-su26-fe-2-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [PN=4] và chọn từ thích hợp điền vào ＿＿②＿＿:\nやまで、おべんとうを　＿＿②＿＿。",
        "options": [
          "とりました",
          "かりました",
          "たべました",
          "しょくじしました"
        ],
        "answer": 2,
        "explanation": "おべんとうを (tân ngữ chỉ món ăn có を) đi với tha động từ たべました (đã ăn).",
        "origin": "transcribed",
        "solution": {
          "completed": "やまで、おべんとうをたべました。",
          "meaning": "Ở trên núi, tôi đã ăn cơm hộp bento.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "とりました nghĩa là chụp (ảnh) hoặc lấy, không tự nhiên bằng ăn cơm hộp ở ngữ cảnh này.",
            "かりました nghĩa là mượn, không phù hợp với việc ăn cơm hộp trên núi.",
            "おべんとうを (tân ngữ chỉ món ăn có を) đi với tha động từ たべました (đã ăn).",
            "しょくじしました (dùng bữa) là tự động từ, không nhận tân ngữ món ăn có trợ từ を như おべんとうを."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=62",
        "passageId": "fe-su26-pn4",
        "passageTitle": "Bài đọc · PN=4 (Đề 2 FE)",
        "passage": "日曜日、ともだちと　ちかくの　やまに　＿＿①＿＿。てんきが　よかったですから、とても　きもちが　よかったです。やまで、おべんとうを　＿＿②＿＿。やまからの　けしきが　とても　きれいでした。それから、ふるいお寺を　見に　行きました。とてもおもしろかったです。とても　たのしい１日でした。また（lại）行きたいです。",
        "id": "fe-su26-fe-2-29"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Đọc đoạn văn [PN=4] và trả lời câu hỏi:\nやまからの けしきは どうでしたか。",
        "options": [
          "きれいじゃありませんでした",
          "きれいでした",
          "たかかったです",
          "よくなかったです"
        ],
        "answer": 1,
        "explanation": "Đoạn văn PN=4 nêu rõ: やまからのけしきがとてもきれいでした → chọn きれいでした.",
        "origin": "transcribed",
        "solution": {
          "completed": "やまからのけしきはとてもきれいでした。",
          "meaning": "Phong cảnh nhìn từ trên núi rất đẹp.",
          "rule": "Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.",
          "options": [
            "きれいじゃありませんでした nghĩa là không đẹp, trái ngược hoàn toàn với đoạn văn.",
            "Đoạn văn PN=4 nêu rõ: やまからのけしきがとてもきれいでした → chọn きれいでした.",
            "たかかったです nghĩa là cao/đắt, đoạn văn không miêu tả phong cảnh là たかい.",
            "よくなかったです nghĩa là không tốt, trái với nội dung bài đọc."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=63",
        "passageId": "fe-su26-pn4",
        "passageTitle": "Bài đọc · PN=4 (Đề 2 FE)",
        "passage": "日曜日、ともだちと　ちかくの　やまに　＿＿①＿＿。てんきが　よかったですから、とても　きもちが　よかったです。やまで、おべんとうを　＿＿②＿＿。やまからの　けしきが　とても　きれいでした。それから、ふるいお寺を　見に　行きました。とてもおもしろかったです。とても　たのしい１日でした。また（lại）行きたいです。",
        "id": "fe-su26-fe-2-30"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-su26-b5re-3",
    "title": "Đề FE · SU26 B5 RE (958017)",
    "description": "Đề thi thật JPD123_SU26_B5_RE_958017 (31 câu: 27 trắc nghiệm + 4 đọc hiểu điền khuyết PN=6). Đã hiệu đính lỗi gõ câu 11 (かいてください), sửa giải thích câu 8 và câu 15, chuẩn hóa nhiễu câu 14 và cân bằng lại vị trí đáp án A–D.",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-source",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nとしょかんの【休み】は 何曜日ですか。",
        "options": [
          "やずみ",
          "やすみ",
          "はなみ",
          "かきみ"
        ],
        "answer": 1,
        "explanation": "休み đọc là やすみ (ngày nghỉ, nghỉ ngơi), từ vựng nền Bài 3 và chủ đề Bài 5.",
        "origin": "transcribed",
        "solution": {
          "completed": "としょかんの休み（やすみ）は何曜日ですか。",
          "meaning": "Ngày nghỉ của thư viện là thứ mấy?",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "やずみ thêm âm đục ず sai (đúng là す không đục: やすみ).",
            "休み đọc là やすみ (ngày nghỉ, nghỉ ngơi), từ vựng nền Bài 3 và chủ đề Bài 5.",
            "はなみ là 花見 (ngắm hoa anh đào), sai mặt chữ và nghĩa.",
            "かきみ không phải cách đọc của 休み."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=65",
        "id": "fe-su26-b5re-3-01"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nとしょかんに【男】の ひとが います。",
        "options": [
          "おとこ",
          "おしごと",
          "おんな",
          "おなまえ"
        ],
        "answer": 0,
        "explanation": "Chữ 男 (Nam) có âm Kun là おとこ; 男のひと là người đàn ông.",
        "origin": "transcribed",
        "solution": {
          "completed": "としょかんに男（おとこ）のひとがいます。",
          "meaning": "Ở thư viện có một người đàn ông.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "Chữ 男 (Nam) có âm Kun là おとこ; 男のひと là người đàn ông.",
            "おしごと là お仕事 (công việc), sai hoàn toàn.",
            "おんな là 女 (phụ nữ), trái nghĩa với 男.",
            "おなまえ là お名前 (tên), không phải cách đọc của 男."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=66",
        "id": "fe-su26-b5re-3-02"
      },
      {
        "category": "reading",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nモスクワは ロシアの【東】です。",
        "options": [
          "にし",
          "きた",
          "みなみ",
          "ひがし"
        ],
        "answer": 3,
        "explanation": "Chữ Hán 東 (Đông) có cách đọc Kun-yomi là ひがし (phía đông).",
        "origin": "transcribed",
        "solution": {
          "completed": "モスクワはロシアの東（ひがし）です。",
          "meaning": "Câu kiểm tra âm đọc chữ 東 (ひがし: phía đông). (Ghi chú: thực tế địa lý Moscow ở phía tây Nga.)",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "にし là cách đọc của 西 (phía tây), không phải 東.",
            "きた là cách đọc của 北 (phía bắc).",
            "みなみ là cách đọc của 南 (phía nam).",
            "Chữ Hán 東 (Đông) có cách đọc Kun-yomi là ひがし (phía đông)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=67",
        "id": "fe-su26-b5re-3-03"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n私は おおさかから【きました】。",
        "options": [
          "聞ました",
          "読ました",
          "来ました",
          "行ました"
        ],
        "answer": 2,
        "explanation": "来ました là quá khứ của 来ます (đến), chữ 来 đọc き trong dạng lịch sự.",
        "origin": "transcribed",
        "solution": {
          "completed": "私はおおさかから来ました（きました）。",
          "meaning": "Tôi đến từ Osaka.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "聞ました dùng chữ 聞 (nghe/hỏi) và thiếu okurigana き.",
            "読ました dùng chữ 読 (đọc) và thiếu okurigana み.",
            "来ました là quá khứ của 来ます (đến), chữ 来 đọc き trong dạng lịch sự.",
            "行ました dùng chữ 行 (đi) và còn thiếu okurigana き."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=68",
        "id": "fe-su26-b5re-3-04"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n来年、くにへ【かえります】。",
        "options": [
          "語ります",
          "帰ります",
          "話ります",
          "尋ります"
        ],
        "answer": 1,
        "explanation": "帰ります (Qui) đọc かえります, nghĩa là trở về (nhà, quê hương, đất nước).",
        "origin": "transcribed",
        "solution": {
          "completed": "来年、くにへ帰ります（かえります）。",
          "meaning": "Sang năm tôi sẽ về nước.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "語ります ghép sai chữ 語 (kể/ngôn ngữ: かたります).",
            "帰ります (Qui) đọc かえります, nghĩa là trở về (nhà, quê hương, đất nước).",
            "話ります ghép sai chữ 話 (nói chuyện: はなします).",
            "尋ります ghép sai chữ 尋 (hỏi thăm: たずねます)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=69",
        "id": "fe-su26-b5re-3-05"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n【ことし】さくらまつりが あります。",
        "options": [
          "今年",
          "来年",
          "令年",
          "今缶"
        ],
        "answer": 0,
        "explanation": "今年 (Kim Niên) đọc là ことし (năm nay), theo mục từ Bài 5 Dekiru.",
        "origin": "transcribed",
        "solution": {
          "completed": "今年（ことし）さくらまつりがあります。",
          "meaning": "Năm nay có lễ hội hoa anh đào.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "今年 (Kim Niên) đọc là ことし (năm nay), theo mục từ Bài 5 Dekiru.",
            "来年 đọc らいねん (năm sau), sai chữ đầu 来.",
            "令年 sai chữ đầu: dùng 令 (Lệnh) thay vì 今 (Kim).",
            "今缶 sai chữ thứ hai: dùng 缶 (hộp thiếc) thay vì 年 (năm)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=70",
        "id": "fe-su26-b5re-3-06"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Hãy chọn dạng quá khứ của từ dưới đây:\n「やすみ」",
        "options": [
          "やすみじゃありません",
          "やすみかった",
          "やすみです",
          "やすみでした"
        ],
        "answer": 3,
        "explanation": "やすみ (ngày nghỉ) là danh từ nên chia quá khứ khẳng định bằng でした → やすみでした.",
        "origin": "transcribed",
        "solution": {
          "completed": "やすみでした。",
          "meaning": "Đã là ngày nghỉ.",
          "rule": "Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.",
          "options": [
            "やすみじゃありません là dạng phủ định hiện tại, không phải quá khứ.",
            "やすみかった chia nhầm theo quy tắc tính từ đuôi い.",
            "やすみです là dạng khẳng định hiện tại, chưa chuyển sang quá khứ.",
            "やすみ (ngày nghỉ) là danh từ nên chia quá khứ khẳng định bằng でした → やすみでした."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=71",
        "id": "fe-su26-b5re-3-07"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "Hãy chọn dạng phủ định hiện tại của từ dưới đây:\n「にぎやか」",
        "options": [
          "にぎやかかった",
          "にぎやかでした",
          "にぎやかじゃありません",
          "にぎやかではありませんでした"
        ],
        "answer": 2,
        "explanation": "にぎやか là tính từ đuôi な nên phủ định hiện tại là にぎやかじゃありません (hoặc ではありません).",
        "origin": "transcribed",
        "solution": {
          "completed": "にぎやかじゃありません（ではありません）。",
          "meaning": "Không náo nhiệt / không đông đúc.",
          "rule": "Phủ định hiện tại: tính từ đuôi い đổi い → くないです (ngoại lệ いい → よくないです); tính từ đuôi な và danh từ dùng じゃありません／ではありません (không chia くない).",
          "options": [
            "にぎやかかった chia nhầm theo kiểu tính từ đuôi い.",
            "にぎやかでした là dạng khẳng định quá khứ, không phải phủ định.",
            "にぎやか là tính từ đuôi な nên phủ định hiện tại là にぎやかじゃありません (hoặc ではありません).",
            "にぎやかではありませんでした là phủ định quá khứ, không phải phủ định hiện tại."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=72",
        "id": "fe-su26-b5re-3-08"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nやさいを（　　）ください。",
        "options": [
          "きいて",
          "きって",
          "きりて",
          "きり"
        ],
        "answer": 1,
        "explanation": "切ります (きる: cắt) là động từ nhóm 1 ngoại lệ đuôi る → thể て là きって + ください.",
        "origin": "transcribed",
        "solution": {
          "completed": "やさいをきってください。",
          "meaning": "Xin hãy thái/cắt rau.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "きいて là thể て của 聞きます (nghe/hỏi), không đi với やさいを.",
            "切ります (きる: cắt) là động từ nhóm 1 ngoại lệ đuôi る → thể て là きって + ください.",
            "きりて không biến âm sang っ, sai quy tắc chia thể て của nhóm 1.",
            "きり là thể bỏ ます, không đứng trực tiếp trước ください."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=73",
        "id": "fe-su26-b5re-3-09"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Sắp xếp các từ gợi ý sau thành câu hoàn chỉnh:\nさむい / とても / 1月 / 私 / まち / です",
        "options": [
          "私の まちは 1月 とても さむいです。",
          "私は 1月 まち とても さむいです。",
          "まちは 私の 1月 さむい とても です。",
          "とても さむい 私の まちは 1月です。"
        ],
        "answer": 0,
        "explanation": "Chủ đề 私のまちは đứng đầu, tiếp theo là mốc thời gian 1月 và vị ngữ とてもさむいです.",
        "origin": "transcribed",
        "solution": {
          "completed": "私のまちは1月とてもさむいです。",
          "meaning": "Thành phố của tôi vào tháng 1 rất lạnh.",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "Chủ đề 私のまちは đứng đầu, tiếp theo là mốc thời gian 1月 và vị ngữ とてもさむいです.",
            "Thiếu trợ từ の nối 私 và まち, đồng thời sai chủ đề 私は.",
            "Đặt sai vị trí 私の trước 1月 và đặt phó từ とても sau tính từ さむい.",
            "Đảo ngược chủ ngữ và vị ngữ thành \"Thành phố rất lạnh của tôi là tháng 1\", sai nghĩa."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=74",
        "id": "fe-su26-b5re-3-10"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nペン（　　）なまえを かいてください。",
        "options": [
          "と",
          "は",
          "が",
          "で"
        ],
        "answer": 3,
        "explanation": "Trợ từ で đứng sau dụng cụ/phương tiện thực hiện hành động (ペンで: bằng bút). (Đã chuẩn hóa lỗi gõ かいてくだい trong ảnh gốc.)",
        "origin": "transcribed",
        "solution": {
          "completed": "ペンでなまえをかいてください。",
          "meaning": "Xin hãy viết tên bằng bút mực.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "と chỉ người cùng thực hiện hoặc liệt kê, không chỉ dụng cụ viết.",
            "は đánh dấu chủ đề, không chỉ công cụ làm hành động.",
            "が đánh dấu chủ thể, không dùng cho dụng cụ ペン.",
            "Trợ từ で đứng sau dụng cụ/phương tiện thực hiện hành động (ペンで: bằng bút). (Đã chuẩn hóa lỗi gõ かいてくだい trong ảnh gốc.)"
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=75",
        "id": "fe-su26-b5re-3-11"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nけさ、10時に おきましたから、（　　）。",
        "options": [
          "けさ、どこへも 行きません",
          "こんばん、うちで べんきょうします",
          "あさごはんを 食べませんでした",
          "国（くに）へ かえりません"
        ],
        "answer": 2,
        "explanation": "Nguyên nhân sáng nay ngủ dậy muộn (quá khứ) dẫn tới kết quả hợp lý ở quá khứ: đã không ăn sáng.",
        "origin": "transcribed",
        "solution": {
          "completed": "けさ、10時におきましたから、あさごはんを食べませんでした。",
          "meaning": "Sáng nay vì dậy lúc 10 giờ nên tôi đã không ăn sáng.",
          "rule": "Hỏi lý do dùng どうして…ですか／ましたか; trả lời nêu nguyên nhân dùng [Lý do] から (đặt cuối câu đáp hoặc nối 2 vế [Nguyên nhân]から、[Kết quả]). Chú ý đồng nhất thì giữa hai vế.",
          "options": [
            "けさ、どこへも行きません lặp thừa けさ và chia sai thì hiện tại.",
            "こんばん、うちでべんきょうします không liên quan nhân quả với việc dậy muộn sáng nay.",
            "Nguyên nhân sáng nay ngủ dậy muộn (quá khứ) dẫn tới kết quả hợp lý ở quá khứ: đã không ăn sáng.",
            "国へかえりません không có quan hệ nhân quả với việc sáng nay dậy lúc 10 giờ và sai thì."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=76",
        "id": "fe-su26-b5re-3-12"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g5-with",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n山田（やまだ）さんは、いま、先生（　　）はなしています。",
        "options": [
          "も",
          "と",
          "で",
          "が"
        ],
        "answer": 1,
        "explanation": "Người cùng giao tiếp/thực hiện hành động đi với trợ từ と: 先生とはなしています.",
        "origin": "transcribed",
        "solution": {
          "completed": "山田さんは、いま、先生とはなしています。",
          "meaning": "Anh Yamada bây giờ đang nói chuyện với thầy/cô giáo.",
          "rule": "Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.",
          "options": [
            "も nghĩa là \"cũng\", không thể hiện quan hệ nói chuyện cùng với thầy/cô.",
            "Người cùng giao tiếp/thực hiện hành động đi với trợ từ と: 先生とはなしています.",
            "で chỉ địa điểm hoặc công cụ, không dùng cho đối tượng cùng nói chuyện.",
            "が đánh dấu chủ ngữ; chủ ngữ đã là 山田さんは nên không dùng 先生が ở đây."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=77",
        "id": "fe-su26-b5re-3-13"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあついですから、まどを（　　）。",
        "options": [
          "あけてください",
          "あらってください",
          "とってください",
          "かしてください"
        ],
        "answer": 0,
        "explanation": "Trời nóng → mở cửa sổ: まどをあけます (nhóm 2) chia yêu cầu là あけてください.",
        "origin": "transcribed",
        "solution": {
          "completed": "あついですから、まどをあけてください。",
          "meaning": "Vì trời nóng nên xin hãy mở cửa sổ.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "Trời nóng → mở cửa sổ: まどをあけます (nhóm 2) chia yêu cầu là あけてください.",
            "あらってください là \"hãy rửa\", không hợp logic với lý do trời nóng (đã chuẩn hóa lỗi thiếu っ từ đề gốc).",
            "とってください là \"hãy lấy/chụp\", không đi với cửa sổ khi trời nóng.",
            "かしてください là \"hãy cho mượn\", không dùng với cửa sổ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=78",
        "id": "fe-su26-b5re-3-14"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: マルコさん、やさいを（　　）。\nB: はい、わかりました。",
        "options": [
          "あらいますか",
          "あらいませんか",
          "あらいましたか",
          "あらってください"
        ],
        "answer": 3,
        "explanation": "Lời đáp はい、わかりました (vâng, tôi rõ rồi) là phản hồi tự nhiên cho mẫu yêu cầu/nhờ vả lịch sự Vてください.",
        "origin": "transcribed",
        "solution": {
          "completed": "A: マルコさん、やさいをあらってください。B: はい、わかりました。",
          "meaning": "A: Marco ơi, hãy rửa rau giúp nhé. — B: Vâng, tôi hiểu rồi.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "あらいますか chỉ là câu hỏi xác nhận (có rửa không), không dùng mẫu nhờ vả khớp với わかりました.",
            "あらいませんか là câu rủ cùng rửa, thường đáp bằng いいですね／ええ、あらいましょう.",
            "あらいましたか hỏi việc đã làm trong quá khứ, không khớp lời nhận việc わかりました.",
            "Lời đáp はい、わかりました (vâng, tôi rõ rồi) là phản hồi tự nhiên cho mẫu yêu cầu/nhờ vả lịch sự Vてください."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=79",
        "id": "fe-su26-b5re-3-15"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n私は あたらしい カメラ（　　）ほしいです。",
        "options": [
          "に",
          "で",
          "が",
          "を"
        ],
        "answer": 2,
        "explanation": "Mẫu mong muốn đồ vật Nがほしいです dùng trợ từ が trước ほしい.",
        "origin": "transcribed",
        "solution": {
          "completed": "私はあたらしいカメラがほしいです。",
          "meaning": "Tôi muốn có một chiếc máy ảnh mới.",
          "rule": "Diễn tả mong muốn có một đồ vật/danh từ dùng N が ほしいです (phủ định: ほしくないです; không muốn gì cả: なにもほしくないです). Trợ từ đánh dấu đối tượng mong muốn là が.",
          "options": [
            "に chỉ đích/nơi tồn tại, sai cấu trúc của ほしい.",
            "で chỉ phương tiện/địa điểm hành động, không đi với ほしい.",
            "Mẫu mong muốn đồ vật Nがほしいです dùng trợ từ が trước ほしい.",
            "を dùng cho tân ngữ của ngoại động từ, không dùng với tính từ ほしい."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=80",
        "id": "fe-su26-b5re-3-16"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きのう、なにを しましたか。\nB: ともだちの いえへ 行きました。（　　）、ゲームを しました。",
        "options": [
          "いまから",
          "それから",
          "すみません",
          "またこんど"
        ],
        "answer": 1,
        "explanation": "Liên từ それから (sau đó) nối hai hành động xảy ra nối tiếp theo trình tự thời gian.",
        "origin": "transcribed",
        "solution": {
          "completed": "B: ともだちのいえへ行きました。それから、ゲームをしました。",
          "meaning": "A: Hôm qua bạn đã làm gì? — B: Tôi đến nhà bạn. Sau đó chúng tôi chơi game.",
          "rule": "Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.",
          "options": [
            "いまから nghĩa là \"từ bây giờ\", mâu thuẫn với mốc quá khứ きのう.",
            "Liên từ それから (sau đó) nối hai hành động xảy ra nối tiếp theo trình tự thời gian.",
            "すみません là lời xin lỗi/gọi chú ý, không dùng nối chuỗi hành động.",
            "またこんど nghĩa là \"hẹn lần sau nhé\", sai hoàn toàn với ngữ cảnh kể chuyện quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=81",
        "id": "fe-su26-b5re-3-17"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きのうの パーティーは たのしかったですか。\nB: いいえ、（　　）です。",
        "options": [
          "たのしくなかった",
          "たのしくない",
          "たのしい",
          "たのしかった"
        ],
        "answer": 0,
        "explanation": "Đáp lại câu hỏi quá khứ tính từ い bằng いいえ nên dùng quá khứ phủ định: たのしくなかった (+ です).",
        "origin": "transcribed",
        "solution": {
          "completed": "B: いいえ、たのしくなかったです。",
          "meaning": "A: Bữa tiệc hôm qua có vui không? — B: Không, đã không vui.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "Đáp lại câu hỏi quá khứ tính từ い bằng いいえ nên dùng quá khứ phủ định: たのしくなかった (+ です).",
            "たのしくない là phủ định hiện tại, lệch thì quá khứ của きのう.",
            "たのしい là khẳng định hiện tại, mâu thuẫn cả với いいえ lẫn きのう.",
            "たのしかった là khẳng định quá khứ, trái với いいえ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=82",
        "id": "fe-su26-b5re-3-18"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこの こうえんは あまり（　　）。",
        "options": [
          "きれいです",
          "きれくないです",
          "きれじゃありません",
          "きれいじゃありません"
        ],
        "answer": 3,
        "explanation": "あまり đi với phủ định; きれい là tính từ đuôi な (nhưng giữ nguyên âm い trong gốc từ) → きれいじゃありません.",
        "origin": "transcribed",
        "solution": {
          "completed": "このこうえんはあまりきれいじゃありません。",
          "meaning": "Công viên này không đẹp lắm.",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "きれいです là khẳng định, không đi được với phó từ あまり.",
            "きれくないです chia sai vì nhầm きれい là tính từ đuôi い.",
            "きれじゃありません cắt mất chữ い thuộc gốc từ きれい.",
            "あまり đi với phủ định; きれい là tính từ đuôi な (nhưng giữ nguyên âm い trong gốc từ) → きれいじゃありません."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=83",
        "id": "fe-su26-b5re-3-19"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）へ ほんを かりに 行きます。",
        "options": [
          "デパート",
          "きっさてん",
          "としょかん",
          "レストラン"
        ],
        "answer": 2,
        "explanation": "Nơi để mượn sách (ほんをかりる) là としょかん (thư viện).",
        "origin": "transcribed",
        "solution": {
          "completed": "としょかんへほんをかりに行きます。",
          "meaning": "Tôi đi đến thư viện để mượn sách.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "デパート là trung tâm thương mại (mua hàng, không phải mượn sách).",
            "きっさてん là quán cà phê, không phải nơi mượn sách.",
            "Nơi để mượn sách (ほんをかりる) là としょかん (thư viện).",
            "レストラン là nhà hàng ăn uống, không phải nơi mượn sách."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=84",
        "id": "fe-su26-b5re-3-20"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n肉が きらいですから、（　　）。",
        "options": [
          "こんばん、うちで べんきょうします",
          "食べません",
          "国（くに）へ かえりません",
          "どこへも 行きませんでした"
        ],
        "answer": 1,
        "explanation": "Mệnh đề nguyên nhân 肉がきらいですから (vì ghét thịt) dẫn tự nhiên đến kết quả 食べません (không ăn).",
        "origin": "transcribed",
        "solution": {
          "completed": "肉がきらいですから、食べません。",
          "meaning": "Vì tôi ghét thịt nên tôi không ăn.",
          "rule": "Nói thích hoặc ghét một đối tượng dùng N が 好きです／嫌いです. 好き và 嫌い đều là tính từ đuôi な nên phủ định là 好きじゃありません và bổ nghĩa danh từ cần な.",
          "options": [
            "こんばん、うちでべんきょうします không có quan hệ nhân quả với 肉がきらい.",
            "Mệnh đề nguyên nhân 肉がきらいですから (vì ghét thịt) dẫn tự nhiên đến kết quả 食べません (không ăn).",
            "国へかえりません (không về nước) không liên quan đến việc ghét thịt.",
            "どこへも行きませんでした vừa lệch nghĩa vừa ở thì quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=85",
        "id": "fe-su26-b5re-3-21"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nケーキは（　　）です。",
        "options": [
          "あまい",
          "からい",
          "にがい",
          "ひくい"
        ],
        "answer": 0,
        "explanation": "あまい (ngọt) là tính từ vị giác đặc trưng của ケーキ (bánh ngọt).",
        "origin": "transcribed",
        "solution": {
          "completed": "ケーキはあまいです。",
          "meaning": "Bánh ngọt thì ngọt.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "あまい (ngọt) là tính từ vị giác đặc trưng của ケーキ (bánh ngọt).",
            "からい là cay, không phải vị đặc trưng của bánh ngọt.",
            "にがい là đắng, không hợp với ケーキ.",
            "ひくい là thấp (độ cao), không phải tính từ vị giác."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=86",
        "id": "fe-su26-b5re-3-22"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nおかねが ありませんから、ともだちに おかねを（　　）。",
        "options": [
          "かしました",
          "あそびました",
          "のみました",
          "かりました"
        ],
        "answer": 3,
        "explanation": "Người nói không có tiền nên hành động hướng tới bạn (ともだちに) là かりました (đã mượn).",
        "origin": "transcribed",
        "solution": {
          "completed": "おかねがありませんから、ともだちにおかねをかりました。",
          "meaning": "Vì không có tiền nên tôi đã mượn tiền từ bạn.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "かしました là cho mượn, ngược hẳn nghĩa khi bản thân đang không có tiền.",
            "あそびました là chơi, không nhận tân ngữ おかねを.",
            "のみました là uống, vô nghĩa với おかねを.",
            "Người nói không có tiền nên hành động hướng tới bạn (ともだちに) là かりました (đã mượn)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=87",
        "id": "fe-su26-b5re-3-23"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn từ KHÁC LOẠI trong các từ sau:\n①すっぱい / ②ふるい / ③にがい / ④からい",
        "options": [
          "にがい",
          "からい",
          "ふるい",
          "すっぱい"
        ],
        "answer": 2,
        "explanation": "Ba từ すっぱい (chua), にがい (đắng), からい (cay) cùng chỉ vị giác; ふるい (cũ) chỉ trạng thái thời gian.",
        "origin": "transcribed",
        "solution": {
          "completed": "ふるい（cũ）khác nhóm vị giác (すっぱい・にがい・からい).",
          "meaning": "ふるい (cũ) không thuộc nhóm tính từ chỉ vị giác.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "にがい (đắng) thuộc nhóm tính từ vị giác.",
            "からい (cay) thuộc nhóm tính từ vị giác.",
            "Ba từ すっぱい (chua), にがい (đắng), からい (cay) cùng chỉ vị giác; ふるい (cũ) chỉ trạng thái thời gian.",
            "すっぱい (chua) thuộc nhóm tính từ vị giác cùng với にがい và からい."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=88",
        "id": "fe-su26-b5re-3-24"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nおんせんは（　　）です。",
        "options": [
          "たいへん",
          "きもちが いい",
          "むずかしい",
          "かんたん"
        ],
        "answer": 1,
        "explanation": "きもちがいい (dễ chịu, sảng khoái) miêu tả chính xác cảm giác khi ngâm suối nước nóng.",
        "origin": "transcribed",
        "solution": {
          "completed": "おんせんはきもちがいいです。",
          "meaning": "Suối nước nóng rất dễ chịu.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "たいへん (vất vả) trái với cảm giác thư giãn ở suối nước nóng.",
            "きもちがいい (dễ chịu, sảng khoái) miêu tả chính xác cảm giác khi ngâm suối nước nóng.",
            "むずかしい (khó) không phù hợp để miêu tả suối nước nóng.",
            "かんたん (đơn giản) không đúng sắc thái khi nói về おんせん."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=89",
        "id": "fe-su26-b5re-3-25"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n私の くには 1月、とても さむいです。パクさんの くには（　　）。",
        "options": [
          "どうですか",
          "どんなですか",
          "なんですか",
          "だれですか"
        ],
        "answer": 0,
        "explanation": "Hỏi cảm nhận/tình trạng chung về một đối tượng mà không có danh từ theo sau dùng どうですか.",
        "origin": "transcribed",
        "solution": {
          "completed": "パクさんのくにはどうですか。",
          "meaning": "Nước tôi tháng 1 rất lạnh. Còn nước của anh Park thì thế nào?",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "Hỏi cảm nhận/tình trạng chung về một đối tượng mà không có danh từ theo sau dùng どうですか.",
            "どんなですか sai ngữ pháp sơ cấp vì どんな phải đứng trước một danh từ (どんな国ですか).",
            "なんですか hỏi \"là cái gì\", không dùng để hỏi thời tiết/tình hình nước bạn thế nào.",
            "だれですか dùng để hỏi người (\"là ai\"), sai hoàn toàn."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=90",
        "id": "fe-su26-b5re-3-26"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn từ KHÔNG CÙNG NHÓM 音楽（おんがく） trong các từ sau:\n①コンサート / ②かしゅ / ③おんせん / ④カラオケ",
        "options": [
          "コンサート",
          "かしゅ",
          "カラオケ",
          "おんせん"
        ],
        "answer": 3,
        "explanation": "コンサート (hòa nhạc), かしゅ (ca sĩ), カラオケ (karaoke) đều thuộc chủ đề âm nhạc; おんせん là suối nước nóng.",
        "origin": "transcribed",
        "solution": {
          "completed": "おんせん（suối nước nóng）không thuộc nhóm 音楽（âm nhạc）.",
          "meaning": "Suối nước nóng (おんせん) không cùng chủ đề âm nhạc với 3 từ còn lại.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "コンサート (buổi hòa nhạc) thuộc chủ đề âm nhạc.",
            "かしゅ (ca sĩ) thuộc chủ đề âm nhạc.",
            "カラオケ (karaoke) thuộc chủ đề âm nhạc.",
            "コンサート (hòa nhạc), かしゅ (ca sĩ), カラオケ (karaoke) đều thuộc chủ đề âm nhạc; おんせん là suối nước nóng."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=91",
        "id": "fe-su26-b5re-3-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Đọc đoạn văn [PN=6] và chọn từ thích hợp điền vào ＿＿①＿＿:\nてんきが　＿＿①＿＿から、どこへも　行きませんでした。",
        "options": [
          "いいです",
          "よかったです",
          "よくなかったです",
          "よくない"
        ],
        "answer": 2,
        "explanation": "Ngữ cảnh ngày hôm qua (きのう) và kết quả どこへも行きませんでした đòi hỏi quá khứ phủ định của いい → よくなかったです.",
        "origin": "transcribed",
        "solution": {
          "completed": "てんきがよくなかったですから、どこへも行きませんでした。",
          "meaning": "Vì thời tiết đã không đẹp nên tôi đã không đi đâu cả.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "いいです là khẳng định hiện tại, ngược logic với việc không đi đâu cả.",
            "よかったです là khẳng định quá khứ, trái với kết quả ở nhà không đi đâu.",
            "Ngữ cảnh ngày hôm qua (きのう) và kết quả どこへも行きませんでした đòi hỏi quá khứ phủ định của いい → よくなかったです.",
            "よくない là thể ngắn hiện tại, vừa thiếu です vừa lệch thì quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=92",
        "passageId": "fe-su26-pn6",
        "passageTitle": "Bài đọc · PN=6 (Đề 3 B5 RE)",
        "passage": "きのう、私は11時に　起（お）きました。コンビニで　ひるごはんを　買いました。てんきが　＿＿①＿＿から、どこへも　行きませんでした。午後、ルームメートと　DVDを　＿＿②＿＿。あまり　＿＿③＿＿。9時から10時まで　日本語を　＿＿④＿＿。それから、2時間くらい　ゲームを　しました。",
        "id": "fe-su26-b5re-3-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [PN=6] và chọn từ thích hợp điền vào ＿＿②＿＿:\n午後、ルームメートと　DVDを　＿＿②＿＿。",
        "options": [
          "聞きます",
          "見ました",
          "聞きました",
          "見ます"
        ],
        "answer": 1,
        "explanation": "DVD đi với động từ 見ます (xem) và kể chuyện ngày hôm qua nên chia quá khứ 見ました.",
        "origin": "transcribed",
        "solution": {
          "completed": "午後、ルームメートとDVDを見ました。",
          "meaning": "Buổi chiều tôi đã xem DVD cùng bạn cùng phòng.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "聞きます vừa sai động từ vừa sai thì quá khứ.",
            "DVD đi với động từ 見ます (xem) và kể chuyện ngày hôm qua nên chia quá khứ 見ました.",
            "聞きました nghĩa là nghe (nhạc/CD), không dùng với DVD.",
            "見ます đúng động từ nhưng chia hiện tại/tương lai, sai thì quá khứ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=93",
        "passageId": "fe-su26-pn6",
        "passageTitle": "Bài đọc · PN=6 (Đề 3 B5 RE)",
        "passage": "きのう、私は11時に　起（お）きました。コンビニで　ひるごはんを　買いました。てんきが　＿＿①＿＿から、どこへも　行きませんでした。午後、ルームメートと　DVDを　＿＿②＿＿。あまり　＿＿③＿＿。9時から10時まで　日本語を　＿＿④＿＿。それから、2時間くらい　ゲームを　しました。",
        "id": "fe-su26-b5re-3-29"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Đọc đoạn văn [PN=6] và chọn từ thích hợp điền vào ＿＿③＿＿:\nあまり　＿＿③＿＿。",
        "options": [
          "おもしろくなかったです",
          "おもしろいです",
          "おもしろかったです",
          "おもしろくないです"
        ],
        "answer": 0,
        "explanation": "あまり đi với phủ định và nối tiếp mạch kể chuyện hôm qua (DVDを見ました) → おもしろくなかったです.",
        "origin": "transcribed",
        "solution": {
          "completed": "あまりおもしろくなかったです。",
          "meaning": "Bộ đĩa đó đã không thú vị lắm.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "あまり đi với phủ định và nối tiếp mạch kể chuyện hôm qua (DVDを見ました) → おもしろくなかったです.",
            "おもしろいです là khẳng định hiện tại, sai cả với あまり lẫn thì quá khứ.",
            "おもしろかったです là khẳng định quá khứ, không đi được với あまり.",
            "おもしろくないです là phủ định hiện tại, không khớp thì quá khứ của đoạn văn."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=94",
        "passageId": "fe-su26-pn6",
        "passageTitle": "Bài đọc · PN=6 (Đề 3 B5 RE)",
        "passage": "きのう、私は11時に　起（お）きました。コンビニで　ひるごはんを　買いました。てんきが　＿＿①＿＿から、どこへも　行きませんでした。午後、ルームメートと　DVDを　＿＿②＿＿。あまり　＿＿③＿＿。9時から10時まで　日本語を　＿＿④＿＿。それから、2時間くらい　ゲームを　しました。",
        "id": "fe-su26-b5re-3-30"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [PN=6] và chọn từ thích hợp điền vào ＿＿④＿＿:\n9時から10時まで　日本語を　＿＿④＿＿。",
        "options": [
          "とりました",
          "かりました",
          "はいりました",
          "べんきょうしました"
        ],
        "answer": 3,
        "explanation": "日本語を đi tự nhiên nhất với động từ べんきょうしました (đã học tiếng Nhật) trong khung giờ 9–10 giờ.",
        "origin": "transcribed",
        "solution": {
          "completed": "9時から10時まで日本語をべんきょうしました。",
          "meaning": "Từ 9 giờ đến 10 giờ tôi đã học tiếng Nhật.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "とりました (chụp/lấy) không đi với 日本語を.",
            "かりました (mượn) dùng cho đồ vật/sách vở, không dùng với ngôn ngữ 日本語を.",
            "はいりました (vào) là tự động từ đi với に, không nhận tân ngữ 日本語を.",
            "日本語を đi tự nhiên nhất với động từ べんきょうしました (đã học tiếng Nhật) trong khung giờ 9–10 giờ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf#page=95",
        "passageId": "fe-su26-pn6",
        "passageTitle": "Bài đọc · PN=6 (Đề 3 B5 RE)",
        "passage": "きのう、私は11時に　起（お）きました。コンビニで　ひるごはんを　買いました。てんきが　＿＿①＿＿から、どこへも　行きませんでした。午後、ルームメートと　DVDを　＿＿②＿＿。あまり　＿＿③＿＿。9時から10時まで　日本語を　＿＿④＿＿。それから、2時間くらい　ゲームを　しました。",
        "id": "fe-su26-b5re-3-31"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-mock-1",
    "title": "Đề luyện FE · Đề 01",
    "description": "Biên soạn mới theo đúng ma trận đề thi thật FE JPD123 (30 câu: 3 đọc Hán tự, 3 viết Hán tự, 11 ngữ pháp, 4 hội thoại, 6 từ vựng, 3 đọc hiểu đoạn văn). Chủ đề: Cuối tuần ở Kyoto & hẹn xem bóng đá (phủ Bài 4–7 và Kanji mở rộng).",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-authored",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nあしたは【日曜日】ですから、ゆっくりやすみます。",
        "options": [
          "にちようび",
          "ひようび",
          "にじょうび",
          "にちよび"
        ],
        "answer": 0,
        "explanation": "日曜日 (Chủ nhật) đọc đầy đủ là にちようび (có trường âm う ở よう).",
        "origin": "authored",
        "solution": {
          "completed": "あしたは日曜日（にちようび）ですから、ゆっくりやすみます。",
          "meaning": "Vì ngày mai là Chủ nhật nên tôi sẽ nghỉ ngơi thong thả.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "日曜日 (Chủ nhật) đọc đầy đủ là にちようび (có trường âm う ở よう).",
            "ひようび đọc nhầm chữ 日 đầu thành âm Kun ひ.",
            "にじょうび đọc sai âm đục và lược mất ち ở にち.",
            "にちよび thiếu trường âm う ở よう."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-1-01"
      },
      {
        "category": "reading",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nきのうの【天気】はとてもよかったです。",
        "options": [
          "でんき",
          "てんぎ",
          "てんけ",
          "てんき"
        ],
        "answer": 3,
        "explanation": "天気 (Thiên Khí: thời tiết) đọc là てんき (không có âm đục).",
        "origin": "authored",
        "solution": {
          "completed": "きのうの天気（てんき）はとてもよかったです。",
          "meaning": "Thời tiết hôm qua rất đẹp.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "でんき là 電気 (điện, đèn điện), khác hẳn 天気.",
            "てんぎ sai âm đục ぎ ở chữ 気.",
            "てんけ đọc sai nguyên âm chữ 気 thành け.",
            "天気 (Thiên Khí: thời tiết) đọc là てんき (không có âm đục)."
          ]
        },
        "source": "sources/new-words.pdf#page=14",
        "id": "fe-mock-1-02"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【今月】、友だちとコンサートへ行きます。",
        "options": [
          "いまつき",
          "こげつ",
          "こんげつ",
          "こんがつ"
        ],
        "answer": 2,
        "explanation": "今月 (Kim Nguyệt: tháng này) đọc theo âm On là こんげつ.",
        "origin": "authored",
        "solution": {
          "completed": "今月（こんげつ）、友だちとコンサートへ行きます。",
          "meaning": "Tháng này tôi sẽ đi xem hòa nhạc cùng bạn.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "いまつき ghép âm Kun từng chữ, không phải cách đọc chuẩn của 今月.",
            "こげつ thiếu âm mũi ん của chữ 今 (こん).",
            "今月 (Kim Nguyệt: tháng này) đọc theo âm On là こんげつ.",
            "こんがつ đọc sai chữ 月 thành がつ (がつ chỉ dùng cho tháng 1–12)."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-1-03"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nホーチミン市はベトナムの【みなみ】にあります。",
        "options": [
          "東",
          "南",
          "北",
          "西"
        ],
        "answer": 1,
        "explanation": "南 (Nam) đọc là みなみ (phía nam), từ vựng phương hướng Bài 4.",
        "origin": "authored",
        "solution": {
          "completed": "ホーチミン市はベトナムの南（みなみ）にあります。",
          "meaning": "Thành phố Hồ Chí Minh nằm ở phía nam Việt Nam.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "東 đọc là ひがし (phía đông).",
            "南 (Nam) đọc là みなみ (phía nam), từ vựng phương hướng Bài 4.",
            "北 đọc là きた (phía bắc), ngược hướng với 南.",
            "西 đọc là にし (phía tây), không phải みなみ."
          ]
        },
        "source": "sources/new-words.pdf#page=12",
        "id": "fe-mock-1-04"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nしゅうまつ、デパートで【かいもの】をしました。",
        "options": [
          "買い物",
          "売物",
          "買者",
          "貝物"
        ],
        "answer": 0,
        "explanation": "買い物 (Mãi Vật) đọc かいもの, nghĩa là mua sắm; chữ 買 có 罒 phía trên chữ 貝.",
        "origin": "authored",
        "solution": {
          "completed": "しゅうまつ、デパートで買物・買い物（かいもの）をしました。",
          "meaning": "Cuối tuần tôi đã đi mua sắm ở trung tâm thương mại.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "買い物 (Mãi Vật) đọc かいもの, nghĩa là mua sắm; chữ 買 có 罒 phía trên chữ 貝.",
            "売物 dùng chữ 売 (bán: うる), ngược nghĩa với 買 (mua).",
            "買者 sai chữ thứ hai: 者 dùng cho người, không dùng thay 物 (đồ vật).",
            "貝物 thiếu phần trên 罒 của chữ 買, thành chữ 貝 (vỏ sò)."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-1-05"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nここに日本の【たべもの】がたくさんあります。",
        "options": [
          "飲み物",
          "食者",
          "良べ物",
          "食べ物"
        ],
        "answer": 3,
        "explanation": "食べ物 (Thực Vật) đọc たべもの (đồ ăn, thức ăn), gồm 食 + べ + 物.",
        "origin": "authored",
        "solution": {
          "completed": "ここに日本の食べ物（たべもの）がたくさんあります。",
          "meaning": "Ở đây có rất nhiều đồ ăn Nhật Bản.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "飲み物 đọc のみもの (đồ uống), không phải たべもの.",
            "食者 thiếu okurigana べ và sai chữ sau 者 thay vì 物.",
            "良べ物 dùng nhầm chữ 良 (tốt) thay vì chữ 食 (ăn).",
            "食べ物 (Thực Vật) đọc たべもの (đồ ăn, thức ăn), gồm 食 + べ + 物."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-1-06"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nうちから学校まで、じてんしゃ（　　）15分くらいです。",
        "options": [
          "を",
          "と",
          "で",
          "に"
        ],
        "answer": 2,
        "explanation": "Trợ từ で đứng sau phương tiện di chuyển (じてんしゃで: bằng xe đạp).",
        "origin": "authored",
        "solution": {
          "completed": "うちから学校まで、じてんしゃで15分くらいです。",
          "meaning": "Từ nhà đến trường đi bằng xe đạp mất khoảng 15 phút.",
          "rule": "Hỏi khoảng thời gian di chuyển dùng AからBまで どのくらいですか (trong tiếng Nhật thực tế どれくらい cũng chuẩn). Trả lời phương tiện dùng で (riêng đi bộ là 歩いて), thời lượng dùng 時間／分くらいです.",
          "options": [
            "を đánh dấu tân ngữ trực tiếp, không dùng chỉ phương tiện.",
            "と chỉ người đi cùng hoặc liệt kê danh từ, không chỉ phương tiện.",
            "Trợ từ で đứng sau phương tiện di chuyển (じてんしゃで: bằng xe đạp).",
            "に không dùng sau phương tiện đi lại như xe đạp/tàu điện."
          ]
        },
        "source": "sources/speaking.pdf#page=26",
        "id": "fe-mock-1-07"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nナチャンは（　　）うみが有名な町です。",
        "options": [
          "きれいだ",
          "きれいな",
          "きれい",
          "きれいの"
        ],
        "answer": 1,
        "explanation": "きれい là tính từ đuôi な nên đứng trước danh từ うみ bắt buộc có な → きれいなうみ.",
        "origin": "authored",
        "solution": {
          "completed": "ナチャンはきれいなうみが有名な町です。",
          "meaning": "Nha Trang là thành phố nổi tiếng với bãi biển đẹp.",
          "rule": "Bổ nghĩa danh từ: tính từ い + N (古い町), tính từ な + な + N (きれいなところ). Hỏi đặc điểm của danh từ dùng どんな + N ですか; tránh bỏ thiếu な sau tính từ đuôi な như きれい.",
          "options": [
            "きれいだ là thể khẳng định cuối câu, không đặt trực tiếp trước danh từ.",
            "きれい là tính từ đuôi な nên đứng trước danh từ うみ bắt buộc có な → きれいなうみ.",
            "きれい thiếu な nên không thể bổ nghĩa trực tiếp cho danh từ うみ.",
            "きれいの nối bằng の sai loại từ (tính từ な dùng な, không dùng の)."
          ]
        },
        "source": "sources/speaking.pdf#page=28",
        "id": "fe-mock-1-08"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこのコーヒーは（　　）にがくないです。",
        "options": [
          "あまり",
          "とても",
          "すこし",
          "いちばん"
        ],
        "answer": 0,
        "explanation": "Phó từ あまり kết hợp chuẩn với vị ngữ phủ định (にがくないです) mang nghĩa \"không… lắm\".",
        "origin": "authored",
        "solution": {
          "completed": "このコーヒーはあまりにがくないです。",
          "meaning": "Cà phê này không đắng lắm.",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "Phó từ あまり kết hợp chuẩn với vị ngữ phủ định (にがくないです) mang nghĩa \"không… lắm\".",
            "とても (rất) dùng cho câu khẳng định, không đi tự nhiên với にがくないです ở sơ cấp.",
            "すこし (một chút) đi với khẳng định (すこしにがいです), không đi với phủ định.",
            "いちばん dùng trong câu so sánh nhất có phạm vi, không hợp ở đây."
          ]
        },
        "source": "sources/speaking.pdf#page=30",
        "id": "fe-mock-1-09"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうのテストはあまり（　　）。",
        "options": [
          "むずかしいです",
          "むずかしかったです",
          "むずかしくないです",
          "むずかしくなかったです"
        ],
        "answer": 3,
        "explanation": "Kết hợp きのう (quá khứ) và あまり (phủ định) → tính từ い chia quá khứ phủ định: むずかしくなかったです.",
        "origin": "authored",
        "solution": {
          "completed": "きのうのテストはあまりむずかしくなかったです。",
          "meaning": "Bài kiểm tra hôm qua đã không khó lắm.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "むずかしいです là khẳng định hiện tại, sai cả thì và thể phủ định.",
            "むずかしかったです là khẳng định quá khứ, không đi với あまり.",
            "むずかしくないです là phủ định hiện tại, sai mốc thời gian きのう.",
            "Kết hợp きのう (quá khứ) và あまり (phủ định) → tính từ い chia quá khứ phủ định: むずかしくなかったです."
          ]
        },
        "source": "sources/speaking.pdf#page=36",
        "id": "fe-mock-1-10"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nにちようび、こうえんへテニスを（　　）行きます。",
        "options": [
          "するに",
          "しますに",
          "しに",
          "して"
        ],
        "answer": 2,
        "explanation": "Mẫu mục đích V(bỏ ます) + に + 行きます: します bỏ ます còn し → しに行きます.",
        "origin": "authored",
        "solution": {
          "completed": "にちようび、こうえんへテニスをしに行きます。",
          "meaning": "Chủ nhật tôi đi công viên để chơi quần vợt.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "するに giữ thể từ điển する thay vì gốc ます し, sai ngữ pháp.",
            "しますに giữ nguyên cả đuôi ます trước に, sai cấu tạo.",
            "Mẫu mục đích V(bỏ ます) + に + 行きます: します bỏ ます còn し → しに行きます.",
            "して là thể て, không thể hiện mục đích bằng cấu trúc Vに行きます."
          ]
        },
        "source": "sources/speaking.pdf#page=38",
        "id": "fe-mock-1-11"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあした、だいがく（　　）にほんごのスピーチたいかいが あります。",
        "options": [
          "を",
          "で",
          "に",
          "へ"
        ],
        "answer": 1,
        "explanation": "Sự kiện (スピーチたいかい) diễn ra tại địa điểm dùng trợ từ で: Địa điểm で Sự kiện が あります.",
        "origin": "authored",
        "solution": {
          "completed": "あした、だいがくでにほんごのスピーチたいかいがあります。",
          "meaning": "Ngày mai ở trường đại học có cuộc thi hùng biện tiếng Nhật.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "を đánh dấu tân ngữ, không dùng cho địa điểm tổ chức sự kiện.",
            "Sự kiện (スピーチたいかい) diễn ra tại địa điểm dùng trợ từ で: Địa điểm で Sự kiện が あります.",
            "に dùng cho sự tồn tại tĩnh của đồ vật/cơ sở, không dùng cho sự kiện diễn ra.",
            "へ chỉ hướng di chuyển, không đi với があります."
          ]
        },
        "source": "sources/speaking.pdf#page=43",
        "id": "fe-mock-1-12"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nひこうきは しんかんせん（　　）はやいです。",
        "options": [
          "より",
          "のほうが",
          "ほど",
          "どちら"
        ],
        "answer": 0,
        "explanation": "Mẫu so sánh hơn N1は N2より Aです dùng より ngay sau mốc so sánh しんかんせん.",
        "origin": "authored",
        "solution": {
          "completed": "ひこうきはしんかんせんよりはやいです。",
          "meaning": "Máy bay nhanh hơn tàu cao tốc Shinkansen.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "Mẫu so sánh hơn N1は N2より Aです dùng より ngay sau mốc so sánh しんかんせん.",
            "のほうが đứng sau chủ thể nổi bật hơn (không đi sau mốc bị so sánh khi đã có ひこうきは).",
            "ほど đi với vị ngữ phủ định (〜ほどはやくない), không đi với khẳng định はやいです.",
            "どちら là từ để hỏi chọn 1 trong 2, không đặt giữa câu khẳng định này."
          ]
        },
        "source": "sources/speaking.pdf#page=47",
        "id": "fe-mock-1-13"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nスポーツのなかで（　　）がいちばんおもしろいですか。",
        "options": [
          "どこ",
          "いつ",
          "だれ",
          "なに"
        ],
        "answer": 3,
        "explanation": "Hỏi môn thể thao (sự vật/hoạt động) trong phạm vi スポーツ dùng từ để hỏi なに.",
        "origin": "authored",
        "solution": {
          "completed": "スポーツのなかでなにがいちばんおもしろいですか。",
          "meaning": "Trong các môn thể thao, môn nào thú vị nhất?",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "どこ dùng để hỏi địa điểm, không hỏi môn thể thao.",
            "いつ dùng để hỏi thời gian/mùa/tháng.",
            "だれ dùng để hỏi người.",
            "Hỏi môn thể thao (sự vật/hoạt động) trong phạm vi スポーツ dùng từ để hỏi なに."
          ]
        },
        "source": "sources/speaking.pdf#page=46",
        "id": "fe-mock-1-14"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nちょっと まどを（　　）ください。少し さむいですから。",
        "options": [
          "しめいて",
          "しめ",
          "しめて",
          "しめって"
        ],
        "answer": 2,
        "explanation": "閉めます (しめる: đóng) là động từ nhóm 2 nên bỏ る + て → しめて + ください.",
        "origin": "authored",
        "solution": {
          "completed": "ちょっとまどをしめてください。少しさむいですから。",
          "meaning": "Phiền bạn đóng cửa sổ giúp một chút vì hơi lạnh.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "しめいて thêm い sai hoàn toàn cấu tạo thể て.",
            "しめ là gốc bỏ ます, không gắn trực tiếp trước ください.",
            "閉めます (しめる: đóng) là động từ nhóm 2 nên bỏ る + て → しめて + ください.",
            "しめって thêm っ sai quy tắc chia nhóm 2."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-1-15"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nたなかさんのかさは（　　）ですか。",
        "options": [
          "どこ",
          "どれ",
          "どの",
          "どんな"
        ],
        "answer": 1,
        "explanation": "Trước ですか không có danh từ nên phải dùng đại từ どれ (cái nào), không dùng どの.",
        "origin": "authored",
        "solution": {
          "completed": "たなかさんのかさはどれですか。",
          "meaning": "Chiếc ô của anh Tanaka là cái nào vậy?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "どこ hỏi vị trí (\"ở đâu\"); ngữ cảnh phân biệt chiếc ô trong nhiều cái dùng どれ.",
            "Trước ですか không có danh từ nên phải dùng đại từ どれ (cái nào), không dùng どの.",
            "どの bắt buộc phải có danh từ đứng ngay phía sau (どの傘ですか).",
            "どんな cũng cần danh từ phía sau và hỏi tính chất (\"như thế nào\")."
          ]
        },
        "source": "sources/speaking.pdf#page=64",
        "id": "fe-mock-1-16"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこのりょうりは だれ（　　）つくりましたか。",
        "options": [
          "が",
          "を",
          "に",
          "で"
        ],
        "answer": 0,
        "explanation": "Hỏi ai là chủ thể thực hiện hành động dùng だれが + động từ → だれがつくりましたか.",
        "origin": "authored",
        "solution": {
          "completed": "このりょうりはだれがつくりましたか。",
          "meaning": "Món ăn này do ai nấu vậy?",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "Hỏi ai là chủ thể thực hiện hành động dùng だれが + động từ → だれがつくりましたか.",
            "を đánh dấu tân ngữ bị tác động, không đánh dấu người thực hiện.",
            "に chỉ đích/thời điểm, không dùng đánh dấu chủ thể câu hỏi だれ…つくりましたか.",
            "で chỉ địa điểm/công cụ, không dùng sau だれ để hỏi chủ thể."
          ]
        },
        "source": "sources/speaking.pdf#page=68",
        "id": "fe-mock-1-17"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: 今度の土曜日、いっしょに映画を見ませんか。\nB: すみません。土曜日はちょっと…。（　　）。",
        "options": [
          "ぜひ見ましょう",
          "はい、見ました",
          "映画がいちばん好きです",
          "用事（ようじ）がありますから"
        ],
        "answer": 3,
        "explanation": "Sau lời từ chối nhẹ すみません。…はちょっと…, người nói nêu lý do bằng 用事がありますから.",
        "origin": "authored",
        "solution": {
          "completed": "B: すみません。土曜日はちょっと…。用事がありますから。",
          "meaning": "A: Thứ bảy tới cùng đi xem phim nhé? — B: Xin lỗi, thứ bảy hơi khó… vì tôi có việc bận.",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "ぜひ見ましょう là lời nhận lời hào hứng, mâu thuẫn với すみません。土曜日はちょっと….",
            "はい、見ました (Vâng, tôi đã xem rồi) không khớp cấu trúc từ chối lời rủ.",
            "映画がいちばん好きです chỉ nói sở thích, không giải thích lý do bận vào thứ bảy.",
            "Sau lời từ chối nhẹ すみません。…はちょっと…, người nói nêu lý do bằng 用事がありますから."
          ]
        },
        "source": "sources/speaking.pdf#page=43",
        "id": "fe-mock-1-18"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: もう ひるごはんを 食べましたか。\nB: いいえ、（　　）。これから食べます。",
        "options": [
          "まだあります",
          "もうありません",
          "まだです",
          "もう食べませんでした"
        ],
        "answer": 2,
        "explanation": "Trả lời phủ định cho câu hỏi もうVましたか (đã làm chưa) dùng いいえ、まだです.",
        "origin": "authored",
        "solution": {
          "completed": "A: もうひるごはんを食べましたか。B: いいえ、まだです。これから食べます。",
          "meaning": "A: Bạn đã ăn trưa chưa? — B: Chưa. Bây giờ tôi mới ăn.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "まだあります diễn tả đồ vật \"vẫn còn\", không dùng trả lời hành động chưa làm.",
            "もうありません nghĩa là \"đã hết (đồ vật)\", sai ngữ cảnh hoàn toàn.",
            "Trả lời phủ định cho câu hỏi もうVましたか (đã làm chưa) dùng いいえ、まだです.",
            "もう食べませんでした sai ngữ pháp (phủ định của もう〜ましたか không dùng もう〜ませんでした)."
          ]
        },
        "source": "sources/speaking.pdf#page=55",
        "id": "fe-mock-1-19"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: にもつが おもいですね。（　　）。\nB: ありがとうございます。おねがいします。",
        "options": [
          "もっています",
          "もちましょうか",
          "もってください",
          "もちましたか"
        ],
        "answer": 1,
        "explanation": "Chủ động đề nghị giúp đỡ dùng V(bỏ ます) + ましょうか (もちましょうか), khớp lời cảm ơn của B.",
        "origin": "authored",
        "solution": {
          "completed": "A: にもつがおもいですね。もちましょうか。B: ありがとうございます。おねがいします。",
          "meaning": "A: Hành lý nặng nhỉ. Để tôi xách giúp bạn nhé? — B: Cảm ơn bạn, nhờ bạn nhé.",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "もっています chỉ trạng thái đang cầm/mang, không phải lời đề nghị giúp.",
            "Chủ động đề nghị giúp đỡ dùng V(bỏ ます) + ましょうか (もちましょうか), khớp lời cảm ơn của B.",
            "もってください là nhờ người kia cầm giúp mình, ngược vai người giúp.",
            "もちましたか hỏi quá khứ \"đã cầm chưa\", không phải lời đề nghị giúp đỡ."
          ]
        },
        "source": "sources/speaking.pdf#page=67",
        "id": "fe-mock-1-20"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きのうのえいがは どうでしたか。\nB: （　　）。もういちど見たいです。",
        "options": [
          "とてもおもしろかったです",
          "あまりおもしろくなかったです",
          "とてもおもしろいです",
          "ぜんぜんおもしろくなかったです"
        ],
        "answer": 0,
        "explanation": "Vế sau もういちど見たいです (muốn xem lần nữa) và mốc きのう đòi hỏi đánh giá tích cực ở quá khứ: とてもおもしろかったです.",
        "origin": "authored",
        "solution": {
          "completed": "B: とてもおもしろかったです。もういちど見たいです。",
          "meaning": "A: Bộ phim hôm qua thế nào? — B: Rất thú vị. Tôi muốn xem lại lần nữa.",
          "rule": "Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.",
          "options": [
            "Vế sau もういちど見たいです (muốn xem lần nữa) và mốc きのう đòi hỏi đánh giá tích cực ở quá khứ: とてもおもしろかったです.",
            "あまりおもしろくなかったです (không thú vị lắm) mâu thuẫn với muốn xem lại.",
            "とてもおもしろいです chia hiện tại, lệch thì quá khứ với どうでしたか.",
            "ぜんぜんおもしろくなかったです (hoàn toàn không hay) trái ngược hoàn toàn với vế sau."
          ]
        },
        "source": "sources/speaking.pdf#page=36",
        "id": "fe-mock-1-21"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nなつは とても あついですから、（　　）みずを のみたいです。",
        "options": [
          "さむい",
          "あたたかい",
          "からい",
          "つめたい"
        ],
        "answer": 3,
        "explanation": "つめたい (冷たい) dùng để miêu tả đồ uống/đồ vật lạnh khi chạm vào (つめたいみず).",
        "origin": "authored",
        "solution": {
          "completed": "なつはとてもあついですから、つめたいみずをのみたいです。",
          "meaning": "Vì mùa hè rất nóng nên tôi muốn uống nước lạnh.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "さむい (寒い) dùng cho thời tiết/không khí lạnh, không dùng cho nước uống.",
            "あたたかい (ấm áp) trái với nhu cầu giải khát khi trời rất nóng.",
            "からい (cay) là vị giác món ăn, không dùng cho nước lọc.",
            "つめたい (冷たい) dùng để miêu tả đồ uống/đồ vật lạnh khi chạm vào (つめたいみず)."
          ]
        },
        "source": "sources/new-words.pdf#page=14",
        "id": "fe-mock-1-22"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nともだちの たんじょうびに かわいい（　　）を かいました。",
        "options": [
          "スポーツ",
          "スケジュール",
          "プレゼント",
          "チケット"
        ],
        "answer": 2,
        "explanation": "プレゼント (quà tặng) kết hợp tự nhiên nhất với たんじょうび (sinh nhật) và tính từ かわいい.",
        "origin": "authored",
        "solution": {
          "completed": "ともだちのたんじょうびにかわいいプレゼントをかいました。",
          "meaning": "Tôi đã mua một món quà dễ thương cho sinh nhật bạn.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "スポーツ là thể thao, không thể mua bằng かわいい…をかいました.",
            "スケジュール là lịch trình, không phải quà sinh nhật.",
            "プレゼント (quà tặng) kết hợp tự nhiên nhất với たんじょうび (sinh nhật) và tính từ かわいい.",
            "チケット là vé (xem phim/bóng đá), không hợp với tính từ かわいい ở ngữ cảnh này."
          ]
        },
        "source": "sources/new-words.pdf#page=17",
        "id": "fe-mock-1-23"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nえいがの チケットを（　　）かいました。",
        "options": [
          "みっか",
          "さんまい",
          "さんぼん",
          "さんにん"
        ],
        "answer": 1,
        "explanation": "Đếm vật mỏng phẳng (vé, giấy, đĩa) dùng lượng từ ～枚 (まい): 3 vé = さんまい.",
        "origin": "authored",
        "solution": {
          "completed": "えいがのチケットをさんまいかいました。",
          "meaning": "Tôi đã mua ba tấm vé xem phim.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "みっか (3日) là ngày mùng 3 hoặc 3 ngày, không phải lượng từ cho vé.",
            "Đếm vật mỏng phẳng (vé, giấy, đĩa) dùng lượng từ ～枚 (まい): 3 vé = さんまい.",
            "さんぼん (3本) dùng cho vật dài hình trụ (chai, bút, ô), không dùng cho vé.",
            "さんにん (3人) dùng để đếm người, không đếm vé."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-1-24"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）の なかに ぎゅうにゅうと やさいが あります。",
        "options": [
          "れいぞうこ",
          "だいどころ",
          "テーブル",
          "エレベーター"
        ],
        "answer": 0,
        "explanation": "れいぞうこ (冷蔵庫: tủ lạnh) là nơi bảo quản sữa (ぎゅうにゅう) và rau (やさい) bên trong (～のなかに).",
        "origin": "authored",
        "solution": {
          "completed": "れいぞうこのなかにぎゅうにゅうとやさいがあります。",
          "meaning": "Bên trong tủ lạnh có sữa tươi và rau củ.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "れいぞうこ (冷蔵庫: tủ lạnh) là nơi bảo quản sữa (ぎゅうにゅう) và rau (やさい) bên trong (～のなかに).",
            "だいどころ (nhà bếp) là căn phòng; nói bảo quản sữa/rau \"bên trong\" tự nhiên nhất là tủ lạnh.",
            "テーブル là cái bàn (dùng のうえに \"trên bàn\", không dùng のなかに).",
            "エレベーター là thang máy, không phải chỗ để sữa và rau."
          ]
        },
        "source": "sources/new-words.pdf#page=22",
        "id": "fe-mock-1-25"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn từ KHÁC LOẠI trong các từ sau:\n①となり / ②まえ / ③うしろ / ④しお",
        "options": [
          "となり",
          "まえ",
          "うしろ",
          "しお"
        ],
        "answer": 3,
        "explanation": "となり (bên cạnh), まえ (phía trước), うしろ (phía sau) đều là danh từ vị trí Bài 7; しお là muối.",
        "origin": "authored",
        "solution": {
          "completed": "しお（muối）khác nhóm danh từ chỉ vị trí（となり・まえ・うしろ）.",
          "meaning": "しお (muối) là gia vị, không thuộc nhóm danh từ chỉ vị trí tương đối.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "となり (bên cạnh) thuộc nhóm danh từ chỉ vị trí.",
            "まえ (phía trước) thuộc nhóm danh từ chỉ vị trí.",
            "うしろ (phía sau) thuộc nhóm danh từ chỉ vị trí.",
            "となり (bên cạnh), まえ (phía trước), うしろ (phía sau) đều là danh từ vị trí Bài 7; しお là muối."
          ]
        },
        "source": "sources/new-words.pdf#page=21",
        "id": "fe-mock-1-26"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn từ KHÔNG CÙNG NHÓM 季節（きせつ・mùa） trong các từ sau:\n①はる / ②なつ / ③あき / ④やま",
        "options": [
          "なつ",
          "あき",
          "やま",
          "はる"
        ],
        "answer": 2,
        "explanation": "はる (mùa xuân), なつ (mùa hè), あき (mùa thu) đều là các mùa trong năm; やま là núi.",
        "origin": "authored",
        "solution": {
          "completed": "やま（núi）không thuộc nhóm 季節（はる・なつ・あき）.",
          "meaning": "やま (núi) là địa hình tự nhiên, không phải tên mùa trong năm.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "なつ (mùa hè) là một mùa trong năm.",
            "あき (mùa thu) là một mùa trong năm.",
            "はる (mùa xuân), なつ (mùa hè), あき (mùa thu) đều là các mùa trong năm; やま là núi.",
            "はる (mùa xuân) là một mùa trong năm."
          ]
        },
        "source": "sources/new-words.pdf#page=14",
        "id": "fe-mock-1-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Đọc đoạn văn [FE-M1] và chọn từ thích hợp điền vào ＿＿①＿＿:\nひる、有名な　レストランで　＿＿①＿＿。",
        "options": [
          "本をかりました",
          "ラーメンを食べました",
          "ラーメンを食べます",
          "テニスをしました"
        ],
        "answer": 1,
        "explanation": "Địa điểm レストランで (tại nhà hàng) cùng mốc quá khứ 先週の土曜日 đòi hỏi hành động ăn uống ở quá khứ: ラーメンを食べました.",
        "origin": "authored",
        "solution": {
          "completed": "ひる、有名なレストランでラーメンを食べました。",
          "meaning": "Buổi trưa tôi đã ăn mì ramen tại một nhà hàng nổi tiếng.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "本をかりました (mượn sách) là việc làm ở thư viện, không khớp nhà hàng và câu tiếp theo.",
            "Địa điểm レストランで (tại nhà hàng) cùng mốc quá khứ 先週の土曜日 đòi hỏi hành động ăn uống ở quá khứ: ラーメンを食べました.",
            "ラーメンを食べます sai thì (hiện tại/tương lai) so với bối cảnh tuần trước.",
            "テニスをしました (chơi tennis) không thể diễn ra ở nhà hàng."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m1",
        "passageTitle": "Bài đọc · FE-M1 (Đề luyện FE 01)",
        "passage": "先週の土曜日、私は　ともだちと　京都（きょうと）へ　古いお寺を　見に　行きました。京都は　とても　しずかでした。そして、けしきが　きれいでした。ひる、有名な　レストランで　＿＿①＿＿。少し　高かったですが、とても　＿＿②＿＿。来週の日曜日、ハノイで　サッカーの　しあいが　あります。ともだちと　いっしょに　見に　行きたいです。",
        "id": "fe-mock-1-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Đọc đoạn văn [FE-M1] và chọn từ thích hợp điền vào ＿＿②＿＿:\n少し　高かったですが、とても　＿＿②＿＿。",
        "options": [
          "おいしかったです",
          "おいしいです",
          "おいしくなかったです",
          "おいしくないです"
        ],
        "answer": 0,
        "explanation": "Liên từ tương phản が (\"hơi đắt nhưng…\") cùng phó từ とても và thì quá khứ đòi hỏi おいしかったです.",
        "origin": "authored",
        "solution": {
          "completed": "少し高かったですが、とてもおいしかったです。",
          "meaning": "Tuy hơi đắt một chút nhưng rất ngon.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "Liên từ tương phản が (\"hơi đắt nhưng…\") cùng phó từ とても và thì quá khứ đòi hỏi おいしかったです.",
            "おいしいです chia hiện tại, lệch thì với 高かったですが.",
            "おいしくなかったです là phủ định, không đi với とても và trái ý tương phản của が.",
            "おいしくないです vừa phủ định vừa sai thì hiện tại."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m1",
        "passageTitle": "Bài đọc · FE-M1 (Đề luyện FE 01)",
        "passage": "先週の土曜日、私は　ともだちと　京都（きょうと）へ　古いお寺を　見に　行きました。京都は　とても　しずかでした。そして、けしきが　きれいでした。ひる、有名な　レストランで　＿＿①＿＿。少し　高かったですが、とても　＿＿②＿＿。来週の日曜日、ハノイで　サッカーの　しあいが　あります。ともだちと　いっしょに　見に　行きたいです。",
        "id": "fe-mock-1-29"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc đoạn văn [FE-M1] và chọn câu có nội dung ĐÚNG với đoạn văn:",
        "options": [
          "京都はとてもにぎやかでした。",
          "ひるのラーメンはあまりおいしくなかったです。",
          "来週の日曜日、ひとりでサッカーをします。",
          "先週の土曜日、ともだちと京都へ行きました。"
        ],
        "answer": 3,
        "explanation": "Khớp trực tiếp câu đầu tiên của đoạn văn FE-M1.",
        "origin": "authored",
        "solution": {
          "completed": "先週の土曜日、私はともだちと京都へ古いお寺を見に行きました。",
          "meaning": "Thứ bảy tuần trước tôi đã đi Kyoto cùng bạn.",
          "rule": "Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.",
          "options": [
            "Sai: đoạn văn mô tả 京都はとてもしずかでした (rất yên tĩnh), không phải にぎやか (náo nhiệt).",
            "Sai: món ăn trưa rất ngon (とてもおいしかったです), không phải không ngon lắm.",
            "Sai: tuần sau đi xem bóng đá cùng bạn (ともだちといっしょに見に行きたいです), không phải tự đá một mình.",
            "Khớp trực tiếp câu đầu tiên của đoạn văn FE-M1."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m1",
        "passageTitle": "Bài đọc · FE-M1 (Đề luyện FE 01)",
        "passage": "先週の土曜日、私は　ともだちと　京都（きょうと）へ　古いお寺を　見に　行きました。京都は　とても　しずかでした。そして、けしきが　きれいでした。ひる、有名な　レストランで　＿＿①＿＿。少し　高かったですが、とても　＿＿②＿＿。来週の日曜日、ハノイで　サッカーの　しあいが　あります。ともだちと　いっしょに　見に　行きたいです。",
        "id": "fe-mock-1-30"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-mock-2",
    "title": "Đề luyện FE · Đề 02",
    "description": "Biên soạn mới theo đúng ma trận đề thi thật FE JPD123 (30 câu: 3 đọc Hán tự, 3 viết Hán tự, 11 ngữ pháp, 4 hội thoại, 6 từ vựng, 3 đọc hiểu đoạn văn). Chủ đề: Mùa hè Đà Nẵng, du lịch biển & tiệc tại nhà bạn (phủ Bài 4–7 và Kanji mở rộng).",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-authored",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【週末】、かぞくとピクニックに行きます。",
        "options": [
          "しゅまつ",
          "しゅうすえ",
          "じゅうまつ",
          "しゅうまつ"
        ],
        "answer": 3,
        "explanation": "週末 (Chu Mạt: cuối tuần) đọc là しゅうまつ (có trường âm う ở しゅう).",
        "origin": "authored",
        "solution": {
          "completed": "週末（しゅうまつ）、かぞくとピクニックに行きます。",
          "meaning": "Cuối tuần tôi đi dã ngoại cùng gia đình.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "しゅまつ thiếu trường âm う ở âm tiết đầu.",
            "しゅうすえ đọc nhầm chữ 末 thành âm Kun すえ.",
            "じゅうまつ thêm âm đục じ sai ở chữ 週.",
            "週末 (Chu Mạt: cuối tuần) đọc là しゅうまつ (có trường âm う ở しゅう)."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-2-01"
      },
      {
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nこの町は【有名】なコーヒーがあります。",
        "options": [
          "ゆうみょう",
          "うめい",
          "ゆうめい",
          "ゆめい"
        ],
        "answer": 2,
        "explanation": "有名 (Hữu Danh: nổi tiếng) đọc là ゆうめい (trường âm う ở ゆう).",
        "origin": "authored",
        "solution": {
          "completed": "この町は有名（ゆうめい）なコーヒーがあります。",
          "meaning": "Thị trấn này có món cà phê nổi tiếng.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "ゆうみょう đọc sai chữ 名 sang âm みょう.",
            "うめい thiếu âm đầu ゆ ở chữ 有.",
            "有名 (Hữu Danh: nổi tiếng) đọc là ゆうめい (trường âm う ở ゆう).",
            "ゆめい thiếu trường âm う ở chữ 有."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-2-02"
      },
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【毎日】日本語をべんきょうします。",
        "options": [
          "まいじつ",
          "まいにち",
          "まいひ",
          "めいにち"
        ],
        "answer": 1,
        "explanation": "毎日 (Mỗi Nhật: hàng ngày) đọc âm On chuẩn là まいにち.",
        "origin": "authored",
        "solution": {
          "completed": "毎日（まいにち）日本語をべんきょうします。",
          "meaning": "Mỗi ngày tôi đều học tiếng Nhật.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "まいじつ sai âm đọc của 日 trong 毎日 (đọc にち, không đọc じつ).",
            "毎日 (Mỗi Nhật: hàng ngày) đọc âm On chuẩn là まいにち.",
            "まいひ ghép sai âm Kun ひ cho chữ 日.",
            "めいにち đọc sai chữ 毎 thành めい thay vì まい."
          ]
        },
        "source": "sources/new-words.pdf#page=10",
        "id": "fe-mock-2-03"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nふるいお寺のまえに大きな【かわ】があります。",
        "options": [
          "川",
          "山",
          "木",
          "水"
        ],
        "answer": 0,
        "explanation": "川 (Xuyên) đọc là かわ, nghĩa là con sông (từ vựng Bài 4).",
        "origin": "authored",
        "solution": {
          "completed": "ふるいお寺のまえに大きな川（かわ）があります。",
          "meaning": "Trước ngôi chùa cổ có một con sông lớn.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "川 (Xuyên) đọc là かわ, nghĩa là con sông (từ vựng Bài 4).",
            "山 đọc là やま (ngọn núi), không phải かわ.",
            "木 đọc là き (cái cây).",
            "水 đọc là みず (nước), không phải con sông."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-2-04"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nきのう、きれいな山の【しゃしん】をとりました。",
        "options": [
          "写直",
          "写具",
          "与真",
          "写真"
        ],
        "answer": 3,
        "explanation": "写真 (Tả Chân) đọc しゃしん, nghĩa là bức ảnh (từ vựng Bài 5).",
        "origin": "authored",
        "solution": {
          "completed": "きのう、きれいな山の写真（しゃしん）をとりました。",
          "meaning": "Hôm qua tôi đã chụp ảnh ngọn núi đẹp.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "写直 sai chữ thứ hai: dùng 直 (trực) thiếu hai nét chân của 真.",
            "写具 sai chữ thứ hai: dùng 具 (công cụ) thay vì 真 (chân).",
            "与真 sai chữ đầu: dùng 与 (dữ) thay vì 写 (tả).",
            "写真 (Tả Chân) đọc しゃしん, nghĩa là bức ảnh (từ vựng Bài 5)."
          ]
        },
        "source": "sources/new-words.pdf#page=17",
        "id": "fe-mock-2-05"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n【らいげつ】、とうきょうで野球のしあいがあります。",
        "options": [
          "先月",
          "来日",
          "来月",
          "今月"
        ],
        "answer": 2,
        "explanation": "来月 (Lai Nguyệt) đọc らいげつ, nghĩa là tháng sau (Bài 6).",
        "origin": "authored",
        "solution": {
          "completed": "来月（らいげつ）、とうきょうで野球のしあいがあります。",
          "meaning": "Tháng sau ở Tokyo có trận đấu bóng chày.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "先月 đọc せんげつ (tháng trước), sai chữ đầu 先.",
            "来日 đọc らいにち (đến Nhật Bản), sai chữ sau 日 thay vì 月.",
            "来月 (Lai Nguyệt) đọc らいげつ, nghĩa là tháng sau (Bài 6).",
            "今月 đọc こんげつ (tháng này), sai chữ đầu 今."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-2-06"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-location",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nハノイは ベトナム（　　）北（きた）に あります。",
        "options": [
          "と",
          "の",
          "で",
          "に"
        ],
        "answer": 1,
        "explanation": "Cấu trúc vị trí địa lý trong một quốc gia: Quốc gia の phương hướng にあります → の.",
        "origin": "authored",
        "solution": {
          "completed": "ハノイはベトナムの北にあります。",
          "meaning": "Hà Nội nằm ở phía bắc của Việt Nam.",
          "rule": "Nêu vị trí một địa danh trong một quốc gia/khu vực dùng Địa danh は + Quốc gia の + phương hướng（東・西・南・北・真ん中）です. Chú ý nối bằng trợ từ の trước phương hướng.",
          "options": [
            "と dùng để liệt kê hoặc chỉ người đi cùng, không biểu thị quan hệ sở hữu/thuộc về.",
            "Cấu trúc vị trí địa lý trong một quốc gia: Quốc gia の phương hướng にあります → の.",
            "で không nối quốc gia với phương hướng của nó.",
            "に đã đứng sau 北 để chỉ vị trí tồn tại, không dùng giữa ベトナム và 北."
          ]
        },
        "source": "sources/speaking.pdf#page=26",
        "id": "fe-mock-2-07"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-existence",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n私の町の近くに、大きなこうえん（　　）あります。",
        "options": [
          "が",
          "を",
          "へ",
          "で"
        ],
        "answer": 0,
        "explanation": "Mẫu giới thiệu sự vật tồn tại ở một nơi: Địa điểm に + Sự vật が + あります → が.",
        "origin": "authored",
        "solution": {
          "completed": "私の町の近くに、大きなこうえんがあります。",
          "meaning": "Ở gần thị trấn của tôi có một công viên lớn.",
          "rule": "Giới thiệu sự vật có ở một địa điểm dùng Địa điểm に + N が + あります (cho vật/cảnh quan/công trình). Trợ từ に chỉ nơi tồn tại, が đánh dấu sự vật xuất hiện.",
          "options": [
            "Mẫu giới thiệu sự vật tồn tại ở một nơi: Địa điểm に + Sự vật が + あります → が.",
            "を không dùng với động từ tồn tại あります.",
            "へ chỉ hướng di chuyển, không đi trước あります.",
            "で dùng cho nơi diễn ra sự kiện, không đứng sau danh từ đồ vật/địa điểm tĩnh こうえん."
          ]
        },
        "source": "sources/speaking.pdf#page=28",
        "id": "fe-mock-2-08"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-connect",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこのへやは せまい（　　）、とても きれいです。",
        "options": [
          "そして",
          "から",
          "それから",
          "ですが"
        ],
        "answer": 3,
        "explanation": "Hai ý tương phản (hẹp ↔ rất sạch đẹp) nối trong cùng một câu lịch sự dùng ですが.",
        "origin": "authored",
        "solution": {
          "completed": "このへやはせまいですが、とてもきれいです。",
          "meaning": "Căn phòng này tuy hẹp nhưng rất sạch đẹp.",
          "rule": "Nối hai câu/ý bổ sung cùng chiều dùng そして (Và, hơn nữa); nối hai ý tương phản dùng が (Nhưng). Phân biệt そして (thêm tính chất/ý song song) với それから (trình tự hành động trước–sau).",
          "options": [
            "そして nối hai ý cùng chiều và thường mở câu mới sau dấu chấm.",
            "から chỉ quan hệ nguyên nhân–kết quả, không hợp logic \"vì hẹp nên sạch đẹp\".",
            "それから chỉ trình tự hành động trước–sau (sau đó), không dùng nối hai tính từ đối lập.",
            "Hai ý tương phản (hẹp ↔ rất sạch đẹp) nối trong cùng một câu lịch sự dùng ですが."
          ]
        },
        "source": "sources/speaking.pdf#page=29",
        "id": "fe-mock-2-09"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-with",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうのよる、へやで（　　）本をよみました。",
        "options": [
          "ひとりに",
          "ひとりを",
          "ひとりで",
          "ひとりと"
        ],
        "answer": 2,
        "explanation": "Diễn tả làm việc gì đó một mình dùng cụm cố định 一人で (ひとりで), không dùng と.",
        "origin": "authored",
        "solution": {
          "completed": "きのうのよる、へやでひとりで本をよみました。",
          "meaning": "Tối hôm qua tôi đã đọc sách một mình trong phòng.",
          "rule": "Làm hành động cùng ai dùng Người と + V (làm một mình dùng 一人で, không thêm と). Kể hành động xảy ra tiếp theo theo trình tự thời gian dùng それから.",
          "options": [
            "ひとりに sai trợ từ (cụm cố định là ひとりで).",
            "ひとりを sai hoàn toàn (tân ngữ của よみました đã là 本を).",
            "Diễn tả làm việc gì đó một mình dùng cụm cố định 一人で (ひとりで), không dùng と.",
            "ひとりと sai ngữ pháp vì ひとり không đi với trợ từ と."
          ]
        },
        "source": "sources/speaking.pdf#page=34",
        "id": "fe-mock-2-10"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nつぎの休みに、おおさかで おいしい たこやきを（　　）。",
        "options": [
          "食べるたいです",
          "食べたいです",
          "食べますたいです",
          "食べったいです"
        ],
        "answer": 1,
        "explanation": "Mẫu mong muốn làm hành động: V(bỏ ます) + たいです → 食べます bỏ ます thành 食べ + たいです = 食べたいです.",
        "origin": "authored",
        "solution": {
          "completed": "つぎの休みに、おおさかでおいしいたこやきを食べたいです。",
          "meaning": "Kỳ nghỉ tới tôi muốn ăn bánh bạch tuộc takoyaki ngon ở Osaka.",
          "rule": "Diễn tả muốn làm hành động dùng V(bỏ ます) + たいです (phủ định: たくないです). Tính từ たい biến đổi giống tính từ đuôi い; tân ngữ thường đi với を hoặc が.",
          "options": [
            "食べるたいです gắn たい vào thể từ điển る thay vì bỏ ます.",
            "Mẫu mong muốn làm hành động: V(bỏ ます) + たいです → 食べます bỏ ます thành 食べ + たいです = 食べたいです.",
            "食べますたいです giữ nguyên đuôi ます trước たい, sai cấu tạo.",
            "食べったいです thêm âm ngắt っ sai quy tắc chia của động từ nhóm 2 食べます."
          ]
        },
        "source": "sources/speaking.pdf#page=38",
        "id": "fe-mock-2-11"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nなつと ふゆと、どちらが すきですか。\n― なつ（　　）すきです。",
        "options": [
          "のほうが",
          "より",
          "いちばん",
          "どちらも"
        ],
        "answer": 0,
        "explanation": "Trả lời chọn một bên nổi bật hơn trong câu hỏi どちらが…ですか dùng Nのほうが + tính từ.",
        "origin": "authored",
        "solution": {
          "completed": "なつのほうがすきです。",
          "meaning": "Giữa mùa hè và mùa đông bạn thích mùa nào hơn? — Tôi thích mùa hè hơn.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "Trả lời chọn một bên nổi bật hơn trong câu hỏi どちらが…ですか dùng Nのほうが + tính từ.",
            "より đặt sau bên bị so sánh (\"hơn mùa hè\"), không đúng khi đang chọn mùa hè.",
            "いちばん dùng cho so sánh nhất từ 3 đối tượng trở lên, không khớp câu hỏi どちら.",
            "どちらも nghĩa là \"cả hai\", không thể ghép sau một danh từ riêng lẻ なつ."
          ]
        },
        "source": "sources/speaking.pdf#page=47",
        "id": "fe-mock-2-12"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống (A thông báo thông tin mới cho B):\nA: 駅のまえに 新しいカフェが できました（　　）。\nB: へえ、そうなんですか。今度行きましょう。",
        "options": [
          "か",
          "を",
          "の",
          "よ"
        ],
        "answer": 3,
        "explanation": "Tiểu từ cuối câu よ dùng khi người nói báo một thông tin mới mà người nghe chưa biết (khớp phản ứng へえ、そうなんですか).",
        "origin": "authored",
        "solution": {
          "completed": "A: 駅のまえに新しいカフェができましたよ。",
          "meaning": "A: Trước nhà ga mới mở một quán cà phê đấy! — B: Ồ, thế à? Lần tới cùng đi nhé.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "か biến câu thành câu hỏi nghi vấn, không khớp với câu báo tin và phản hồi của B.",
            "を không thể đứng cuối câu làm tiểu từ kết thúc.",
            "の ở đây không truyền đạt sắc thái báo tin rõ như よ trong mẫu Bài 6 Dekiru.",
            "Tiểu từ cuối câu よ dùng khi người nói báo một thông tin mới mà người nghe chưa biết (khớp phản ứng へえ、そうなんですか)."
          ]
        },
        "source": "sources/speaking.pdf#page=49",
        "id": "fe-mock-2-13"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nテーブルの（　　）に さらと フォークが あります。",
        "options": [
          "となり",
          "うしろ",
          "うえ",
          "なか"
        ],
        "answer": 2,
        "explanation": "Đĩa và nĩa đặt trên mặt bàn nên dùng danh từ vị trí うえ (trên): テーブルのうえに.",
        "origin": "authored",
        "solution": {
          "completed": "テーブルのうえにさらとフォークがあります。",
          "meaning": "Ở trên bàn có đĩa và dĩa (nĩa).",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "となり nghĩa là bên cạnh (dùng cho hai vật/nhà/người ngang hàng nhau).",
            "うしろ nghĩa là phía sau, không tự nhiên với cách bày đĩa/nĩa trên bàn.",
            "Đĩa và nĩa đặt trên mặt bàn nên dùng danh từ vị trí うえ (trên): テーブルのうえに.",
            "なか nghĩa là bên trong (bàn không có không gian \"bên trong\" để bày đĩa)."
          ]
        },
        "source": "sources/speaking.pdf#page=60",
        "id": "fe-mock-2-14"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nすみません、ここに じゅうしょを（　　）ください。",
        "options": [
          "かいで",
          "かいて",
          "かきて",
          "かって"
        ],
        "answer": 1,
        "explanation": "書きます (かく: viết) thuộc nhóm 1 đuôi く → chia thể て là かいて + ください.",
        "origin": "authored",
        "solution": {
          "completed": "すみません、ここにじゅうしょをかいてください。",
          "meaning": "Xin lỗi, vui lòng viết địa chỉ vào đây giúp.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "かいで dùng âm đục で dành cho động từ đuôi ぐ, không phải く.",
            "書きます (かく: viết) thuộc nhóm 1 đuôi く → chia thể て là かいて + ください.",
            "かきて không biến âm từ き thành い, sai quy tắc thể て nhóm 1.",
            "かって là thể て của 買います (mua), sai nghĩa với じゅうしょ (địa chỉ)."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-2-15"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nはし（　　）ラーメンを 食べます。",
        "options": [
          "で",
          "に",
          "を",
          "と"
        ],
        "answer": 0,
        "explanation": "Dụng cụ thực hiện hành động ăn (はし: đũa) dùng trợ từ で: はしで食べます.",
        "origin": "authored",
        "solution": {
          "completed": "はしでラーメンを食べます。",
          "meaning": "Tôi ăn mì ramen bằng đũa.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "Dụng cụ thực hiện hành động ăn (はし: đũa) dùng trợ từ で: はしで食べます.",
            "に không dùng để chỉ công cụ/dụng cụ.",
            "を đã dùng cho tân ngữ ラーメンを, không dùng cho dụng cụ はし.",
            "と chỉ người cùng ăn hoặc liệt kê, không chỉ dụng cụ."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-2-16"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-adjective",
        "prompt": "Sắp xếp các từ gợi ý sau thành câu hoàn chỉnh:\nまち / しずか / とても / ここは / です",
        "options": [
          "ここは しずか とても まちです。",
          "ここは とても しずか まちです。",
          "とても しずかな ここは まちです。",
          "ここは とても しずかな まちです。"
        ],
        "answer": 3,
        "explanation": "Chủ đề ここは đứng đầu, phó từ とても bổ nghĩa cho tính từ な しずかな đứng trước danh từ まちです.",
        "origin": "authored",
        "solution": {
          "completed": "ここはとてもしずかなまちです。",
          "meaning": "Nơi đây là một thị trấn rất yên tĩnh.",
          "rule": "Tính từ đuôi い kết thúc bằng い đứng trực tiếp trước です (寒い・高い); tính từ đuôi な (静か・きれい・にぎやか) bỏ な trước です. Chú ý きれい là tính từ đuôi な dù kết thúc bằng い.",
          "options": [
            "Đặt とても sai vị trí (sau しずか) và thiếu な trước まち.",
            "Thiếu な sau tính từ đuôi な しずか khi bổ nghĩa cho danh từ まち.",
            "Đặt cụm とてもしずかな đứng trước ここは, sai trật tự chủ ngữ–vị ngữ.",
            "Chủ đề ここは đứng đầu, phó từ とても bổ nghĩa cho tính từ な しずかな đứng trước danh từ まちです."
          ]
        },
        "source": "sources/speaking.pdf#page=28",
        "id": "fe-mock-2-17"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-suggest",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: 何時に えきで 会いますか。\nB: 10時は どうですか。\nA: いいですね。（　　）。",
        "options": [
          "そうしませんか",
          "いいえ、まだです",
          "そうしましょう",
          "そうしました"
        ],
        "answer": 2,
        "explanation": "Khi đồng ý với đề xuất Nはどうですか của đối phương, đáp bằng cụm cố định そうしましょう.",
        "origin": "authored",
        "solution": {
          "completed": "A: いいですね。そうしましょう。",
          "meaning": "A: Mấy giờ gặp nhau ở nhà ga? — B: 10 giờ thì sao? — A: Hay đấy, quyết định vậy nhé.",
          "rule": "Đề xuất một phương án dùng Nはどうですか, chẳng hạn giờ hẹn hoặc nơi gặp. Nếu đồng ý chọn phương án đó, đáp そうしましょう. Phải khớp thông tin và ý định trong hội thoại, không phủ nhận một lời đáp chỉ vì nó ít thông dụng.",
          "options": [
            "そうしませんか không phải cách tán thành đề xuất đã có sẵn.",
            "いいえ、まだです dùng trả lời câu hỏi もう〜ましたか, sai hoàn toàn ngữ cảnh.",
            "Khi đồng ý với đề xuất Nはどうですか của đối phương, đáp bằng cụm cố định そうしましょう.",
            "そうしました chia quá khứ (đã làm vậy), sai với cuộc hẹn tương lai."
          ]
        },
        "source": "sources/speaking.pdf#page=50",
        "id": "fe-mock-2-18"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-remaining",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: オレンジジュースは まだ ありますか。\nB: はい、（　　）。どうぞ。",
        "options": [
          "まだありません",
          "まだあります",
          "もうありません",
          "もうあります"
        ],
        "answer": 1,
        "explanation": "Khẳng định (はい + どうぞ) cho câu hỏi まだありますか dùng まだあります (vẫn còn).",
        "origin": "authored",
        "solution": {
          "completed": "A: オレンジジュースはまだありますか。B: はい、まだあります。どうぞ。",
          "meaning": "A: Nước cam vẫn còn không? — B: Vâng, vẫn còn đấy. Mời bạn.",
          "rule": "Khi nói lượng đồ còn lại, まだあります là vẫn còn, もうありません là đã hết. Chú ý dữ kiện đồ vẫn còn hay không còn; khác với まだです trả lời việc chưa làm xong ở bài 6.",
          "options": [
            "まだありません nghĩa là \"vẫn chưa có\", trái ngược với はい.",
            "Khẳng định (はい + どうぞ) cho câu hỏi まだありますか dùng まだあります (vẫn còn).",
            "もうありません nghĩa là đã hết rồi, mâu thuẫn với はい và どうぞ.",
            "もうあります không phải mẫu tự nhiên để nói \"vẫn còn\" (phải dùng まだあります)."
          ]
        },
        "source": "sources/speaking.pdf#page=69",
        "id": "fe-mock-2-19"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-somewhere",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きのうの休み、どこかへ 行きましたか。\nB: いいえ、（　　）。うちで テレビを 見ました。",
        "options": [
          "どこへも行きませんでした",
          "どこかへ行きました",
          "どこへ行きましたか",
          "どこへも行きます"
        ],
        "answer": 0,
        "explanation": "Đáp lại どこかへ行きましたか bằng いいえ dùng phủ định hoàn toàn ở quá khứ: どこへも行きませんでした.",
        "origin": "authored",
        "solution": {
          "completed": "B: いいえ、どこへも行きませんでした。うちでテレビを見ました。",
          "meaning": "A: Ngày nghỉ hôm qua bạn có đi đâu không? — B: Không, tôi chẳng đi đâu cả. Tôi ở nhà xem TV.",
          "rule": "Hỏi có đi đâu đó không dùng どこか（へ）行きますか／行きましたか; phủ định hoàn toàn không đi đâu dùng どこ（へ）も行きません／行きませんでした. Tương tự cho なにも + phủ định.",
          "options": [
            "Đáp lại どこかへ行きましたか bằng いいえ dùng phủ định hoàn toàn ở quá khứ: どこへも行きませんでした.",
            "どこかへ行きました là khẳng định, trái ngược với いいえ và vế ở nhà xem TV.",
            "どこへ行きましたか là câu hỏi ngược lại, không hợp mạch đáp いいえ.",
            "どこへも行きます dùng động từ khẳng định hiện tại sau どこへも (bắt buộc phải phủ định quá khứ)."
          ]
        },
        "source": "sources/speaking.pdf#page=35",
        "id": "fe-mock-2-20"
      },
      {
        "category": "dialogue",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-ne",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きょうは とても あついですね。\nB: （　　）。ほんとうに あついですね。",
        "options": [
          "そうですか",
          "わかりました",
          "どうぞ",
          "そうですね"
        ],
        "answer": 3,
        "explanation": "Khi đồng tình với nhận xét có ね (あついですね), người nghe đáp lại bằng そうですね.",
        "origin": "authored",
        "solution": {
          "completed": "A: きょうはとてもあついですね。B: そうですね。ほんとうにあついですね。",
          "meaning": "A: Hôm nay trời nóng quá nhỉ! — B: Đúng thế nhỉ. Thực sự nóng quá.",
          "rule": "Tiểu từ cuối câu ね dùng để tìm sự đồng tình, chia sẻ cảm nhận (暑いですね) hoặc xác nhận thông tin với người nghe; khác よ dùng khi báo thông tin mới cho người nghe.",
          "options": [
            "そうですか (Vậy à?) dùng khi tiếp nhận thông tin mới mình chưa biết, không hợp khi cả hai cùng cảm nhận trời nóng.",
            "わかりました (Tôi hiểu rồi) dùng khi nhận lời nhờ vả hoặc giải thích.",
            "どうぞ (Xin mời) dùng khi mời ai đó làm gì hoặc đưa đồ.",
            "Khi đồng tình với nhận xét có ね (あついですね), người nghe đáp lại bằng そうですね."
          ]
        },
        "source": "sources/speaking.pdf#page=30",
        "id": "fe-mock-2-21"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nナイフで りんごを（　　）。",
        "options": [
          "かけます",
          "いれます",
          "きります",
          "あらいます"
        ],
        "answer": 2,
        "explanation": "ナイフ (con dao) và りんご (quả táo) đi chuẩn nhất với động từ 切ります (きります: cắt, gọt).",
        "origin": "authored",
        "solution": {
          "completed": "ナイフでりんごをきります。",
          "meaning": "Tôi cắt táo bằng dao.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "かけます nghĩa là gọi điện thoại / đeo / treo, không đi với dao và táo.",
            "いれます nghĩa là bỏ vào/cho vào, không hợp với dụng cụ ナイフ.",
            "ナイフ (con dao) và りんご (quả táo) đi chuẩn nhất với động từ 切ります (きります: cắt, gọt).",
            "あらいます nghĩa là rửa, không dùng dụng cụ ナイフ (dao)."
          ]
        },
        "source": "sources/new-words.pdf#page=22",
        "id": "fe-mock-2-22"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのう（　　）を ひきましたから、きょうは 学校を やすみます。",
        "options": [
          "けしき",
          "かぜ",
          "しゃしん",
          "おんせん"
        ],
        "answer": 1,
        "explanation": "Cụm cố định trong Bài 5: 風邪をひきます (かぜをひきます: bị cảm cúm).",
        "origin": "authored",
        "solution": {
          "completed": "きのうかぜをひきましたから、きょうは学校をやすみます。",
          "meaning": "Vì hôm qua tôi bị cảm nên hôm nay nghỉ học.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "けしき (phong cảnh) không kết hợp với động từ ひきます.",
            "Cụm cố định trong Bài 5: 風邪をひきます (かぜをひきます: bị cảm cúm).",
            "しゃしん đi với とります (chụp ảnh), không đi với ひきます.",
            "おんせん đi với はいります (tắm suối nước nóng), không phải lý do nghỉ học với ひきます."
          ]
        },
        "source": "sources/new-words.pdf#page=16",
        "id": "fe-mock-2-23"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあした ともだちと（　　）が ありますから、はやめに かえります。",
        "options": [
          "やくそく",
          "きせつ",
          "しゅうまつ",
          "くだもの"
        ],
        "answer": 0,
        "explanation": "Cụm từ cố định Bài 6: Người と 約束（やくそく）があります (có hẹn với ai).",
        "origin": "authored",
        "solution": {
          "completed": "あしたともだちとやくそくがありますから、はやめにかえります。",
          "meaning": "Vì ngày mai có hẹn với bạn nên tôi về sớm.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "Cụm từ cố định Bài 6: Người と 約束（やくそく）があります (có hẹn với ai).",
            "きせつ là mùa trong năm, không kết hợp với ともだちと…があります.",
            "しゅうまつ là cuối tuần, không đi với ともだちと…があります.",
            "くだもの là trái cây, không hợp nghĩa với mẫu hẹn hò."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-2-24"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nみちが わかりませんから、ちずを（　　）。",
        "options": [
          "聞きます",
          "書きます",
          "洗います",
          "見ます"
        ],
        "answer": 3,
        "explanation": "ちず (bản đồ) đi tự nhiên với động từ 見ます (xem bản đồ: ちずを見ます).",
        "origin": "authored",
        "solution": {
          "completed": "みちがわかりませんから、ちずを見ます。",
          "meaning": "Vì không biết đường nên tôi xem bản đồ.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "聞きます (nghe/hỏi) không dùng với tân ngữ ちずを (hỏi đường là みちを聞きます).",
            "書きます (viết/vẽ) không tự nhiên khi bản thân đang không biết đường.",
            "洗います (rửa) vô nghĩa với bản đồ.",
            "ちず (bản đồ) đi tự nhiên với động từ 見ます (xem bản đồ: ちずを見ます)."
          ]
        },
        "source": "sources/new-words.pdf#page=21",
        "id": "fe-mock-2-25"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn từ KHÁC LOẠI trong các từ sau:\n①おんせん / ②うみ / ③やま / ④チケット",
        "options": [
          "うみ",
          "やま",
          "チケット",
          "おんせん"
        ],
        "answer": 2,
        "explanation": "おんせん (suối nước nóng), うみ (biển), やま (núi) đều là địa điểm đi chơi; チケット là vé.",
        "origin": "authored",
        "solution": {
          "completed": "チケット（vé）khác nhóm địa điểm du lịch thiên nhiên（おんせん・うみ・やま）.",
          "meaning": "チケット (tấm vé) là vật phẩm, không thuộc nhóm địa điểm đi chơi/thiên nhiên.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "うみ (biển) là địa điểm du lịch thiên nhiên.",
            "やま (núi) là địa điểm du lịch thiên nhiên.",
            "おんせん (suối nước nóng), うみ (biển), やま (núi) đều là địa điểm đi chơi; チケット là vé.",
            "おんせん (suối nước nóng) là địa điểm du lịch/thư giãn."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-2-26"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn từ KHÔNG CÙNG NHÓM 台所（だいどころ・đồ bếp/ăn uống） trong các từ sau:\n①おさら / ②コップ / ③フォーク / ④ギター",
        "options": [
          "フォーク",
          "ギター",
          "おさら",
          "コップ"
        ],
        "answer": 1,
        "explanation": "おさら (đĩa), コップ (cốc), フォーク (nĩa) đều là vật dụng bàn ăn Bài 7; ギター là đàn guitar.",
        "origin": "authored",
        "solution": {
          "completed": "ギター（đàn guitar）không thuộc nhóm đồ dùng bàn ăn/bếp（おさら・コップ・フォーク）.",
          "meaning": "Đàn guitar (ギター) là nhạc cụ, không thuộc nhóm vật dụng ăn uống.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "フォーク (nĩa/dĩa) thuộc nhóm đồ dùng bàn ăn.",
            "おさら (đĩa), コップ (cốc), フォーク (nĩa) đều là vật dụng bàn ăn Bài 7; ギター là đàn guitar.",
            "おさら (đĩa) thuộc nhóm đồ dùng bàn ăn.",
            "コップ (cốc, ly) thuộc nhóm đồ dùng bàn ăn."
          ]
        },
        "source": "sources/new-words.pdf#page=22",
        "id": "fe-mock-2-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Đọc đoạn văn [FE-M2] và chọn từ thích hợp điền vào ＿＿①＿＿:\nきのう、私は　ルームメートと　うみへ　＿＿①＿＿。",
        "options": [
          "およぎに行きました",
          "およぎに行きます",
          "およいで行きました",
          "およぐに行きました"
        ],
        "answer": 0,
        "explanation": "Mẫu mục đích V(bỏ ます) + に行きます (およぎます → およぎ) kết hợp mốc きのう (quá khứ) → およぎに行きました.",
        "origin": "authored",
        "solution": {
          "completed": "きのう、私はルームメートとうみへおよぎに行きました。",
          "meaning": "Hôm qua tôi đã đi biển để bơi cùng bạn cùng phòng.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "Mẫu mục đích V(bỏ ます) + に行きます (およぎます → およぎ) kết hợp mốc きのう (quá khứ) → およぎに行きました.",
            "およぎに行きます chia hiện tại/tương lai, sai với mốc thời gian きのう.",
            "およいで行きました dùng thể て (bơi mà đi), sai cấu trúc mục đích Vに行きます.",
            "およぐに行きました giữ thể từ điển およぐ thay vì gốc bỏ ます およぎ."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m2",
        "passageTitle": "Bài đọc · FE-M2 (Đề luyện FE 02)",
        "passage": "ダナンは　ベトナムの　真ん中（まんなか）に　あります。きれいな　うみが　ありますから、夏は　とても　にぎやかです。きのう、私は　ルームメートと　うみへ　＿＿①＿＿。てんきが　とても　よかったです。よる、ともだちの　うちで　パーティーが　ありました。みんなで　カレーを　つくりました。カレーは　少し　からかったですが、＿＿②＿＿。",
        "id": "fe-mock-2-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-i",
        "prompt": "Đọc đoạn văn [FE-M2] và chọn từ thích hợp điền vào ＿＿②＿＿:\nカレーは　少し　からかったですが、＿＿②＿＿。",
        "options": [
          "とてもおいしいです",
          "あまりおいしかったです",
          "とてもおいしくなかったです",
          "とてもおいしかったです"
        ],
        "answer": 3,
        "explanation": "Liên từ tương phản が (hơi cay nhưng…) và mốc quá khứ (きのう) yêu cầu vế sau tích cực ở quá khứ: とてもおいしかったです.",
        "origin": "authored",
        "solution": {
          "completed": "カレーは少しからかったですが、とてもおいしかったです。",
          "meaning": "Món cà ri hơi cay một chút nhưng rất ngon.",
          "rule": "Quá khứ tính từ đuôi い: khẳng định đổi い → かったです, phủ định đổi い → くなかったです. Ngoại lệ quan trọng: いい → よかったです / よくなかったです.",
          "options": [
            "とてもおいしいです chia hiện tại, lệch thì quá khứ của bữa tiệc hôm qua.",
            "あまりおいしかったです sai vì あまり chỉ đi với dạng phủ định.",
            "とてもおいしくなかったです vừa sai kết hợp とても + phủ định vừa trái nghĩa tương phản của が.",
            "Liên từ tương phản が (hơi cay nhưng…) và mốc quá khứ (きのう) yêu cầu vế sau tích cực ở quá khứ: とてもおいしかったです."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m2",
        "passageTitle": "Bài đọc · FE-M2 (Đề luyện FE 02)",
        "passage": "ダナンは　ベトナムの　真ん中（まんなか）に　あります。きれいな　うみが　ありますから、夏は　とても　にぎやかです。きのう、私は　ルームメートと　うみへ　＿＿①＿＿。てんきが　とても　よかったです。よる、ともだちの　うちで　パーティーが　ありました。みんなで　カレーを　つくりました。カレーは　少し　からかったですが、＿＿②＿＿。",
        "id": "fe-mock-2-29"
      },
      {
        "category": "comprehension",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc đoạn văn [FE-M2] và chọn câu ĐÚNG với nội dung bài đọc:",
        "options": [
          "きのう、ひとりで うみへ 行きました。",
          "よる、レストランで カレーを 食べました。",
          "ダナンは ベトナムの 真ん中に あります。",
          "ダナンは ベトナムの 北（きた）に あります。"
        ],
        "answer": 2,
        "explanation": "Khớp nguyên văn câu đầu tiên trong đoạn văn FE-M2.",
        "origin": "authored",
        "solution": {
          "completed": "ダナンはベトナムの真ん中（まんなか）にあります。",
          "meaning": "Đà Nẵng nằm ở miền Trung (chính giữa) của Việt Nam.",
          "rule": "Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.",
          "options": [
            "Sai người đi cùng: đoạn văn nêu ルームメートと (cùng bạn cùng phòng), không phải ひとりで.",
            "Sai địa điểm ăn tối: đoạn văn nói ともだちのうちで (ở nhà bạn), không phải レストランで.",
            "Khớp nguyên văn câu đầu tiên trong đoạn văn FE-M2.",
            "Sai phương hướng: đoạn văn ghi 真ん中 (miền Trung), không phải 北 (miền Bắc)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m2",
        "passageTitle": "Bài đọc · FE-M2 (Đề luyện FE 02)",
        "passage": "ダナンは　ベトナムの　真ん中（まんなか）に　あります。きれいな　うみが　ありますから、夏は　とても　にぎやかです。きのう、私は　ルームメートと　うみへ　＿＿①＿＿。てんきが　とても　よかったです。よる、ともだちの　うちで　パーティーが　ありました。みんなで　カレーを　つくりました。カレーは　少し　からかったですが、＿＿②＿＿。",
        "id": "fe-mock-2-30"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-mock-3",
    "title": "Đề luyện FE · Đề 03",
    "description": "Biên soạn mới theo đúng ma trận đề thi thật FE JPD123 (30 câu: 3 đọc Hán tự, 3 viết Hán tự, 11 ngữ pháp, 4 hội thoại, 6 từ vựng, 3 đọc hiểu đoạn văn). Chủ đề: Hòa nhạc, so sánh phương tiện & học nấu ăn (phủ Bài 4–7 và Kanji mở rộng).",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-authored",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【先週】、かぞくと動物園へ行きました。",
        "options": [
          "さきしゅう",
          "ぜんしゅう",
          "せんしゅう",
          "せんしゅ"
        ],
        "answer": 2,
        "explanation": "先週 (Tiên Chu: tuần trước) đọc là せんしゅう (có trường âm う ở しゅう, không âm đục ở せん).",
        "origin": "authored",
        "solution": {
          "completed": "先週（せんしゅう）、かぞくと動物園へ行きました。",
          "meaning": "Tuần trước tôi đã đi sở thú cùng gia đình.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "さきしゅう đọc nhầm chữ 先 sang âm Kun さき.",
            "ぜんしゅう thêm âm đục ぜ sai ở chữ 先.",
            "先週 (Tiên Chu: tuần trước) đọc là せんしゅう (có trường âm う ở しゅう, không âm đục ở せん).",
            "せんしゅ thiếu trường âm う ở âm tiết sau (せんしゅ là 選手: tuyển thủ)."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-3-01"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【午後】3時に図書館のまえで会いましょう。",
        "options": [
          "うしろ",
          "ごご",
          "ごぜん",
          "ごこう"
        ],
        "answer": 1,
        "explanation": "午後 (Ngọ Hậu: buổi chiều) đọc theo âm On là ごご.",
        "origin": "authored",
        "solution": {
          "completed": "午後（ごご）3時に図書館のまえで会いましょう。",
          "meaning": "Chúng ta hẹn gặp trước thư viện lúc 3 giờ chiều nhé.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "うしろ là âm Kun của 後 khi đứng riêng (phía sau), không dùng cho 午後.",
            "午後 (Ngọ Hậu: buổi chiều) đọc theo âm On là ごご.",
            "ごぜん là 午前 (buổi sáng), ngược nghĩa với 午後.",
            "ごこう đọc sai chữ 後 sang âm こう thay vì ご."
          ]
        },
        "source": "sources/new-words.pdf#page=9",
        "id": "fe-mock-3-02"
      },
      {
        "category": "reading",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【外国人】のともだちと日本料理を作ります。",
        "options": [
          "がいこくじん",
          "がいこくひと",
          "そとくにじん",
          "かいこくじん"
        ],
        "answer": 0,
        "explanation": "外国人 (Ngoại Quốc Nhân: người nước ngoài) đọc âm On đầy đủ là がいこくじん.",
        "origin": "authored",
        "solution": {
          "completed": "外国人（がいこくじん）のともだちと日本料理を作ります。",
          "meaning": "Tôi nấu món ăn Nhật cùng người bạn nước ngoài.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "外国人 (Ngoại Quốc Nhân: người nước ngoài) đọc âm On đầy đủ là がいこくじん.",
            "がいこくひと ghép nhầm âm Kun ひと cho chữ 人.",
            "そとくにじん đọc nhầm 外・国 sang âm Kun そと・くに.",
            "かいこくじん thiếu âm đục が ở chữ 外."
          ]
        },
        "source": "sources/new-words.pdf#page=2",
        "id": "fe-mock-3-03"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\n京都は東京の【にし】にあります。",
        "options": [
          "東",
          "南",
          "北",
          "西"
        ],
        "answer": 3,
        "explanation": "西 (Tây) đọc là にし (phía tây), thuộc nhóm từ phương hướng Bài 4.",
        "origin": "authored",
        "solution": {
          "completed": "京都は東京の西（にし）にあります。",
          "meaning": "Kyoto nằm ở phía tây của Tokyo.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "東 đọc là ひがし (phía đông), ngược hướng với 西.",
            "南 đọc là みなみ (phía nam).",
            "北 đọc là きた (phía bắc).",
            "西 (Tây) đọc là にし (phía tây), thuộc nhóm từ phương hướng Bài 4."
          ]
        },
        "source": "sources/new-words.pdf#page=12",
        "id": "fe-mock-3-04"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nしゅうまつ、ともだちと【えいが】を見に行きます。",
        "options": [
          "央画",
          "絵画",
          "映画",
          "映田"
        ],
        "answer": 2,
        "explanation": "映画 (Ánh Họa) đọc えいが, nghĩa là bộ phim điện ảnh (từ vựng Bài 5).",
        "origin": "authored",
        "solution": {
          "completed": "しゅうまつ、ともだちと映画（えいが）を見に行きます。",
          "meaning": "Cuối tuần tôi đi xem phim cùng bạn.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "央画 thiếu bộ Nhật 日 bên trái của chữ 映.",
            "絵画 đọc かいが (hội họa/tranh vẽ), không phải phim ảnh えいが.",
            "映画 (Ánh Họa) đọc えいが, nghĩa là bộ phim điện ảnh (từ vựng Bài 5).",
            "映田 sai chữ thứ hai: dùng 田 (ruộng) thay vì 画 (họa)."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-3-05"
      },
      {
        "category": "spelling",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nあそこに【おんな】の人が二人います。",
        "options": [
          "母",
          "女",
          "男",
          "安"
        ],
        "answer": 1,
        "explanation": "女 (Nữ) đọc là おんな; ghép thành 女の人 (người phụ nữ).",
        "origin": "authored",
        "solution": {
          "completed": "あそこに女（おんな）の人が二人います。",
          "meaning": "Ở đằng kia có hai người phụ nữ.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "母 đọc là はは (mẹ), không phải おんな.",
            "女 (Nữ) đọc là おんな; ghép thành 女の人 (người phụ nữ).",
            "男 đọc là おとこ (đàn ông), trái nghĩa với 女.",
            "安 đọc là やすい (rẻ/an toàn), có thêm bộ Miên 宀 ở trên."
          ]
        },
        "source": "sources/new-words.pdf#page=21",
        "id": "fe-mock-3-06"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nえきからホテルまで（　　）10分です。",
        "options": [
          "あるいて",
          "あるきで",
          "あるくで",
          "あるきますで"
        ],
        "answer": 0,
        "explanation": "Đi bộ là trường hợp đặc biệt trong Bài 4: dùng trực tiếp thể て あるいて (không thêm trợ từ で).",
        "origin": "authored",
        "solution": {
          "completed": "えきからホテルまであるいて10分です。",
          "meaning": "Từ nhà ga đến khách sạn đi bộ mất 10 phút.",
          "rule": "Hỏi khoảng thời gian di chuyển dùng AからBまで どのくらいですか (trong tiếng Nhật thực tế どれくらい cũng chuẩn). Trả lời phương tiện dùng で (riêng đi bộ là 歩いて), thời lượng dùng 時間／分くらいです.",
          "options": [
            "Đi bộ là trường hợp đặc biệt trong Bài 4: dùng trực tiếp thể て あるいて (không thêm trợ từ で).",
            "あるきで sai vì đi bộ không dùng gốc ます + で.",
            "あるくで sai ngữ pháp (không gắn で sau động từ thể từ điển).",
            "あるきますで sai hoàn toàn vì không ghép で sau dạng ます."
          ]
        },
        "source": "sources/speaking.pdf#page=26",
        "id": "fe-mock-3-07"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-negative",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきょうのてんきはあまり（　　）。",
        "options": [
          "いいくないです",
          "いいじゃありません",
          "よかったです",
          "よくないです"
        ],
        "answer": 3,
        "explanation": "Phó từ あまり đi với phủ định; tính từ ngoại lệ いい chia phủ định hiện tại là よくないです (khớp きょう).",
        "origin": "authored",
        "solution": {
          "completed": "きょうのてんきはあまりよくないです。",
          "meaning": "Thời tiết hôm nay không đẹp lắm.",
          "rule": "Phủ định hiện tại: tính từ đuôi い đổi い → くないです (ngoại lệ いい → よくないです); tính từ đuôi な và danh từ dùng じゃありません／ではありません (không chia くない).",
          "options": [
            "いいくないです chia sai vì quên đổi thân từ いい → よい.",
            "いいじゃありません dùng đuôi phủ định của tính từ な cho tính từ い.",
            "よかったです vừa là khẳng định (sai với あまり) vừa chia quá khứ.",
            "Phó từ あまり đi với phủ định; tính từ ngoại lệ いい chia phủ định hiện tại là よくないです (khớp きょう)."
          ]
        },
        "source": "sources/speaking.pdf#page=28",
        "id": "fe-mock-3-08"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうのよる、このレストランはあまり（　　）。",
        "options": [
          "しずかでした",
          "しずかくなかったです",
          "しずかじゃありませんでした",
          "しずかじゃありません"
        ],
        "answer": 2,
        "explanation": "しずか là tính từ đuôi な; kết hợp きのうのよる (quá khứ) và あまり (phủ định) → しずかじゃありませんでした.",
        "origin": "authored",
        "solution": {
          "completed": "きのうのよる、このレストランはあまりしずかじゃありませんでした。",
          "meaning": "Tối qua nhà hàng này đã không yên tĩnh lắm.",
          "rule": "Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.",
          "options": [
            "しずかでした là khẳng định quá khứ, không đi với あまり.",
            "しずかくなかったです chia nhầm theo quy tắc tính từ đuôi い.",
            "しずか là tính từ đuôi な; kết hợp きのうのよる (quá khứ) và あまり (phủ định) → しずかじゃありませんでした.",
            "しずかじゃありません là phủ định hiện tại, lệch thì với きのうのよる."
          ]
        },
        "source": "sources/speaking.pdf#page=36",
        "id": "fe-mock-3-09"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-like",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n私は甘いくだもの（　　）大好きです。",
        "options": [
          "で",
          "が",
          "を",
          "に"
        ],
        "answer": 1,
        "explanation": "Tính từ chỉ sở thích 好き・大好き・嫌い dùng trợ từ が đánh dấu đối tượng: Nが大好きです.",
        "origin": "authored",
        "solution": {
          "completed": "私は甘いくだものが大好きです。",
          "meaning": "Tôi rất thích trái cây ngọt.",
          "rule": "Nói thích hoặc ghét một đối tượng dùng N が 好きです／嫌いです. 好き và 嫌い đều là tính từ đuôi な nên phủ định là 好きじゃありません và bổ nghĩa danh từ cần な.",
          "options": [
            "で chỉ địa điểm/phương tiện, sai cấu trúc của 大好き.",
            "Tính từ chỉ sở thích 好き・大好き・嫌い dùng trợ từ が đánh dấu đối tượng: Nが大好きです.",
            "を dùng cho ngoại động từ hành động, không dùng với tính từ 大好き.",
            "に chỉ đích/nơi tồn tại, không đánh dấu đối tượng của 大好き."
          ]
        },
        "source": "sources/speaking.pdf#page=38",
        "id": "fe-mock-3-10"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nコーヒーと おちゃと、どちら（　　）のみたいですか。",
        "options": [
          "が",
          "を",
          "は",
          "で"
        ],
        "answer": 0,
        "explanation": "Mẫu so sánh lựa chọn 2 đối tượng dùng どちらが trước tính từ / Vたい: N1とN2と、どちらが〜ですか.",
        "origin": "authored",
        "solution": {
          "completed": "コーヒーとおちゃと、どちらがのみたいですか。",
          "meaning": "Giữa cà phê và trà, bạn muốn uống thứ nào hơn?",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "Mẫu so sánh lựa chọn 2 đối tượng dùng どちらが trước tính từ / Vたい: N1とN2と、どちらが〜ですか.",
            "を không dùng trong mẫu chuẩn どちらが＋tính từ/Vたい ở trình độ Dekiru Bài 6.",
            "は không đi sau nghi vấn từ どちら làm chủ ngữ câu hỏi.",
            "で không đứng sau どちら để chọn một trong hai đồ uống."
          ]
        },
        "source": "sources/speaking.pdf#page=47",
        "id": "fe-mock-3-11"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n一年（　　）いつが いちばん すずしいですか。",
        "options": [
          "に",
          "が",
          "を",
          "で"
        ],
        "answer": 3,
        "explanation": "Phạm vi so sánh nhất dùng trợ từ で: 一年で + いつが + いちばん + tính từ.",
        "origin": "authored",
        "solution": {
          "completed": "一年でいつがいちばんすずしいですか。",
          "meaning": "Trong một năm, lúc nào mát mẻ nhất?",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "に không đánh dấu phạm vi so sánh nhất với いちばん.",
            "が đã dùng sau いつ (いつがいちばん), không dùng sau 一年.",
            "を không dùng để chỉ phạm vi thời gian so sánh.",
            "Phạm vi so sánh nhất dùng trợ từ で: 一年で + いつが + いちばん + tính từ."
          ]
        },
        "source": "sources/speaking.pdf#page=46",
        "id": "fe-mock-3-12"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-there",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきっさてんの まえに 白いいぬが（　　）。",
        "options": [
          "します",
          "いきます",
          "います",
          "あります"
        ],
        "answer": 2,
        "explanation": "いぬ (con chó) là động vật sống nên động từ tồn tại đúng là います.",
        "origin": "authored",
        "solution": {
          "completed": "きっさてんのまえに白いいぬがいます。",
          "meaning": "Trước quán cà phê có một con chó màu trắng.",
          "rule": "Giới thiệu có gì hoặc có ai tại một nơi dùng địa điểm に + Nが + あります／います. に đánh dấu nơi tồn tại, が nêu đối tượng mới; います dùng cho người và động vật, あります cho đồ vật/cây.",
          "options": [
            "します nghĩa là làm, không diễn đạt sự tồn tại tại vị trí ～に.",
            "いきます nghĩa là đi, không hợp với trợ từ vị trí tĩnh まえに + が.",
            "いぬ (con chó) là động vật sống nên động từ tồn tại đúng là います.",
            "あります chỉ dùng cho đồ vật bất động và cây cối, không dùng cho động vật."
          ]
        },
        "source": "sources/speaking.pdf#page=62",
        "id": "fe-mock-3-13"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nあしたのパーティーに ジュースを（　　）ください。",
        "options": [
          "もってき",
          "もってきて",
          "もってきって",
          "もってくって"
        ],
        "answer": 1,
        "explanation": "もってきます (mang đến) biến đổi theo động từ bất quy tắc 来る → 来て (きて) → もってきてください.",
        "origin": "authored",
        "solution": {
          "completed": "あしたのパーティーにジュースをもってきてください。",
          "meaning": "Ngày mai xin hãy mang nước ép đến bữa tiệc nhé.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "もってき là gốc bỏ ます, không gắn trực tiếp trước ください.",
            "もってきます (mang đến) biến đổi theo động từ bất quy tắc 来る → 来て (きて) → もってきてください.",
            "もってきって thêm âm ngắt っ sai (đó là dạng của 切ります, không phải 来ます).",
            "もってくって sai hoàn toàn quy tắc chia thể て của 来る."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-3-14"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこのかんじの（　　）を おしえてください。",
        "options": [
          "よみかた",
          "よむかた",
          "よんでかた",
          "よみ"
        ],
        "answer": 0,
        "explanation": "Mẫu \"cách làm\": V(bỏ ます) + かた → よみます bỏ ます thành よみ + かた = よみかた.",
        "origin": "authored",
        "solution": {
          "completed": "このかんじのよみかたをおしえてください。",
          "meaning": "Xin hãy chỉ cho tôi cách đọc chữ Hán này.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "Mẫu \"cách làm\": V(bỏ ます) + かた → よみます bỏ ます thành よみ + かた = よみかた.",
            "よむかた ghép かた sau thể từ điển よむ thay vì gốc bỏ ます よみ.",
            "よんでかた ghép かた sau thể て よんで, sai ngữ pháp.",
            "よみ thiếu hậu tố かた nên không rõ nghĩa \"cách đọc\" theo mẫu Bài 7."
          ]
        },
        "source": "sources/speaking.pdf#page=73",
        "id": "fe-mock-3-15"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-which",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n（　　）ケーキが いちばん あまいですか。",
        "options": [
          "どれ",
          "だれ",
          "どこ",
          "どの"
        ],
        "answer": 3,
        "explanation": "Đứng trực tiếp bổ nghĩa cho danh từ ケーキ (trong số từ 3 chiếc trở lên) bắt buộc dùng どの.",
        "origin": "authored",
        "solution": {
          "completed": "どのケーキがいちばんあまいですか。",
          "meaning": "Chiếc bánh ngọt nào ngọt nhất vậy?",
          "rule": "どの phải đứng trước một danh từ (どの皿); どれ tự thay cho vật và không đứng trực tiếp trước danh từ (皿はどれですか). Chọn đúng hình thức theo chỗ trống và đối tượng, không chỉ dịch cả hai thành cái nào.",
          "options": [
            "どれ là đại từ độc lập, không thể đứng ngay trước danh từ ケーキ.",
            "だれ dùng để hỏi người, không đứng trước ケーキ.",
            "どこ dùng để hỏi địa điểm, không đứng trực tiếp trước danh từ ケーキ.",
            "Đứng trực tiếp bổ nghĩa cho danh từ ケーキ (trong số từ 3 chiếc trở lên) bắt buộc dùng どの."
          ]
        },
        "source": "sources/speaking.pdf#page=64",
        "id": "fe-mock-3-16"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n見てください。あそこで 子どもたちが ピアノを（　　）。",
        "options": [
          "ひきましょう",
          "ひいてください",
          "ひいています",
          "ひきました"
        ],
        "answer": 2,
        "explanation": "Câu gọi chú ý 見てください (hãy nhìn kìa) xác định hành động đang diễn ra trước mắt: Vています → ひいています.",
        "origin": "authored",
        "solution": {
          "completed": "あそこで子どもたちがピアノをひいています。",
          "meaning": "Hãy nhìn kìa. Ở đằng kia các em nhỏ đang chơi đàn piano.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "ひきましょう là lời rủ cùng chơi, không hợp chủ ngữ 子どもたちが.",
            "ひいてください là lời nhờ vả, không thể dùng để tường thuật hành động của 子どもたちが.",
            "Câu gọi chú ý 見てください (hãy nhìn kìa) xác định hành động đang diễn ra trước mắt: Vています → ひいています.",
            "ひきました chia quá khứ (đã chơi), mâu thuẫn với 見てください ngay lúc này."
          ]
        },
        "source": "sources/speaking.pdf#page=66",
        "id": "fe-mock-3-17"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-invite",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: あした、いっしょに ランチを 食べませんか。\nB: （　　）。何時に 会いますか。",
        "options": [
          "もう食べました",
          "ええ、ぜひ食べましょう",
          "すみません、あしたはちょっと",
          "いいえ、食べませんでした"
        ],
        "answer": 1,
        "explanation": "Vế sau hỏi giờ hẹn 何時に会いますか chứng tỏ B đồng ý nhận lời rủ → ええ、ぜひ食べましょう.",
        "origin": "authored",
        "solution": {
          "completed": "B: ええ、ぜひ食べましょう。何時に会いますか。",
          "meaning": "A: Ngày mai cùng ăn trưa nhé? — B: Ừ, nhất định cùng ăn nhé! Mấy giờ gặp nhau?",
          "rule": "Rủ cùng làm dùng gốc trước ます + ませんか; nhận lời hoặc đề nghị cùng làm dùng ましょう. Từ chối nhẹ bằng …はちょっと… và lý do. Chọn lời đáp đúng ý định đã nêu, không chỉ dựa vào câu có đúng ngữ pháp hay không.",
          "options": [
            "もう食べました nói đã ăn xong rồi, vô lý với lịch hẹn ngày mai.",
            "Vế sau hỏi giờ hẹn 何時に会いますか chứng tỏ B đồng ý nhận lời rủ → ええ、ぜひ食べましょう.",
            "すみません、あしたはちょっと là lời từ chối, mâu thuẫn với việc hỏi giờ hẹn ngay sau đó.",
            "いいえ、食べませんでした trả lời quá khứ phủ định, sai với lời rủ cho ngày mai."
          ]
        },
        "source": "sources/speaking.pdf#page=43",
        "id": "fe-mock-3-18"
      },
      {
        "category": "dialogue",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-reason",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: きのう、どうして コンサートへ 行きませんでしたか。\nB: （　　）。",
        "options": [
          "しごとが いそがしかったですから",
          "はい、行きました",
          "コンサートは たのしいです",
          "チケットは 二枚です"
        ],
        "answer": 0,
        "explanation": "Hỏi lý do quá khứ どうして…行きませんでしたか đáp bằng nguyên nhân quá khứ + から: いそがしかったですから.",
        "origin": "authored",
        "solution": {
          "completed": "B: しごとがいそがしかったですから。",
          "meaning": "A: Hôm qua tại sao bạn đã không đi xem hòa nhạc? — B: Vì công việc rất bận.",
          "rule": "Hỏi lý do dùng どうして…ですか／ましたか; trả lời nêu nguyên nhân dùng [Lý do] から (đặt cuối câu đáp hoặc nối 2 vế [Nguyên nhân]から、[Kết quả]). Chú ý đồng nhất thì giữa hai vế.",
          "options": [
            "Hỏi lý do quá khứ どうして…行きませんでしたか đáp bằng nguyên nhân quá khứ + から: いそがしかったですから.",
            "はい、行きました trả lời Có/Không, không trả lời được câu hỏi nguyên nhân どうして.",
            "コンサートはたのしいです chỉ nhận xét chung ở hiện tại, không giải thích lý do không đi.",
            "チケットは二枚です nêu số lượng vé, không trả lời câu hỏi tại sao."
          ]
        },
        "source": "sources/speaking.pdf#page=37",
        "id": "fe-mock-3-19"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-particles",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống (B xác nhận lại giờ hẹn vừa thống nhất):\nA: じゃ、土曜日 9時に えきで 会いましょう。\nB: 9時です（　　）。わかりました。",
        "options": [
          "か",
          "を",
          "へ",
          "ね"
        ],
        "answer": 3,
        "explanation": "Tiểu từ ね sau 9時です dùng để xác nhận lại thông tin thời gian vừa thống nhất với đối phương.",
        "origin": "authored",
        "solution": {
          "completed": "B: 9時ですね。わかりました。",
          "meaning": "A: Vậy thứ bảy 9 giờ gặp nhau ở nhà ga nhé. — B: 9 giờ phải không ạ. Tôi rõ rồi.",
          "rule": "よ báo thông tin mới người nói cung cấp; ね dùng xác nhận thông tin vừa thống nhất hoặc tìm đồng tình. Trong bài tập này ý định được nêu rõ bằng tiếng Việt để phân biệt hai đuôi câu vốn đều có thể đúng ở những ngữ cảnh khác.",
          "options": [
            "か tạo cảm giác nghi ngờ hỏi lại thay vì xác nhận đồng thuận nhẹ nhàng cùng わかりました.",
            "を là trợ từ tân ngữ, không thể đặt sau です.",
            "へ là trợ từ chỉ hướng, không thể đứng sau です.",
            "Tiểu từ ね sau 9時です dùng để xác nhận lại thông tin thời gian vừa thống nhất với đối phương."
          ]
        },
        "source": "sources/speaking.pdf#page=49",
        "id": "fe-mock-3-20"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-request",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: すみません、そのしおを（　　）。\nB: はい、どうぞ。",
        "options": [
          "とりますか",
          "とっていません",
          "とってください",
          "とりましたか"
        ],
        "answer": 2,
        "explanation": "B đáp はい、どうぞ (đưa vật cho A) nên A đang nhờ lấy đồ bằng mẫu Vてください: とってください.",
        "origin": "authored",
        "solution": {
          "completed": "A: すみません、そのしおをとってください。B: はい、どうぞ。",
          "meaning": "A: Xin lỗi, phiền bạn lấy giúp tôi lọ muối đó. — B: Vâng, mời bạn.",
          "rule": "Nhờ người nghe làm việc dùng động từ thể て + ください. Chia thể て trước rồi gắn ください; không thêm cả ます. Phân biệt người nghe được nhờ làm với lời người nói chủ động đề nghị giúp bằng ましょうか.",
          "options": [
            "とりますか chỉ là câu hỏi xác nhận hành động, không lịch sự/phù hợp như nhờ vả とってください.",
            "とっていません nghĩa là \"không lấy/chưa lấy\", không khớp hoàn toàn với はい、どうぞ.",
            "B đáp はい、どうぞ (đưa vật cho A) nên A đang nhờ lấy đồ bằng mẫu Vてください: とってください.",
            "とりましたか hỏi quá khứ \"đã lấy chưa\", không phải lời nhờ chuyển lọ muối."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-3-21"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nパーティーで みんなで たのしく うたを（　　）。",
        "options": [
          "あらいました",
          "うたいました",
          "ひきました",
          "かきました"
        ],
        "answer": 1,
        "explanation": "うた (bài hát) đi cố định với động từ 歌います (うたいます: hát) → うたいました.",
        "origin": "authored",
        "solution": {
          "completed": "パーティーでみんなでたのしくうたをうたいました。",
          "meaning": "Ở bữa tiệc mọi người đã hát hò rất vui vẻ.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "あらいます nghĩa là rửa, hoàn toàn sai nghĩa với bài hát.",
            "うた (bài hát) đi cố định với động từ 歌います (うたいます: hát) → うたいました.",
            "ひきます dùng cho chơi nhạc cụ (đàn guitar/piano), không dùng cho うたを.",
            "かきます nghĩa là viết/vẽ, không phù hợp với hoạt động ca hát vui vẻ ở tiệc."
          ]
        },
        "source": "sources/new-words.pdf#page=23",
        "id": "fe-mock-3-22"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきょうは（　　）が ありますから、いっしょに かえれません。",
        "options": [
          "ようじ",
          "けしき",
          "きせつ",
          "コップ"
        ],
        "answer": 0,
        "explanation": "ようじ (用事: việc bận) kết hợp chuẩn với がありますから để giải thích lý do không đi cùng được.",
        "origin": "authored",
        "solution": {
          "completed": "きょうはようじがありますから、いっしょにかえれません。",
          "meaning": "Vì hôm nay có việc bận nên tôi không thể về cùng được.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ようじ (用事: việc bận) kết hợp chuẩn với がありますから để giải thích lý do không đi cùng được.",
            "けしき (phong cảnh) không hợp lý do không thể về cùng.",
            "きせつ (mùa) không đi với mẫu がありますから để từ chối.",
            "コップ (cốc, ly) không phải lý do bận việc."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-3-23"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこの かいしゃの ビルは とても（　　）です。30かい あります。",
        "options": [
          "ひくい",
          "せまい",
          "ふるい",
          "たかい"
        ],
        "answer": 3,
        "explanation": "Dữ kiện 30かいあります (có 30 tầng) xác định tòa nhà rất cao → たかい (高い).",
        "origin": "authored",
        "solution": {
          "completed": "このかいしゃのビルはとてもたかいです。30かいあります。",
          "meaning": "Tòa nhà công ty này rất cao. Có tới 30 tầng.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ひくい nghĩa là thấp, trái ngược với tòa nhà 30 tầng.",
            "せまい nghĩa là chật hẹp, không suy ra từ số tầng 30.",
            "ふるい nghĩa là cũ, dữ kiện 30 tầng không nói tòa nhà cũ.",
            "Dữ kiện 30かいあります (có 30 tầng) xác định tòa nhà rất cao → たかい (高い)."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-3-24"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうのよる、へやを きれいに（　　）。",
        "options": [
          "せんたくしました",
          "けんがくしました",
          "そうじしました",
          "さんぽしました"
        ],
        "answer": 2,
        "explanation": "へやをきれいに (làm căn phòng sạch đẹp) đi tự nhiên nhất với そうじしました (đã dọn dẹp).",
        "origin": "authored",
        "solution": {
          "completed": "きのうのよる、へやをきれいにそうじしました。",
          "meaning": "Tối hôm qua tôi đã dọn dẹp phòng sạch sẽ.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "せんたくしました nghĩa là giặt giũ (quần áo), không dùng cho căn phòng.",
            "けんがくしました nghĩa là tham quan học tập, không hợp với へやをきれいに.",
            "へやをきれいに (làm căn phòng sạch đẹp) đi tự nhiên nhất với そうじしました (đã dọn dẹp).",
            "さんぽしました nghĩa là đi dạo, không nhận tân ngữ へやを."
          ]
        },
        "source": "sources/new-words.pdf#page=15",
        "id": "fe-mock-3-25"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn từ KHÁC LOẠI trong các từ sau:\n①でんしゃ / ②バス / ③ひこうき / ④スープ",
        "options": [
          "ひこうき",
          "スープ",
          "でんしゃ",
          "バス"
        ],
        "answer": 1,
        "explanation": "でんしゃ (tàu điện), バス (xe buýt), ひこうき (máy bay) đều là phương tiện giao thông; スープ là món súp.",
        "origin": "authored",
        "solution": {
          "completed": "スープ（súp）khác nhóm phương tiện giao thông（でんしゃ・バス・ひこうき）.",
          "meaning": "スープ (món súp) là đồ ăn, không phải phương tiện đi lại.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "ひこうき (máy bay) thuộc nhóm phương tiện giao thông.",
            "でんしゃ (tàu điện), バス (xe buýt), ひこうき (máy bay) đều là phương tiện giao thông; スープ là món súp.",
            "でんしゃ (tàu điện) thuộc nhóm phương tiện giao thông.",
            "バス (xe buýt) thuộc nhóm phương tiện giao thông."
          ]
        },
        "source": "sources/new-words.pdf#page=12",
        "id": "fe-mock-3-26"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn từ KHÔNG CÙNG NHÓM スポーツ（thể thao） trong các từ sau:\n①サッカー / ②やきゅう / ③テニス / ④ジャズ",
        "options": [
          "ジャズ",
          "サッカー",
          "やきゅう",
          "テニス"
        ],
        "answer": 0,
        "explanation": "サッカー (bóng đá), やきゅう (bóng chày), テニス (quần vợt) đều là môn thể thao; ジャズ là thể loại nhạc.",
        "origin": "authored",
        "solution": {
          "completed": "ジャズ（nhạc jazz）không thuộc nhóm スポーツ（サッカー・やきゅう・テニス）.",
          "meaning": "Nhạc jazz (ジャズ) là thể loại âm nhạc, không phải môn thể thao.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "サッカー (bóng đá), やきゅう (bóng chày), テニス (quần vợt) đều là môn thể thao; ジャズ là thể loại nhạc.",
            "サッカー (bóng đá) là môn thể thao.",
            "やきゅう (bóng chày) là môn thể thao.",
            "テニス (quần vợt) là môn thể thao."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-3-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Đọc đoạn văn [FE-M3] và chọn từ thích hợp điền vào ＿＿①＿＿:\n午前、図書館へ　本を　＿＿①＿＿。",
        "options": [
          "かりに行きました",
          "かりて行きます",
          "かします",
          "かりに行きます"
        ],
        "answer": 3,
        "explanation": "Toàn đoạn nói về kế hoạch ngày mai (あしたは日曜日) và đi thư viện để mượn sách → かりに行きます.",
        "origin": "authored",
        "solution": {
          "completed": "午前、図書館へ本をかりに行きます。",
          "meaning": "Buổi sáng tôi đi đến thư viện để mượn sách.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "かりに行きました chia quá khứ, sai với mốc thời gian あした (ngày mai).",
            "かりて行きます dùng thể て thay vì gốc ます + に, sai cấu trúc mục đích.",
            "かします nghĩa là cho mượn và không đi với 図書館へ để chỉ mục đích mượn sách.",
            "Toàn đoạn nói về kế hoạch ngày mai (あしたは日曜日) và đi thư viện để mượn sách → かりに行きます."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m3",
        "passageTitle": "Bài đọc · FE-M3 (Đề luyện FE 03)",
        "passage": "あしたは　日曜日ですから、会社は　休みです。午前、図書館へ　本を　＿＿①＿＿。午後、ともだちと　クラシックの　コンサートへ　行きます。チケットが　2枚　あります。コンサートは　2時から　4時までです。そのあと、ともだちの　家で　日本料理の　＿＿②＿＿を　ならいます。とても　たのしみ（mong chờ）です。",
        "id": "fe-mock-3-28"
      },
      {
        "category": "comprehension",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-how",
        "prompt": "Đọc đoạn văn [FE-M3] và chọn từ thích hợp điền vào ＿＿②＿＿:\nそのあと、ともだちの　家で　日本料理の　＿＿②＿＿を　ならいます。",
        "options": [
          "つくり",
          "つくってかた",
          "つくりかた",
          "つくかた"
        ],
        "answer": 2,
        "explanation": "Cấu trúc \"cách làm món ăn Nhật\": 日本料理の + V(bỏ ます) + かた → つくります → つくりかた.",
        "origin": "authored",
        "solution": {
          "completed": "そのあと、ともだちの家で日本料理のつくりかたをならいます。",
          "meaning": "Sau đó tôi sẽ học cách nấu món ăn Nhật tại nhà bạn.",
          "rule": "Cách làm một việc dùng gốc trước ます + 方（かた）: 使います → 使い方. Với đối tượng danh từ, dùng NのV方: この漢字の書き方. Không gắn 方 sau toàn bộ ます hoặc sau thể て.",
          "options": [
            "つくり thiếu hậu tố かた nên không có nghĩa \"cách làm\".",
            "つくってかた gắn かた sau thể て, sai ngữ pháp.",
            "Cấu trúc \"cách làm món ăn Nhật\": 日本料理の + V(bỏ ます) + かた → つくります → つくりかた.",
            "つくかた cắt sai gốc từ điển thay vì gốc ます つくり."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m3",
        "passageTitle": "Bài đọc · FE-M3 (Đề luyện FE 03)",
        "passage": "あしたは　日曜日ですから、会社は　休みです。午前、図書館へ　本を　＿＿①＿＿。午後、ともだちと　クラシックの　コンサートへ　行きます。チケットが　2枚　あります。コンサートは　2時から　4時までです。そのあと、ともだちの　家で　日本料理の　＿＿②＿＿を　ならいます。とても　たのしみ（mong chờ）です。",
        "id": "fe-mock-3-29"
      },
      {
        "category": "comprehension",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc đoạn văn [FE-M3] và trả lời câu hỏi:\nあしたの午後、何（なに）をしますか。",
        "options": [
          "コンサートの チケットを 3枚 かいます。",
          "ともだちと クラシックの コンサートへ 行きます。",
          "会社で しごとを します。",
          "午後、図書館で 本を かります。"
        ],
        "answer": 1,
        "explanation": "Khớp trực tiếp câu thứ 3 trong đoạn văn FE-M3.",
        "origin": "authored",
        "solution": {
          "completed": "午後、ともだちとクラシックのコンサートへ行きます。",
          "meaning": "Buổi chiều ngày mai đi xem hòa nhạc cổ điển cùng bạn.",
          "rule": "Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.",
          "options": [
            "Sai chi tiết: người viết đã có sẵn 2 vé (チケットが2枚あります), không phải mua 3 vé.",
            "Khớp trực tiếp câu thứ 3 trong đoạn văn FE-M3.",
            "Sai: đoạn văn ghi あしたは日曜日ですから、会社は休みです (công ty nghỉ).",
            "Sai thời gian: việc đến thư viện mượn sách diễn ra vào buổi sáng (午前), không phải buổi chiều (午後)."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m3",
        "passageTitle": "Bài đọc · FE-M3 (Đề luyện FE 03)",
        "passage": "あしたは　日曜日ですから、会社は　休みです。午前、図書館へ　本を　＿＿①＿＿。午後、ともだちと　クラシックの　コンサートへ　行きます。チケットが　2枚　あります。コンサートは　2時から　4時までです。そのあと、ともだちの　家で　日本料理の　＿＿②＿＿を　ならいます。とても　たのしみ（mong chờ）です。",
        "id": "fe-mock-3-30"
      }
    ],
    "contentVersion": "2026-11-21"
  },
  {
    "id": "fe-mock-4",
    "title": "Đề luyện FE · Đề 04",
    "description": "Biên soạn mới theo đúng ma trận đề thi thật FE JPD123 (30 câu: 3 đọc Hán tự, 3 viết Hán tự, 11 ngữ pháp, 4 hội thoại, 6 từ vựng, 3 đọc hiểu đoạn văn). Chủ đề: Tổng ôn 4 bài JPD123, du lịch tháng 8 & Kanji ghép mở rộng.",
    "lessons": [
      4,
      5,
      6,
      7
    ],
    "minutes": 30,
    "kind": "fe-authored",
    "tags": [
      "Thi FE"
    ],
    "questions": [
      {
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【来年】の夏、にほんへ旅行に行きたいです。",
        "options": [
          "れいねん",
          "らいねん",
          "らいとし",
          "きねん"
        ],
        "answer": 1,
        "explanation": "来年 (Lai Niên: năm sau) đọc theo âm On chuẩn là らいねん.",
        "origin": "authored",
        "solution": {
          "completed": "来年（らいねん）の夏、にほんへ旅行に行きたいです。",
          "meaning": "Mùa hè năm sau tôi muốn đi du lịch Nhật Bản.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "れいねん đọc sai nguyên âm chữ 来 thành れい (đúng là らいねん).",
            "来年 (Lai Niên: năm sau) đọc theo âm On chuẩn là らいねん.",
            "らいとし ghép nhầm âm Kun とし cho chữ 年.",
            "きねん đọc sai chữ 来 thành き (きねん là 記念: kỷ niệm)."
          ]
        },
        "source": "sources/new-words.pdf#page=17",
        "id": "fe-mock-4-01"
      },
      {
        "category": "reading",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\nこの公園には【大きい】木がたくさんあります。",
        "options": [
          "おおきい",
          "おきい",
          "だいきい",
          "おおき"
        ],
        "answer": 0,
        "explanation": "Tính từ đuôi い 大きい đọc đầy đủ là おおきい (có hai chữ お liên tiếp).",
        "origin": "authored",
        "solution": {
          "completed": "この公園には大きい（おおきい）木がたくさんあります。",
          "meaning": "Trong công viên này có rất nhiều cây to.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "Tính từ đuôi い 大きい đọc đầy đủ là おおきい (có hai chữ お liên tiếp).",
            "おきい thiếu một chữ お ở âm đầu.",
            "だいきい ghép sai âm On だい với đuôi きい.",
            "おおき thiếu đuôi い của tính từ đuôi い khi bổ nghĩa 木 (dạng đặc biệt là 大きな, không phải おおき)."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-4-02"
      },
      {
        "category": "reading",
        "lesson": 6,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn cách đọc đúng của chữ Hán trong ngoặc:\n【今週】の金曜日にテストがあります。",
        "options": [
          "こんしゅ",
          "いましゅう",
          "こじゅう",
          "こんしゅう"
        ],
        "answer": 3,
        "explanation": "今週 (Kim Chu: tuần này) đọc theo âm On là こんしゅう (có trường âm う).",
        "origin": "authored",
        "solution": {
          "completed": "今週（こんしゅう）の金曜日にテストがあります。",
          "meaning": "Thứ sáu tuần này có bài kiểm tra.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "こんしゅ thiếu trường âm う ở âm tiết sau.",
            "いましゅう ghép sai âm Kun いま cho chữ 今.",
            "こじゅう thiếu âm ん và thêm âm đục じ sai ở chữ 週.",
            "今週 (Kim Chu: tuần này) đọc theo âm On là こんしゅう (có trường âm う)."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-4-03"
      },
      {
        "category": "spelling",
        "lesson": 4,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nサパはベトナムの【きた】にあります。",
        "options": [
          "東",
          "比",
          "北",
          "南"
        ],
        "answer": 2,
        "explanation": "北 (Bắc) đọc là きた (phía bắc), thuộc bộ phương hướng Bài 4.",
        "origin": "authored",
        "solution": {
          "completed": "サパはベトナムの北（きた）にあります。",
          "meaning": "Sa Pa nằm ở phía bắc của Việt Nam.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "東 đọc là ひがし (phía đông).",
            "比 đọc là くらべる (so sánh), nhìn hơi giống nhưng khác nét với 北.",
            "北 (Bắc) đọc là きた (phía bắc), thuộc bộ phương hướng Bài 4.",
            "南 đọc là みなみ (phía nam), ngược hướng với 北."
          ]
        },
        "source": "sources/new-words.pdf#page=12",
        "id": "fe-mock-4-04"
      },
      {
        "category": "spelling",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nこのカメラはとても【やすい】ですから、買いたいです。",
        "options": [
          "定い",
          "安い",
          "高い",
          "女い"
        ],
        "answer": 1,
        "explanation": "安い (An) đọc やすい, nghĩa là rẻ; cấu tạo gồm bộ Miên 宀 trên chữ 女.",
        "origin": "authored",
        "solution": {
          "completed": "このカメラはとても安い（やすい）ですから、買いたいです。",
          "meaning": "Chiếc máy ảnh này rất rẻ nên tôi muốn mua.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "定い dùng sai chữ 定 (định) thay cho chữ 安.",
            "安い (An) đọc やすい, nghĩa là rẻ; cấu tạo gồm bộ Miên 宀 trên chữ 女.",
            "高い đọc たかい (đắt, cao), trái nghĩa với やすい.",
            "女い thiếu bộ 宀 ở phía trên chữ 女, không phải tính từ hợp lệ."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-4-05"
      },
      {
        "category": "spelling",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn chữ Hán tương ứng với từ trong ngoặc:\nコンビニでつめたい【のみもの】を買いました。",
        "options": [
          "飲み物",
          "食べ物",
          "飲者",
          "飯み物"
        ],
        "answer": 0,
        "explanation": "飲み物 (Ẩm Vật) đọc のみもの (đồ uống), gồm 飲 + み + 物.",
        "origin": "authored",
        "solution": {
          "completed": "コンビニでつめたい飲み物（のみもの）を買いました。",
          "meaning": "Tôi đã mua đồ uống lạnh ở cửa hàng tiện lợi.",
          "rule": "Đối chiếu mặt chữ Hán, âm đọc (On-yomi / Kun-yomi / đọc đặc biệt) và ngữ cảnh câu trong chương trình JPD123 (Dekiru Nihongo Bài 1–7 và từ ghép Kanji mở rộng). Phân biệt kỹ âm đục, trường âm, okurigana và các bộ thủ dễ nhầm lẫn.",
          "options": [
            "飲み物 (Ẩm Vật) đọc のみもの (đồ uống), gồm 飲 + み + 物.",
            "食べ物 đọc たべもの (đồ ăn), khác nghĩa với のみもの.",
            "飲者 thiếu okurigana み và dùng sai chữ 者 (người) thay cho 物.",
            "飯み物 dùng sai chữ 飯 (cơm) thay cho chữ 飲 (uống)."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-4-06"
      },
      {
        "category": "grammar",
        "lesson": 4,
        "topic": 1,
        "unit": "g4-modifier",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nダラットは（　　）ところですか。\n― とてもきれいなところです。",
        "options": [
          "どう",
          "どれ",
          "なに",
          "どんな"
        ],
        "answer": 3,
        "explanation": "Đứng ngay trước danh từ ところ để hỏi tính chất, đặc điểm dùng どんな + Nですか.",
        "origin": "authored",
        "solution": {
          "completed": "ダラットはどんなところですか。― とてもきれいなところです。",
          "meaning": "Đà Lạt là một nơi như thế nào? — Là một nơi rất đẹp.",
          "rule": "Bổ nghĩa danh từ: tính từ い + N (古い町), tính từ な + な + N (きれいなところ). Hỏi đặc điểm của danh từ dùng どんな + N ですか; tránh bỏ thiếu な sau tính từ đuôi な như きれい.",
          "options": [
            "どう không đứng trực tiếp trước danh từ ところ (phải dùng ダラットはどうですか).",
            "どれ là đại từ chọn 1 vật, không đặt trực tiếp trước danh từ ところ.",
            "なに hỏi \"là cái gì\", không khớp với câu trả lời miêu tả tính chất とてもきれいなところ.",
            "Đứng ngay trước danh từ ところ để hỏi tính chất, đặc điểm dùng どんな + Nですか."
          ]
        },
        "source": "sources/speaking.pdf#page=28",
        "id": "fe-mock-4-07"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 0,
        "unit": "g5-past",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nきのうは とても つかれましたから、テレビを（　　）。",
        "options": [
          "見ましたです",
          "見ませんでしたです",
          "見ませんでした",
          "見ません"
        ],
        "answer": 2,
        "explanation": "Mốc quá khứ きのう và vế nhân quả rất mệt đi với quá khứ phủ định lịch sự 見ませんでした.",
        "origin": "authored",
        "solution": {
          "completed": "きのうはとてもつかれましたから、テレビを見ませんでした。",
          "meaning": "Hôm qua vì rất mệt nên tôi đã không xem TV.",
          "rule": "Quá khứ động từ lịch sự: khẳng định Vました, phủ định Vませんでした (không thêm です phía sau). Xác định mốc thời gian quá khứ (きのう・先週・けさ…) để chọn đúng thì.",
          "options": [
            "見ましたです thừa です sau ました (lỗi sai ngữ pháp) và lệch ý.",
            "見ませんでしたです thừa です sau ませんでした, sai cấu tạo động từ.",
            "Mốc quá khứ きのう và vế nhân quả rất mệt đi với quá khứ phủ định lịch sự 見ませんでした.",
            "見ません chia hiện tại/tương lai, lệch thì với きのう."
          ]
        },
        "source": "sources/speaking.pdf#page=34",
        "id": "fe-mock-4-08"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-noun",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nなつやすみに 新しい パソコンが（　　）。",
        "options": [
          "ほしいをです",
          "ほしいです",
          "ほしたいです",
          "ほしくです"
        ],
        "answer": 1,
        "explanation": "Mẫu mong muốn đồ vật là Nがほしいです (ほしい là tính từ đuôi い nên đi thẳng với です).",
        "origin": "authored",
        "solution": {
          "completed": "なつやすみに新しいパソコンがほしいです。",
          "meaning": "Kỳ nghỉ hè tôi muốn có một chiếc máy tính mới.",
          "rule": "Diễn tả mong muốn có một đồ vật/danh từ dùng N が ほしいです (phủ định: ほしくないです; không muốn gì cả: なにもほしくないです). Trợ từ đánh dấu đối tượng mong muốn là が.",
          "options": [
            "ほしいをです chèn trợ từ を sai vị trí trước です.",
            "Mẫu mong muốn đồ vật là Nがほしいです (ほしい là tính từ đuôi い nên đi thẳng với です).",
            "ほしたいです ghép thừa たい vào tính từ ほしい (たい chỉ dùng cho động từ).",
            "ほしくです bỏ mất đuôi い đổi sang く trước です, sai ngữ pháp."
          ]
        },
        "source": "sources/speaking.pdf#page=38",
        "id": "fe-mock-4-09"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 0,
        "unit": "g6-event",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n来週の日曜日、こうえんで おんがくの イベント（　　）あります。",
        "options": [
          "が",
          "を",
          "へ",
          "と"
        ],
        "answer": 0,
        "explanation": "Mẫu sự kiện diễn ra dùng Địa điểm で + Sự kiện が + あります → trợ từ が đánh dấu sự kiện イベント.",
        "origin": "authored",
        "solution": {
          "completed": "来週の日曜日、こうえんでおんがくのイベントがあります。",
          "meaning": "Chủ nhật tuần sau ở công viên có sự kiện âm nhạc.",
          "rule": "Sự kiện được tổ chức ở địa điểm dùng で + sự kiện が あります, khác に chỉ nơi tồn tại. 用事／約束があります nói có việc bận hoặc hẹn. Người có hẹn đi với と; lượng từ chuyên dùng cho vé mỏng phẳng là 枚.",
          "options": [
            "Mẫu sự kiện diễn ra dùng Địa điểm で + Sự kiện が + あります → trợ từ が đánh dấu sự kiện イベント.",
            "を không đi với động từ あります.",
            "へ chỉ hướng di chuyển, không dùng sau tên sự kiện.",
            "と dùng để nối danh từ hoặc chỉ người đi cùng, không đánh dấu chủ thể của あります."
          ]
        },
        "source": "sources/speaking.pdf#page=43",
        "id": "fe-mock-4-10"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-compare",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nにほんごと かんこくごと（　　）おもしろいです。",
        "options": [
          "どちらが",
          "どちら",
          "どれでも",
          "どちらも"
        ],
        "answer": 3,
        "explanation": "Câu trần thuật khẳng định nói cả 2 đối tượng đều có cùng tính chất dùng どちらも (không thêm が).",
        "origin": "authored",
        "solution": {
          "completed": "にほんごとかんこくごとどちらもおもしろいです。",
          "meaning": "Tiếng Nhật và tiếng Hàn, cả hai đều thú vị.",
          "rule": "So sánh hai lựa chọn: AとBとどちらが…ですか; Aのほうが…です nêu bên nổi bật, AはBより…です nêu mốc so sánh B. Chú ý hướng so sánh và nghĩa tính từ; どちらも là cả hai, không phải một bên.",
          "options": [
            "どちらが dùng trong câu hỏi lựa chọn kết thúc bằng か, không dùng trong câu khẳng định です.",
            "どちら thiếu trợ từ も nên không mang nghĩa \"cả hai đều\".",
            "どれでも dùng cho từ 3 đối tượng trở lên (\"cái nào cũng được\"), không chuẩn với cặp N1とN2と.",
            "Câu trần thuật khẳng định nói cả 2 đối tượng đều có cùng tính chất dùng どちらも (không thêm が)."
          ]
        },
        "source": "sources/speaking.pdf#page=47",
        "id": "fe-mock-4-11"
      },
      {
        "category": "grammar",
        "lesson": 6,
        "topic": 1,
        "unit": "g6-best",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nくだもののなかで マンゴーが（　　）あまいです。",
        "options": [
          "どちら",
          "あまり",
          "いちばん",
          "より"
        ],
        "answer": 2,
        "explanation": "Phạm vi くだもののなかで kết hợp với マンゴーが đòi hỏi trạng từ so sánh nhất いちばん.",
        "origin": "authored",
        "solution": {
          "completed": "くだもののなかでマンゴーがいちばんあまいです。",
          "meaning": "Trong các loại trái cây, xoài là ngọt nhất.",
          "rule": "So sánh nhất trong nhóm dùng phạm vi で + đối tượng が + いちばん + tính từ. 何／どこ／いつ được chọn theo loại đối tượng đang hỏi; xác định rõ phạm vi và đặc điểm để không nhầm với câu so sánh chỉ hai bên.",
          "options": [
            "どちら dùng để hỏi chọn giữa 2 đối tượng, không dùng trong câu trần thuật so sánh nhất.",
            "あまり đi với vị ngữ phủ định, không đi với khẳng định あまいです.",
            "Phạm vi くだもののなかで kết hợp với マンゴーが đòi hỏi trạng từ so sánh nhất いちばん.",
            "より dùng trong so sánh hơn 2 bên, không đi sau マンゴーが trong cấu trúc này."
          ]
        },
        "source": "sources/speaking.pdf#page=46",
        "id": "fe-mock-4-12"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 0,
        "unit": "g7-location",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nポストは ぎんこう（　　）となり（　　）あります。",
        "options": [
          "と/に",
          "の/に",
          "の/で",
          "に/の"
        ],
        "answer": 1,
        "explanation": "Vị trí tương đối của đồ vật: N1は N2の + となり + に + あります → の/に.",
        "origin": "authored",
        "solution": {
          "completed": "ポストはぎんこうのとなりにあります。",
          "meaning": "Hòm thư nằm ở bên cạnh ngân hàng.",
          "rule": "Khi hỏi hoặc nêu vị trí của đối tượng đã biết: Nは địa điểm に あります／います. Người và động vật dùng います; đồ vật, cây dùng あります. Vị trí tương đối cần danh từ の + 前／後ろ／隣／上／下／間….",
          "options": [
            "と/に không dùng と giữa hai danh từ ぎんこう và となり để chỉ \"bên cạnh của ngân hàng\".",
            "Vị trí tương đối của đồ vật: N1は N2の + となり + に + あります → の/に.",
            "の/で sai trợ từ thứ hai vì tồn tại tĩnh với あります dùng に, không dùng で.",
            "に/の đảo ngược thứ tự hai trợ từ, sai cấu trúc."
          ]
        },
        "source": "sources/speaking.pdf#page=60",
        "id": "fe-mock-4-13"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-te",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nここで 少し（　　）ください。すぐ もどります。",
        "options": [
          "まって",
          "まちて",
          "まいて",
          "まち"
        ],
        "answer": 0,
        "explanation": "待ちます (まつ: đợi) là động từ nhóm 1 đuôi つ → biến âm thành って: まって + ください.",
        "origin": "authored",
        "solution": {
          "completed": "ここで少しまってください。すぐもどります。",
          "meaning": "Xin hãy đợi ở đây một chút. Tôi quay lại ngay.",
          "rule": "Thể て phụ thuộc nhóm động từ: う・つ・る nhóm 1 → って; む・ぶ・ぬ → んで; く → いて; ぐ → いで; す → して. Nhóm 2 bỏ る + て; する → して, 来る → 来て; 行く là ngoại lệ 行って.",
          "options": [
            "待ちます (まつ: đợi) là động từ nhóm 1 đuôi つ → biến âm thành って: まって + ください.",
            "まちて không biến âm sang っ, sai quy tắc chia thể て nhóm 1.",
            "まいて là thể て của động từ đuôi く, không phải 待つ (đuôi つ).",
            "まち là thể bỏ ます, không đứng trực tiếp trước ください."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-4-14"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 1,
        "unit": "g7-tool",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nスプーン（　　）カレーを 食べます。",
        "options": [
          "に",
          "が",
          "へ",
          "で"
        ],
        "answer": 3,
        "explanation": "Dụng cụ thực hiện hành động (スプーン: cái thìa) đi với trợ từ で: スプーンで食べます.",
        "origin": "authored",
        "solution": {
          "completed": "スプーンでカレーを食べます。",
          "meaning": "Tôi ăn cà ri bằng thìa.",
          "rule": "Dụng cụ hoặc phương tiện thực hiện hành động dùng で; tân ngữ dùng を. Ví dụ ナイフで…を切ります. Không nhầm で chỉ dụng cụ với に chỉ nơi tồn tại hoặc と chỉ người cùng thực hiện.",
          "options": [
            "に không chỉ công cụ thực hiện hành động.",
            "が đánh dấu chủ ngữ, không dùng cho dụng cụ スプーン.",
            "へ chỉ hướng di chuyển, sai hoàn toàn ở đây.",
            "Dụng cụ thực hiện hành động (スプーン: cái thìa) đi với trợ từ で: スプーンで食べます."
          ]
        },
        "source": "sources/speaking.pdf#page=63",
        "id": "fe-mock-4-15"
      },
      {
        "category": "grammar",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-progressive",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nいま だいどころで 母が ばんごはんを（　　）。",
        "options": [
          "つくりたいです",
          "つくりましょう",
          "つくっています",
          "つくりました"
        ],
        "answer": 2,
        "explanation": "Trạng từ いま (bây giờ) mô tả hành động của mẹ đang diễn ra → thể tiếp diễn Vています: つくっています.",
        "origin": "authored",
        "solution": {
          "completed": "いまだいどころで母がばんごはんをつくっています。",
          "meaning": "Bây giờ mẹ tôi đang nấu bữa tối trong bếp.",
          "rule": "Hành động đang diễn ra tại thời điểm nói dùng Vて + います. Bối cảnh 今／見てください xác định nghĩa tiếp diễn trong các câu này; không khẳng định đây là nghĩa duy nhất của ています trong tiếng Nhật.",
          "options": [
            "つくりたいです (muốn nấu) ở sơ cấp chỉ dùng trực tiếp cho ngôi thứ nhất (私), không dùng kể ngôi thứ ba 母が.",
            "つくりましょう là lời rủ cùng nấu, không khớp với chủ ngữ ngôi thứ ba 母が.",
            "Trạng từ いま (bây giờ) mô tả hành động của mẹ đang diễn ra → thể tiếp diễn Vています: つくっています.",
            "つくりました là quá khứ (đã nấu xong), không khớp trạng từ いま."
          ]
        },
        "source": "sources/speaking.pdf#page=66",
        "id": "fe-mock-4-16"
      },
      {
        "category": "grammar",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-purpose",
        "prompt": "Sắp xếp các từ gợi ý sau thành câu hoàn chỉnh:\n行きます / くつを / デパートへ / 買いに / あした",
        "options": [
          "あした デパートへ 買いに くつを 行きます。",
          "あした デパートへ くつを 買いに 行きます。",
          "あした くつを 買いに 行きます デパートへ。",
          "デパートへ あした 買いに くつを 行きます。"
        ],
        "answer": 1,
        "explanation": "Trật tự chuẩn tiếng Nhật: Thời gian (あした) → Đích đến (デパートへ) → Tân ngữ + Mục đích (くつを買いに) → Động từ cuối câu (行きます).",
        "origin": "authored",
        "solution": {
          "completed": "あしたデパートへくつを買いに行きます。",
          "meaning": "Ngày mai tôi sẽ đi trung tâm thương mại để mua giày.",
          "rule": "Nói đi đâu để làm gì dùng Địa điểm へ + [Nを + V(bỏ ます) / N hoạt động] + に + 行きます／来ます／帰ります. Chú ý bỏ hoàn toàn đuôi ます trước に.",
          "options": [
            "Cũng đảo ngược 買いに lên trước くつを thay vì cụm cố định くつを買いに.",
            "Trật tự chuẩn tiếng Nhật: Thời gian (あした) → Đích đến (デパートへ) → Tân ngữ + Mục đích (くつを買いに) → Động từ cuối câu (行きます).",
            "Đặt đích đến デパートへ ra sau động từ cuối câu 行きます, sai ngữ pháp.",
            "Đặt 買いに đứng trước tân ngữ くつを, ngược trật tự OV của tiếng Nhật."
          ]
        },
        "source": "sources/speaking.pdf#page=38",
        "id": "fe-mock-4-17"
      },
      {
        "category": "dialogue",
        "lesson": 6,
        "topic": 2,
        "unit": "g6-already",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: パーティーの じゅんびは もう おわりましたか。\nB: はい、（　　）。もう だいじょうぶです。",
        "options": [
          "もうおわりました",
          "まだです",
          "まだあります",
          "おわりませんでした"
        ],
        "answer": 0,
        "explanation": "Khẳng định (はい + もうだいじょうぶです) cho câu hỏi もうおわりましたか dùng もうおわりました.",
        "origin": "authored",
        "solution": {
          "completed": "A: パーティーのじゅんびはもうおわりましたか。B: はい、もうおわりました。",
          "meaning": "A: Việc chuẩn bị tiệc đã xong chưa? — B: Vâng, xong rồi ạ. Ổn cả rồi.",
          "rule": "もう + Vましたか hỏi việc đã hoàn tất chưa. Trả lời đã làm bằng はい、Vました; chưa làm bằng いいえ、まだです. まだ ở đây là chưa hoàn tất hành động, khác まだあります diễn tả đồ vật vẫn còn.",
          "options": [
            "Khẳng định (はい + もうだいじょうぶです) cho câu hỏi もうおわりましたか dùng もうおわりました.",
            "まだです là phủ định (vẫn chưa), mâu thuẫn với はい và もうだいじょうぶです.",
            "まだあります diễn tả đồ vật còn thừa, không trả lời cho động từ おわりましたか.",
            "おわりませんでした là quá khứ phủ định, trái với はい."
          ]
        },
        "source": "sources/speaking.pdf#page=55",
        "id": "fe-mock-4-18"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-offer",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: へやが 少し あついですね。まどを（　　）。\nB: ええ、おねがいします。",
        "options": [
          "あけてください",
          "あけましたか",
          "あけています",
          "あけましょうか"
        ],
        "answer": 3,
        "explanation": "B đáp ええ、おねがいします (vâng, phiền bạn nhé) xác định A đang chủ động đề nghị giúp bằng Vましょうか: あけましょうか.",
        "origin": "authored",
        "solution": {
          "completed": "A: へやが少しあついですね。まどをあけましょうか。B: ええ、おねがいします。",
          "meaning": "A: Phòng hơi nóng nhỉ. Để tôi mở cửa sổ giúp nhé? — B: Ừ, phiền bạn nhé.",
          "rule": "Người nói chủ động đề nghị giúp dùng gốc trước ます + ましょうか, chẳng hạn 持ちましょうか. Người thực hiện và ý định phải đúng lời dẫn; Vてください là nhờ người nghe làm, không phải đề nghị mình làm giúp.",
          "options": [
            "あけてください là A nhờ B mở cửa sổ, khi đó B sẽ đáp はい、わかりました chứ không đáp おねがいします.",
            "あけましたか hỏi quá khứ \"đã mở chưa\", sai mạch hội thoại.",
            "あけています chỉ trạng thái đang mở, không phải lời đề nghị giúp đỡ.",
            "B đáp ええ、おねがいします (vâng, phiền bạn nhé) xác định A đang chủ động đề nghị giúp bằng Vましょうか: あけましょうか."
          ]
        },
        "source": "sources/speaking.pdf#page=67",
        "id": "fe-mock-4-19"
      },
      {
        "category": "dialogue",
        "lesson": 4,
        "topic": 2,
        "unit": "g4-degree",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: フォーは（　　）。\nB: とても おいしいです。",
        "options": [
          "だれですか",
          "いくつですか",
          "どうですか",
          "どこですか"
        ],
        "answer": 2,
        "explanation": "Câu trả lời nêu cảm nhận về món ăn (とてもおいしいです) nên câu hỏi dùng どうですか.",
        "origin": "authored",
        "solution": {
          "completed": "A: フォーはどうですか。B: とてもおいしいです。",
          "meaning": "A: Món phở thế nào? — B: Rất ngon.",
          "rule": "Phó từ mức độ: とても (rất) và 少し (một chút) đi với khẳng định; あまり (không… lắm) đi với phủ định. Hỏi cảm nhận chung về nơi chốn/thời tiết/món ăn dùng どうですか.",
          "options": [
            "だれですか hỏi người (\"là ai\"), sai hoàn toàn.",
            "いくつですか hỏi số lượng hoặc tuổi, không khớp câu đánh giá độ ngon.",
            "Câu trả lời nêu cảm nhận về món ăn (とてもおいしいです) nên câu hỏi dùng どうですか.",
            "どこですか hỏi địa điểm (\"ở đâu\"), không khớp câu trả lời とてもおいしいです."
          ]
        },
        "source": "sources/speaking.pdf#page=30",
        "id": "fe-mock-4-20"
      },
      {
        "category": "dialogue",
        "lesson": 7,
        "topic": 2,
        "unit": "g7-who",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nA: この おいしい ケーキは だれが つくりましたか。\nB: （　　）。",
        "options": [
          "だいどころで つくりました",
          "マリアさんが つくりました",
          "マリアさんを つくりました",
          "きのう つくりました"
        ],
        "answer": 1,
        "explanation": "Câu hỏi だれが (ai làm) phải trả lời bằng Người が + động từ quá khứ: マリアさんがつくりました.",
        "origin": "authored",
        "solution": {
          "completed": "A: このおいしいケーキはだれがつくりましたか。B: マリアさんがつくりました。",
          "meaning": "A: Chiếc bánh ngon này ai làm thế? — B: Chị Maria làm đấy.",
          "rule": "Hỏi ai thực hiện một hành động dùng 誰が + động từ; trả lời người đó が + động từ. Nếu hành động đã hoàn tất, giữ dạng quá khứ ました. Trợ từ を đánh dấu tân ngữ, không đánh dấu người làm trong mẫu này.",
          "options": [
            "だいどころでつくりました trả lời địa điểm (どこで), không trả lời ai là người làm.",
            "Câu hỏi だれが (ai làm) phải trả lời bằng Người が + động từ quá khứ: マリアさんがつくりました.",
            "マリアさんをつくりました dùng sai trợ từ を (biến chị Maria thành đối tượng bị tạo ra).",
            "きのうつくりました trả lời thời gian (いつ), không trả lời câu hỏi người (だれが)."
          ]
        },
        "source": "sources/speaking.pdf#page=68",
        "id": "fe-mock-4-21"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこの レモンは とても（　　）です。",
        "options": [
          "すっぱい",
          "あまい",
          "からい",
          "にがい"
        ],
        "answer": 0,
        "explanation": "レモン (chanh vàng) có vị đặc trưng là すっぱい (chua).",
        "origin": "authored",
        "solution": {
          "completed": "このレモンはとてもすっぱいです。",
          "meaning": "Quả chanh vàng này rất chua.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "レモン (chanh vàng) có vị đặc trưng là すっぱい (chua).",
            "あまい nghĩa là ngọt, không phải vị đặc trưng của chanh.",
            "からい nghĩa là cay, không phải vị của chanh.",
            "にがい nghĩa là đắng (thường dùng cho cà phê/thuốc), không phải vị chính của chanh."
          ]
        },
        "source": "sources/new-words.pdf#page=14",
        "id": "fe-mock-4-22"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nこの じしょを 少し（　　）ください。しらべたい ことばが ありますから。",
        "options": [
          "かりて",
          "あげて",
          "かけて",
          "かして"
        ],
        "answer": 3,
        "explanation": "Muốn mượn đồ từ người đối diện dùng 貸します (cho mượn) + てください → かしてください (xin hãy cho tôi mượn).",
        "origin": "authored",
        "solution": {
          "completed": "このじしょを少しかしてください。しらべたいことばがありますから。",
          "meaning": "Phiền bạn cho tôi mượn cuốn từ điển này một chút nhé, vì tôi có từ cần tra.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "かりてください nghĩa là \"xin hãy đi mượn\", ngược hẳn hướng trao nhận khi mình là người cần mượn.",
            "あげてください nghĩa là \"hãy tặng/đưa cho\", không đúng khi chỉ muốn mượn tra từ một chút.",
            "かけてください không dùng với từ điển.",
            "Muốn mượn đồ từ người đối diện dùng 貸します (cho mượn) + てください → かしてください (xin hãy cho tôi mượn)."
          ]
        },
        "source": "sources/new-words.pdf#page=22",
        "id": "fe-mock-4-23"
      },
      {
        "category": "vocabulary",
        "lesson": 5,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\nホテルの まどから きれいな うみの（　　）が 見えます。",
        "options": [
          "しゅうまつ",
          "おんせん",
          "けしき",
          "きせつ"
        ],
        "answer": 2,
        "explanation": "うみのけしき (phong cảnh biển) kết hợp tự nhiên nhất với tính từ きれいな và động từ 見えます.",
        "origin": "authored",
        "solution": {
          "completed": "ホテルのまどからきれいなうみのけしきが見えます。",
          "meaning": "Từ cửa sổ khách sạn có thể nhìn thấy phong cảnh biển đẹp.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "しゅうまつ là cuối tuần (thời gian), không phải thứ nhìn thấy qua cửa sổ.",
            "おんせん là suối nước nóng, không ghép うみのおんせん.",
            "うみのけしき (phong cảnh biển) kết hợp tự nhiên nhất với tính từ きれいな và động từ 見えます.",
            "きせつ là mùa trong năm, không ghép うみのきせつが見えます."
          ]
        },
        "source": "sources/new-words.pdf#page=16",
        "id": "fe-mock-4-24"
      },
      {
        "category": "vocabulary",
        "lesson": 6,
        "topic": 0,
        "unit": "",
        "prompt": "Chọn đáp án thích hợp điền vào chỗ trống:\n日曜日に コンサートの チケットが（　　）ありますから、いっしょに 行きませんか。",
        "options": [
          "よんほん",
          "よんまい",
          "よんさい",
          "よっか"
        ],
        "answer": 1,
        "explanation": "Lượng từ đếm vé (vật mỏng phẳng) là ～枚 (まい): 4 vé đọc là よんまい.",
        "origin": "authored",
        "solution": {
          "completed": "日曜日にコンサートのチケットがよんまいありますから、いっしょに行きませんか。",
          "meaning": "Chủ nhật tôi có 4 tấm vé hòa nhạc, bạn cùng đi nhé?",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "よんほん (4本) dùng để đếm vật dài hình trụ, không dùng cho vé.",
            "Lượng từ đếm vé (vật mỏng phẳng) là ～枚 (まい): 4 vé đọc là よんまい.",
            "よんさい (4歳) dùng để đếm tuổi (4 tuổi), không dùng cho vé.",
            "よっか (4日) là ngày mùng 4 hoặc 4 ngày."
          ]
        },
        "source": "sources/new-words.pdf#page=18",
        "id": "fe-mock-4-25"
      },
      {
        "category": "vocabulary",
        "lesson": 4,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn từ KHÁC LOẠI trong các từ sau:\n①にぎやか / ②しずか / ③きれい / ④さむい",
        "options": [
          "さむい",
          "にぎやか",
          "しずか",
          "きれい"
        ],
        "answer": 0,
        "explanation": "にぎやか, しずか, きれい đều là tính từ đuôi な Bài 4; さむい là tính từ đuôi い chỉ thời tiết lạnh.",
        "origin": "authored",
        "solution": {
          "completed": "さむい（tính từ đuôi い・lạnh）khác nhóm 3 tính từ đuôi な（にぎやか・しずか・きれい）.",
          "meaning": "さむい là tính từ đuôi い (chỉ thời tiết), 3 từ còn lại đều là tính từ đuôi な (miêu tả nơi chốn).",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "にぎやか, しずか, きれい đều là tính từ đuôi な Bài 4; さむい là tính từ đuôi い chỉ thời tiết lạnh.",
            "にぎやか (náo nhiệt) là tính từ đuôi な miêu tả nơi chốn.",
            "しずか (yên tĩnh) là tính từ đuôi な miêu tả nơi chốn.",
            "きれい (đẹp, sạch) là tính từ đuôi な miêu tả nơi chốn (dù kết thúc bằng い)."
          ]
        },
        "source": "sources/new-words.pdf#page=13",
        "id": "fe-mock-4-26"
      },
      {
        "category": "vocabulary",
        "lesson": 7,
        "topic": 1,
        "unit": "",
        "prompt": "Chọn từ KHÔNG CÙNG NHÓM 料理・飲み物（đồ ăn & đồ uống） trong các từ sau:\n①カレー / ②スープ / ③ジュース / ④ポスト",
        "options": [
          "カレー",
          "スープ",
          "ジュース",
          "ポスト"
        ],
        "answer": 3,
        "explanation": "カレー (cà ri), スープ (súp), ジュース (nước ép) đều thuộc nhóm ẩm thực; ポスト là hòm thư bưu điện.",
        "origin": "authored",
        "solution": {
          "completed": "ポスト（hòm thư）không thuộc nhóm đồ ăn & đồ uống（カレー・スープ・ジュース）.",
          "meaning": "Hòm thư (ポスト) là vật ngoài đường phố, không thuộc nhóm đồ ăn hay thức uống.",
          "rule": "Xác định nghĩa cốt lõi, trường từ vựng và kết hợp từ tự nhiên (collocation) trong tiếng Nhật sơ cấp JPD123 (Dekiru Bài 4–7). Đọc kỹ cả câu và động từ/trợ từ đi kèm để loại các từ sai nghĩa hoặc khác nhóm.",
          "options": [
            "カレー (cà ri) thuộc nhóm món ăn.",
            "スープ (súp) thuộc nhóm món ăn.",
            "ジュース (nước ép) thuộc nhóm đồ uống.",
            "カレー (cà ri), スープ (súp), ジュース (nước ép) đều thuộc nhóm ẩm thực; ポスト là hòm thư bưu điện."
          ]
        },
        "source": "sources/new-words.pdf#page=21",
        "id": "fe-mock-4-27"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 1,
        "unit": "g5-past-na",
        "prompt": "Đọc đoạn văn [FE-M4] và chọn từ thích hợp điền vào ＿＿①＿＿:\nホテルは　少し　ふるかったですが、部屋が　＿＿①＿＿。",
        "options": [
          "とてもきれいかったです",
          "あまりきれいでした",
          "とてもきれいでした",
          "とてもきれいです"
        ],
        "answer": 2,
        "explanation": "きれい là tính từ đuôi な, ở ngữ cảnh chuyến đi tháng 8 năm ngoái và tương phản với ふるかったですが → とてもきれいでした.",
        "origin": "authored",
        "solution": {
          "completed": "ホテルは少しふるかったですが、部屋がとてもきれいでした。",
          "meaning": "Khách sạn hơi cũ một chút nhưng phòng rất sạch đẹp.",
          "rule": "Quá khứ tính từ đuôi な và danh từ: khẳng định dùng でした (きれいでした・休みでした), phủ định dùng じゃありませんでした／ではありませんでした.",
          "options": [
            "とてもきれいかったです chia sai theo đuôi tính từ い (きれい là tính từ な).",
            "あまりきれいでした sai vì あまり chỉ đi với dạng phủ định.",
            "きれい là tính từ đuôi な, ở ngữ cảnh chuyến đi tháng 8 năm ngoái và tương phản với ふるかったですが → とてもきれいでした.",
            "とてもきれいです chia hiện tại, lệch thì quá khứ của chuyến đi năm ngoái."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m4",
        "passageTitle": "Bài đọc · FE-M4 (Đề luyện FE 04)",
        "passage": "私のくには　8月、あまり　あつくないです。ですから、8月は　旅行（りょこう）に　とても　いい　きせつです。去年（きょねん）の8月、家族と　ほっかいどうへ　行きました。空港（くうこう）から　ホテルまで　バスで　1時間くらいでした。ホテルは　少し　ふるかったですが、部屋が　＿＿①＿＿。今年の夏は、日本人の　ともだちに　＿＿②＿＿。",
        "id": "fe-mock-4-28"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 2,
        "unit": "g5-want-verb",
        "prompt": "Đọc đoạn văn [FE-M4] và chọn từ thích hợp điền vào ＿＿②＿＿:\n今年の夏は、日本人の　ともだちに　＿＿②＿＿。",
        "options": [
          "会うたいです",
          "会いたいです",
          "会いました",
          "会いませんでした"
        ],
        "answer": 1,
        "explanation": "Nói mong ước cho mùa hè năm nay (今年の夏) dùng mẫu V(bỏ ます) + たいです: 会います → 会いたいです.",
        "origin": "authored",
        "solution": {
          "completed": "今年の夏は、日本人のともだちに会いたいです。",
          "meaning": "Mùa hè năm nay tôi muốn gặp người bạn Nhật Bản.",
          "rule": "Diễn tả muốn làm hành động dùng V(bỏ ます) + たいです (phủ định: たくないです). Tính từ たい biến đổi giống tính từ đuôi い; tân ngữ thường đi với を hoặc が.",
          "options": [
            "会うたいです gắn たい sau thể từ điển 会う thay vì gốc bỏ ます 会い, sai ngữ pháp.",
            "Nói mong ước cho mùa hè năm nay (今年の夏) dùng mẫu V(bỏ ます) + たいです: 会います → 会いたいです.",
            "会いました là quá khứ (đã gặp), không khớp mạch chuyển sang dự định 今年の夏 sau đoạn kể 去年.",
            "会いませんでした là quá khứ phủ định, lệch thì và ngược mạch tích cực."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m4",
        "passageTitle": "Bài đọc · FE-M4 (Đề luyện FE 04)",
        "passage": "私のくには　8月、あまり　あつくないです。ですから、8月は　旅行（りょこう）に　とても　いい　きせつです。去年（きょねん）の8月、家族と　ほっかいどうへ　行きました。空港（くうこう）から　ホテルまで　バスで　1時間くらいでした。ホテルは　少し　ふるかったですが、部屋が　＿＿①＿＿。今年の夏は、日本人の　ともだちに　＿＿②＿＿。",
        "id": "fe-mock-4-29"
      },
      {
        "category": "comprehension",
        "lesson": 5,
        "topic": 0,
        "unit": "",
        "prompt": "Đọc đoạn văn [FE-M4] và trả lời câu hỏi:\n去年（きょねん）の8月、だれと ほっかいどうへ 行きましたか。",
        "options": [
          "家族と 行きました。",
          "ひとりで 行きました。",
          "日本人の ともだちと 行きました。",
          "ルームメートと 行きました。"
        ],
        "answer": 0,
        "explanation": "Đoạn văn FE-M4 ghi rõ: 去年の8月、家族とほっかいどうへ行きました → chọn 家族と行きました.",
        "origin": "authored",
        "solution": {
          "completed": "去年の8月、家族とほっかいどうへ行きました。",
          "meaning": "Tháng 8 năm ngoái đã đi Hokkaido cùng gia đình.",
          "rule": "Đọc toàn bộ đoạn văn ngắn trước khi chọn đáp án để nắm rõ mốc thời gian (quá khứ hay tương lai), mạch nhân–quả (〜から), phó từ đi kèm (あまり + phủ định) và các chi tiết cụ thể về thời gian, địa điểm, người đi cùng.",
          "options": [
            "Đoạn văn FE-M4 ghi rõ: 去年の8月、家族とほっかいどうへ行きました → chọn 家族と行きました.",
            "Sai: đoạn văn ghi đi cùng gia đình (家族と), không phải đi một mình (ひとりで).",
            "Sai: 日本人のともだち là người dự định muốn gặp vào mùa hè năm nay, không phải người đi Hokkaido năm ngoái.",
            "Sai: đoạn văn không hề nhắc tới ルームメート."
          ]
        },
        "source": "sources/FE/JPD123_FE+RE_SU26.pdf",
        "passageId": "fe-mock-m4",
        "passageTitle": "Bài đọc · FE-M4 (Đề luyện FE 04)",
        "passage": "私のくには　8月、あまり　あつくないです。ですから、8月は　旅行（りょこう）に　とても　いい　きせつです。去年（きょねん）の8月、家族と　ほっかいどうへ　行きました。空港（くうこう）から　ホテルまで　バスで　1時間くらいでした。ホテルは　少し　ふるかったですが、部屋が　＿＿①＿＿。今年の夏は、日本人の　ともだちに　＿＿②＿＿。",
        "id": "fe-mock-4-30"
      }
    ],
    "contentVersion": "2026-11-21"
  }
];
