# Audit đáp án — 22–23/10/2026

Phạm vi hiện tại: **921 thẻ, 71 bài đọc, 37 mục / 666 bài ngữ pháp, 8 đề / 360 câu**. Lượt bổ sung sau audit ban đầu thêm **4 đề / 180 câu chuyên bài 6–7** theo yêu cầu, bám đúng ma trận đề mẫu; bốn đề cũ giữ nguyên. [Ma trận, nguồn và kiểm thử phần mới](CHAPTER67_EXAMS.md). Audit ban đầu so sánh workspace tại `8409b6c`, bao gồm phần mobile chưa commit.

## Cách đọc kết quả

- [vocabulary.csv](vocabulary.csv): 921 ID `v-000`…`v-920`, bài/topic, mặt chữ, cách đọc, nghĩa, nhóm nghĩa và trang PDF.
- [grammar.csv](grammar.csv): toàn bộ 666 ID, đề bài, lựa chọn/mảnh ghép, đáp án chấp nhận, giải thích, nguồn, quyết định và phần cần xác minh.
- [exams.csv](exams.csv): toàn bộ 360 ID, vị trí gốc, khóa 0–3/A–D, câu hoàn chỉnh, nghĩa Việt, quy tắc, bốn giải thích, nguồn và trạng thái. ID `c67-*` là 180 câu mới bài 6–7.
- [content-decisions.json](content-decisions.json): các quyết định sửa cụ thể; nguồn tái tạo đề đọc trực tiếp file này.

`structure: pass` chỉ xác nhận định dạng, liên kết ID, đáp án nằm trong lựa chọn, mảnh ghép đầy đủ và ánh xạ lời giải. `rule-reviewed` nghĩa là đã rà soát nội dung theo mẫu/ngữ cảnh và nguồn soạn trong repo. `pdf-headword-matched` đối chiếu thêm mục từ/cách đọc trong PDF. **Các nhãn này không phải chứng nhận khóa đáp án chính thức hoặc xác nhận của giáo viên.** Cột `pending` ghi giới hạn cho từng câu. Các đề ảnh không có khóa; câu bổ sung do ứng dụng biên soạn.

Đã rà soát các ngân hàng sinh câu của 37 mục, 33 câu điền, các mảnh ghép/biến thể và đủ 180 dòng đề đã mở rộng, gồm từng lựa chọn/lời giải. Kiểm thử dùng khóa đang lưu để đi qua toàn bộ giao diện được giữ để kiểm tra ánh xạ; bằng chứng đó **không** được dùng để kết luận nội dung khóa đúng. Các fixture kỳ vọng độc lập nằm trong `tests/check_logic.js`.

## Các vấn đề sửa

| ID / phạm vi | Vấn đề | Quyết định |
|---|---|---|
| `v-044`, `v-107` — 料理 | Đảo thứ tự hai nghĩa tạo phương án nhiễu và chấm sai | Nhóm `cooking-dish` có hai nhãn đã duyệt; loại nghĩa trùng/tương đương khỏi nhiễu và dùng cùng quy tắc khi chấm/xem lại |
| Nhóm 教師/先生, 入ります, あまり, います… | Khác cách diễn đạt Việt nhưng trùng nghĩa | Khai báo nhóm rõ ràng trong `data/meaning-groups.js`; không suy đoán bằng cách bỏ dấu/sắp từ |
| 聞きます, します, かけます, よく, できます; 降ります | Cùng mặt chữ nhưng khác nghĩa/cách đọc/ngữ cảnh | Giữ riêng mục và nghĩa; câu hỏi hiện cách đọc, bài/topic, trang nguồn. Không lấy nghĩa khác của cùng mặt chữ làm nhiễu cho câu hỏi từ đơn |
| Thẻ/thiệp, cơm/gạo, từ gần nghĩa | Có phần giao nhau nhưng không tương đương toàn bộ | Tách nhóm đáp án; dùng `facets` chỉ để loại nhiễu gây tranh cãi. Không dùng giao nhau làm điều kiện chấm đúng |
| 午前/朝, 食べます/食事します, các nghĩa mặc/đeo/treo, gọi/gọi điện, làm/cho… | Hai nhãn chia sẻ một phần nghĩa nhưng phạm vi/ngữ cảnh khác nhau | Chỉ liên kết facet để loại nhiễu; không chấp nhận chéo toàn bộ nghĩa. Có fixture phủ định độc lập cho từng cặp |
| Các câu `practice-g4-degree-*-choice` bị đổi nhiễu | `Aいのです` là dạng giải thích hợp ngữ pháp | Thay nhiễu; giữ đáp án đúng, số câu và mục ngữ pháp |
| `practice-g4-adjective-{1,3,6,7}-choice` | `高いのです`/`古いのです`/`低いのです`/`新しいのです` vẫn hợp nghĩa đích | Bỏ phương án nhiễu có の giải thích; fixture độc lập kiểm tra từng ID |
| `g5-want-verb-choice`, `practice-g5-want-verb-{0,2,3,4,6}-choice` | Dạng `～てたい` có thể là rút gọn của `～ていたい`, không phải luôn sai | Thay bằng biến hình sai rõ ràng, giữ mẫu mong muốn `V bỏ ます + たい` |
| `practice-g6-invite-2-choice-v3`, `practice-g6-invite-5-choice`, `practice-g6-suggest-3-choice`, `practice-g7-offer-{0…7}-choice` | `～てましょう(か)` có cách hiểu rút gọn mang thể tiếp diễn/duy trì | Bỏ nhiễu khẩu ngữ có nghĩa hợp lệ; giữ đáp án mẫu chuẩn và giải thích trong phạm vi bài |
| `form-2`, `form-8`, `form-9` | Thiếu biến thể Kanji/ではないです hoặc lời dẫn không khớp danh sách nhận | Bổ sung dạng khai báo, làm rõ yêu cầu dạng lịch sự |
| `practice-g6-best-6-order-v2` | Phạm vi 季節で với いつ thiếu tự nhiên | Dùng 一年で, giữ câu hỏi về thời điểm trong năm |
| `practice-g7-how-0-order-v2` | Cách viết し方 chưa nhất quán | Chuẩn hóa 仕方, bổ sung cách đọc từ gợi ý |
| `sample-10`, `sample-24`, `sample-35` | Nhiều lựa chọn có thể hợp ngữ cảnh hoặc lượng từ chung | Nêu rõ nghĩa đích/cách phản hồi/lượng từ vật mỏng phẳng |
| `sample-18` | 十分 cũng có cách đọc/nghĩa “đủ” | Viết `10分` để rõ thời lượng |
| `sample-19`, `c45-2-17` | Nhiễu vẫn có cách dùng đúng (`のほうは`, `高いのです`) | Thay nhiễu, không tuyên bố các cấu trúc đó luôn sai |
| `sample-17`, `c45-1-25` | Giải thích nói sai trợ từ so với lựa chọn thực tế | Gán lý do theo nội dung phương án, cập nhật đúng từng vị trí A–D |
| `c45-1-07`, `c45-2-06`, `c45-3-07` | 景色/風邪/今年 có cách đọc khác ngoài mục từ sơ cấp | Câu hỏi giới hạn rõ cách đọc trong PDF; lời giải thừa nhận các cách đọc khác |

## Nguồn và giới hạn

PDF từ vựng trang 12–23 và PDF speaking trang 5–8, 10–76 dùng đối chiếu phạm vi/mẫu liên quan. PDF từ vựng không phải giáo trình ngữ pháp đầy đủ. Bản speaking phần lớn là ảnh; bản chép trong `data/readings-source.txt` hỗ trợ tra cứu. Nguồn soạn câu, nghĩa Việt và lời giải là các file `data/grammar*.js`, `scripts/build_exams.py`, `scripts/exam_solutions.py`.

- [Đề cương chính thức Dekiru](https://www.dekirunihongo.jp/?page_id=100): phân loại chapter/topic; không cung cấp khóa cho câu biên soạn.
- [Japan Foundation — のだ／んだ](https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201006.html): cấu trúc giải thích có thật. Trang đầy đủ trả HTTP 503 khi mở trong lần audit; phần chỉ mục tìm kiếm đọc được. Đối chiếu thêm [Kyoto University — んです](https://www.samidori.k.kyoto-u.ac.jp/study/exam?id=143) về tính từ い + んです. Không lấy “không cần の” làm lý do chấm sai một câu vẫn hợp ngữ pháp.
- [NINJAL — 景色](https://mmsrv.ninjal.ac.jp/kamus/data/item1597.html) và [mục từ điển 景色](https://kotobank.jp/word/景色-488813): けしき trong từ vựng cơ bản; từ điển còn ghi けいしょく.
- [NINJAL — 今年](https://mmsrv.ninjal.ac.jp/kamus/data/item1864.html): ことし và cách đọc trang trọng こんねん.
- [Từ điển 風邪](https://kotobank.jp/word/風邪-44719), [Kanji Bunka — 風邪](https://kanjibunka.com/kanji-faq/mean/q0137/): phân biệt cách đọc cơ bản và lịch sử. Không đưa giải thích y học vào nội dung ôn.
- [TUFS — tính từ bổ nghĩa danh từ](https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c02/lesson19/step1/explanation/035.html) và [Japan Foundation — tài liệu dạy tính từ](https://www.jpf.go.jp/j/urawa/j_rsorcs/methods/dl/grammar_u2_01.pdf).
- [Nghiên cứu về dạng rút gọn ている／てる](https://doi.org/10.19024/jajls.28.1_262): cơ sở hiện tượng lược い. Việc áp dụng để loại nhiễu `～てたい`/`～てましょう` là suy luận ngữ pháp/ngữ cảnh; không coi nghiên cứu này là khóa đáp án cho từng câu. Trường `sourceBasis` của quyết định ghi rõ giới hạn đó.

Còn cần giáo viên duyệt độc lập độ tự nhiên/sắc thái hội thoại, bản dịch và độ đầy đủ của các trật tự ghép chấp nhận. Các biến thể ghép được khai báo có dùng đủ mảnh; không khẳng định đã bao phủ mọi câu tự nhiên có thể tạo. Những mục từ mở rộng trong đề ảnh chưa có đối chiếu từ điển riêng đều được đánh dấu trong CSV.

## Bài đã lưu

Ngữ pháp lưu dấu nhận diện từng câu và thứ tự phương án; đổi nội dung chỉ bỏ câu trả lời không còn tương thích. Hai câu đổi mảnh ghép có danh sách bảo vệ riêng cho phiên v1 chưa có dấu nhận diện. Không giữ một điểm tổng cũ rồi chấm theo câu đã đổi.

Luyện đề dùng `migrations` từ dấu nhận diện cũ đến danh sách chỉ số câu gốc đã đổi. Bài chưa nộp giữ hoán vị, thời gian, vị trí và đáp án còn tương thích; chỉ các câu thay đề bài/phương án cần trả lời lại. Lịch sử không còn khớp nội dung không được chấm lại bằng khóa mới; ứng dụng thông báo đã bỏ kết quả không tương thích. Chỉ sửa ghi chú giải thích không xóa đáp án. Đề nhập vẫn giữ schema `dekiru-exam`, version 1.

Tái tạo đề: `python scripts/build_exams.py`. Kiểm tra: `node tests/check_logic.js`. Tái tạo bảng audit: `node scripts/audit_data.js`.
