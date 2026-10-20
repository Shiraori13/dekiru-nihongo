# Dekiru Master

Website: https://shiraori13.github.io/dekiru-nihongo/

Mở `index.html` bằng trình duyệt để học và luyện đề. Giữ các thư mục `assets`, `data`, `sources`, `Material` cùng cấp với file HTML khi sao chép hoặc đưa lên hosting. `Material` chứa ảnh gốc để đối chiếu đề mẫu. `index - Back_up.html` là bản cũ được giữ nguyên tại máy, không đưa lên repo.

- **Thẻ ghi nhớ / Kiểm tra / Danh sách:** 921 thẻ, 15 bài, 45 chủ đề. Bộ lọc và tìm kiếm tiếng Việt không dấu.
- **Luyện đọc:** 71 mục từ PDF speaking; lọc theo bài, dạng bài và từ khóa. Bật/tắt furigana, kana, romaji; chỉnh cỡ chữ; chạm vào từ để xem nghĩa; xem từ vựng riêng cho từng bài.
- **Hán tự:** 607 mục từ, 496 chữ Hán theo 15 bài/45 chủ đề; âm Hán Việt, giải thích, On/Kun, trang PDF gốc. Xem viết mẫu, từng nét, luyện viết bằng chuột/cảm ứng, tra từ cùng chữ và lưu tiến độ. Tìm kiếm hỗ trợ âm Hán Việt không dấu.
- **Ngữ pháp:** bài 4–7, 12 topic, 37 mục học, **18 câu mỗi mục / 666 bài tập**. Giải thích, ví dụ có cách đọc/nghĩa và nghe, lỗi thường gặp, bảng thể て; luyện chọn đáp án, điền dạng từ, ghép câu. Nộp rồi chấm, xem giải thích, luyện lại câu sai/bỏ trống và lưu bài đang làm qua lần tải lại trang. [Tổng hợp và đối chiếu ngữ pháp](GRAMMAR_AUDIT.md).
- **Luyện đề:** 4 đề × 45 câu: một đề chuyển thể từ 44 ảnh trong Material (câu 18 bổ sung, có hiệu đính), và **3 đề mới chỉ tập trung bài 4–5**, mỗi đề phủ 19 mục ngữ pháp/6 topic. Đọc/viết chữ Hán, từ vựng, điền câu, hội thoại và dịch; tiến trình, đánh dấu câu, sửa trước khi nộp, tùy chọn thời gian/tự nộp, lưu bài qua lần mở lại. Kết quả đúng/sai/trống, giải thích từng câu, lọc xem lại, làm lại, lịch sử 30 lượt và xuất kết quả.
- **Thêm đề:** nhập JSON có kiểm tra/xem trước, hoặc soạn 45 câu và tải ảnh minh họa câu hỏi. Nhập thủ công nội dung và đáp án; không tự đọc chữ/đoán đáp án từ ảnh. Lưu bản nháp, xuất/nhập đề, xóa đề tự thêm. Đề và ảnh lưu cục bộ ở IndexedDB, không tự đồng bộ thiết bị; xuất file để sao lưu. [Nguồn, hiệu đính, cấu trúc đề và hướng dẫn thêm đề](EXAM_AUDIT.md).
- **Đề ngữ pháp độc lập:** câu điền và ghép dùng ngữ cảnh riêng. Khi tạo đề, hệ thống loại các cặp chứa sẵn câu/dạng từ đang được hỏi ở câu khác; số câu nhập tối đa điều chỉnh theo phạm vi. Ngân hàng giữ 18 câu/mục; một lượt ôn riêng có 15–18 câu không lộ trực tiếp cho nhau. Ngay dưới câu hỏi có mục mở **gợi ý chữ Hán: từ, cách đọc và nghĩa**; động/tính từ dùng từ gốc để tránh cho sẵn dạng chia.
- **Số câu kiểm tra:** giữ các mức có sẵn và thêm “Tự nhập số câu…”. Nhập số nguyên từ 1 đến số từ trong bộ lọc; số không hợp lệ có thông báo ngay trong phần thiết lập.
- **Cách chấm bài:** mặc định “Nộp bài rồi xem đáp án”, hoặc chọn “Chấm từng câu” để biết kết quả ngay. Thanh tiến trình hiển thị số câu đã trả lời. Ở chế độ nộp sau, mỗi câu chọn một đáp án, có thể đổi lựa chọn và chuyển câu bằng bảng số câu trước khi nộp.
- **Xem kết quả:** thống kê đúng/sai/bỏ trống; từng câu đánh dấu lựa chọn sai và đáp án đúng, có bộ lọc “Sai / bỏ trống”. Câu bỏ trống không được điểm; nộp thiếu có thông báo để quay lại làm tiếp hoặc vẫn nộp. “Làm lại đề này” giữ nguyên đề và xóa các lựa chọn cũ.
- Bài kiểm tra **từ vựng** đang làm được giữ khi chuyển tab trong trang; bộ từ của đề giữ nguyên dù tra cứu bài khác. Tải lại trang hoặc chọn “Thiết lập bài mới” sẽ bắt đầu lại, không lưu bài kiểm tra từ vựng qua lần mở trình duyệt. Bài luyện **ngữ pháp** có lưu qua lần tải lại trang trên cùng trình duyệt.
- Tiến độ, gợi ý và bài đọc gần nhất được lưu trong trình duyệt. Phát âm dùng **1.178 MP3 đi kèm website**, hoạt động trên Firefox/Edge mà không cần cài giọng Nhật. Giọng thiết bị chỉ là dự phòng khi thiếu file; có thông báo khi bị chặn quyền hoặc không phát được. [Nguồn giọng tổng hợp và cách tạo file cục bộ](assets/audio/README.md).
- Nội dung, dữ liệu và font tiếng Nhật Noto Sans JP chạy cục bộ. Font giao diện Plus Jakarta Sans tải từ Google Fonts; khi ngoại tuyến phần tiếng Việt dùng font hệ thống.

Chi tiết đối chiếu: [VOCABULARY_AUDIT.md](VOCABULARY_AUDIT.md).

Các thay đổi cụ thể so với bản trước trên repo: [CHANGELOG.md](CHANGELOG.md).

## Dữ liệu

- `data/vocabulary.js`: từ vựng, nghĩa, bài, chủ đề và số trang PDF.
- `data/readings-source.txt`: bản chép các bài đọc, mỗi mục có trang nguồn.
- `data/readings.js`: bài đọc và từ điển gợi ý theo từng từ.
- `assets/reading.js`, `assets/study.css`: tương tác và giao diện luyện đọc.
- `assets/kanji.js`, `data/kanji.js`: học Hán tự và tập viết, dùng được ngoại tuyến.
- `data/grammar.js`, `assets/grammar.js`, `assets/grammar.css`: học ngữ pháp bài 4–7 và bộ luyện tập riêng.
- `data/grammar-practice.js`: bổ sung câu hỏi theo từng mục, đưa mỗi mục lên 18 câu. Câu không đổi nội dung giữ ID cũ; câu viết lại có ID mới.
- `assets/grammar-support.js`: kiểm tra câu hỏi tiết lộ đáp án cho nhau, chọn đề phù hợp và tra từ Hán cho câu hỏi. Câu đã thay nội dung có ID mới; bài lưu cũ được cập nhật kèm thông báo, giữ câu trả lời còn phù hợp.
- `data/exams.js`, `scripts/build_exams.py`: bốn đề 45 câu và nguồn soạn/tái tạo; đề gốc có đường dẫn đến từng ảnh trong `Material/`.
- `assets/exam-core.js`, `assets/exams.js`, `assets/exams.css`: kiểm tra định dạng file, bộ nhớ IndexedDB, chấm điểm, làm đề và trình nhập đề/ảnh. Không cần máy chủ ứng dụng.
- `assets/audio.js`, `data/audio.js`, `assets/audio/`: bộ phát dùng chung, ánh xạ và MP3 cục bộ. Khi sao chép hoặc deploy phải giữ đầy đủ các file này.
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
python tests/check_flashcard_keyboard.py
python tests/check_grammar.py
python tests/check_grammar_independence.py
python tests/check_audio.py
python tests/check_exams.py
```

Nếu chưa có Playwright, cài vào môi trường Python: `python -m pip install playwright`. Kiểm thử mở Edge ở chế độ ẩn, không dùng hồ sơ trình duyệt cá nhân. Ảnh kiểm tra được ghi vào `.work`. Kịch bản thứ hai kiểm tra 921 flashcard ở 320 px khi ngoại tuyến, bàn phím, cùng chu trình nghe/dừng/đổi bài bằng giọng giả lập; không đánh giá chất lượng phát âm thực tế của thiết bị.

Kịch bản Hán tự kiểm tra 607 ánh xạ PDF, 496 sơ đồ nét, 45 chủ đề, tìm kiếm, lưu tiến độ và dữ liệu lưu lỗi/bị chặn, đổi chữ/đổi tab khi viết mẫu, thao tác tập viết, màn hình nhỏ và giới hạn số câu tự nhập.

Kịch bản quiz kiểm tra tiến trình, chỉ một đáp án được chọn cho mỗi câu, sửa đáp án và giữ thứ tự lựa chọn, chấm khi nộp, câu sai/bỏ trống, tính điểm, làm lại cùng đề, chuyển tab, hủy sự kiện chấm từng câu trả về trễ và phạm vi tối đa 921 câu.

Kịch bản âm thanh chạy cả Firefox (cài bằng `python -m playwright install firefox`) và Edge: phát MP3 thật khi không có giọng hệ điều hành, tiến trình giải mã, dừng/đổi chế độ, đọc nối câu, lỗi quyền phát, file bị thiếu và mở qua `file://`. Kịch bản ngữ pháp kiểm tra mọi câu trong 666 câu qua UI và yêu cầu đúng 18 câu/mục. Kiểm thử tự động xác nhận luồng phát và giải mã, không đo được âm lượng vật lý của loa người dùng.

Kịch bản luyện đề kiểm tra đủ 45 câu/đề, 19 mục/mỗi đề bài 4–5, chấm 180 đáp án qua UI, tiến trình/đánh dấu/khôi phục, thời gian, lịch sử, file nhập sai và chèn HTML, trình nhập 45 câu kèm ảnh/lưu nháp/nhập/xuất/xóa, giao diện sáng/tối 320–1280 px, Firefox và mở trực tiếp file. Khóa đáp án của đề tự thêm do người nhập kiểm tra ở bước xem trước.
