// 57 standardized JPD123 speaking interview questions from sources/jpd123.docx.
window.SPEAKING_DATA = {
  "topics": [
    {
      "id": "schedule",
      "label": "Hằng ngày & Cuối tuần",
      "icon": "🗓️"
    },
    {
      "id": "town",
      "label": "Quê hương & Thành phố",
      "icon": "🏙️"
    },
    {
      "id": "food",
      "label": "Ẩm thực & Đồ uống",
      "icon": "🍜"
    },
    {
      "id": "preference",
      "label": "Sở thích & So sánh",
      "icon": "⭐"
    },
    {
      "id": "experience",
      "label": "Trải nghiệm (もう〜)",
      "icon": "✈️"
    },
    {
      "id": "invite",
      "label": "Rủ rê & Hẹn gặp",
      "icon": "🎉"
    },
    {
      "id": "wish",
      "label": "Mong muốn & Mục đích",
      "icon": "💫"
    },
    {
      "id": "people",
      "label": "Con người & Xung quanh",
      "icon": "👥"
    }
  ],
  "questions": [
    {
      "id": 1,
      "lesson": 5,
      "topic": "schedule",
      "jp": "毎日だれと学校へ来ますか。",
      "spaced": "毎日　だれと　学校へ　来ますか。",
      "ruby": "<ruby>毎日<rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby>　だれと　<ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>へ　<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ますか。",
      "kana": "まいにち だれと がっこうへ きますか。",
      "vi": "Mỗi ngày bạn đến trường cùng với ai?",
      "pattern": "Người と Nơi chốn へ 来ます／行きます（一人で = một mình）",
      "tip": "Nếu đi một mình, dùng 一人で（ひとりで） không kèm trợ từ と.",
      "samples": [
        {
          "jp": "友だちと学校へ来ます。",
          "kana": "ともだちと がっこうへ きます。",
          "vi": "Tôi đến trường cùng với bạn."
        },
        {
          "jp": "一人で学校へ来ます。",
          "kana": "ひとりで がっこうへ きます。",
          "vi": "Tôi đến trường một mình."
        }
      ]
    },
    {
      "id": 2,
      "lesson": 6,
      "topic": "experience",
      "jp": "もうブラジルへ行きましたか。",
      "spaced": "もう　ブラジルへ　行きましたか。",
      "ruby": "もう　ブラジルへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "もう ブラジルへ いきましたか。",
      "vi": "Bạn đã đi Brazil chưa?",
      "pattern": "もう Vましたか → はい、もう Vました ／ いいえ、まだです",
      "tip": "Khi chưa đi, trả lời ngắn gọn và tự nhiên nhất ở trình độ này là いいえ、まだです.",
      "samples": [
        {
          "jp": "いいえ、まだです。いつか行きたいです。",
          "kana": "いいえ、まだです。いつか いきたいです。",
          "vi": "Chưa, tôi chưa đi. Lúc nào đó tôi muốn đi."
        },
        {
          "jp": "はい、もう行きました。",
          "kana": "はい、もう いきました。",
          "vi": "Rồi, tôi đã đi rồi."
        }
      ]
    },
    {
      "id": 3,
      "lesson": 6,
      "topic": "town",
      "jp": "ベトナムでどこがいちばんきれいですか。",
      "spaced": "ベトナムで　どこが　いちばん　きれいですか。",
      "ruby": "ベトナムで　どこが　いちばん　きれいですか。",
      "kana": "ベトナムで どこが いちばん きれいですか。",
      "vi": "Ở Việt Nam thì nơi nào đẹp nhất?",
      "pattern": "Phạm vi で Địa điểm が いちばん Aです",
      "tip": "Nêu tên một thành phố hoặc danh thắng kèm が いちばん きれいです.",
      "samples": [
        {
          "jp": "ベトナムでダナンがいちばんきれいです。",
          "kana": "ベトナムで ダナンが いちばん きれいです。",
          "vi": "Ở Việt Nam thì Đà Nẵng đẹp nhất."
        },
        {
          "jp": "ベトナムでニャチャンがいちばんきれいです。",
          "kana": "ベトナムで ニャチャンが いちばん きれいです。",
          "vi": "Ở Việt Nam thì Nha Trang đẹp nhất."
        }
      ]
    },
    {
      "id": 4,
      "lesson": 7,
      "topic": "town",
      "jp": "Aさんのうちはどこにありますか。",
      "spaced": "Aさんの　うちは　どこに　ありますか。",
      "ruby": "Aさんの　うちは　どこに　ありますか。",
      "kana": "エーさんの うちは どこに ありますか。",
      "vi": "Nhà của bạn ở đâu?",
      "pattern": "N は Địa điểm に あります",
      "tip": "Khi trả lời về nhà mình, đổi Aさんのうち thành 私のうち.",
      "samples": [
        {
          "jp": "私のうちはハノイにあります。",
          "kana": "わたしの うちは ハノイに あります。",
          "vi": "Nhà tôi ở Hà Nội."
        },
        {
          "jp": "私のうちは大学の近くにあります。",
          "kana": "わたしの うちは だいがくの ちかくに あります。",
          "vi": "Nhà tôi ở gần trường đại học."
        }
      ]
    },
    {
      "id": 5,
      "lesson": 4,
      "topic": "town",
      "jp": "ハノイ／ホチミン市／ダナン市はどんなまち／ところですか。",
      "spaced": "ハノイ／ホチミン市／ダナン市は　どんな　まち／ところですか。",
      "ruby": "ハノイ／ホチミン<ruby>市<rp>(</rp><rt>し</rt><rp>)</rp></ruby>／ダナン<ruby>市<rp>(</rp><rt>し</rt><rp>)</rp></ruby>は　どんな　まち／ところですか。",
      "kana": "ハノイ、ホチミンし、ダナンしは どんな まち、ところですか。",
      "vi": "Hà Nội / TP. Hồ Chí Minh / Đà Nẵng là thành phố / nơi như thế nào?",
      "pattern": "N は Aい／Aな まち（ところ）です",
      "tip": "Giáo viên sẽ chọn 1 thành phố để hỏi; chú ý tính từ な phải giữ な trước danh từ まち／ところ.",
      "samples": [
        {
          "jp": "ハノイはにぎやかなまちです。",
          "kana": "ハノイは にぎやかな まちです。",
          "vi": "Hà Nội là một thành phố nhộn nhịp."
        },
        {
          "jp": "ダナン市はきれいで、静かなところです。",
          "kana": "ダナンしは きれいで、しずかな ところです。",
          "vi": "Đà Nẵng là một nơi đẹp và yên tĩnh."
        }
      ]
    },
    {
      "id": 6,
      "lesson": 5,
      "topic": "wish",
      "jp": "今、Aさんは何がいちばんほしいですか。",
      "spaced": "今、Aさんは　何が　いちばん　ほしいですか。",
      "ruby": "<ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、Aさんは　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　いちばん　ほしいですか。",
      "kana": "いま、エーさんは なにが いちばん ほしいですか。",
      "vi": "Bây giờ bạn muốn có thứ gì nhất?",
      "pattern": "今、私は N が いちばん ほしいです",
      "tip": "ほしいです dùng cho đồ vật muốn sở hữu và đi với trợ từ が.",
      "samples": [
        {
          "jp": "今、新しいパソコンがいちばんほしいです。",
          "kana": "いま、あたらしい パソコンが いちばん ほしいです。",
          "vi": "Bây giờ tôi muốn có máy tính mới nhất."
        },
        {
          "jp": "今、車がいちばんほしいです。",
          "kana": "いま、くるまが いちばん ほしいです。",
          "vi": "Bây giờ tôi muốn có ô tô nhất."
        }
      ]
    },
    {
      "id": 7,
      "lesson": 7,
      "topic": "town",
      "jp": "いえのそとに何がありますか。",
      "spaced": "いえの　そとに　何が　ありますか。",
      "ruby": "いえの　そとに　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　ありますか。",
      "kana": "いえの そとに なにが ありますか。",
      "vi": "Ở bên ngoài nhà có cái gì?",
      "pattern": "Địa điểm に Vật が あります",
      "tip": "あります dùng cho đồ vật, cây cối, xe cộ (không dùng cho người/động vật).",
      "samples": [
        {
          "jp": "いえのそとに木と車があります。",
          "kana": "いえの そとに きと くるまが あります。",
          "vi": "Bên ngoài nhà có cây và ô tô."
        },
        {
          "jp": "いえのそとに小さい庭があります。",
          "kana": "いえの そとに ちいさい にわが あります。",
          "vi": "Bên ngoài nhà có một khu vườn nhỏ."
        }
      ]
    },
    {
      "id": 8,
      "lesson": 6,
      "topic": "preference",
      "jp": "えいがで何がいちばんすきですか。",
      "spaced": "えいがで　何が　いちばん　すきですか。",
      "ruby": "えいがで　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　いちばん　すきですか。",
      "kana": "えいがで なにが いちばん すきですか。",
      "vi": "Trong các bộ phim / thể loại phim, bạn thích phim gì nhất?",
      "pattern": "えいがで N が いちばん すきです",
      "tip": "Có thể trả lời bằng thể loại phim (アニメ, アクション映画, ホラー映画) hoặc tên phim.",
      "samples": [
        {
          "jp": "えいがでアニメがいちばんすきです。",
          "kana": "えいがで アニメが いちばん すきです。",
          "vi": "Trong các loại phim, tôi thích hoạt hình anime nhất."
        },
        {
          "jp": "えいがで日本の映画がいちばんすきです。",
          "kana": "えいがで にほんの えいがが いちばん すきです。",
          "vi": "Trong các loại phim, tôi thích phim Nhật nhất."
        }
      ]
    },
    {
      "id": 9,
      "lesson": 6,
      "topic": "food",
      "jp": "飲み物で何がいちばんすきですか。",
      "spaced": "飲み物で　何が　いちばん　すきですか。",
      "ruby": "<ruby>飲<rp>(</rp><rt>の</rt><rp>)</rp></ruby>み<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>で　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　いちばん　すきですか。",
      "kana": "のみもので なにが いちばん すきですか。",
      "vi": "Trong các loại đồ uống, bạn thích cái gì nhất?",
      "pattern": "飲み物で N が いちばん すきです",
      "tip": "Chọn đồ uống quen thuộc như コーヒー, お茶, ジュース, 水.",
      "samples": [
        {
          "jp": "飲み物でコーヒーがいちばんすきです。",
          "kana": "のみもので コーヒーが いちばん すきです。",
          "vi": "Trong các đồ uống, tôi thích cà phê nhất."
        },
        {
          "jp": "飲み物でお茶がいちばんすきです。",
          "kana": "のみもので おちゃが いちばん すきです。",
          "vi": "Trong các đồ uống, tôi thích trà nhất."
        }
      ]
    },
    {
      "id": 10,
      "lesson": 6,
      "topic": "experience",
      "jp": "もうちゅうごくへ行きましたか。",
      "spaced": "もう　ちゅうごくへ　行きましたか。",
      "ruby": "もう　ちゅうごくへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "もう ちゅうごくへ いきましたか。",
      "vi": "Bạn đã đi Trung Quốc chưa?",
      "pattern": "もう Vましたか → はい、もう Vました ／ いいえ、まだです",
      "tip": "Nhớ trả lời いいえ、まだです nếu chưa từng đi.",
      "samples": [
        {
          "jp": "いいえ、まだです。",
          "kana": "いいえ、まだです。",
          "vi": "Chưa, tôi chưa đi."
        },
        {
          "jp": "はい、去年行きました。",
          "kana": "はい、きょねん いきました。",
          "vi": "Rồi, tôi đã đi năm ngoái."
        }
      ]
    },
    {
      "id": 11,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちに何がありますか。",
      "spaced": "Aさんの　まちに　何が　ありますか。",
      "ruby": "Aさんの　まちに　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　ありますか。",
      "kana": "エーさんの まちに なにが ありますか。",
      "vi": "Ở thành phố / thị trấn của bạn có gì?",
      "pattern": "私のまちに N が あります",
      "tip": "Nêu các địa điểm nổi bật ở quê hương như きれいな海, 古いお寺, 大きい公園.",
      "samples": [
        {
          "jp": "私のまちにきれいな海と山があります。",
          "kana": "わたしの まちに きれいな うみと やまが あります。",
          "vi": "Ở thành phố của tôi có biển đẹp và núi."
        },
        {
          "jp": "私のまちに有名なお寺があります。",
          "kana": "わたしの まちに ゆうめいな おてらが あります。",
          "vi": "Ở thành phố của tôi có ngôi chùa nổi tiếng."
        }
      ]
    },
    {
      "id": 12,
      "lesson": 6,
      "topic": "food",
      "jp": "食べ物で何がいちばんすきですか。",
      "spaced": "食べ物で　何が　いちばん　すきですか。",
      "ruby": "<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べ<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>で　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　いちばん　すきですか。",
      "kana": "たべもので なにが いちばん すきですか。",
      "vi": "Trong các món ăn, bạn thích món gì nhất?",
      "pattern": "食べ物で N が いちばん すきです",
      "tip": "Dùng が trước いちばん すきです.",
      "samples": [
        {
          "jp": "食べ物でフォーがいちばんすきです。",
          "kana": "たべもので フォーが いちばん すきです。",
          "vi": "Trong các món ăn, tôi thích phở nhất."
        },
        {
          "jp": "食べ物ですしがいちばんすきです。",
          "kana": "たべもので すしが いちばん すきです。",
          "vi": "Trong các món ăn, tôi thích sushi nhất."
        }
      ]
    },
    {
      "id": 13,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちはしずかですか／にぎやかですか。",
      "spaced": "Aさんの　まちは　しずかですか／にぎやかですか。",
      "ruby": "Aさんの　まちは　しずかですか／にぎやかですか。",
      "kana": "エーさんの まちは しずかですか、にぎやかですか。",
      "vi": "Thành phố của bạn yên tĩnh hay nhộn nhịp?",
      "pattern": "私のまちは しずかです ／ にぎやかです",
      "tip": "Cả しずか và にぎやか đều là tính từ な (khi đứng cuối câu dùng trực tiếp với です).",
      "samples": [
        {
          "jp": "私のまちはとても静かです。",
          "kana": "わたしの まちは とても しずかです。",
          "vi": "Thành phố của tôi rất yên tĩnh."
        },
        {
          "jp": "私のまちはとてもにぎやかです。",
          "kana": "わたしの まちは とても にぎやかです。",
          "vi": "Thành phố của tôi rất nhộn nhịp."
        }
      ]
    },
    {
      "id": 14,
      "lesson": 5,
      "topic": "wish",
      "jp": "今、Aさんはお金がたくさんあります。何を買いたいですか。",
      "spaced": "今、Aさんは　お金が　たくさん　あります。何を　買いたいですか。",
      "ruby": "<ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、Aさんは　お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>が　たくさん　あります。<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を　<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いたいですか。",
      "kana": "いま、エーさんは おかねが たくさん あります。なにを かいたいですか。",
      "vi": "Bây giờ bạn có nhiều tiền. Bạn muốn mua cái gì?",
      "pattern": "N を 買いたいです（Vたいです = muốn làm V）",
      "tip": "Phân biệt: N が ほしいです (muốn có N) và N を 買いたいです (muốn mua N).",
      "samples": [
        {
          "jp": "新しい車を買いたいです。",
          "kana": "あたらしい くるまを かいたいです。",
          "vi": "Tôi muốn mua một chiếc ô tô mới."
        },
        {
          "jp": "大きい家を買いたいです。",
          "kana": "おおきい いえを かいたいです。",
          "vi": "Tôi muốn mua một ngôi nhà lớn."
        }
      ]
    },
    {
      "id": 15,
      "lesson": 5,
      "topic": "schedule",
      "jp": "きのう、どこかへ行きましたか。",
      "spaced": "きのう、どこかへ　行きましたか。",
      "ruby": "きのう、どこかへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "きのう、どこかへ いきましたか。",
      "vi": "Hôm qua bạn có đi đâu không?",
      "pattern": "はい、N へ 行きました ／ いいえ、どこへも 行きませんでした",
      "tip": "Nếu không đi đâu cả, dùng mẫu いいえ、どこへも 行きませんでした.",
      "samples": [
        {
          "jp": "はい、友だちとスーパーへ行きました。",
          "kana": "はい、ともだちと スーパーへ いきました。",
          "vi": "Có, tôi đã đi siêu thị cùng bạn."
        },
        {
          "jp": "いいえ、どこへも行きませんでした。",
          "kana": "いいえ、どこへも いきませんでした。",
          "vi": "Không, tôi đã không đi đâu cả."
        }
      ]
    },
    {
      "id": 16,
      "lesson": 6,
      "topic": "invite",
      "jp": "来週の土曜日、いっしょにコンサートに行きませんか。",
      "spaced": "来週の　土曜日、いっしょに　コンサートに　行きませんか。",
      "ruby": "<ruby>来週<rp>(</rp><rt>らいしゅう</rt><rp>)</rp></ruby>の　<ruby>土曜日<rp>(</rp><rt>どようび</rt><rp>)</rp></ruby>、いっしょに　コンサートに　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きませんか。",
      "kana": "らいしゅうの どようび、いっしょに コンサートに いきませんか。",
      "vi": "Thứ Bảy tuần sau cùng đi xem hòa nhạc nhé?",
      "pattern": "いいですね、行きましょう ／ すみません、土曜日はちょっと…",
      "tip": "Đây là câu rủ rê: đồng ý dùng いいですね、行きましょう; từ chối khéo dùng すみません、…はちょっと….",
      "samples": [
        {
          "jp": "いいですね。ぜひ行きましょう。",
          "kana": "いいですね。ぜひ いきましょう。",
          "vi": "Hay quá. Nhất định cùng đi nhé."
        },
        {
          "jp": "すみません、来週の土曜日はちょっと…用事がありますから。",
          "kana": "すみません、らいしゅうの どようびは ちょっと… ようじが ありますから。",
          "vi": "Xin lỗi, thứ Bảy tuần sau thì hơi… vì tôi có việc bận."
        }
      ]
    },
    {
      "id": 17,
      "lesson": 6,
      "topic": "invite",
      "jp": "あした、いっしょに買い物に行きませんか。",
      "spaced": "あした、いっしょに　買い物に　行きませんか。",
      "ruby": "あした、いっしょに　<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>い<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>に　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きませんか。",
      "kana": "あした、いっしょに かいものに いきませんか。",
      "vi": "Ngày mai cùng đi mua sắm nhé?",
      "pattern": "いいですね、行きましょう ／ すみません、あしたはちょっと…",
      "tip": "Trả lời tương tự mẫu nhận lời hoặc từ chối nhẹ ở Bài 6.",
      "samples": [
        {
          "jp": "いいですね。いっしょに行きましょう。",
          "kana": "いいですね。いっしょに いきましょう。",
          "vi": "Được đấy. Cùng đi nhé."
        },
        {
          "jp": "すみません、あしたはちょっと…アルバイトがありますから。",
          "kana": "すみません、あしたは ちょっと… アルバイトが ありますから。",
          "vi": "Xin lỗi, ngày mai thì hơi khó… vì tôi có ca làm thêm."
        }
      ]
    },
    {
      "id": 18,
      "lesson": 6,
      "topic": "invite",
      "jp": "こんばん、いっしょにカラオケに行きませんか。",
      "spaced": "こんばん、いっしょに　カラオケに　行きませんか。",
      "ruby": "こんばん、いっしょに　カラオケに　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きませんか。",
      "kana": "こんばん、いっしょに カラオケに いきませんか。",
      "vi": "Tối nay cùng đi hát karaoke nhé?",
      "pattern": "いいですね、行きましょう ／ すみません、こんばんはちょっと…",
      "tip": "こんばん = tối nay; đáp lại tự nhiên bằng いいですね、行きましょう.",
      "samples": [
        {
          "jp": "いいですね。行きましょう。",
          "kana": "いいですね。いきましょう。",
          "vi": "Tuyệt đấy. Cùng đi thôi."
        },
        {
          "jp": "すみません、こんばんはちょっと…宿題がありますから。",
          "kana": "すみません、こんばんは ちょっと… しゅくだいが ありますから。",
          "vi": "Xin lỗi, tối nay thì hơi… vì tôi có bài tập về nhà."
        }
      ]
    },
    {
      "id": 19,
      "lesson": 6,
      "topic": "preference",
      "jp": "ベトナム人のかしゅでだれがいちばんすきですか。",
      "spaced": "ベトナム人の　かしゅで　だれが　いちばん　すきですか。",
      "ruby": "ベトナム<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>の　かしゅで　だれが　いちばん　すきですか。",
      "kana": "ベトナムじんの かしゅで だれが いちばん すきですか。",
      "vi": "Trong các ca sĩ người Việt Nam, bạn thích ai nhất?",
      "pattern": "ベトナム人のかしゅで [Tên ca sĩ] が いちばん すきです",
      "tip": "Hỏi về người (だれが) nên câu trả lời nêu tên ca sĩ + が いちばん すきです.",
      "samples": [
        {
          "jp": "ベトナム人のかしゅでソン・トゥンM-TPがいちばんすきです。",
          "kana": "ベトナムじんの かしゅで ソン・トゥン エムティーピーが いちばん すきです。",
          "vi": "Trong các ca sĩ Việt Nam, tôi thích Sơn Tùng M-TP nhất."
        },
        {
          "jp": "ベトナム人のかしゅでミー・タムがいちばんすきです。",
          "kana": "ベトナムじんの かしゅで ミー・タムが いちばん すきです。",
          "vi": "Trong các ca sĩ Việt Nam, tôi thích Mỹ Tâm nhất."
        }
      ]
    },
    {
      "id": 20,
      "lesson": 7,
      "topic": "town",
      "jp": "Aさんのうちのちかくに何がありますか。",
      "spaced": "Aさんの　うちの　ちかくに　何が　ありますか。",
      "ruby": "Aさんの　うちの　ちかくに　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　ありますか。",
      "kana": "エーさんの うちの ちかくに なにが ありますか。",
      "vi": "Ở gần nhà của bạn có cái gì?",
      "pattern": "私のうちのちかくに N が あります",
      "tip": "Có thể nêu コンビニ, スーパー, 公園, 駅, 病院, 学校…",
      "samples": [
        {
          "jp": "私のうちのちかくにコンビニと公園があります。",
          "kana": "わたしの うちの ちかくに コンビニと こうえんが あります。",
          "vi": "Ở gần nhà tôi có cửa hàng tiện lợi và công viên."
        },
        {
          "jp": "私のうちのちかくに大きいスーパーがあります。",
          "kana": "わたしの うちの ちかくに おおきい スーパーが あります。",
          "vi": "Ở gần nhà tôi có một siêu thị lớn."
        }
      ]
    },
    {
      "id": 21,
      "lesson": 4,
      "topic": "food",
      "jp": "ベトナムの料理はどうですか。",
      "spaced": "ベトナムの　料理は　どうですか。",
      "ruby": "ベトナムの　<ruby>料理<rp>(</rp><rt>りょうり</rt><rp>)</rp></ruby>は　どうですか。",
      "kana": "ベトナムの りょうりは どうですか。",
      "vi": "Món ăn Việt Nam thế nào?",
      "pattern": "とても おいしいです ／ 安くて、おいしいです",
      "tip": "どうですか hỏi cảm nhận/đánh giá; trả lời bằng tính từ như おいしいです, 安いです.",
      "samples": [
        {
          "jp": "ベトナムの料理はとてもおいしいです。",
          "kana": "ベトナムの りょうりは とても おいしいです。",
          "vi": "Món ăn Việt Nam rất ngon."
        },
        {
          "jp": "おいしくて、安いです。",
          "kana": "おいしくて、やすいです。",
          "vi": "Vừa ngon vừa rẻ."
        }
      ]
    },
    {
      "id": 22,
      "lesson": 7,
      "topic": "food",
      "jp": "日本人は何でごはんを食べますか。",
      "spaced": "日本人は　何で　ごはんを　食べますか。",
      "ruby": "<ruby>日本人<rp>(</rp><rt>にほんじん</rt><rp>)</rp></ruby>は　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>で　ごはんを　<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べますか。",
      "kana": "にほんじんは なにで ごはんを たべますか。",
      "vi": "Người Nhật ăn cơm bằng gì?",
      "pattern": "Dụng cụ で ごはんを 食べます",
      "tip": "何で（なんで） ở đây hỏi dụng cụ ăn uống: はし（đũa）, スプーン（thìa）.",
      "samples": [
        {
          "jp": "日本人ははしでごはんを食べます。",
          "kana": "にほんじんは はしで ごはんを たべます。",
          "vi": "Người Nhật ăn cơm bằng đũa."
        },
        {
          "jp": "はしとスプーンでごはんを食べます。",
          "kana": "はしと スプーンで ごはんを たべます。",
          "vi": "Họ ăn cơm bằng đũa và thìa."
        }
      ]
    },
    {
      "id": 23,
      "lesson": 7,
      "topic": "food",
      "jp": "ベトナム人は何でごはんを食べますか。",
      "spaced": "ベトナム人は　何で　ごはんを　食べますか。",
      "ruby": "ベトナム<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>は　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>で　ごはんを　<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べますか。",
      "kana": "ベトナムじんは なにで ごはんを たべますか。",
      "vi": "Người Việt Nam ăn cơm bằng gì?",
      "pattern": "Dụng cụ で ごはんを 食べます",
      "tip": "Tương tự câu 22, trả lời bằng はしで hoặc はしとスプーンで.",
      "samples": [
        {
          "jp": "ベトナム人もはしでごはんを食べます。",
          "kana": "ベトナムじんも はしで ごはんを たべます。",
          "vi": "Người Việt Nam cũng ăn cơm bằng đũa."
        },
        {
          "jp": "はしとスプーンでごはんを食べます。",
          "kana": "はしと スプーンで ごはんを たべます。",
          "vi": "Người Việt ăn cơm bằng đũa và thìa."
        }
      ]
    },
    {
      "id": 24,
      "lesson": 7,
      "topic": "people",
      "jp": "いえのそとにどんなどうぶつがいますか。（いぬ／ねこ／さかながいます）",
      "spaced": "いえの　そとに　どんな　どうぶつが　いますか。（いぬ／ねこ／さかなが　います）",
      "ruby": "いえの　そとに　どんな　どうぶつが　いますか。（いぬ／ねこ／さかなが　います）",
      "kana": "いえの そとに どんな どうぶつが いますか。いぬ、ねこ、さかなが います。",
      "vi": "Ở bên ngoài nhà có con vật gì? (Có chó / mèo / cá)",
      "pattern": "Địa điểm に Động vật が います ／ 何も いません",
      "tip": "Đã chuẩn hóa từ 何がいますか sang どんな どうぶつが いますか vì động vật đi với います.",
      "samples": [
        {
          "jp": "いえのそとにいぬがいます。",
          "kana": "いえの そとに いぬが います。",
          "vi": "Ở bên ngoài nhà có con chó."
        },
        {
          "jp": "いえのそとにねこがいっぱいいます。",
          "kana": "いえの そとに ねこが いっぱい います。",
          "vi": "Ở bên ngoài nhà có nhiều mèo."
        }
      ]
    },
    {
      "id": 25,
      "lesson": 6,
      "topic": "food",
      "jp": "ぎゅう肉とぶた肉とどちらがたかいですか。",
      "spaced": "ぎゅう肉と　ぶた肉と　どちらが　たかいですか。",
      "ruby": "ぎゅう<ruby>肉<rp>(</rp><rt>にく</rt><rp>)</rp></ruby>と　ぶた<ruby>肉<rp>(</rp><rt>にく</rt><rp>)</rp></ruby>と　どちらが　たかいですか。",
      "kana": "ぎゅうにくと ぶたにくと どちらが たかいですか。",
      "vi": "Thịt bò và thịt heo thì bên nào đắt hơn?",
      "pattern": "N1 と N2 と どちらが Aですか → N1 のほうが Aです",
      "tip": "Đã sửa lỗi đánh máy たいかい → たかい. Trả lời bằng ～のほうが たかいです.",
      "samples": [
        {
          "jp": "ぎゅう肉のほうがたかいです。",
          "kana": "ぎゅうにくの ほうが たかいです。",
          "vi": "Thịt bò đắt hơn."
        },
        {
          "jp": "ぎゅう肉はぶた肉よりたかいです。",
          "kana": "ぎゅうにくは ぶたにくより たかいです。",
          "vi": "Thịt bò đắt hơn thịt heo."
        }
      ]
    },
    {
      "id": 26,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちにたかいやまがありますか。",
      "spaced": "Aさんの　まちに　たかい　やまが　ありますか。",
      "ruby": "Aさんの　まちに　たかい　やまが　ありますか。",
      "kana": "エーさんの まちに たかい やまが ありますか。",
      "vi": "Ở thành phố / quê của bạn có ngọn núi cao không?",
      "pattern": "はい、あります ／ いいえ、ありません",
      "tip": "やま（山） là đồ vật/tự nhiên nên dùng あります / ありません.",
      "samples": [
        {
          "jp": "はい、たかいやまがあります。",
          "kana": "はい、たかい やまが あります。",
          "vi": "Có, có núi cao."
        },
        {
          "jp": "いいえ、私のまちにやまがありません。",
          "kana": "いいえ、わたしの まちに やまが ありません。",
          "vi": "Không, ở thành phố của tôi không có núi."
        }
      ]
    },
    {
      "id": 27,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちにきれいなかわがありますか。",
      "spaced": "Aさんの　まちに　きれいな　かわが　ありますか。",
      "ruby": "Aさんの　まちに　きれいな　かわが　ありますか。",
      "kana": "エーさんの まちに きれいな かわが ありますか。",
      "vi": "Ở thành phố / quê của bạn có dòng sông đẹp không?",
      "pattern": "はい、きれいなかわが あります ／ いいえ、ありません",
      "tip": "Đã sửa lỗi đánh máy きれない → きれいな（tính từ な bổ nghĩa cho かわ）.",
      "samples": [
        {
          "jp": "はい、きれいなかわがあります。",
          "kana": "はい、きれいな かわが あります。",
          "vi": "Có, có dòng sông đẹp."
        },
        {
          "jp": "いいえ、あまりきれいなかわはありません。",
          "kana": "いいえ、あまり きれいな かわは ありません。",
          "vi": "Không, không có con sông nào đẹp lắm."
        }
      ]
    },
    {
      "id": 28,
      "lesson": 5,
      "topic": "schedule",
      "jp": "しゅうまつ何をしますか。",
      "spaced": "しゅうまつ　何を　しますか。",
      "ruby": "しゅうまつ　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を　しますか。",
      "kana": "しゅうまつ なにを しますか。",
      "vi": "Cuối tuần bạn làm gì?",
      "pattern": "しゅうまつ、Vます（それから、Vます）",
      "tip": "Hỏi về thói quen hoặc dự định cuối tuần ở hiện tại/tương lai (dùng Vます).",
      "samples": [
        {
          "jp": "しゅうまつ、友だちと映画を見ます。",
          "kana": "しゅうまつ、ともだちと えいがを みます。",
          "vi": "Cuối tuần tôi xem phim cùng bạn."
        },
        {
          "jp": "しゅうまつ、うちで本を読みます。それから、サッカーをします。",
          "kana": "しゅうまつ、うちで ほんを よみます。それから、サッカーを します。",
          "vi": "Cuối tuần tôi đọc sách ở nhà. Sau đó tôi chơi bóng đá."
        }
      ]
    },
    {
      "id": 29,
      "lesson": 6,
      "topic": "preference",
      "jp": "サッカーとすいえいとどちらがすきですか。",
      "spaced": "サッカーと　すいえいと　どちらが　すきですか。",
      "ruby": "サッカーと　すいえいと　どちらが　すきですか。",
      "kana": "サッカーと すいえいと どちらが すきですか。",
      "vi": "Bóng đá và bơi lội thì bạn thích môn nào hơn?",
      "pattern": "N1 のほうが すきです ／ どちらも すきです",
      "tip": "Nếu thích cả hai, trả lời どちらも すきです.",
      "samples": [
        {
          "jp": "サッカーのほうがすきです。",
          "kana": "サッカーの ほうが すきです。",
          "vi": "Tôi thích bóng đá hơn."
        },
        {
          "jp": "どちらもすきです。",
          "kana": "どちらも すきです。",
          "vi": "Tôi thích cả hai."
        }
      ]
    },
    {
      "id": 30,
      "lesson": 5,
      "topic": "schedule",
      "jp": "きのう何をしましたか。",
      "spaced": "きのう　何を　しましたか。",
      "ruby": "きのう　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を　しましたか。",
      "kana": "きのう なにを しましたか。",
      "vi": "Hôm qua bạn đã làm gì?",
      "pattern": "きのう、Vました",
      "tip": "Chú ý chia động từ ở quá khứ ました vì có きのう (hôm qua).",
      "samples": [
        {
          "jp": "きのう、日本語を勉強しました。",
          "kana": "きのう、にほんごを べんきょうしました。",
          "vi": "Hôm qua tôi đã học tiếng Nhật."
        },
        {
          "jp": "きのう、友だちと買い物をしました。",
          "kana": "きのう、ともだちと かいものを しました。",
          "vi": "Hôm qua tôi đã đi mua sắm với bạn."
        }
      ]
    },
    {
      "id": 31,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちにおんせんがありますか。",
      "spaced": "Aさんの　まちに　おんせんが　ありますか。",
      "ruby": "Aさんの　まちに　おんせんが　ありますか。",
      "kana": "エーさんの まちに おんせんが ありますか。",
      "vi": "Ở thành phố / quê của bạn có suối nước nóng không?",
      "pattern": "はい、あります ／ いいえ、ありません",
      "tip": "おんせん（温泉） = suối nước nóng.",
      "samples": [
        {
          "jp": "いいえ、私のまちにおんせんはありません。",
          "kana": "いいえ、わたしの まちに おんせんは ありません。",
          "vi": "Không, ở thành phố của tôi không có suối nước nóng."
        },
        {
          "jp": "はい、有名なおんせんがあります。",
          "kana": "はい、ゆうめいな おんせんが あります。",
          "vi": "Có, có suối nước nóng nổi tiếng."
        }
      ]
    },
    {
      "id": 32,
      "lesson": 6,
      "topic": "preference",
      "jp": "サッカーとテニスとどちらがすきですか。",
      "spaced": "サッカーと　テニスと　どちらが　すきですか。",
      "ruby": "サッカーと　テニスと　どちらが　すきですか。",
      "kana": "サッカーと テニスと どちらが すきですか。",
      "vi": "Bóng đá và quần vợt (tennis) thì bạn thích môn nào hơn?",
      "pattern": "N1 のほうが すきです ／ どちらも すきです",
      "tip": "Dùng のほうが すきです để chọn 1 trong 2 môn.",
      "samples": [
        {
          "jp": "サッカーのほうがすきです。",
          "kana": "サッカーの ほうが すきです。",
          "vi": "Tôi thích bóng đá hơn."
        },
        {
          "jp": "テニスのほうがすきです。",
          "kana": "テニスの ほうが すきです。",
          "vi": "Tôi thích tennis hơn."
        }
      ]
    },
    {
      "id": 33,
      "lesson": 4,
      "topic": "town",
      "jp": "FPT大学はどんな大学ですか。",
      "spaced": "FPT大学は　どんな　大学ですか。",
      "ruby": "FPT<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>は　どんな　<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>ですか。",
      "kana": "エフピーティーだいがくは どんな だいがくですか。",
      "vi": "Đại học FPT là trường đại học như thế nào?",
      "pattern": "FPT大学は Aい／Aな 大学です",
      "tip": "Câu hỏi đặc trưng của kỳ thi vấn đáp JPD123 tại ĐH FPT.",
      "samples": [
        {
          "jp": "FPT大学はきれいで、大きい大学です。",
          "kana": "エフピーティーだいがくは きれいで、おおきい だいがくです。",
          "vi": "Đại học FPT là ngôi trường đẹp và rộng lớn."
        },
        {
          "jp": "FPT大学は有名で、にぎやかな大学です。",
          "kana": "エフピーティーだいがくは ゆうめいで、にぎやかな だいがくです。",
          "vi": "Đại học FPT là trường đại học nổi tiếng và năng động."
        }
      ]
    },
    {
      "id": 34,
      "lesson": 6,
      "topic": "preference",
      "jp": "えいがで何がいちばんおもしろいですか。",
      "spaced": "えいがで　何が　いちばん　おもしろいですか。",
      "ruby": "えいがで　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>が　いちばん　おもしろいですか。",
      "kana": "えいがで なにが いちばん おもしろいですか。",
      "vi": "Trong các bộ phim, phim nào thú vị / hay nhất?",
      "pattern": "えいがで N が いちばん おもしろいです",
      "tip": "おもしろいです = thú vị, hấp dẫn.",
      "samples": [
        {
          "jp": "えいがでアニメがいちばんおもしろいです。",
          "kana": "えいがで アニメが いちばん おもしろいです。",
          "vi": "Trong các loại phim thì hoạt hình anime là thú vị nhất."
        },
        {
          "jp": "えいがで日本の映画がいちばんおもしろいです。",
          "kana": "えいがで にほんの えいがが いちばん おもしろいです。",
          "vi": "Trong các loại phim thì phim Nhật là thú vị nhất."
        }
      ]
    },
    {
      "id": 35,
      "lesson": 6,
      "topic": "food",
      "jp": "すしとラーメンとどちらがすきですか。",
      "spaced": "すしと　ラーメンと　どちらが　すきですか。",
      "ruby": "すしと　ラーメンと　どちらが　すきですか。",
      "kana": "すしと ラーメンと どちらが すきですか。",
      "vi": "Sushi và mì Ramen thì bạn thích món nào hơn?",
      "pattern": "すし／ラーメン のほうが すきです",
      "tip": "So sánh 2 món ăn Nhật quen thuộc.",
      "samples": [
        {
          "jp": "ラーメンのほうがすきです。",
          "kana": "ラーメンの ほうが すきです。",
          "vi": "Tôi thích mì Ramen hơn."
        },
        {
          "jp": "すしのほうがすきです。",
          "kana": "すしの ほうが すきです。",
          "vi": "Tôi thích sushi hơn."
        }
      ]
    },
    {
      "id": 36,
      "lesson": 6,
      "topic": "food",
      "jp": "ベトナム料理と日本料理とどちらがおいしいですか。",
      "spaced": "ベトナム料理と　日本料理と　どちらが　おいしいですか。",
      "ruby": "ベトナム<ruby>料理<rp>(</rp><rt>りょうり</rt><rp>)</rp></ruby>と　<ruby>日本料理<rp>(</rp><rt>にほんりょうり</rt><rp>)</rp></ruby>と　どちらが　おいしいですか。",
      "kana": "ベトナムりょうりと にほんりょうりと どちらが おいしいですか。",
      "vi": "Món ăn Việt Nam và món ăn Nhật Bản thì bên nào ngon hơn?",
      "pattern": "N1 のほうが おいしいです ／ どちらも おいしいです",
      "tip": "Trả lời どちらも おいしいです (cả hai đều ngon) rất lịch sự và tự nhiên.",
      "samples": [
        {
          "jp": "どちらもおいしいですが、ベトナム料理のほうがすきです。",
          "kana": "どちらも おいしいですが、ベトナムりょうりの ほうが すきです。",
          "vi": "Cả hai đều ngon, nhưng tôi thích món Việt hơn."
        },
        {
          "jp": "ベトナム料理のほうがおいしいです。",
          "kana": "ベトナムりょうりの ほうが おいしいです。",
          "vi": "Món ăn Việt Nam ngon hơn."
        }
      ]
    },
    {
      "id": 37,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちにきょうかいがありますか。",
      "spaced": "Aさんの　まちに　きょうかいが　ありますか。",
      "ruby": "Aさんの　まちに　きょうかいが　ありますか。",
      "kana": "エーさんの まちに きょうかいが ありますか。",
      "vi": "Ở thành phố / quê của bạn có nhà thờ không?",
      "pattern": "はい、あります ／ いいえ、ありません",
      "tip": "きょうかい（教会） = nhà thờ (từ vựng Bài 4).",
      "samples": [
        {
          "jp": "はい、大きいきょうかいがあります。",
          "kana": "はい、おおきい きょうかいが あります。",
          "vi": "Có, có một nhà thờ lớn."
        },
        {
          "jp": "いいえ、きょうかいはありません。",
          "kana": "いいえ、きょうかいは ありません。",
          "vi": "Không, không có nhà thờ."
        }
      ]
    },
    {
      "id": 38,
      "lesson": 5,
      "topic": "schedule",
      "jp": "きのうのばんどこへ行きましたか。",
      "spaced": "きのうの　ばん　どこへ　行きましたか。",
      "ruby": "きのうの　ばん　どこへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "きのうの ばん どこへ いきましたか。",
      "vi": "Tối hôm qua bạn đã đi đâu?",
      "pattern": "きのうのばん、Địa điểm へ 行きました ／ どこへも 行きませんでした",
      "tip": "きのうのばん = tối hôm qua; dùng quá khứ 行きました / 行きませんでした.",
      "samples": [
        {
          "jp": "きのうのばん、友だちとカフェへ行きました。",
          "kana": "きのうの ばん、ともだちと カフェへ いきました。",
          "vi": "Tối qua tôi đã đi cà phê với bạn."
        },
        {
          "jp": "きのうのばん、どこへも行きませんでした。うちにいました。",
          "kana": "きのうの ばん、どこへも いきませんでした。うちに いました。",
          "vi": "Tối qua tôi không đi đâu cả. Tôi ở nhà."
        }
      ]
    },
    {
      "id": 39,
      "lesson": 6,
      "topic": "experience",
      "jp": "もうおこのみやきを食べましたか。",
      "spaced": "もう　おこのみやきを　食べましたか。",
      "ruby": "もう　おこのみやきを　<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べましたか。",
      "kana": "もう おこのみやきを たべましたか。",
      "vi": "Bạn đã ăn bánh xèo Nhật (Okonomiyaki) chưa?",
      "pattern": "はい、もう 食べました ／ いいえ、まだです",
      "tip": "おこのみやき（お好み焼き） = bánh xèo Nhật.",
      "samples": [
        {
          "jp": "はい、もう食べました。とてもおいしかったです。",
          "kana": "はい、もう たべました。とても おいしかったです。",
          "vi": "Rồi, tôi đã ăn rồi. Nó rất ngon."
        },
        {
          "jp": "いいえ、まだです。食べてみたいです。",
          "kana": "いいえ、まだです。たべて みたいです。",
          "vi": "Chưa, tôi chưa ăn."
        }
      ]
    },
    {
      "id": 40,
      "lesson": 6,
      "topic": "preference",
      "jp": "きせつでいつがいちばんさむいですか。",
      "spaced": "きせつで　いつが　いちばん　さむいですか。",
      "ruby": "きせつで　いつが　いちばん　さむいですか。",
      "kana": "きせつで いつが いちばん さむいですか。",
      "vi": "Trong các mùa thì khi nào (mùa nào) lạnh nhất?",
      "pattern": "きせつで 冬（ふゆ）が いちばん さむいです",
      "tip": "Các mùa: 春（はる - xuân）, 夏（なつ - hạ）, 秋（あき - thu）, 冬（ふゆ - đông）.",
      "samples": [
        {
          "jp": "きせつで冬がいちばんさむいです。",
          "kana": "きせつで ふゆが いちばん さむいです。",
          "vi": "Trong các mùa thì mùa đông là lạnh nhất."
        },
        {
          "jp": "一月がいちばんさむいです。",
          "kana": "いちがつが いちばん さむいです。",
          "vi": "Tháng Một là lạnh nhất."
        }
      ]
    },
    {
      "id": 41,
      "lesson": 6,
      "topic": "food",
      "jp": "さかなと肉とどちらがすきですか。",
      "spaced": "さかなと　肉と　どちらが　すきですか。",
      "ruby": "さかなと　<ruby>肉<rp>(</rp><rt>にく</rt><rp>)</rp></ruby>と　どちらが　すきですか。",
      "kana": "さかなと にくと どちらが すきですか。",
      "vi": "Cá và thịt thì bạn thích món nào hơn?",
      "pattern": "さかな／肉 のほうが すきです",
      "tip": "さかな = cá; 肉（にく） = thịt.",
      "samples": [
        {
          "jp": "肉のほうがすきです。",
          "kana": "にくの ほうが すきです。",
          "vi": "Tôi thích thịt hơn."
        },
        {
          "jp": "さかなのほうがすきです。",
          "kana": "さかなの ほうが すきです。",
          "vi": "Tôi thích cá hơn."
        }
      ]
    },
    {
      "id": 42,
      "lesson": 6,
      "topic": "experience",
      "jp": "もう日本へ行きましたか。",
      "spaced": "もう　日本へ　行きましたか。",
      "ruby": "もう　<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>へ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "もう にほんへ いきましたか。",
      "vi": "Bạn đã đi Nhật Bản chưa?",
      "pattern": "はい、もう 行きました ／ いいえ、まだです",
      "tip": "Có thể mở rộng thêm 日本へ行きたいです (Tôi muốn đi Nhật).",
      "samples": [
        {
          "jp": "いいえ、まだです。来年日本へ行きたいです。",
          "kana": "いいえ、まだです。らいねん にほんへ いきたいです。",
          "vi": "Chưa, tôi chưa đi. Năm sau tôi muốn đi Nhật."
        },
        {
          "jp": "はい、もう行きました。",
          "kana": "はい、もう いきました。",
          "vi": "Rồi, tôi đã đi rồi."
        }
      ]
    },
    {
      "id": 43,
      "lesson": 5,
      "topic": "schedule",
      "jp": "あしたどこかへ行きますか。",
      "spaced": "あした　どこかへ　行きますか。",
      "ruby": "あした　どこかへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きますか。",
      "kana": "あした どこかへ いきますか。",
      "vi": "Ngày mai bạn có đi đâu không?",
      "pattern": "はい、N へ 行きます ／ いいえ、どこへも 行きません",
      "tip": "Vì là あした (ngày mai) nên dùng hiện tại/tương lai 行きます / 行きません.",
      "samples": [
        {
          "jp": "はい、あした大学へ行きます。",
          "kana": "はい、あした だいがくへ いきます。",
          "vi": "Có, ngày mai tôi đi đến trường đại học."
        },
        {
          "jp": "いいえ、あしたはどこへも行きません。",
          "kana": "いいえ、あしたは どこへも いきません。",
          "vi": "Không, ngày mai tôi không đi đâu cả."
        }
      ]
    },
    {
      "id": 44,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちは人がおおいですか。",
      "spaced": "Aさんの　まちは　人が　おおいですか。",
      "ruby": "Aさんの　まちは　<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>が　おおいですか。",
      "kana": "エーさんの まちは ひとが おおいですか。",
      "vi": "Thành phố của bạn có đông người không?",
      "pattern": "はい、人が おおいです ／ いいえ、人が すくないです",
      "tip": "おおい（多い - nhiều） đối lập với すくない（少ない - ít）.",
      "samples": [
        {
          "jp": "はい、私のまちは人がとてもおおいです。",
          "kana": "はい、わたしの まちは ひとが とても おおいです。",
          "vi": "Có, thành phố của tôi rất đông người."
        },
        {
          "jp": "いいえ、あまり人がおおくないです。",
          "kana": "いいえ、あまり ひとが おおくないです。",
          "vi": "Không, không đông người lắm."
        }
      ]
    },
    {
      "id": 45,
      "lesson": 5,
      "topic": "wish",
      "jp": "今、Aさんはお金がたくさんあります。どこへ行きたいですか。",
      "spaced": "今、Aさんは　お金が　たくさん　あります。どこへ　行きたいですか。",
      "ruby": "<ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、Aさんは　お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>が　たくさん　あります。どこへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きたいですか。",
      "kana": "いま、エーさんは おかねが たくさん あります。どこへ いきたいですか。",
      "vi": "Bây giờ bạn có nhiều tiền. Bạn muốn đi đâu?",
      "pattern": "Địa điểm へ 行きたいです",
      "tip": "行きたいです = muốn đi (từ 行きます bỏ ます + たいです).",
      "samples": [
        {
          "jp": "日本へ旅行に行きたいです。",
          "kana": "にほんへ りょこうに いきたいです。",
          "vi": "Tôi muốn đi du lịch Nhật Bản."
        },
        {
          "jp": "東京と京都へ行きたいです。",
          "kana": "とうきょうと きょうとへ いきたいです。",
          "vi": "Tôi muốn đi Tokyo và Kyoto."
        }
      ]
    },
    {
      "id": 46,
      "lesson": 6,
      "topic": "experience",
      "jp": "もうアメリカへ行きましたか。",
      "spaced": "もう　アメリカへ　行きましたか。",
      "ruby": "もう　アメリカへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "もう アメリカへ いきましたか。",
      "vi": "Bạn đã đi Mỹ chưa?",
      "pattern": "はい、もう 行きました ／ いいえ、まだです",
      "tip": "Mẫu hỏi trải nghiệm với もう Vましたか.",
      "samples": [
        {
          "jp": "いいえ、まだです。",
          "kana": "いいえ、まだです。",
          "vi": "Chưa, tôi chưa đi."
        },
        {
          "jp": "はい、もう行きました。",
          "kana": "はい、もう いきました。",
          "vi": "Rồi, tôi đã đi rồi."
        }
      ]
    },
    {
      "id": 47,
      "lesson": 5,
      "topic": "schedule",
      "jp": "きょうだれと大学へ来ましたか。",
      "spaced": "きょう　だれと　大学へ　来ましたか。",
      "ruby": "きょう　だれと　<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>へ　<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ましたか。",
      "kana": "きょう だれと だいがくへ きましたか。",
      "vi": "Hôm nay bạn đã đến trường đại học cùng với ai?",
      "pattern": "Người と 大学へ 来ました ／ 一人で 大学へ 来ました",
      "tip": "Hỏi về hôm nay đã đến trường (Came to university today) nên dùng quá khứ 来ました.",
      "samples": [
        {
          "jp": "きょう、友だちと大学へ来ました。",
          "kana": "きょう、ともだちと だいがくへ きました。",
          "vi": "Hôm nay tôi đã đến trường đại học cùng với bạn."
        },
        {
          "jp": "きょう、一人で大学へ来ました。",
          "kana": "きょう、ひとりで だいがくへ きました。",
          "vi": "Hôm nay tôi đã đến trường đại học một mình."
        }
      ]
    },
    {
      "id": 48,
      "lesson": 6,
      "topic": "experience",
      "jp": "もうタイへ行きましたか。",
      "spaced": "もう　タイへ　行きましたか。",
      "ruby": "もう　タイへ　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きましたか。",
      "kana": "もう タイへ いきましたか。",
      "vi": "Bạn đã đi Thái Lan chưa?",
      "pattern": "はい、もう 行きました ／ いいえ、まだです",
      "tip": "Mẫu hỏi trải nghiệm với もう Vましたか.",
      "samples": [
        {
          "jp": "いいえ、まだです。いつかタイへ行きたいです。",
          "kana": "いいえ、まだです。いつか タイへ いきたいです。",
          "vi": "Chưa, tôi chưa đi. Lúc nào đó tôi muốn đi Thái Lan."
        },
        {
          "jp": "はい、去年家族と行きました。",
          "kana": "はい、きょねん かぞくと いきました。",
          "vi": "Rồi, năm ngoái tôi đã đi cùng gia đình."
        }
      ]
    },
    {
      "id": 49,
      "lesson": 7,
      "topic": "town",
      "jp": "Aさんのうちのちかくにスーパーがありますか。",
      "spaced": "Aさんの　うちの　ちかくに　スーパーが　ありますか。",
      "ruby": "Aさんの　うちの　ちかくに　スーパーが　ありますか。",
      "kana": "エーさんの うちの ちかくに スーパーが ありますか。",
      "vi": "Ở gần nhà của bạn có siêu thị không?",
      "pattern": "はい、あります ／ いいえ、ありません",
      "tip": "Có thể nói thêm tên siêu thị hoặc コンビニがあります.",
      "samples": [
        {
          "jp": "はい、うちのちかくにスーパーがあります。",
          "kana": "はい、うちの ちかくに スーパーが あります。",
          "vi": "Có, ở gần nhà tôi có siêu thị."
        },
        {
          "jp": "いいえ、スーパーはありませんが、コンビニがあります。",
          "kana": "いいえ、スーパーは ありませんが、コンビニが あります。",
          "vi": "Không có siêu thị, nhưng có cửa hàng tiện lợi."
        }
      ]
    },
    {
      "id": 50,
      "lesson": 4,
      "topic": "schedule",
      "jp": "毎日何で大学へ来ますか。",
      "spaced": "毎日　何で　大学へ　来ますか。",
      "ruby": "<ruby>毎日<rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby>　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>で　<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>へ　<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ますか。",
      "kana": "まいにち なにで だいがくへ きますか。",
      "vi": "Mỗi ngày bạn đến trường đại học bằng phương tiện gì?",
      "pattern": "Phương tiện で 大学へ 来ます（歩いて = đi bộ）",
      "tip": "Đã sửa lỗi đánh máy まにち → 毎日. Chú ý: đi bộ dùng 歩いて（あるいて）, không thêm で.",
      "samples": [
        {
          "jp": "毎日バイクで大学へ来ます。",
          "kana": "まいにち バイクで だいがくへ きます。",
          "vi": "Mỗi ngày tôi đến trường đại học bằng xe máy."
        },
        {
          "jp": "毎日バスで大学へ来ます。",
          "kana": "まいにち バスで だいがくへ きます。",
          "vi": "Mỗi ngày tôi đến trường đại học bằng xe buýt."
        }
      ]
    },
    {
      "id": 51,
      "lesson": 4,
      "topic": "town",
      "jp": "ベトナムは四月、あついですか。",
      "spaced": "ベトナムは　四月、あついですか。",
      "ruby": "ベトナムは　<ruby>四月<rp>(</rp><rt>しがつ</rt><rp>)</rp></ruby>、あついですか。",
      "kana": "ベトナムは しがつ、あついですか。",
      "vi": "Ở Việt Nam vào tháng Tư trời có nóng không?",
      "pattern": "はい、あついです ／ いいえ、あまり あつくないです",
      "tip": "四月 đọc là しがつ (không đọc よんがつ).",
      "samples": [
        {
          "jp": "はい、四月はとてもあついです。",
          "kana": "はい、しがつは とても あついです。",
          "vi": "Có, tháng Tư trời rất nóng."
        },
        {
          "jp": "はい、少しあついです。",
          "kana": "はい、すこし あついです。",
          "vi": "Có, hơi nóng một chút."
        }
      ]
    },
    {
      "id": 52,
      "lesson": 4,
      "topic": "food",
      "jp": "ベトナムであつい／さむい日に何を食べますか／飲みますか。",
      "spaced": "ベトナムで　あつい／さむい　日に　何を　食べますか／飲みますか。",
      "ruby": "ベトナムで　あつい／さむい　<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>に　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を　<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べますか／<ruby>飲<rp>(</rp><rt>の</rt><rp>)</rp></ruby>みますか。",
      "kana": "ベトナムで あつい、さむい ひに なにを たべますか、のみますか。",
      "vi": "Ở Việt Nam vào ngày nóng / lạnh thì bạn ăn gì / uống gì?",
      "pattern": "あつい日に N を 食べます／飲みます",
      "tip": "Giáo viên sẽ chọn 1 vế (ngày nóng hoặc ngày lạnh, ăn hoặc uống) để hỏi.",
      "samples": [
        {
          "jp": "あつい日にアイスクリームを食べます。",
          "kana": "あつい ひに アイスクリームを たべます。",
          "vi": "Vào ngày nóng tôi ăn kem."
        },
        {
          "jp": "さむい日にあついお茶を飲みます。",
          "kana": "さむい ひに あつい おちゃを のみます。",
          "vi": "Vào ngày lạnh tôi uống trà nóng."
        }
      ]
    },
    {
      "id": 53,
      "lesson": 7,
      "topic": "people",
      "jp": "だれが日本語をおしえましたか。",
      "spaced": "だれが　日本語を　おしえましたか。",
      "ruby": "だれが　<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>を　おしえましたか。",
      "kana": "だれが にほんごを おしえましたか。",
      "vi": "Ai đã dạy tiếng Nhật (cho bạn)?",
      "pattern": "[Người] が 日本語を おしえました",
      "tip": "Khi câu hỏi dùng だれが làm chủ ngữ, câu trả lời cũng giữ trợ từ が sau tên người dạy.",
      "samples": [
        {
          "jp": "日本の先生が日本語をおしえました。",
          "kana": "にほんの せんせいが にほんごを おしえました。",
          "vi": "Thầy/cô giáo người Nhật đã dạy tiếng Nhật cho tôi."
        },
        {
          "jp": "FPT大学の先生が日本語をおしえました。",
          "kana": "エフピーティーだいがくの せんせいが にほんごを おしえました。",
          "vi": "Giảng viên Đại học FPT đã dạy tiếng Nhật cho tôi."
        }
      ]
    },
    {
      "id": 54,
      "lesson": 5,
      "topic": "wish",
      "jp": "今、だれにいちばん会いたいですか。",
      "spaced": "今、だれに　いちばん　会いたいですか。",
      "ruby": "<ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、だれに　いちばん　<ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>いたいですか。",
      "kana": "いま、だれに いちばん あいたいですか。",
      "vi": "Bây giờ bạn muốn gặp ai nhất?",
      "pattern": "今、[Người] に いちばん 会いたいです",
      "tip": "Động từ 会います（あいます - gặp） dùng với trợ từ に chỉ người mình gặp.",
      "samples": [
        {
          "jp": "今、家族にいちばん会いたいです。",
          "kana": "いま、かぞくに いちばん あいたいです。",
          "vi": "Bây giờ tôi muốn gặp gia đình nhất."
        },
        {
          "jp": "今、友だちにいちばん会いたいです。",
          "kana": "いま、ともだちに いちばん あいたいです。",
          "vi": "Bây giờ tôi muốn gặp bạn bè nhất."
        }
      ]
    },
    {
      "id": 55,
      "lesson": 4,
      "topic": "town",
      "jp": "Aさんのまちは一年中あついですか。",
      "spaced": "Aさんの　まちは　一年中　あついですか。",
      "ruby": "Aさんの　まちは　<ruby>一年中<rp>(</rp><rt>いちねんじゅう</rt><rp>)</rp></ruby>　あついですか。",
      "kana": "エーさんの まちは いちねんじゅう あついですか。",
      "vi": "Thành phố của bạn có nóng quanh năm không?",
      "pattern": "はい、一年中 あついです ／ いいえ、冬は さむいです",
      "tip": "一年中（いちねんじゅう） = suốt một năm, quanh năm.",
      "samples": [
        {
          "jp": "いいえ、一年中あつくないです。冬はさむいです。",
          "kana": "いいえ、いちねんじゅう あつくないです。ふゆは さむいです。",
          "vi": "Không, không nóng quanh năm. Mùa đông thì lạnh."
        },
        {
          "jp": "はい、ホチミン市は一年中あついです。",
          "kana": "はい、ホチミンしは いちねんじゅう あついです。",
          "vi": "Vâng, TP. Hồ Chí Minh nóng quanh năm."
        }
      ]
    },
    {
      "id": 56,
      "lesson": 5,
      "topic": "schedule",
      "jp": "しゅうまつはどうでしたか。",
      "spaced": "しゅうまつは　どうでしたか。",
      "ruby": "しゅうまつは　どうでしたか。",
      "kana": "しゅうまつは どうでしたか。",
      "vi": "Cuối tuần vừa rồi của bạn thế nào?",
      "pattern": "とても 楽しかったです ／ ひまでした",
      "tip": "どうでしたか hỏi cảm nhận về quá khứ; tính từ い đổi sang かったです, tính từ な thêm でした.",
      "samples": [
        {
          "jp": "とても楽しかったです。",
          "kana": "とても たのしかったです。",
          "vi": "Đã rất vui."
        },
        {
          "jp": "少し忙しかったですが、楽しかったです。",
          "kana": "すこし いそがしかったですが、たのしかったです。",
          "vi": "Hơi bận một chút nhưng đã rất vui."
        }
      ]
    },
    {
      "id": 57,
      "lesson": 5,
      "topic": "wish",
      "jp": "たなかさんは美術館へ何をしに行きますか。",
      "spaced": "たなかさんは　美術館へ　何を　しに　行きますか。",
      "ruby": "たなかさんは　<ruby>美術館<rp>(</rp><rt>びじゅつかん</rt><rp>)</rp></ruby>へ　<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>を　しに　<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きますか。",
      "kana": "たなかさんは びじゅつかんへ なにを しに いきますか。",
      "vi": "Anh/chị Tanaka đi đến bảo tàng mỹ thuật để làm gì?",
      "pattern": "美術館へ [N を V(bỏ ます)] に 行きます",
      "tip": "Mẫu mục đích Bài 5: 絵を見に行きます (đi xem tranh) hoặc 写真を撮りにいきます (đi chụp ảnh).",
      "samples": [
        {
          "jp": "たなかさんは美術館へ絵を見に行きます。",
          "kana": "たなかさんは びじゅつかんへ えを みに いきます。",
          "vi": "Anh Tanaka đến bảo tàng mỹ thuật để xem tranh."
        },
        {
          "jp": "美術館へ写真を撮りに行きます。",
          "kana": "びじゅつかんへ しゃしんを とりに いきます。",
          "vi": "Anh ấy đến bảo tàng mỹ thuật để chụp ảnh."
        }
      ]
    }
  ],
  "audio": {
    "あした どこかへ いきますか。": "c8d8ef569cfe290c2104.mp3",
    "あした、いっしょに かいものに いきませんか。": "c34dbb9489958ac596e3.mp3",
    "あたらしい くるまを かいたいです。": "8e0da890357ff46394c7.mp3",
    "あつい ひに アイスクリームを たべます。": "62679cdd1081c19ffdc5.mp3",
    "いいえ、あしたは どこへも いきません。": "b4ec5b57d738153d3417.mp3",
    "いいえ、あまり きれいな かわは ありません。": "38020e51113cde9f46d3.mp3",
    "いいえ、あまり ひとが おおくないです。": "2bb6df772ac6f024f456.mp3",
    "いいえ、いちねんじゅう あつくないです。ふゆは さむいです。": "04d2ff5d9813dc06f7e5.mp3",
    "いいえ、きょうかいは ありません。": "96893f54b029dd157b36.mp3",
    "いいえ、どこへも いきませんでした。": "6120363be9516688ea3c.mp3",
    "いいえ、まだです。": "5f311ee0178ca162faac.mp3",
    "いいえ、まだです。いつか いきたいです。": "ce6f33111309a31d76e6.mp3",
    "いいえ、まだです。いつか タイへ いきたいです。": "7bb28d1ded33937b5c2b.mp3",
    "いいえ、まだです。たべて みたいです。": "cb30155f4e05427ec2e0.mp3",
    "いいえ、まだです。らいねん にほんへ いきたいです。": "c87472b3301297ae5c08.mp3",
    "いいえ、わたしの まちに おんせんは ありません。": "01c803f3071ea935dba0.mp3",
    "いいえ、わたしの まちに やまが ありません。": "5fe500ff2c7f3fcc20cd.mp3",
    "いいえ、スーパーは ありませんが、コンビニが あります。": "a9bac74f8cd8ed25c7f9.mp3",
    "いいですね。いきましょう。": "0bff781b8c890534792e.mp3",
    "いいですね。いっしょに いきましょう。": "84ae5662f36a73a6945a.mp3",
    "いいですね。ぜひ いきましょう。": "ad85b1456e8524b20001.mp3",
    "いえの そとに いぬが います。": "747ba07cb90cdcd7a4c7.mp3",
    "いえの そとに きと くるまが あります。": "4d33895f69504a2905bb.mp3",
    "いえの そとに ちいさい にわが あります。": "dad368f183ca9266083b.mp3",
    "いえの そとに どんな どうぶつが いますか。いぬ、ねこ、さかなが います。": "a8f66b4b8dfc8171e30b.mp3",
    "いえの そとに なにが ありますか。": "2ef7c91c12286df78a80.mp3",
    "いえの そとに ねこが いっぱい います。": "58fa2a86f8974227be2f.mp3",
    "いちがつが いちばん さむいです。": "d7c8e282673760fee7b8.mp3",
    "いま、あたらしい パソコンが いちばん ほしいです。": "feb773c20cad7e5d4d22.mp3",
    "いま、かぞくに いちばん あいたいです。": "87739700f127ac294d98.mp3",
    "いま、くるまが いちばん ほしいです。": "a964be1b5a0b4d2078c7.mp3",
    "いま、だれに いちばん あいたいですか。": "4146c39f6827d3a04bf1.mp3",
    "いま、ともだちに いちばん あいたいです。": "000337d4e2c567207be2.mp3",
    "いま、エーさんは おかねが たくさん あります。どこへ いきたいですか。": "93e2bca87d9006483c4d.mp3",
    "いま、エーさんは おかねが たくさん あります。なにを かいたいですか。": "c74ace03a2c562ece627.mp3",
    "いま、エーさんは なにが いちばん ほしいですか。": "a709ecce48c0e53d5843.mp3",
    "えいがで なにが いちばん おもしろいですか。": "4c569d612cbf8dd810d8.mp3",
    "えいがで なにが いちばん すきですか。": "c15a9ab7c3f5f9313c22.mp3",
    "えいがで にほんの えいがが いちばん おもしろいです。": "cd9f98519993b2d536b6.mp3",
    "えいがで にほんの えいがが いちばん すきです。": "9c0a0bfbcaa5ff948af2.mp3",
    "えいがで アニメが いちばん おもしろいです。": "92966d008f953daccc2b.mp3",
    "えいがで アニメが いちばん すきです。": "707b6869373a03114e78.mp3",
    "おいしくて、やすいです。": "c636512dc22d80ccf323.mp3",
    "おおきい いえを かいたいです。": "299458e3a5fc5ce588f4.mp3",
    "きせつで いつが いちばん さむいですか。": "d88226b49dabc4bee46b.mp3",
    "きせつで ふゆが いちばん さむいです。": "ef57591722b60a6bc321.mp3",
    "きのう なにを しましたか。": "83b17ea1ad60690735b9.mp3",
    "きのう、ともだちと かいものを しました。": "44e05a25901ba7fe1548.mp3",
    "きのう、どこかへ いきましたか。": "e97b50fa60f2ca2fabcc.mp3",
    "きのう、にほんごを べんきょうしました。": "8973675cc5c085071de8.mp3",
    "きのうの ばん どこへ いきましたか。": "e67e7273632b1537fcd1.mp3",
    "きのうの ばん、ともだちと カフェへ いきました。": "c4cd664cc8a73d2376ac.mp3",
    "きのうの ばん、どこへも いきませんでした。うちに いました。": "1831eda25eb13017ffb7.mp3",
    "きょう だれと だいがくへ きましたか。": "fc33655aa958907eb432.mp3",
    "きょう、ともだちと だいがくへ きました。": "0f01301d75baf45f36a9.mp3",
    "きょう、ひとりで だいがくへ きました。": "e8ac031294333047db21.mp3",
    "ぎゅうにくと ぶたにくと どちらが たかいですか。": "7daf548b6ae97d00fa56.mp3",
    "ぎゅうにくの ほうが たかいです。": "8eaecf7fce33d982caf2.mp3",
    "ぎゅうにくは ぶたにくより たかいです。": "a5814e453f0612180d9b.mp3",
    "こんばん、いっしょに カラオケに いきませんか。": "8cfdb7ce2d2a04d7c7e1.mp3",
    "さかなと にくと どちらが すきですか。": "737206cb33a270040766.mp3",
    "さかなの ほうが すきです。": "fac405ace4b2f071e9aa.mp3",
    "さむい ひに あつい おちゃを のみます。": "4a5560e2d23355cef18a.mp3",
    "しゅうまつ なにを しますか。": "81b551e184eafeec0e33.mp3",
    "しゅうまつ、うちで ほんを よみます。それから、サッカーを します。": "56228d6109c12bbbd3e5.mp3",
    "しゅうまつ、ともだちと えいがを みます。": "0d03fd4a79bff150fc2c.mp3",
    "しゅうまつは どうでしたか。": "9a725cff8a16b0e61e59.mp3",
    "すこし いそがしかったですが、たのしかったです。": "475303c5c410f4e06f9c.mp3",
    "すしと ラーメンと どちらが すきですか。": "a1ae3a39567b32684098.mp3",
    "すしの ほうが すきです。": "8badb82d962fdac7630c.mp3",
    "すみません、あしたは ちょっと... アルバイトが ありますから。": "f9f827c39320926d27da.mp3",
    "すみません、こんばんは ちょっと... しゅくだいが ありますから。": "d73e5b529307ed5fc2b2.mp3",
    "すみません、らいしゅうの どようびは ちょっと... ようじが ありますから。": "c6fc47acb8d713ed6fb5.mp3",
    "たなかさんは びじゅつかんへ えを みに いきます。": "0fa7eaa345eba3935235.mp3",
    "たなかさんは びじゅつかんへ なにを しに いきますか。": "2b0484ae386eba111407.mp3",
    "たべもので すしが いちばん すきです。": "8038546224d88e677460.mp3",
    "たべもので なにが いちばん すきですか。": "1152731fc7347398eec4.mp3",
    "たべもので フォーが いちばん すきです。": "b5e4bc25969331018fef.mp3",
    "だれが にほんごを おしえましたか。": "91f5276a904ff1300187.mp3",
    "とうきょうと きょうとへ いきたいです。": "76c68f11ea753a929ce5.mp3",
    "とても たのしかったです。": "727354563578d6b6b6c9.mp3",
    "ともだちと がっこうへ きます。": "c7babe16c04a9e8b81a0.mp3",
    "どちらも おいしいですが、ベトナムりょうりの ほうが すきです。": "fb3b11f05ebb94016bb3.mp3",
    "どちらも すきです。": "0016724bec8218961a24.mp3",
    "にくの ほうが すきです。": "8d361bb6a74a8b8dd0af.mp3",
    "にほんじんは なにで ごはんを たべますか。": "4f8321620aab4c933af7.mp3",
    "にほんじんは はしで ごはんを たべます。": "9e2c8b6b984a6ec219d9.mp3",
    "にほんの せんせいが にほんごを おしえました。": "c268c3488844abccc985.mp3",
    "にほんへ りょこうに いきたいです。": "1be2eb5e262e19dc81b4.mp3",
    "のみもので おちゃが いちばん すきです。": "db8b00906915247faa86.mp3",
    "のみもので なにが いちばん すきですか。": "63de68278ae0984188c6.mp3",
    "のみもので コーヒーが いちばん すきです。": "2cca1c5112b8ea8e65d4.mp3",
    "はい、あした だいがくへ いきます。": "e7eb597f6a2f2a9ea96f.mp3",
    "はい、うちの ちかくに スーパーが あります。": "4550b680ac19017d638b.mp3",
    "はい、おおきい きょうかいが あります。": "6ad70d6f0ac01bb740de.mp3",
    "はい、きょねん いきました。": "94afed4f3634abbaa348.mp3",
    "はい、きょねん かぞくと いきました。": "7bea0d3736ac6ea9e063.mp3",
    "はい、きれいな かわが あります。": "3c66e86d6cc251f74a97.mp3",
    "はい、しがつは とても あついです。": "7c731af6f1175c4544ed.mp3",
    "はい、すこし あついです。": "2c9572f8beabbe00eb77.mp3",
    "はい、たかい やまが あります。": "9415461c6a943f9e2450.mp3",
    "はい、ともだちと スーパーへ いきました。": "61b398b95a8b293468aa.mp3",
    "はい、もう いきました。": "042c865ae378ca6cac97.mp3",
    "はい、もう たべました。とても おいしかったです。": "622f4e73b01954370f43.mp3",
    "はい、ゆうめいな おんせんが あります。": "716dcf190ff5db43e695.mp3",
    "はい、わたしの まちは ひとが とても おおいです。": "503f6664903a8113f5ed.mp3",
    "はい、ホチミンしは いちねんじゅう あついです。": "cdd2025e5406751d4291.mp3",
    "はしと スプーンで ごはんを たべます。": "006172b148d2e782cb4c.mp3",
    "ひとりで がっこうへ きます。": "346c3cd0111ba20e3c13.mp3",
    "びじゅつかんへ しゃしんを とりに いきます。": "4dff508f0f7fd4d3d6a8.mp3",
    "まいにち だれと がっこうへ きますか。": "06693357d3935c36a131.mp3",
    "まいにち なにで だいがくへ きますか。": "ca06a250838eb562c714.mp3",
    "まいにち バイクで だいがくへ きます。": "52397b7eb6e0078b196e.mp3",
    "まいにち バスで だいがくへ きます。": "e51d05c7c385fa76cd4b.mp3",
    "もう おこのみやきを たべましたか。": "596e6f51400c61794d22.mp3",
    "もう ちゅうごくへ いきましたか。": "b7026cd3ce24df2c9d75.mp3",
    "もう にほんへ いきましたか。": "46ca44ab539da0b5a329.mp3",
    "もう アメリカへ いきましたか。": "d5713b92d788a864d8f7.mp3",
    "もう タイへ いきましたか。": "2a607fc052fd4583b870.mp3",
    "もう ブラジルへ いきましたか。": "9519ffb0d6df2dc1cbc0.mp3",
    "らいしゅうの どようび、いっしょに コンサートに いきませんか。": "9b454931a21f16a805ce.mp3",
    "わたしの うちの ちかくに おおきい スーパーが あります。": "38171e63ad76d5b496a4.mp3",
    "わたしの うちの ちかくに コンビニと こうえんが あります。": "c1f0488a8c9105ac3b56.mp3",
    "わたしの うちは だいがくの ちかくに あります。": "94b8ebcc088171d4a99d.mp3",
    "わたしの うちは ハノイに あります。": "68d6f7a6648c3a28da2a.mp3",
    "わたしの まちに きれいな うみと やまが あります。": "38475c1890d8b9d47349.mp3",
    "わたしの まちに ゆうめいな おてらが あります。": "b61941f56b687c691b73.mp3",
    "わたしの まちは とても しずかです。": "96addfe2afe5de5301f0.mp3",
    "わたしの まちは とても にぎやかです。": "680c35d4bb3256e8eac0.mp3",
    "エフピーティーだいがくの せんせいが にほんごを おしえました。": "f996564d9982691daf77.mp3",
    "エフピーティーだいがくは きれいで、おおきい だいがくです。": "7bbe7eee67cebd670700.mp3",
    "エフピーティーだいがくは どんな だいがくですか。": "ea7ec506c4005229d8d1.mp3",
    "エフピーティーだいがくは ゆうめいで、にぎやかな だいがくです。": "7aedc8397195a718c298.mp3",
    "エーさんの うちの ちかくに なにが ありますか。": "a14b1256b40341bb4721.mp3",
    "エーさんの うちの ちかくに スーパーが ありますか。": "a7efeddeae72aa9ed34a.mp3",
    "エーさんの うちは どこに ありますか。": "ac0566066fe15d6ec15a.mp3",
    "エーさんの まちに おんせんが ありますか。": "bc5d32e816e45f36154e.mp3",
    "エーさんの まちに きょうかいが ありますか。": "592acfdcaa9ab973c6ab.mp3",
    "エーさんの まちに きれいな かわが ありますか。": "d313aebd0afa680277f5.mp3",
    "エーさんの まちに たかい やまが ありますか。": "32002a0555f9346ff31a.mp3",
    "エーさんの まちに なにが ありますか。": "7e25932de55ab79419d7.mp3",
    "エーさんの まちは いちねんじゅう あついですか。": "a08708a133b44678808e.mp3",
    "エーさんの まちは しずかですか、にぎやかですか。": "9fd8649bfa545e91157b.mp3",
    "エーさんの まちは ひとが おおいですか。": "b003700a791a77f26e0c.mp3",
    "サッカーと すいえいと どちらが すきですか。": "78892f30fe03c12a3a63.mp3",
    "サッカーと テニスと どちらが すきですか。": "ddc373e3ee66cd0adb86.mp3",
    "サッカーの ほうが すきです。": "83394168e4fb930ff0ff.mp3",
    "ダナンしは きれいで、しずかな ところです。": "ca6f51f071a1dcbd3ccc.mp3",
    "テニスの ほうが すきです。": "dfa6eed1efb225689435.mp3",
    "ハノイ、ホチミンし、ダナンしは どんな まち、ところですか。": "43cddb75d5381f2cd8f0.mp3",
    "ハノイは にぎやかな まちです。": "a44534726885f91e6244.mp3",
    "ベトナムじんの かしゅで だれが いちばん すきですか。": "4b6e8923075a078723fb.mp3",
    "ベトナムじんの かしゅで ソン・トゥン エムティーピーが いちばん すきです。": "74387f90365123d7c321.mp3",
    "ベトナムじんの かしゅで ミー・タムが いちばん すきです。": "e273b622703353bbc9c1.mp3",
    "ベトナムじんは なにで ごはんを たべますか。": "f9662151298965f2f95e.mp3",
    "ベトナムじんも はしで ごはんを たべます。": "dc6d61bb374a5d4be86f.mp3",
    "ベトナムで あつい、さむい ひに なにを たべますか、のみますか。": "12bbab02249443ceb0e1.mp3",
    "ベトナムで どこが いちばん きれいですか。": "76ed12da19265db6b7dd.mp3",
    "ベトナムで ダナンが いちばん きれいです。": "fd0c97bbdca52a8eb29f.mp3",
    "ベトナムで ニャチャンが いちばん きれいです。": "338f53dc7c3053e1b860.mp3",
    "ベトナムの りょうりは とても おいしいです。": "dc81146fd56410e30906.mp3",
    "ベトナムの りょうりは どうですか。": "37f964294ce7964994c7.mp3",
    "ベトナムは しがつ、あついですか。": "8bdafbc440e464193cc4.mp3",
    "ベトナムりょうりと にほんりょうりと どちらが おいしいですか。": "11d5c4df96025d88f182.mp3",
    "ベトナムりょうりの ほうが おいしいです。": "2f6f5cc36cbeb9672fea.mp3",
    "ラーメンの ほうが すきです。": "843d131277191d48cbbb.mp3"
  }
};
