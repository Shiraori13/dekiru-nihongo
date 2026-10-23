# Liquid glass và tùy chỉnh giao diện — 23/10/2026

**Đợt kế tiếp có ảnh tham chiếu:** xem [báo cáo đối chiếu ảnh mẫu và typography/teal](REFERENCE_UI_REPORT.md). Báo cáo bên dưới lưu trạng thái lịch sử trước khi người dùng đính kèm ảnh; các số đo/bằng chứng riêng của đợt theo ảnh nằm trong thư mục `evidence/reference/`.

Thực hiện trên `main`, từ workspace tại commit `11c7613f79d6720b94f3ba258e508b96d2338f84`. Bàn giao diff cục bộ; **chưa commit, push, merge hoặc deploy** trong đợt giao diện này. Giữ nguyên `.vscode/` và `index - Back_up.html` có sẵn.

## Phạm vi và thiết kế

Giữ 921 thẻ từ vựng, 71 bài đọc, 37 mục/666 bài tập ngữ pháp và 8 đề/360 câu. Không sửa ngân hàng nội dung, ID, khóa đáp án, logic chấm, định dạng đề, nhập/xuất hoặc kho bài làm. SHA-256 của toàn bộ file `data/` được so sánh với bản ghi trước sửa trong bằng chứng bàn giao.

Không có ảnh tham chiếu thực tế kèm file yêu cầu trong phiên này. Thiết kế dựa trên mô tả mint/xanh trời/lavender, nền có chiều sâu, viền sáng và bóng mềm; không tuyên bố khớp một mockup chưa được cung cấp.

- Desktop: sidebar 232 px với bảy chế độ, logo SVG sách mở/chữ **学**, nút Giao diện ở cuối; header có tên khu vực, tìm kiếm đúng phạm vi nếu màn đó hỗ trợ và nút sáng/tối.
- Tablet: sidebar thu về rail 88 px; bộ chọn đọc/Hán tự/ngữ pháp chuyển thành phần mở rộng, tránh hai sidebar ép nội dung học. Vùng học trở lại hai cột khi đủ rộng.
- Mobile: dùng lại bảy nút gốc qua thanh đáy/menu Khác; nút Giao diện ở header. Đổi qua lại breakpoint di chuyển điều khiển cũ, không tạo bản sao.
- Bảng Giao diện là native modal dialog bên phải, cuộn độc lập; Escape đóng, Tab giữ trong bảng, đóng xong trả focus. Nó không đổi chế độ, dựng lại `main`, thay bài, đảo đáp án hoặc dừng đồng hồ.
- Điều hướng/panel phụ có alpha thấp hơn; vùng chữ và đáp án có nền tối thiểu 90% để giữ khả năng đọc. Blur có giới hạn, fallback nền đặc khi không hỗ trợ. Chuyển động tôn trọng `prefers-reduced-motion`.
- Font giao diện Plus Jakarta Sans 45.800 byte và font Nhật đều cục bộ, kèm giấy phép. Cỡ giao diện 16/17/18/20 px; cỡ chữ luyện đọc vẫn độc lập. Câu trả lời ngắn có thể hai cột, nội dung dài chuyển một cột theo độ rộng chữ thực tế.

## Tùy chỉnh và chính sách lưu

| Thành phần | Cách xử lý |
|---|---|
| Sáng/tối | Áp dụng từ `head`, đồng bộ nút/nhãn/icon/ARIA và `dekiru_theme`; phím D không chạy khi nhập liệu hoặc đang mở dialog |
| Ba nền có sẵn | Mint, Sakura, Đại dương là CSS gradient, dùng được offline; chọn nền có dấu ✓ |
| Ảnh cá nhân | PNG/JPEG/WebP/GIF, tối đa 20 MB và 48 triệu pixel; cạnh dài thu về tối đa 2.560 px, GIF lấy khung đầu, chuyển Blob ảnh |
| Cấu hình nhỏ | `localStorage.dekiru_appearance_v1`, tương thích key theme cũ; kiểm tra dữ liệu và bắt lỗi đọc/ghi |
| Ảnh | Database IndexedDB riêng `dekiru_appearance_v1`, store `background`, key `custom`; không chứa trong kho đề/bài làm |
| Blob URL | Chỉ tồn tại trong phiên; tạo lại từ Blob khi mở trang, thu hồi URL cũ khi thay/xóa ảnh; không lưu URL/base64 trong localStorage |
| Lỗi bộ nhớ | Tiếp tục học và dùng cấu hình/ảnh trong RAM, có thông báo giới hạn; ảnh không ghi được sẽ dùng Mint khi mở lại thay vì tự hiện ảnh cũ |
| Khôi phục mặc định | Chỉ xóa cấu hình và ảnh của tính năng Giao diện; không xóa bài, lịch sử, từ yêu thích, tiến độ hoặc đề nhập |

Ảnh được xử lý theo generation và hàng đợi ghi. Lệnh xóa vẫn phải thực thi khi người dùng chọn preset ngay sau reset/remove; upload đến sau chỉ được lưu nếu còn là yêu cầu mới nhất. Lỗi transaction ảnh không làm hỏng database bài làm. Khi trình duyệt từ chối xóa một Blob đã lưu, bảng báo rõ chỉ xóa trong phiên; không thể cam kết xóa bền vững khi trình duyệt chặn ghi.

Logo trở về Thẻ ghi nhớ mà không gọi `location.reload()`. Tìm kiếm trên header chỉ đưa focus đến bộ tìm kiếm đang có và mở bộ lọc cần thiết; không có tìm kiếm toàn website giả.

## File chính

| Nhóm | File |
|---|---|
| Khung/điều hướng | `index.html`, `assets/app.js`, `assets/mobile.js` |
| Biến và bố cục | `assets/tokens.css`, `assets/shell.css`; bỏ định nghĩa theme trùng trong `app.css`, `study.css`, `grammar.css`, `exams.css` |
| Tùy chỉnh | `assets/appearance-init.js`, `assets/appearance.js`, `assets/appearance.css` |
| Hiển thị đáp án | `assets/presentation.js`: chỉ thêm/bỏ class số cột, không đổi dữ liệu/thứ tự/điều khiển |
| Nhận diện/font | `assets/logo.svg`, `assets/favicon.svg`, `assets/fonts/PlusJakartaSans-latin.woff2`, giấy phép và `scripts/build_ui_font.py` |
| Kiểm thử | `tests/check_appearance.py`, `tests/check_glass_layout.py`, `tests/glass_support.py`; cập nhật giả định bố cục/đường dẫn bằng chứng trong mobile, delivery, zoom, màu nét viết theo token trong kanji |
| Tài liệu/cấu hình | README, CHANGELOG, IMPLEMENTATION_REPORT, báo cáo này, font README và danh sách JS trong `package.json` format/check |

`FeatureLoader` vẫn tải classic script theo thứ tự phụ thuộc, tương thích `file://`. CSS ngữ pháp/đề được chèn trước mobile/shell/appearance; các màu feature dùng chung token, không ghi đè theme riêng. Không cần sửa loader hoặc thêm framework/backend.

## Khảo sát và lỗi phát hiện khi triển khai

Trước sửa có 12 ảnh ở bốn kích thước và các màn đọc/Hán tự/ngữ pháp/đề; ba bộ mobile, phím thẻ và hồi quy đạt. Không thấy lỗi JavaScript chưa xử lý trong các luồng ghi baseline. Khi chặn mạng ngoài, font giao diện cũ chuyển về font hệ thống; bản mới đóng gói font Việt.

Các lỗi phát hiện và sửa trong đợt giao diện:

| Vấn đề | Nguyên nhân/cách sửa |
|---|---|
| Nhãn desktop chèn lên thanh đáy | CSS shell đứng sau mobile; bổ sung ẩn đúng `.desktop-tab-label` tại breakpoint điện thoại |
| Tên logo bị nối với nhãn phụ, rail hiển thị motto từng từ | Thiếu quy tắc nhãn phụ/footer; cho nhãn phụ xuống dòng, cỡ riêng, bỏ motto trong rail |
| Chọn Mint sau tải ảnh vẫn thấy ảnh | Ảnh nằm trong background chung; chỉ áp dụng Blob URL khi `data-background=custom` |
| Reset/remove rồi chọn preset quá nhanh còn Blob cũ | Generation mới khiến tác vụ xóa bị bỏ qua; tác vụ xóa luôn chạy theo hàng đợi, generation chỉ loại upload cũ |
| D không đổi theme khi nút thường đang focus | Guard điều khiển chặn quá sớm; xử lý D sau guard nhập liệu/dialog và trước guard nút |

## Bằng chứng và kiểm thử

**Kết quả cuối: 19/19 bộ Python đạt, hai kiểm tra Node đạt, `npm run format:check` và Python compile đạt.** Môi trường Windows, Python 3.11, Node 24, Playwright 1.63.0; Chromium 153.0.8010.12 cho toàn bộ bộ hồi quy. Hai bộ mới được chạy thêm trên Firefox 155.0; Edge 155.0.4283.62 được kiểm tra độc lập về ảnh/lưu trữ và native zoom 200%.

Kết quả chạy cuối, phiên bản trình duyệt và danh mục ảnh được ghi trong [thư mục bằng chứng](evidence/glass/README.md). Kiểm tra đúng/sai/bỏ trống, 666 bài ngữ pháp, 360 câu đề, nhập/xuất/ảnh, khóa nhiều tab, timer, khôi phục và xáo trộn dùng lại các bộ hồi quy hiện có; không đổi kỳ vọng chấm để phù hợp giao diện.

Lượt chạy toàn bộ bị ngắt giữa chừng khi phiên làm việc tiếp tục; các bộ còn lại được chạy nối bằng runner, kết quả cuối tổng hợp đủ 19 bộ. Hai ca được chạy lại sau sửa giả định kiểm thử: helper phải đợi nút gốc chuyển xong sau resize; màu bút Hán tự phải đổi theo token sáng/tối mới thay vì hằng màu cũ. Giữ kiểm tra nét vẽ thực sự đổi màu và toàn bộ các kiểm tra nghiệp vụ. [Kết quả cuối theo từng suite](evidence/glass/test-results.json), [Firefox](evidence/glass/firefox-test-results.json).

Hai bộ mới kiểm tra bảng bằng chuột/bàn phím; theme/preset qua reload; ảnh hợp lệ/hỏng/lớn, Blob/URL; lỗi localStorage và transaction IndexedDB; reset cô lập; giữ nguyên câu/lựa chọn/gợi ý/đồng hồ; di chuyển điều hướng; font offline; CSS feature tải muộn; mở file và tiền tố Pages. Ma trận hình ảnh gồm 320×568, 390×844, 768×1024, 1440×1000, sáng/tối, đang làm/kết quả, màn hình thấp/ngang và bảng Giao diện.

Zoom trang gốc 200% được kiểm tra bằng profile Chromium/Edge: cửa sổ 1440 px, viewport CSS 720 px, devicePixelRatio 2, visualViewport.scale 1. Đây tách biệt với phép mô phỏng reflow; không gọi mô phỏng là native zoom. Ảnh được mở trực tiếp để rà chữ, logo, vùng chọn và bố cục, ngoài kiểm tra tràn ngang.

Số byte tải ban đầu cuối: **914.475 byte, 23 request, 537 phần tử DOM**, đo HTTP cục bộ, Chromium 153, viewport 390×844, tài nguyên không nén, hồ sơ trống và chặn HTTPS ngoài; chi tiết trong [after-metrics.json](evidence/glass/after-metrics.json). Lần mở lại có bài thi đang chạy được đo riêng. Việc đóng gói font/tùy chỉnh thêm tài nguyên so với bản trước; không tuyên bố cải thiện tốc độ tải. Dữ liệu các chế độ chưa mở vẫn tải muộn.

## Mở và sử dụng

Mở `index.html` trực tiếp, hoặc chạy `python -m http.server 8000` rồi mở `http://localhost:8000`. Giữ các thư mục đi kèm HTML. Bấm **Giao diện** cuối sidebar hoặc biểu tượng bảng màu trên điện thoại; chọn nền/theme, tải ảnh hay kéo slider. Escape đóng bảng. D đổi sáng/tối ngoài ô nhập liệu. Ảnh và cấu hình chỉ lưu trên trình duyệt/thiết bị hiện tại.

```powershell
python -m pip install -r requirements-dev.txt
python -m playwright install chromium firefox
npm ci --ignore-scripts
$env:DEKIRU_BROWSER='chromium'
node tests/check_logic.js
node tests/check_chapter67.js
python tests/run_checks.py
npm run format:check
```

Đổi `DEKIRU_BROWSER` thành `edge`/`firefox` để kiểm tra tương ứng. CI sẵn có tự tìm `check_*.py`, nên hai bộ mới được chạy cùng workflow push/PR sau khi người dùng quyết định xuất bản.

## Giới hạn

- Kiểm tra tại máy Windows bằng trình duyệt desktop và viewport mô phỏng; Safari/iOS, bàn phím hệ điều hành và trình đọc màn hình trên điện thoại thật chưa được xác minh.
- Đã kiểm tra tiền tố `/dekiru-nihongo/` bằng HTTP cục bộ; chưa deploy lên GitHub Pages hay chạy workflow trên GitHub trong đợt này.
- Native zoom Firefox chưa được kiểm tra. Việc hỗ trợ blur phụ thuộc trình duyệt, có fallback nền đặc; không có đo hiệu năng GPU/thiết bị yếu.
- Ảnh không đồng bộ thiết bị. Khi lưu trữ bị chặn, chỉ duy trì trong phiên và có thông báo; mở lại có thể dùng nền mặc định.
