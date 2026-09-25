// Transcribed from the supplied speaking PDF; token readings reviewed separately.
const READING_LEXICON = [
  {
    "k": "はじめまして",
    "h": "はじめまして",
    "r": "hajimemashite",
    "m": "Xin chào (lần đầu gặp mặt)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "私",
    "h": "わたし",
    "r": "watashi",
    "m": "Tôi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "は",
    "h": "わ",
    "r": "wa",
    "m": "Trợ từ chủ đề; viết は nhưng đọc wa",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "パク",
    "h": "ぱく",
    "r": "paku",
    "m": "Pak (tên người)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "です",
    "h": "です",
    "r": "desu",
    "m": "Đuôi câu lịch sự",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "韓国人",
    "h": "かんこくじん",
    "r": "kankokujin",
    "m": "Người Hàn Quốc",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あおぞら",
    "h": "あおぞら",
    "r": "aozora",
    "m": "Aozora (tên trường)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "日本語学校",
    "h": "にほんごがっこう",
    "r": "nihongogakkou",
    "m": "Trường tiếng Nhật",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "の",
    "h": "の",
    "r": "no",
    "m": "Nối hai danh từ; của",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "学生",
    "h": "がくせい",
    "r": "gakusei",
    "m": "Học sinh",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "26歳",
    "h": "にじゅうろくさい",
    "r": "nijuurokusai",
    "m": "26 tuổi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "趣味",
    "h": "しゅみ",
    "r": "shumi",
    "m": "Sở thích",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "旅行",
    "h": "りょこう",
    "r": "ryokou",
    "m": "Du lịch",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "と",
    "h": "と",
    "r": "to",
    "m": "Và; cùng với; dùng khi so sánh",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "映画",
    "h": "えいが",
    "r": "eiga",
    "m": "Phim, điện ảnh",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どうぞ",
    "h": "どうぞ",
    "r": "douzo",
    "m": "Xin mời",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "よろしく",
    "h": "よろしく",
    "r": "yoroshiku",
    "m": "Rất mong (dùng trong lời chào, nhờ giúp đỡ)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "お願いします",
    "h": "おねがいします",
    "r": "onegaishimasu",
    "m": "Làm ơn, nhờ bạn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ここ",
    "h": "ここ",
    "r": "koko",
    "m": "Đây, chỗ này",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "クプクプ",
    "h": "くぷくぷ",
    "r": "kupukupu",
    "m": "Kupu Kupu (tên tiệm bánh)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "パン屋",
    "h": "ぱんや",
    "r": "panya",
    "m": "Tiệm bánh mì",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "これ",
    "h": "これ",
    "r": "kore",
    "m": "Cái này",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "パン",
    "h": "ぱん",
    "r": "pan",
    "m": "Bánh mỳ",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "1つ",
    "h": "ひとつ",
    "r": "hitotsu",
    "m": "Một cái",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "200円",
    "h": "にひゃくえん",
    "r": "nihyakuen",
    "m": "200 yên",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "おいしい",
    "h": "おいしい",
    "r": "oishii",
    "m": "Ngon",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "月曜日",
    "h": "げつようび",
    "r": "getsuyoubi",
    "m": "Thứ hai",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "から",
    "h": "から",
    "r": "kara",
    "m": "Từ; vì, bởi vì",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "金曜日",
    "h": "きんようび",
    "r": "kinyoubi",
    "m": "Thứ sáu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "まで",
    "h": "まで",
    "r": "made",
    "m": "Đến, cho đến",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "学校",
    "h": "がっこう",
    "r": "gakkou",
    "m": "Trường học",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "へ",
    "h": "え",
    "r": "e",
    "m": "Trợ từ chỉ hướng; viết へ nhưng đọc e",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "行きます",
    "h": "いきます",
    "r": "ikimasu",
    "m": "Đi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "朝",
    "h": "あさ",
    "r": "asa",
    "m": "Buổi sáng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "9時",
    "h": "くじ",
    "r": "kuji",
    "m": "9 giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "12時半",
    "h": "じゅうにじはん",
    "r": "juunijihan",
    "m": "12 giờ rưỡi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "で",
    "h": "で",
    "r": "de",
    "m": "Chỉ nơi diễn ra hành động hoặc phương tiện",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "日本語",
    "h": "にほんご",
    "r": "nihongo",
    "m": "Tiếng Nhật",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "を",
    "h": "お",
    "r": "o",
    "m": "Trợ từ chỉ tân ngữ; đọc o",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "勉強します",
    "h": "べんきょうします",
    "r": "benkyoushimasu",
    "m": "Học, học bài, học tập",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "週末",
    "h": "しゅうまつ",
    "r": "shuumatsu",
    "m": "Cuối tuần",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "図書館",
    "h": "としょかん",
    "r": "toshokan",
    "m": "Thư viện",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "本",
    "h": "ほん",
    "r": "hon",
    "m": "Sách, quyển sách",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "読みます",
    "h": "よみます",
    "r": "yomimasu",
    "m": "Đọc",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "水曜日",
    "h": "すいようび",
    "r": "suiyoubi",
    "m": "Thứ tư",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "土曜日",
    "h": "どようび",
    "r": "doyoubi",
    "m": "Thứ bảy",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "コンビニ",
    "h": "こんびに",
    "r": "konbini",
    "m": "Cửa hàng tiện lợi",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "アルバイト",
    "h": "あるばいと",
    "r": "arubaito",
    "m": "Việc làm thêm",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "します",
    "h": "します",
    "r": "shimasu",
    "m": "Làm, chơi",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "4時",
    "h": "よじ",
    "r": "yoji",
    "m": "4 giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "8時",
    "h": "はちじ",
    "r": "hachiji",
    "m": "8 giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "働きます",
    "h": "はたらきます",
    "r": "hatarakimasu",
    "m": "Làm việc, lao động",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "イタリア",
    "h": "いたりあ",
    "r": "itaria",
    "m": "Ý",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "フィレンツェ",
    "h": "ふぃれんつぇ",
    "r": "firentse",
    "m": "Florence (thành phố ở Ý)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "来ました",
    "h": "きました",
    "r": "kimashita",
    "m": "Tới, đến (biến thể của 来ます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "少し",
    "h": "すこし",
    "r": "sukoshi",
    "m": "Một chút, ít",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "北",
    "h": "きた",
    "r": "kita",
    "m": "Phía bắc",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "とても",
    "h": "とても",
    "r": "totemo",
    "m": "Rất",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "にぎやか",
    "h": "にぎやか",
    "r": "nigiyaka",
    "m": "Náo nhiệt, nhộn nhịp",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "な",
    "h": "な",
    "r": "na",
    "m": "Nối tính từ な với danh từ",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "ところ",
    "h": "ところ",
    "r": "tokoro",
    "m": "Nơi, chỗ",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "古い",
    "h": "ふるい",
    "r": "furui",
    "m": "Cũ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "教会",
    "h": "きょうかい",
    "r": "kyoukai",
    "m": "Nhà thờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "や",
    "h": "や",
    "r": "ya",
    "m": "Và… (liệt kê không hết)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "美術館",
    "h": "びじゅつかん",
    "r": "bijutsukan",
    "m": "Bảo tàng mỹ thuật",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "など",
    "h": "など",
    "r": "nado",
    "m": "Vân vân",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "が",
    "h": "が",
    "r": "ga",
    "m": "Trợ từ chỉ chủ ngữ, đối tượng của 好き",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "あります",
    "h": "あります",
    "r": "arimasu",
    "m": "Có",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "きれい",
    "h": "きれい",
    "r": "kirei",
    "m": "Đẹp, sạch sẽ",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "2月",
    "h": "にがつ",
    "r": "nigatsu",
    "m": "Tháng hai",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "に",
    "h": "に",
    "r": "ni",
    "m": "Chỉ thời điểm, nơi tồn tại hoặc đích đến",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "チョコレート",
    "h": "ちょこれーと",
    "r": "chokoreeto",
    "m": "Sô cô la",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "祭り",
    "h": "まつり",
    "r": "matsuri",
    "m": "Lễ hội",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "いろいろな",
    "h": "いろいろな",
    "r": "iroirona",
    "m": "Nhiều, đa dạng",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "春",
    "h": "はる",
    "r": "haru",
    "m": "Mùa xuân",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "暖かい",
    "h": "あたたかい",
    "r": "atatakai",
    "m": "Ấm áp (thời tiết)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "そして",
    "h": "そして",
    "r": "soshite",
    "m": "Và / Rồi thì",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "雨",
    "h": "あめ",
    "r": "ame",
    "m": "Mưa",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "少ない",
    "h": "すくない",
    "r": "sukunai",
    "m": "Ít ～",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "いい",
    "h": "いい",
    "r": "ii",
    "m": "Tốt",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "皆さん",
    "h": "みなさん",
    "r": "minasan",
    "m": "Mọi người",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ぜひ",
    "h": "ぜひ",
    "r": "zehi",
    "m": "Nhất định",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "来て",
    "h": "きて",
    "r": "kite",
    "m": "Đến (thể て của 来ます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ください",
    "h": "ください",
    "r": "kudasai",
    "m": "Xin hãy… (sau thể て)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "日曜日",
    "h": "にちようび",
    "r": "nichiyoubi",
    "m": "Chủ nhật",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "友達",
    "h": "ともだち",
    "r": "tomodachi",
    "m": "Bạn bè",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "近く",
    "h": "ちかく",
    "r": "chikaku",
    "m": "Gần (ở vị trí gần)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "山",
    "h": "やま",
    "r": "yama",
    "m": "Núi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "登りました",
    "h": "のぼりました",
    "r": "noborimashita",
    "m": "Leo, trèo (biến thể của 登ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "天気",
    "h": "てんき",
    "r": "tenki",
    "m": "Thời tiết",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "よかった",
    "h": "よかった",
    "r": "yokatta",
    "m": "Đã tốt, đẹp (quá khứ của いい)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ですから",
    "h": "ですから",
    "r": "desukara",
    "m": "Vì …",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "気持ち",
    "h": "きもち",
    "r": "kimochi",
    "m": "Cảm giác, tâm trạng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "お弁当",
    "h": "おべんとう",
    "r": "obentou",
    "m": "Cơm hộp",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べました",
    "h": "たべました",
    "r": "tabemashita",
    "m": "Ăn (biến thể của 食べます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "景色",
    "h": "けしき",
    "r": "keshiki",
    "m": "Phong cảnh",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "でした",
    "h": "でした",
    "r": "deshita",
    "m": "Quá khứ lịch sự của です",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "それから",
    "h": "それから",
    "r": "sorekara",
    "m": "Sau đó",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "お寺",
    "h": "おてら",
    "r": "otera",
    "m": "Chùa",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "見",
    "h": "み",
    "r": "mi",
    "m": "Xem (thân động từ 見ます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "行きました",
    "h": "いきました",
    "r": "ikimashita",
    "m": "Đi (biến thể của 行きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "おもしろかった",
    "h": "おもしろかった",
    "r": "omoshirokatta",
    "m": "Thú vị, hay, hấp dẫn (biến thể của おもしろい)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "楽しい",
    "h": "たのしい",
    "r": "tanoshii",
    "m": "Vui vẻ (không khí)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "1日",
    "h": "いちにち",
    "r": "ichinichi",
    "m": "Một ngày",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "また",
    "h": "また",
    "r": "mata",
    "m": "Lại",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "行きたいです",
    "h": "いきたいです",
    "r": "ikitaidesu",
    "m": "Đi (biến thể của 行きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "日本",
    "h": "にほん",
    "r": "nihon",
    "m": "Nhật Bản",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べ物",
    "h": "たべもの",
    "r": "tabemono",
    "m": "Đồ ăn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "何",
    "h": "なに",
    "r": "nani",
    "m": "Cái gì (なに; trước ですか đọc なん)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "いちばん",
    "h": "いちばん",
    "r": "ichiban",
    "m": "Nhất",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "好き",
    "h": "すき",
    "r": "suki",
    "m": "Thích",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "か",
    "h": "か",
    "r": "ka",
    "m": "Trợ từ nghi vấn",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "お好み焼き",
    "h": "おこのみやき",
    "r": "okonomiyaki",
    "m": "Món bánh xèo Nhật",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ピザ",
    "h": "ぴざ",
    "r": "piza",
    "m": "Bánh pizza",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "中",
    "h": "なか",
    "r": "naka",
    "m": "Trong, bên trong",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "豚肉",
    "h": "ぶたにく",
    "r": "butaniku",
    "m": "Thịt lợn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "卵",
    "h": "たまご",
    "r": "tamago",
    "m": "Trứng, quả trứng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "野菜",
    "h": "やさい",
    "r": "yasai",
    "m": "Rau",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ソース",
    "h": "そーす",
    "r": "soosu",
    "m": "Nước xốt",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "甘い",
    "h": "あまい",
    "r": "amai",
    "m": "Ngọt",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "よ",
    "h": "よ",
    "r": "yo",
    "m": "Đấy (cung cấp thông tin)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "今度",
    "h": "こんど",
    "r": "kondo",
    "m": "Lần tới",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "一緒に",
    "h": "いっしょに",
    "r": "isshoni",
    "m": "Cùng với",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べ",
    "h": "たべ",
    "r": "tabe",
    "m": "Ăn (thân động từ 食べます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "行きません",
    "h": "いきません",
    "r": "ikimasen",
    "m": "Đi (biến thể của 行きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "来週",
    "h": "らいしゅう",
    "r": "raishuu",
    "m": "Tuần sau",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "家",
    "h": "いえ",
    "r": "ie",
    "m": "Nhà, ngôi nhà",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "パーティー",
    "h": "ぱーてぃー",
    "r": "paatii",
    "m": "Bữa tiệc",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "国",
    "h": "くに",
    "r": "kuni",
    "m": "Đất nước",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "料理",
    "h": "りょうり",
    "r": "ryouri",
    "m": "Nấu ăn / Món ăn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "作ります",
    "h": "つくります",
    "r": "tsukurimasu",
    "m": "Làm ra, chế tạo",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "作りません",
    "h": "つくりません",
    "r": "tsukurimasen",
    "m": "Làm ra, chế tạo (biến thể của 作ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "作り方",
    "h": "つくりかた",
    "r": "tsukurikata",
    "m": "Cách làm, cách nấu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "も",
    "h": "も",
    "r": "mo",
    "m": "Cũng",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "教えて",
    "h": "おしえて",
    "r": "oshiete",
    "m": "Chỉ, dạy (thể て của 教えます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "作って",
    "h": "つくって",
    "r": "tsukutte",
    "m": "Làm, nấu (thể て của 作ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べましょう",
    "h": "たべましょう",
    "r": "tabemashou",
    "m": "Ăn (biến thể của 食べます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "お酒",
    "h": "おさけ",
    "r": "osake",
    "m": "Rượu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "飲みましょう",
    "h": "のみましょう",
    "r": "nomimashou",
    "m": "Uống (biến thể của 飲みます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "アパート",
    "h": "あぱーと",
    "r": "apaato",
    "m": "Căn hộ, khu nhà trọ",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "駅",
    "h": "えき",
    "r": "eki",
    "m": "Nhà ga",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "隣",
    "h": "となり",
    "r": "tonari",
    "m": "Bên cạnh (cạnh sát)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "新しい",
    "h": "あたらしい",
    "r": "atarashii",
    "m": "Mới",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "お国",
    "h": "おくに",
    "r": "okuni",
    "m": "Đất nước của bạn (lịch sự)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どちら",
    "h": "どちら",
    "r": "dochira",
    "m": "Ở đâu / Phía nào",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "オーストラリア",
    "h": "おーすとらりあ",
    "r": "oosutoraria",
    "m": "Úc",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "どこ",
    "h": "どこ",
    "r": "doko",
    "m": "Ở đâu",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "シドニー",
    "h": "しどにー",
    "r": "shidonii",
    "m": "Sydney",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "東",
    "h": "ひがし",
    "r": "higashi",
    "m": "Phía đông",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "東京",
    "h": "とうきょう",
    "r": "toukyou",
    "m": "Tokyo",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "アユタヤ",
    "h": "あゆたや",
    "r": "ayutaya",
    "m": "Ayutthaya (Thái Lan)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "どのくらい",
    "h": "どのくらい",
    "r": "donokurai",
    "m": "Bao lâu",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "バンコク",
    "h": "ばんこく",
    "r": "bankoku",
    "m": "Bangkok",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "飛行機",
    "h": "ひこうき",
    "r": "hikouki",
    "m": "Máy bay",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "6時間",
    "h": "ろくじかん",
    "r": "rokujikan",
    "m": "Sáu tiếng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "くらい",
    "h": "くらい",
    "r": "kurai",
    "m": "Khoảng",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "バス",
    "h": "ばす",
    "r": "basu",
    "m": "Xe buýt",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "1時間半",
    "h": "いちじかんはん",
    "r": "ichijikanhan",
    "m": "Một tiếng rưỡi",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "へえ",
    "h": "へえ",
    "r": "hee",
    "m": "Chà / Wow",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "さん",
    "h": "さん",
    "r": "san",
    "m": "Cách gọi lịch sự sau tên người",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "町",
    "h": "まち",
    "r": "machi",
    "m": "Thành phố, thị trấn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どんな",
    "h": "どんな",
    "r": "donna",
    "m": "Như thế nào",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "お城",
    "h": "おしろ",
    "r": "oshiro",
    "m": "Lâu đài",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "大きい",
    "h": "おおきい",
    "r": "ookii",
    "m": "To, lớn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "姫路城",
    "h": "ひめじじょう",
    "r": "himejijou",
    "m": "Lâu đài Himeji",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "有名",
    "h": "ゆうめい",
    "r": "yuumei",
    "m": "Nổi tiếng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "高尾山",
    "h": "たかおさん",
    "r": "takaosan",
    "m": "Núi Takao",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "低い",
    "h": "ひくい",
    "r": "hikui",
    "m": "Thấp",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ですが",
    "h": "ですが",
    "r": "desuga",
    "m": "… nhưng …",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "毎日",
    "h": "まいにち",
    "r": "mainichi",
    "m": "Hàng ngày",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "暑い",
    "h": "あつい",
    "r": "atsui",
    "m": "Nóng bức (thời tiết)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ね",
    "h": "ね",
    "r": "ne",
    "m": "Nhỉ, nhé (xác nhận, đồng tình)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "そうですね",
    "h": "そうですね",
    "r": "soudesune",
    "m": "Đúng vậy nhỉ",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "8月",
    "h": "はちがつ",
    "r": "hachigatsu",
    "m": "Tháng tám",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "はい",
    "h": "はい",
    "r": "hai",
    "m": "Vâng",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "どう",
    "h": "どう",
    "r": "dou",
    "m": "Thế nào",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "あまり",
    "h": "あまり",
    "r": "amari",
    "m": "Không ～ lắm / Không ～ mấy",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "暑くない",
    "h": "あつくない",
    "r": "atsukunai",
    "m": "Nóng bức (thời tiết) (biến thể của 暑い)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "夏",
    "h": "なつ",
    "r": "natsu",
    "m": "Mùa hè",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べます",
    "h": "たべます",
    "r": "tabemasu",
    "m": "Ăn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "サムゲタン",
    "h": "さむげたん",
    "r": "samugetan",
    "m": "Canh gà hầm sâm Hàn Quốc",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "さむげたん",
    "h": "さむげたん",
    "r": "samugetan",
    "m": "Nhắc lại tên món samgyetang",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "何ですか",
    "h": "なんですか",
    "r": "nandesuka",
    "m": "Là gì vậy?",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "鶏肉",
    "h": "とりにく",
    "r": "toriniku",
    "m": "Thịt gà",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "スープ",
    "h": "すーぷ",
    "r": "suupu",
    "m": "Canh, súp",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "緑",
    "h": "みどり",
    "r": "midori",
    "m": "Màu xanh; Cây xanh",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "多い",
    "h": "おおい",
    "r": "ooi",
    "m": "Nhiều ～",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "この",
    "h": "この",
    "r": "kono",
    "m": "Cái ～ này",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "辛くない",
    "h": "からくない",
    "r": "karakunai",
    "m": "Cay (biến thể của 辛い)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "じゃありません",
    "h": "じゃありません",
    "r": "jaarimasen",
    "m": "Không phải, không (phủ định lịch sự)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "6月",
    "h": "ろくがつ",
    "r": "rokugatsu",
    "m": "Tháng sáu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "冬",
    "h": "ふゆ",
    "r": "fuyu",
    "m": "Mùa đông",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "寒い",
    "h": "さむい",
    "r": "samui",
    "m": "Lạnh, rét (thời tiết)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "公園",
    "h": "こうえん",
    "r": "kouen",
    "m": "Công viên",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "大きくない",
    "h": "おおきくない",
    "r": "ookikunai",
    "m": "To, lớn (biến thể của 大きい)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "川",
    "h": "かわ",
    "r": "kawa",
    "m": "Sông",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "沖縄",
    "h": "おきなわ",
    "r": "okinawa",
    "m": "Okinawa",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "南",
    "h": "みなみ",
    "r": "minami",
    "m": "Phía nam",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "箱根",
    "h": "はこね",
    "r": "hakone",
    "m": "Hakone",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "うち",
    "h": "うち",
    "r": "uchi",
    "m": "Nhà (của mình)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "5分",
    "h": "ごふん",
    "r": "gofun",
    "m": "Năm phút",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "大阪",
    "h": "おおさか",
    "r": "oosaka",
    "m": "Osaka",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "京都",
    "h": "きょうと",
    "r": "kyouto",
    "m": "Kyoto",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "電車",
    "h": "でんしゃ",
    "r": "densha",
    "m": "Tàu điện",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "30分",
    "h": "さんじゅっぷん",
    "r": "sanjuppun",
    "m": "Ba mươi phút",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ロシア",
    "h": "ろしあ",
    "r": "roshia",
    "m": "Nga",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "しました",
    "h": "しました",
    "r": "shimashita",
    "m": "Làm, chơi (biến thể của します)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "そうですか",
    "h": "そうですか",
    "r": "soudesuka",
    "m": "Thế à?",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "家族",
    "h": "かぞく",
    "r": "kazoku",
    "m": "Gia đình",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "昨日",
    "h": "きのう",
    "r": "kinou",
    "m": "Hôm qua",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ゲーム",
    "h": "げーむ",
    "r": "geemu",
    "m": "Trò chơi",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "4時間",
    "h": "よじかん",
    "r": "yojikan",
    "m": "Bốn tiếng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "見ました",
    "h": "みました",
    "r": "mimashita",
    "m": "Xem, nhìn (biến thể của 見ます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どうでしたか",
    "h": "どうでしたか",
    "r": "doudeshitaka",
    "m": "Đã thế nào? (hỏi cảm nhận)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "どこか",
    "h": "どこか",
    "r": "dokoka",
    "m": "Nơi nào đó",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "新宿",
    "h": "しんじゅく",
    "r": "shinjuku",
    "m": "Shinjuku",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "おすし",
    "h": "おすし",
    "r": "osushi",
    "m": "Món sushi",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "おいしかった",
    "h": "おいしかった",
    "r": "oishikatta",
    "m": "Ngon (biến thể của おいしい)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "パソコン",
    "h": "ぱそこん",
    "r": "pasokon",
    "m": "Máy tính cá nhân",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "買います",
    "h": "かいます",
    "r": "kaimasu",
    "m": "Mua",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "いいですね",
    "h": "いいですね",
    "r": "iidesune",
    "m": "Hay đấy, tốt quá nhỉ",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "買いました",
    "h": "かいました",
    "r": "kaimashita",
    "m": "Mua (biến thể của 買います)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "いいえ",
    "h": "いいえ",
    "r": "iie",
    "m": "Không",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "買いませんでした",
    "h": "かいませんでした",
    "r": "kaimasendeshita",
    "m": "Mua (biến thể của 買います)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どうして",
    "h": "どうして",
    "r": "doushite",
    "m": "Tại sao",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "高かった",
    "h": "たかかった",
    "r": "takakatta",
    "m": "Cao, đắt (biến thể của 高い)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "休み",
    "h": "やすみ",
    "r": "yasumi",
    "m": "Nghỉ / Ngày nghỉ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ほしい",
    "h": "ほしい",
    "r": "hoshii",
    "m": "Muốn có",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "サカイ電器",
    "h": "さかいでんき",
    "r": "sakaidenki",
    "m": "Sakai Denki (tên cửa hàng điện máy)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "買い物",
    "h": "かいもの",
    "r": "kaimono",
    "m": "Mua sắm",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "したいです",
    "h": "したいです",
    "r": "shitaidesu",
    "m": "Làm, chơi (biến thể của します)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "おととい",
    "h": "おととい",
    "r": "ototoi",
    "m": "Hôm kia",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "勉強しませんでした",
    "h": "べんきょうしませんでした",
    "r": "benkyoushimasendeshita",
    "m": "Học, học bài, học tập (biến thể của 勉強します)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "楽しかった",
    "h": "たのしかった",
    "r": "tanoshikatta",
    "m": "Vui vẻ (không khí) (biến thể của 楽しい)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "おもしろくなかった",
    "h": "おもしろくなかった",
    "r": "omoshirokunakatta",
    "m": "Thú vị, hay, hấp dẫn (biến thể của おもしろい)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "テスト",
    "h": "てすと",
    "r": "tesuto",
    "m": "Bài kiểm tra",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "簡単",
    "h": "かんたん",
    "r": "kantan",
    "m": "Dễ, đơn giản",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "じゃありませんでした",
    "h": "じゃありませんでした",
    "r": "jaarimasendeshita",
    "m": "Đã không (phủ định quá khứ)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "アニメ",
    "h": "あにめ",
    "r": "anime",
    "m": "Hoạt hình",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "コーヒー",
    "h": "こーひー",
    "r": "koohii",
    "m": "Cà phê",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "飲みたいです",
    "h": "のみたいです",
    "r": "nomitaidesu",
    "m": "Uống (biến thể của 飲みます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "渋谷",
    "h": "しぶや",
    "r": "shibuya",
    "m": "Shibuya",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "飲み",
    "h": "のみ",
    "r": "nomi",
    "m": "Uống (thân động từ 飲みます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "行きませんでした",
    "h": "いきませんでした",
    "r": "ikimasendeshita",
    "m": "Đi (biến thể của 行きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "何も",
    "h": "なにも",
    "r": "nanimo",
    "m": "Không gì cả (dùng với câu phủ định)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食べませんでした",
    "h": "たべませんでした",
    "r": "tabemasendeshita",
    "m": "Ăn (biến thể của 食べます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "忙しかった",
    "h": "いそがしかった",
    "r": "isogashikatta",
    "m": "Bận rộn (biến thể của 忙しい)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "恋人",
    "h": "こいびと",
    "r": "koibito",
    "m": "Người yêu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "食事",
    "h": "しょくじ",
    "r": "shokuji",
    "m": "Bữa ăn, việc ăn uống",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "サッカー",
    "h": "さっかー",
    "r": "sakkaa",
    "m": "Bóng đá",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "どこへも",
    "h": "どこえも",
    "r": "dokoemo",
    "m": "Đâu cũng (đi với phủ định: không đi đâu cả)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "今晩",
    "h": "こんばん",
    "r": "konban",
    "m": "Tối nay",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "カラオケ",
    "h": "からおけ",
    "r": "karaoke",
    "m": "Hát karaoke",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "ああ",
    "h": "ああ",
    "r": "aa",
    "m": "A / Ôi",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "すみません",
    "h": "すみません",
    "r": "sumimasen",
    "m": "Xin lỗi… cho tôi hỏi…",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ちょっと",
    "h": "ちょっと",
    "r": "chotto",
    "m": "Hơi… (từ chối khéo trong lời mời)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "用事",
    "h": "ようじ",
    "r": "youji",
    "m": "Việc bận",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "残念",
    "h": "ざんねん",
    "r": "zannen",
    "m": "Tiếc",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "じゃ",
    "h": "じゃ",
    "r": "ja",
    "m": "Vậy thì",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "また今度",
    "h": "またこんど",
    "r": "matakondo",
    "m": "Hẹn (anh) lần sau nhé",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あ",
    "h": "あ",
    "r": "a",
    "m": "A, à (cảm thán)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "横浜",
    "h": "よこはま",
    "r": "yokohama",
    "m": "Yokohama",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "野球",
    "h": "やきゅう",
    "r": "yakyuu",
    "m": "Bóng chày",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "試合",
    "h": "しあい",
    "r": "shiai",
    "m": "Trận đấu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "チケット",
    "h": "ちけっと",
    "r": "chiketto",
    "m": "Vé",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "2枚",
    "h": "にまい",
    "r": "nimai",
    "m": "Hai tấm (vé)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "わあ",
    "h": "わあ",
    "r": "waa",
    "m": "Oa (Thể hiện sự ngạc nhiên)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "行きましょう",
    "h": "いきましょう",
    "r": "ikimashou",
    "m": "Đi (biến thể của 行きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "コメディー",
    "h": "こめでぃー",
    "r": "komedii",
    "m": "Hài kịch",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "見ます",
    "h": "みます",
    "r": "mimasu",
    "m": "Xem, nhìn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あっ",
    "h": "あっ",
    "r": "atsu",
    "m": "A! / Á!",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ニコニコ映画館",
    "h": "にこにこえいがかん",
    "r": "nikonikoeigakan",
    "m": "Rạp phim Nikoniko",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ふじ映画館",
    "h": "ふじえいがかん",
    "r": "fujieigakan",
    "m": "Rạp phim Fuji",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "近い",
    "h": "ちかい",
    "r": "chikai",
    "m": "Gần",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ほう",
    "h": "ほう",
    "r": "hou",
    "m": "Phía, bên (dùng khi so sánh)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "そうですねえ",
    "h": "そうですねえ",
    "r": "soudesunee",
    "m": "Ừm, để tôi xem… (ngập ngừng suy nghĩ)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "より",
    "h": "より",
    "r": "yori",
    "m": "Hơn (mốc so sánh)",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "居酒屋",
    "h": "いざかや",
    "r": "izakaya",
    "m": "Quán rượu",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "そうしましょう",
    "h": "そうしましょう",
    "r": "soushimashou",
    "m": "Mình cùng làm thế đi!",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "何時",
    "h": "なんじ",
    "r": "nanji",
    "m": "Mấy giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "会います",
    "h": "あいます",
    "r": "aimasu",
    "m": "Gặp gỡ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "5時",
    "h": "ごじ",
    "r": "goji",
    "m": "5 giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "わかりました",
    "h": "わかりました",
    "r": "wakarimashita",
    "m": "Tôi hiểu rồi",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ご飯",
    "h": "ごはん",
    "r": "gohan",
    "m": "Cơm",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "明日",
    "h": "あした",
    "r": "ashita",
    "m": "Ngày mai",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "約束",
    "h": "やくそく",
    "r": "yakusoku",
    "m": "Hứa, hẹn",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "スポーツ",
    "h": "すぽーつ",
    "r": "supootsu",
    "m": "Thể thao",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "おもしろい",
    "h": "おもしろい",
    "r": "omoshiroi",
    "m": "Thú vị, hay",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "7月",
    "h": "しちがつ",
    "r": "shichigatsu",
    "m": "Tháng bảy",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "もう",
    "h": "もう",
    "r": "mou",
    "m": "Đã, rồi",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "にじまるランド",
    "h": "にじまるらんど",
    "r": "nijimarurando",
    "m": "Nijimaru Land (tên khu vui chơi)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "まだ",
    "h": "まだ",
    "r": "mada",
    "m": "Vẫn, chưa",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "会いましょう",
    "h": "あいましょう",
    "r": "aimashou",
    "m": "Gặp gỡ (biến thể của 会います)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あのう",
    "h": "あのう",
    "r": "anou",
    "m": "Anh / chị ơi…",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "交番",
    "h": "こうばん",
    "r": "kouban",
    "m": "Đồn cảnh sát",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あの",
    "h": "あの",
    "r": "ano",
    "m": "Cái ～ kia",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ビル",
    "h": "びる",
    "r": "biru",
    "m": "Tòa nhà",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "後ろ",
    "h": "うしろ",
    "r": "ushiro",
    "m": "Sau, phía sau, đằng sau",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ありがとうございます",
    "h": "ありがとうございます",
    "r": "arigatougozaimasu",
    "m": "Cảm ơn (lịch sự)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "もしもし",
    "h": "もしもし",
    "r": "moshimoshi",
    "m": "A lô a lô (khi gọi điện thoại)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "今",
    "h": "いま",
    "r": "ima",
    "m": "Bây giờ",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "います",
    "h": "います",
    "r": "imasu",
    "m": "Có (người/động vật); ～ています chỉ hành động đang diễn ra",
    "kind": "hiragana",
    "grammar": true
  },
  {
    "k": "前",
    "h": "まえ",
    "r": "mae",
    "m": "Trước, phía trước",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "そこ",
    "h": "そこ",
    "r": "soko",
    "m": "Chỗ đó",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "えっ",
    "h": "えっ",
    "r": "etsu",
    "m": "Ơ! / Hả",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "スーパー",
    "h": "すーぱー",
    "r": "suupaa",
    "m": "Siêu thị",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "迎えに行きます",
    "h": "むかえにいきます",
    "r": "mukaeniikimasu",
    "m": "Đi đón",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "果物",
    "h": "くだもの",
    "r": "kudamono",
    "m": "Hoa quả, trái cây",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "洗って",
    "h": "あらって",
    "r": "aratte",
    "m": "Rửa (thể て của 洗います)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ペン",
    "h": "ぺん",
    "r": "pen",
    "m": "Bút",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "名前",
    "h": "なまえ",
    "r": "namae",
    "m": "Tên",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "書いて",
    "h": "かいて",
    "r": "kaite",
    "m": "Viết (thể て của 書きます)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "お皿",
    "h": "おさら",
    "r": "osara",
    "m": "Đĩa",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "取って",
    "h": "とって",
    "r": "totte",
    "m": "Lấy (thể て của 取ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どの",
    "h": "どの",
    "r": "dono",
    "m": "Cái ～ nào (đứng trước danh từ)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "その",
    "h": "その",
    "r": "sono",
    "m": "Cái ～ đó",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "塩",
    "h": "しお",
    "r": "shio",
    "m": "Muối",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "どれ",
    "h": "どれ",
    "r": "dore",
    "m": "Cái nào",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "それ",
    "h": "それ",
    "r": "sore",
    "m": "Cái đó (gần người nghe)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "どうも",
    "h": "どうも",
    "r": "doumo",
    "m": "Cảm ơn (ngắn gọn)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "台所",
    "h": "だいどころ",
    "r": "daidokoro",
    "m": "Nhà bếp",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "取りましょうか",
    "h": "とりましょうか",
    "r": "torimashouka",
    "m": "Lấy (biến thể của 取ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "誰",
    "h": "だれ",
    "r": "dare",
    "m": "Ai",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "作りました",
    "h": "つくりました",
    "r": "tsukurimashita",
    "m": "Làm ra, chế tạo (biến thể của 作ります)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ワン",
    "h": "わん",
    "r": "wan",
    "m": "Wang (tên người)",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "サラダ",
    "h": "さらだ",
    "r": "sarada",
    "m": "Món salad",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "ビール",
    "h": "びーる",
    "r": "biiru",
    "m": "Bia",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "ありません",
    "h": "ありません",
    "r": "arimasen",
    "m": "Có (biến thể của あります)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "ワイン",
    "h": "わいん",
    "r": "wain",
    "m": "Rượu vang",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "本屋",
    "h": "ほんや",
    "r": "honya",
    "m": "Hiệu sách",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "バス停",
    "h": "ばすてい",
    "r": "basutei",
    "m": "Trạm xe buýt",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "あそこ",
    "h": "あそこ",
    "r": "asoko",
    "m": "Chỗ kia",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "銀行",
    "h": "ぎんこう",
    "r": "ginkou",
    "m": "Ngân hàng",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "かばん",
    "h": "かばん",
    "r": "kaban",
    "m": "Cặp, túi xách",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "電話",
    "h": "でんわ",
    "r": "denwa",
    "m": "Điện thoại",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "かけて",
    "h": "かけて",
    "r": "kakete",
    "m": "Gọi (điện thoại; thể て)",
    "kind": "hiragana",
    "grammar": false
  },
  {
    "k": "手伝いましょうか",
    "h": "てつだいましょうか",
    "r": "tetsudaimashouka",
    "m": "Giúp, giúp đỡ (biến thể của 手伝います)",
    "kind": "kanji",
    "grammar": false
  },
  {
    "k": "ケーキ",
    "h": "けーき",
    "r": "keeki",
    "m": "Bánh ngọt",
    "kind": "katakana",
    "grammar": false
  },
  {
    "k": "はし",
    "h": "はし",
    "r": "hashi",
    "m": "Đũa",
    "kind": "hiragana",
    "grammar": false
  }
];
const READINGS = [
  {
    "id": "reading-2",
    "page": 2,
    "lesson": 1,
    "kind": "passage",
    "title": "Tự giới thiệu",
    "jp": "自己紹介",
    "blocks": [
      [
        0,
        "。",
        1,
        2,
        3,
        4,
        "。",
        5,
        4,
        "。",
        6,
        7,
        8,
        9,
        4,
        "。",
        10,
        4,
        "。",
        11,
        2,
        12,
        13,
        14,
        4,
        "。",
        15,
        16,
        17,
        "。"
      ]
    ]
  },
  {
    "id": "reading-3",
    "page": 3,
    "lesson": 2,
    "kind": "passage",
    "title": "Cửa hàng yêu thích",
    "jp": "好きな店",
    "blocks": [
      [
        18,
        2,
        19,
        4,
        "。",
        20,
        4,
        "。",
        21,
        2,
        19,
        8,
        22,
        4,
        "。",
        23,
        24,
        4,
        "。",
        25,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-4",
    "page": 4,
    "lesson": 3,
    "kind": "passage",
    "title": "Một tuần của tôi",
    "jp": "私の1週間",
    "blocks": [
      [
        1,
        2,
        7,
        8,
        9,
        4,
        "。",
        26,
        27,
        28,
        29,
        "、",
        30,
        31,
        32,
        "。",
        33,
        34,
        27,
        35,
        29,
        30,
        36,
        37,
        38,
        39,
        "。"
      ],
      [
        40,
        "、",
        41,
        31,
        32,
        "。",
        41,
        36,
        42,
        38,
        43,
        "。",
        44,
        13,
        45,
        "、",
        46,
        36,
        47,
        38,
        48,
        "。",
        49,
        27,
        50,
        29,
        51,
        "。"
      ]
    ]
  },
  {
    "id": "reading-5",
    "page": 5,
    "lesson": 4,
    "kind": "passage",
    "title": "Đất nước và thành phố của tôi",
    "jp": "私の国・町",
    "blocks": [
      [
        1,
        2,
        52,
        8,
        53,
        27,
        54,
        "。",
        53,
        2,
        52,
        8,
        55,
        56,
        4,
        "。",
        53,
        2,
        57,
        58,
        59,
        60,
        4,
        "。",
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        "。",
        62,
        2,
        57,
        68,
        4,
        "。",
        69,
        70,
        71,
        8,
        72,
        66,
        67,
        "。",
        73,
        71,
        66,
        67,
        "。",
        57,
        25,
        4,
        "。",
        53,
        2,
        74,
        "、",
        75,
        4,
        "。",
        76,
        "、",
        77,
        66,
        78,
        4,
        "。",
        53,
        2,
        79,
        60,
        4,
        "。",
        80,
        "、",
        81,
        82,
        83,
        "。"
      ]
    ]
  },
  {
    "id": "reading-6",
    "page": 6,
    "lesson": 5,
    "kind": "passage",
    "title": "Một ngày vui vẻ",
    "jp": "楽しい1日",
    "blocks": [
      [
        84,
        "、",
        85,
        13,
        86,
        8,
        87,
        70,
        88,
        "。",
        89,
        66,
        90,
        91,
        "、",
        57,
        92,
        66,
        90,
        4,
        "。",
        87,
        36,
        93,
        38,
        94,
        "。",
        87,
        27,
        8,
        95,
        2,
        57,
        68,
        96,
        "。",
        97,
        "、",
        61,
        98,
        38,
        99,
        70,
        100,
        "。",
        57,
        101,
        4,
        "。",
        57,
        102,
        103,
        96,
        "。",
        104,
        105,
        "。"
      ]
    ]
  },
  {
    "id": "reading-7",
    "page": 7,
    "lesson": 6,
    "kind": "passage",
    "title": "Cùng đi nhé!",
    "jp": "一緒に！",
    "blocks": [
      [
        80,
        2,
        106,
        8,
        107,
        36,
        108,
        66,
        109,
        110,
        4,
        111,
        "。",
        1,
        2,
        112,
        66,
        109,
        110,
        4,
        "。",
        112,
        2,
        106,
        8,
        113,
        4,
        "。",
        112,
        8,
        114,
        70,
        115,
        63,
        116,
        63,
        117,
        66,
        67,
        "。",
        112,
        8,
        118,
        2,
        55,
        119,
        4,
        "。",
        57,
        25,
        4,
        120,
        "。",
        121,
        "、",
        122,
        112,
        38,
        123,
        70,
        124,
        111,
        "。"
      ]
    ]
  },
  {
    "id": "reading-8",
    "page": 8,
    "lesson": 7,
    "kind": "passage",
    "title": "Bữa tiệc",
    "jp": "パーティー",
    "blocks": [
      [
        80,
        "、",
        125,
        8,
        84,
        "、",
        1,
        8,
        126,
        36,
        127,
        38,
        48,
        "。",
        1,
        2,
        128,
        8,
        129,
        38,
        130,
        "。",
        122,
        131,
        111,
        "。",
        97,
        "、",
        80,
        8,
        128,
        8,
        129,
        8,
        132,
        133,
        134,
        83,
        "。",
        122,
        135,
        "、",
        136,
        "。"
      ],
      [
        25,
        137,
        133,
        138,
        "。",
        1,
        8,
        139,
        2,
        140,
        8,
        86,
        70,
        67,
        "。",
        46,
        8,
        141,
        8,
        142,
        139,
        4,
        "。",
        81,
        "、",
        82,
        83,
        "。"
      ]
    ]
  },
  {
    "id": "reading-10",
    "page": 10,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Quê bạn ở đâu?",
    "jp": "国と町",
    "blocks": [
      [
        "A",
        "：",
        143,
        2,
        144,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        145,
        4,
        "。"
      ],
      [
        "A",
        "：",
        145,
        8,
        146,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        147,
        4,
        "。"
      ],
      [
        "A",
        "：",
        147,
        2,
        146,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        147,
        2,
        145,
        8,
        148,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-11",
    "page": 11,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Đi đến Ayutthaya mất bao lâu?",
    "jp": "どのくらいですか",
    "blocks": [
      [
        "A",
        "：",
        149,
        27,
        150,
        29,
        151,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        149,
        27,
        152,
        29,
        153,
        36,
        154,
        155,
        4,
        "。",
        152,
        27,
        150,
        29,
        156,
        36,
        157,
        155,
        4,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "。"
      ]
    ]
  },
  {
    "id": "reading-12",
    "page": 12,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Thành phố như thế nào?",
    "jp": "どんなところですか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        8,
        160,
        2,
        161,
        60,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        58,
        59,
        60,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-13",
    "page": 13,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Trong thành phố có gì?",
    "jp": "何がありますか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        8,
        160,
        70,
        108,
        66,
        67,
        111,
        "。"
      ],
      [
        "B",
        "：",
        162,
        66,
        67,
        "。"
      ],
      [
        "A",
        "：",
        161,
        162,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        163,
        162,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-14",
    "page": 14,
    "lesson": 4,
    "kind": "sentences",
    "title": "Lâu đài Himeji",
    "jp": "姫路城",
    "blocks": [
      [
        1,
        8,
        160,
        70,
        162,
        66,
        67,
        "。"
      ],
      [
        164,
        4,
        "。"
      ],
      [
        164,
        2,
        68,
        4,
        "。"
      ],
      [
        76,
        "、",
        165,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-15",
    "page": 15,
    "lesson": 4,
    "kind": "sentences",
    "title": "Núi Takao",
    "jp": "高尾山",
    "blocks": [
      [
        1,
        8,
        160,
        70,
        68,
        59,
        87,
        66,
        67,
        "。"
      ],
      [
        166,
        4,
        "。"
      ],
      [
        166,
        2,
        167,
        168,
        "、",
        68,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-16",
    "page": 16,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Thời tiết tháng tám",
    "jp": "8月の天気",
    "blocks": [
      [
        "A",
        "：",
        169,
        "、",
        170,
        4,
        171,
        "。"
      ],
      [
        "B",
        "：",
        172,
        "。",
        "A",
        159,
        8,
        128,
        133,
        173,
        "、",
        170,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        174,
        "、",
        57,
        170,
        4,
        "。",
        "B",
        159,
        8,
        128,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        1,
        8,
        128,
        2,
        173,
        "、",
        176,
        177,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-17",
    "page": 17,
    "lesson": 4,
    "kind": "dialogue",
    "title": "Món ăn mùa hè",
    "jp": "夏の料理",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        8,
        128,
        36,
        178,
        70,
        108,
        38,
        179,
        111,
        "。"
      ],
      [
        "B",
        "：",
        1,
        8,
        128,
        36,
        180,
        38,
        179,
        "。"
      ],
      [
        "A",
        "：",
        181,
        "？",
        "「",
        180,
        "」",
        2,
        182,
        "。"
      ],
      [
        "B",
        "：",
        180,
        2,
        183,
        8,
        184,
        4,
        "。",
        25,
        4,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "。"
      ]
    ]
  },
  {
    "id": "reading-18",
    "page": 18,
    "lesson": 4,
    "kind": "sentences",
    "title": "Cây xanh và món ăn",
    "jp": "町と料理",
    "blocks": [
      [
        1,
        8,
        160,
        2,
        185,
        66,
        186,
        4,
        "。"
      ],
      [
        187,
        129,
        2,
        188,
        4,
        "。"
      ],
      [
        1,
        8,
        160,
        2,
        58,
        189,
        "。"
      ]
    ]
  },
  {
    "id": "reading-19",
    "page": 19,
    "lesson": 4,
    "kind": "sentences",
    "title": "Lâu đài và mưa tháng sáu",
    "jp": "町の紹介",
    "blocks": [
      [
        164,
        2,
        163,
        162,
        4,
        "。"
      ],
      [
        1,
        8,
        160,
        2,
        58,
        59,
        60,
        4,
        "。"
      ],
      [
        149,
        2,
        190,
        "、",
        77,
        66,
        186,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-20",
    "page": 20,
    "lesson": 4,
    "kind": "sentences",
    "title": "Mùa đông và công viên",
    "jp": "冬の町",
    "blocks": [
      [
        1,
        8,
        160,
        2,
        191,
        "、",
        57,
        192,
        4,
        "。"
      ],
      [
        187,
        193,
        2,
        176,
        194,
        4,
        "。"
      ],
      [
        1,
        8,
        160,
        70,
        68,
        59,
        195,
        66,
        67,
        "。"
      ]
    ]
  },
  {
    "id": "reading-21",
    "page": 21,
    "lesson": 4,
    "kind": "sentences",
    "title": "Phương hướng và khoảng cách",
    "jp": "南・どのくらい",
    "blocks": [
      [
        196,
        2,
        106,
        8,
        197,
        4,
        "。"
      ],
      [
        149,
        27,
        198,
        29,
        151,
        4,
        111,
        "。"
      ],
      [
        199,
        27,
        140,
        29,
        200,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-22",
    "page": 22,
    "lesson": 4,
    "kind": "sentences",
    "title": "Kyoto và Ayutthaya",
    "jp": "電車で30分",
    "blocks": [
      [
        201,
        27,
        202,
        29,
        203,
        36,
        204,
        155,
        4,
        "。"
      ],
      [
        150,
        2,
        161,
        60,
        4,
        111,
        "。"
      ],
      [
        68,
        59,
        60,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-23",
    "page": 23,
    "lesson": 4,
    "kind": "sentences",
    "title": "Nhật Bản và Nga",
    "jp": "暑いですか",
    "blocks": [
      [
        106,
        2,
        173,
        "、",
        57,
        170,
        4,
        "。",
        205,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        205,
        2,
        176,
        177,
        4,
        "。"
      ],
      [
        187,
        160,
        2,
        58,
        4,
        "。",
        76,
        "、",
        68,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-24",
    "page": 24,
    "lesson": 4,
    "kind": "sentences",
    "title": "Một nơi tốt đẹp",
    "jp": "いいところ",
    "blocks": [
      [
        1,
        8,
        160,
        2,
        194,
        168,
        "、",
        79,
        60,
        4,
        "。"
      ],
      [
        170,
        4,
        171,
        "。",
        "—",
        " ",
        172,
        "。"
      ]
    ]
  },
  {
    "id": "reading-26",
    "page": 26,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Chủ nhật đã làm gì?",
    "jp": "友達の家へ",
    "blocks": [
      [
        "A",
        "：",
        84,
        "（",
        70,
        "）",
        "、",
        108,
        38,
        206,
        111,
        "。"
      ],
      [
        "B",
        "：",
        85,
        8,
        126,
        31,
        100,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。"
      ]
    ]
  },
  {
    "id": "reading-27",
    "page": 27,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Đi Hakone cùng gia đình",
    "jp": "家族と箱根へ",
    "blocks": [
      [
        "A",
        "：",
        84,
        "（",
        70,
        "）",
        "、",
        108,
        38,
        206,
        111,
        "。"
      ],
      [
        "B",
        "：",
        208,
        13,
        198,
        31,
        100,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。"
      ]
    ]
  },
  {
    "id": "reading-28",
    "page": 28,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Chơi game cùng bạn",
    "jp": "昨日のこと",
    "blocks": [
      [
        "A",
        "：",
        209,
        "、",
        108,
        38,
        206,
        111,
        "。"
      ],
      [
        "B",
        "：",
        85,
        8,
        126,
        31,
        100,
        "。",
        97,
        "、",
        210,
        38,
        206,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。",
        151,
        206,
        111,
        "。"
      ],
      [
        "B",
        "：",
        211,
        155,
        206,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "。"
      ]
    ]
  },
  {
    "id": "reading-29",
    "page": 29,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Bộ phim thế nào?",
    "jp": "映画の感想",
    "blocks": [
      [
        "A",
        "：",
        84,
        "、",
        108,
        38,
        206,
        111,
        "。"
      ],
      [
        "B",
        "：",
        85,
        13,
        14,
        38,
        212,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "。",
        "（",
        14,
        2,
        "）",
        213,
        "。"
      ],
      [
        "B",
        "：",
        57,
        101,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-30",
    "page": 30,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Ăn sushi ở Shinjuku",
    "jp": "新宿でおすし",
    "blocks": [
      [
        "A",
        "：",
        84,
        "、",
        214,
        100,
        111,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "、",
        215,
        31,
        100,
        "。",
        215,
        36,
        216,
        38,
        94,
        "。",
        217,
        4,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。"
      ]
    ]
  },
  {
    "id": "reading-31",
    "page": 31,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Kế hoạch cuối tuần",
    "jp": "週末の予定",
    "blocks": [
      [
        "A",
        "：",
        40,
        "、",
        108,
        38,
        48,
        111,
        "。"
      ],
      [
        "B",
        "：",
        218,
        38,
        219,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。",
        220,
        "。"
      ]
    ]
  },
  {
    "id": "reading-32",
    "page": 32,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Vì sao không mua máy tính?",
    "jp": "買いませんでした",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        218,
        38,
        221,
        111,
        "。"
      ],
      [
        "B",
        "：",
        222,
        "、",
        223,
        "。"
      ],
      [
        "A",
        "：",
        224,
        223,
        111,
        "。"
      ],
      [
        "B",
        "：",
        225,
        91,
        "、",
        223,
        "。"
      ]
    ]
  },
  {
    "id": "reading-33",
    "page": 33,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Kỳ nghỉ tới",
    "jp": "パソコンがほしい",
    "blocks": [
      [
        "A",
        "：",
        121,
        8,
        226,
        70,
        108,
        38,
        48,
        111,
        "。"
      ],
      [
        "B",
        "：",
        218,
        66,
        227,
        91,
        "、",
        228,
        31,
        32,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。"
      ]
    ]
  },
  {
    "id": "reading-34",
    "page": 34,
    "lesson": 5,
    "kind": "dialogue",
    "title": "Thích đi mua sắm",
    "jp": "買い物が好き",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        2,
        229,
        66,
        110,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "、",
        110,
        4,
        "。",
        84,
        "、",
        215,
        36,
        229,
        38,
        48,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "、",
        220,
        "。",
        1,
        133,
        229,
        38,
        230,
        "。"
      ]
    ]
  },
  {
    "id": "reading-35",
    "page": 35,
    "lesson": 5,
    "kind": "sentences",
    "title": "Luyện thể quá khứ",
    "jp": "行きました・しませんでした",
    "blocks": [
      [
        231,
        "、",
        215,
        31,
        100,
        "。"
      ],
      [
        209,
        "、",
        232,
        "。"
      ]
    ]
  },
  {
    "id": "reading-36",
    "page": 36,
    "lesson": 5,
    "kind": "sentences",
    "title": "Cảm nhận sau chuyến đi",
    "jp": "楽しかったです",
    "blocks": [
      [
        209,
        8,
        127,
        2,
        233,
        4,
        "。"
      ],
      [
        14,
        2,
        176,
        234,
        4,
        "。"
      ],
      [
        209,
        2,
        77,
        96,
        "。"
      ],
      [
        235,
        2,
        236,
        237,
        "。"
      ],
      [
        12,
        2,
        213,
        "。",
        "—",
        " ",
        57,
        233,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-37",
    "page": 37,
    "lesson": 5,
    "kind": "sentences",
    "title": "Sở thích và mong muốn",
    "jp": "好き・ほしい・たい",
    "blocks": [
      [
        1,
        2,
        106,
        8,
        238,
        66,
        110,
        4,
        "。"
      ],
      [
        1,
        2,
        218,
        66,
        227,
        4,
        "。"
      ],
      [
        1,
        2,
        239,
        38,
        240,
        "。"
      ]
    ]
  },
  {
    "id": "reading-38",
    "page": 38,
    "lesson": 5,
    "kind": "sentences",
    "title": "Đi chơi ở Shibuya và Shinjuku",
    "jp": "飲みに・買い物に",
    "blocks": [
      [
        40,
        "、",
        85,
        13,
        241,
        31,
        137,
        38,
        242,
        70,
        32,
        "。"
      ],
      [
        1,
        2,
        215,
        31,
        229,
        70,
        32,
        "。"
      ]
    ]
  },
  {
    "id": "reading-39",
    "page": 39,
    "lesson": 5,
    "kind": "sentences",
    "title": "Đã đi đâu chưa?",
    "jp": "どこか・どこへも",
    "blocks": [
      [
        209,
        "、",
        214,
        "（",
        31,
        "）",
        100,
        111,
        "。"
      ],
      [
        "—",
        " ",
        174,
        "、",
        215,
        31,
        100,
        "。"
      ],
      [
        "／",
        222,
        "、",
        146,
        "（",
        31,
        "）",
        133,
        243,
        "。"
      ]
    ]
  },
  {
    "id": "reading-40",
    "page": 40,
    "lesson": 5,
    "kind": "sentences",
    "title": "Vì sao bỏ bữa sáng?",
    "jp": "忙しかったですから",
    "blocks": [
      [
        224,
        33,
        "、",
        244,
        245,
        111,
        "。"
      ],
      [
        33,
        "、",
        246,
        91,
        "。"
      ]
    ]
  },
  {
    "id": "reading-41",
    "page": 41,
    "lesson": 5,
    "kind": "sentences",
    "title": "Kể lại ngày hôm qua",
    "jp": "それから・から",
    "blocks": [
      [
        209,
        "、",
        247,
        13,
        14,
        38,
        212,
        "。",
        97,
        "、",
        248,
        38,
        206,
        "。"
      ],
      [
        40,
        "、",
        85,
        13,
        249,
        38,
        206,
        "。"
      ],
      [
        209,
        "、",
        77,
        96,
        27,
        "、",
        250,
        243,
        "。"
      ]
    ]
  },
  {
    "id": "reading-43",
    "page": 43,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Rủ đi karaoke",
    "jp": "今晩、カラオケに",
    "blocks": [
      [
        "A",
        "：",
        251,
        "、",
        252,
        70,
        124,
        111,
        "。"
      ],
      [
        "B",
        "：",
        253,
        "、",
        251,
        4,
        111,
        "。",
        254,
        "。",
        251,
        2,
        255,
        "…",
        "…",
        "。",
        256,
        66,
        67,
        27,
        "。"
      ],
      [
        "A",
        "：",
        253,
        "、",
        207,
        "。",
        257,
        4,
        "。",
        258,
        "、",
        259,
        "。"
      ]
    ]
  },
  {
    "id": "reading-44",
    "page": 44,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Xem bóng chày ở Yokohama",
    "jp": "野球の試合",
    "blocks": [
      [
        "A",
        "：",
        260,
        "、",
        261,
        36,
        262,
        8,
        263,
        66,
        67,
        "。"
      ],
      [
        "B",
        "：",
        158,
        "。"
      ],
      [
        "A",
        "：",
        "B",
        159,
        "、",
        122,
        99,
        70,
        124,
        111,
        "。"
      ],
      [
        "B",
        "：",
        220,
        "。"
      ]
    ]
  },
  {
    "id": "reading-45",
    "page": 45,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Hai vé bóng đá",
    "jp": "チケットが2枚",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        2,
        249,
        66,
        110,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。",
        249,
        8,
        264,
        66,
        265,
        67,
        "。",
        122,
        99,
        70,
        124,
        111,
        "。"
      ],
      [
        "B",
        "：",
        266,
        "、",
        220,
        "。",
        267,
        "。"
      ]
    ]
  },
  {
    "id": "reading-46",
    "page": 46,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Thích thể loại phim nào nhất?",
    "jp": "いちばん好き",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        14,
        36,
        108,
        66,
        109,
        110,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        268,
        66,
        109,
        110,
        4,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。"
      ]
    ]
  },
  {
    "id": "reading-47",
    "page": 47,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Chọn rạp chiếu phim",
    "jp": "どちらが近いですか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        122,
        14,
        38,
        99,
        70,
        124,
        111,
        "。"
      ],
      [
        "B",
        "：",
        220,
        "。",
        146,
        36,
        269,
        111,
        "。"
      ],
      [
        "A",
        "：",
        270,
        "、",
        271,
        13,
        272,
        66,
        67,
        "。"
      ],
      [
        "B",
        "：",
        207,
        "。",
        271,
        13,
        272,
        13,
        144,
        66,
        273,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        271,
        8,
        274,
        66,
        273,
        4,
        "。"
      ],
      [
        "B",
        "：",
        207,
        "。",
        258,
        "、",
        271,
        31,
        267,
        "。"
      ]
    ]
  },
  {
    "id": "reading-48",
    "page": 48,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Shinjuku hay Shibuya?",
    "jp": "新宿のほうが",
    "blocks": [
      [
        "A",
        "：",
        215,
        13,
        241,
        13,
        144,
        66,
        79,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        275,
        "。",
        215,
        8,
        274,
        66,
        79,
        4,
        "。",
        215,
        2,
        241,
        276,
        273,
        91,
        "。"
      ],
      [
        "A",
        "：",
        207,
        "。",
        258,
        "、",
        215,
        31,
        267,
        "。"
      ]
    ]
  },
  {
    "id": "reading-49",
    "page": 49,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Đi ăn okonomiyaki",
    "jp": "ぜひ、行きたいです",
    "blocks": [
      [
        "A",
        "：",
        122,
        112,
        38,
        123,
        70,
        124,
        111,
        "。",
        112,
        2,
        25,
        4,
        120,
        "。"
      ],
      [
        "B",
        "：",
        158,
        "。",
        81,
        "、",
        105,
        "。"
      ]
    ]
  },
  {
    "id": "reading-50",
    "page": 50,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Hẹn cuối tuần",
    "jp": "居酒屋はどうですか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        40,
        "、",
        122,
        242,
        70,
        124,
        111,
        "。"
      ],
      [
        "B",
        "：",
        220,
        "。",
        146,
        31,
        32,
        111,
        "。"
      ],
      [
        "A",
        "：",
        215,
        8,
        277,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        "B",
        "：",
        220,
        "。",
        278,
        "。"
      ]
    ]
  },
  {
    "id": "reading-51",
    "page": 51,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Hẹn gặp lúc năm giờ",
    "jp": "何時に会いますか",
    "blocks": [
      [
        "A",
        "：",
        279,
        70,
        280,
        111,
        "。"
      ],
      [
        "B",
        "：",
        281,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        281,
        4,
        171,
        "。",
        282,
        "。"
      ]
    ]
  },
  {
    "id": "reading-52",
    "page": 52,
    "lesson": 6,
    "kind": "sentences",
    "title": "Nhận và từ chối lời mời",
    "jp": "今晩、一緒に",
    "blocks": [
      [
        251,
        "、",
        122,
        283,
        38,
        123,
        70,
        124,
        111,
        "。"
      ],
      [
        "—",
        " ",
        220,
        "。",
        267,
        "。"
      ],
      [
        "／",
        254,
        "。",
        251,
        2,
        255,
        "…",
        "…",
        "。"
      ]
    ]
  },
  {
    "id": "reading-53",
    "page": 53,
    "lesson": 6,
    "kind": "sentences",
    "title": "Cuộc hẹn, trận đấu và vé",
    "jp": "約束があります",
    "blocks": [
      [
        284,
        "、",
        85,
        13,
        285,
        66,
        67,
        "。"
      ],
      [
        251,
        "、",
        261,
        36,
        249,
        8,
        263,
        66,
        67,
        "。"
      ],
      [
        14,
        8,
        264,
        66,
        265,
        67,
        "。"
      ]
    ]
  },
  {
    "id": "reading-54",
    "page": 54,
    "lesson": 6,
    "kind": "sentences",
    "title": "So sánh sở thích và thời tiết",
    "jp": "いちばん・より",
    "blocks": [
      [
        286,
        36,
        262,
        66,
        109,
        287,
        4,
        "。"
      ],
      [
        288,
        2,
        173,
        276,
        77,
        66,
        186,
        4,
        "。"
      ],
      [
        178,
        13,
        191,
        13,
        144,
        66,
        110,
        4,
        111,
        "。"
      ],
      [
        178,
        8,
        274,
        66,
        110,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-55",
    "page": 55,
    "lesson": 6,
    "kind": "sentences",
    "title": "Đã đi Nijimaru Land chưa?",
    "jp": "もう・まだ",
    "blocks": [
      [
        289,
        290,
        31,
        100,
        111,
        "。"
      ],
      [
        "—",
        " ",
        174,
        "、",
        100,
        "。",
        "／",
        222,
        "、",
        291,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-56",
    "page": 56,
    "lesson": 6,
    "kind": "dialogue",
    "title": "Chọn món ăn",
    "jp": "おすしはどうですか",
    "blocks": [
      [
        "A",
        "：",
        108,
        38,
        179,
        111,
        "。"
      ],
      [
        "B",
        "：",
        216,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        220,
        "。"
      ]
    ]
  },
  {
    "id": "reading-57",
    "page": 57,
    "lesson": 6,
    "kind": "sentences",
    "title": "Xác nhận giờ hẹn",
    "jp": "5時ですね",
    "blocks": [
      [
        281,
        70,
        292,
        "。"
      ],
      [
        "—",
        " ",
        281,
        4,
        171,
        "。"
      ]
    ]
  },
  {
    "id": "reading-58",
    "page": 58,
    "lesson": 6,
    "kind": "sentences",
    "title": "Giới thiệu một bộ phim",
    "jp": "おもしろいですよ",
    "blocks": [
      [
        187,
        14,
        2,
        57,
        287,
        4,
        120,
        "。"
      ]
    ]
  },
  {
    "id": "reading-60",
    "page": 60,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Hỏi đường đến đồn cảnh sát",
    "jp": "交番はどこですか",
    "blocks": [
      [
        "A",
        "：",
        293,
        "、",
        254,
        "。",
        294,
        2,
        146,
        70,
        67,
        111,
        "。"
      ],
      [
        "B",
        "：",
        260,
        "、",
        294,
        4,
        111,
        "。",
        295,
        296,
        8,
        297,
        70,
        67,
        120,
        "。"
      ],
      [
        "A",
        "：",
        298,
        "。"
      ]
    ]
  },
  {
    "id": "reading-61",
    "page": 61,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Bạn đang ở đâu?",
    "jp": "交番の前に",
    "blocks": [
      [
        "A",
        "：",
        299,
        "、",
        "B",
        159,
        "、",
        300,
        "、",
        146,
        70,
        301,
        111,
        "。"
      ],
      [
        "B",
        "：",
        294,
        8,
        302,
        70,
        301,
        "。"
      ],
      [
        "A",
        "：",
        258,
        "、",
        303,
        31,
        32,
        "。"
      ]
    ]
  },
  {
    "id": "reading-62",
    "page": 62,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Đi đón ở nhà ga",
    "jp": "迎えに行きます",
    "blocks": [
      [
        "A",
        "：",
        299,
        "、",
        "B",
        159,
        "、",
        300,
        "、",
        146,
        70,
        301,
        111,
        "。"
      ],
      [
        "B",
        "：",
        140,
        8,
        302,
        70,
        301,
        "。"
      ],
      [
        "A",
        "：",
        304,
        "？",
        86,
        70,
        108,
        66,
        67,
        111,
        "。"
      ],
      [
        "B",
        "：",
        163,
        305,
        66,
        67,
        "。"
      ],
      [
        "A",
        "：",
        282,
        "。",
        300,
        "、",
        306,
        "。"
      ]
    ]
  },
  {
    "id": "reading-63",
    "page": 63,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Nhờ rửa hoa quả, viết tên",
    "jp": "～てください",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        307,
        38,
        308,
        83,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "。"
      ],
      [
        "A",
        "：",
        "B",
        159,
        "、",
        309,
        36,
        310,
        38,
        311,
        83,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "。"
      ]
    ]
  },
  {
    "id": "reading-64",
    "page": 64,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Lấy giúp chiếc đĩa",
    "jp": "どのお皿ですか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        312,
        38,
        313,
        83,
        "。"
      ],
      [
        "B",
        "：",
        314,
        312,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        315,
        312,
        4,
        "。"
      ],
      [
        "B",
        "：",
        253,
        "、",
        21,
        4,
        111,
        "。",
        174,
        "。"
      ]
    ]
  },
  {
    "id": "reading-65",
    "page": 65,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Lấy giúp muối",
    "jp": "塩はどれですか",
    "blocks": [
      [
        "A",
        "：",
        "B",
        159,
        "、",
        316,
        38,
        313,
        83,
        "。"
      ],
      [
        "B",
        "：",
        316,
        2,
        317,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        318,
        4,
        "。"
      ],
      [
        "B",
        "：",
        253,
        "、",
        21,
        4,
        111,
        "。",
        174,
        "、",
        15,
        "。"
      ],
      [
        "A",
        "：",
        319,
        "。"
      ]
    ]
  },
  {
    "id": "reading-66",
    "page": 66,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Pak đang làm gì?",
    "jp": "台所で洗っています",
    "blocks": [
      [
        "A",
        "：",
        3,
        159,
        2,
        146,
        70,
        301,
        111,
        "。"
      ],
      [
        "B",
        "：",
        3,
        159,
        2,
        320,
        36,
        312,
        38,
        308,
        301,
        "。"
      ]
    ]
  },
  {
    "id": "reading-67",
    "page": 67,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Đề nghị lấy thức ăn",
    "jp": "取りましょうか",
    "blocks": [
      [
        "A",
        "：",
        129,
        38,
        321,
        "。"
      ],
      [
        "B",
        "：",
        260,
        "、",
        298,
        "。"
      ]
    ]
  },
  {
    "id": "reading-68",
    "page": 68,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Ai đã làm món này?",
    "jp": "誰が作りましたか",
    "blocks": [
      [
        "A",
        "：",
        266,
        "、",
        322,
        66,
        323,
        111,
        "。"
      ],
      [
        "B",
        "：",
        324,
        159,
        66,
        323,
        "。"
      ],
      [
        "A",
        "：",
        158,
        "。"
      ]
    ]
  },
  {
    "id": "reading-69",
    "page": 69,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Còn salad không?",
    "jp": "まだあります",
    "blocks": [
      [
        "A",
        "：",
        325,
        2,
        291,
        67,
        111,
        "。"
      ],
      [
        "B",
        "：",
        174,
        "、",
        291,
        67,
        "。",
        15,
        "。"
      ],
      [
        "A",
        "：",
        298,
        "。"
      ]
    ]
  },
  {
    "id": "reading-70",
    "page": 70,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Bia đã hết",
    "jp": "もうありません",
    "blocks": [
      [
        "A",
        "：",
        326,
        2,
        291,
        67,
        111,
        "。"
      ],
      [
        "B",
        "：",
        254,
        "。",
        289,
        327,
        "。",
        328,
        2,
        175,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        220,
        "。"
      ]
    ]
  },
  {
    "id": "reading-71",
    "page": 71,
    "lesson": 7,
    "kind": "sentences",
    "title": "Vị trí người và đồ vật",
    "jp": "います・あります",
    "blocks": [
      [
        1,
        2,
        329,
        70,
        301,
        "。"
      ],
      [
        330,
        2,
        46,
        8,
        302,
        70,
        67,
        "。"
      ],
      [
        331,
        70,
        3,
        159,
        66,
        301,
        "。"
      ],
      [
        332,
        8,
        302,
        70,
        329,
        66,
        67,
        "。"
      ]
    ]
  },
  {
    "id": "reading-72",
    "page": 72,
    "lesson": 7,
    "kind": "sentences",
    "title": "Lời nhờ và đề nghị giúp",
    "jp": "手伝いましょうか",
    "blocks": [
      [
        1,
        8,
        333,
        38,
        313,
        83,
        "。"
      ],
      [
        3,
        159,
        2,
        331,
        36,
        334,
        38,
        335,
        301,
        "。"
      ],
      [
        336,
        "。"
      ]
    ]
  },
  {
    "id": "reading-73",
    "page": 73,
    "lesson": 7,
    "kind": "sentences",
    "title": "Cách nấu món ăn",
    "jp": "作り方を教えて",
    "blocks": [
      [
        129,
        8,
        132,
        38,
        134,
        83,
        "。"
      ],
      [
        322,
        66,
        187,
        337,
        38,
        323,
        111,
        "。"
      ],
      [
        "—",
        " ",
        324,
        159,
        66,
        323,
        "。"
      ]
    ]
  },
  {
    "id": "reading-74",
    "page": 74,
    "lesson": 7,
    "kind": "sentences",
    "title": "Còn hay đã hết?",
    "jp": "まだ・もう",
    "blocks": [
      [
        325,
        2,
        291,
        67,
        111,
        "。"
      ],
      [
        "—",
        " ",
        174,
        "、",
        291,
        67,
        "。"
      ],
      [
        "／",
        222,
        "、",
        289,
        327,
        "。"
      ]
    ]
  },
  {
    "id": "reading-75",
    "page": 75,
    "lesson": 7,
    "kind": "dialogue",
    "title": "Nhờ rửa đĩa",
    "jp": "お皿を洗ってください",
    "blocks": [
      [
        "A",
        "：",
        312,
        38,
        308,
        83,
        "。"
      ],
      [
        "B",
        "：",
        314,
        312,
        4,
        111,
        "。"
      ],
      [
        "A",
        "：",
        315,
        312,
        4,
        "。"
      ]
    ]
  },
  {
    "id": "reading-76",
    "page": 76,
    "lesson": 7,
    "kind": "sentences",
    "title": "Muối và đũa",
    "jp": "どれ・はしで",
    "blocks": [
      [
        316,
        2,
        317,
        4,
        111,
        "。",
        "—",
        " ",
        318,
        4,
        "。"
      ],
      [
        338,
        36,
        283,
        38,
        179,
        "。"
      ]
    ]
  }
];
