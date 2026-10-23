// Reviewed scenarios for the existing chapter/topic units. Each unit has 18 tasks.
// {braces} identify the tested phrase; | separates coherent sentence chunks.
(() => {
  'use strict';
  const banks = {
    'g4-location': [
      ['ハノイは|ベトナム{の}|北です。','Hà Nội ở phía bắc Việt Nam.','で/と/を'],
      ['ホーチミンは|ベトナム{の}|南です。','Thành phố Hồ Chí Minh ở phía nam Việt Nam.','に/を/と'],
      ['東京は|日本{の}|東です。','Tokyo ở phía đông Nhật Bản.','へ/を/が'],
      ['この駅は|町{の}|真ん中です。','Nhà ga này ở giữa thị trấn.','を/で/と'],
      ['大阪は|日本{の}|西です。','Osaka ở phía tây Nhật Bản.','と/が/を'],
      ['この町は|国{の}|南です。','Thị trấn này ở phía nam đất nước.','を/で/へ'],
      ['あの山は|町{の}|北です。','Ngọn núi kia ở phía bắc thị trấn.','で/へ/を'],
      ['あのお城は|町{の}|西です。','Lâu đài kia ở phía tây thị trấn.','を/と/で']
    ],
    'g4-duration': [
      ['駅から|学校{まで}|歩いて10分です。','Từ ga đến trường đi bộ mất 10 phút.','が/を/と'],
      ['大阪から|京都まで|電車{で}30分です。','Từ Osaka đến Kyoto đi tàu điện mất 30 phút.','を/の/が'],
      ['うち{から}|駅まで|5分です。','Từ nhà đến ga mất 5 phút.','を/と/が'],
      ['東京から|大阪まで|新幹線で2時間半{くらい}です。','Từ Tokyo đến Osaka đi Shinkansen mất khoảng hai tiếng rưỡi.','ごろ/まい/さい'],
      ['ホテルから|空港まで|車{で}1時間です。','Từ khách sạn đến sân bay đi ô tô mất một tiếng.','を/が/の'],
      ['日本から|ベトナムまで|飛行機{で}6時間くらいです。','Từ Nhật Bản đến Việt Nam đi máy bay mất khoảng sáu tiếng.','を/が/と'],
      ['うちから|スーパーまで|{歩いて}15分です。','Từ nhà đến siêu thị đi bộ mất 15 phút.','歩いてで/歩くで/歩きに'],
      ['うちから|会社まで|バスで40{分}です。','Từ nhà đến công ty đi xe buýt mất 40 phút.','時/歳/枚']
    ],
    'g4-adjective': [
      ['この川は|{きれい}|です。','Con sông này đẹp.','きれいな/きれく/きれいの'],
      ['あのビルは|{高い}|です。','Tòa nhà kia cao.','高く/高いな/高くな'],
      ['この公園は|{静か}|です。','Công viên này yên tĩnh.','静かな/静かい/静かの'],
      ['この寺は|{古い}|です。','Ngôi chùa này cổ.','古いな/古く/古くな'],
      ['この町は|{にぎやか}|です。','Thị trấn này nhộn nhịp.','にぎやかな/にぎやかい/にぎやかの'],
      ['あのお城は|{有名}|です。','Lâu đài kia nổi tiếng.','有名な/有名い/有名の'],
      ['この山は|{低い}|です。','Ngọn núi này thấp.','低いな/低く/低くな'],
      ['この駅は|{新しい}|です。','Nhà ga này mới.','新しいな/新しく/新しくな']
    ],
    'g4-negative': [
      ['この山は|{高くない}|です。','Ngọn núi này không cao.','高いじゃない/高いくない/高かった'],
      ['この町は|{有名じゃありません}。','Thị trấn này không nổi tiếng.','有名くないです/有名なありません/有名いません'],
      ['この部屋は|{大きくない}|です。','Căn phòng này không lớn.','大きいじゃない/大きいくない/大きかった'],
      ['この川は|{きれいじゃありません}。','Con sông này không đẹp.','きれくないです/きれいくないです/きれいなありません'],
      ['今日は|天気が|{よくないです}。','Hôm nay thời tiết không đẹp.','いくないです/いいじゃないです/いいくないです'],
      ['この公園は|{静かじゃありません}。','Công viên này không yên tĩnh.','静かくないです/静かいないです/静かないです'],
      ['この寺は|{古くない}|です。','Ngôi chùa này không cũ.','古いじゃない/古いくない/古かった'],
      ['このビルは|{小さくない}|です。','Tòa nhà này không nhỏ.','小さいくない/小さいじゃない/小さかった']
    ],
    'g4-modifier': [
      ['ここは|{有名な}|神社です。','Đây là một ngôi đền nổi tiếng.','有名/有名い/有名の'],
      ['あれは|{古い}|教会です。','Kia là một nhà thờ cổ.','古いな/古く/古いの'],
      ['ここは|{静かな}|ところです。','Đây là một nơi yên tĩnh.','静か/静かい/静かの'],
      ['あれは|{高い}|ビルです。','Kia là một tòa nhà cao.','高いな/高く/高いの'],
      ['ここは|{きれいな}|公園です。','Đây là một công viên đẹp.','きれい/きれく/きれいの'],
      ['この町は|{どんな}|ところですか。','Thị trấn này là một nơi như thế nào?','どう/どれ/どこか'],
      ['あれは|{大きい}|お城です。','Kia là một lâu đài lớn.','大きいな/大きく/大きいの'],
      ['ここは|{にぎやかな}|町です。','Đây là một thị trấn nhộn nhịp.','にぎやか/にぎやかい/にぎやかの']
    ],
    'g4-existence': [
      ['京都{に}|古いお寺が|あります。','Ở Kyoto có những ngôi chùa cổ.','で/を/と'],
      ['この町に|温泉{が}|あります。','Ở thị trấn này có suối nước nóng.','を/で/と'],
      ['駅の近く{に}|スーパーが|あります。','Gần ga có một siêu thị.','を/と/から'],
      ['この町に|何{が}|ありますか。','Ở thị trấn này có gì?','を/で/と'],
      ['あそこに|大きいビルが|{あります}。','Ở đằng kia có một tòa nhà lớn.','います/します/食べます'],
      ['この公園に|木{が}|あります。','Trong công viên này có cây.','を/と/で'],
      ['私の町{に}|きれいな川が|あります。','Ở thị trấn của tôi có một con sông đẹp.','を/から/と'],
      ['この町に|有名な教会{が}|あります。','Ở thị trấn này có một nhà thờ nổi tiếng.','を/で/と']
    ],
    'g4-connect': [
      ['この公園は|小さいです{が}、|きれいです。','Công viên này nhỏ nhưng đẹp.','を/に/の'],
      ['この町は静かです。|{そして}、|緑が多いです。','Thị trấn này yên tĩnh. Và còn nhiều cây xanh.','どうして/どちら/まだ'],
      ['この料理は|辛いです{が}、|おいしいです。','Món ăn này cay nhưng ngon.','を/で/の'],
      ['このお城は大きいです。|{そして}、|有名です。','Lâu đài này lớn. Và còn nổi tiếng.','どうして/どんな/もう'],
      ['この山は|低いです{が}、|きれいです。','Ngọn núi này thấp nhưng đẹp.','を/に/の'],
      ['この町はにぎやかです。|{そして}、|便利です。','Thị trấn này nhộn nhịp. Và còn tiện lợi.','どうして/どちら/まだ'],
      ['この部屋は|大きくないです{が}、|きれいです。','Căn phòng này không lớn nhưng đẹp.','を/に/の'],
      ['この教会は古いです。|{そして}、|有名です。','Nhà thờ này cổ. Và còn nổi tiếng.','どうして/どれ/もう']
    ],
    'g4-degree': [
      ['この公園は|あまり|{大きくないです}。','Công viên này không lớn lắm.','大きいです/大きいなです/大きくです'],
      ['私の国は|冬、|少し{寒いです}。','Ở nước tôi, mùa đông hơi lạnh.','寒くです/寒いなです/寒くなです'],
      ['日本は|8月、|とても{暑いです}。','Ở Nhật Bản, tháng tám rất nóng.','暑くです/暑いなです/暑くなです'],
      ['この料理は|{どうですか}。','Bạn thấy món ăn này thế nào?','どんなです/どれなです/どのですか'],
      ['私の町は|夏、|あまり{暑くないです}。','Thành phố tôi mùa hè không nóng lắm.','暑いです/暑くです/暑いなです'],
      ['このメロンは|とても|{甘いです}。','Quả dưa lưới này rất ngọt.','甘いなです/甘くです/甘くなです'],
      ['このお茶は|少し|{苦いです}。','Trà này hơi đắng.','苦くです/苦いなです/苦くなです'],
      ['私の国は|一年中、|{暖かいです}。','Nước tôi ấm áp quanh năm.','暖かくです/暖かいなです/暖かくなです']
    ],
    'g4-ne': [
      ['今日は|寒いです{ね}。','Hôm nay lạnh nhỉ.','を/で/の'],
      ['この公園は|きれいです{ね}。','Công viên này đẹp nhỉ.','を/に/の'],
      ['この料理は|おいしいです{ね}。','Món này ngon nhỉ (hai người đang cùng ăn).','を/に/で'],
      ['この町は|静かです{ね}。','Thị trấn này yên tĩnh nhỉ.','を/が/の'],
      ['このお城は|大きいです{ね}。','Lâu đài này lớn nhỉ.','を/に/の'],
      ['今日は|天気がいいです{ね}。','Hôm nay thời tiết đẹp nhỉ.','を/に/の'],
      ['このスープは|熱いです{ね}。','Súp này nóng nhỉ (cả hai cùng nhận thấy).','を/に/で'],
      ['この山は|高いです{ね}。','Ngọn núi này cao nhỉ.','を/に/の']
    ],
    'g5-past': [
      ['昨日、|本を|{読みました}。','Hôm qua tôi đã đọc sách.','読みます/読みましょう/読むました'],
      ['先週、|京都へ|{行きました}。','Tuần trước tôi đã đi Kyoto.','行きます/行くました/行きましょう'],
      ['昨日、|買い物を|{しませんでした}。','Hôm qua tôi đã không đi mua sắm.','しません/します/しましょう'],
      ['今朝、|パンを|{食べました}。','Sáng nay tôi đã ăn bánh mì.','食べます/食べるました/食べましょう'],
      ['おととい、|友達に|{会いました}。','Hôm kia tôi đã gặp bạn.','会います/会うました/会いましょう'],
      ['先週、|映画を|{見ませんでした}。','Tuần trước tôi đã không xem phim.','見ません/見ます/見ましょう'],
      ['昨日、|部屋を|{掃除しました}。','Hôm qua tôi đã dọn phòng.','掃除します/掃除しましょう/掃除するました'],
      ['日曜日、|洗濯を|{しました}。','Chủ nhật tôi đã giặt quần áo.','します/するました/しましょう']
    ],
    'g5-with': [
      ['昨日、|友達{と}|テニスをしました。','Hôm qua tôi chơi tennis cùng bạn.','を/に/の'],
      ['日曜日、|家族{と}|山へ行きました。','Chủ nhật tôi đi lên núi cùng gia đình.','を/で/の'],
      ['先週、|恋人{と}|食事しました。','Tuần trước tôi dùng bữa cùng người yêu.','を/に/の'],
      ['昨日、|{一人で}|買い物しました。','Hôm qua tôi đi mua sắm một mình.','一人と/一人を/一人の'],
      ['掃除しました。|{それから}、|洗濯しました。','Tôi đã dọn nhà. Sau đó giặt quần áo.','どうして/どちらも/どんな'],
      ['日曜日、|ルームメイト{と}|映画を見ました。','Chủ nhật tôi xem phim cùng bạn cùng phòng.','を/に/の'],
      ['パンを食べました。|{それから}、|コーヒーを飲みました。','Tôi đã ăn bánh mì. Sau đó uống cà phê.','どうして/どちら/まだ'],
      ['昨日、|{一人で}|美術館へ行きました。','Hôm qua tôi đi bảo tàng mỹ thuật một mình.','一人と/一人に/一人を']
    ],
    'g5-somewhere': [
      ['週末、|{どこかへ}|行きましたか。','Cuối tuần bạn đã đi đâu đó chưa?','どこへも/どこが/どこの'],
      ['先月は|{どこへも}|行きませんでした。','Tháng trước tôi đã không đi đâu cả.','どこかへ/どこが/どこの'],
      ['先週、|{どこか}|行きましたか。','Tuần trước bạn có đi đâu đó không?','どこもが/どのか/だれを'],
      ['日曜日は|{どこにも}|行きませんでした。','Chủ nhật tôi đã không đi đâu cả (dùng に).','どこかに/どこを/どのに'],
      ['昨日、|家族と|{どこかへ}行きましたか。','Hôm qua bạn có đi đâu đó với gia đình không?','どこへも/どこが/どこの'],
      ['先週は|忙しかったですから、|{どこへも}行きませんでした。','Vì tuần trước bận nên tôi đã không đi đâu cả.','どこかへ/どのへ/どこを'],
      ['土曜日、|友達と|{どこかへ}行きましたか。','Thứ bảy bạn có đi đâu đó cùng bạn bè không?','どこへも/どこの/どこが'],
      ['雨でしたから、|日曜日は|{どこへも}行きませんでした。','Vì trời mưa nên chủ nhật tôi đã không đi đâu cả.','どこかへ/どのへ/どこを']
    ],
    'g5-past-i': [
      ['昨日の映画は|{おもしろかった}|です。','Bộ phim hôm qua đã rất thú vị.','おもしろいでした/おもしろいかった/おもしろくでした'],
      ['先週の旅行は|{楽しくなかった}|です。','Chuyến đi tuần trước đã không vui.','楽しいでした/楽しくないでした/楽しかった'],
      ['昨日は|天気が|{よかったです}。','Hôm qua thời tiết đẹp.','いいでした/いかったです/いいかったです'],
      ['昨日のテストは|{難しかった}|です。','Bài kiểm tra hôm qua đã khó.','難しいでした/難しいかった/難しくでした'],
      ['日曜日の料理は|{おいしかった}|です。','Món ăn hôm chủ nhật đã ngon.','おいしいでした/おいしいかった/おいしくでした'],
      ['昨日の買い物は|{楽しかった}|です。','Việc mua sắm hôm qua đã vui.','楽しいでした/楽しいかった/楽しくでした'],
      ['昨日のスープは|{熱くなかった}|です。','Súp hôm qua đã không nóng.','熱いでした/熱くないでした/熱かった'],
      ['去年の冬は|{寒かった}|です。','Mùa đông năm ngoái đã lạnh.','寒いでした/寒いかった/寒くでした']
    ],
    'g5-past-na': [
      ['昨日の公園は|{静かでした}。','Công viên hôm qua đã yên tĩnh.','静かかったです/静かなでした/静かいでした'],
      ['日曜日は|{暇でした}。','Chủ nhật tôi đã rảnh.','暇かったです/暇なでした/暇いでした'],
      ['先週の旅行は|{大変でした}。','Chuyến đi tuần trước đã vất vả.','大変かったです/大変なでした/大変いでした'],
      ['昨日は|{雨じゃありませんでした}。','Hôm qua đã không mưa.','雨くなかったです/雨なかったです/雨いませんでした'],
      ['昨日のテストは|{簡単でした}。','Bài kiểm tra hôm qua đã dễ.','簡単かったです/簡単なでした/簡単いでした'],
      ['去年、|私は|{学生でした}。','Năm ngoái tôi là sinh viên.','学生かったです/学生なでした/学生いでした'],
      ['日曜日の町は|{にぎやかでした}。','Thị trấn hôm chủ nhật đã nhộn nhịp.','にぎやかかったです/にぎやかなでした/にぎやかいでした'],
      ['昨日の部屋は|{きれいじゃありませんでした}。','Căn phòng hôm qua đã không sạch đẹp.','きれくなかったです/きれいくなかったです/きれいなかったです']
    ],
    'g5-reason': [
      ['寒かったです{から}、|うちで|テレビを見ました。','Vì trời lạnh nên tôi đã xem ti vi ở nhà.','まで/を/に'],
      ['{どうして}|学校へ|行きませんでしたか。','Tại sao bạn đã không đến trường?','どんな/どちら/どれ'],
      ['おいしかったです{から}、|たくさん|食べました。','Vì ngon nên tôi đã ăn nhiều.','まで/を/に'],
      ['暇でした{から}、|本を|読みました。','Vì rảnh nên tôi đã đọc sách.','まで/を/へ'],
      ['{どうして}|その服を|買いませんでしたか。','Tại sao bạn đã không mua bộ quần áo đó?','どんな/どちらも/どれ'],
      ['高かったです{から}、|カメラを|買いませんでした。','Vì đắt nên tôi đã không mua máy ảnh.','まで/を/に'],
      ['雨でした{から}、|山へ|行きませんでした。','Vì trời mưa nên tôi đã không đi núi.','まで/を/に'],
      ['忙しかったです{から}、|朝ご飯を|食べませんでした。','Vì bận nên tôi đã không ăn sáng.','まで/を/へ']
    ],
    'g5-want-noun': [
      ['私は|新しい服{が}|ほしいです。','Tôi muốn có quần áo mới.','で/に/と'],
      ['私は|カメラ{が}|ほしいです。','Tôi muốn có máy ảnh.','を/に/と'],
      ['今、|水{が}|ほしいです。','Bây giờ tôi muốn có nước.','で/に/と'],
      ['私は|日本語の本{が}|ほしいです。','Tôi muốn có sách tiếng Nhật.','へ/に/と'],
      ['私は|パソコンが|{ほしくないです}。','Tôi không muốn có máy tính.','ほしいじゃありません/ほしいくないです/ほしくです'],
      ['私は|自転車が|{ほしかったです}。','Tôi đã muốn có xe đạp.','ほしいでした/ほしいかったです/ほしくでした'],
      ['誕生日に|何{が}|ほしいですか。','Bạn muốn có gì vào sinh nhật?','で/に/と'],
      ['私は|新しい靴{が}|ほしいです。','Tôi muốn có giày mới.','で/に/と']
    ],
    'g5-like': [
      ['私は|旅行{が}|好きです。','Tôi thích du lịch.','を/に/で'],
      ['妹は|魚{が}|嫌いです。','Em gái tôi ghét cá.','を/に/へ'],
      ['私は|音楽が|{好きです}。','Tôi thích âm nhạc.','好きなです/好くです/好きいです'],
      ['私は|スポーツが|あまり{好きじゃありません}。','Tôi không thích thể thao lắm.','好きです/好きなです/好きくないです'],
      ['田中さんは|映画{が}|好きですか。','Anh/chị Tanaka có thích phim không?','を/で/に'],
      ['私は|辛い料理{が}|嫌いです。','Tôi ghét món ăn cay.','を/に/で'],
      ['友達は|読書{が}|好きです。','Bạn tôi thích đọc sách.','を/で/へ'],
      ['私は|野菜が|{嫌いじゃありません}。','Tôi không ghét rau.','嫌くないです/嫌いくないです/嫌いなありません']
    ],
    'g5-want-verb': [
      ['私は|日本へ|{行きたいです}。','Tôi muốn đi Nhật Bản.','行くたいです/行きますたいです/行きましたたいです'],
      ['私は|この映画を|{見たいです}。','Tôi muốn xem bộ phim này.','見るたいです/見ますたいです/見ってたいです'],
      ['私は|おすしを|{食べたいです}。','Tôi muốn ăn sushi.','食べるたいです/食べますたいです/食べましたたいです'],
      ['日曜日、|何を|{したいですか}。','Chủ nhật bạn muốn làm gì?','するたいですか/しますたいですか/しましたたいですか'],
      ['私は|友達に|{会いたいです}。','Tôi muốn gặp bạn.','会うたいです/会いますたいです/会いましたたいです'],
      ['今日は|お酒を|{飲みたくないです}。','Hôm nay tôi không muốn uống rượu.','飲みたいじゃありません/飲むたくないです/飲みたいないです'],
      ['週末、|写真を|{撮りたいです}。','Cuối tuần tôi muốn chụp ảnh.','撮るたいです/撮りますたいです/撮りましたたいです'],
      ['昨日、|買い物を|{したかったです}。','Hôm qua tôi đã muốn đi mua sắm.','したいでした/するたかったです/しますたかったです']
    ],
    'g5-purpose': [
      ['図書館へ|本を|{読みに}行きます。','Tôi đến thư viện để đọc sách.','読みますに/読むに/読んでに'],
      ['公園へ|写真を|{撮りに}行きます。','Tôi đến công viên để chụp ảnh.','撮るに/撮りますに/撮ってに'],
      ['レストランへ|ご飯を|{食べに}行きます。','Tôi đến nhà hàng để ăn cơm.','食べるに/食べますに/食べてに'],
      ['喫茶店へ|コーヒーを|{飲みに}行きます。','Tôi đến quán cà phê để uống cà phê.','飲むに/飲みますに/飲んでに'],
      ['デパートへ|{買い物に}|行きます。','Tôi đến trung tâm thương mại để mua sắm.','買い物をに/買い物しますに/買い物でに'],
      ['美術館へ|絵を|{見に}行きます。','Tôi đến bảo tàng mỹ thuật để xem tranh.','見るに/見ますに/見てに'],
      ['友達の家へ|{遊びに}|行きます。','Tôi đến nhà bạn để chơi.','遊ぶに/遊びますに/遊んでに'],
      ['本屋へ|本を|{買いに}行きます。','Tôi đến hiệu sách để mua sách.','買うに/買いますに/買ってに']
    ],
    'g6-invite': [
      ['明日、|一緒に|写真を{撮りませんか}。','Ngày mai cùng chụp ảnh nhé?','撮るませんか/撮りますませんか/撮ったませんか'],
      ['今晩、|一緒に|ご飯を{食べませんか}。','Tối nay cùng ăn cơm nhé?','食べるませんか/食べますませんか/食べたませんか'],
      ['いいですね。|一緒に|{泳ぎましょう}。','Hay đấy. Chúng ta cùng bơi nhé.','泳ぐましょう/泳ぎますましょう/泳ぎましたましょう'],
      ['すみません。|明日は|{ちょっと}…。','Xin lỗi. Ngày mai thì không tiện…','ぜひ/いちばん/もう'],
      ['日曜日、|一緒に|テニスを{しませんか}。','Chủ nhật cùng chơi tennis nhé?','するませんか/しますませんか/したませんか'],
      ['いいですね。|コーヒーを|{飲みましょう}。','Hay đấy. Cùng uống cà phê nhé.','飲むましょう/飲みますましょう/飲みましたましょう'],
      ['週末、|一緒に|コンサートへ{行きませんか}。','Cuối tuần cùng đi nghe hòa nhạc nhé?','行くませんか/行きますませんか/行ったませんか'],
      ['すみません。|今晩は|{用事があります}。','Xin lỗi. Tối nay tôi có việc bận.','用事をあります/用事がいます/用事にあります']
    ],
    'g6-event': [
      ['来週、|学校{で}|コンサートがあります。','Tuần sau có hòa nhạc diễn ra ở trường.','を/の/と'],
      ['明日、|友達と|約束{が}あります。','Ngày mai tôi có hẹn với bạn.','を/で/へ'],
      ['映画のチケットが|3{枚}|あります。','Tôi có ba tấm vé xem phim.','人/時/歳'],
      ['日曜日、|公園{で}|お祭りがあります。','Chủ nhật có lễ hội diễn ra ở công viên.','を/の/と'],
      ['今晩は|用事{が}|あります。','Tối nay tôi có việc bận.','を/へ/で'],
      ['紙が|5{枚}|あります。','Có năm tờ giấy.','人/時/歳'],
      ['来月、|東京{で}|野球の試合があります。','Tháng sau có trận bóng chày diễn ra ở Tokyo.','を/の/と'],
      ['コンサートのチケットが|何{枚}|ありますか。','Có bao nhiêu tấm vé hòa nhạc?','人/時/歳']
    ],
    'g6-compare': [
      ['電車は|バス{より}|速いです。','Tàu điện nhanh hơn xe buýt.','まで/から/だけ'],
      ['この店とあの店と|{どちらが}|安いですか。','Cửa hàng này và cửa hàng kia, cửa hàng nào rẻ hơn?','どんなが/どのが/どうが'],
      ['この店{のほうが}|安いです。','Cửa hàng này rẻ hơn.','よりが/でが/とが'],
      ['冬は|夏{より}|寒いです。','Mùa đông lạnh hơn mùa hè.','まで/から/だけ'],
      ['コーヒーと紅茶と|{どちらが}|好きですか。','Cà phê và hồng trà, bạn thích loại nào hơn?','どのが/どんなが/どうが'],
      ['私は|紅茶{のほうが}|好きです。','Tôi thích hồng trà hơn.','よりが/でが/とが'],
      ['この料理もあの料理も|{どちらも}|おいしいです。','Cả món này lẫn món kia đều ngon.','どちらが/どのも/より'],
      ['大阪は|東京{より}|近いです。','Osaka gần hơn Tokyo (tính từ vị trí người nói).','まで/から/だけ']
    ],
    'g6-best': [
      ['季節{で}|春が|いちばん好きです。','Trong các mùa, tôi thích mùa xuân nhất.','を/に/から'],
      ['日本の料理で|何{が}|いちばん好きですか。','Trong các món Nhật, bạn thích món gì nhất?','を/に/の'],
      ['スポーツで|テニスが|{いちばん}好きです。','Trong các môn thể thao, tôi thích tennis nhất.','より/どちら/まだ'],
      ['この町で|どこ{が}|いちばん静かですか。','Trong thị trấn này, nơi nào yên tĩnh nhất?','を/に/の'],
      ['飲み物{で}|お茶が|いちばん好きです。','Trong các đồ uống, tôi thích trà nhất.','を/に/から'],
      ['日本で|富士山が|{いちばん}高いです。','Ở Nhật Bản, núi Phú Sĩ cao nhất.','より/どちら/まだ'],
      ['果物で|何{が}|いちばん好きですか。','Trong các loại trái cây, bạn thích quả gì nhất?','を/に/の'],
      ['この町で|あのビルが|{いちばん}高いです。','Trong thị trấn này, tòa nhà kia cao nhất.','より/どちら/まだ']
    ],
    'g6-already': [
      ['{もう}|京都へ|行きましたか。','Bạn đã đến Kyoto chưa?','どんな/どれ/どちら'],
      ['もうこの本を読みましたか。|いいえ、|{まだです}。','Bạn đã đọc sách này chưa? Chưa.','もうです/まだでした/もうありません'],
      ['{もう}|お好み焼きを|食べましたか。','Bạn đã ăn okonomiyaki chưa?','どの/どれ/どちら'],
      ['もうあの映画を見ましたか。|はい、|{見ました}。','Bạn đã xem phim kia chưa? Rồi, tôi đã xem.','まだです/見ません/見ましょう'],
      ['{もう}|その美術館へ|行きましたか。','Bạn đã đến bảo tàng mỹ thuật đó chưa?','どの/どれ/どちら'],
      ['もう日本のアニメを見ましたか。|いいえ、|{まだです}。','Bạn đã xem phim hoạt hình Nhật chưa? Chưa.','もうです/まだでした/もうありません'],
      ['{もう}|このお茶を|飲みましたか。','Bạn đã uống loại trà này chưa?','どの/どれ/どちら'],
      ['もう大阪へ行きましたか。|はい、|{行きました}。','Bạn đã đến Osaka chưa? Rồi, tôi đã đến.','まだです/行きません/行きましょう']
    ],
    'g6-suggest': [
      ['明日の|4時は|{どうですか}。','Bốn giờ ngày mai thì sao (đề xuất giờ hẹn)?','どんなです/どれなです/どのですか'],
      ['駅の前は|{どうですか}。','Trước ga thì sao (đề xuất nơi gặp)?','どんなです/どれなです/どのですか'],
      ['昼ご飯に|ラーメンは|{どうですか}。','Bữa trưa ăn mì ramen thì sao?','どんなです/どれなです/どのですか'],
      ['いいですね。|{そうしましょう}。','Hay đấy. Chúng ta làm như vậy nhé.','そうするましょう/そうしますましょう/そうしましたましょう'],
      ['図書館の前は|{どうですか}。','Trước thư viện thì sao (đề xuất nơi hẹn)?','どんなです/どれなです/どのですか'],
      ['映画の後で、|喫茶店は|{どうですか}。','Sau bộ phim, đến quán cà phê thì sao?','どんなです/どれなです/どのですか'],
      ['飲み物に|お茶は|{どうですか}。','Đồ uống thì chọn trà nhé?','どんなです/どれなです/どのですか'],
      ['土曜日の|午後は|{どうですか}。','Chiều thứ bảy thì sao (đề xuất thời gian)?','どんなです/どれなです/どのですか']
    ],
    'g6-particles': [
      ['この店は|安いです{よ}。','Quán này rẻ đấy (mách thông tin mới).','を/に/の'],
      ['では、|明日の3時です{ね}。','Vậy là ba giờ ngày mai nhé (xác nhận lại).','を/で/の'],
      ['この映画は|おもしろいです{よ}。','Phim này hay đấy (giới thiệu cho bạn).','を/に/の'],
      ['待ち合わせは|駅の前です{ね}。','Chỗ hẹn là trước ga nhé (xác nhận lại).','を/で/の'],
      ['あの店の料理は|おいしいです{よ}。','Đồ ăn quán kia ngon đấy (mách cho bạn).','を/に/の'],
      ['では、|土曜日です{ね}。','Vậy là thứ bảy nhé (xác nhận ngày).','を/で/の'],
      ['そのコンサートは|来週です{よ}。','Buổi hòa nhạc đó là tuần sau đấy (báo thông tin).','を/に/の'],
      ['会う時間は|6時です{ね}。','Giờ gặp là sáu giờ nhé (xác nhận lại).','を/で/の']
    ],
    'g7-location': [
      ['銀行は|駅の前{に}|あります。','Ngân hàng ở trước ga.','を/と/から'],
      ['田中さんは|本屋の中に|{います}。','Tanaka đang ở trong hiệu sách.','あります/します/書きます'],
      ['犬は|テーブルの下に|{います}。','Con chó ở dưới bàn.','あります/します/食べます'],
      ['冷蔵庫は|台所{に}|あります。','Tủ lạnh ở trong bếp.','を/と/から'],
      ['交番は|銀行{の}|隣にあります。','Đồn cảnh sát ở cạnh ngân hàng.','を/と/で'],
      ['ポストは|スーパーの前に|{あります}。','Thùng thư ở trước siêu thị.','います/します/歌います'],
      ['猫は|いすの上に|{います}。','Con mèo ở trên ghế.','あります/します/置きます'],
      ['本屋は|銀行と駅{の}|間にあります。','Hiệu sách ở giữa ngân hàng và nhà ga.','を/で/に']
    ],
    'g7-there': [
      ['テーブルの上に|コップ{が}|あります。','Trên bàn có cốc.','を/で/と'],
      ['あそこ{に}|先生が|います。','Ở đằng kia có giáo viên.','を/と/から'],
      ['庭に|犬が|{います}。','Trong vườn có chó.','あります/します/置きます'],
      ['台所に|何{が}|ありますか。','Trong bếp có gì?','を/で/と'],
      ['教室に|誰{が}|いますか。','Trong lớp có ai?','を/で/の'],
      ['冷蔵庫の中に|ジュースが|{あります}。','Trong tủ lạnh có nước trái cây.','います/します/歌います'],
      ['駅の前{に}|友達が|います。','Ở trước ga có bạn tôi.','を/と/から'],
      ['公園に|大きい木が|{あります}。','Trong công viên có cây lớn.','います/します/持ちます']
    ],
    'g7-request': [
      ['この名前を|{読んで}|ください。','Hãy đọc tên này giúp tôi.','読みます/読む/読んだ'],
      ['ここに|かばんを|{置いて}ください。','Hãy đặt túi ở đây.','置きます/置く/置いた'],
      ['この野菜を|{切って}|ください。','Hãy cắt rau này giúp tôi.','切ります/切る/切った'],
      ['窓を|{閉めて}|ください。','Hãy đóng cửa sổ giúp tôi.','閉めます/閉める/閉めた'],
      ['そのコップを|{取って}|ください。','Hãy lấy chiếc cốc đó giúp tôi.','取ります/取る/取った'],
      ['友達に|電話を|{かけて}ください。','Hãy gọi điện cho bạn.','かけます/かける/かけた'],
      ['この本を|{貸して}|ください。','Hãy cho tôi mượn quyển sách này.','貸します/貸す/貸した'],
      ['冷蔵庫から|ジュースを|{出して}ください。','Hãy lấy nước trái cây ra khỏi tủ lạnh.','出します/出す/出した']
    ],
    'g7-tool': [
      ['ペン{で}|名前を|書きます。','Tôi viết tên bằng bút.','を/に/が'],
      ['はし{で}|魚を|食べます。','Tôi ăn cá bằng đũa.','を/に/が'],
      ['ナイフ{で}|野菜を|切ります。','Tôi cắt rau bằng dao.','を/に/が'],
      ['スプーン{で}|スープを|飲みます。','Tôi uống súp bằng thìa.','を/に/が'],
      ['フォーク{で}|ケーキを|食べます。','Tôi ăn bánh bằng nĩa.','を/に/が'],
      ['パソコン{で}|手紙を|書きます。','Tôi viết thư bằng máy tính.','を/に/が'],
      ['このナイフ{で}|パンを|切ってください。','Hãy cắt bánh mì bằng con dao này.','を/に/が'],
      ['赤いペン{で}|書いて|ください。','Hãy viết bằng bút đỏ.','を/に/が']
    ],
    'g7-how': [
      ['この漢字の|{読み方}を|教えてください。','Hãy chỉ cách đọc chữ Hán này.','読む方/読んで方/読みます方'],
      ['お皿の|{置き方}が|わかりません。','Tôi không biết cách đặt đĩa.','置く方/置いて方/置きます方'],
      ['この野菜の|{洗い方}を|教えてください。','Hãy chỉ cách rửa loại rau này.','洗う方/洗って方/洗います方'],
      ['この字の|{書き方}を|教えてください。','Hãy chỉ cách viết chữ này.','書く方/書いて方/書きます方'],
      ['駅への|{行き方}が|わかりません。','Tôi không biết cách đi đến ga.','行く方/行って方/行きます方'],
      ['ギターの|{弾き方}を|教えてください。','Hãy chỉ cách chơi ghi-ta.','弾く方/弾いて方/弾きます方'],
      ['この野菜の|{切り方}を|教えてください。','Hãy chỉ cách cắt loại rau này.','切る方/切って方/切ります方'],
      ['電話の|{かけ方}を|教えてください。','Hãy chỉ cách gọi điện thoại.','かける方/かけて方/かけます方']
    ],
    'g7-which': [
      ['{どの}|コップを|使いますか。','Bạn dùng chiếc cốc nào?','どれ/だれ/どう'],
      ['ナイフは|{どれ}|ですか。','Con dao là cái nào?','どの/だれ/どうして'],
      ['{どの}|いすに|座りますか。','Bạn ngồi chiếc ghế nào?','どれ/だれ/どう'],
      ['しょうゆは|{どれ}|ですか。','Nước tương là cái nào?','どの/だれ/どうして'],
      ['{どの}|ペンを|使いますか。','Bạn dùng chiếc bút nào?','どれ/だれ/どう'],
      ['私のコップは|{どれ}|ですか。','Cốc của tôi là cái nào?','どの/だれ/どうして'],
      ['{どの}|本を|読みますか。','Bạn đọc quyển sách nào?','どれ/だれ/どう'],
      ['砂糖は|{どれ}|ですか。','Đường là cái nào?','どの/だれ/どうして']
    ],
    'g7-progressive': [
      ['田中さんは|今、|本を{読んでいます}。','Tanaka đang đọc sách lúc này.','読みました/読むています/読みています'],
      ['友達は|今、|ギターを{弾いています}。','Bạn tôi đang chơi ghi-ta lúc này.','弾きました/弾くています/弾きています'],
      ['母は|台所で|野菜を{切っています}。','Mẹ đang cắt rau trong bếp.','切りました/切るています/切りています'],
      ['父は|今、|コーヒーを{飲んでいます}。','Bố đang uống cà phê lúc này.','飲みました/飲むています/飲みています'],
      ['パクさんは|今、|お皿を{洗っています}。','Anh/chị Pak đang rửa đĩa lúc này.','洗いました/洗うています/洗いています'],
      ['先生は|今、|漢字を{書いています}。','Giáo viên đang viết chữ Hán lúc này.','書きました/書くています/書きています'],
      ['ワンさんは|今、|日本語を{話しています}。','Anh/chị Wang đang nói tiếng Nhật lúc này.','話しました/話すています/話しっています'],
      ['友達は|あそこで|{待っています}。','Bạn tôi đang đợi ở đằng kia.','待ちました/待つています/待ちっています']
    ],
    'g7-offer': [
      ['窓を|{開けましょうか}。','Để tôi mở cửa sổ giúp nhé?','開けるましょうか/開けますましょうか/開けましたましょうか'],
      ['お茶を|{入れましょうか}。','Để tôi pha trà giúp nhé?','入れるましょうか/入れますましょうか/入れましたましょうか'],
      ['そのかばんを|{持ちましょうか}。','Để tôi cầm túi đó giúp nhé?','持つましょうか/持ちますましょうか/持ちましたましょうか'],
      ['料理を|{取りましょうか}。','Để tôi lấy thức ăn giúp nhé?','取るましょうか/取りますましょうか/取りましたましょうか'],
      ['野菜を|{切りましょうか}。','Để tôi cắt rau giúp nhé?','切るましょうか/切りますましょうか/切りましたましょうか'],
      ['窓を|{閉めましょうか}。','Để tôi đóng cửa sổ giúp nhé?','閉めるましょうか/閉めますましょうか/閉めましたましょうか'],
      ['ジュースを|{持って来ましょうか}。','Để tôi mang nước trái cây đến giúp nhé?','持って来るましょうか/持って来ますましょうか/持って来ましたましょうか'],
      ['お皿を|{洗いましょうか}。','Để tôi rửa đĩa giúp nhé?','洗うましょうか/洗いますましょうか/洗いましたましょうか']
    ],
    'g7-who': [
      ['誰{が}|このサラダを|作りましたか。','Ai đã làm món salad này?','を/で/の'],
      ['田中さん{が}|ケーキを|買いました。','Tanaka là người đã mua bánh (trả lời ai mua).','を/で/の'],
      ['誰{が}|お皿を|洗いましたか。','Ai đã rửa đĩa?','を/で/の'],
      ['パクさん{が}|ジュースを|持って来ました。','Pak là người đã mang nước trái cây đến.','を/で/の'],
      ['誰{が}|この字を|書きましたか。','Ai đã viết chữ này?','を/で/の'],
      ['ワンさん{が}|料理を|作りました。','Wang là người đã nấu ăn.','を/で/の'],
      ['誰{が}|窓を|開けましたか。','Ai đã mở cửa sổ?','を/で/の'],
      ['先生{が}|この本を|書きました。','Giáo viên là người đã viết quyển sách này.','を/で/の']
    ],
    'g7-remaining': [
      ['パンは|{まだ}|ありますか。','Bánh mì vẫn còn không?','どの/どれ/だれ'],
      ['牛乳は|{もう}|ありません。','Sữa đã hết rồi.','どの/どれ/だれ'],
      ['サラダは|{まだ}|あります。','Salad vẫn còn.','どの/どれ/だれ'],
      ['ケーキは|{もう}|ありません。','Bánh đã hết rồi.','どの/どれ/だれ'],
      ['お茶は|{まだ}|あります。','Trà vẫn còn.','どの/どれ/だれ'],
      ['ビールは|{もう}|ありません。','Bia đã hết rồi.','どの/どれ/だれ'],
      ['ピザは|{まだ}|ありますか。','Pizza vẫn còn không?','どの/どれ/だれ'],
      ['果物は|{もう}|ありません。','Trái cây đã hết rồi.','どの/どれ/だれ']
    ]
  };
  // Separate authored contexts for production tasks; never expose a cloze's solution.
  const orderBanks = {
    'g4-location': `札幌は|日本の|北です。~Sapporo ở phía bắc Nhật Bản.
ダナンは|ベトナムの|真ん中です。~Đà Nẵng ở miền trung Việt Nam.
ソウルは|韓国の|北です。~Seoul ở phía bắc Hàn Quốc.
この村は|山の|南です。~Ngôi làng này ở phía nam ngọn núi.
この大学は|町の|東です。~Đại học này ở phía đông thị trấn.
あの港は|島の|西です。~Bến cảng kia ở phía tây hòn đảo.
この湖は|国の|真ん中です。~Hồ này ở chính giữa đất nước.
あの村は|川の|東です。~Ngôi làng kia ở phía đông con sông.`,
    'g4-duration': `学校から|図書館まで|歩いて8分です。~Từ trường đến thư viện đi bộ mất tám phút.
ホテルから|美術館まで|バスで25分です。~Từ khách sạn đến bảo tàng mỹ thuật đi xe buýt mất 25 phút.
駅から|病院まで|車で12分です。~Từ ga đến bệnh viện đi ô tô mất 12 phút.
東京から|福岡まで|飛行機で2時間くらいです。~Từ Tokyo đến Fukuoka đi máy bay mất khoảng hai tiếng.
空港から|町まで|電車で1時間半です。~Từ sân bay đến thị trấn đi tàu điện mất một tiếng rưỡi.
会社から|郵便局まで|歩いて7分です。~Từ công ty đến bưu điện đi bộ mất bảy phút.
寮から|大学まで|自転車で18分です。~Từ ký túc xá đến đại học đi xe đạp mất 18 phút.
大阪から|奈良まで|電車で45分くらいです。~Từ Osaka đến Nara đi tàu điện mất khoảng 45 phút.`,
    'g4-adjective': `あの橋は|長い|です。~Cây cầu kia dài.
この道は|広い|です。~Con đường này rộng.
この図書館は|便利|です。~Thư viện này tiện lợi.
あの村は|小さい|です。~Ngôi làng kia nhỏ.
このホテルは|安い|です。~Khách sạn này rẻ.
この湖は|きれい|です。~Hồ này đẹp.
あの学校は|大きい|です。~Ngôi trường kia lớn.
この庭は|静か|です。~Khu vườn này yên tĩnh.`,
    'g4-negative': `この道は|広くない|です。~Con đường này không rộng.
このホテルは|安くない|です。~Khách sạn này không rẻ.
今日は|涼しくない|です。~Hôm nay trời không mát.
この水は|冷たくない|です。~Nước này không lạnh.
このスープは|おいしくない|です。~Súp này không ngon.
あの店は|便利じゃ|ありません。~Cửa hàng kia không tiện lợi.
このお茶は|苦くない|です。~Trà này không đắng.
この果物は|甘くない|です。~Trái cây này không ngọt.`,
    'g4-modifier': `あれは|長い|橋です。~Kia là một cây cầu dài.
ここは|便利な|駅です。~Đây là một nhà ga tiện lợi.
これは|冷たい|お茶です。~Đây là trà lạnh.
あれは|新しい|図書館です。~Kia là một thư viện mới.
ここは|小さい|村です。~Đây là một ngôi làng nhỏ.
これは|甘い|お菓子です。~Đây là bánh kẹo ngọt.
ここは|有名な|温泉です。~Đây là một suối nước nóng nổi tiếng.
あれは|広い|庭です。~Kia là một khu vườn rộng.`,
    'g4-existence': `この島に|小さい村が|あります。~Trên hòn đảo này có một ngôi làng nhỏ.
学校の前に|喫茶店が|あります。~Trước trường có một quán cà phê.
あの山に|神社が|あります。~Trên ngọn núi kia có một ngôi đền.
この村に|教会が|あります。~Trong ngôi làng này có một nhà thờ.
川の近くに|ホテルが|あります。~Gần sông có một khách sạn.
空港に|レストランが|あります。~Trong sân bay có nhà hàng.
この町に|大きい橋が|あります。~Ở thị trấn này có một cây cầu lớn.
あの公園に|池が|あります。~Trong công viên kia có một cái ao.`,
    'g4-connect': `この店は|高いですが、|便利です。~Cửa hàng này đắt nhưng tiện lợi.
今日は寒いです。|そして、|風が強いです。~Hôm nay trời lạnh. Và gió còn mạnh.
このお茶は|苦いですが、|おいしいです。~Trà này đắng nhưng ngon.
このホテルは安いです。|そして、|静かです。~Khách sạn này rẻ. Và còn yên tĩnh.
この寺は|有名ですが、|小さいです。~Ngôi chùa này nổi tiếng nhưng nhỏ.
この山はきれいです。|そして、|高いです。~Ngọn núi này đẹp. Và còn cao.
この果物は|甘いですが、|高いです。~Trái cây này ngọt nhưng đắt.
この村は静かです。|そして、|川がきれいです。~Ngôi làng này yên tĩnh. Và con sông còn đẹp.`,
    'g4-degree': `この川は|とても|きれいです。~Con sông này rất đẹp.
このコーヒーは|少し|苦いです。~Cà phê này hơi đắng.
この村は|あまり|有名じゃありません。~Ngôi làng này không nổi tiếng lắm.
この店は|あまり|高くないです。~Cửa hàng này không đắt lắm.
この国は|春、|涼しいです。~Nước này mát mẻ vào mùa xuân.
このパンは|とても|おいしいです。~Bánh mì này rất ngon.
この町は|秋、|雨が多いです。~Thị trấn này mưa nhiều vào mùa thu.
ここの料理は|どう|ですか。~Bạn thấy đồ ăn ở đây thế nào?`,
    'g4-ne': `この花は|きれいです|ね。~Bông hoa này đẹp nhỉ.
このホテルは|便利です|ね。~Khách sạn này tiện lợi nhỉ.
このパンは|甘いです|ね。~Bánh mì này ngọt nhỉ.
あの橋は|長いです|ね。~Cây cầu kia dài nhỉ.
この水は|冷たいです|ね。~Nước này lạnh nhỉ.
この道は|広いです|ね。~Con đường này rộng nhỉ.
この庭は|大きいです|ね。~Khu vườn này lớn nhỉ.
今日は|涼しいです|ね。~Hôm nay trời mát nhỉ.`,
    'g5-past': `先月、|奈良を|旅行しました。~Tháng trước tôi đã du lịch Nara.
今朝、|公園で|散歩しました。~Sáng nay tôi đã đi dạo trong công viên.
昨日、|魚を|焼きました。~Hôm qua tôi đã nướng cá.
先週、|自転車を|借りました。~Tuần trước tôi đã mượn xe đạp.
土曜日、|お弁当を|作りました。~Thứ bảy tôi đã làm cơm hộp.
昨日、|手紙を|書きませんでした。~Hôm qua tôi đã không viết thư.
去年、|富士山に|登りました。~Năm ngoái tôi đã leo núi Phú Sĩ.
日曜日、|温泉に|入りませんでした。~Chủ nhật tôi đã không tắm suối nước nóng.`,
    'g5-with': `先月、|先生と|美術館へ行きました。~Tháng trước tôi đến bảo tàng mỹ thuật cùng giáo viên.
昨日、|母と|料理を作りました。~Hôm qua tôi nấu ăn cùng mẹ.
金曜日、|弟と|買い物しました。~Thứ sáu tôi mua sắm cùng em trai.
先週、|一人で|温泉へ行きました。~Tuần trước tôi đi suối nước nóng một mình.
山に登りました。|それから、|写真を撮りました。~Tôi đã leo núi. Sau đó chụp ảnh.
手紙を書きました。|それから、|本を読みました。~Tôi đã viết thư. Sau đó đọc sách.
土曜日、|姉と|お菓子を作りました。~Thứ bảy tôi làm bánh kẹo cùng chị gái.
昨日、|一人で|奈良へ行きました。~Hôm qua tôi đi Nara một mình.`,
    'g5-somewhere': `去年、|どこかへ|旅行しましたか。~Năm ngoái bạn có du lịch đâu đó không?
今朝は|どこへも|出かけませんでした。~Sáng nay tôi đã không ra ngoài đi đâu cả.
休みに|母とどこかへ|行きましたか。~Ngày nghỉ bạn có đi đâu đó với mẹ không?
今週は|どこへも|旅行しませんでした。~Tuần này tôi đã không đi du lịch đâu cả.
土曜日、|どこかへ|出かけましたか。~Thứ bảy bạn có ra ngoài đi đâu đó không?
今月は|どこにも|旅行しませんでした。~Tháng này tôi đã không đi du lịch đâu cả.
先月、|一人でどこかへ|行きましたか。~Tháng trước bạn có đi đâu đó một mình không?
おとといは|どこにも|出かけませんでした。~Hôm kia tôi đã không ra ngoài đi đâu cả.`,
    'g5-past-i': `昨日のホテルは|安かった|です。~Khách sạn hôm qua đã rẻ.
先月の料理は|辛かった|です。~Món ăn tháng trước đã cay.
昨日の道は|広くなかった|です。~Con đường hôm qua đã không rộng.
去年の夏は|暑かった|です。~Mùa hè năm ngoái đã nóng.
先週のパンは|甘くなかった|です。~Bánh mì tuần trước đã không ngọt.
昨日の図書館は|新しかった|です。~Thư viện tôi đến hôm qua còn mới.
日曜日の水は|冷たかった|です。~Nước hôm chủ nhật đã lạnh.
先月の仕事は|忙しくなかった|です。~Công việc tháng trước đã không bận.`,
    'g5-past-na': `昨日のホテルは|便利|でした。~Khách sạn hôm qua đã tiện lợi.
去年、|父は|会社員でした。~Năm ngoái bố tôi là nhân viên công ty.
先週の海は|きれい|でした。~Biển tuần trước đã đẹp.
昨日は|休みじゃ|ありませんでした。~Hôm qua đã không phải ngày nghỉ.
おとといは|雪|でした。~Hôm kia trời đã có tuyết.
去年、|兄は|大学生でした。~Năm ngoái anh trai tôi là sinh viên đại học.
昨日の町は|静かじゃ|ありませんでした。~Thị trấn hôm qua đã không yên tĩnh.
先月の仕事は|大変じゃ|ありませんでした。~Công việc tháng trước đã không vất vả.`,
    'g5-reason': `安かったですから、|この本を|買いました。~Vì rẻ nên tôi đã mua quyển sách này.
楽しかったですから、|また|行きたいです。~Vì vui nên tôi muốn đi nữa.
風邪でしたから、|学校を|休みました。~Vì bị cảm nên tôi đã nghỉ học.
どうして|朝ご飯を|作りませんでしたか。~Tại sao bạn đã không làm bữa sáng?
雪でしたから、|自転車で|行きませんでした。~Vì có tuyết nên tôi đã không đi xe đạp.
今日は暇ですから、|部屋を|掃除します。~Vì hôm nay rảnh nên tôi dọn phòng.
どうして|その山に|登りませんでしたか。~Tại sao bạn đã không leo ngọn núi đó?
難しかったですから、|先生に|聞きました。~Vì khó nên tôi đã hỏi giáo viên.`,
    'g5-want-noun': `私は|電子辞書が|ほしいです。~Tôi muốn có từ điển điện tử.
私は|新しいゲームが|ほしいです。~Tôi muốn có trò chơi mới.
今、|温かいスープが|ほしいです。~Bây giờ tôi muốn có súp ấm.
私は|赤いペンが|ほしいです。~Tôi muốn có bút đỏ.
今、|大きいかばんが|ほしいです。~Bây giờ tôi muốn có túi lớn.
私は|お茶が|ほしくないです。~Tôi không muốn trà.
昨日は|冷たい水が|ほしかったです。~Hôm qua tôi đã muốn có nước lạnh.
私は|日本の地図が|ほしいです。~Tôi muốn có bản đồ Nhật Bản.`,
    'g5-like': `母は|料理が|好きです。~Mẹ tôi thích nấu ăn.
兄は|サッカーが|好きです。~Anh trai tôi thích bóng đá.
私は|苦いコーヒーが|嫌いです。~Tôi ghét cà phê đắng.
私は|ジャズが|好きです。~Tôi thích nhạc jazz.
私は|甘いお菓子が|あまり好きじゃありません。~Tôi không thích bánh kẹo ngọt lắm.
妹は|犬が|好きです。~Em gái tôi thích chó.
私は|絵が|好きです。~Tôi thích tranh.
父は|魚が|嫌いじゃありません。~Bố tôi không ghét cá.`,
    'g5-want-verb': `来年、|日本語を|勉強したいです。~Năm sau tôi muốn học tiếng Nhật.
週末、|山に|登りたいです。~Cuối tuần tôi muốn leo núi.
今朝は|何も|食べたくなかったです。~Sáng nay tôi đã không muốn ăn gì.
日曜日、|温泉に|入りたいです。~Chủ nhật tôi muốn tắm suối nước nóng.
私は|この自転車を|借りたいです。~Tôi muốn mượn chiếc xe đạp này.
今年は|国へ|帰りたくないです。~Năm nay tôi không muốn về nước.
明日、|海で|泳ぎたいです。~Ngày mai tôi muốn bơi ở biển.
私は|母に|電話したいです。~Tôi muốn gọi điện cho mẹ.`,
    'g5-purpose': `駅へ|友達を|迎えに行きます。~Tôi đến ga để đón bạn.
公園へ|テニスを|しに行きます。~Tôi đến công viên để chơi tennis.
山へ|景色を|見に行きます。~Tôi lên núi để ngắm cảnh.
スーパーへ|卵を|買いに行きます。~Tôi đến siêu thị để mua trứng.
学校へ|日本語を|習いに行きます。~Tôi đến trường để học tiếng Nhật.
友達のうちへ|料理を|作りに行きます。~Tôi đến nhà bạn để nấu ăn.
海へ|泳ぎに|行きます。~Tôi đến biển để bơi.
郵便局へ|切手を|買いに行きます。~Tôi đến bưu điện để mua tem.`,
    'g6-invite': `明日の朝、|一緒に|散歩しませんか。~Sáng mai cùng đi dạo nhé?
今度、|一緒に|山に登りませんか。~Lần tới cùng leo núi nhé?
いいですね。|おすしを|食べましょう。~Hay đấy. Cùng ăn sushi nhé.
金曜日、|一緒に|お酒を飲みませんか。~Thứ sáu cùng uống rượu nhé?
すみません。|週末は|ちょっと…。~Xin lỗi. Cuối tuần thì không tiện…
じゃ、|温泉へ|行きましょう。~Vậy cùng đến suối nước nóng nhé.
午後、|一緒に|買い物しませんか。~Chiều nay cùng đi mua sắm nhé?
いいですね。|一緒に|写真を撮りましょう。~Hay đấy. Cùng chụp ảnh nhé.`,
    'g6-event': `今週、|デパートで|セールがあります。~Tuần này có đợt giảm giá diễn ra ở trung tâm thương mại.
コンサートのチケットが|4枚|あります。~Có bốn tấm vé hòa nhạc.
今度の日曜日、|会社で|パーティーがあります。~Chủ nhật tới có tiệc diễn ra ở công ty.
今朝は|先生と|約束があります。~Sáng nay tôi có hẹn với giáo viên.
今月、|大阪で|サッカーの試合があります。~Tháng này có trận bóng đá diễn ra ở Osaka.
写真が|6枚|あります。~Có sáu tấm ảnh.
あさっては|用事が|あります。~Ngày kia tôi có việc bận.
紙が|10枚|あります。~Có mười tờ giấy.`,
    'g6-compare': `この部屋は|あの部屋より|広いです。~Phòng này rộng hơn phòng kia.
春と秋と|どちらが|好きですか。~Mùa xuân và mùa thu, bạn thích mùa nào hơn?
飛行機は|新幹線より|速いです。~Máy bay nhanh hơn Shinkansen.
私は|春のほうが|好きです。~Tôi thích mùa xuân hơn.
このかばんは|あのかばんより|大きいです。~Túi này lớn hơn túi kia.
肉と魚と|どちらが|好きですか。~Thịt và cá, bạn thích thứ nào hơn?
私は|魚のほうが|好きです。~Tôi thích cá hơn.
この公園とあの公園は|どちらも|静かです。~Cả công viên này lẫn công viên kia đều yên tĩnh.`,
    'g6-best': `日本の町で|京都が|いちばん好きです。~Trong các thành phố Nhật Bản, tôi thích Kyoto nhất.
この店で|このパソコンが|いちばん高いです。~Trong cửa hàng này, máy tính này đắt nhất.
動物で|猫が|いちばん好きです。~Trong các con vật, tôi thích mèo nhất.
このクラスで|誰が|いちばん若いですか。~Trong lớp này, ai trẻ nhất?
映画で|コメディーが|いちばん好きです。~Trong các thể loại phim, tôi thích phim hài nhất.
この町で|このホテルが|いちばん安いです。~Trong thị trấn này, khách sạn này rẻ nhất.
一年で|いつが|いちばん涼しいですか。~Trong năm, khi nào mát nhất?
食べ物で|カレーが|いちばん好きです。~Trong các món ăn, tôi thích cà ri nhất.`,
    'g6-already': `もう|相撲を|見ましたか。~Bạn đã xem sumo chưa?
もうその温泉に入りましたか。|いいえ、|まだです。~Bạn đã tắm suối nước nóng đó chưa? Chưa.
もう|あの山に|登りましたか。~Bạn đã leo ngọn núi kia chưa?
もう日本のカレーを食べましたか。|はい、|食べました。~Bạn đã ăn cà ri Nhật chưa? Rồi, tôi đã ăn.
もう|このゲームを|しましたか。~Bạn đã chơi trò chơi này chưa?
もうこの歌を聞きましたか。|いいえ、|まだです。~Bạn đã nghe bài hát này chưa? Chưa.
もう|奈良を|旅行しましたか。~Bạn đã du lịch Nara chưa?
もう新幹線に乗りましたか。|はい、|乗りました。~Bạn đã đi Shinkansen chưa? Rồi, tôi đã đi.`,
    'g6-suggest': `明後日の|2時は|どうですか。~Hai giờ ngày kia thì sao?
あの公園は|どう|ですか。~Công viên kia thì sao (đề xuất nơi đến)?
晩ご飯に|焼き肉は|どうですか。~Bữa tối ăn thịt nướng thì sao?
いいですね。|では、|そうしましょう。~Hay đấy. Vậy chúng ta làm như thế nhé.
本屋の前は|どう|ですか。~Trước hiệu sách thì sao (đề xuất nơi gặp)?
昼ご飯に|お好み焼きは|どうですか。~Bữa trưa ăn okonomiyaki thì sao?
午後の|1時半は|どうですか。~Một giờ rưỡi chiều thì sao?
飲み物に|紅茶は|どうですか。~Đồ uống thì hồng trà nhé?`,
    'g6-particles': `あの図書館は|静かです|よ。~Thư viện kia yên tĩnh đấy (mách thông tin).
では、|あさってです|ね。~Vậy là ngày kia nhé (xác nhận lại).
この温泉は|気持ちがいいです|よ。~Suối nước nóng này dễ chịu đấy (giới thiệu).
待ち合わせは|交番の前です|ね。~Chỗ hẹn là trước đồn cảnh sát nhé (xác nhận).
あのラーメンは|辛いです|よ。~Mì ramen kia cay đấy (báo cho bạn).
会う日は|日曜日です|ね。~Ngày gặp là chủ nhật nhé (xác nhận).
このチケットは|安いです|よ。~Vé này rẻ đấy (báo thông tin).
では、|午後の2時です|ね。~Vậy là hai giờ chiều nhé (xác nhận).`,
    'g7-location': `自動販売機は|教室の外に|あります。~Máy bán hàng tự động ở ngoài lớp học.
母は|スーパーの中に|います。~Mẹ ở trong siêu thị.
公園は|病院の後ろに|あります。~Công viên ở sau bệnh viện.
弟は|木の下に|います。~Em trai ở dưới gốc cây.
鍵は|かばんの中に|あります。~Chìa khóa ở trong túi.
駅は|郵便局の横に|あります。~Nhà ga ở bên cạnh bưu điện.
先生は|図書館の前に|います。~Giáo viên ở trước thư viện.
花は|窓の近くに|あります。~Hoa ở gần cửa sổ.`,
    'g7-there': `いすの下に|かばんが|あります。~Dưới ghế có túi.
門の前に|父が|います。~Trước cổng có bố tôi.
机の上に|電子辞書が|あります。~Trên bàn học có từ điển điện tử.
あの木の下に|猫が|います。~Dưới cây kia có mèo.
箱の中に|ナイフが|あります。~Trong hộp có dao.
公園の中に|友達が|います。~Trong công viên có bạn tôi.
ホテルの前に|バス停が|あります。~Trước khách sạn có trạm xe buýt.
窓の外に|鳥が|います。~Ngoài cửa sổ có chim.`,
    'g7-request': `この写真を|見て|ください。~Hãy xem bức ảnh này.
ここに|座って|ください。~Hãy ngồi ở đây.
この料理を|食べて|ください。~Hãy ăn món ăn này.
名前を|教えて|ください。~Hãy cho tôi biết tên.
明日、|来て|ください。~Ngày mai hãy đến.
この机を|使って|ください。~Hãy dùng chiếc bàn học này.
ここで|待って|ください。~Hãy đợi ở đây.
このスープを|飲んで|ください。~Hãy uống súp này.`,
    'g7-tool': `鉛筆で|絵を|かきます。~Tôi vẽ tranh bằng bút chì.
はさみで|紙を|切ります。~Tôi cắt giấy bằng kéo.
手で|パンを|食べます。~Tôi ăn bánh mì bằng tay.
携帯電話で|写真を|撮ります。~Tôi chụp ảnh bằng điện thoại di động.
辞書で|ことばを|調べます。~Tôi tra từ bằng từ điển.
青いペンで|住所を|書いてください。~Hãy viết địa chỉ bằng bút xanh.
このスプーンで|カレーを|食べます。~Tôi ăn cà ri bằng chiếc thìa này.
そのナイフで|果物を|切ってください。~Hãy cắt trái cây bằng con dao đó.`,
    'g7-how': `日本語の|勉強の仕方を|教えてください。~Hãy chỉ cách học tiếng Nhật.
この歌の|歌い方を|教えてください。~Hãy chỉ cách hát bài hát này.
この名前の|読み方が|わかりません。~Tôi không biết cách đọc tên này.
はしの|持ち方を|教えてください。~Hãy chỉ cách cầm đũa.
この店への|行き方を|教えてください。~Hãy chỉ cách đi đến cửa hàng này.
この料理の|食べ方を|教えてください。~Hãy chỉ cách ăn món ăn này.
このゲームの|遊び方が|わかりません。~Tôi không biết cách chơi trò chơi này.
このお茶の|入れ方を|教えてください。~Hãy chỉ cách pha loại trà này.`,
    'g7-which': `どの|ナイフで|切りますか。~Bạn cắt bằng con dao nào?
先生のかばんは|どれ|ですか。~Túi của giáo viên là cái nào?
どの|ギターを|弾きますか。~Bạn chơi chiếc ghi-ta nào?
私のいすは|どれ|ですか。~Ghế của tôi là cái nào?
どの|果物を|洗いますか。~Bạn rửa loại trái cây nào?
冷たいジュースは|どれ|ですか。~Nước trái cây lạnh là cái nào?
どの|料理を|作りますか。~Bạn nấu món ăn nào?
塩の入れ物は|どれ|ですか。~Hộp đựng muối là cái nào?`,
    'g7-progressive': `妹は|今、|ピアノを弾いています。~Em gái đang chơi piano lúc này.
弟は|今、|ゲームをしています。~Em trai đang chơi trò chơi lúc này.
友達は|公園で|写真を撮っています。~Bạn tôi đang chụp ảnh ở công viên.
父は|今、|新聞を読んでいます。~Bố đang đọc báo lúc này.
母は|今、|手紙を書いています。~Mẹ đang viết thư lúc này.
子供は|庭で|遊んでいます。~Trẻ em đang chơi trong vườn.
田中さんは|今、|窓を閉めています。~Tanaka đang đóng cửa sổ lúc này.
ワンさんは|今、|パンを食べています。~Wang đang ăn bánh mì lúc này.`,
    'g7-offer': `この漢字を|書きましょう|か。~Để tôi viết chữ Hán này giúp nhé?
その本を|貸しましょう|か。~Để tôi cho bạn mượn quyển sách đó nhé?
部屋を|掃除しましょう|か。~Để tôi dọn phòng giúp nhé?
お弁当を|作りましょう|か。~Để tôi làm cơm hộp giúp nhé?
この名前を|読みましょう|か。~Để tôi đọc tên này giúp nhé?
学校まで|迎えに行きましょう|か。~Để tôi đến trường đón nhé?
友達に|電話をかけましょう|か。~Để tôi gọi điện cho bạn giúp nhé?
いすを|持って行きましょう|か。~Để tôi mang ghế đi giúp nhé?`,
    'g7-who': `誰が|パンを|焼きましたか。~Ai đã nướng bánh mì?
姉が|この歌を|歌いました。~Chị gái là người đã hát bài hát này.
誰が|野菜を|切りましたか。~Ai đã cắt rau?
父が|窓を|閉めました。~Bố là người đã đóng cửa sổ.
誰が|この本を|読みましたか。~Ai đã đọc quyển sách này?
母が|この写真を|撮りました。~Mẹ là người đã chụp bức ảnh này.
誰が|ピザを|食べましたか。~Ai đã ăn pizza?
兄が|このゲームを|作りました。~Anh trai là người đã làm trò chơi này.`,
    'g7-remaining': `肉は|まだ|ありますか。~Thịt vẫn còn không?
塩は|もう|ありません。~Muối đã hết rồi.
砂糖は|まだ|あります。~Đường vẫn còn.
コーヒーは|もう|ありません。~Cà phê đã hết rồi.
おすしは|まだ|ありますか。~Sushi vẫn còn không?
ワインは|もう|ありません。~Rượu vang đã hết rồi.
水は|まだ|あります。~Nước vẫn còn.
卵は|もう|ありません。~Trứng đã hết rồi。`
  };
  const {units,questions}=GRAMMAR_DATA;
  // Old v1 sessions had no per-question fingerprints. These token changes
  // cannot safely reuse their saved numeric selections.
  GRAMMAR_DATA.legacyInvalidIds=['practice-g6-best-6-order-v2','practice-g7-how-0-order-v2'];
  const revisedChoices=new Set(['g4-degree-0','g6-invite-0','g6-invite-2','g7-how-1','g7-how-2','g7-progressive-6','g7-progressive-7']);
  const offerOrder=questions.find(q=>q.id==='g7-offer-order');
  Object.assign(offerOrder,{id:'g7-offer-order-v2',prompt:'Ghép theo nghĩa: Để tôi lấy giấy ra giúp nhé? Bắt đầu bằng “紙を”.',tokens:['紙を','出しましょう','か。'],answer:'紙を出しましょうか。',contextJP:'紙を出しましょうか。'});
  units.forEach(unit=>{
    let count=questions.filter(q=>q.unit===unit.id).length;
    (banks[unit.id]||[]).forEach(([marked,vi,wrong],i)=>{
      const match=marked.match(/\{([^{}]+)\}/),answer=match[1];
      const jp=marked.replace(/[{}]/g,'').replaceAll('|','');
      const blank=marked.replace(/\{[^{}]+\}/,'（　）').replaceAll('|','');
      const explanation=`${unit.formula}. ${unit.explain} Nghĩa câu: ${vi}`;
      const common={unit:unit.id,hint:unit.formula,explanation,contextJP:jp};
      if(count<18){questions.push({...common,id:`practice-${unit.id}-${i}-choice${revisedChoices.has(`${unit.id}-${i}`)?'-v3':''}`,type:'choice',prompt:`${vi} Điền vào chỗ trống: ${blank}`,options:[answer,...wrong.split('/')],answer});count++;}
      if(count<18){
        const [separateJP,separateVI]=orderBanks[unit.id].split('\n')[i].split('~');
        let tokens=separateJP.split('|');
        if(tokens.length===2&&unit.id==='g7-offer') tokens=[tokens[0],tokens[1].replace(/ましょうか。$/,''),'ましょう','か。'];
        if(tokens.length===2&&unit.id==='g6-suggest'&&tokens[1]==='どうですか。') tokens=[tokens[0],'どう','ですか。'];
        if(tokens.length===2&&/ですね。$|ですよ。$/.test(tokens[1])) tokens=[tokens[0],tokens[1].slice(0,-2),tokens[1].slice(-2)];
        questions.push({...common,id:`practice-${unit.id}-${i}-order-v2`,type:'order',prompt:`Ghép theo nghĩa: ${separateVI} Bắt đầu bằng “${tokens[0]}”.`,tokens,answer:separateJP.replaceAll('|',''),contextJP:separateJP.replaceAll('|',''),explanation:`${unit.formula}. ${unit.explain} Nghĩa câu: ${separateVI}`});count++;
      }
    });
    if(count!==18) throw new Error(`Grammar bank ${unit.id}: expected 18, received ${count}`);
  });
})();
