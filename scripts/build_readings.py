import sys,re,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
(ROOT/'.work').mkdir(exist_ok=True)
import pykakasi
kakasi=pykakasi.kakasi()
vocab=json.loads((ROOT/'data/vocabulary.js').read_text(encoding='utf-8').split('const RAW_VOCAB = ',1)[1].strip().removesuffix(';'))
lex={}
def hira(s):return ''.join(chr(ord(c)-96) if 'ァ'<=c<='ヶ' else c for c in s)
def add(k,h,m,grammar=False):
    if not k or '～' in k:return
    h=hira(h)
    r=' '.join(x['hepburn'] for x in kakasi.convert(h))
    kind='kanji' if re.search(r'[一-龥々0-9]',k) else 'katakana' if re.search(r'[ァ-ヺー]',k) else 'hiragana'
    lex[k]=dict(k=k,h=h,r=r,m=m,kind=kind,grammar=grammar)
for d in reversed(vocab):
    if d.get('example'):continue
    k=d['k'];h=d['h']
    for remove in [False,True]:
        kk=re.sub(r'\((.*?)\)',lambda m:'' if remove or m[1]=='な' else m[1],k)
        hh=re.sub(r'\((.*?)\)',lambda m:'' if remove or m[1]=='な' else m[1],h)
        if '/' in hh:hh=hh.split('/')[0]
        add(kk.rstrip('。'),hh.rstrip('。'),d['m'])
    if k.endswith('ます'):
        stem=k[:-2];hs=h[:-2]
        for suffix in ['ました','ません','ませんでした','ましょう','ましょうか','たい','たいです']:
            add(stem+suffix,hs+suffix,d['m']+' (biến thể của '+k+')')
    if k.endswith('い') and len(k)>1:
        for ending in ['くない','かった','くなかった']:
            add(k[:-1]+ending,h[:-1]+ending,d['m']+' (biến thể của '+k+')')
for line in '''
映画|えいが|Phim, điện ảnh
韓国人|かんこくじん|Người Hàn Quốc
日本語|にほんご|Tiếng Nhật
国|くに|Đất nước
お国|おくに|Đất nước của bạn (lịch sự)
家|いえ|Nhà, ngôi nhà
店|みせ|Cửa hàng
パン屋|ぱんや|Tiệm bánh mì
本屋|ほんや|Hiệu sách
月曜日|げつようび|Thứ hai
金曜日|きんようび|Thứ sáu
水曜日|すいようび|Thứ tư
土曜日|どようび|Thứ bảy
日曜日|にちようび|Chủ nhật
26歳|にじゅうろくさい|26 tuổi
1つ|ひとつ|Một cái
200円|にひゃくえん|200 yên
9時|くじ|9 giờ
12時半|じゅうにじはん|12 giờ rưỡi
4時|よじ|4 giờ
8時|はちじ|8 giờ
5時|ごじ|5 giờ
何時|なんじ|Mấy giờ
2月|にがつ|Tháng hai
6月|ろくがつ|Tháng sáu
7月|しちがつ|Tháng bảy
8月|はちがつ|Tháng tám
1日|いちにち|Một ngày
1週間|いっしゅうかん|Một tuần
6時間|ろくじかん|Sáu tiếng
4時間|よじかん|Bốn tiếng
1時間半|いちじかんはん|Một tiếng rưỡi
5分|ごふん|Năm phút
30分|さんじゅっぷん|Ba mươi phút
2枚|にまい|Hai tấm (vé)
東京|とうきょう|Tokyo
大阪|おおさか|Osaka
京都|きょうと|Kyoto
沖縄|おきなわ|Okinawa
箱根|はこね|Hakone
姫路城|ひめじじょう|Lâu đài Himeji
高尾山|たかおさん|Núi Takao
新宿|しんじゅく|Shinjuku
渋谷|しぶや|Shibuya
横浜|よこはま|Yokohama
鶏肉|とりにく|Thịt gà
作り方|つくりかた|Cách làm, cách nấu
バス停|ばすてい|Trạm xe buýt
誰|だれ|Ai
皆さん|みなさん|Mọi người
祭り|まつり|Lễ hội
お城|おしろ|Lâu đài
お寺|おてら|Chùa
お皿|おさら|Đĩa
名前|なまえ|Tên
お酒|おさけ|Rượu
お弁当|おべんとう|Cơm hộp
買い物|かいもの|Mua sắm
食事|しょくじ|Bữa ăn, việc ăn uống
勉強|べんきょう|Học tập
気持ち|きもち|Cảm giác, tâm trạng
来て|きて|Đến (thể て của 来ます)
作って|つくって|Làm, nấu (thể て của 作ります)
教えて|おしえて|Chỉ, dạy (thể て của 教えます)
洗って|あらって|Rửa (thể て của 洗います)
取って|とって|Lấy (thể て của 取ります)
書いて|かいて|Viết (thể て của 書きます)
かけて|かけて|Gọi (điện thoại; thể て)
行き|いき|Đi (thân động từ 行きます)
見|み|Xem (thân động từ 見ます)
食べ|たべ|Ăn (thân động từ 食べます)
飲み|のみ|Uống (thân động từ 飲みます)
パク|ぱく|Pak (tên người)
ワン|わん|Wang (tên người)
あおぞら|あおぞら|Aozora (tên trường)
クプクプ|くぷくぷ|Kupu Kupu (tên tiệm bánh)
フィレンツェ|ふぃれんつぇ|Florence (thành phố ở Ý)
シドニー|しどにー|Sydney
アユタヤ|あゆたや|Ayutthaya (Thái Lan)
バンコク|ばんこく|Bangkok
サムゲタン|さむげたん|Canh gà hầm sâm Hàn Quốc
さむげたん|さむげたん|Nhắc lại tên món samgyetang
ソース|そーす|Nước xốt
アパート|あぱーと|Căn hộ, khu nhà trọ
サカイ電器|さかいでんき|Sakai Denki (tên cửa hàng điện máy)
ニコニコ映画館|にこにこえいがかん|Rạp phim Nikoniko
ふじ映画館|ふじえいがかん|Rạp phim Fuji
にじまるランド|にじまるらんど|Nijimaru Land (tên khu vui chơi)
よろしくお願いします|よろしくおねがいします|Rất mong được giúp đỡ (lời chào)
お願いします|おねがいします|Làm ơn, nhờ bạn
どうぞ|どうぞ|Xin mời
ありがとうございます|ありがとうございます|Cảm ơn (lịch sự)
どうも|どうも|Cảm ơn (ngắn gọn)
そうですか|そうですか|Thế à?
そうですね|そうですね|Đúng vậy nhỉ
いいですね|いいですね|Hay đấy, tốt quá nhỉ
よかった|よかった|Đã tốt, đẹp (quá khứ của いい)
どこ|どこ|Ở đâu
どの|どの|Cái ～ nào (đứng trước danh từ)
この|この|Cái ～ này
その|その|Cái ～ đó
あの|あの|Cái ～ kia
くらい|くらい|Khoảng
ほう|ほう|Phía, bên (dùng khi so sánh)
はい|はい|Vâng
いいえ|いいえ|Không
ちょっと|ちょっと|Hơi… (từ chối khéo trong lời mời)
おもしろい|おもしろい|Thú vị, hay
じゃ|じゃ|Vậy thì
何|なに|Cái gì (なに; trước ですか đọc なん)
何ですか|なんですか|Là gì vậy?
うち|うち|Nhà (của mình)
あ|あ|A, à (cảm thán)
どこへも|どこえも|Đâu cũng (đi với phủ định: không đi đâu cả)
はし|はし|Đũa
'''.strip().splitlines():
    k,h,m=line.split('|');add(k,h,m)
for line in '''
は|わ|Trợ từ chủ đề; viết は nhưng đọc wa
へ|え|Trợ từ chỉ hướng; viết へ nhưng đọc e
を|お|Trợ từ chỉ tân ngữ; đọc o
が|が|Trợ từ chỉ chủ ngữ, đối tượng của 好き
の|の|Nối hai danh từ; của
に|に|Chỉ thời điểm, nơi tồn tại hoặc đích đến
で|で|Chỉ nơi diễn ra hành động hoặc phương tiện
と|と|Và; cùng với; dùng khi so sánh
も|も|Cũng
や|や|Và… (liệt kê không hết)
から|から|Từ; vì, bởi vì
まで|まで|Đến, cho đến
より|より|Hơn (mốc so sánh)
など|など|Vân vân
か|か|Trợ từ nghi vấn
ね|ね|Nhỉ, nhé (xác nhận, đồng tình)
よ|よ|Đấy (cung cấp thông tin)
な|な|Nối tính từ な với danh từ
です|です|Đuôi câu lịch sự
でした|でした|Quá khứ lịch sự của です
ですが|ですが|… nhưng …
ですから|ですから|Vì …
じゃありません|じゃありません|Không phải, không (phủ định lịch sự)
じゃありませんでした|じゃありませんでした|Đã không (phủ định quá khứ)
どうでしたか|どうでしたか|Đã thế nào? (hỏi cảm nhận)
しています|しています|Đang làm
していますか|していますか|Đang làm gì? (dạng câu hỏi)
います|います|Có (người/động vật); ～ています chỉ hành động đang diễn ra
ください|ください|Xin hãy… (sau thể て)
したい|したい|Muốn làm
さん|さん|Cách gọi lịch sự sau tên người
ん|ん|Âm mũi n
'''.strip().splitlines():
    k,h,m=line.split('|');add(k,h,m,True)
for k in ['は','へ','を']:lex[k]['r']={'は':'wa','へ':'e','を':'o'}[k]
for k in ['どうぞよろしくお願いします','よろしくお願いします']:
    lex.pop(k,None)
add('よろしく','よろしく','Rất mong (dùng trong lời chào, nhờ giúp đỡ)')
lex['フィレンツェ']['r']='firentse'
lex['パーティー']['r']='paatii'
# All lexical matches are longest-first, so complete words win over particles.
keys=sorted(lex,key=len,reverse=True)
readings=[];unknown=set();used={};dictionary=[]
def tokenize(text):
    tokens=[];i=0
    while i<len(text):
        key=next((k for k in keys if text.startswith(k,i)
            and not (k=='はい' and text.startswith('はいい',i))
            and not (k=='のど' and text.startswith('のどこ',i))
            and not (k=='それで' and text.startswith('それです',i))),None)
        if key:
            if key not in used:used[key]=len(dictionary);dictionary.append(lex[key])
            tokens.append(used[key]);i+=len(key)
        else:
            c=text[i];tokens.append(c);i+=1
            if re.match(r'[ぁ-龥ァ-ヺ0-9]',c):unknown.add(c)
    return tokens
for block in (ROOT/'data/readings-source.txt').read_text(encoding='utf-8').split('\n@')[1:]:
    head,*lines=block.strip().splitlines()
    page,lesson,kind,title,jp=head.split('|')
    readings.append(dict(id='reading-'+page,page=int(page),lesson=int(lesson),kind=kind,title=title,jp=jp,blocks=[tokenize(s) for s in lines]))
if unknown: raise ValueError(f'Unannotated Japanese characters: {unknown}')
(ROOT/'data/readings.js').write_text('// Transcribed from the supplied speaking PDF; token readings reviewed separately.\nconst READING_LEXICON = '+json.dumps(dictionary,ensure_ascii=False,indent=2)+';\nconst READINGS = '+json.dumps(readings,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Readings',len(readings),'lexicon',len(dictionary),'unknown',unknown)
(ROOT/'.work/reading-check.txt').write_text('\n'.join(f"p{r['page']}: "+' / '.join(' '.join(f"{dictionary[t]['k']}[{dictionary[t]['h']}]" if isinstance(t,int) else t for t in b) for b in r['blocks']) for r in readings),encoding='utf-8')
