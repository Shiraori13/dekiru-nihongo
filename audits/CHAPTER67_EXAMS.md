# Bốn đề luyện bài 6–7 — 23/10/2026

Vào **Luyện đề → Lọc đề theo bài → Bài 6–7** để chọn Đề 01–04. Mỗi đề có 45 câu, mặc định 45 phút; có thể chọn thời gian khác hoặc không giới hạn. Lượt mới trộn thứ tự câu; tiếp tục bài giữ nguyên thứ tự, lựa chọn, đánh dấu và đồng hồ. Lời giải chỉ mở sau khi nộp, gồm cả câu đúng, sai và bỏ trống.

## Ma trận và phạm vi

Đã đếm trực tiếp `material-adapted-01` chuyển từ ảnh mẫu. Bốn đề mới giữ đúng **ma trận của đề mẫu**, khác phân bố của ba đề bài 4–5 đã biên soạn trước đây:

| Dạng câu | Đề mẫu | Mỗi đề mới bài 6–7 |
|---|---:|---:|
| Đọc chữ Hán | 6 | 6 |
| Chọn cách viết chữ Hán | 8 | 8 |
| Nghĩa từ vựng | 1 | 1 |
| Ngữ pháp | 21 | 21 |
| Hội thoại | 7 | 7 |
| Dịch câu | 2 | 2 |
| **Tổng** | **45** | **45** |

Cả bốn đề phủ đủ **18 mục ngữ pháp và 6 topic** bài 6–7. Các mẫu bài 1–5 chỉ làm kiến thức nền. Không mở rộng sang bài 8 trở đi. Từ vựng đích đối chiếu PDF trang 18–23: bài 6 có 55 mục, bài 7 có 70 mục, tổng **125 mục**. Mỗi đề chọn một phần từ vựng trong ngữ cảnh; không tuyên bố 45 câu kiểm tra riêng hết 125 mục.

| Bài/topic | Nội dung được luyện trong mỗi đề |
|---|---|
| 6 · 一緒に行きませんか | Rủ/nhận lời/từ chối; ませんか／ましょう; sự kiện で…があります, 用事／約束 và vé 枚 |
| 6 · どちらがいいですか | と…とどちら, のほうが, より; phạm vi で…がいちばん |
| 6 · 約束 | もう…ましたか／まだです; Nはどうですか／そうしましょう; よ báo tin, ね xác nhận |
| 7 · 道がわかりません | Đối tượng は địa điểm に; địa điểm に đối tượng が; あります／います và vị trí tương đối |
| 7 · パーティーの準備 | Chia thể て và ngoại lệ; てください; dụng cụ で; gốc ます + 方; どのN／どれ |
| 7 · みんなで楽しいパーティー | ています; đề nghị giúp ましょうか; 誰が; まだあります／もうありません |

Nguồn máy đọc được: [chapter67-matrix.json](chapter67-matrix.json). Toàn bộ 180 ID mới `c67-1-01`…`c67-4-45`, khóa, câu hoàn chỉnh, nghĩa Việt, quy tắc, bốn lời giải và nguồn nằm trong [exams.csv](exams.csv).

## Nội dung và lời giải

Đây là câu hỏi luyện tập **mới biên soạn theo dạng đề mẫu**, không phải đề thi chính thức hoặc bản chép thêm từ ảnh. Mỗi đề dùng các tình huống riêng; không tạo đề bằng cách xáo trộn lại 45 câu của cùng một ngân hàng. Các mục đọc/chọn chữ Hán trong cùng đề dùng từ đích khác nhau. Câu ngữ pháp/hội thoại nêu rõ ý định hoặc nghĩa đích khi nhiều cách nói có thể hợp ngữ pháp.

Lời giải nêu lý do đúng và lý do loại từng lựa chọn, theo nội dung phương án thay vì gán cứng A–D. Bộ ghép dữ liệu di chuyển phương án và giải thích cùng nhau khi phân bố vị trí đáp án. Không dùng dạng giải thích `～のです` hoặc dạng rút gọn khẩu ngữ làm nhiễu sai tuyệt đối chỉ vì nằm ngoài mẫu đang học.

Rà soát chéo trước khi chốt đã sửa `c67-1-24` để bỏ đáp án よ viết sẵn trong hướng dẫn; `c67-2-12` bỏ nhiễu 哥 vì chữ này cũng đọc うた và có nghĩa bài hát ([KanjiPedia](https://www.kanjipedia.jp/kanji/0000672100)). Các trường hợp diễn đạt được nhưng khác nghĩa đích được giải thích theo ngữ cảnh, như `どの旅行の写真` ở `c67-4-22`; không tuyên bố chúng luôn sai ngữ pháp. Một topic có thể nối sang trang kế tiếp: nguồn `全部` được gán đúng trang 20 thay vì suy trang bằng chỉ số topic.

Đối chiếu [PDF từ vựng](../sources/new-words.pdf#page=18), [PDF speaking](../sources/speaking.pdf#page=43) và 18 mục trong `data/grammar.js`. Đáp án được rà soát theo cấu trúc, ngữ cảnh và nguồn soạn; chưa có khóa chính thức hoặc giáo viên duyệt độc lập toàn bộ câu, bản dịch và sắc thái. Kiểm thử dùng khóa đang lưu để duyệt giao diện không được coi là chứng minh nội dung khóa đúng. Các fixture và đối chiếu từ đích độc lập được kiểm tra riêng.

## Bảo toàn bài cũ và cách tái tạo

Ngân hàng tăng **4 → 8 đề, 180 → 360 câu**. Bốn đề cũ giữ nguyên ID, nội dung và dấu nhận diện; bài đang làm/lịch sử còn tương thích không cần di chuyển hay bắt đầu lại. Chọn bộ lọc mới không thay bài đang làm. Thẻ tiếp tục vẫn hiện khi lọc sang nhóm khác. Lưu nhiều tab, hết giờ, nhập/xuất JSON và ảnh dùng chung cơ chế hiện hành.

Nguồn mới: `scripts/exams67_a.py`, `scripts/exams67_b.py`; quy tắc/kiểm tra ghép đề: `scripts/exam67_common.py`. Tái tạo:

```powershell
python scripts/build_exams.py
node scripts/audit_data.js
node tests/check_logic.js
node tests/check_chapter67.js
python tests/run_checks.py check_chapter67.py check_exams.py check_exam_shuffle.py
```

Không cần chạy build khi học. `data/exams.js` được nạp theo yêu cầu bằng script cổ điển, dùng được qua HTTP/GitHub Pages và mở trực tiếp `index.html`. Không thêm dịch vụ ngoài hoặc dependency runtime.

## Kiểm thử

Log và ảnh của lần bổ sung này nằm trong [evidence/chapter67](evidence/chapter67/README.md). Kiểm tra ma trận, phủ bài/topic/mục, 180 ID mới, khác biệt đề, đọc/viết theo danh sách từ, ánh xạ bốn giải thích, kết quả kỳ vọng độc lập, bảo toàn bốn đề cũ, font, bộ lọc, nộp/xem lời giải, tải lại, xáo trộn, lịch sử và xuất/nhập. Phạm vi trình duyệt/thao tác đã chạy được ghi đúng trong log; không suy rộng sang các thiết bị chưa kiểm tra.
