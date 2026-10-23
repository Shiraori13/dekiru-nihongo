# Bằng chứng header, streak và bộ chọn bài

Đo và chụp ứng dụng thật, HTTP cục bộ; tài nguyên ngoài bị chặn. Viewport CSS, zoom 100%, font cục bộ đã tải; giảm chuyển động để ảnh ổn định. Trước sửa dùng trạng thái workspace ngay trước đợt này; sau sửa chọn bài 6 ở bộ chọn Hán tự/ngữ pháp và giữ quiz 10 câu với hai lựa chọn đã ghi nhận. Quiz được sinh ngẫu nhiên; các cặp ảnh dùng để so bố cục, không phải diff cùng nội dung câu.

| Màn hình | Trước | Sau |
|---|---|---|
| Header/flashcard 1920×1000 | [Ảnh](before/flashcard-1920.png) | [Ảnh](after/flashcard-1920-light.png) |
| Quiz 1920×1000 | [Ảnh](before/quiz-1920.png) | [Ảnh](after/quiz-1920-light.png) |
| Hán tự 1920×1000 | [Ảnh](before/kanji-1920.png) | [Ảnh](after/kanji-1920-light.png), [vùng chọn/học](after/kanji-selection-1920-light.png) |
| Ngữ pháp 1920×1000 | [Ảnh](before/grammar-1920.png) | [Ảnh](after/grammar-1920-light.png), [vùng chọn/học](after/grammar-selection-1920-light.png) |
| Header mobile 390×844 | [Ảnh](before/flashcard-390.png) | [Ảnh](after/flashcard-390-light.png) |
| Bộ chọn mobile | — | [Hán tự](after/kanji-picker-open-390-dark.png), [ngữ pháp](after/grammar-picker-open-390-dark.png) |
| Màn hẹp 320×568 | — | [Flashcard tối](after/flashcard-320-dark.png), [quiz tối](after/quiz-320-dark.png) |
| Streak mới | — | [Desktop](after/streak-1920-light.png), [mobile](after/streak-390-light.png), [Firefox tối](firefox/after/streak-390-dark.png) |

Đã tự mở xem ảnh desktop, mobile 320/390, bộ chọn đang mở và lịch streak trên cả Chromium/Firefox. Chữ, lựa chọn đang xem và nội dung chính được kiểm tra trực quan ngoài kiểm tra không tràn.

## Số đo

| Tại 1920×1000 | Trước | Sau |
|---|---:|---:|
| Tìm kiếm header | 720 px | 1309 px |
| Khoảng từ cuối nút theme tới mép header | 743 px | 25 px (padding) |
| Khung làm quiz | 1120 px | 1638 px |
| Cột chọn Hán tự / ngữ pháp | 250 / 245 px | 340 / 340 px |
| Phần học còn lại bên cạnh bộ chọn | 1364 / 1369 px | 1274 px |

Ở 1280 px, bộ chọn rộng 290 px và phần học vẫn rộng 684 px. Header mobile cao 65 px, ngọn lửa và các nút không chồng nhau ở 320 px. Số đo gốc: [trước](before/metrics.json), [sau Chromium](results-chromium.json), [sau Firefox](firefox/results-firefox.json).

## Kết quả

- **Chromium 153.0.8010.12:** 11 bộ liên quan đều đạt: study_layout, quiz, mobile, appearance, ui_space, reference_ui, glass_layout, zoom, kanji, flashcard_keyboard, delivery. [Log từng bộ, thời gian và cấu hình](regression-results.json).
- **Firefox 155.0:** bộ mới study_layout đạt, gồm sáu kích thước/bốn khu vực ở cả hai theme; chọn bài/từ thật, giữ nguyên hai đáp án quiz, Tab/Escape/focus, cùng toàn bộ ca streak và `file://`/prefix Pages. [Log](firefox/regression-results.json).
- **Node:** `npm run test:logic` đạt ba bộ: nghĩa/đáp án và cấu trúc toàn ngân hàng, bốn đề bài 6–7, streak theo ngày. `npm run format:check` đạt. CI dùng cùng lệnh logic mới.
- Streak xác minh độc lập: lần đầu 1; tải lại/tab khác vẫn 1; ngày kế tiếp 2; bỏ ngày về 1, kỷ lục 2; qua nửa đêm không tải lại vẫn ghi ngày mới. Bản ghi hỏng/tương lai bị bỏ qua; lưu bị chặn vẫn làm quiz, có dấu `!`/thông báo phiên. Khôi phục Giao diện giữ nguyên lịch và bài.
- Không có lỗi JavaScript chưa xử lý trong các luồng đã kiểm tra. 200% native zoom, bảy chế độ sáng/tối và bộ font Việt/Nhật được các bộ hồi quy xác nhận. Kiểm tra delivery giữ tải theo phần, thử lại/lỗi tải, mở file và prefix; đợt này không tuyên bố tăng tốc tải.

Đã giữ nguyên các khẳng định chấm điểm cũ. Khi chẩn đoán có hai vấn đề trong thao tác tự động: nút số câu nằm dưới thanh đáy dù trong viewport, và test gõ trước khi sự kiện `close` trả focus hoàn tất. Bảng số được đưa vào giữa vùng nhìn trước khi bấm, thêm khẳng định đúng chỉ số câu sau bấm; helper đóng Giao diện chờ sự kiện gốc qua trạng thái aria-expanded. Mobile thêm scroll-padding-bottom để cuộn/focus chừa thanh đáy. Không xóa hoặc nới lỏng khẳng định đáp án/điểm.

Không chạy lại toàn bộ các bộ nội dung/nhiều tab/nhập đề của những đợt trước vì lần này không sửa các bộ chấm, kho lưu bài hoặc ngân hàng. Mobile là mô phỏng viewport; chưa có kiểm tra điện thoại thật/Safari. Prefix Pages là mô phỏng đường dẫn cục bộ; chưa push/deploy.
