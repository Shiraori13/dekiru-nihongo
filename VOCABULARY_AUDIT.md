# Đối chiếu từ vựng Dekiru Nihongo

Nguồn: `sources/new-words.pdf` (45 trang). Đối chiếu 15 bài, 45 chủ đề với dữ liệu cũ trong `index - Back_up.html`.

Đơn vị đếm là thẻ từ/cụm từ theo bài và chủ đề. Một từ có thể xuất hiện ở nhiều bài. Cặp ここ／こちら được tách thành hai thẻ. Các câu ví dụ minh họa trong PDF không tính là đầu mục từ vựng; thẻ câu ví dụ có sẵn ở bài 1 được giữ lại.

| Bài | Trước | Sau | Bổ sung | Trang PDF |
|---|---:|---:|---:|---|
| 1 | 48 | 48 | 0 | 2–3 |
| 2 | 77 | 81 | 4 | 4–7 |
| 3 | 73 | 78 | 5 | 8–11 |
| 4 | 52 | 68 | 16 | 12–14 |
| 5 | 34 | 59 | 25 | 15–17 |
| 6 | 22 | 55 | 33 | 18–20 |
| 7 | 28 | 70 | 42 | 21–23 |
| 8 | 27 | 81 | 54 | 24–27 |
| 9 | 17 | 61 | 44 | 28–30 |
| 10 | 20 | 69 | 49 | 31–33 |
| 11 | 15 | 49 | 34 | 34–35 |
| 12 | 15 | 51 | 36 | 36–38 |
| 13 | 10 | 40 | 30 | 39–40 |
| 14 | 15 | 63 | 48 | 41–43 |
| 15 | 22 | 48 | 26 | 44–45 |

Tổng: **475 → 921 thẻ (+446)**. Riêng bài 4–8: **163 → 333 thẻ (+170)**.

## Các chủ đề bài 4–8

| Bài | Chủ đề | Số thẻ |
|---|---|---:|
| 4 | どこ? | 17 |
| 4 | どんなところ? | 27 |
| 4 | 季節・料理 | 24 |
| 5 | 週末 | 25 |
| 5 | 休みの後で | 20 |
| 5 | 今度の休みに | 14 |
| 6 | 一緒に行きませんか | 24 |
| 6 | どちらがいいですか | 23 |
| 6 | 約束 | 8 |
| 7 | 道がわかりません | 20 |
| 7 | パーティーの準備 | 34 |
| 7 | みんなで楽しいパーティー | 16 |
| 8 | 家族・友達 | 30 |
| 8 | こんな人 | 28 |
| 8 | プレゼント | 23 |

## Chỉnh sửa nội dung

- Bổ sung các đầu mục thiếu, gồm danh từ, trạng từ, từ chỉ định, biểu thức giao tiếp và nghĩa riêng theo từng chủ đề.
- Khôi phục chủ đề bài 11 `今の私・前の私` theo PDF; đồng bộ dấu câu trong tên các chủ đề.
- Sửa `こちらこそ`: “Tôi cũng vậy”, thay cho “Chính tôi mới cần giúp đỡ”.
- Sửa `兄弟`: anh chị em; `観覧車`: vòng đu quay; `亡くなります`: qua đời; `中止`: hủy/dừng.
- Làm rõ `何も`, `どこ(へ)も` khi dùng với phủ định; `以上`, `以下` bao gồm mốc được nêu.
- Sửa lỗi của PDF: `携帯電話` → `けいたいでんわ`; `入院します` → `にゅういんします`; `迷惑(な)` → `めいわく(な)`; `料金` → phí/cước.
- Phân biệt それ／その (gần người nghe) và あれ／あの (xa cả hai). Giữ chữ Hán quen dùng từ bản cũ, ví dụ 靴／くつ, để tránh thẻ trùng chỉ do khác cách viết.
- Giữ tên `私の集合` của chủ đề bài 10 theo bản PDF cung cấp. Tên này trong tài liệu có vẻ bất thường; chưa thay bằng một tên suy đoán.
- Mỗi thẻ có trường `p` là số trang nguồn và được hiển thị trong tab Danh sách.

## Luyện đọc

- Nguồn: `sources/speaking.pdf`, 76 trang. Có **71 mục nội dung**; bỏ 5 trang bìa/phân phần: 1, 9, 25, 42, 59.
- 7 đoạn văn ở trang 2–8; 64 bài hội thoại/câu luyện ở trang 10–24, 26–41, 43–58, 60–76.
- Mỗi mục dẫn đến đúng trang PDF. Tiêu đề tiếng Việt và tiêu đề Nhật cho các bài hội thoại do người triển khai đặt để dễ tìm.
- Văn bản được chép từ ảnh; chuẩn hóa khoảng trắng, dấu câu và chữ số. Giữ các câu trả lời thay thế trong bài tập.
- Gợi ý số, tên riêng và trợ từ theo ngữ cảnh: 4時＝よじ, 9時＝くじ, 姫路城＝ひめじじょう, 高尾山＝たかおさん; trợ từ は／へ／を đọc wa/e/o.
- Gợi ý cách đọc và nghĩa tiếng Việt là phần bổ sung. Có thể mở PDF để xem nguyên bản.

## Kiểm tra

`tests/check_app.py` kiểm tra 15 bài/45 chủ đề, toàn bộ 71 mục đọc, quiz, tra nghĩa, gợi ý, bộ lọc, lưu tiến độ, dữ liệu lưu bị hỏng/bị chặn, giao diện sáng/tối và màn hình 320/390 px, kể cả cỡ chữ 34.

`tests/check_interactions.py` kiểm tra 921 flashcard trên màn hình 320 px khi không có mạng, trạng thái tìm kiếm rỗng khi đang lật thẻ, lật bằng bàn phím, giọng đọc tải chậm, đọc nối tiếp, dừng/đổi bài/đổi tab, xử lý lỗi và sự kiện âm thanh trả về trễ. Phần âm thanh dùng giả lập để kiểm tra logic.

Giọng đọc thật phụ thuộc thiết bị. Nếu chưa có giọng Nhật, nút nghe bị vô hiệu hóa và hiển thị hướng dẫn; các chức năng đọc vẫn dùng được.

## Hán tự và số câu tự nhập (bổ sung 25/09/2026)

- Tách 607 mục từ có chữ Hán từ 921 thẻ; không tính câu ví dụ riêng của bản cũ. Tổng cộng 496 chữ khác nhau.
- Số mục từ theo bài 1–15: **29, 30, 56, 51, 48, 31, 48, 61, 40, 46, 31, 39, 25, 35, 37**. Một từ có thể xuất hiện ở nhiều bài/chủ đề; các lần xuất hiện giữ riêng nghĩa và trang nguồn.
- Mỗi mục giữ nguyên bài, chủ đề, cách đọc và nghĩa trong bộ từ đã đối chiếu; bổ sung cách viết gốc trong PDF. Bốn mục có chữ Hán bổ sung cho kana được ghi rõ, xem [nguồn Hán tự](sources/kanji/README.md).
- Âm Hán Việt, nghĩa gợi nhớ từng chữ và ghi chú học từ là nội dung bổ sung; PDF không chứa các phần này. Các âm On/Kun tham khảo từ KANJIDIC2; nét viết từ KanjiVG. 496/496 hình chữ có số đường nét khớp số nét trong KANJIDIC2.
- Có mô phỏng nét, tiến/lùi từng nét, chọn tốc độ, số thứ tự, ô tập viết tự do, hoàn tác/xóa, chữ mờ và tiến độ đã học. Viết mẫu dừng khi đổi chữ/từ/tab; giảm chuyển động theo tùy chọn của thiết bị.
- Quiz cho nhập số nguyên từ 1 đến số từ được lọc, có thông báo lỗi cho ô trống/số âm/số lẻ/vượt giới hạn. Đáp án nhiễu lấy từ kho chung nên phạm vi chỉ có một từ vẫn kiểm tra được.
- Bổ sung thanh tiến trình cho cả hai cách làm bài: chấm từng câu hoặc nộp toàn bài. Đề và đáp án lựa chọn được tạo một lần, giữ nguyên khi quay lại câu trước hoặc chuyển tab.
- Chế độ nộp toàn bài không báo đúng/sai trước khi nộp. Kết quả hiển thị từng câu, đánh dấu lựa chọn sai, đáp án đúng và câu bỏ trống; có lọc các câu cần ôn lại. Điểm đúng mỗi câu là 10, câu sai/bỏ trống là 0; tỷ lệ đúng tính trên toàn bộ đề.
