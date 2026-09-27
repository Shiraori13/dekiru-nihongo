# Dekiru Master

Website: https://shiraori13.github.io/dekiru-nihongo/

Mở `index.html` bằng trình duyệt để học từ vựng và luyện đọc. Giữ các thư mục `assets`, `data`, `sources` cùng cấp với file HTML khi sao chép hoặc đưa lên hosting. `index - Back_up.html` là bản cũ được giữ nguyên tại máy, không đưa lên repo.

- **Thẻ ghi nhớ / Kiểm tra / Danh sách:** 921 thẻ, 15 bài, 45 chủ đề. Bộ lọc và tìm kiếm tiếng Việt không dấu.
- **Luyện đọc:** 71 mục từ PDF speaking; lọc theo bài, dạng bài và từ khóa. Bật/tắt furigana, kana, romaji; chỉnh cỡ chữ; chạm vào từ để xem nghĩa; xem từ vựng riêng cho từng bài.
- **Hán tự:** 607 mục từ, 496 chữ Hán theo 15 bài/45 chủ đề; âm Hán Việt, giải thích, On/Kun, trang PDF gốc. Xem viết mẫu, từng nét, luyện viết bằng chuột/cảm ứng, tra từ cùng chữ và lưu tiến độ. Tìm kiếm hỗ trợ âm Hán Việt không dấu.
- **Số câu kiểm tra:** giữ các mức có sẵn và thêm “Tự nhập số câu…”. Nhập số nguyên từ 1 đến số từ trong bộ lọc; số không hợp lệ có thông báo ngay trong phần thiết lập.
- **Cách chấm bài:** mặc định “Nộp bài rồi xem đáp án”, hoặc chọn “Chấm từng câu” để biết kết quả ngay. Thanh tiến trình hiển thị số câu đã trả lời. Ở chế độ nộp sau, mỗi câu chọn một đáp án, có thể đổi lựa chọn và chuyển câu bằng bảng số câu trước khi nộp.
- **Xem kết quả:** thống kê đúng/sai/bỏ trống; từng câu đánh dấu lựa chọn sai và đáp án đúng, có bộ lọc “Sai / bỏ trống”. Câu bỏ trống không được điểm; nộp thiếu có thông báo để quay lại làm tiếp hoặc vẫn nộp. “Làm lại đề này” giữ nguyên đề và xóa các lựa chọn cũ.
- Bài kiểm tra đang làm được giữ khi chuyển tab trong trang; bộ từ của đề giữ nguyên dù tra cứu bài khác. Tải lại trang hoặc chọn “Thiết lập bài mới” sẽ bắt đầu lại, không lưu bài kiểm tra qua lần mở trình duyệt.
- Tiến độ, gợi ý và bài đọc gần nhất được lưu trong trình duyệt. Nghe bài dùng giọng tiếng Nhật của thiết bị; không có giọng Nhật thì có thông báo.
- Nội dung, dữ liệu và font tiếng Nhật Noto Sans JP chạy cục bộ. Font giao diện Plus Jakarta Sans tải từ Google Fonts; khi ngoại tuyến phần tiếng Việt dùng font hệ thống.

Chi tiết đối chiếu: [VOCABULARY_AUDIT.md](VOCABULARY_AUDIT.md).

Các thay đổi cụ thể so với bản trước trên repo: [CHANGELOG.md](CHANGELOG.md).

## Dữ liệu

- `data/vocabulary.js`: từ vựng, nghĩa, bài, chủ đề và số trang PDF.
- `data/readings-source.txt`: bản chép các bài đọc, mỗi mục có trang nguồn.
- `data/readings.js`: bài đọc và từ điển gợi ý theo từng từ.
- `assets/reading.js`, `assets/study.css`: tương tác và giao diện luyện đọc.
- `assets/kanji.js`, `data/kanji.js`: học Hán tự và tập viết, dùng được ngoại tuyến.
- `data/kanji-source.json`, `data/kanji-meanings.tsv`: cách viết gốc trong PDF, âm Hán Việt được chọn và nghĩa gợi nhớ. [Nguồn, giấy phép và cách tạo dữ liệu Hán tự](sources/kanji/README.md).
- `sources/`: hai tài liệu PDF do người dùng cung cấp.

Sau khi sửa bản chép hoặc gợi ý trong `scripts/build_readings.py`, chạy `python scripts/build_readings.py` để tạo lại `data/readings.js`. Công cụ này cần `pykakasi` (chỉ dùng lúc tạo dữ liệu, không cần khi mở website). Cách đọc số đếm, tên riêng và trợ từ được khai báo trong script để giữ đúng ngữ cảnh.

Font Nhật được đóng gói trong `assets/fonts/` cùng giấy phép SIL OFL. Bản font đã được rút gọn theo nội dung trang. Nếu bổ sung chữ Hán mới, có thể tạo lại bằng `python scripts/build_font.py path/to/NotoSansJP.ttf` (cần `fonttools` và `brotli`).

## Kiểm thử

Cần Python, Playwright và Microsoft Edge. Nếu đã có công cụ trong `.tools`, chạy:

```powershell
python tests/check_app.py
python tests/check_interactions.py
python tests/check_kanji.py
python tests/check_quiz.py
```

Nếu chưa có Playwright, cài vào môi trường Python: `python -m pip install playwright`. Kiểm thử mở Edge ở chế độ ẩn, không dùng hồ sơ trình duyệt cá nhân. Ảnh kiểm tra được ghi vào `.work`. Kịch bản thứ hai kiểm tra 921 flashcard ở 320 px khi ngoại tuyến, bàn phím, cùng chu trình nghe/dừng/đổi bài bằng giọng giả lập; không đánh giá chất lượng phát âm thực tế của thiết bị.

Kịch bản Hán tự kiểm tra 607 ánh xạ PDF, 496 sơ đồ nét, 45 chủ đề, tìm kiếm, lưu tiến độ và dữ liệu lưu lỗi/bị chặn, đổi chữ/đổi tab khi viết mẫu, thao tác tập viết, màn hình nhỏ và giới hạn số câu tự nhập.

Kịch bản quiz kiểm tra tiến trình, chỉ một đáp án được chọn cho mỗi câu, sửa đáp án và giữ thứ tự lựa chọn, chấm khi nộp, câu sai/bỏ trống, tính điểm, làm lại cùng đề, chuyển tab, hủy sự kiện chấm từng câu trả về trễ và phạm vi tối đa 921 câu.
