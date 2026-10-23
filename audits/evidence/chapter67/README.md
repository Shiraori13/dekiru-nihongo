# Kiểm thử bốn đề bài 6–7

[Báo cáo nội dung/ma trận](../../CHAPTER67_EXAMS.md) · [Ma trận JSON](../../chapter67-matrix.json) · [Log kiểm thử](test-results.json) · [Thông tin trình duyệt](browser.json).

Phần này là bằng chứng của lần bổ sung 4 đề/180 câu. Bằng chứng trước/sau của mốc sửa ứng dụng trước đó nằm ở [thư mục cha](../README.md); số đo/ảnh cũ không được trình bày như số đo của ngân hàng mới.

## Kịch bản

- `check_chapter67.js`: đối chiếu ma trận trực tiếp đề mẫu; 4×45, 18 mục/6 topic từng đề; 180 ID/đề bài khác nhau; 56 từ đích đọc/viết khớp dữ liệu PDF độc lập (gồm tiền tố お tùy chọn của 皿), đúng trang nguồn khi topic nối sang trang sau; khóa A–D và lời giải đi cùng; fixture chia dạng/đáp án độc lập; dấu SHA-256 của bốn đề cũ không đổi.
- `check_chapter67.py`: luồng không vá helper tải dữ liệu; mở bộ lọc bài 6–7; trả lời 試合 đúng, chọn 水着 đúng rồi sửa thành みずき sai; nộp với kỳ vọng cố định **1 đúng, 1 sai, 43 trống, 0,22/10**. Kiểm tra xuất kết quả đúng từng câu gốc, lời giải đủ bốn lựa chọn, đánh dấu/thứ tự/giờ giữ qua tải lại, bộ lọc không thay bài đang làm, `file://`, toàn bộ glyph Nhật mới và ảnh desktop/mobile. Có lượt Chromium và Firefox riêng trong log.
- `check_exams.py`: kiểm tra 8 đề/360 câu, phạm vi 4–5 và 6–7 riêng, danh mục 127+125 mục, lọc/focus/giờ/tiếp tục; duyệt cả 360 khóa qua UI; lịch sử, thời gian, nhập/xuất, ảnh, dữ liệu sai/bị chặn, responsive và Firefox.
- `check_exam_shuffle.py`: 360 lời giải/ánh xạ lựa chọn, 200 hoán vị, giữ câu–đáp án–đánh dấu qua tải lại/lịch sử/xuất; bài cũ/migration; Firefox mở đề 04 qua `file://`.
- Các bộ hồi quy bổ sung trong log: hủy thay bài ngữ pháp, nghĩa tương đương, nhiều tab, đề vừa nhập ở tab khác, bộ nhớ và mobile.

Không coi việc duyệt khóa đang lưu là bằng chứng độc lập rằng mọi câu tiếng Nhật đúng. Nguồn PDF/mẫu ngữ pháp và fixture có vai trò riêng; độ tự nhiên, bản dịch và sắc thái toàn bộ câu vẫn cần giáo viên duyệt độc lập. Chưa push/deploy hoặc chạy GitHub Actions trong lần này.

## Ảnh đã tự xem

| Màn hình | Sáng | Tối |
|---|---|---|
| Thư viện lọc bài 6–7, 320 px | [Ảnh](library-320-light.png) | [Ảnh](library-320-dark.png) |
| Thư viện lọc bài 6–7, 390 px | [Ảnh](library-390-light.png) | [Ảnh](library-390-dark.png) |
| Kết quả 1 đúng/1 sai/43 trống, 320 px | [Ảnh](result-320-light.png) | [Ảnh](result-320-dark.png) |
| Kết quả 1 đúng/1 sai/43 trống, 390 px | [Ảnh](result-390-light.png) | [Ảnh](result-390-dark.png) |
| Desktop 1280 px | [Thư viện](library-1280-light.png) | [Kết quả](result-1280-light.png) |

[Câu hỏi đang làm trên mobile 390 px, tối](question-390-dark.png). Các bộ chọn bài/giờ nằm cùng hàng trên điện thoại, nội dung dài cuộn dọc; font Nhật đóng gói hiển thị cả câu hỏi và lời giải. Lời giải không hiện trước khi nộp. Ảnh chụp từ browser thật, không phải mockup.
