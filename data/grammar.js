// Lesson/topic alignment checked against the supplied PDFs and official Dekiru syllabus.
// Explanations, examples and exercises below are newly authored study material.
const GRAMMAR_DATA = (() => {
  const chapters = [
    {id:4, name:'私の国・町', vi:'Đất nước và thành phố của tôi', pages:[12,13,14], topics:['どこ？','どんなところ？','季節・料理'], labels:['Ở đâu?','Một nơi như thế nào?','Mùa và món ăn']},
    {id:5, name:'休みの日', vi:'Ngày nghỉ', pages:[15,16,17], topics:['週末','休みの後で','今度の休みに'], labels:['Cuối tuần','Sau kỳ nghỉ','Kỳ nghỉ tới']},
    {id:6, name:'一緒に！', vi:'Cùng nhau nhé!', pages:[18,19,20], topics:['一緒に行きませんか','どちらがいいですか','約束'], labels:['Cùng đi nhé?','Chọn bên nào?','Hẹn gặp']},
    {id:7, name:'友達の家で', vi:'Ở nhà bạn', pages:[21,22,23], topics:['道がわかりません','パーティーの準備','みんなで楽しいパーティー'], labels:['Hỏi đường và vị trí','Chuẩn bị bữa tiệc','Cùng vui trong bữa tiệc']}
  ];
  const units = [], questions = [];
  function add(l,t,id,title,category,formula,explain,note,jp,kana,vi,pages,prompt,options,why) {
    const unit = {id,lesson:l,topic:t,title,category,formula,explain,note,example:{jp:jp.replaceAll('|',''),kana,vi},pages};
    units.push(unit);
    questions.push({id:id+'-choice',unit:id,type:'choice',prompt,options,answer:options[0],explanation:why,hint:formula});
    const tokens = jp.split('|');
    questions.push({id:id+'-order',unit:id,type:'order',prompt:'Ghép câu theo nghĩa: '+vi+' Bắt đầu bằng “'+tokens[0]+'”.',tokens,answer:tokens.join(''),explanation:explain,hint:formula});
  }
  add(4,0,'g4-location','Vị trí trong một quốc gia','Trợ từ','Địa danh は quốc gia の phương hướng です',
    'の nối quốc gia với phương hướng hoặc vị trí: 北 (bắc), 南 (nam), 東 (đông), 西 (tây), 真ん中 (chính giữa). は nêu địa danh đang nói đến.',
    'Không dùng で để nối tên quốc gia với phương hướng. の ở đây biểu thị quan hệ “phía … của …”.',
    'この町は|日本の|北です。','このまちは にほんの きたです。','Thị trấn này ở phía bắc Nhật Bản.',[10,21],
    'Điền trợ từ: この町は日本（　）北です。',['の','で','を','と'],'日本の北 = phía bắc Nhật Bản. で chỉ phương tiện hoặc nơi diễn ra hành động trong các mẫu khác.');
  add(4,0,'g4-duration','Khoảng cách thời gian và phương tiện','Trợ từ','A から B まで phương tiện で thời lượng（くらい）です',
    'から đánh dấu điểm xuất phát, まで đánh dấu điểm đến. で chỉ phương tiện. どのくらい hỏi thời lượng; くらい diễn đạt xấp xỉ. Đi bộ dùng 歩いて.',
    'Phân biệt 2時 (2 giờ trên đồng hồ) với 2時間 (khoảng thời gian 2 tiếng). Không nói 歩いてで.',
    'うちから|学校まで|バスで|20分くらいです。','うちから がっこうまで バスで にじゅっぷんくらいです。','Từ nhà đến trường, đi xe buýt mất khoảng 20 phút.',[11,21,22],
    'Điền phương tiện: 駅まで電車（　）30分です。',['で','に','を','の'],'電車で = bằng tàu điện. 30分 là khoảng thời gian, không cần に.');
  add(4,1,'g4-adjective','Tính từ い và な trong câu miêu tả','Tính từ','N は Aいです ／ N は Aな（bỏ な）です',
    'Tính từ い giữ nguyên đuôi い trước です: 高いです. Tính từ な bỏ な khi đứng cuối câu: 静かです, きれいです.',
    'きれい và 有名 là tính từ な. Không nói きれいなです hoặc 高いなです.',
    'この町は|静か|です。','このまちは しずかです。','Thị trấn này yên tĩnh.',[14,18],
    'Chọn câu đúng để nói “Khu vườn đẹp”.',['庭はきれいです。','庭はきれいなです。','庭はきれくです。','庭はきれいのです。'],'きれい là tính từ な; trước です không thêm な.');
  add(4,1,'g4-negative','Phủ định tính từ','Chia dạng','Aい → Aくないです ／ Aな → Aじゃありません',
    'Với tính từ い, bỏ い rồi thêm くないです. Với tính từ な, dùng じゃありません hoặc ではありません. いい có dạng phủ định よくないです.',
    'きれい → きれいじゃありません, không phải きれくない. いい → よくない, không phải いくない.',
    'この料理は|辛くない|です。','このりょうりは からくないです。','Món ăn này không cay.',[18,20,23],
    'Phủ định của 暑いです là gì?',['暑くないです','暑いじゃありません','暑かったです','暑いくないです'],'暑い bỏ い rồi thêm くないです. 暑かったです là quá khứ khẳng định.');
  add(4,1,'g4-modifier','Tính từ bổ nghĩa danh từ; どんな','Tính từ','Aい + N ／ Aな + な + N ／ どんな N ですか',
    'Tính từ い đứng trực tiếp trước danh từ. Tính từ な cần な trước danh từ. どんな町ですか hỏi một thành phố như thế nào.',
    'Phân biệt 静かです (yên tĩnh) và 静かな町です (là một thị trấn yên tĩnh).',
    'ここは|静かな|町です。','ここは しずかな まちです。','Đây là một thị trấn yên tĩnh.',[12,13,19,22],
    'Điền “một ngôi chùa nổi tiếng”: （　）お寺です。',['有名な','有名','有名い','有名の'],'有名 là tính từ な, nên cần な trước お寺.');
  add(4,1,'g4-existence','Ở một nơi có sự vật','Trợ từ','Địa điểm に sự vật が あります',
    'Dùng に cho nơi tồn tại và が cho sự vật được giới thiệu. 何がありますか hỏi ở đó có gì. あります dùng cho đồ vật, cây cối, công trình.',
    'Ở đây に là nơi tồn tại, khác で là nơi tổ chức sự kiện ở bài 6. Con người và động vật dùng います ở bài 7.',
    'この町に|古いお寺が|あります。','このまちに ふるいおてらが あります。','Ở thị trấn này có một ngôi chùa cổ.',[13,20],
    'この町（　）川があります。',['に','を','と','から'],'に đánh dấu nơi con sông tồn tại; 川が là sự vật được giới thiệu.');
  add(4,1,'g4-connect','Nối ý: そして và が','Liên kết câu','Câu 1。そして、câu 2。 ／ Câu 1 が、câu 2。',
    'そして bổ sung một thông tin cùng chiều. が nối hai ý tương phản, tương tự “nhưng”. Giữ dạng lịch sự trước が: 小さいですが、….',
    'が ở đây là từ nối hai mệnh đề, khác が đánh dấu sự vật trong 川があります.',
    'この町は|小さいですが、|にぎやかです。','このまちは ちいさいですが、にぎやかです。','Thị trấn này nhỏ nhưng nhộn nhịp.',[14,15,24],
    'Chọn từ nối để nhấn mạnh “nhỏ NHƯNG đẹp”: 小さいです（　）、きれいです。',['が','を','に','の'],'が sau です nối hai ý tương phản.');
  add(4,2,'g4-degree','Thời tiết, mức độ và câu hỏi どう','Miêu tả','N は［mùa / tháng］Aです ／ とても・少し ／ あまり + phủ định ／ どうですか',
    'Nêu mùa hoặc tháng làm bối cảnh rồi miêu tả. とても = rất; 少し = hơi/một chút; あまり đi với phủ định = không … lắm. どうですか hỏi nhận xét chung.',
    'あまり暑くないです là “không nóng lắm”, không phải “không lạnh lắm”. PDF từ vựng trang 14 có bản dịch Việt nhầm ở câu này.',
    '私の町は|冬、|あまり寒くないです。','わたしのまちは ふゆ、あまりさむくないです。','Thành phố của tôi vào mùa đông không lạnh lắm.',[16,19,20,23],
    'Chọn phần phù hợp: この料理はあまり（　）。',['辛くないです','辛いです','辛いなです','辛くです'],'あまり trong mẫu sơ cấp này đi với phủ định. 辛くない = không cay.');
  add(4,2,'g4-ne','ね: tìm sự đồng tình','Hội thoại','Câu lịch sự + ね',
    'ね mời người nghe đồng tình với điều cả hai cùng nhận thấy. Có thể đáp そうですね. Trong bài 6, ね còn dùng xác nhận thông tin cuộc hẹn.',
    'ね không biến câu thành một câu hỏi thông tin như か. Giọng nói và ngữ cảnh quyết định sắc thái.',
    '今日は|暑いです|ね。','きょうは あついですね。','Hôm nay nóng nhỉ.',[16,24],
    'Cùng cảm nhận trời nóng; chọn đuôi “nóng nhỉ”: 暑いです（　）。',['ね','を','に','の'],'ね tìm sự đồng tình của người nghe về thời tiết.');

  add(5,0,'g5-past','Quá khứ của động từ lịch sự','Chia dạng','Vます → Vました ／ Vませんでした',
    'Thay ます bằng ました để kể việc đã làm; thay bằng ませんでした để nói đã không làm. Thêm か để hỏi. Không cần chuyển sang thể từ điển.',
    'しませんでした = đã không làm; しません = không làm/sẽ không làm. Hôm qua dùng 昨日, không thêm に trong cách dùng cơ bản.',
    '昨日、|映画を|見ました。','きのう、えいがを みました。','Hôm qua tôi đã xem phim.',[26,32,35],
    'Điền “hôm qua đã không học”: 昨日、勉強（　）。',['しませんでした','しません','します','しましょう'],'Dấu hiệu 昨日 và nghĩa “đã không” yêu cầu quá khứ phủ định しませんでした.');
  add(5,0,'g5-with','Làm cùng ai; kể việc tiếp theo','Trợ từ','Người と V ／ 一人で V ／ Câu 1。それから、câu 2。',
    'と sau tên người chỉ người cùng thực hiện. 一人で = một mình. それから dùng kể hành động tiếp theo trong chuỗi sự việc.',
    'それから ở đây chỉ trình tự “sau đó”; から nối sau một câu ở topic sau lại chỉ nguyên nhân.',
    '友達と|食事をしました。|それから、|映画を見ました。','ともだちと しょくじをしました。それから、えいがをみました。','Tôi ăn cùng bạn. Sau đó tôi xem phim.',[27,28,41],
    '家族（　）買い物をしました。 — Tôi đã mua sắm cùng gia đình.',['と','に','を','の'],'と đánh dấu người cùng thực hiện: 家族と.');
  add(5,0,'g5-somewhere','Có đi đâu không? Không đi đâu cả','Hội thoại','どこか（へ）行きましたか ／ どこ（へ）も行きませんでした',
    'どこか hỏi có đi một nơi nào đó hay không. どこへも đi với phủ định để nói không đi đâu cả. Trong hội thoại có thể lược へ.',
    'Không dùng どこかも để diễn đạt “không nơi nào”. も trong câu này cần đi cùng phủ định.',
    '昨日は|どこへも|行きませんでした。','きのうは どこへも いきませんでした。','Hôm qua tôi không đi đâu cả.',[30,39],
    'Điền “không đi đâu cả”: どこへ（　）行きませんでした。',['も','か','と','を'],'どこへも + phủ định diễn đạt không đi bất kỳ đâu.');
  add(5,1,'g5-past-i','Cảm nhận quá khứ: tính từ い','Chia dạng','Aい → Aかったです ／ Aくなかったです ／ どうでしたか',
    'Bỏ い rồi thêm かったです (đã …) hoặc くなかったです (đã không …). どうでしたか hỏi cảm nhận về việc đã trải qua. いい đổi sang gốc よ: よかったです.',
    'Không thêm でした ngay sau tính từ い: 楽しいでした là sai. 気持ちがいい → 気持ちがよかったです.',
    '昨日の旅行は|とても|楽しかったです。','きのうのりょこうは とても たのしかったです。','Chuyến du lịch hôm qua rất vui.',[6,29,30,36],
    'Quá khứ phủ định của おもしろいです là gì?',['おもしろくなかったです','おもしろいでした','おもしろくないでした','おもしろかったです'],'Bỏ い và thêm くなかったです; おもしろかった là quá khứ khẳng định.');
  add(5,1,'g5-past-na','Quá khứ: tính từ な và danh từ','Chia dạng','Aな / N + でした ／ じゃありませんでした',
    'Tính từ な bỏ な, rồi thêm でした. Danh từ cũng dùng でした. Phủ định quá khứ dùng じゃありませんでした; ではありませんでした trang trọng hơn.',
    'Không dùng 暇なでした. Phân biệt 雨でした (đã mưa) và 寒かったです (đã lạnh).',
    '昨日は|暇じゃありません|でした。','きのうは ひまじゃありませんでした。','Hôm qua tôi không rảnh.',[36,41],
    'Điền “bài kiểm tra đã dễ”: テストは（　）。',['簡単でした','簡単かったです','簡単なでした','簡単いでした'],'簡単 là tính từ な, nên quá khứ lịch sự là 簡単でした.');
  add(5,1,'g5-reason','Hỏi và giải thích lý do','Liên kết câu','どうして … か ／ Lý do から、kết quả',
    'どうして hỏi tại sao. Nêu lý do bằng một câu hoàn chỉnh rồi thêm から. Có thể kết thúc bằng から khi trả lời trực tiếp câu hỏi tại sao.',
    'Danh từ/tính từ な trong cách nói lịch sự cần です／でした trước から: 雨でしたから. Đừng nhầm với から chỉ điểm xuất phát.',
    '忙しかったですから、|買い物に|行きませんでした。','いそがしかったですから、かいものに いきませんでした。','Vì bận nên tôi đã không đi mua sắm.',[32,40,41],
    'Nối lý do: 雨でした（　）、出かけませんでした。',['から','まで','を','に'],'から sau 雨でした đưa ra lý do không đi ra ngoài.');
  add(5,2,'g5-want-noun','Muốn có một thứ gì','Mong muốn','N が ほしいです',
    'ほしい diễn đạt mong muốn sở hữu một vật của người nói; vật muốn có thường đi với が. Có thể dùng để hỏi mong muốn người nghe.',
    'Muốn làm hành động dùng Vたい, không dùng Vます + ほしい. Phủ định: ほしくないです.',
    '私は|新しい自転車が|ほしいです。','わたしは あたらしいじてんしゃが ほしいです。','Tôi muốn có một chiếc xe đạp mới.',[33,37],
    'Điền trợ từ theo mẫu: 私はカメラ（　）ほしいです。',['が','で','に','と'],'Nがほしいです nói muốn có một đồ vật.');
  add(5,2,'g5-like','Thích và không thích','Sở thích','N が 好きです ／ N が 嫌いです',
    '好き và 嫌い là tính từ な, dùng が để đánh dấu đối tượng thích/ghét. あまり好きじゃありません diễn đạt không thích lắm, nhẹ hơn 嫌いです.',
    'Đuôi い của 嫌い không làm nó thành tính từ い. Phủ định: 嫌いじゃありません.',
    '私は|日本の音楽が|好きです。','わたしは にほんのおんがくが すきです。','Tôi thích âm nhạc Nhật Bản.',[34,37],
    '日本の映画（　）好きです。',['が','を','で','へ'],'好きです là mẫu tính từ; đối tượng được đánh dấu bằng が.');
  add(5,2,'g5-want-verb','Muốn làm một việc','Mong muốn','V bỏ ます + たいです',
    'Lấy gốc trước ます rồi thêm たいです: 飲みます → 飲みたいです. たい chia như tính từ い: たくないです, たかったです.',
    'Với tân ngữ của たい có thể gặp を hoặc が. Không chấm が là sai chỉ vì ví dụ dùng を. Không dùng 飲むたい.',
    '私は|お茶を|飲みたいです。','わたしは おちゃを のみたいです。','Tôi muốn uống trà.',[34,37],
    'Muốn chụp ảnh: 写真を（　）。',['撮りたいです','撮るたいです','撮りますたいです','撮ってたいです'],'撮ります bỏ ます thành 撮り, rồi thêm たいです.');
  add(5,2,'g5-purpose','Đi để làm gì','Mục đích','Địa điểm へ V bỏ ます に 行きます ／ N hoạt động に 行きます',
    'へ chỉ nơi đến; に chỉ mục đích của chuyến đi. Dùng gốc ます như 見に, 食べに; hoặc danh từ hoạt động như 買い物に.',
    '映画を見に行きます, không phải 映画を見ますに行きます. Phân biệt địa điểm và mục đích, dù cả hai đều có thể gặp trợ từ に.',
    '町へ|写真を|撮りに|行きます。','まちへ しゃしんを とりに いきます。','Tôi đến thị trấn để chụp ảnh.',[6,38],
    'Đi xem phim: 映画を（　）行きます。',['見に','見ますに','見るに','見てに'],'見ます bỏ ます rồi thêm に để diễn đạt mục đích đi.');

  add(6,0,'g6-invite','Rủ, nhận lời và từ chối nhẹ','Hội thoại','Vませんか ／ Vましょう ／ … はちょっと…',
    'ませんか mời người nghe cùng làm; ましょう đề nghị cùng làm hoặc nhận lời. …はちょっと… bỏ lửng để từ chối nhẹ, có thể nêu lý do với から.',
    '行きませんか trong ngữ cảnh này là lời mời, không dịch máy móc thành “không đi à?”. ましょうか ở bài 7 thường là đề nghị giúp.',
    '明日、|一緒に|映画を|見ませんか。','あした、いっしょに えいがを みませんか。','Ngày mai cùng xem phim nhé?', [43,45,52],
    'Nhận lời rủ đi ăn: いいですね。食べに（　）。',['行きましょう','行きませんでした','行きたいでした','行くましょう'],'行きましょう là “cùng đi nhé”, dùng nhận lời.');
  add(6,0,'g6-event','Có việc hẹn, sự kiện và số lượng vé','Trợ từ','用事・約束 が あります ／ Địa điểm で sự kiện が あります ／ N が số lượng 枚 あります',
    'あります còn nói có việc bận, cuộc hẹn hoặc vé. Với sự kiện được tổ chức, địa điểm dùng で. 枚 (まい) đếm vật mỏng/phẳng như vé, giấy.',
    '公園に木があります = ở công viên có cây; 公園で祭りがあります = tại công viên diễn ra lễ hội. Không đổi に và で tùy ý.',
    '公園で|コンサートが|あります。','こうえんで コンサートが あります。','Có buổi hòa nhạc diễn ra tại công viên.',[43,44,45,53],
    'Chọn trợ từ cho nơi tổ chức: 学校（　）パーティーがあります。',['で','を','の','から'],'パーティー là sự kiện diễn ra ở trường, nên dùng で.');
  add(6,1,'g6-compare','So sánh hai lựa chọn','So sánh','A と B と どちらが … か ／ A のほうが … ／ A は B より …',
    'どちら hỏi giữa hai lựa chọn. のほうが nêu bên có đặc điểm nổi bật hơn. より đặt sau mốc so sánh. どちらも = cả hai, khi đặc điểm cùng đúng.',
    'AはBより近いです nghĩa là A gần hơn B. Đổi A/B sẽ đảo chiều so sánh. Không thêm “hơn” vào tính từ tiếng Nhật.',
    'この店は|あの店より|安いです。','このみせは あのみせより やすいです。','Cửa hàng này rẻ hơn cửa hàng kia.',[47,48,54],
    'AはBより近いです。 Cửa hàng nào gần hơn?',['A','B','Hai cửa hàng luôn xa bằng nhau','Không câu nào nói về khoảng cách'],'A là đối tượng được miêu tả; B đi sau より là mốc để so sánh.');
  add(6,1,'g6-best','So sánh nhất trong một phạm vi','So sánh','Phạm vi で N が いちばん Aです',
    'で giới hạn nhóm so sánh; が nêu đối tượng đứng đầu; いちばん = nhất. Hỏi 何・どこ・誰…がいちばん… tùy đối tượng.',
    'で ở đây chỉ phạm vi, không phải phương tiện. Phải hiểu “nhất” trong nhóm nào, không mặc định là trên toàn thế giới.',
    '果物で|りんごが|いちばん|好きです。','くだもので りんごが いちばん すきです。','Trong các loại trái cây, tôi thích táo nhất.',[7,46,54],
    'Điền “nhất”: スポーツでサッカーが（　）好きです。',['いちばん','より','どちら','まだ'],'いちばん diễn đạt mức cao nhất trong phạm vi スポーツ.');
  add(6,2,'g6-already','Đã … chưa? Chưa','Hội thoại','もう Vましたか ／ はい、Vました ／ いいえ、まだです',
    'もう với quá khứ hỏi việc đã trải qua/từng làm tính đến thời điểm nói. まだです trả lời chưa. Bài này dùng mẫu ngắn まだです.',
    'Đừng trả lời まだでした khi muốn nói đến hiện tại “chưa”. まだVていません là mẫu sẽ học ở bài 10, không bắt buộc ở đây.',
    'もう|この映画を|見ましたか。','もう このえいがを みましたか。','Bạn đã xem bộ phim này chưa?', [55],
    'Trả lời “chưa” cho もう行きましたか。',['いいえ、まだです。','いいえ、もうです。','はい、まだです。','いいえ、まだでした。'],'まだです = tính đến bây giờ vẫn chưa làm.');
  add(6,2,'g6-suggest','Đề xuất giờ, nơi hoặc món','Hội thoại','N は どうですか ／ そうしましょう',
    'Nはどうですか trong lúc bàn kế hoạch có nghĩa “… thì sao?”. N có thể là giờ hẹn, địa điểm hoặc món ăn. そうしましょう = làm như vậy nhé.',
    'Cùng một mẫu どうですか nhưng bài 4 thường hỏi nhận xét; ở đây chức năng là đề xuất một phương án.',
    '明日の|6時は|どうですか。','あしたの ろくじは どうですか。','Sáu giờ ngày mai thì sao?', [50,51,56],
    'Đề xuất giờ gặp: 3時は（　）。',['どうですか','どんなです','どれでした','どちらでした'],'3時はどうですか đề xuất 3 giờ làm giờ hẹn.');
  add(6,2,'g6-particles','よ: báo tin; ね: xác nhận','Hội thoại','Câu + よ ／ Thông tin cần xác nhận + ね',
    'よ nhấn mạnh thông tin người nói muốn cho người nghe biết. ね có thể lặp lại thông tin để xác nhận: 6時ですね. Không phải cứ câu cảm thán là dùng よ.',
    'ね còn có chức năng tìm đồng tình ở bài 4; phân biệt bằng tình huống giao tiếp.',
    'この料理は|おいしいです|よ。','このりょうりは おいしいですよ。','Món này ngon đấy (tôi mách bạn).',[49,51,57,58],
    'Nghe bạn hẹn 5 giờ, bạn xác nhận lại: 5時です（　）。',['ね','を','で','が'],'ね ở đây kiểm tra lại thông tin hai người vừa thống nhất.');

  add(7,0,'g7-location','Nói vị trí của người và vật','Vị trí','N は địa điểm に あります／います ／ N の 前・後ろ・隣…',
    'は nêu người/vật đã biết; に chỉ vị trí. Đồ vật/công trình dùng あります; người/động vật dùng います. Dùng の nối vật mốc với vị trí: 駅の前.',
    'Cây dùng あります. Phân biệt 前 (phía trước), 後ろ (phía sau), 隣 (bên cạnh), 中 (bên trong); AとBの間 = giữa A và B.',
    '友達は|駅の前に|います。','ともだちは えきのまえに います。','Bạn tôi ở trước nhà ga.',[60,61,62,71],
    '猫はテーブルの下に（　）。',['います','あります','します','いきます'],'猫 là động vật nên dùng います để nói vị trí.');
  add(7,0,'g7-there','Giới thiệu người/vật tại một nơi','Vị trí','Địa điểm に N が あります／います',
    'Đặt địa điểm lên trước khi muốn giới thiệu có ai/cái gì ở đó. Dùng が cho thông tin mới; câu hỏi là 何がありますか hoặc 誰がいますか.',
    '駅に友達がいます trả lời “ở ga có ai?”. 友達は駅にいます trả lời “bạn ở đâu?”.',
    '公園に|子供が|います。','こうえんに こどもが います。','Ở công viên có trẻ em.',[62,71],
    'Điền trợ từ sau nơi tồn tại: あそこ（　）犬がいます。',['に','を','と','から'],'に chỉ nơi tồn tại; 犬が chỉ con vật được giới thiệu.');
  add(7,1,'g7-te','Cách chia thể て','Chia dạng','Nhóm 1: đổi âm cuối ／ Nhóm 2: bỏ る + て ／ する→して・来る→来て',
    'Nhóm 1 từ thể từ điển: う・つ・る→って; む・ぶ・ぬ→んで; く→いて; ぐ→いで; す→して. Nhóm 2 bỏ る thêm て. 行く là ngoại lệ: 行って. Xem bảng luyện chia bên dưới.',
    'Phải xác định nhóm trước: 切る→切って (nhóm 1), 借りる→借りて (nhóm 2). Không suy ra mọi từ tận cùng る đều thuộc nhóm 2.',
    'お皿を|洗って|ください。','おさらを あらって ください。','Hãy rửa đĩa giúp tôi.',[63,72,75],
    'Thể て của 書きます（書く） là gì?',['書いて','書って','書きて','書んで'],'書く thuộc nhóm 1, đuôi く đổi thành いて.');
  add(7,1,'g7-request','Nhờ làm một việc','Yêu cầu','Vて + ください',
    'Chuyển động từ sang thể て rồi thêm ください để nhờ/hướng dẫn làm việc. Có thể mở lời bằng すみませんが để làm mềm lời nhờ.',
    '取ってください là nhờ người khác lấy. 取りましょうか ở topic sau là mình đề nghị lấy giúp. Không dùng 取りますください.',
    'すみませんが、|窓を|開けてください。','すみませんが、まどを あけてください。','Xin lỗi, hãy mở cửa sổ giúp tôi.',[63,64,65,72,75],
    'Nhờ bạn viết tên: 名前を（　）ください。',['書いて','書きます','書く','書いた'],'Vてください cần thể て: 書く→書いて.');
  add(7,1,'g7-tool','Làm bằng dụng cụ gì','Trợ từ','Dụng cụ で N を V',
    'で đánh dấu công cụ/phương tiện thực hiện hành động: ペンで書きます, はしで食べます. を đánh dấu đối tượng của hành động.',
    'で có nhiều nghĩa theo danh từ: バスで (phương tiện), 学校で (nơi hành động), ナイフで (dụng cụ).',
    'ナイフで|パンを|切ります。','ナイフで パンを きります。','Tôi cắt bánh mì bằng dao.',[63,76],
    'はし（　）ご飯を食べます。',['で','に','を','が'],'はし là dụng cụ ăn; dụng cụ đi với で.');
  add(7,1,'g7-how','Cách làm một việc','Danh từ hóa','V bỏ ます + 方（かた） ／ N の V方',
    'Lấy gốc ます thêm 方 để gọi tên cách làm: 作ります→作り方, 使います→使い方. Danh từ liên quan thường nối bằng の: 料理の作り方.',
    'Không dùng 料理を作り方. します→し方; với danh từ + する có thể nói 勉強のし方.',
    'この料理の|作り方を|教えてください。','このりょうりの つくりかたを おしえてください。','Hãy chỉ cho tôi cách làm món ăn này.',[8,73],
    '使います → “cách dùng” là gì?',['使い方','使う方','使って方','使います方'],'Bỏ ます từ 使います được 使い, thêm 方.');
  add(7,1,'g7-which','どの + danh từ và どれ','Chỉ định','どの N ですか ／ N は どれですか',
    'どの luôn cần danh từ theo sau. どれ tự đứng làm đại từ “cái nào”. Thường dùng khi chọn trong từ ba vật trở lên; đáp このN／そのN hoặc これ／それ.',
    'Không nói どれお皿. どちら thường hỏi giữa hai lựa chọn ở bài 6.',
    'どの|お皿を|使いますか。','どの おさらを つかいますか。','Bạn dùng chiếc đĩa nào?', [64,65,75,76],
    '（　）お皿ですか。 — そのお皿です。',['どの','どれ','だれ','なに'],'Vì có danh từ お皿 ngay sau chỗ trống nên chọn どの.');
  add(7,2,'g7-progressive','Hành động đang diễn ra','Chia dạng','Vて + います',
    'Dùng thể て + います để nói hành động đang diễn ra ngay lúc nói: 洗っています = đang rửa. Nơi hành động dùng で.',
    'Ở bài 7 tập trung nghĩa đang diễn ra. ています còn có nghĩa khác ở các bài sau, nên không dịch mọi trường hợp thành “đang”.',
    '友達は|台所で|料理を|作っています。','ともだちは だいどころで りょうりを つくっています。','Bạn tôi đang nấu ăn trong bếp.',[66,72],
    'Đang hát: 今、歌を（　）。',['歌っています','歌いました','歌いましょう','歌いますでした'],'歌う→歌って, thêm います thành 歌っています.');
  add(7,2,'g7-offer','Chủ động đề nghị giúp','Hội thoại','V bỏ ます + ましょうか',
    'Dùng ましょうか khi đề nghị mình làm giúp người nghe. Nhận giúp: ありがとうございます／お願いします; từ chối nhẹ tùy ngữ cảnh.',
    'Vましょう thường rủ cùng làm; Vましょうか trong bữa tiệc là đề nghị giúp. Không nhầm với Vてください nhờ người khác.',
    'お皿を|洗いましょう|か。','おさらを あらいましょうか。','Để tôi rửa đĩa giúp nhé?', [67,72],
    'Bạn muốn đề nghị rửa đĩa giúp, chọn câu phù hợp.',['お皿を洗いましょうか。','お皿を洗ってください。','お皿を洗いましたか。','お皿を洗いませんでした。'],'洗いましょうか đề nghị mình rửa giúp. 洗ってください là nhờ người khác rửa.');
  add(7,2,'g7-who','Ai là người thực hiện?','Trợ từ','誰 が Vましたか ／ Người が Vました',
    'Khi hỏi ai thực hiện hành động, dùng 誰が. Trong câu trả lời xác định người đó, tên người cũng đi với が.',
    'は dùng nêu chủ đề đã biết, không thay cho が sau 誰 trong mẫu hỏi chủ ngữ này.',
    '誰が|この料理を|作りましたか。','だれが このりょうりを つくりましたか。','Ai đã làm món ăn này?', [68,73],
    'Ai đã làm? 誰（　）作りましたか。',['が','を','で','の'],'が đánh dấu chủ thể chưa biết của hành động 作りました.');
  add(7,2,'g7-remaining','Vẫn còn và đã hết','Trạng thái','まだ あります ／ もう ありません',
    'まだあります nói vẫn còn đồ ăn/đồ vật. もうありません nói đã hết, không còn nữa. Hỏi まだありますか = còn không?',
    'まだです ở bài 6 = chưa làm; まだあります ở đây = vẫn còn. Đọc cả cụm, không dịch まだ luôn là “chưa”.',
    'ジュースは|もう|ありません。','ジュースは もう ありません。','Nước trái cây đã hết rồi.',[69,70,74],
    'Trả lời “vẫn còn” khi hỏi サラダはまだありますか。',['はい、まだあります。','はい、もうありません。','いいえ、まだです。','はい、ありませんでした。'],'まだあります diễn đạt vẫn còn; もうありません diễn đạt đã hết.');

  const forms = [
    ['g4-negative','Phủ định lịch sự của 寒いです.',['寒くないです','さむくないです','寒くありません','さむくありません'],'寒い bỏ い, thêm くないです.'],
    ['g5-past-na','Đổi 暇です sang quá khứ phủ định.',['暇じゃありませんでした','ひまじゃありませんでした','暇ではありませんでした','ひまではありませんでした','暇じゃなかったです','ひまじゃなかったです','暇ではなかったです','ひまではなかったです'],'暇 thuộc nhóm tính từ な: 暇じゃありませんでした.'],
    ['g5-want-noun','Đổi ほしいです thành phủ định (kết thúc bằng です).',['ほしくないです'],'ほしい chia như tính từ い: ほしくないです.'],
    ['g5-want-verb','Đổi 行きたいです thành phủ định (kết thúc bằng です).',['行きたくないです','いきたくないです'],'たい chia như tính từ い: たくないです.'],
    ['g6-invite','Từ 食べます, viết lời rủ “cùng ăn nhé?” bằng mẫu ませんか.',['食べませんか','たべませんか'],'食べます bỏ ます rồi thêm ませんか.'],
    ['g7-request','Từ 取ります, viết “hãy lấy giúp” bằng mẫu てください.',['取ってください','とってください'],'取る là nhóm 1: 取って + ください.'],
    ['g7-progressive','Từ 電話をかけます, viết “đang gọi điện” (giữ 電話を).',['電話をかけています','でんわをかけています'],'かける thuộc nhóm 2: かけて + います.'],
    ['g7-offer','Từ 手伝います, viết “để tôi giúp nhé?” bằng mẫu ましょうか.',['手伝いましょうか','てつだいましょうか'],'Bỏ ます rồi thêm ましょうか.'],
    ['g4-negative','Phủ định lịch sự của いいです (nhập cả です).',['よくないです','よくありません'],'いい đổi gốc thành よ: よくないです.'],
    ['g4-negative','Phủ định lịch sự của 静かです.',['静かじゃありません','しずかじゃありません','静かではありません','しずかではありません','静かじゃないです','しずかじゃないです'],'Tính từ な dùng じゃありません／じゃないです, không đổi sang くない.'],
    ['g5-past','Đổi 飲みます sang quá khứ khẳng định (lịch sự).',['飲みました','のみました'],'Thay ます bằng ました.'],
    ['g5-past','Đổi 食べます sang quá khứ phủ định (lịch sự).',['食べませんでした','たべませんでした'],'Thay ます bằng ませんでした.'],
    ['g5-past-i','Đổi いいです sang quá khứ khẳng định.',['よかったです'],'いい→よかったです là ngoại lệ cần nhớ.'],
    ['g5-past-i','Đổi 楽しいです sang quá khứ phủ định.',['楽しくなかったです','たのしくなかったです','楽しくありませんでした','たのしくありませんでした'],'楽しい bỏ い, thêm くなかったです.'],
    ['g5-past-na','Đổi 雨です sang quá khứ khẳng định.',['雨でした','あめでした'],'Danh từ dùng でした.'],
    ['g5-want-verb','Đổi 食べます thành “muốn ăn” (kết thúc bằng です).',['食べたいです','たべたいです'],'食べます→食べ + たいです.'],
    ['g7-how','Viết “cách đọc” từ 読みます (không thêm です).',['読み方','よみかた'],'読みます bỏ ます, thêm 方.']
  ];
  const teForms = [
    ['買う','かう','買って','かって','1: う → って'],['待つ','まつ','待って','まって','1: つ → って'],
    ['取る','とる','取って','とって','1: る → って'],['切る','きる','切って','きって','1: る → って'],
    ['読む','よむ','読んで','よんで','1: む → んで'],['遊ぶ','あそぶ','遊んで','あそんで','1: ぶ → んで'],
    ['死ぬ','しぬ','死んで','しんで','1: ぬ → んで (từ bổ sung để minh họa quy tắc)'],
    ['書く','かく','書いて','かいて','1: く → いて'],['泳ぐ','およぐ','泳いで','およいで','1: ぐ → いで'],
    ['話す','はなす','話して','はなして','1: す → して'],['行く','いく','行って','いって','1: ngoại lệ 行く → 行って'],
    ['食べる','たべる','食べて','たべて','2: bỏ る + て'],['借りる','かりる','借りて','かりて','2: bỏ る + て'],
    ['開ける','あける','開けて','あけて','2: bỏ る + て'],['する','する','して','して','3: する → して'],
    ['来る','くる','来て','きて','3: 来る → 来て（きて）']
  ];
  teForms.forEach(([v,k,a,h,rule]) => forms.push(['g7-te',`Chia ${v}（${k}）sang thể て; chỉ nhập phần động từ.`,[a,h],rule]));
  forms.forEach(([unit,prompt,answers,explanation],i) => questions.push({id:'form-'+i,unit,type:'fill',prompt,answers:[...new Set(answers)],answer:answers[0],explanation,hint:units.find(u=>u.id===unit).formula}));
  const extraChoices = [
    ['g4-duration','Điền “đi bộ mất 10 phút”: 駅まで（　）10分です。',['歩いて','歩いてで','歩きに','歩くで'],'Đi bộ dùng 歩いて, không thêm で.'],
    ['g4-modifier','Hỏi “một nơi như thế nào”: （　）ところですか。',['どんな','どう','どれ','どこか'],'どんな bổ nghĩa danh từ ところ; どう không đứng trực tiếp trước danh từ.'],
    ['g4-connect','Chọn từ thêm thông tin “và còn”: この町は静かです。（　）、きれいです。',['そして','どうして','どちら','まだ'],'そして bổ sung thông tin cùng chiều.'],
    ['g4-degree','“Thời tiết hơi lạnh”: （　）寒いです。',['少し','あまり','どんな','どれ'],'少し = hơi/một chút; あまり thường cần phủ định trong mẫu này.'],
    ['g4-degree','Hỏi nhận xét món ăn: この料理は（　）。',['どうですか','どんなです','どれなです','どこのですか'],'どうですか hỏi người nghe cảm thấy thế nào.'],
    ['g5-with','Điền từ kể việc tiếp theo: 映画を見ました。（　）、食事をしました。',['それから','どうして','どちらも','どんな'],'それから nối hai hành động theo trình tự.'],
    ['g5-with','“Tôi đi một mình”: （　）行きました。',['一人で','一人と','一人を','一人の'],'一人で diễn đạt tự làm một mình, không có người đi cùng.'],
    ['g5-somewhere','Hỏi có đi đâu đó không: 昨日、（　）行きましたか。',['どこかへ','どこへも','どこが','どこの'],'どこかへ = tới một nơi nào đó.'],
    ['g5-reason','Chọn từ hỏi lý do: （　）買いませんでしたか。',['どうして','どんな','どれ','どちらも'],'どうして = tại sao, hỏi lý do đã không mua.'],
    ['g5-like','Chọn cách nói “không thích lắm”.',['あまり好きじゃありません。','とても嫌いなです。','あまり好きです。','好きくないです。'],'あまり + phủ định là không … lắm. 好き là tính từ な.'],
    ['g6-invite','Bạn có việc bận; chọn cách từ chối nhẹ lời rủ tối nay.',['すみません。今晩はちょっと…。','いいですね。行きましょう。','ぜひ行きたいです。','一緒に行きませんか。'],'…はちょっと… là cách bỏ lửng lời từ chối, có thể thêm 用事がありますから.'],
    ['g6-event','Chọn lượng từ cho hai tấm vé: チケットが2（　）あります。',['枚','人','時','歳'],'枚（まい）đếm đồ mỏng/phẳng như vé.'],
    ['g6-event','“Ngày mai tôi có việc bận”: 明日、用事（　）あります。',['が','を','で','へ'],'用事があります diễn đạt có công việc cần làm.'],
    ['g6-compare','So sánh hai địa điểm: AとBと（　）が近いですか。',['どちら','どんな','どう','どの'],'どちら hỏi lựa chọn nào trong hai đối tượng.'],
    ['g6-compare','Trả lời A gần hơn: A（　）が近いです。',['のほう','より','で','と'],'Aのほうが… nêu bên A có đặc điểm nổi bật hơn.'],
    ['g6-compare','“Cả hai đều ngon”: （　）おいしいです。',['どちらも','どちらが','どのも','より'],'どちらも nói đặc điểm đúng với cả hai lựa chọn.'],
    ['g6-best','Phạm vi so sánh: 日本の料理（　）何がいちばん好きですか。',['で','を','に','から'],'で giới hạn phạm vi so sánh là các món Nhật.'],
    ['g6-particles','Bạn mách người nghe món này ngon (thông tin mới): おいしいです（　）。',['よ','を','に','の'],'よ nhấn mạnh thông tin người nói cung cấp cho người nghe.'],
    ['g7-location','Cây ở cạnh nhà: 木は家の隣に（　）。',['あります','います','します','食べます'],'Cây dùng あります dù là sinh vật; người và động vật dùng います.'],
    ['g7-which','塩は（　）ですか。 — それです。',['どれ','どの','どうして','だれ'],'どれ tự đứng thay cho vật; どの phải có danh từ đi kèm.']
  ];
  extraChoices.forEach(([unit,prompt,options,explanation],i)=>questions.push({id:'extra-'+i,unit,type:'choice',prompt,options,answer:options[0],explanation,hint:units.find(u=>u.id===unit).formula}));
  // These rearrangements remain grammatical and preserve the intended meaning.
  const orderVariants = {
    'g4-duration-order':['うちからバスで学校まで20分くらいです。'],
    'g6-invite-order':['明日、映画を一緒に見ませんか。'],
    'g7-progressive-order':['友達は料理を台所で作っています。']
  };
  Object.entries(orderVariants).forEach(([id,alternatives])=>{questions.find(q=>q.id===id).alternatives=alternatives;});
  return {chapters,units,questions,teForms};
})();
