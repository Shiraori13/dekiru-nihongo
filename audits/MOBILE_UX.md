# Giao diện mobile — 22/10/2026

Áp dụng ở độ rộng tối đa 760 px. Bố cục PC dùng các điều khiển và dữ liệu hiện có; phần thu gọn tự mở khi chuyển về màn hình lớn.

## Vấn đề và thay đổi

| Trước | Sau |
|---|---|
| Header 7 chế độ cao khoảng 183 px tại 390 px; nội dung học xuống dưới màn hình đầu | Header khoảng 65 px; 4 chế độ chính ở thanh đáy, Kiểm tra/Danh sách/Hán tự trong menu Khác |
| Bộ lọc, thư viện, thống kê và nội dung cùng mở | Bộ chọn bài và công cụ mở khi cần; tên mục đang học vẫn hiện ở phần thu gọn |
| Thư viện đọc/từ Hán che nội dung đang học | Chọn xong tự đóng bộ chọn và đưa nội dung đã chọn vào vùng nhìn, dưới header |
| Cả hai bảng xem nét và tập viết xếp nối tiếp | Chuyển giữa Xem nét và Tự viết; hai công cụ dùng nguyên logic cũ |
| Bảng từ nhiều cột cần đọc ngang; 921 mục nối tiếp | Thẻ dọc gồm từ/kana/nghĩa/nút nghe, hiện 50 mục mỗi đợt và có Xem thêm; lọc lại bắt đầu từ đợt đầu |
| Bảng câu hỏi và phần thiết lập chiếm nhiều diện tích khi làm bài | Thu gọn bảng câu hỏi; bài đang làm ưu tiên câu hỏi/đáp án, đề 45 câu có tiến trình ngay trên câu |
| 45 phần xem lại và lời giải cùng mở | Tóm tắt từng câu, mặc định mở câu đầu; chạm để đọc lời giải và phân tích đáp án; bảng số vẫn mở được để đến câu cần xem |
| Popup nghĩa và thông báo âm thanh có thể đè nhau/đè điều hướng | Chia khoảng trống giữa header và thanh đáy; mỗi popup giới hạn chiều cao, cuộn được, kể cả màn hình ngang |

Thanh điều hướng được đặt ngoài header khi ở mobile. Header có `backdrop-filter`, có thể tạo vùng chứa cho phần tử `fixed`; đặt thanh đáy bên trong sẽ làm thanh này bám header thay vì viewport. Khi trở về PC, thanh được đưa lại đúng vị trí cũ.

## Tương tác và khả năng tiếp cận

- Dùng lại chính các nút, input và ID cũ; không tạo thêm bản sao bộ lọc hoặc đáp án.
- Bộ chọn dùng `details/summary` gốc, dùng được với bàn phím. Menu Khác dùng `dialog` gốc, có tiêu đề, nút đóng, Escape và trả focus về nút mở.
- Các chế độ ẩn trong menu vẫn có trạng thái đang chọn. Đổi chế độ không xóa bài đang làm; quay lại PC có đủ 7 nút ở header.
- Nút và trường nhập chính có vùng chạm tối thiểu 44 px; input/select có cỡ chữ 16 px để tránh zoom khi nhập trên mobile. Chừa safe area ở tai thỏ/thanh Home và khoảng cuộn dưới thanh điều hướng.
- Không khóa phóng to trang. Giữ nguyên các cỡ chữ đọc 22/26/30/34, gợi ý và phát âm.
- Chỉ lưu trạng thái mở/đóng trong phiên trang. Tiến độ, bài làm, đề nhập và bản nháp tiếp tục dùng cơ chế lưu cũ.
- Không thêm ảnh/font/dịch vụ mạng ngoài. Font Nhật được tạo lại từ nguồn Noto Sans JP cục bộ. Hạn chế chuyển màu trên hàng loạt phần tử ở mobile; tôn trọng chế độ giảm chuyển động sẵn có.

## Kiểm tra

`python tests/check_mobile.py` kiểm tra:

- Header/thanh đáy không giao nhau, không tràn ngang, đủ 7 chế độ truy cập được, menu đóng bằng Escape và trả focus.
- Lọc từ, thẻ ghi nhớ, danh sách 50→100 mục, đặt lại khi tìm kiếm, trạng thái không có kết quả.
- Chọn bài đọc, tự đóng bộ chọn, cỡ chữ 34, gợi ý, từ vựng và popup nghĩa.
- Chọn từ Hán, đổi công cụ, vẽ/hoàn tác và xem từng nét.
- Lọc/ngữ pháp/luyện tập, quiz từ vựng, đề 45 câu, xác nhận nộp, phần xem lại và đi tới lời giải qua bảng số.
- Màn hình 320×568, 390×844, 430×932, 740×390; sáng/tối; popup âm thanh và nghĩa cùng hiện.
- Đổi về 1440 px: đủ 7 nút header, bộ lọc/thư viện mở, bảng từ đủ 921 dòng, hai bảng tập viết cùng hiện.
- Firefox mở trực tiếp `index.html` và thay đổi breakpoint.

Kiểm thử từ vựng/luyện đọc và luyện đề được cập nhật để thực hiện đúng thao tác mở bộ chọn/quay về chọn đề trên mobile. Các bộ kiểm tra PC tiếp tục dùng các điều khiển cũ. Đây là kiểm thử trình duyệt với kích thước mobile, chưa phải kiểm thử trên thiết bị iOS/Android thật.

Mã giao diện: `assets/mobile.css`, `assets/mobile.js`. `index.html` nạp hai file này sau các tính năng hiện có và thông báo khi đổi chế độ.
