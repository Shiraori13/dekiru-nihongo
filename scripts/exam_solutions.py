"""Reviewed teaching notes for all 180 exam questions.

Rows: id | completed Japanese / dictionary form | meaning | reasons for the
three distractors, in their original cyclic order after the correct choice.
The builder maps reasons to actual option indices, never to an A/B/C/D label.
"""

RULES={
'g4-location':'Địa danh は quốc gia の phương hướng です. の nối quốc gia với 北・南・東・西・真ん中 để tạo cụm chỉ vị trí. Đây không phải nơi diễn ra hành động nên không thay の bằng で.',
'g4-duration':'AからBまで xác định hai đầu hành trình; phương tiện dùng で. 歩いて đã có nghĩa “đi bộ”, không thêm で. Khoảng thời gian dùng 時間・分; 時 chỉ giờ trên đồng hồ. くらい sau thời lượng nghĩa là khoảng; どのくらい hỏi mất bao lâu.',
'g4-adjective':'Tính từ い giữ nguyên đuôi trước です. Tính từ な bỏ な khi kết thúc câu với です; chỉ thêm な khi bổ nghĩa danh từ. 静か・有名・きれい thuộc nhóm な, kể cả khi きれい có âm cuối い.',
'g4-negative':'Phủ định tính từ い: bỏ い rồi thêm くないです. Tính từ な dùng じゃありません hoặc ではありません. Ngoại lệ いい dùng gốc よ: よくないです. Chọn dạng phủ định phù hợp với lời đáp いいえ.',
'g4-modifier':'Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な trước danh từ. どんな + danh từ hỏi đặc điểm, loại hoặc tính chất. Đừng nhầm dạng cuối câu 有名です với dạng bổ nghĩa 有名なお寺.',
'g4-existence':'Mẫu giới thiệu sự vật tồn tại: địa điểm に + sự vật が + あります. に đánh dấu nơi tồn tại, が đánh dấu sự vật. で dùng cho nơi diễn ra hành động hoặc sự kiện, không thay に trong câu tồn tại cơ bản này.',
'g4-connect':'そして nối thêm thông tin cùng chiều; が sau một mệnh đề lịch sự nêu ý tương phản. Trong Aですが、Bです, giữ です trước が. が nối mệnh đề ở đây khác が đánh dấu sự vật trong あります.',
'g4-degree':'とても = rất; 少し = hơi/một chút. あまり trong các mẫu này đi với phủ định để nói “không…lắm”. Chọn cả mức độ và dạng tính từ; tránh đảo nghĩa 暑い (nóng) với 寒い (lạnh).',
'g4-ne':'ね đứng sau câu để chia sẻ cảm nhận hoặc tìm sự đồng tình về điều người nói và người nghe cùng nhận thấy. Tiếng Việt thường dịch là “nhỉ/nhé”. Nó không thay cho trợ từ đứng sau danh từ.',
'g5-past':'Động từ lịch sự ở quá khứ: ます → ました; ません → ませんでした. Hãy xác định cả thời điểm lẫn khẳng định/phủ định. Không ghép でした trực tiếp sau ます hoặc thể từ điển của động từ.',
'g5-with':'Người cùng làm dùng と; làm một mình dùng 一人で. Nơi diễn ra hành động dùng で. Khi kể chuỗi việc đã làm, それから có nghĩa “sau đó”; động từ của từng việc vẫn cần chia quá khứ.',
'g5-somewhere':'どこか（へ） hỏi có đến một nơi nào đó không. どこ（へ）も đi với phủ định để nói không đi đâu cả. Khi hỏi về việc đã qua, dùng 行きましたか; lời đáp không đi dùng 行きませんでした.',
'g5-past-i':'Tính từ い: bỏ い + かったです (quá khứ khẳng định), hoặc くなかったです (quá khứ phủ định). Không thêm でした vào dạng い/くない. Ngoại lệ いい → よかった／よくなかった. どうでしたか hỏi cảm nhận về trải nghiệm đã qua.',
'g5-past-na':'Tính từ な bỏ な, thêm でした để nói quá khứ; phủ định quá khứ là じゃありませんでした. Danh từ dùng cùng cách chia. きれい・暇・簡単・静か・大変 không chia bằng かった.',
'g5-reason':'どうして hỏi lý do. Câu nêu lý do + から đứng trước kết quả; có thể kết thúc câu trả lời bằng から. Với danh từ/tính từ な ở dạng lịch sự, cần です／でした trước から. Kiểm tra thời điểm và nghĩa phủ định của kết quả.',
'g5-want-noun':'Nがほしいです diễn đạt mong muốn có một đồ vật; が đánh dấu vật muốn có. ほしい chia như tính từ い: ほしくないです. Muốn làm một hành động dùng gốc động từ + たい, không dùng ほしい thay cho động từ.',
'g5-like':'Nが好きです／嫌いです nói thích/ghét N. 好き・嫌い là tính từ な; phủ định dùng じゃありません, không bỏ い của 嫌い. あまり好きじゃありません nghĩa là không thích lắm.',
'g5-want-verb':'Lấy phần trước ます rồi thêm たいです: 見ます → 見たい, 撮ります → 撮りたい. たい chia như tính từ い: たくない (không muốn), たかった (đã muốn). Không gắn たい sau thể từ điển hoặc sau cả ます.',
'g5-purpose':'Mục đích của chuyến đi: gốc trước ます + に + 行きます／帰ります. Danh từ hoạt động như 買い物 cũng dùng に. Phân biệt に chỉ mục đích với へ chỉ nơi đến và に chỉ người gặp trong 家族に会う.',
'g6-event':'Sự kiện diễn ra tại địa điểm dùng で; sự kiện, cuộc hẹn hoặc vật đang có dùng があります. 人と約束があります nói có hẹn với ai. Vé là vật mỏng/phẳng nên đếm bằng 枚（まい）.',
'g6-compare':'Hỏi giữa hai lựa chọn: AとBとどちらが…ですか. Nêu bên nổi bật: Aのほうが…です. So sánh với mốc B: AはBより…です. Giữ đúng vai trò từng trợ từ; どちらも nghĩa là cả hai, không phải từ hỏi.',
'g6-best':'Phạm vi で + đối tượng が + いちばん + tính từ. Với câu hỏi dùng 何がいちばん…ですか. の nối danh từ, で giới hạn nhóm so sánh, が nêu đối tượng; いっしょに là cùng nhau, không có nghĩa “nhất”.',
'g6-invite':'Vませんか dùng để mời cùng làm. Có thể nhận lời bằng いいですね và Vましょう. Khi từ chối nhẹ, dùng すみません、…はちょっと… rồi nêu lý do bằng から. Phản hồi phải phù hợp với phần hội thoại tiếp theo.',
'g6-suggest':'Nはどうですか dùng đề xuất một phương án như giờ hẹn. Người nghe có thể lặp lại Nですね để xác nhận thông tin vừa nghe. どちら hỏi lựa chọn giữa hai bên; よ dùng báo tin, khác ね dùng xác nhận.',
}

SAMPLE='''
sample-01|A：Bさん、先週、どこへ行きましたか。 B：おだいばへ行きました。|A hỏi tuần trước B đã đi đâu; B đáp đã đến Odaiba.|いつ hỏi khi nào, nhưng B không trả lời thời gian.|どこでしましたか hỏi nơi làm một việc, không khớp 行きました.|何を hỏi đã làm gì, không khớp câu đáp về nơi đến.
sample-02|先週の土曜日、友達と一緒に山に登りました。|Thứ bảy tuần trước tôi đã leo núi cùng bạn.|来週 là tuần sau, trái với tuần trước.|Người đi cùng dùng と, không dùng 友達に一緒に.|山を見ました là đã ngắm núi, không phải đã leo núi.
sample-03|読解（どっかい）|Đọc hiểu.|国会 đọc こっかい, nghĩa là quốc hội.|読会 không phải cách viết chuẩn của từ どっかい trong câu này.|国解 không phải từ 読解; thay 読 bằng 国 làm sai cách viết.
sample-04|きのう、天気がわるかったですから、どこへも行きませんでした。|Vì hôm qua trời xấu nên tôi đã không đi đâu cả.|どこへも trong mẫu này cần phủ định, không dùng 行きました.|いい là hiện tại; 行きました còn trái với どこへも + phủ định.|いい không phải quá khứ của “xấu”, dù vế sau đã phủ định đúng.
sample-05|おもしろい映画を見たいです。|Tôi muốn xem một bộ phim thú vị.|食べたい là muốn ăn, không phù hợp với 映画.|会いたい là muốn gặp một người, không dùng để xem phim.|買います là mua và không thể nối trực tiếp thành 買いますです.
sample-06|読み物（よみもの）|Sách báo hoặc tài liệu để đọc.|飲み物（のみもの）là đồ uống.|買い物（かいもの）là mua sắm.|食べ物（たべもの）là đồ ăn.
sample-07|A：先週の日曜日、どこかへ行きましたか。 B：いいえ、どこへも行きませんでした。|Chủ nhật tuần trước bạn có đi đâu không? — Không, tôi không đi đâu cả.|行きました là khẳng định, mâu thuẫn với いいえ、どこへも.|Câu hỏi có thể hỏi thư viện, nhưng 行きました vẫn mâu thuẫn với lời đáp phủ định.|図書館へ行きました thiếu か để thành câu hỏi; không hợp cặp hỏi–đáp này.
sample-08|横浜で野球の試合があります。|Có trận bóng chày diễn ra ở Yokohama.|Trận đấu là sự kiện diễn ra tại nơi đó, nên dùng で chứ không phải に.|あります không lấy tân ngữ を; sự kiện cần が.|は・に không tạo được cấu trúc địa điểm で + sự kiện があります.
sample-09|帰国（きこく）|Trở về nước.|会国 không phải cách viết của きこく; cần chữ 帰 là trở về.|見国 không phải từ 帰国; 見 là nhìn.|問国 không phải từ 帰国; 問 liên quan đến hỏi.
sample-10|あした、友達と約束があります。|Ngày mai tôi có hẹn với bạn.|友達の約束 nói lời hứa/cuộc hẹn của bạn, không nêu người có hẹn cùng tôi.|野球の約束 không diễn đạt cuộc hẹn với một người trong ngữ cảnh này.|約束の約束 lặp từ, không nêu được người hẹn.
sample-11|パソコンは高かったから、買いませんでした。|Vì máy tính đã đắt nên tôi đã không mua.|会いました là đã gặp, sai động từ cần dùng với việc mua máy tính.|買いました là đã mua, trái với yêu cầu đã không mua.|会いませんでした là đã không gặp, sai hành động.
sample-12|私の趣味はカラオケです。|Sở thích của tôi là hát karaoke.|チケット là vé, không phải karaoke.|ツアー là chuyến tham quan theo đoàn.|歌手（かしゅ）là ca sĩ, khác hoạt động karaoke.
sample-13|A：映画はおもしろかったですか。 B：いいえ、おもしろくなかったです。|Phim đã hay không? — Không, phim đã không hay.|おもしろかった là khẳng định quá khứ, trái với いいえ.|Phủ định quá khứ không tạo bằng くないでした; cần くなかったです.|Không thêm でした trực tiếp sau おもしろい; còn thiếu nghĩa phủ định.
sample-14|新宿駅と渋谷駅とどちらが近いですか。|Ga Shinjuku và ga Shibuya, ga nào gần hơn?|どちらも là cả hai; câu đang cần từ hỏi どちらが.|の・は không ghép thành cặp AとBと, và どちらも không phải từ hỏi.|どちらが đúng chức năng hỏi, nhưng hai vị trí đầu vẫn cần と・と.
sample-15|日本の食べ物で何がいちばん好きですか。|Trong các món ăn Nhật, bạn thích món nào nhất?|を không giới hạn phạm vi so sánh; いっしょに là cùng nhau.|日本を食べ物の không tạo cụm “các món ăn Nhật”; cần 日本の食べ物で.|Các trợ từ đầu đúng nhưng いっしょに không có nghĩa “nhất”.
sample-16|スポーツで野球がいちばんおもしろいです。|Trong các môn thể thao, bóng chày thú vị nhất.|あたらしい là mới, không phải thú vị.|おおい là nhiều, không phải thú vị.|おおきい là lớn, không phải thú vị.
sample-17|A：日曜日、何をしましたか。 B：公園へ行きました。公園で写真を撮りました。|Chủ nhật bạn đã làm gì? — Tôi đến công viên và chụp ảnh ở đó.|で không đánh dấu đích đến của 行く; へ cũng không chỉ nơi chụp ảnh.|Vị trí đầu cần へ để đánh dấu nơi đến.|Hai trợ từ đầu đúng; 写真 là đối tượng của 撮る nên dùng を, không dùng が.
sample-18|家から駅まで、電車で十分です。|Từ nhà đến ga, đi tàu điện mất mười phút.|を không đánh dấu phương tiện đi lại.|が đánh dấu chủ thể/sự vật, không đánh dấu phương tiện.|と chỉ người cùng đi hoặc liệt kê, không có nghĩa bằng tàu điện.
sample-19|新宿駅のほうが近いです。|Phía ga Shinjuku gần hơn.|Trước ほう cần の để tạo 新宿駅のほう.|のほう đúng, nhưng mẫu nêu bên nổi bật dùng が trước tính từ.|は・より không tạo được mẫu Aのほうが.
sample-20|この町は一年で、六月がいちばん暑いです。|Ở thị trấn giả định này, tháng sáu nóng nhất trong năm.|スポーツで là trong các môn thể thao, không phải trong năm.|季節を không tạo phạm vi so sánh và を không dùng ở vị trí này.|音楽で là trong âm nhạc, không phù hợp việc so các tháng.
sample-21|国会（こっかい）|Quốc hội.|かいけん là cách đọc của từ khác như 会見, không phải 国会.|しゃかい là 社会, nghĩa là xã hội.|かいしゃ là 会社, nghĩa là công ty.
sample-22|来日（らいにち）|Đến Nhật Bản.|きじつ là cách đọc của từ khác như 期日; không phải 来日.|らいに thiếu âm ち của 日 trong từ này.|きにち không phải cách đọc chuẩn; 来 đọc らい trong 来日.
sample-23|話す（はなす）|Nói, trò chuyện.|Động từ nghe chuẩn là 聞く, không phải 聞す.|Động từ viết chuẩn là 書く, không phải 書す.|Động từ xem chuẩn là 見る, không phải 見す.
sample-24|A：今度、ビールを飲みませんか。 B：ああ、今度ですか。すみません。今度はちょっと…。|Lần tới cùng uống bia nhé? — À, lần tới à? Xin lỗi, lần tới thì hơi khó…|そうですかね gợi sự không chắc chắn, không phải phản hồi lặp lại thời điểm đang được kiểm tra.|いいですね thường nhận lời/hưởng ứng, không khớp ngay sau đó là lời từ chối ở đây.|飲みましょう nhận lời cùng uống, trái với 今度はちょっと….
sample-25|国へ家族に会いに帰ります。|Tôi về nước để gặp gia đình.|スキーを買いに là để mua ván trượt, khác nghĩa đề yêu cầu.|木を買いに là để mua cây/gỗ, khác nghĩa đề yêu cầu.|食事に là để dùng bữa, không phải để gặp gia đình.
sample-26|田中さん、いっしょに行きませんか。|Anh/chị Tanaka, cùng đi nhé?|もう là đã/rồi, không có nghĩa cùng nhau.|ぜひ là nhất định/rất mong; có thể dùng với lời mời nhưng không mang nghĩa “cùng nhau”.|まだ là chưa/vẫn, không có nghĩa cùng nhau.
sample-27|A：何時に会いますか。 B：五時はどうですか。 A：五時ですね。わかりました。|Mấy giờ gặp nhau? — Năm giờ được không? — Năm giờ nhỉ, tôi hiểu rồi.|どちら hỏi bên nào; よ không xác nhận lại giờ vừa nghe như ね.|どうですか đề xuất đúng, nhưng câu cuối đang xác nhận nên cần ね.|ね xác nhận đúng, nhưng giờ hẹn là một đề xuất với どうですか.
sample-28|読書（どくしょ）|Việc đọc sách.|読物 liên quan đến sách/tài liệu đọc, thường viết 読み物 và đọc よみもの, không phải どくしょ.|聞物 không phải cách viết của 読書; chữ cần là 読, liên quan đọc.|問書 không phải cách viết của 読書; cần 読書, không ghép chữ theo nghĩa đoán.
sample-29|来ます（きます）|Đến.|会う chia lịch sự là 会います（あいます）, không phải 会ます.|きまする không phải dạng lịch sự chuẩn của 来る.|聞く chia lịch sự là 聞きます（ききます）, không phải 聞ます.
sample-30|今、何時ですか。（いま、なんじですか。）|Bây giờ là mấy giờ?|なんがつ là tháng mấy, không phải mấy giờ.|今 trong câu chỉ hiện tại đọc いま, không đọc こん riêng lẻ.|いぬ là chó; なんがつ hỏi tháng. Cả hai đều không khớp câu.
sample-31|あした、買い物に行きませんか。|Ngày mai cùng đi mua sắm nhé?|買い物 đứng trực tiếp trước 行く thiếu に chỉ mục đích.|Không đặt cả 買い物します trước に行く; dùng danh từ hoạt động 買い物に.|買い物し thiếu に; 買い物しに mới có thể diễn đạt mục đích.
sample-32|会話（かいわ）|Hội thoại.|かいしゃ là 会社, công ty.|かいけん là cách đọc của từ khác như 会見, cuộc gặp/họp báo.|かいぎ là 会議, cuộc họp.
sample-33|国へ帰ります。（くにへかえります。）|Tôi trở về nước.|来ます là đến, không phải trở về.|会 không có nghĩa quốc gia; cần 国.|Sai cả chữ 国 và động từ 帰ります; 来ます là đến.
sample-34|A：今度、ご飯を食べませんか。 B：いいですね。食べましょう。|Lần tới cùng ăn nhé? — Hay đấy, cùng ăn thôi.|いいですか hỏi có được không, không trực tiếp nhận lời như câu sau yêu cầu.|そうですか chỉ tiếp nhận thông tin, chưa hưởng ứng lời mời.|そうでした là dạng quá khứ “đã là như vậy”, không hợp lời mời mới.
sample-35|サッカーのチケットが三枚（さんまい）あります。|Tôi có ba vé bóng đá.|本 đếm vật dài, không dùng cho vé.|つ là cách đếm chung, nhưng vé có lượng từ chuyên dùng 枚.|冊 đếm sách/vở, không dùng cho vé.
sample-36|服を買いに行きませんか。|Cùng đi mua quần áo nhé?|飲いに không phải gốc của 飲みます; quần áo cũng không phải thứ để uống.|飲い vừa sai gốc vừa thiếu に chỉ mục đích.|買い là gốc đúng nhưng cần thêm に trước 行く.
sample-37|すみません。あしたはちょっと…。約束がありますから。|Xin lỗi, ngày mai hơi khó… vì tôi có hẹn.|用事があります có thể là lý do, nhưng ちょっと không nối thành đuôi nêu nguyên nhân.|約束 phù hợp, nhưng phải kết thúc lý do với から, không phải ちょっと.|用事 phù hợp nghĩa có việc, nhưng を không nối câu nêu lý do sau あります.
sample-38|おいしいですから、ぜひ食べたいです。|Vì ngon nên tôi rất muốn ăn.|食べます không nối trực tiếp với です và không diễn đạt mong muốn.|食べに chỉ mục đích đi; không kết thúc bằng 食べにです.|食べにいます không phải mẫu diễn đạt mong muốn và không nối thêm です như vậy.
sample-39|社会（しゃかい）|Xã hội.|こうかい là cách đọc của từ khác như 公開; không phải 社会.|かいけん không phải cách đọc của 社会.|かいしゃ là 会社; vị trí các chữ/âm khác với 社会.
sample-40|きのう、天気がよかったです。そして、景色はとてもきれいでした。|Hôm qua thời tiết đẹp, và phong cảnh rất đẹp.|きれいです là hiện tại; câu đang kể cảnh hôm qua nên dùng きれいでした.|いいです là hiện tại; cần quá khứ ngoại lệ よかったです.|きれい là tính từ な, không chia thành きれかったです.
sample-41|今月（こんげつ）|Tháng này.|玲 không thay cho 今 trong từ 今月.|Sai cả chữ 今 lẫn chữ 月; 目 là mắt.|今目 dùng 目 thay cho 月, nên không có nghĩa tháng này.
sample-42|A：どこで食べますか。 B：レストランで食べます。|Bạn ăn ở đâu? — Tôi ăn ở nhà hàng.|今週 hỏi thời gian, không khớp lời đáp nêu nơi; 今週 thường không thêm に ở đây.|何時に hỏi giờ, trong khi レストラン là địa điểm; nơi ăn dùng で.|どこに chỉ nơi đến/tồn tại ở mẫu khác; nơi hành động 食べる dùng で.
sample-43|今週（こんしゅう）|Tuần này.|らいしゅう là 来週, tuần sau.|しゅう không đổi thành じゅう trong 今週.|せんしゅう là 先週, tuần trước.
sample-44|新宿駅は渋谷駅より近いです。|Ga Shinjuku gần hơn ga Shibuya.|と chỉ liệt kê/cùng nhau, không đánh dấu mốc so sánh như より.|と・と thường xuất hiện trong câu hỏi AとBとどちらが; không tạo câu so sánh này.|より đúng ở mốc B, nhưng A cần は trong mẫu được hỏi.
sample-45|映画で何がいちばん好きですか。|Trong các bộ phim, bạn thích phim nào nhất?|の không nêu phạm vi, で không đánh dấu đối tượng thích, いっしょに không có nghĩa nhất.|いちばん đúng nghĩa nhất, nhưng hai trợ từ đầu cần で・が.|で・が đúng, nhưng いっしょに là cùng nhau, không phải nhất.
'''

BASE='''
c45-1-15|ハノイはベトナムの北です。|Hà Nội ở phía bắc Việt Nam.|で chỉ nơi hành động/phương tiện, không nối quốc gia với phương hướng.|を đánh dấu tân ngữ, không nối hai danh từ này.|に không tạo cụm ベトナムの北 chỉ phía bắc của Việt Nam.
c45-2-15|日本の南です。|Ở phía nam của Nhật Bản.|と nghĩa là và/cùng, không chỉ quan hệ “của”.|を không nối 日本 với 南.|へ chỉ hướng đến, không tạo cụm “phía nam của Nhật”.
c45-3-15|この町は国の真ん中です。|Thị trấn này ở chính giữa đất nước.|で không nối danh từ quốc gia với vị trí bên trong.|が không tạo cụm danh từ 国の真ん中.|を đánh dấu đối tượng của động từ, không phù hợp câu vị trí với です.
c45-1-16|家から学校までバスで三十分くらいです。|Từ nhà đến trường, đi xe buýt mất khoảng ba mươi phút.|の không đánh dấu phương tiện đi lại.|を không có nghĩa “bằng xe buýt” ở đây.|が không đánh dấu phương tiện.
c45-2-16|駅から教会まで歩いて十分です。|Từ ga đến nhà thờ, đi bộ mất mười phút.|歩いて đã mang nghĩa đi bộ; thêm で là thừa và sai mẫu.|歩きます không nối với で để nói phương tiện.|歩くを không phải cách diễn đạt đi bộ.
c45-3-16|A：空港から町までどのくらいですか。 B：車で一時間半です。|Từ sân bay đến thị trấn mất bao lâu? — Đi ô tô mất một tiếng rưỡi.|どんな hỏi loại/đặc điểm, không hỏi thời lượng.|何を hỏi làm gì với đối tượng nào, không khớp thời lượng.|だれと hỏi cùng ai, không khớp 一時間半.
c45-1-17|この町は静かです。|Thị trấn này yên tĩnh.|静かな dùng trước danh từ, không dùng 静かなです.|静か không phải tính từ い để thêm い.|静かく không phải dạng kết thúc câu chuẩn của tính từ な.
c45-2-17|あのビルは高いです。|Tòa nhà kia cao.|高い là tính từ い nên không thêm な.|高く là dạng nối/trạng từ, không thay 高い trước です ở câu khẳng định này.|の không cần chen giữa 高い và です.
c45-3-17|この神社は有名です。|Ngôi đền này nổi tiếng.|有名な cần có danh từ theo sau, không ghép なです.|有名 là tính từ な, không thêm い.|有名く không phải dạng khẳng định chuẩn.
c45-1-18|このスープは熱いですか。いいえ、熱くないです。|Súp này nóng không? — Không, không nóng.|熱い là tính từ い; phủ định cơ bản cần 熱くない, không dùng 熱いじゃない.|熱かった là đã nóng, không phải hiện tại phủ định.|Phải bỏ い trước くない, không giữ thành 熱いくない.
c45-2-18|この町はにぎやかですか。いいえ、にぎやかじゃありません。|Thị trấn này nhộn nhịp không? — Không, không nhộn nhịp.|にぎやか thuộc nhóm な nên không thêm くない.|Không chia tính từ な bằng かった.|にぎやかい không phải dạng từ chuẩn.
c45-3-18|ここの天気はいいですか。いいえ、よくないです。|Thời tiết ở đây đẹp không? — Không, không đẹp.|いい là ngoại lệ dùng gốc よ, không tạo いくない.|Không dùng いいじゃない để diễn đạt phủ định cơ bản trong mẫu này.|よかった là đã tốt/đẹp, không phải hiện tại phủ định.
c45-1-19|あそこは有名なお寺です。|Đằng kia là một ngôi chùa nổi tiếng.|Thiếu な khi 有名 bổ nghĩa cho お寺.|有名 không phải tính từ い.|の không thay cho な khi tính từ な bổ nghĩa danh từ.
c45-2-19|ここは小さい町です。|Đây là một thị trấn nhỏ.|Tính từ い không cần thêm な trước danh từ.|小さく là dạng khác, không bổ nghĩa trực tiếp cho 町 theo mẫu này.|小さな tự nó có thể bổ nghĩa danh từ, nhưng 小さなな lặp な nên sai.
c45-3-19|A：ここはどんなところですか。 B：静かなところです。|Đây là nơi như thế nào? — Là một nơi yên tĩnh.|どのくらい hỏi mức độ/thời lượng, không hỏi đặc điểm một nơi.|だれと hỏi cùng ai.|いつ hỏi khi nào, không phù hợp với 静かなところ.
c45-1-20|この町に大きい川があります。|Ở thị trấn này có một con sông lớn.|Cần に cho nơi tồn tại và が cho sự vật; で・を đều không khớp mẫu.|に đúng, nhưng 川 cần が, không phải を.|を không đánh dấu nơi tồn tại.
c45-2-20|山の近くに温泉があります。|Gần núi có suối nước nóng.|あります không dùng を đánh dấu sự vật tồn tại.|へ chỉ hướng đi, không đánh dấu 温泉 là sự vật đang có.|と không đánh dấu sự vật được giới thiệu với あります.
c45-3-20|A：この町に何がありますか。 B：古いお城があります。|Thị trấn này có gì? — Có một lâu đài cổ.|で không đánh dấu lâu đài là sự vật tồn tại.|を dùng cho tân ngữ hành động, không dùng với あります ở đây.|まで chỉ điểm kết thúc, không đánh dấu sự vật.
c45-1-21|このビルは古いですが、きれいです。|Tòa nhà này cũ nhưng đẹp/sạch.|を không nối hai mệnh đề với nghĩa nhưng.|で không đứng sau です để nối tương phản như vậy.|に không có chức năng nối hai ý trái chiều.
c45-2-21|ここは静かです。そして、緑が多いです。|Nơi này yên tĩnh. Và có nhiều cây xanh.|どうして hỏi tại sao, không nối thêm một đặc điểm.|だれと hỏi cùng ai, không phải từ nối.|どのくらい hỏi bao lâu/mức độ, không có nghĩa và.
c45-3-21|この料理は辛いですが、おいしいです。|Món này cay nhưng ngon.|に không nối hai mệnh đề tương phản.|を không nối sau です để nói nhưng.|の không thay từ nối が sau です.
c45-1-22|私の町は冬、あまり寒くないです。|Thị trấn của tôi vào mùa đông không lạnh lắm.|あまり cần phủ định trong mẫu này, không đi với 寒いです.|寒い là tính từ い, không thêm な; còn thiếu phủ định.|寒くです không phải dạng kết thúc câu; cần 寒くないです.
c45-2-22|このメロンはとても甘いです。|Quả dưa này rất ngọt.|あまり không có nghĩa rất và cần phủ định ở mẫu này.|どんな là từ hỏi loại/đặc điểm, không phải từ chỉ mức độ.|どうして hỏi lý do, không diễn đạt rất.
c45-3-22|このコーヒーは少し苦いです。|Cà phê này hơi đắng.|あまり nghĩa không…lắm và cần phủ định, không đồng nghĩa hơi.|どんな không diễn đạt mức độ hơi.|何時 hỏi mấy giờ, không chỉ mức độ đắng.
c45-1-23|雪はきれいですね。|Tuyết đẹp nhỉ.|を đánh dấu tân ngữ sau danh từ, không làm đuôi đồng tình sau です.|に không có nghĩa nhỉ khi đặt sau です.|で không làm đuôi chia sẻ cảm nhận.
c45-2-23|涼しいですね。|Mát mẻ nhỉ.|を không gắn sau です để tìm đồng tình.|と không làm đuôi nhỉ trong câu này.|へ chỉ hướng, không dùng sau です như vậy.
c45-3-23|おいしいですね。|Ngon nhỉ.|に không tạo đuôi đồng tình sau です.|で không dùng làm đuôi nhỉ.|が có thể nối mệnh đề tương phản nhưng không phải đuôi “nhỉ” được hỏi.
c45-1-24|きのう、部屋を掃除しました。|Hôm qua tôi đã dọn phòng.|掃除します là hiện tại/tương lai, chưa thể hiện đã dọn.|掃除しません là phủ định hiện tại, sai cả thời và nghĩa.|Không ghép thể từ điển する với でした để chia động từ quá khứ.
c45-2-24|先週の日曜日は洗濯をしませんでした。|Chủ nhật tuần trước tôi đã không giặt đồ.|しません là phủ định hiện tại, thiếu quá khứ.|します là khẳng định hiện tại, sai cả nghĩa và thời.|するません không phải cách chia phủ định của します.
c45-3-24|おととい、美術館へ行きました。|Hôm kia tôi đã đi bảo tàng mỹ thuật.|行きます chưa diễn đạt việc đã xảy ra.|行きません là phủ định hiện tại, không phải đã đi.|行くでした không phải dạng quá khứ lịch sự chuẩn của 行く.
c45-1-25|先週、家族と食事しました。|Tuần trước tôi đã ăn cùng gia đình.|に không chỉ người cùng ăn trong mẫu này.|を đánh dấu tân ngữ, không chỉ người cùng làm.|の chỉ quan hệ danh từ, không diễn đạt cùng ăn với gia đình.
c45-2-25|日曜日、一人で買い物しました。|Chủ nhật tôi đã đi mua sắm một mình.|と chỉ cùng với, không tạo nghĩa một mình.|を không tạo cụm trạng ngữ một mình.|の cần danh từ theo sau, không bổ nghĩa trực tiếp cho 買い物しました.
c45-3-25|昨日、洗濯しました。それから、ゲームをしました。|Hôm qua tôi đã giặt đồ. Sau đó tôi đã chơi trò chơi.|どうして hỏi lý do, không nối trình tự các việc.|どんな hỏi đặc điểm/loại, không có nghĩa sau đó.|だれと hỏi cùng ai, không phải từ nối thứ tự.
c45-1-26|A：きのう、どこかへ行きましたか。 B：はい、デパートへ行きました。|Hôm qua bạn có đi đâu không? — Có, tôi đã đến trung tâm thương mại.|どこへも dùng với phủ định “không nơi nào”, không hợp lời đáp đã đi.|だれへ hỏi hướng tới ai, không phải có đến nơi nào đó.|何を hỏi đối tượng làm gì, không đánh dấu nơi đến của 行く.
c45-2-26|先週はどこへも行きませんでした。|Tuần trước tôi không đi đâu cả.|Không dùng どこかへも để nói không đi đâu; mẫu là どこへも + phủ định.|だれと là cùng ai, không có nghĩa không nơi nào.|いつに hỏi thời gian, không tạo nghĩa không đi đâu cả.
c45-3-26|A：週末、どこかへ行きましたか。 B：いいえ、どこへも行きませんでした。|Cuối tuần bạn có đi đâu không? — Không, tôi đã không đi đâu cả.|行きました là khẳng định, trái với いいえ、どこへも.|行きます là khẳng định hiện tại/tương lai, sai cả thời lẫn phủ định.|行きますでした là cách chia sai; cần 行きませんでした.
c45-1-27|先月の旅行は楽しかったです。|Chuyến đi tháng trước rất vui.|Không ghép でした trực tiếp sau tính từ い.|楽しく là dạng nối/trạng từ, không thêm でした để tạo quá khứ.|だった không gắn trực tiếp sau 楽しい để chia tính từ い.
c45-2-27|昨日の映画はおもしろくなかったです。|Bộ phim hôm qua đã không hay.|Phủ định quá khứ cần くなかった, không phải くないでした.|おもしろい là tính từ い nên không chia phủ định theo じゃなかった.|おもしろかった là khẳng định đã hay, trái với yêu cầu phủ định.
c45-3-27|去年の冬の天気はよかったです。|Thời tiết mùa đông năm ngoái đã đẹp.|Không thêm でした trực tiếp sau いい.|いい là ngoại lệ dùng gốc よ, không tạo いかった.|よい vẫn là tính từ い; quá khứ là よかった, không phải よいでした.
c45-1-28|昨日は暇でした。|Hôm qua tôi đã rảnh.|暇 thuộc nhóm な, không chia bằng かった.|な không đứng trước でした ở vị trí kết thúc câu.|暇い không phải tính từ chuẩn.
c45-2-28|おとといは雨じゃありませんでした。|Hôm kia trời đã không mưa.|雨 là danh từ, không chia như tính từ い bằng くなかった.|じゃありません là phủ định hiện tại, thiếu quá khứ.|雨でした là đã mưa, trái nghĩa đã không mưa.
c45-3-28|先週のテストは簡単でした。|Bài kiểm tra tuần trước đã đơn giản.|簡単 thuộc nhóm な, không dùng かった.|な không đứng ngay trước でした khi kết thúc câu.|簡単い không phải dạng từ chuẩn và chưa có quá khứ.
c45-1-29|風邪でしたから、山に登りませんでした。|Vì bị cảm nên tôi đã không leo núi.|まで chỉ điểm kết thúc, không nối lý do.|を không nối sau mệnh đề でした để chỉ nguyên nhân.|に không có chức năng nối lý do với kết quả ở đây.
c45-2-29|A：どうして服を買いませんでしたか。 B：高かったですから。|Tại sao bạn đã không mua quần áo? — Vì đã đắt.|どのくらい hỏi mức độ/thời lượng, không hỏi lý do.|どんな cần danh từ để hỏi loại/đặc điểm, không hỏi tại sao.|だれを hỏi người làm đối tượng, không hợp lời đáp vì đắt.
c45-3-29|忙しかったですから、恋人に会いませんでした。|Vì đã bận nên tôi đã không gặp người yêu.|まで không nối hai mệnh đề để nêu nguyên nhân.|の không thay từ nối lý do から sau です.|を không nối mệnh đề lý do với kết quả.
c45-1-30|私は新しい自転車がほしいです。|Tôi muốn có một chiếc xe đạp mới.|へ chỉ hướng đến, không đánh dấu vật muốn có.|と chỉ cùng/và, không đánh dấu đối tượng của ほしい.|で không dùng cho vật muốn sở hữu trong Nがほしい.
c45-2-30|今、新しいカメラがほしいです。|Bây giờ tôi muốn có một chiếc máy ảnh mới.|飲みたい nghĩa là muốn uống, không phải muốn sở hữu máy ảnh.|行きたい nghĩa là muốn đi, không phù hợp đồ vật muốn có.|会いたい nghĩa là muốn gặp, không dùng cho việc sở hữu máy ảnh.
c45-3-30|私は車がほしくないです。|Tôi không muốn có ô tô.|ほしい chia như tính từ い, không dùng ほしいじゃない trong mẫu cơ bản này.|ほしくません không phải dạng phủ định chuẩn.|Phải bỏ い trước くない, không tạo ほしいくない.
c45-1-31|私はアニメが好きです。|Tôi thích hoạt hình.|へ chỉ hướng, không đánh dấu đối tượng thích.|好き là tính từ trong mẫu Nが好き; không dùng を như tân ngữ động từ.|で không đánh dấu đối tượng của 好き trong mẫu này.
c45-2-31|私はゲームがあまり好きじゃありません。|Tôi không thích trò chơi lắm.|あまり trong nghĩa không…lắm cần phủ định, không dùng 好きです.|好き là tính từ な, không dùng くない.|好きい không phải dạng tính từ chuẩn.
c45-3-31|私は苦いコーヒーが嫌いです。|Tôi ghét cà phê đắng.|ほしい là muốn có, không phải ghét.|安い là rẻ, không diễn đạt thái độ ghét.|忙しい là bận rộn, không có nghĩa ghét.
c45-1-32|景色の写真を撮りたいです。|Tôi muốn chụp ảnh phong cảnh.|撮る là thể từ điển; phải dùng gốc 撮り trước たい.|Cần bỏ ます trước khi thêm たい.|撮りに chỉ mục đích đi, không diễn đạt mong muốn với です.
c45-2-32|今度の休みに絵をかきたいです。|Kỳ nghỉ tới tôi muốn vẽ tranh.|Không thêm たい sau thể từ điển かく.|Phải bỏ ます trước たい.|Không thêm たい sau dạng quá khứ かきました.
c45-3-32|今晩はテレビを見たくないです。|Tối nay tôi không muốn xem ti vi.|たい chuyển thành たくない, không giữ い trước くない.|たい chia như tính từ い, không dùng たいじゃない ở mẫu này.|Phải dùng gốc 見 rồi たくない, không giữ ます.
c45-1-33|温泉に入りに行きます。|Tôi đi để tắm/ngâm suối nước nóng.|Phải bỏ ます của 入ります trước に.|Không dùng thể từ điển 入る trực tiếp trước に chỉ mục đích.|を không thay に chỉ mục đích trước 行く.
c45-2-33|デパートへ服を買いに行きます。|Tôi đến trung tâm thương mại để mua quần áo.|Phải bỏ ます trước に chỉ mục đích.|買う là thể từ điển; cần gốc 買い.|買いを không phải cụm mục đích; cần 買いに.
c45-3-33|友達に会いに町へ行きます。|Tôi đến thị trấn để gặp bạn.|Không giữ ます khi tạo gốc mục đích 会いに.|会う là thể từ điển, không phải gốc dùng trước に ở mẫu này.|を không thay に để nối mục đích với 行く.
'''

EXTRA='''
c45-1-34|新幹線で二時間半です。|Đi tàu cao tốc mất hai tiếng rưỡi.|二時半 là hai giờ rưỡi trên đồng hồ, không phải thời lượng.|Không chen を giữa 時間 và 半.|に không chen giữa 時 và 半 và vẫn thiếu đơn vị thời lượng 時間.
c45-1-35|この料理はあまり辛くないです。|Món này không cay lắm.|あまり cần phủ định trong mẫu này.|辛かった là đã cay, không có nghĩa không cay lắm.|辛い thuộc nhóm い, không chia phủ định bằng ではありません.
c45-1-36|昨夜、友達とレストランで食事しました。|Tối qua tôi đã dùng bữa cùng bạn tại nhà hàng.|Người cùng ăn cần と, không phải に.|と đúng, nhưng nơi ăn cần で, không phải を.|の không chỉ người cùng ăn; に không chỉ nơi hành động ăn trong mẫu này.
c45-1-37|昨日のかばんは安かったです。|Chiếc túi nói đến hôm qua đã rẻ.|Không thêm でした trực tiếp sau 安い.|安く không ghép với でした để tạo quá khứ tính từ い.|Cần bỏ い rồi thêm かった, không tạo 安いかった.
c45-1-38|先週の仕事は大変でした。|Công việc tuần trước đã vất vả.|大変 là tính từ な, không chia bằng かった.|な không đứng trước でした ở vị trí kết thúc câu.|大変い không phải dạng từ chuẩn.
c45-1-39|日曜日、映画を見に行きます。|Chủ nhật tôi đi xem phim.|Cần bỏ ます trước に chỉ mục đích.|Không dùng thể từ điển 見る trước に trong mẫu này.|を không thay に chỉ mục đích đi.
c45-1-40|A：あなたの町はどんな町ですか。 B：緑が多い町です。|Thị trấn của bạn thế nào? — Là một thị trấn có nhiều cây xanh.|どのくらい hỏi thời lượng/mức độ, không trực tiếp hỏi loại thị trấn.|いつ hỏi thời gian, không khớp câu đáp về đặc điểm.|だれと hỏi người cùng làm, không khớp câu đáp.
c45-1-41|A：昨日の温泉はどうでしたか。 B：気持ちがよかったです。|Suối nước nóng hôm qua thế nào? — Rất dễ chịu.|何時ですか hỏi mấy giờ, không hỏi cảm nhận.|どこへ行きますか hỏi nơi sẽ đến, không hỏi cảm nhận quá khứ.|何を買いますか hỏi sẽ mua gì, không khớp câu đáp về trải nghiệm.
c45-1-42|A：あさって、何をしたいですか。 B：絵をかきたいです。|Ngày kia bạn muốn làm gì? — Tôi muốn vẽ tranh.|Không gắn たい sau thể từ điển かく.|Phải bỏ ます trước たい.|かきに chỉ mục đích đi, không trả lời mong muốn với です.
c45-1-43|私の町は夏、あまり暑くないです。|Thành phố của tôi vào mùa hè không nóng lắm.|とても暑い nghĩa rất nóng, trái với không nóng lắm.|寒くない nghĩa không lạnh, đổi sai tính chất thời tiết.|冬 là mùa đông, không phải mùa hè 夏.
c45-1-44|おととい、ルームメイトと買い物しました。|Hôm kia tôi đã mua sắm cùng bạn cùng phòng.|あさって là ngày kia và します là tương lai/hiện tại, không phải việc hôm kia.|Người cùng mua sắm dùng と, không dùng に.|しませんでした là đã không mua sắm, trái với câu cần dịch.
c45-1-45|雨でしたから、出かけませんでした。|Vì trời đã mưa nên tôi đã không ra ngoài.|雨です và 出かけます không kể đúng việc quá khứ, còn đổi kết quả thành đi ra ngoài.|まで không nối nguyên nhân với kết quả.|出かけました là đã ra ngoài, trái với phủ định của đề.
c45-2-34|飛行機で三時間くらいです。|Đi máy bay mất khoảng ba tiếng.|に không có nghĩa xấp xỉ khi đứng sau thời lượng này.|を không thể hiện khoảng chừng.|と không diễn đạt khoảng thời gian xấp xỉ.
c45-2-35|この建物はきれいですか。いいえ、きれいじゃありません。|Tòa nhà này đẹp/sạch không? — Không, không đẹp/sạch.|きれい là tính từ な, không bỏ い thành きれくない.|Không thêm くない trực tiếp vào きれい.|Không chia きれい bằng かった; câu cũng đang cần phủ định hiện tại.
c45-2-36|昨夜、一人で晩ご飯を作りました。|Tối qua tôi đã nấu cơm tối một mình.|作ります chưa diễn đạt đã làm.|作りません là phủ định hiện tại, không phải đã làm.|作るでした không phải cách chia quá khứ lịch sự của 作る.
c45-2-37|去年の旅行は楽しくなかったです。|Chuyến đi năm ngoái đã không vui.|Bỏ い trước くなかった, không giữ thành 楽しいくなかった.|楽しい là tính từ い, không chia phủ định theo じゃなかった.|Không nối でした sau dạng くない; cần くなかったです.
c45-2-38|あの公園は昨日静かじゃありませんでした。|Công viên kia hôm qua đã không yên tĩnh.|静か thuộc nhóm な, không chia bằng くなかった.|静かな dùng trước danh từ, không ghép なでした.|じゃありません chỉ phủ định hiện tại; thiếu でした cho quá khứ.
c45-2-39|昨日は冷たい水を飲みたかったです。|Hôm qua tôi đã muốn uống nước lạnh.|たい chia quá khứ thành たかった, không thêm でした trực tiếp.|Cần gốc 飲み, không phải thể từ điển 飲む trước たかった.|Phải bỏ ます trước khi thêm たかった.
c45-2-40|A：家から駅までどのくらいですか。 B：歩いて十五分です。|Từ nhà đến ga mất bao lâu? — Đi bộ mất mười lăm phút.|十五時 là 15 giờ trên đồng hồ, không trả lời thời lượng đi bộ.|十五人 là mười lăm người.|十五円 là mười lăm yên, không phải thời lượng.
c45-2-41|A：おととい、どこかへ行きましたか。 B：はい、温泉へ行きました。|Hôm kia bạn có đi đâu không? — Có, tôi đã đến suối nước nóng.|行きます nói hiện tại/tương lai, không xác nhận việc hôm kia.|行きたいです nói mong muốn, không xác nhận đã đi.|行きませんでした là đã không đi, mâu thuẫn với はい trong cặp đáp này.
c45-2-42|A：今、何がほしいですか。 B：新しい服がほしいです。|Bây giờ bạn muốn có gì? — Tôi muốn có quần áo mới.|行きたい là muốn đi, không diễn đạt muốn có quần áo.|飲みたい là muốn uống, không phù hợp với quần áo.|会いたい là muốn gặp người, không diễn đạt sở hữu quần áo.
c45-2-43|この町は小さいですが、にぎやかです。|Thị trấn này nhỏ nhưng nhộn nhịp.|大きい là lớn, không phải nhỏ.|ですから có nghĩa vì/nên, không diễn đạt quan hệ tương phản nhưng.|静か là yên tĩnh, trái với nhộn nhịp にぎやか.
c45-2-44|昨日のテストは難しくなかったです。|Bài kiểm tra hôm qua đã không khó.|難しかった là đã khó, trái với phủ định.|Tính từ い phủ định quá khứ dùng くなかった, không phải くないでした.|明日 là ngày mai; câu chỉ phủ định hiện tại, không kể hôm qua.
c45-2-45|美術館へ絵を見に行きます。|Tôi đến bảo tàng mỹ thuật để xem tranh.|Phải bỏ ます trước に để tạo 見に.|で không đánh dấu đích đến; 買いに là đi mua, không phải đi xem.|見たくない là không muốn xem, trái với mục đích đề yêu cầu.
c45-3-34|駅からお城まで歩いて二十分です。|Từ ga đến lâu đài, đi bộ mất hai mươi phút.|まで・から đảo điểm xuất phát và kết thúc.|に・を không tạo cặp từ…đến… trong câu thời lượng.|で・が không đánh dấu hai đầu hành trình.
c45-3-35|この町に大きい川があります。|Ở thị trấn này có một con sông lớn.|大きい là tính từ い, không thêm な.|大きく không bổ nghĩa trực tiếp cho danh từ 川 ở mẫu này.|Không chen の giữa 大きい và 川.
c45-3-36|今朝、恋人に会いました。|Sáng nay tôi đã gặp người yêu.|会います chưa thể hiện việc đã gặp.|会いません là không/sẽ không gặp, sai cả nghĩa và thời.|会うでした không phải cách chia quá khứ chuẩn.
c45-3-37|昨日の山は寒かったです。|Trên núi hôm qua đã lạnh.|Không ghép でした trực tiếp sau 寒い.|寒く không dùng với でした để chia quá khứ ở đây.|寒い là tính từ い nên không thêm な.
c45-3-38|先月の仕事は簡単じゃありませんでした。|Công việc tháng trước đã không đơn giản.|簡単 thuộc nhóm な, không chia bằng くなかった.|簡単なかった không phải dạng phủ định quá khứ chuẩn.|じゃありません thiếu quá khứ でした.
c45-3-39|嫌いじゃありません。|Không ghét.|嫌い thuộc nhóm な nên không dùng くない.|Không thêm いくない sau 嫌い.|なかった không gắn trực tiếp vào 嫌い theo cách chia này.
c45-3-40|A：この料理はどうですか。 B：あまり甘くないです。|Món này thế nào? — Không ngọt lắm.|とても甘い là rất ngọt, trái nghĩa yêu cầu.|あまり cần phủ định trong mẫu không…lắm.|Cần bỏ い trước くない; 甘いくない là sai.
c45-3-41|A：先週の仕事はどうでしたか。 B：大変でした。|Công việc tuần trước thế nào? — Đã vất vả.|大変です là hiện tại, không đáp đúng thời quá khứ.|大変 là tính từ な, không chia bằng かった.|な không đứng trước です khi kết thúc câu, và chưa có quá khứ.
c45-3-42|A：来年、何をしたいですか。 B：山に登りたいです。|Năm sau bạn muốn làm gì? — Tôi muốn leo núi.|登る là thể từ điển; cần gốc 登り trước たい.|Phải bỏ ます trước たい.|登りに chỉ mục đích đi, không kết thúc mong muốn bằng にです.
c45-3-43|この町に古い教会があります。|Ở thị trấn này có một nhà thờ cổ.|Nơi tồn tại dùng に, sự vật dùng が; で・を không đúng mẫu này.|新しい là mới, trái với cổ/cũ 古い.|ありません phủ định sự tồn tại, trái với câu có nhà thờ.
c45-3-44|昨日、洗濯しました。それから、ゲームをしました。|Hôm qua tôi đã giặt đồ. Sau đó, tôi đã chơi trò chơi.|明日 và dạng します nói kế hoạch ngày mai, không kể việc hôm qua.|掃除 là dọn dẹp, khác 洗濯 là giặt đồ.|どうして hỏi tại sao, không nối trình tự như それから.
c45-3-45|私は新しいカメラがほしいです。|Tôi muốn có một chiếc máy ảnh mới.|古い là cũ, trái với mới 新しい.|ほしくない là không muốn có, trái với mong muốn khẳng định.|行きたい là muốn đi, không nói muốn sở hữu máy ảnh.
'''

LEXICAL='''
c45-1-01|新幹線（しんかんせん）|Tàu cao tốc Shinkansen.|幹 đọc かん, không phải がん trong từ này.|線 đọc せん, không phải ぜん.|Thiếu âm ん của 幹（かん）.
c45-1-02|温泉（おんせん）|Suối nước nóng.|泉 đọc せん, không đổi thành ぜん trong 温泉.|温 ở đây là おん, không phải おう.|泉 đọc せん, không phải さん.
c45-1-03|涼しい（すずしい）|Mát mẻ.|Đây không phải cách đọc của 涼しい; 寒い mới liên quan đến lạnh.|Thiếu âm し trong phần しい.|Đây không phải cách đọc chuẩn; 暑い đọc あつい và là một từ khác.
c45-1-04|美術館（びじゅつかん）|Bảo tàng mỹ thuật.|術 đọc じゅつ, không phải じつ.|Cần âm つ của 術, không thay bằng âm ngắt っ.|Âm じゅ có dấu đục, không đọc しゅ.
c45-1-05|今朝（けさ）|Sáng nay.|Không ghép máy móc 今＝こん và 朝＝あさ; cả từ đọc けさ.|Không đọc theo từng chữ いま＋あさ trong từ 今朝.|きょうあさ không phải cách đọc của từ ghép 今朝.
c45-1-06|自転車（じてんしゃ）|Xe đạp.|転 đọc てん, không phải でん.|車 đọc しゃ, không phải じゃ ở từ này.|自 đọc じ có dấu đục, không phải し.
c45-1-07|景色（けしき）|Phong cảnh.|Không ghép riêng các âm けい・しょく; cả từ đọc けしき.|色 ở đây được đọc trong cụm しき, không phải しょく.|Âm đầu là け, không phải げ.
c45-1-08|東（ひがし）|Phía đông.|西（にし）là phía tây.|南（みなみ）là phía nam.|北（きた）là phía bắc.
c45-1-09|神社（じんじゃ）|Đền Thần đạo.|会社（かいしゃ）là công ty.|社会（しゃかい）là xã hội.|教会（きょうかい）là nhà thờ, không phải 神社.
c45-1-10|先週（せんしゅう）|Tuần trước.|今週（こんしゅう）là tuần này.|来週（らいしゅう）là tuần sau.|毎週（まいしゅう）là mỗi tuần.
c45-1-11|去年（きょねん）|Năm ngoái.|今年（ことし）là năm nay.|来年（らいねん）là năm sau.|毎年（まいとし／まいねん）là mỗi năm.
c45-1-12|すっぱい|Chua.|甘い（あまい）nghĩa là ngọt.|辛い（からい）nghĩa là cay.|苦い（にがい）nghĩa là đắng.
c45-1-13|ルームメイト|Bạn cùng phòng.|Người yêu là 恋人（こいびと）.|Gia đình là 家族（かぞく）.|Nhân viên cửa hàng không phải nghĩa của từ mượn roommate này.
c45-1-14|借ります（かります）|Vay, mượn.|Chụp ảnh dùng 撮ります（とります）.|Leo núi dùng 登ります（のぼります）.|Làm ra/chế tạo dùng 作ります（つくります）.
c45-2-01|飛行機（ひこうき）|Máy bay.|Âm đầu là ひ, không đổi thành び.|Thiếu âm う biểu thị trường âm こう.|行 trong từ này đọc こう, không phải ごう.
c45-2-02|教会（きょうかい）|Nhà thờ.|Thiếu âm う của trường âm きょう.|Thiếu âm ghép ゃ/ょ đúng trong きょう; từ không đọc こうかい.|会 đọc かい, không phải がい ở đây.
c45-2-03|一年中（いちねんじゅう）|Quanh năm, suốt cả năm.|中 trong nghĩa suốt khoảng thời gian đọc じゅう, không phải ちゅう ở từ này.|一年 đọc いちねん; không biến ち thành âm ngắt っ.|一年 ở từ này đọc いちねん, không đọc ひとねん.
c45-2-04|部屋（へや）|Căn phòng.|Không dùng âm ぶ của 部 để ghép máy móc thành ぶや.|屋 ở đây đọc や, không phải い.|Âm đầu là へ, không phải べ.
c45-2-05|晩ご飯（ばんごはん）|Cơm tối.|よるごはん thường là 夜ご飯; chữ 晩 trong từ đang hỏi đọc ばん.|飯 trong ご飯 đọc はん, không đọc めし trong cụm này.|晩 đọc ばん có dấu đục, không đọc はん.
c45-2-06|風邪（かぜ）|Cảm, cảm cúm.|風邪 là cách đọc cả từ かぜ, không ghép âm riêng thành ふうじゃ.|Âm cuối là ぜ, không phải ざ.|ふじゃ không phải cách đọc chuẩn của 風邪.
c45-2-07|写真（しゃしん）|Ảnh chụp.|真 đọc しん, không phải じん trong 写真.|写 đọc しゃ, không phải じゃ.|写 đọc しゃ với ゃ nhỏ, không phải しょ.
c45-2-08|南（みなみ）|Phía nam.|北（きた）là phía bắc.|東（ひがし）là phía đông.|西（にし）là phía tây.
c45-2-09|緑（みどり）|Màu xanh; cây xanh.|線（せん）là đường/dây, không phải 緑.|縁 là một chữ khác, thường gặp ở 縁（えん／ふち）, không phải màu xanh.|録 là chữ dùng trong ghi chép/ghi âm, không phải 緑.
c45-2-10|家族（かぞく）|Gia đình.|Cần chữ 族, không phải 旅 trong từ 家族.|続 không thay cho 族 để tạo từ gia đình.|俗 không thay cho 族 trong 家族.
c45-2-11|来年（らいねん）|Sang năm.|今年（ことし）là năm nay.|去年（きょねん）là năm ngoái.|毎年（まいとし／まいねん）là mỗi năm.
c45-2-12|ところ|Nơi, chỗ.|Phút là 分, không phải ところ.|Người là 人（ひと）.|Dòng sông là 川（かわ）.
c45-2-13|冷たい（つめたい）|Lạnh khi chạm, uống hoặc cảm nhận nhiệt độ của vật.|Lạnh về thời tiết thường dùng 寒い（さむい）.|Ấm áp về thời tiết dùng 暖かい（あたたかい）.|Nóng về thời tiết dùng 暑い（あつい）.
c45-2-14|食事します（しょくじします）|Dùng bữa, ăn uống.|Giặt đồ dùng 洗濯します（せんたくします）.|Dọn phòng dùng 掃除します（そうじします）.|Mua sắm dùng 買い物します（かいものします）.
c45-3-01|電車（でんしゃ）|Tàu điện.|電 đọc でん có dấu đục, không đọc てん.|車 đọc しゃ, không đổi thành じゃ trong từ này.|車 đọc しゃ với ゃ nhỏ, không phải さ.
c45-3-02|有名（ゆうめい）|Nổi tiếng.|Thiếu âm う của trường âm ゆう.|名 trong 有名 đọc めい, không phải みょう.|Thiếu âm ゆ đầu từ; 有 đọc ゆう.
c45-3-03|暖かい（あたたかい）|Ấm áp, thường nói thời tiết.|Thiếu một âm た; dạng chuẩn là あたたかい.|あったかい là cách nói khẩu ngữ; lựa chọn còn thêm な sai với tính từ い. Đề hỏi cách đọc chuẩn của 暖かい.|Âm か không đổi thành が trong 暖かい.
c45-3-04|恋人（こいびと）|Người yêu.|人 trong từ ghép này đọc びと, không phải ひと.|恋人 không ghép theo âm On thành れんじん.|こびと thường là 小人, không phải 恋人; từ này có âm い.
c45-3-05|先月（せんげつ）|Tháng trước.|月 ở đây đọc げつ, không phải がつ.|Đảo sai thứ tự các âm; cần せん＋げつ.|先 ở 先月 đọc せん, không dùng さき.
c45-3-06|気持ちがいい（きもちがいい）|Cảm giác dễ chịu, thoải mái, sảng khoái.|Đổi いい thành よいな không phải cách đọc nguyên cụm được hỏi; な cũng không nối như vậy.|気 ở đây đọc き, không phải け.|持ち đọc もち, không phải もじ.
c45-3-07|今年（ことし）|Năm nay.|こんねん cũng là cách đọc có thật, thường trang trọng. Đề yêu cầu đúng cách đọc của mục từ bài 5 trong PDF là ことし, không phủ nhận cách đọc này.|きょねん là 去年, năm ngoái.|らいねん là 来年, năm sau.
c45-3-08|真ん中（まんなか）|Chính giữa.|Cần 真, không phải 間 trong cách viết 真ん中.|仲 không thay cho 中 trong từ này.|央 không thay cho 中 trong cách viết 真ん中.
c45-3-09|山（やま）|Núi.|川（かわ）là sông.|田（た）là ruộng.|石（いし）là đá.
c45-3-10|週末（しゅうまつ）|Cuối tuần.|末 là cuối, khác 未 là chưa; phải viết 週末.|周 không thay 週 là tuần trong từ 週末.|本 không thay 末 trong từ cuối tuần.
c45-3-11|今晩（こんばん）|Tối nay.|今朝（けさ）là sáng nay.|昨晩（さくばん）là tối qua.|明晩（みょうばん）là tối mai.
c45-3-12|低い（ひくい）|Thấp.|Cao là 高い（たかい）.|Ít về số lượng là 少ない（すくない）.|Nhiều là 多い（おおい）.
c45-3-13|温かい（あたたかい）|Ấm khi cảm nhận đồ ăn, đồ uống hoặc đồ vật.|Nóng bức về thời tiết là 暑い; không phải nhiệt độ ấm của món ăn.|Chua là すっぱい.|Đắng là 苦い（にがい）.
c45-3-14|絵（え）|Tranh, hình vẽ.|Phong cảnh là 景色（けしき）.|Ảnh chụp là 写真（しゃしん）, khác tranh vẽ 絵.|Máy ảnh là カメラ.
'''

OVERRIDES={
'sample-01':'どこへ行きましたか hỏi đã đến đâu. へ đánh dấu đích đến, còn で đánh dấu nơi thực hiện hành động. B đã trả lời おだいばへ nên câu hỏi phải hỏi địa điểm đến; 行きました là quá khứ lịch sự.',
'sample-17':'Phân biệt ba vai trò: 公園へ行く dùng へ cho đích đến; 公園で写真を撮る dùng で cho nơi hành động và を cho đối tượng được chụp. Hai động từ đều kể việc Chủ nhật đã qua nên dùng ました.',
'sample-20':'一年で giới hạn phạm vi so sánh là các tháng trong một năm; 六月が nêu tháng đứng đầu; いちばん暑い là nóng nhất. Đây là dữ kiện giả định của thị trấn trong câu, không phải quy luật khí hậu chung.',
'sample-25':'家族に会います dùng に để chỉ người gặp. Lấy 会い từ 会います, thêm に để tạo 会いに rồi nối 帰ります. Vì vậy câu có hai に với hai vai trò khác nhau: người gặp và mục đích về nước.',
'sample-26':'いっしょに là trạng từ “cùng nhau”, đứng trước hành động. ぜひ cũng có thể dùng trong lời mời nhưng nghĩa là rất mong/nhất định, nên không đáp ứng nghĩa đích “cùng nhau” được đề chỉ rõ.',
'sample-35':'Vé là vật mỏng và phẳng nên dùng lượng từ 枚（まい）. 三枚 đọc さんまい, đặt sau が trong チケットが三枚あります. Không dùng 本 cho vật dài hoặc 冊 cho sách.',
'sample-42':'Hỏi nơi thực hiện hành động dùng どこで + động từ. Trả lời bằng địa điểm + で + động từ: レストランで食べます. に chỉ nơi tồn tại/đích đến ở mẫu khác, không thay で của hành động ăn.',
}

LEX_RULES={
'reading':'Đọc cả từ/cụm theo cách đọc chuẩn, không ghép tùy ý âm On/Kun của từng chữ. Chú ý trường âm, âm ghép nhỏ ゃ・ゅ・ょ, âm đục và các cách đọc đặc biệt. Đối chiếu từng lựa chọn với từ chuẩn bên trên.',
'spelling':'Chọn đúng cả cách viết lẫn nghĩa của từ có cách đọc được hỏi. Các chữ gần giống hoặc cùng chủ đề không thay thế nhau. Đối chiếu chữ, âm đọc và nghĩa; không đoán cách ghép chữ chỉ từ âm gần giống.',
'vocabulary':'Xác định đúng nghĩa trong ngữ cảnh. Các lựa chọn cùng chủ đề có thể là từ đúng về hình thức nhưng khác nghĩa; cần phân biệt hành động, đồ vật hoặc tính chất mà đề yêu cầu.',
}

def attach_solutions(exams):
    notes={}
    for section in [SAMPLE,BASE,EXTRA,LEXICAL]:
        for line in section.strip().splitlines():
            fields=[part.strip() for part in line.split('|')]
            assert len(fields)==6,fields
            ident,completed,meaning,*wrong=fields
            assert ident not in notes,ident
            notes[ident]=(completed,meaning,wrong)
    questions=[q for e in exams for q in e['questions']]
    assert set(notes)=={q['id'] for q in questions},'Missing or unused teaching notes'
    for q in questions:
        completed,meaning,wrong=notes[q['id']]
        reasons=['']*4;reasons[q['answer']]=q['explanation']
        for offset,reason in enumerate(wrong,1):reasons[(q['answer']+offset)%4]=reason
        rule=OVERRIDES.get(q['id']) or RULES.get(q['unit']) or LEX_RULES[q['category']]
        q['solution']=dict(completed=completed,meaning=meaning,rule=rule,options=reasons)
