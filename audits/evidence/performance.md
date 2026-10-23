# Số đo tải ban đầu — 22–23/10/2026

| Trạng thái | Byte nội dung chưa nén | DOM đang nối vào document | Request nội bộ |
|---|---:|---:|---:|
| Trước sửa, trang mới | 2,070,604 | 4,926 | 22 |
| Sau sửa, trang mới | 799,564 | 384 | 15 |
| Sau sửa, có bài luyện đề thời gian cần khôi phục | 1,172,057 | 1,140 | 20 |

Trang mới giảm **61.4% byte** và **92.2% DOM** theo hai lần đo này. Đây là số lượng tài nguyên/DOM, không phải tuyên bố thời gian tải nhanh hơn.

Điều kiện: HTTP server Python cục bộ không nén, profile/context sạch, viewport 390×844, cùng workspace Windows; trước dùng Edge, sau dùng Chromium 153.0.8010.12. Chặn request HTTPS ngoài để loại nhiễu từ Google Fonts. Chờ font cục bộ và giao diện mobile sẵn sàng, chưa mở phần học khác, chưa phát MP3. Cộng decodedBodySize của HTML và tài nguyên nội bộ; đếm `document.querySelectorAll('*')` (không gồm con trong template inert). Không dùng kích thước chuyển giao nén, timing hoặc cache nóng. Không so sánh tốc độ giữa hai trình duyệt.

Trước có một request favicon 404 (0 byte); sau có SVG favicon, việc browser có yêu cầu favicon phụ thuộc profile. Danh sách tài nguyên gốc: [trước](before-metrics.json), [sau](after-metrics.json). Đo `file://` vẫn dùng cho hành vi, không dùng ResourceTiming file để cộng byte vì có thể thiếu mục.

Khi có bài luyện đề chưa nộp, tải thêm dữ liệu đề/base ngữ pháp và UI cần thiết để khôi phục đồng hồ nền. Đây là phạm vi tải có chủ đích; không tải bài đọc/Hán tự. [Mẫu khôi phục](resume-metrics.json) dùng đường dẫn `/dekiru-nihongo/`, có request Google Fonts bị chặn (0 byte, loại khỏi số request nội bộ).

Các script cổ điển được tải nối theo phụ thuộc và dùng chung promise; CSS mobile giữ thứ tự sau CSS từng phần. Không dùng fetch/ES modules để nạp dữ liệu, nhằm giữ `file://`. Dữ liệu âm thanh dạng manifest tải sẵn, file MP3 chỉ tải khi phát. Font bổ sung 2.208 byte chỉ dùng cho bảy thành phần Hán thiếu trong font JP.
