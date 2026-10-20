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
        "prompt": "あした、（　）約束があります。",
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
            "Hai trợ từ đầu đúng; 写真 là đối tượng của 撮る nên dùng を, không dùng が."
          ]
        }
      },
      {
        "id": "sample-18",
        "category": "grammar",
        "lesson": 4,
        "topic": 0,
        "unit": "g4-duration",
        "prompt": "家から駅まで、電車（　）十分です。",
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
          "completed": "家から駅まで、電車で十分です。",
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
          "の・は",
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
            "のほう đúng, nhưng mẫu nêu bên nổi bật dùng が trước tính từ.",
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
        "prompt": "A：今度、ビールを飲みませんか。\nB：ああ、（　）。すみません。今度はちょっと…。",
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
            "いいですね thường nhận lời/hưởng ứng, không khớp ngay sau đó là lời từ chối ở đây."
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
        "prompt": "サッカーのチケットが（　）あります。",
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
    ]
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
        "prompt": "Cách đọc của「景色」là gì?",
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
            "Không ghép riêng các âm けい・しょく; cả từ đọc けしき.",
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
            "に không chỉ người cùng ăn trong mẫu này.",
            "を đánh dấu tân ngữ, không chỉ người cùng làm.",
            "の chỉ quan hệ danh từ, không diễn đạt cùng ăn với gia đình.",
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
    ]
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
        "prompt": "Đọc từ「風邪」.",
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
            "風邪 là cách đọc cả từ かぜ, không ghép âm riêng thành ふうじゃ.",
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
          "高いの",
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
            "の không cần chen giữa 高い và です.",
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
    ]
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
    ]
  }
];
