# Sửa nhãn mobile và không gian học — 23/10/2026

Sửa tiếp trên workspace hiện tại, giữ các thay đổi trước; nhánh `main`, HEAD `11c7613`. Chưa commit, push hoặc deploy.

## Lỗi đã tái hiện và cách sửa

**Menu “Bạn muốn học gì?” bị lặp.** Mỗi nút gốc có nhãn desktop và nhãn mobile để thích ứng kích thước. CSS mới hiện lại nhãn desktop, nhưng rule ẩn chỉ áp dụng cho nút trong `.mode-tabs`. Ba nút chuyển vào menu Khác nằm ngoài vùng này nên hiện cả hai nhãn và hai icon.

Sửa rule ẩn nhãn desktop cho toàn breakpoint mobile. Giữ nguyên ba nút trong menu, bốn nút thanh đáy, ID/data-mode và sự kiện cũ; không xóa chữ bằng xử lý chuỗi hoặc nhân bản thêm nút.

**PC chừa cột Giao diện, vùng học co giãn.** Có hai nguyên nhân: `main` bị giới hạn 1280 px; màn rộng từ 1500 px lại trừ thêm 388 px khi mở bảng. Vì vậy màn lớn vẫn có khoảng trống bên phải và khi mở bảng nội dung học thay đổi chiều rộng.

Bỏ giới hạn chung của `main` và rule trừ chiều rộng. Bảng Giao diện trở thành modal overlay độc lập ở mọi kích thước PC: rộng 350 px, cách mép 16 px; mở/đóng không đổi kích thước/vị trí flashcard. Mobile dùng panel phù hợp chiều rộng màn hình. Quiz vẫn giữ giới hạn riêng để câu và đáp án dễ đọc; không còn giới hạn vùng học chỉ để dành chỗ cho bảng ẩn.

Khi trực tiếp xem ảnh Firefox, thấy chữ phía sau còn hằn qua các hộp thoại dù thuộc tính blur được hỗ trợ. Menu và bảng Giao diện dùng nền đặc theo theme để đọc rõ, độc lập slider kính của trang; giữ viền, bóng và lớp nền trang hiện có. Không đổi dữ liệu, cách chấm, bài đang làm, lưu ảnh hoặc cài đặt của người học.

## Kích thước thực đo

Đo `main` và `.flashcard-container`, cùng viewport cao 1000 px; trước/sau mở bảng, cả sáng/tối:

| Viewport | Trước: đóng → mở bảng | Sau: đóng → mở bảng |
|---|---|---|
| 1280 px | 998 → 998 px | 998 → 998 px |
| 1440 px | 1158 → 1158 px | 1158 → 1158 px |
| 1600 px | 1280 → 948 px | 1318 → 1318 px |
| 1920 px | 1280 → 1268 px | 1638 → 1638 px |

Khoảng trống bên phải ở 1920 px giảm từ 376 xuống 18 px. Menu từ hai nhãn/hai icon thành đúng một nhãn/một icon trên mỗi hàng. Khi đổi kích thước lúc đang mở bảng qua mốc 1499/1500 px, vùng học vẫn không bị dành riêng một cột.

## File và bằng chứng

- `assets/shell.css`: sửa phạm vi ẩn nhãn, mở rộng `main`, bỏ cột dành cho Giao diện; menu có nền đọc rõ.
- `assets/appearance.css`: overlay nhất quán, không đặt panel thành cột bên dưới header; nền hộp thoại không cho chữ phía sau hằn qua.
- `tests/check_ui_space.py`: hồi quy hai lỗi bằng điều khiển thật, đo rect trước/trong/sau; kiểm tra nhãn/icon hiển thị, đủ bảy nút gốc, chuyển breakpoint, cỡ chữ 20 px, theme, nền ảnh chi tiết/slider 55%, focus/Escape và giữ quiz đang làm; chạy cả file và prefix Pages.

[Ảnh trước/sau và kết quả kiểm thử](evidence/ui-space/README.md). Kiểm tra có mở ảnh trực tiếp trên Chromium và Firefox, ngoài kiểm tra DOM/CSS. Bản sửa này chỉ thay CSS giao diện; các bộ chấm và lưu bài cốt lõi giữ nguyên.

Các kiểm thử được chạy theo phạm vi bị ảnh hưởng: mobile, appearance, bố cục bảy chế độ/chữ lớn, giao diện theo ảnh mẫu, phím flashcard và native zoom 200%; thêm bộ mới trên Chromium/Firefox. Hai kiểm tra Node và format cũng đã chạy. Không chạy lại toàn bộ 666 câu ngữ pháp/360 câu đề trong đợt sửa CSS này; log full 20 bộ của đợt trước được giữ riêng.

Safari/iOS, bàn phím và trình đọc màn hình trên điện thoại thật chưa được kiểm tra; kiểm thử mobile dùng viewport trình duyệt desktop. Chưa đưa bản sửa lên GitHub Pages công khai.
