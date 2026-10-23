"""Build authored, reviewable exam data. No external services are used.

Each row: category | lesson | topic (0..2) | unit | prompt | correct | distractor x3 | explanation.
The sample is transcribed from 44 supplied screenshots; question 18 is a labelled addition.
"""
import json
from pathlib import Path
from exam_solutions import attach_solutions

ROOT = Path(__file__).resolve().parents[1]

def legacy_fingerprint(exam):
    """Match the existing JS fingerprint before clarifying the scope of one prompt."""
    fields=['prompt','options','answer','lesson','topic','category','unit','explanation']
    document={'format':'dekiru-exam','version':1,'exam':{k:exam[k] for k in ['title','description','minutes']}}
    document['exam']['questions']=[{k:q[k] for k in fields} for q in exam['questions']]
    value=json.dumps(document,ensure_ascii=False,separators=(',',':')).encode('utf-16-le')
    code=2166136261
    for i in range(0,len(value),2):code=((code^(value[i]+value[i+1]*256))*16777619)&0xffffffff
    return format(code,'x')

def rows(text, prefix):
    result=[]
    for line in text.strip().splitlines():
        if not line.strip(): continue
        c,l,t,u,p,a,b,d,e,why=[s.strip() for s in line.split('|')]
        i=len(result)
        # Distribute correct choices without changing question order or meaning.
        shift=(i+int(prefix[-1]) if prefix[-1].isdigit() else i)%4
        options=[a,b,d,e]; options=options[shift:]+options[:shift]
        result.append(dict(id=f'{prefix}-{i+1:02}',category=c,lesson=int(l),topic=int(t),unit=u,
                           prompt=p.replace(' / ','\n'),options=options,answer=options.index(a),explanation=why))
    return result

sample_text='''
dialogue|5|0|g5-past|A：Bさん、先週、（　）。 / B：おだいばへ行きました。|どこへ行きましたか|いつ行きましたか|どこでしましたか|何をしましたか|B trả lời địa điểm đến bằng へ, nên hỏi どこへ行きましたか. Đã sửa lựa chọn lỗi どこでいきましたか trong ảnh.
translation|5|0|g5-with|Chọn bản dịch: Thứ bảy tuần trước, tôi đã leo núi cùng bạn.|先週の土曜日、友達と一緒に山に登りました。|来週の土曜日、友達と一緒に山に登りました。|先週の土曜日、友達に一緒に山に登りました。|先週の土曜日、友達と一緒に山を見ました。|先週 = tuần trước; と = cùng; 登りました = đã leo. Đã sửa lỗi のばりました và chuẩn hóa lựa chọn để có một đáp án.
spelling|6|0||Chọn chữ Hán của「どっかい」.|読解|国会|読会|国解|読解（どっかい）= đọc hiểu. Đây là từ trong đề ảnh, không phải từ mới bài 4–5.
grammar|5|1|g5-past-i|きのう、天気が（　）ですから、どこへも（　）。|わるかった・行きませんでした|わるかった・行きました|いい・行きました|いい・行きませんでした|Hôm qua trời xấu nên không đi đâu: 悪かった + どこへも行きませんでした.
grammar|5|2|g5-want-verb|おもしろい映画を（　）です。|見たい|食べたい|会いたい|買います|映画を見る → 見たい. Muốn xem một bộ phim thú vị.
spelling|6|0||Chọn chữ Hán của「よみもの」.|読み物|飲み物|買い物|食べ物|読み物（よみもの）= tài liệu, sách báo để đọc.
dialogue|5|0|g5-somewhere|A：先週の日曜日、（　）。 / B：いいえ、どこへも（　）。|どこかへ行きましたか・行きませんでした|どこへ行きましたか・行きました|図書館へ行きましたか・行きました|図書館へ行きました・行きませんでした|Hỏi “có đi đâu không” dùng どこかへ; trả lời không đi đâu dùng どこへも + phủ định. Chuẩn hóa câu hỏi để lời đáp tự nhiên.
grammar|6|0|g6-event|横浜（　）野球の試合（　）あります。|で・が|に・が|で・を|は・に|Sự kiện diễn ra ở đâu dùng で; 野球の試合が là sự kiện được tổ chức.
spelling|6|0||Chọn chữ Hán của「きこく」.|帰国|会国|見国|問国|帰国（きこく）= về nước.
grammar|6|0|g6-event|あした、（　）約束があります。|友達と|友達の|野球の|約束の|友達と約束があります = có hẹn với bạn.
grammar|5|1|g5-reason|パソコンは高かったから、（　）。Chọn “đã không mua”.|買いませんでした|会いました|買いました|会いませんでした|高かったから nêu lý do đắt; đã không mua là 買いませんでした. Thêm nghĩa yêu cầu để đáp án duy nhất.
vocabulary|5|2||私の趣味は（　）です。Chọn từ “karaoke”.|カラオケ|チケット|ツアー|歌手|カラオケ = karaoke; 趣味はカラオケです = sở thích của tôi là hát karaoke. Đã sửa カラオケ trong ảnh và thêm ngữ cảnh nghĩa.
dialogue|5|1|g5-past-i|A：映画はおもしろかったですか。 / B：いいえ、（　）です。|おもしろくなかった|おもしろかった|おもしろくないでした|おもしろいでした|Quá khứ phủ định của おもしろい là おもしろくなかった. Thêm いいえ để phân biệt có/không.
grammar|6|1|g6-compare|新宿駅（　）渋谷駅（　）（　）近いですか。|と・と・どちらが|と・と・どちらも|の・は・どちらも|の・は・どちらが|So sánh hai lựa chọn: AとBとどちらが近いですか.
grammar|6|1|g6-best|日本（　）食べ物（　）何（　）（　）好きですか。|の・で・が・いちばん|の・を・で・いっしょに|を・の・が・いちばん|の・で・が・いっしょに|日本の食べ物で何がいちばん好きですか = thích món nào nhất trong các món Nhật.
grammar|6|1|g6-best|スポーツで野球がいちばん（　）です。Chọn “thú vị”.|おもしろい|あたらしい|おおい|おおきい|おもしろい = thú vị; いちばん = nhất. Bổ sung nghĩa để tránh lựa chọn theo ý kiến cá nhân.
grammar|5|0|g5-past|A：日曜日、何をしましたか。 / B：公園（　）行きました。公園（　）写真（　）撮りました。|へ・で・を|で・へ・を|で・で・を|で・へ・が|へ chỉ đích đến, で nơi chụp, を đánh dấu 写真. Đã sửa lỗi いたしました trong ảnh.
grammar|4|0|g4-duration|家から駅まで、電車（　）十分です。|で|を|が|と|Phương tiện đi lại dùng で. Câu 18 không có trong ảnh, được biên soạn bổ sung và đánh dấu riêng.
grammar|6|1|g6-compare|新宿駅（　）ほう（　）近いです。|の・が|は・が|の・は|は・より|Aのほうが近いです = A gần hơn.
grammar|6|1|g6-best|この町の説明です：（　）、六月がいちばん暑いです。|一年で|スポーツで|季節を|音楽で|一年で là phạm vi so sánh “trong một năm”. Đây là mô tả một thị trấn giả định, không phải kết luận về khí hậu Nhật Bản.
reading|6|0||Chọn cách đọc「国会」.|こっかい|かいけん|しゃかい|かいしゃ|国会（こっかい）= quốc hội.
reading|6|0||Chọn cách đọc「来日」.|らいにち|きじつ|らいに|きにち|来日（らいにち）= đến Nhật.
spelling|5|0||Chọn chữ Hán của「はなす」.|話す|聞す|書す|見す|話す（はなす）= nói, trò chuyện.
dialogue|6|0|g6-invite|A：今度、ビールを飲みませんか。 / B：ああ、（　）。すみません。今度はちょっと…。|今度ですか|そうですかね|いいですね|飲みましょう|今度ですか lặp lại thời điểm trước khi từ chối nhẹ. Đã làm rõ lựa chọn để tránh nhiều cách đáp đều tự nhiên.
grammar|5|2|g5-purpose|国へ（　）帰ります。Chọn “để gặp gia đình”.|家族に会いに|スキーを買いに|木を買いに|食事に|会います → 会いに; 家族に会いに帰ります = về nước để gặp gia đình. Bổ sung nghĩa vì nhiều mục đích về nước đều có thể đúng.
dialogue|6|0|g6-invite|田中さん、（　）行きませんか。Chọn “cùng nhau”.|いっしょに|もう|ぜひ|まだ|いっしょに = cùng nhau. ぜひ cũng có thể đi với lời mời nên câu có thêm nghĩa đích cần chọn.
dialogue|6|2|g6-suggest|A：何時に会いますか。 / B：五時は（　）。 / A：五時です（　）。わかりました。|どうですか・ね|どちらですか・よ|どうですか・よ|どちらですか・ね|どうですか để đề xuất giờ; ね xác nhận lại giờ vừa nghe.
spelling|5|2||Chọn chữ Hán của「どくしょ」.|読書|読物|聞物|問書|読書（どくしょ）= việc đọc sách.
spelling|5|0||Chọn chữ Hán của「きます」.|来ます|会ます|きまする|聞ます|来ます（きます）= đến.
reading|5|0||Chọn cách đọc「今、何時ですか。」.|いま、なんじですか|いま、なんがつですか|こん、なんじですか|いぬ、なんがつですか|今 = いま; 何時 = なんじ. Đã viết trọn cách đọc của câu.
grammar|5|2|g5-purpose|あした、（買い物します → ＿＿）行きませんか。|買い物に|買い物|買い物します|買い物し|買い物 là danh từ hoạt động, nên 買い物に行く; 買い物しに cũng hợp ngữ pháp nhưng không có trong lựa chọn.
reading|5|0||Chọn cách đọc「会話」.|かいわ|かいしゃ|かいけん|かいぎ|会話（かいわ）= hội thoại.
spelling|5|0||Chọn cách viết「くにへ かえります」.|国へ帰ります|国へ来ます|会へ帰ります|会へ来ます|国 = nước/quốc gia; 帰ります = trở về.
dialogue|6|0|g6-invite|A：今度、ご飯を食べませんか。 / B：（　）。食べましょう。|いいですね|いいですか|そうですか|そうでした|いいですね nhận lời rủ cùng ăn; 食べましょう = cùng ăn nhé.
grammar|6|0|g6-event|サッカーのチケットが（　）あります。|さんまい|三本|三つ|さんさつ|Vé là vật mỏng/phẳng, dùng 枚（まい）: 三枚（さんまい）.
grammar|5|2|g5-purpose|服を（　）行きませんか。|買いに|飲いに|飲い|買い|買います bỏ ます rồi thêm に: 服を買いに行く.
grammar|6|0|g6-invite|A：あした、お好み焼きを食べませんか。 / B：すみません。あしたはちょっと…。（　）があります（　）。|約束・から|用事・ちょっと|約束・ちょっと|用事・を|約束がありますから nêu lý do có hẹn nên từ chối.
grammar|5|2|g5-want-verb|おいしいですから、ぜひ（　）です。|食べたい|食べます|食べに|食べにいます|Muốn ăn = 食べたいです. Không dùng 食べますです.
reading|6|0||Chọn cách đọc「社会」.|しゃかい|こうかい|かいけん|かいしゃ|社会（しゃかい）= xã hội.
translation|5|1|g5-past-na|Chọn bản dịch: Hôm qua thời tiết đẹp. Và phong cảnh rất đẹp.|きのう、天気がよかったです。そして、景色はとてもきれいでした。|きのう、天気がよかったです。そして、景色はとてもきれいです。|きのう、天気がいいです。そして、景色はとてもきれいでした。|きのう、天気がよかったです。そして、景色はとてもきれかったです。|いい → よかった; きれい là tính từ な → きれいでした. Ảnh có hai lựa chọn giống nhau, đã thay một lựa chọn.
spelling|5|0||Chọn chữ Hán của「こんげつ」.|今月|玲月|玲目|今目|今月（こんげつ）= tháng này.
grammar|5|0|g5-past|A：（　）食べますか。 / B：レストラン（　）食べます。|どこで・で|今週に・で|何時に・に|どこに・に|Hỏi nơi diễn ra hành động dùng どこで, trả lời レストランで.
reading|5|0||Chọn cách đọc「今週」.|こんしゅう|らいしゅう|こんじゅう|せんしゅう|今週 = tuần này, đọc こんしゅう.
grammar|6|1|g6-compare|新宿駅（　）渋谷駅（　）近いです。|は・より|は・と|と・と|と・より|AはBより近いです = A gần hơn B.
grammar|6|1|g6-best|映画（　）何（　）（　）好きですか。|で・が・いちばん|の・で・いっしょに|の・で・いちばん|で・が・いっしょに|映画で何がいちばん好きですか hỏi thích phim nào nhất.
'''

# Three independent variants for each of the 19 lesson 4–5 units.
# No comparison, invitation, progressive or te-form constructions are introduced.
grammar_variants=[
('g4-location',4,0,[
('ハノイはベトナム（　）北です。','の','で','を','に','Quốc gia の phương hướng: ベトナムの北.'),
('Chọn “phía nam của Nhật Bản”: 日本（　）南です。','の','と','を','へ','の nối 日本 với 南.'),
('この町は国（　）真ん中です。','の','で','が','を','国の真ん中 = chính giữa đất nước.')]),
('g4-duration',4,0,[
('家から学校までバス（　）三十分くらいです。','で','の','を','が','で chỉ phương tiện; 三十分くらい = khoảng 30 phút.'),
('駅から教会まで（　）十分です。Chọn “đi bộ”.','歩いて','歩いてで','歩きますで','歩くを','歩いて dùng trực tiếp, không thêm で.'),
('A：空港から町まで（　）ですか。 / B：車で一時間半です。','どのくらい','どんな','何を','だれと','どのくらい hỏi thời lượng; 一時間半 = một tiếng rưỡi.')]),
('g4-adjective',4,1,[
('この町は（　）です。Chọn dạng đúng của 静か.','静か','静かな','静かい','静かく','Tính từ な bỏ な khi đứng trước です.'),
('あのビルは（　）です。Chọn dạng đúng của 高い.','高い','高いな','高く','高いの','Tính từ い giữ nguyên đuôi trước です.'),
('この神社は（　）です。Chọn dạng đúng của 有名.','有名','有名な','有名い','有名く','有名 là tính từ な; câu miêu tả dùng 有名です.')]),
('g4-negative',4,1,[
('このスープは熱いですか。いいえ、（　）です。','熱くない','熱いじゃない','熱かった','熱いくない','熱い bỏ い + くない → 熱くない.'),
('この町はにぎやかですか。いいえ、（　）。','にぎやかじゃありません','にぎやかくないです','にぎやかったです','にぎやかいではありません','にぎやか là tính từ な; phủ định dùng じゃありません.'),
('ここの天気はいいですか。いいえ、（　）です。','よくない','いくない','いいじゃない','よかった','Ngoại lệ いい có gốc よ: よくない.')]),
('g4-modifier',4,1,[
('あそこは（　）お寺です。Chọn “ngôi chùa nổi tiếng”.','有名な','有名','有名い','有名の','有名な + danh từ お寺.'),
('ここは（　）町です。Chọn “thị trấn nhỏ”.','小さい','小さいな','小さく','小さなな','Tính từ い + danh từ: 小さい町.'),
('A：ここは（　）ところですか。 / B：静かなところです。','どんな','どのくらい','だれと','いつ','どんなところ hỏi nơi có đặc điểm thế nào.')]),
('g4-existence',4,1,[
('この町（　）大きい川（　）あります。','に・が','で・を','に・を','を・が','Nơi tồn tại に, sự vật が.'),
('山の近くに温泉（　）あります。','が','を','へ','と','温泉が là sự vật tồn tại.'),
('A：この町に何がありますか。 / B：古いお城（　）あります。','が','で','を','まで','Có một lâu đài cổ: 古いお城があります.')]),
('g4-connect',4,1,[
('Chọn “nhưng”: このビルは古いです（　）、きれいです。','が','を','で','に','が nối hai ý tương phản: cũ nhưng đẹp.'),
('Chọn “và”: ここは静かです。（　）、緑が多いです。','そして','どうして','だれと','どのくらい','そして bổ sung một đặc điểm cùng chiều.'),
('Chọn “nhưng”: この料理は辛いです（　）、おいしいです。','が','に','を','の','Giữ dạng lịch sự 辛いです trước từ nối が.')]),
('g4-degree',4,2,[
('私の町は冬、あまり（　）。','寒くないです','寒いです','寒いなです','寒くです','あまり + phủ định = không lạnh lắm.'),
('Chọn “rất”: このメロンは（　）甘いです。','とても','あまり','どんな','どうして','とても + tính từ khẳng định = rất ngọt.'),
('Chọn “hơi”: このコーヒーは（　）苦いです。','少し','あまり','どんな','何時','少し = hơi/một chút; あまり cần dạng phủ định.')]),
('g4-ne',4,2,[
('Hai người cùng ngắm tuyết: 雪はきれいです（　）。Chọn đuôi “nhỉ”.','ね','を','に','で','ね tìm sự đồng tình về điều hai người cùng thấy.'),
('Hai người cùng thấy trời mát: 涼しいです（　）。Chọn đuôi “nhỉ”.','ね','を','と','へ','ね gắn sau câu lịch sự để cùng chia sẻ cảm nhận.'),
('Cùng ăn món ngon: おいしいです（　）。Chọn đuôi “nhỉ”.','ね','に','で','が','です + ね thể hiện tìm sự đồng tình.')]),
('g5-past',5,0,[
('きのう、部屋を（　）。Chọn “đã dọn”.','掃除しました','掃除します','掃除しません','掃除するでした','昨日 là hôm qua; 掃除します → 掃除しました.'),
('先週の日曜日は洗濯を（　）。Chọn “đã không làm”.','しませんでした','しません','します','するません','Quá khứ phủ định lịch sự: しませんでした.'),
('おととい、美術館へ（　）。Chọn “đã đi”.','行きました','行きます','行きません','行くでした','おととい = hôm kia; cần 行きました.')]),
('g5-with',5,0,[
('先週、家族（　）食事しました。Chọn “cùng”.','と','を','の','へ','Người cùng thực hiện hành động dùng と.'),
('Chọn “một mình”: 日曜日、（　）買い物しました。','一人で','一人と','一人を','一人の','一人で = một mình.'),
('Chọn “sau đó”: 昨日、洗濯しました。（　）、ゲームをしました。','それから','どうして','どんな','だれと','それから chỉ trình tự làm việc tiếp theo.')]),
('g5-somewhere',5,0,[
('A：きのう、（　）行きましたか。 / B：はい、デパートへ行きました。Chọn “đâu đó”.','どこかへ','どこへも','だれへ','何を','どこかへ hỏi có đến một nơi nào không.'),
('先週は（　）行きませんでした。Chọn “không đi đâu cả”.','どこへも','どこかへも','だれと','いつに','どこへも + phủ định = không đến bất cứ đâu.'),
('A：週末、どこかへ行きましたか。 / B：いいえ、どこへも（　）。','行きませんでした','行きました','行きます','行きますでした','いいえ và どこへも yêu cầu phủ định; câu đang nói cuối tuần đã qua.')]),
('g5-past-i',5,1,[
('先月の旅行は（　）です。Chọn quá khứ của 楽しい.','楽しかった','楽しいでした','楽しくでした','楽しいだった','楽しい bỏ い + かった → 楽しかった.'),
('昨日の映画は（　）です。Chọn quá khứ phủ định của おもしろい.','おもしろくなかった','おもしろくないでした','おもしろいじゃなかった','おもしろかった','Phủ định quá khứ: bỏ い + くなかった.'),
('去年の冬の天気は（　）です。Chọn quá khứ của いい.','よかった','いいでした','いかった','よいでした','いい → よかった; không phải いかった.')]),
('g5-past-na',5,1,[
('昨日は（　）。Chọn quá khứ của 暇です.','暇でした','暇かったです','暇なでした','暇いでした','暇 là tính từ な, nên 暇でした.'),
('おとといは（　）。Chọn “đã không mưa”.','雨じゃありませんでした','雨くなかったです','雨じゃありません','雨でした','雨 là danh từ; phủ định quá khứ 雨じゃありませんでした.'),
('先週のテストは（　）。Chọn “đã đơn giản”.','簡単でした','簡単かったです','簡単なでした','簡単いです','簡単 là tính từ な; dạng quá khứ là 簡単でした.')]),
('g5-reason',5,1,[
('Chọn “vì”: 風邪でした（　）、山に登りませんでした。','から','まで','を','に','Lý do 風邪でした + から dẫn tới không leo núi.'),
('A：（　）服を買いませんでしたか。 / B：高かったですから。','どうして','どのくらい','どんな','だれを','どうして hỏi lý do; trả lời với から.'),
('忙しかったです（　）、恋人に会いませんでした。Chọn “vì”.','から','まで','の','を','忙しかったですから = vì đã bận.')]),
('g5-want-noun',5,2,[
('私は新しい自転車（　）ほしいです。','が','へ','と','で','Nがほしいです = muốn có đồ vật N.'),
('Chọn “muốn có”: 今、新しいカメラが（　）です。','ほしい','飲みたい','行きたい','会いたい','Muốn sở hữu đồ vật dùng ほしい.'),
('私は車が（　）です。Chọn “không muốn có”.','ほしくない','ほしいじゃない','ほしくません','ほしいくない','ほしい chia như tính từ い: ほしくない.')]),
('g5-like',5,2,[
('私はアニメ（　）好きです。','が','へ','を','で','Đối tượng của 好き đi với が.'),
('私はゲームがあまり（　）。Chọn “không thích lắm”.','好きじゃありません','好きです','好きくないです','好きいです','好き là tính từ な; あまり好きじゃありません.'),
('Chọn “ghét”: 私は苦いコーヒーが（　）です。','嫌い','ほしい','安い','忙しい','嫌い = ghét; đây là tính từ な dù kết thúc bằng い.')]),
('g5-want-verb',5,2,[
('Chọn “muốn chụp”: 景色の写真を（　）です。','撮りたい','撮るたい','撮りますたい','撮りに','撮ります bỏ ます rồi thêm たい.'),
('Chọn “muốn vẽ”: 今度の休みに絵を（　）です。','かきたい','かくたい','かきますたい','かきましたたい','かきます → かきたい; không gắn たい sau thể từ điển.'),
('Chọn “không muốn xem”: 今晩はテレビを（　）です。','見たくない','見たいくない','見たいじゃない','見ますたくない','たい chia phủ định thành たくない.')]),
('g5-purpose',5,2,[
('温泉に（　）行きます。Chọn “đi để ngâm/tắm”.','入りに','入りますに','入るに','入りを','入ります bỏ ます → 入り; mục đích dùng 入りに.'),
('デパートへ服を（　）行きます。','買いに','買いますに','買うに','買いを','買います → 買いに; へ chỉ nơi đến, に chỉ mục đích.'),
('友達に（　）町へ行きます。Chọn “để gặp”.','会いに','会いますに','会うに','会いを','会います → 会いに; 友達に会いに行く.')])
]

extra=[
'''grammar|4|0|g4-duration|Chọn “hai tiếng rưỡi”: 新幹線で（　）です。|二時間半|二時半|二時間を半|二時に半|Khoảng thời gian dùng 時間; 時 là giờ trên đồng hồ.
grammar|4|2|g4-degree|Chọn “không cay lắm”: この料理はあまり（　）。|辛くないです|辛いです|辛かったです|辛いではありません|あまり + phủ định; 辛い → 辛くない.
grammar|5|0|g5-with|昨夜、友達（　）レストラン（　）食事しました。|と・で|に・で|と・を|の・に|と là cùng ai; で là nơi diễn ra việc ăn.
grammar|5|1|g5-past-i|昨日のかばんは（　）です。Chọn quá khứ của 安い.|安かった|安いでした|安くでした|安いかった|安い bỏ い + かった → 安かった.
grammar|5|1|g5-past-na|先週の仕事は（　）。Chọn “đã vất vả”.|大変でした|大変かったです|大変なでした|大変いでした|大変 là tính từ な; quá khứ dùng でした.
grammar|5|2|g5-purpose|日曜日、映画を（　）行きます。|見に|見ますに|見るに|見を|見ます → 見に; dùng gốc trước ます + に行く.
dialogue|4|1|g4-modifier|A：あなたの町は（　）町ですか。 / B：緑が多い町です。|どんな|どのくらい|いつ|だれと|どんな町 hỏi đặc điểm của thị trấn.
dialogue|5|1|g5-past-i|A：昨日の温泉は（　）。 / B：気持ちがよかったです。|どうでしたか|何時ですか|どこへ行きますか|何を買いますか|どうでしたか hỏi cảm nhận về trải nghiệm đã qua.
dialogue|5|2|g5-want-verb|A：あさって、何をしたいですか。 / B：絵を（　）です。|かきたい|かくたい|かきますたい|かきに|Câu hỏi 何をしたい hỏi muốn làm gì; かきたい = muốn vẽ.
translation|4|2|g4-degree|Dịch: Thành phố của tôi vào mùa hè không nóng lắm.|私の町は夏、あまり暑くないです。|私の町は夏、とても暑いです。|私の町は夏、あまり寒くないです。|私の町は冬、あまり暑くないです。|夏 = mùa hè; あまり暑くない = không nóng lắm.
translation|5|0|g5-past|Dịch: Hôm kia tôi đã mua sắm cùng bạn cùng phòng.|おととい、ルームメイトと買い物しました。|あさって、ルームメイトと買い物します。|おととい、ルームメイトに買い物しました。|おととい、ルームメイトと買い物しませんでした。|おととい = hôm kia; と = cùng; しました là quá khứ khẳng định.
translation|5|1|g5-reason|Dịch: Vì trời đã mưa nên tôi đã không ra ngoài.|雨でしたから、出かけませんでした。|雨ですから、出かけます。|雨でしたまで、出かけませんでした。|雨でしたから、出かけました。|Lý do quá khứ 雨でしたから; kết quả phủ định quá khứ 出かけませんでした.''',
'''grammar|4|0|g4-duration|Chọn “khoảng”: 飛行機で三時間（　）です。|くらい|に|を|と|くらい đứng sau thời lượng để nói xấp xỉ.
grammar|4|1|g4-negative|この建物はきれいですか。いいえ、（　）。|きれいじゃありません|きれくないです|きれいくないです|きれかったです|きれい thuộc tính từ な; không chia như tính từ い.
grammar|5|0|g5-with|昨夜、一人で晩ご飯を（　）。Chọn “đã làm”.|作りました|作ります|作りません|作るでした|作ります → 作りました; 一人で = một mình.
grammar|5|1|g5-past-i|去年の旅行は（　）です。Chọn quá khứ phủ định của 楽しい.|楽しくなかった|楽しいくなかった|楽しいじゃなかった|楽しくないでした|Bỏ い + くなかった để nói đã không vui.
grammar|5|1|g5-past-na|あの公園は昨日（　）。Chọn “đã không yên tĩnh”.|静かじゃありませんでした|静かくなかったです|静かなでした|静かじゃありません|Tính từ な phủ định quá khứ dùng じゃありませんでした.
grammar|5|2|g5-want-verb|Chọn “đã muốn uống”: 昨日は冷たい水を（　）です。|飲みたかった|飲みたいでした|飲むたかった|飲みますたかった|飲みたい chia như tính từ い: 飲みたかった.
dialogue|4|0|g4-duration|A：家から駅までどのくらいですか。 / B：（　）。Chọn câu trả lời thời lượng.|歩いて十五分です|歩いて十五時です|歩いて十五人です|歩いて十五円です|分 là phút; 時 là giờ trên đồng hồ; 人 đếm người; 円 là tiền.
dialogue|5|0|g5-somewhere|A：おととい、どこかへ行きましたか。 / B：はい、（　）。|温泉へ行きました|温泉へ行きます|温泉へ行きたいです|温泉へ行きませんでした|Câu hỏi việc đã làm dùng 行きましたか; lời xác nhận dùng quá khứ khẳng định.
dialogue|5|2|g5-want-noun|A：今、何がほしいですか。 / B：（　）。|新しい服がほしいです|新しい服が行きたいです|新しい服が飲みたいです|新しい服が会いたいです|ほしい hỏi vật muốn có; たい hỏi hành động muốn làm.
translation|4|1|g4-connect|Dịch: Thị trấn này nhỏ nhưng nhộn nhịp.|この町は小さいですが、にぎやかです。|この町は大きいですが、にぎやかです。|この町は小さいですから、にぎやかです。|この町は小さいですが、静かです。|小さい = nhỏ; が = nhưng; にぎやか = nhộn nhịp.
translation|5|1|g5-past-i|Dịch: Bài kiểm tra hôm qua đã không khó.|昨日のテストは難しくなかったです。|昨日のテストは難しかったです。|昨日のテストは難しくないでした。|明日のテストは難しくないです。|難しい → 難しくなかった; 昨日 = hôm qua.
translation|5|2|g5-purpose|Dịch: Tôi đến bảo tàng mỹ thuật để xem tranh.|美術館へ絵を見に行きます。|美術館へ絵を見ますに行きます。|美術館で絵を買いに行きます。|美術館へ絵を見たくないです。|Đích đến へ; tân ngữ を; 見に chỉ mục đích đi.''',
'''grammar|4|0|g4-duration|Chọn “từ ga đến lâu đài”: 駅（　）お城（　）歩いて二十分です。|から・まで|まで・から|に・を|で・が|から chỉ điểm xuất phát; まで chỉ điểm kết thúc.
grammar|4|1|g4-modifier|この町に（　）川があります。Chọn “con sông lớn”.|大きい|大きいな|大きく|大きいの|大きい đứng trực tiếp trước danh từ 川.
grammar|5|0|g5-past|今朝、恋人に（　）。Chọn “đã gặp”.|会いました|会います|会いません|会うでした|今朝 ở đây là buổi sáng đã qua; 会いました là đã gặp.
grammar|5|1|g5-past-i|昨日の山は（　）です。Chọn quá khứ của 寒い.|寒かった|寒いでした|寒くでした|寒いなでした|寒い bỏ い + かった → 寒かった.
grammar|5|1|g5-past-na|先月の仕事は（　）。Chọn “đã không đơn giản”.|簡単じゃありませんでした|簡単くなかったです|簡単なかったです|簡単じゃありません|簡単 là tính từ な; phủ định quá khứ dùng じゃありませんでした.
grammar|5|2|g5-like|Chọn phủ định đúng của 嫌いです：嫌い（　）。|じゃありません|くないです|いくないです|なかったです|嫌い là tính từ な; không bỏ đuôi い khi phủ định.
dialogue|4|2|g4-degree|A：この料理はどうですか。 / B：（　）。Chọn “không ngọt lắm”.|あまり甘くないです|とても甘いです|あまり甘いです|甘いくないです|あまり甘くない = không ngọt lắm.
dialogue|5|1|g5-past-na|A：先週の仕事はどうでしたか。 / B：（　）。Chọn “đã vất vả”.|大変でした|大変です|大変かったです|大変なです|どうでしたか hỏi cảm nhận quá khứ; 大変でした là quá khứ tính từ な.
dialogue|5|2|g5-want-verb|A：来年、何をしたいですか。 / B：（　）。Chọn “muốn leo núi”.|山に登りたいです|山に登るたいです|山に登りますたいです|山に登りにです|登ります bỏ ます + たい → 登りたい.
translation|4|1|g4-existence|Dịch: Ở thị trấn này có một nhà thờ cổ.|この町に古い教会があります。|この町で古い教会をあります。|この町に新しい教会があります。|この町に古い教会がありません。|Nơi tồn tại に; sự vật が; 古い = cổ/cũ.
translation|5|0|g5-with|Dịch: Hôm qua tôi đã giặt đồ. Sau đó, tôi đã chơi trò chơi.|昨日、洗濯しました。それから、ゲームをしました。|明日、洗濯します。それから、ゲームをします。|昨日、掃除しました。それから、ゲームをしました。|昨日、洗濯しました。どうして、ゲームをしました。|洗濯 = giặt đồ; それから = sau đó; cả hai việc đều ở quá khứ.
translation|5|2|g5-want-noun|Dịch: Tôi muốn có một chiếc máy ảnh mới.|私は新しいカメラがほしいです。|私は古いカメラがほしいです。|私は新しいカメラがほしくないです。|私は新しいカメラが行きたいです。|新しい = mới; Nがほしいです = muốn có N.'''
]

# Lexical targets are disjoint between variants, with plausible but unambiguous distractors.
lexical=[
'''reading|4|0||Cách đọc của「新幹線」là gì?|しんかんせん|しんがんせん|しんかんぜん|しんかせん|新幹線 = tàu cao tốc Shinkansen, đọc しんかんせん.
reading|4|1||Cách đọc của「温泉」là gì?|おんせん|おんぜん|おうせん|おんさん|温泉（おんせん）= suối nước nóng.
reading|4|2||Cách đọc của「涼しい」là gì?|すずしい|さむしい|すずい|あつしい|涼しい（すずしい）= mát mẻ.
reading|5|0||Cách đọc của「美術館」là gì?|びじゅつかん|びじつかん|びじゅっかん|びしゅつかん|美術館（びじゅつかん）= bảo tàng mỹ thuật.
reading|5|1||Cách đọc của「今朝」là gì?|けさ|こんあさ|いまあさ|きょうあさ|今朝 đọc đặc biệt là けさ: sáng nay.
reading|5|2||Cách đọc của「自転車」là gì?|じてんしゃ|じでんしゃ|じてんじゃ|してんしゃ|自転車（じてんしゃ）= xe đạp.
reading|5|2||Cách đọc của「景色」là gì?|けしき|けいしょく|けしょく|げしき|景色（けしき）= phong cảnh.
spelling|4|0||Chọn chữ Hán cho「ひがし」.|東|西|南|北|東 = đông, đọc ひがし.
spelling|4|1||Chọn chữ Hán cho「じんじゃ」.|神社|会社|社会|教会|神社（じんじゃ）= đền Thần đạo.
spelling|5|0||Chọn chữ Hán cho「せんしゅう」.|先週|今週|来週|毎週|先週（せんしゅう）= tuần trước.
spelling|5|1||Chọn chữ Hán cho「きょねん」.|去年|今年|来年|毎年|去年（きょねん）= năm ngoái.
vocabulary|4|2||Từ nào nghĩa là “chua”?|すっぱい|甘い|辛い|苦い|すっぱい = chua; 甘い ngọt, 辛い cay, 苦い đắng.
vocabulary|5|0||「ルームメイト」nghĩa là gì?|Bạn cùng phòng|Người yêu|Gia đình|Nhân viên cửa hàng|ルームメイト = bạn cùng phòng.
vocabulary|5|2||「借ります」nghĩa là gì?|Mượn|Chụp ảnh|Leo núi|Làm ra|借ります（かります）= vay/mượn.''',
'''reading|4|0||Đọc từ「飛行機」.|ひこうき|びこうき|ひこき|ひごうき|飛行機（ひこうき）= máy bay.
reading|4|1||Đọc từ「教会」.|きょうかい|きょかい|こうかい|きょうがい|教会（きょうかい）= nhà thờ.
reading|4|2||Đọc từ「一年中」.|いちねんじゅう|いちねんちゅう|いっねんじゅう|ひとねんじゅう|一年中（いちねんじゅう）= quanh năm.
reading|5|0||Đọc từ「部屋」.|へや|ぶや|へい|べや|部屋（へや）= căn phòng.
reading|5|1||Đọc từ「晩ご飯」.|ばんごはん|よるごはん|ばんごめし|はんごはん|晩ご飯（ばんごはん）= cơm tối.
reading|5|1||Đọc từ「風邪」.|かぜ|ふうじゃ|かざ|ふじゃ|風邪（かぜ）= cảm/cảm cúm.
reading|5|2||Đọc từ「写真」.|しゃしん|しゃじん|じゃしん|しょしん|写真（しゃしん）= ảnh.
spelling|4|0||Viết「みなみ」bằng chữ Hán.|南|北|東|西|南（みなみ）= phía nam.
spelling|4|1||Viết「みどり」bằng chữ Hán.|緑|線|縁|録|緑（みどり）= màu xanh, cây xanh.
spelling|5|0||Viết「かぞく」bằng chữ Hán.|家族|家旅|家続|家俗|家族（かぞく）= gia đình.
spelling|5|2||Viết「らいねん」bằng chữ Hán.|来年|今年|去年|毎年|来年（らいねん）= sang năm.
vocabulary|4|1||「ところ」nghĩa là gì?|Nơi, chỗ|Phút|Người|Dòng sông|ところ = nơi, chỗ.
vocabulary|4|2||Chọn nghĩa của「冷たい」.|Lạnh khi chạm/uống|Lạnh về thời tiết|Ấm áp về thời tiết|Nóng về thời tiết|冷たい dùng cho vật, nước; 寒い thường dùng cho thời tiết.
vocabulary|5|0||Chọn nghĩa của「食事します」.|Dùng bữa|Giặt đồ|Dọn phòng|Mua sắm|食事します（しょくじします）= dùng bữa.''',
'''reading|4|0||Chọn âm đọc đúng:「電車」.|でんしゃ|てんしゃ|でんじゃ|でんさ|電車（でんしゃ）= tàu điện.
reading|4|1||Chọn âm đọc đúng:「有名」.|ゆうめい|ゆめい|ゆうみょう|うめい|有名（ゆうめい）= nổi tiếng.
reading|4|2||Chọn âm đọc đúng:「暖かい」.|あたたかい|あたかい|あったかいな|あたたがい|暖かい（あたたかい）= ấm áp, thường nói thời tiết.
reading|5|0||Chọn âm đọc đúng:「恋人」.|こいびと|こいひと|れんじん|こびと|恋人（こいびと）= người yêu.
reading|5|1||Chọn âm đọc đúng:「先月」.|せんげつ|せんがつ|せつげん|さきげつ|先月（せんげつ）= tháng trước.
reading|5|1||Chọn âm đọc đúng:「気持ちがいい」.|きもちがいい|きもちがよいな|けもちがいい|きもじがいい|気持ちがいい（きもちがいい）= cảm giác dễ chịu/sảng khoái.
reading|5|2||Chọn âm đọc đúng:「今年」.|ことし|こんねん|きょねん|らいねん|今年 đọc ことし, nghĩa là năm nay.
spelling|4|0||Chọn cách viết của「まんなか」.|真ん中|間ん中|真ん仲|真ん央|真ん中（まんなか）= chính giữa.
spelling|4|1||Chọn cách viết của「やま」.|山|川|田|石|山（やま）= núi.
spelling|5|0||Chọn cách viết của「しゅうまつ」.|週末|週未|周末|週本|週末（しゅうまつ）= cuối tuần.
spelling|5|2||Chọn cách viết của「こんばん」.|今晩|今朝|昨晩|明晩|今晩（こんばん）= tối nay.
vocabulary|4|1||Từ「低い」có nghĩa nào?|Thấp|Cao|Ít|Nhiều|低い（ひくい）= thấp; 少ない = ít.
vocabulary|4|2||Từ「温かい」nói về món ăn có nghĩa nào?|Ấm|Nóng bức|Chua|Đắng|温かい = ấm khi cảm nhận, dùng cho đồ ăn/nước; 暖かい thường dùng cho khí hậu.
vocabulary|5|2||Từ「絵」có nghĩa nào?|Tranh|Phong cảnh|Ảnh chụp|Máy ảnh|絵（え）= tranh; 写真 là ảnh chụp; 景色 là phong cảnh.'''
]

def build():
    sample=rows(sample_text,'sample')
    assert len(sample)==45
    for n,q in enumerate(sample,1):
        if n!=18:
            shot=n+15 if n<=17 or n>=23 else n+14
            q['source']=f'Material/chim-20261020T143204Z-1-001/chim/Screenshot ({shot}).png'
            q['origin']='transcribed'
        else:q['origin']='added'
    exams=[dict(id='material-adapted-01',title='Đề mẫu từ ảnh · bản hiệu đính',description='44 câu từ Material, thêm câu 18 còn thiếu. Có nội dung bài 6 và một số chữ Hán mở rộng; không phải đề giới hạn bài 4–5. Đáp án và giải thích do ứng dụng biên soạn vì ảnh không có đáp án.',lessons=[4,5,6],minutes=45,kind='sample',questions=sample)]
    for v in range(3):
        prefix=f'c45-{v+1}'
        questions=rows(lexical[v],prefix)
        for unit,lesson,topic,variants in grammar_variants:
            prompt,a,b,c,d,why=variants[v]
            q=rows(f'grammar|{lesson}|{topic}|{unit}|{prompt}|{a}|{b}|{c}|{d}|{why}',prefix)[0]
            q['id']=f'{prefix}-{len(questions)+1:02}'
            # Vary correct answer positions for authored grammar rows as well.
            answer=q['options'][q['answer']];shift=len(questions)%4
            q['options']=q['options'][shift:]+q['options'][:shift];q['answer']=q['options'].index(answer)
            questions.append(q)
        tail=rows(extra[v],prefix)
        for q in tail:q['id']=f'{prefix}-{len(questions)+1:02}';questions.append(q)
        assert len(questions)==45
        assert len({q['id'] for q in questions})==45
        assert {q['unit'] for q in questions if q['unit']} >= {g[0] for g in grammar_variants}
        exams.append(dict(id=f'chapter45-{v+1}',title=f'Bài 4–5 · Đề {v+1:02}',description=['Hành trình và ngày nghỉ','Thành phố và trải nghiệm','Mùa, sở thích và kế hoạch'][v]+' · Đủ 19 mục ngữ pháp, 6 topic. Câu mới theo dạng đề ảnh, không dùng mẫu so sánh hay lời rủ của bài 6.',lessons=[4,5],minutes=45,kind='authored',questions=questions))
    # こんねん is a real reading too. Ask specifically for the supplied lesson's reading.
    exams[3]['legacyFingerprints']=[legacy_fingerprint(exams[3])]
    exams[3]['questions'][6]['prompt']='Theo mục từ bài 5 trong PDF, chọn cách đọc của「今年」.'
    attach_solutions(exams)
    from content_corrections import apply
    apply(exams,legacy_fingerprint)
    # Keep the four existing papers byte-for-byte equivalent; the new bank has
    # explicit teaching notes and follows the actual supplied sample matrix.
    from exam67_common import assemble
    from exams67_a import papers as papers_a
    from exams67_b import papers as papers_b
    exams.extend(assemble([*papers_a(), *papers_b()]))
    (ROOT/'data/exams.js').write_text('// Authored exam bank; see EXAM_AUDIT.md and scripts/build_exams.py.\nwindow.DEKIRU_EXAMS = '+json.dumps(exams,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
    print('Built 8 exams x 45 questions: sample 44 + 1 addition, 3 papers lessons 4–5, 4 papers lessons 6–7.')

if __name__=='__main__':build()
