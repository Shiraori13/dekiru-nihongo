# Giao diện đối chiếu ảnh mẫu — 23/10/2026

**Hiệu chỉnh tiếp theo:** [sửa menu mobile và khoảng trống dành cho Giao diện](UI_SPACE_FIX.md). Bản hiện tại dùng overlay trên mọi kích thước PC, không còn thu vùng học thành ba cột. Bảng và ảnh so sánh bên dưới ghi lại đợt triển khai theo ảnh mẫu trước khi có phản hồi sử dụng.

Đợt chỉnh này dùng **ảnh liquid glass do người dùng đính kèm** làm căn cứ thị giác, tiếp tục trên phần giao diện chưa commit trong workspace. Nhánh `main`, HEAD `11c7613f79d6720b94f3ba258e508b96d2338f84`; **chưa commit, push, merge hoặc deploy**. Mốc “trước” của ảnh so sánh dưới đây là giao diện liquid glass vừa bàn giao trước đó, không phải checkout lại commit cũ.

## Thay đổi sau đối chiếu

| Thành phần | Trước lần chỉnh này | Bản theo ảnh mẫu |
|---|---|---|
| Sidebar | Logo ngang 46 px, active lavender | Sidebar kính 232 px, logo mint 112 px ở đầu, wordmark, active mint/viền sáng; đủ bảy chế độ |
| Header | Thanh phẳng sát mép trên | Thanh nổi cao 80 px, cách mép 18 px, bo 26 px, tìm kiếm theo phạm vi/nút sáng tối dạng pill |
| Nền | Gradient tĩnh ít đường nét | Ba SVG cục bộ: dải mint–xanh trời–lavender, sakura và sóng đại dương; thumbnail dùng đúng nền thực |
| Màu chính | Lavender | Teal `#00857f`, nút chính gradient teal; dark dùng mint sáng với chữ tối tương phản |
| Typography | Tiêu đề tối đa 36 px; đáp án quiz thực tế **13 px** | Tiêu đề desktop 40–44 px, từ Nhật tối đa 48 px, câu hỏi ngữ pháp/đề 28–34 px, đáp án 18–22 px |
| Đáp án | Badge nhỏ bo góc; một số trạng thái bị CSS ghi đè | Badge tròn 42–44 px, chọn mint/viền teal; mobile 36 px, một cột; đúng/sai/bỏ trống vẫn có ký hiệu/nhãn |
| Bảng Giao diện | 420 px, phủ từ mép trên | 350 px; màn rộng ≥1500 px có khoảng cách 20 px với vùng học thu lại, panel bắt đầu dưới header; màn hẹp dùng drawer |
| Phần phụ | Bảng số câu phía trước câu hỏi, thiết lập ngữ pháp lớn | Bảng số quiz chuyển dưới thao tác chính và thu gọn; thiết lập bài ngữ pháp đang làm thu gọn, giữ lựa chọn mở/đóng |
| Thẻ khám phá | Chưa có | Ba thẻ pastel dẫn tới Luyện đọc, Ngữ pháp, Luyện đề thực tế; quay lại vẫn tiếp tục quiz cũ |

Logo SVG nguyên bản có glyph **学** đã outline, sách mở và điểm sáng; đọc rõ ở 128/64/32 px. Không cắt logo hay chèn ảnh mockup vào DOM. Không thêm avatar, profile, đăng nhập, chuỗi ngày hay mục tiêu giả.

## Vòng triển khai → xem ảnh → sửa

1. Đọc mã hiện tại, README, cấu hình kiểm thử và trạng thái Git. Giữ phần việc từ lượt trước, `.vscode/` và file backup.
2. Chụp tám ảnh “trước” bằng thao tác Start/chọn đáp án thật, tại 1600×1000, 1440×900, 390×844, sáng/tối và drawer. Seed chỉ dùng trong context chụp thử để câu hỏi/phương án giống nhau giữa hai lần; không thay hàm random của sản phẩm.
3. Sửa palette, logo, nền, tỷ lệ và typography. Phát hiện selector `.quiz-box .quiz-opt-btn` của CSS cũ vẫn ép đáp án 13 px; sửa đúng specificity và đo chữ thật trong `.quiz-option-text`.
4. Xem ảnh mới: panel còn dài, nút nộp dưới viewport; rút khoảng cách metadata/câu hỏi, giữ đáp án lớn, chuyển bảng số xuống phần phụ có disclosure. Sau sửa, nút nộp thấy đầy đủ ở 1600×1000 và 1440×900.
5. Xem ảnh nền chi tiết: chữ giới thiệu trực tiếp trên ảnh bị giảm tương phản; thêm bề mặt kính đậm cho hero khi dùng ảnh cá nhân. Giữ card học có alpha tối thiểu 90%.
6. Sửa hai cascade khác: nền chọn đáp án ngữ pháp dùng selector đúng `:checked`; tiêu đề phụ của đề không ghi đè kích thước câu hỏi chính. Chụp lại cùng trạng thái để so sánh.

[Ảnh trước/sau, các trạng thái và log](evidence/reference/README.md). Đã mở và tự xem ảnh quiz desktop/mobile, drawer, dark, ngữ pháp/đề, chữ lớn và nền nhiều chi tiết; không chỉ dựa vào khẳng định không tràn ngang.

## Bảo toàn chức năng

- Không thay ngân hàng **921 thẻ, 71 bài đọc, 37 mục/666 bài ngữ pháp, 8 đề/360 câu**, ID, phương án, khóa đáp án hoặc cách chấm.
- Sáu cặp ảnh so sánh có cùng câu hỏi, phương án, đáp án đã chọn và vị trí; hash toàn bộ file `data/` khớp baseline. Xem [preservation.json](evidence/reference/preservation.json).
- Bảng Giao diện tiếp tục dùng module lưu an toàn đã có: cấu hình nhỏ ở localStorage, ảnh Blob trong IndexedDB riêng; reset không xóa bài/đề nhập/lịch sử. Mặc định mới 66%/blur 20 px chỉ áp dụng khi chưa lưu; lựa chọn hợp lệ cũ như 82%/14 px vẫn giữ nguyên.
- Giữ phím D, Escape, focus, mở trực tiếp file, tài nguyên tương đối và tiền tố Pages. Không dựng lại bài hoặc đảo phương án khi mở bảng, chuyển theme/nền hay đổi kích thước.
- Disclosure mới được thao tác bằng summary thật trong các kiểm thử cũ; giữ nguyên các khẳng định chấm bài, thứ tự, 921 câu, lưu/khôi phục và quyền sửa nhiều tab.

## File chính

- `assets/tokens.css`, `assets/shell.css`: màu teal, chất liệu, tỷ lệ, chữ lớn, trạng thái đáp án và responsive; sửa cascade phù hợp DOM thật `#quizOptions`.
- `assets/backgrounds/{mint,sakura,ocean}.svg`, `assets/logo.svg`, `assets/favicon.svg`: tài nguyên vector cục bộ, không font/ảnh/mạng ngoài.
- `assets/appearance-init.js`, `assets/appearance.js`, `assets/appearance.css`: mặc định mới và bố cục/thumbnail 350 px; giữ bộ lưu và xử lý lỗi.
- `index.html`, `assets/app.js`: tiêu đề quiz, thẻ khám phá có chức năng, thứ tự vùng phụ; giữ các ID/data-mode.
- `assets/mobile.js`: mở/đóng và chuyển breakpoint của disclosure; không sửa session.
- `tests/check_reference_ui.py`: kiểm tra kích thước/chữ/màu thực, đủ năm viewport, ảnh cá nhân chi tiết, trạng thái bài, cài đặt cũ, tải feature và file/Pages.
- `tests/check_grammar.py`, `tests/check_quiz.py`: mở disclosure trước thao tác điều khiển vừa thu gọn, giữ các kiểm tra nghiệp vụ.
- `scripts/capture_reference_ui.py`, `scripts/compare_reference_ui.py`: tái tạo ảnh cùng fixture và đối chiếu trạng thái/hash.

Không đổi dependency hoặc thêm framework/backend. Font Việt và Nhật cục bộ từ lượt trước được giữ, cùng giấy phép. Các script tạo SVG/tùy chỉnh không cần máy chủ ứng dụng.

## Kết quả kiểm thử thực tế

**20/20 suite Python đạt**, gồm bộ mới theo ảnh; hai kiểm tra Node và `npm run format:check` đạt. [Log từng suite](evidence/reference/test-results.json), [tổng hợp môi trường/phạm vi](evidence/reference/verification.json).

- Toàn bộ hồi quy chạy trên Chromium **153.0.8010.12**: chấm từ vựng, 666 bài ngữ pháp, 360 câu đề, nhập/xuất/ảnh, nhiều tab, lưu/khôi phục, đồng hồ, xáo trộn, âm thanh, mobile, dữ liệu lưu lỗi/bị chặn, file và prefix Pages. Một số bộ cũ còn chạy các ca Firefox riêng như trước.
- Bộ mới chạy thêm trên Firefox **155.0**. Xác nhận font đáp án thật 18–22 px, prompt lớn, màu/chọn/badge, kích thước sidebar/drawer, cỡ chữ 20, nền chi tiết, cài đặt cũ và giữ bài.
- Dùng quiz thật 921 câu để chuyển bằng bảng số đến lựa chọn dài nhất hiện có (54 ký tự); bốn đáp án chuyển một cột và không cắt chữ, kiểm tra trên Chromium và Firefox. Không tạo chuỗi giả vào DOM để ép kết quả.
- Native zoom 200% dùng profile Chromium: cửa sổ 1440, viewport CSS 720, DPR 2, scale 1; đủ bảy chế độ, sáng/tối và drawer. Sau chỉnh cuối bỏ hero lặp trên mobile, chạy lại reference/mobile/native zoom đều đạt.
- Không có lỗi JavaScript chưa xử lý hoặc HTTP 4xx/5xx trong các luồng bộ mới theo dõi. Không suy rộng kết quả này sang các trình duyệt/thiết bị chưa chạy.

Tải ban đầu cuối đo qua HTTP cục bộ, browser context trống, 390×844, HTTPS ngoài bị chặn: **929.860 byte tài nguyên không nén, 24 request, 568 DOM element**; [chi tiết](evidence/reference/after-metrics.json). Đây là số lượng tài nguyên, không phải phép đo tốc độ. SVG nền/logo cục bộ thêm khoảng 15 KB, không tải ảnh raster hoặc font từ mạng.

## Khác biệt còn lại so với ảnh

- Sản phẩm dùng nội dung Nhật, cách đọc, phạm vi và nguồn PDF thật; câu dài sẽ cao hơn câu FIFO một dòng trong mẫu. Shortcut và bảng số phụ có thể cần cuộn một đoạn. Không giảm chữ để ép mọi câu vào một khung cố định.
- Nền là SVG nguyên bản có dải cong và highlight, không tái tạo từng chi tiết/chất liệu raster trong ảnh mẫu.
- Header chỉ hiện tìm kiếm khi phạm vi đó có chức năng thực; quiz đang làm hiện tên khu vực. Không thêm streak/thông báo/tài khoản không có dữ liệu.
- Panel Giao diện chỉ mở khi bấm nút, có đầy đủ cấu hình nên cuộn dọc; chỉ màn rất rộng thu vùng học để tạo ba cột, màn 1440 trở xuống dùng overlay.
- Safari/iOS, trình đọc màn hình và bàn phím điện thoại thật chưa được xác minh. Kiểm thử viewport/zoom desktop không thay thế kiểm tra thiết bị thật; chưa chạy bản này trên Pages công khai.

## Cách chạy

Mở `index.html` hoặc chạy `python -m http.server 8000`. Nút **Giao diện** ở cuối sidebar/biểu tượng bảng màu trên điện thoại; D đổi sáng/tối ngoài ô nhập liệu/dialog. Không cần tài khoản.

```powershell
node tests/check_logic.js
node tests/check_chapter67.js
python tests/run_checks.py
npm run format:check
```

Ghim dependency và chọn Chromium/Edge/Firefox theo README. Tạo lại ảnh so sánh sau sửa bằng `python scripts/capture_reference_ui.py after`, rồi `python scripts/compare_reference_ui.py`. Không chạy `before` lên bản mới nếu muốn giữ baseline đã bàn giao.
