# Dekiru Master

Website: https://shiraori13.github.io/dekiru-nihongo/

Bản hiệu đính 22–23/10/2026: [báo cáo triển khai, kiểm thử và ảnh trước/sau](IMPLEMENTATION_REPORT.md), [audit đáp án theo ID](audits/answers.md). Hiện có 921 thẻ, 71 bài đọc, 666 bài ngữ pháp và **8 đề / 360 câu luyện đề**, gồm [4 đề mới chuyên bài 6–7](audits/CHAPTER67_EXAMS.md).

Bản giao diện liquid glass: sidebar trái trên desktop, thanh điều hướng đáy trên mobile, font Việt/Nhật cục bộ và bảng **Giao diện** để đổi sáng/tối, nền có sẵn/ảnh cá nhân, độ đậm/độ mờ kính và cỡ chữ. [Thiết kế, bằng chứng kiểm thử và ảnh trước/sau](audits/GLASS_UI_REPORT.md). Mở nút Giao diện ở cuối sidebar hoặc biểu tượng bảng màu trên điện thoại; phím **D** đổi sáng/tối khi không nhập liệu. Khôi phục giao diện chỉ đặt lại phần nhìn, giữ bài đang làm và tiến độ.

Đã tinh chỉnh theo ảnh mẫu: nền dải cong pastel, logo mint lớn, header nổi, nút teal, đáp án 18–22 px và bảng tùy chỉnh 350 px. [Đối chiếu thị giác, ảnh cùng trạng thái và kiểm thử](audits/REFERENCE_UI_REPORT.md).

Hiệu chỉnh sau trải nghiệm: sửa menu mobile lặp nhãn/icon; bảng Giao diện luôn nổi phủ, không co giãn hay chừa cột ở vùng học. Flashcard tận dụng chiều rộng PC. [Nguyên nhân, ảnh và kiểm thử](audits/UI_SPACE_FIX.md).

Header tận dụng chiều rộng cho tìm kiếm, streak và nút sáng/tối; khung làm quiz/kết quả dùng hết vùng học. Bộ chọn Hán tự/ngữ pháp rộng 290–340 px trên desktop, chữ và thẻ lựa chọn rõ hơn; màn hẹp giữ bộ chọn thu gọn. **Streak** tính một lần mỗi ngày truy cập theo lịch thiết bị, tự lưu trên trình duyệt; bấm ngọn lửa để xem chuỗi hiện tại, kỷ lục và lịch 14 ngày. Bỏ một ngày sẽ bắt đầu chuỗi mới; không đồng bộ thiết bị. [Chi tiết và bằng chứng](audits/STUDY_LAYOUT_STREAK.md).

Mở `index.html` bằng trình duyệt để học và luyện đề. Giữ các thư mục `assets`, `data`, `sources`, `Material` cùng cấp với file HTML khi sao chép hoặc đưa lên hosting. `Material` chứa ảnh gốc để đối chiếu đề mẫu. `index - Back_up.html` là bản cũ được giữ nguyên tại máy, không đưa lên repo.

- **Thẻ ghi nhớ / Kiểm tra / Danh sách:** 921 thẻ, 15 bài, 45 chủ đề. Bộ lọc và tìm kiếm tiếng Việt không dấu.
- **Luyện đọc:** 71 mục từ PDF speaking; lọc theo bài, dạng bài và từ khóa. Bật/tắt furigana, kana, romaji; chỉnh cỡ chữ; chạm vào từ để xem nghĩa; xem từ vựng riêng cho từng bài.
- **Hán tự:** 607 mục từ, 496 chữ Hán theo 15 bài/45 chủ đề; âm Hán Việt, giải thích, On/Kun, trang PDF gốc. Xem viết mẫu, từng nét, luyện viết bằng chuột/cảm ứng, tra từ cùng chữ và lưu tiến độ. Tìm kiếm hỗ trợ âm Hán Việt không dấu.
- **Ngữ pháp:** bài 4–7, 12 topic, 37 mục học, **18 câu mỗi mục / 666 bài tập**. Giải thích, ví dụ có cách đọc/nghĩa và nghe, lỗi thường gặp, bảng thể て; luyện chọn đáp án, điền dạng từ, ghép câu. Nộp rồi chấm, xem giải thích, luyện lại câu sai/bỏ trống và lưu bài đang làm qua lần tải lại trang. [Tổng hợp và đối chiếu ngữ pháp](GRAMMAR_AUDIT.md).
- **Luyện đề:** 8 đề × 45 câu: một đề chuyển thể từ 44 ảnh trong Material (câu 18 bổ sung), 3 đề bài 4–5 (19 mục/6 topic) và **4 đề bài 6–7 (18 mục/6 topic)**. Bốn đề mới bám đúng ma trận đề mẫu: 6 đọc Hán tự, 8 chọn chữ Hán, 1 từ vựng, 21 ngữ pháp, 7 hội thoại, 2 dịch. Có bộ lọc nhóm đề và danh mục 125 từ bài 6–7. Tiến trình, đánh dấu, sửa trước khi nộp, hẹn giờ, lưu/tiếp tục, lọc câu sai/bỏ trống, lịch sử và xuất kết quả dùng chung luồng hiện có.
- **Xáo trộn và lời giải đề:** mỗi lượt mới/làm lại trộn đủ 45 câu, giữ nguyên thứ tự khi tiếp tục hoặc tải lại. Sau khi nộp, cả 360 câu có từ/câu chuẩn, nghĩa Việt, lý do đúng, điểm cần nhớ và phân tích A–D; xem được trong lịch sử và file kết quả. Bốn đề cũ giữ nội dung, ID và dấu nhận diện; thêm đề không buộc làm lại bài đang lưu.
- **Thêm đề:** nhập JSON có kiểm tra/xem trước, hoặc soạn 45 câu và tải ảnh minh họa câu hỏi. Nhập thủ công nội dung và đáp án; không tự đọc chữ/đoán đáp án từ ảnh. Lưu bản nháp, xuất/nhập đề, xóa đề tự thêm. Đề và ảnh lưu cục bộ ở IndexedDB, không tự đồng bộ thiết bị; xuất file để sao lưu. [Nguồn, hiệu đính, cấu trúc đề và hướng dẫn thêm đề](EXAM_AUDIT.md).
- **Mobile:** điều hướng đáy và menu Khác, bộ chọn/bộ lọc thu gọn, danh sách từ thành thẻ dọc theo đợt 50 mục, Xem nét/Tự viết riêng, kết quả mở từng câu. Giữ nguyên chức năng và bài đang làm khi đổi chế độ; tự mở đầy đủ điều khiển khi trở về PC. [Thiết kế và kiểm tra mobile](MOBILE_UX.md).
- **Đề ngữ pháp độc lập:** câu điền và ghép dùng ngữ cảnh riêng. Khi tạo đề, hệ thống loại các cặp chứa sẵn câu/dạng từ đang được hỏi ở câu khác; số câu nhập tối đa điều chỉnh theo phạm vi. Ngân hàng giữ 18 câu/mục; một lượt ôn riêng có 15–18 câu không lộ trực tiếp cho nhau. Ngay dưới câu hỏi có mục mở **gợi ý chữ Hán: từ, cách đọc và nghĩa**; động/tính từ dùng từ gốc để tránh cho sẵn dạng chia.
- **Số câu kiểm tra:** giữ các mức có sẵn và thêm “Tự nhập số câu…”. Nhập số nguyên từ 1 đến số từ trong bộ lọc; số không hợp lệ có thông báo ngay trong phần thiết lập.
- **Cách chấm bài:** mặc định “Nộp bài rồi xem đáp án”, hoặc chọn “Chấm từng câu” để biết kết quả ngay. Thanh tiến trình hiển thị số câu đã trả lời. Ở chế độ nộp sau, mỗi câu chọn một đáp án, có thể đổi lựa chọn và chuyển câu bằng bảng số câu trước khi nộp.
- **Xem kết quả:** thống kê đúng/sai/bỏ trống; từng câu đánh dấu lựa chọn sai và đáp án đúng, có bộ lọc “Sai / bỏ trống”. Câu bỏ trống không được điểm; nộp thiếu có thông báo để quay lại làm tiếp hoặc vẫn nộp. “Làm lại đề này” giữ nguyên đề và xóa các lựa chọn cũ.
- Bài kiểm tra **từ vựng** giữ nguyên khi đổi chế độ/bộ lọc; thiết lập bài mới có xác nhận nếu chưa nộp. Quiz từ vựng chưa lưu qua tải lại trang. Ngữ pháp lưu câu, phương án, lựa chọn và gợi ý; tạo bài mới cũng cần xác nhận.
- **Một tab sửa luyện đề:** tab khác chỉ xem; dùng “Tiếp tục ở tab này” để chuyển quyền. Trạng thái kiểm tra bằng transaction IndexedDB, ID lượt và revision; localStorage v1 chỉ là bản chiếu. Sau cập nhật nội dung, chỉ giữ đáp án còn tương thích và có thông báo nếu cần trả lời lại. Khi lưu bị chặn, hiển thị đúng giới hạn phiên hiện tại.
- Tiến độ, gợi ý và bài đọc gần nhất được lưu trong trình duyệt. Phát âm dùng **1.178 MP3 đi kèm website**, hoạt động trên Firefox/Edge mà không cần cài giọng Nhật. Giọng thiết bị chỉ là dự phòng khi thiếu file; có thông báo khi bị chặn quyền hoặc không phát được. [Nguồn giọng tổng hợp và cách tạo file cục bộ](assets/audio/README.md).
- Nội dung, dữ liệu, font tiếng Nhật Noto Sans JP và font Việt Plus Jakarta Sans đều được đóng gói cục bộ. Không cần tải font từ Google; nguồn và giấy phép ở [assets/fonts/README.md](assets/fonts/README.md).

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
- `data/exams.js`, `scripts/build_exams.py`: tám đề 45 câu và nguồn soạn/tái tạo; đề gốc có đường dẫn đến từng ảnh trong `Material/`.
- `scripts/exams67_a.py`, `scripts/exams67_b.py`, `scripts/exam67_common.py`: 180 câu mới bài 6–7, lời giải từng lựa chọn và bộ kiểm tra/luân chuyển vị trí đáp án cùng ghi chú. [Ma trận và phạm vi](audits/chapter67-matrix.json).
- `scripts/exam_solutions.py`: lời giải biên soạn cho 180 câu, quy tắc và lý do loại từng phương án; chạy cùng `build_exams.py`, không cần dịch vụ ngoài.
- `assets/exam-core.js`, `assets/exams.js`, `assets/exams.css`: kiểm tra định dạng file, bộ nhớ IndexedDB, chấm điểm, làm đề và trình nhập đề/ảnh. Không cần máy chủ ứng dụng.
- `assets/mobile.css`, `assets/mobile.js`: bố cục và điều hướng ở màn hình ≤760 px; dùng lại điều khiển cũ, không có bộ dữ liệu/đáp án riêng cho mobile.
- `assets/tokens.css`, `assets/shell.css`: biến giao diện dùng chung, sidebar/header, bố cục thích ứng và chất liệu kính; `assets/presentation.js`: chỉ điều chỉnh số cột đáp án theo độ dài chữ.
- `assets/appearance-init.js`, `assets/appearance.js`, `assets/appearance.css`: áp dụng theme sớm, bảng tùy chỉnh và lưu ảnh Blob ở IndexedDB riêng. Cấu hình nhỏ dùng `dekiru_appearance_v1`/`dekiru_theme`; ảnh nằm trong database `dekiru_appearance_v1`, không cùng kho bài làm.
- `assets/pickers.css`: thẻ lựa chọn Hán tự/ngữ pháp và bố cục thích ứng. `assets/streak-core.js`, `assets/streak.js`, `assets/streak.css`: lịch truy cập cục bộ; từng ngày là khóa `dekiru_visit_v1:YYYY-MM-DD`, độc lập với đáp án, tiến độ và Giao diện.
- `assets/audio.js`, `data/audio.js`, `assets/audio/`: bộ phát dùng chung, ánh xạ và MP3 cục bộ. Khi sao chép hoặc deploy phải giữ đầy đủ các file này.
- `data/kanji-source.json`, `data/kanji-meanings.tsv`: cách viết gốc trong PDF, âm Hán Việt được chọn và nghĩa gợi nhớ. [Nguồn, giấy phép và cách tạo dữ liệu Hán tự](sources/kanji/README.md).
- `sources/`: hai tài liệu PDF do người dùng cung cấp.

Sau khi sửa bản chép hoặc gợi ý trong `scripts/build_readings.py`, chạy `python scripts/build_readings.py` để tạo lại `data/readings.js`. Công cụ này cần `pykakasi` (chỉ dùng lúc tạo dữ liệu, không cần khi mở website). Cách đọc số đếm, tên riêng và trợ từ được khai báo trong script để giữ đúng ngữ cảnh.

Font Nhật được đóng gói trong `assets/fonts/` cùng giấy phép SIL OFL. Bản font đã được rút gọn theo nội dung trang. Nếu bổ sung chữ Hán mới, có thể tạo lại bằng `python scripts/build_font.py path/to/NotoSansJP.ttf` (cần `fonttools` và `brotli`).

## Kiểm thử

Cần Python, Node và Playwright. Cài dependency đã ghim, chọn trình duyệt và chạy toàn bộ:

```powershell
python -m pip install -r requirements-dev.txt
python -m playwright install chromium firefox
npm ci --ignore-scripts
$env:DEKIRU_BROWSER='chromium'
npm run test:logic
python tests/run_checks.py
npm run format:check
```

`DEKIRU_BROWSER='edge'` dùng Edge có sẵn, `'firefox'` dùng Firefox của Playwright. Có thể chỉ định `DEKIRU_CHANNEL` hoặc `DEKIRU_EXECUTABLE_PATH`. Mặc định Windows dùng Edge, Linux dùng Chromium; `.tools` cũ vẫn được hỗ trợ. Chạy riêng các kịch bản:

```powershell
python tests/check_app.py
python tests/check_interactions.py
python tests/check_kanji.py
python tests/check_quiz.py
python tests/check_flashcard_keyboard.py
python tests/check_grammar.py
python tests/check_grammar_independence.py
python tests/check_audio.py
python tests/check_chapter67.py
python tests/check_exams.py
python tests/check_exam_shuffle.py
python tests/check_mobile.py
python tests/check_regressions.py
python tests/check_attempt_store.py
python tests/check_imported_tabs.py
python tests/check_delivery.py
python tests/check_zoom.py
python tests/check_appearance.py
python tests/check_glass_layout.py
python tests/check_study_layout.py
```

Kiểm thử dùng trình duyệt ẩn với hồ sơ riêng. Ảnh hồi quy ở `.work`; ma trận bàn giao và số đo ở `audits/evidence`. Bộ cũ yêu cầu tải các phần trước các kiểm tra bao phủ toàn dữ liệu; bộ `check_delivery.py` riêng kiểm tra tải theo thao tác thực tế, lỗi/thử lại, đổi chế độ nhanh, `file://` và đường dẫn như GitHub Pages.

Luồng bộ lọc/menu/phần xem lại trên mobile được mở qua điều khiển thật trong các test cũ; các khẳng định chấm điểm/khôi phục được giữ. Ca mới kiểm tra xác nhận, khóa tab, di chuyển dữ liệu cũ, lỗi bộ nhớ và kết quả kỳ vọng độc lập. Chi tiết giới hạn xác minh tiếng Nhật: `audits/answers.md`.

Kịch bản Hán tự kiểm tra 607 ánh xạ PDF, 496 sơ đồ nét, 45 chủ đề, tìm kiếm, lưu tiến độ và dữ liệu lưu lỗi/bị chặn, đổi chữ/đổi tab khi viết mẫu, thao tác tập viết, màn hình nhỏ và giới hạn số câu tự nhập.

Kịch bản quiz kiểm tra tiến trình, chỉ một đáp án được chọn cho mỗi câu, sửa đáp án và giữ thứ tự lựa chọn, chấm khi nộp, câu sai/bỏ trống, tính điểm, làm lại cùng đề, chuyển tab, hủy sự kiện chấm từng câu trả về trễ và phạm vi tối đa 921 câu.

Kịch bản âm thanh chạy cả Firefox (cài bằng `python -m playwright install firefox`) và Edge: phát MP3 thật khi không có giọng hệ điều hành, tiến trình giải mã, dừng/đổi chế độ, đọc nối câu, lỗi quyền phát, file bị thiếu và mở qua `file://`. Kịch bản ngữ pháp kiểm tra mọi câu trong 666 câu qua UI và yêu cầu đúng 18 câu/mục. Kiểm thử tự động xác nhận luồng phát và giải mã, không đo được âm lượng vật lý của loa người dùng.

Kịch bản luyện đề kiểm tra đủ 45 câu/đề, 19 mục cho từng đề bài 4–5 và 18 mục cho từng đề bài 6–7; chấm 360 đáp án qua UI, bộ lọc nhóm đề, tiến trình/đánh dấu/khôi phục, thời gian, lịch sử, file nhập sai và chèn HTML, trình nhập 45 câu kèm ảnh/lưu nháp/nhập/xuất/xóa, giao diện sáng/tối 320–1280 px, Firefox và mở trực tiếp file. Bộ bài 6–7 có đối chiếu từ đích PDF và fixture chấm độc lập. Khóa đáp án của đề tự thêm do người nhập kiểm tra ở bước xem trước.
