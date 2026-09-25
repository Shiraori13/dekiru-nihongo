# Dekiru Master

Website: https://shiraori13.github.io/dekiru-nihongo/

Mở `index.html` bằng trình duyệt để học từ vựng và luyện đọc. Giữ các thư mục `assets`, `data`, `sources` cùng cấp với file HTML khi sao chép hoặc đưa lên hosting. `index - Back_up.html` là bản cũ được giữ nguyên tại máy, không đưa lên repo.

- **Thẻ ghi nhớ / Kiểm tra / Danh sách:** 921 thẻ, 15 bài, 45 chủ đề. Bộ lọc và tìm kiếm tiếng Việt không dấu.
- **Luyện đọc:** 71 mục từ PDF speaking; lọc theo bài, dạng bài và từ khóa. Bật/tắt furigana, kana, romaji; chỉnh cỡ chữ; chạm vào từ để xem nghĩa; xem từ vựng riêng cho từng bài.
- Tiến độ, gợi ý và bài đọc gần nhất được lưu trong trình duyệt. Nghe bài dùng giọng tiếng Nhật của thiết bị; không có giọng Nhật thì có thông báo.
- Nội dung, dữ liệu và font tiếng Nhật Noto Sans JP chạy cục bộ. Font giao diện Plus Jakarta Sans tải từ Google Fonts; khi ngoại tuyến phần tiếng Việt dùng font hệ thống.

Chi tiết đối chiếu: [VOCABULARY_AUDIT.md](VOCABULARY_AUDIT.md).

## Dữ liệu

- `data/vocabulary.js`: từ vựng, nghĩa, bài, chủ đề và số trang PDF.
- `data/readings-source.txt`: bản chép các bài đọc, mỗi mục có trang nguồn.
- `data/readings.js`: bài đọc và từ điển gợi ý theo từng từ.
- `assets/reading.js`, `assets/study.css`: tương tác và giao diện luyện đọc.
- `sources/`: hai tài liệu PDF do người dùng cung cấp.

Sau khi sửa bản chép hoặc gợi ý trong `scripts/build_readings.py`, chạy `python scripts/build_readings.py` để tạo lại `data/readings.js`. Công cụ này cần `pykakasi` (chỉ dùng lúc tạo dữ liệu, không cần khi mở website). Cách đọc số đếm, tên riêng và trợ từ được khai báo trong script để giữ đúng ngữ cảnh.

Font Nhật được đóng gói trong `assets/fonts/` cùng giấy phép SIL OFL. Bản font đã được rút gọn theo nội dung trang. Nếu bổ sung chữ Hán mới, có thể tạo lại bằng `python scripts/build_font.py path/to/NotoSansJP.ttf` (cần `fonttools` và `brotli`).

## Kiểm thử

Cần Python, Playwright và Microsoft Edge. Nếu đã có công cụ trong `.tools`, chạy:

```powershell
python tests/check_app.py
python tests/check_interactions.py
```

Nếu chưa có Playwright, cài vào môi trường Python: `python -m pip install playwright`. Kiểm thử mở Edge ở chế độ ẩn, không dùng hồ sơ trình duyệt cá nhân. Ảnh kiểm tra được ghi vào `.work`. Kịch bản thứ hai kiểm tra 921 flashcard ở 320 px khi ngoại tuyến, bàn phím, cùng chu trình nghe/dừng/đổi bài bằng giọng giả lập; không đánh giá chất lượng phát âm thực tế của thiết bị.
