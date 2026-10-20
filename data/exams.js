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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "added"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "origin": "transcribed"
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
        "explanation": "新幹線 = tàu cao tốc Shinkansen, đọc しんかんせん."
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
        "explanation": "温泉（おんせん）= suối nước nóng."
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
        "explanation": "涼しい（すずしい）= mát mẻ."
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
        "explanation": "美術館（びじゅつかん）= bảo tàng mỹ thuật."
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
        "explanation": "今朝 đọc đặc biệt là けさ: sáng nay."
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
        "explanation": "自転車（じてんしゃ）= xe đạp."
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
        "explanation": "景色（けしき）= phong cảnh."
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
        "explanation": "東 = đông, đọc ひがし."
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
        "explanation": "神社（じんじゃ）= đền Thần đạo."
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
        "explanation": "先週（せんしゅう）= tuần trước."
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
        "explanation": "去年（きょねん）= năm ngoái."
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
        "explanation": "すっぱい = chua; 甘い ngọt, 辛い cay, 苦い đắng."
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
        "explanation": "ルームメイト = bạn cùng phòng."
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
        "explanation": "借ります（かります）= vay/mượn."
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
        "explanation": "Quốc gia の phương hướng: ベトナムの北."
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
        "explanation": "で chỉ phương tiện; 三十分くらい = khoảng 30 phút."
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
        "explanation": "Tính từ な bỏ な khi đứng trước です."
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
        "explanation": "熱い bỏ い + くない → 熱くない."
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
        "explanation": "有名な + danh từ お寺."
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
        "explanation": "Nơi tồn tại に, sự vật が."
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
        "explanation": "が nối hai ý tương phản: cũ nhưng đẹp."
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
        "explanation": "あまり + phủ định = không lạnh lắm."
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
        "explanation": "ね tìm sự đồng tình về điều hai người cùng thấy."
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
        "explanation": "昨日 là hôm qua; 掃除します → 掃除しました."
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
        "explanation": "Người cùng thực hiện hành động dùng と."
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
        "explanation": "どこかへ hỏi có đến một nơi nào không."
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
        "explanation": "楽しい bỏ い + かった → 楽しかった."
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
        "explanation": "暇 là tính từ な, nên 暇でした."
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
        "explanation": "Lý do 風邪でした + から dẫn tới không leo núi."
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
        "explanation": "Nがほしいです = muốn có đồ vật N."
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
        "explanation": "Đối tượng của 好き đi với が."
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
        "explanation": "撮ります bỏ ます rồi thêm たい."
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
        "explanation": "入ります bỏ ます → 入り; mục đích dùng 入りに."
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
        "explanation": "Khoảng thời gian dùng 時間; 時 là giờ trên đồng hồ."
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
        "explanation": "あまり + phủ định; 辛い → 辛くない."
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
        "explanation": "と là cùng ai; で là nơi diễn ra việc ăn."
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
        "explanation": "安い bỏ い + かった → 安かった."
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
        "explanation": "大変 là tính từ な; quá khứ dùng でした."
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
        "explanation": "見ます → 見に; dùng gốc trước ます + に行く."
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
        "explanation": "どんな町 hỏi đặc điểm của thị trấn."
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
        "explanation": "どうでしたか hỏi cảm nhận về trải nghiệm đã qua."
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
        "explanation": "Câu hỏi 何をしたい hỏi muốn làm gì; かきたい = muốn vẽ."
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
        "explanation": "夏 = mùa hè; あまり暑くない = không nóng lắm."
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
        "explanation": "おととい = hôm kia; と = cùng; しました là quá khứ khẳng định."
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
        "explanation": "Lý do quá khứ 雨でしたから; kết quả phủ định quá khứ 出かけませんでした."
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
        "explanation": "飛行機（ひこうき）= máy bay."
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
        "explanation": "教会（きょうかい）= nhà thờ."
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
        "explanation": "一年中（いちねんじゅう）= quanh năm."
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
        "explanation": "部屋（へや）= căn phòng."
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
        "explanation": "晩ご飯（ばんごはん）= cơm tối."
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
        "explanation": "風邪（かぜ）= cảm/cảm cúm."
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
        "explanation": "写真（しゃしん）= ảnh."
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
        "explanation": "南（みなみ）= phía nam."
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
        "explanation": "緑（みどり）= màu xanh, cây xanh."
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
        "explanation": "家族（かぞく）= gia đình."
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
        "explanation": "来年（らいねん）= sang năm."
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
        "explanation": "ところ = nơi, chỗ."
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
        "explanation": "冷たい dùng cho vật, nước; 寒い thường dùng cho thời tiết."
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
        "explanation": "食事します（しょくじします）= dùng bữa."
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
        "explanation": "の nối 日本 với 南."
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
        "explanation": "歩いて dùng trực tiếp, không thêm で."
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
        "explanation": "Tính từ い giữ nguyên đuôi trước です."
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
        "explanation": "にぎやか là tính từ な; phủ định dùng じゃありません."
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
        "explanation": "Tính từ い + danh từ: 小さい町."
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
        "explanation": "温泉が là sự vật tồn tại."
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
        "explanation": "そして bổ sung một đặc điểm cùng chiều."
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
        "explanation": "とても + tính từ khẳng định = rất ngọt."
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
        "explanation": "ね gắn sau câu lịch sự để cùng chia sẻ cảm nhận."
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
        "explanation": "Quá khứ phủ định lịch sự: しませんでした."
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
        "explanation": "一人で = một mình."
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
        "explanation": "どこへも + phủ định = không đến bất cứ đâu."
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
        "explanation": "Phủ định quá khứ: bỏ い + くなかった."
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
        "explanation": "雨 là danh từ; phủ định quá khứ 雨じゃありませんでした."
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
        "explanation": "どうして hỏi lý do; trả lời với から."
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
        "explanation": "Muốn sở hữu đồ vật dùng ほしい."
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
        "explanation": "好き là tính từ な; あまり好きじゃありません."
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
        "explanation": "かきます → かきたい; không gắn たい sau thể từ điển."
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
        "explanation": "買います → 買いに; へ chỉ nơi đến, に chỉ mục đích."
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
        "explanation": "くらい đứng sau thời lượng để nói xấp xỉ."
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
        "explanation": "きれい thuộc tính từ な; không chia như tính từ い."
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
        "explanation": "作ります → 作りました; 一人で = một mình."
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
        "explanation": "Bỏ い + くなかった để nói đã không vui."
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
        "explanation": "Tính từ な phủ định quá khứ dùng じゃありませんでした."
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
        "explanation": "飲みたい chia như tính từ い: 飲みたかった."
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
        "explanation": "分 là phút; 時 là giờ trên đồng hồ; 人 đếm người; 円 là tiền."
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
        "explanation": "Câu hỏi việc đã làm dùng 行きましたか; lời xác nhận dùng quá khứ khẳng định."
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
        "explanation": "ほしい hỏi vật muốn có; たい hỏi hành động muốn làm."
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
        "explanation": "小さい = nhỏ; が = nhưng; にぎやか = nhộn nhịp."
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
        "explanation": "難しい → 難しくなかった; 昨日 = hôm qua."
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
        "explanation": "Đích đến へ; tân ngữ を; 見に chỉ mục đích đi."
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
        "explanation": "電車（でんしゃ）= tàu điện."
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
        "explanation": "有名（ゆうめい）= nổi tiếng."
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
        "explanation": "暖かい（あたたかい）= ấm áp, thường nói thời tiết."
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
        "explanation": "恋人（こいびと）= người yêu."
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
        "explanation": "先月（せんげつ）= tháng trước."
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
        "explanation": "気持ちがいい（きもちがいい）= cảm giác dễ chịu/sảng khoái."
      },
      {
        "id": "c45-3-07",
        "category": "reading",
        "lesson": 5,
        "topic": 2,
        "unit": "",
        "prompt": "Chọn âm đọc đúng:「今年」.",
        "options": [
          "こんねん",
          "きょねん",
          "らいねん",
          "ことし"
        ],
        "answer": 3,
        "explanation": "今年 đọc ことし, nghĩa là năm nay."
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
        "explanation": "真ん中（まんなか）= chính giữa."
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
        "explanation": "山（やま）= núi."
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
        "explanation": "週末（しゅうまつ）= cuối tuần."
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
        "explanation": "今晩（こんばん）= tối nay."
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
        "explanation": "低い（ひくい）= thấp; 少ない = ít."
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
        "explanation": "温かい = ấm khi cảm nhận, dùng cho đồ ăn/nước; 暖かい thường dùng cho khí hậu."
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
        "explanation": "絵（え）= tranh; 写真 là ảnh chụp; 景色 là phong cảnh."
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
        "explanation": "国の真ん中 = chính giữa đất nước."
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
        "explanation": "どのくらい hỏi thời lượng; 一時間半 = một tiếng rưỡi."
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
        "explanation": "有名 là tính từ な; câu miêu tả dùng 有名です."
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
        "explanation": "Ngoại lệ いい có gốc よ: よくない."
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
        "explanation": "どんなところ hỏi nơi có đặc điểm thế nào."
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
        "explanation": "Có một lâu đài cổ: 古いお城があります."
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
        "explanation": "Giữ dạng lịch sự 辛いです trước từ nối が."
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
        "explanation": "少し = hơi/một chút; あまり cần dạng phủ định."
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
        "explanation": "です + ね thể hiện tìm sự đồng tình."
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
        "explanation": "おととい = hôm kia; cần 行きました."
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
        "explanation": "それから chỉ trình tự làm việc tiếp theo."
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
        "explanation": "いいえ và どこへも yêu cầu phủ định; câu đang nói cuối tuần đã qua."
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
        "explanation": "いい → よかった; không phải いかった."
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
        "explanation": "簡単 là tính từ な; dạng quá khứ là 簡単でした."
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
        "explanation": "忙しかったですから = vì đã bận."
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
        "explanation": "ほしい chia như tính từ い: ほしくない."
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
        "explanation": "嫌い = ghét; đây là tính từ な dù kết thúc bằng い."
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
        "explanation": "たい chia phủ định thành たくない."
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
        "explanation": "会います → 会いに; 友達に会いに行く."
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
        "explanation": "から chỉ điểm xuất phát; まで chỉ điểm kết thúc."
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
        "explanation": "大きい đứng trực tiếp trước danh từ 川."
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
        "explanation": "今朝 ở đây là buổi sáng đã qua; 会いました là đã gặp."
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
        "explanation": "寒い bỏ い + かった → 寒かった."
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
        "explanation": "簡単 là tính từ な; phủ định quá khứ dùng じゃありませんでした."
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
        "explanation": "嫌い là tính từ な; không bỏ đuôi い khi phủ định."
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
        "explanation": "あまり甘くない = không ngọt lắm."
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
        "explanation": "どうでしたか hỏi cảm nhận quá khứ; 大変でした là quá khứ tính từ な."
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
        "explanation": "登ります bỏ ます + たい → 登りたい."
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
        "explanation": "Nơi tồn tại に; sự vật が; 古い = cổ/cũ."
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
        "explanation": "洗濯 = giặt đồ; それから = sau đó; cả hai việc đều ở quá khứ."
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
        "explanation": "新しい = mới; Nがほしいです = muốn có N."
      }
    ]
  }
];
