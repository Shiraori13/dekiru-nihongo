# Header, streak và bộ chọn bài — 23/10/2026

Tiếp tục trên workspace `main`, HEAD `11c7613`; giữ các thay đổi giao diện trước, bản backup và `.vscode/`. Chưa commit, push hoặc deploy. Không thay ngân hàng, ID, chấm điểm hay định dạng bài làm: 921 từ, 71 bài đọc, 37 mục/666 bài tập ngữ pháp, 8 đề/360 câu.

## Bố cục

Tái hiện bằng Chromium tại 1920×1000: tìm kiếm bị giới hạn 720 px nên sau nút sáng/tối thừa 743 px; khung quiz rộng 1120 px trong vùng học 1638 px; bộ chọn Hán tự/ngữ pháp rộng 250/245 px, chữ phụ 11–12 px.

Tìm kiếm nay co giãn theo phần còn lại; streak và nút theme nằm phía phải, cách mép trong 25 px. Ở 1920 px tìm kiếm rộng khoảng 1309 px. Khung làm quiz/kết quả rộng 1638 px; chỉ giữ hai cột đáp án khi chữ đủ chỗ, đáp án dài vẫn một cột. Trong lúc làm bài, tiêu đề “Ôn tập từ vựng” và phạm vi/tiến độ thay cho lời giới thiệu lặp; lượt mới được đưa về đầu trang. Màn thiết lập vẫn giữ chiều dài dòng phù hợp.

Bộ chọn Hán tự/ngữ pháp dùng cột 290–340 px trên desktop. 1280 px vẫn còn 684 px cho nội dung chính; 1920 px còn 1274 px. Thẻ Hán tự dùng chữ Nhật 24 px; mẫu ngữ pháp 17 px; thông tin bài/nghĩa khoảng 13–15 px ở cỡ mặc định. Nhãn **Đang xem** và viền nhấn xác định lựa chọn, tách với dấu đã học/nắm vững. Bộ lọc Hán tự hai cột đưa danh sách lên sớm hơn. Tablet giữ danh sách hai cột khi mở; điện thoại giữ từng thẻ và mặc định thu gọn. Dùng lại điều khiển gốc, không nhân bản nội dung hoặc thêm hình trang trí chiếm vùng học.

## Quy tắc streak

- Mở trang ở trạng thái đang hiển thị sẽ ghi nhận ngày theo lịch trên thiết bị; lần đầu là 1 ngày. Tải lại, chuyển chế độ hoặc mở nhiều tab trong ngày không tăng thêm.
- Ngày kế tiếp tăng chuỗi; bỏ một ngày bắt đầu lại từ 1, giữ kỷ lục cũ. Không tự tạo lịch sử trước khi tính năng được dùng.
- Mỗi ngày lưu độc lập dưới khóa `dekiru_visit_v1:YYYY-MM-DD`, có version và ngày trùng khóa. Tab cũ không ghi đè cả bộ đếm. Bỏ qua bản ghi hỏng, ngày không hợp lệ và ngày tương lai.
- Trở lại cửa sổ, đồng bộ storage, hoặc đang mở trang qua nửa đêm đều cập nhật. Tính theo ngày lịch, không lấy số giờ chia 24 nên không lệch ở ngày DST 23/25 giờ.
- Ngọn lửa sáng khi hôm nay được ghi nhận, hiệu ứng ngắn cho ngày mới; tôn trọng giảm chuyển động. Bấm mở lịch 14 ngày, chuỗi hiện tại, dài nhất, tổng số ngày và trạng thái lưu; hỗ trợ Tab/Escape và trả focus.
- Lưu riêng trên trình duyệt, không phải thành tích làm bài, không đồng bộ thiết bị. Khi lưu bị chặn/đầy, dùng bộ nhớ phiên, hiện dấu `!` và giải thích trong lịch. Xóa dữ liệu trang sẽ xóa lịch; khôi phục Giao diện giữ lịch và bài đang làm.

## File và kiểm tra

- `assets/shell.css`, `assets/app.js`, `index.html`: header, vùng quiz và thứ tự cập nhật bố cục.
- `assets/pickers.css`: bộ chọn bài; không đổi logic Hán tự/ngữ pháp.
- `assets/streak-core.js`: lịch/ngày và thống kê độc lập DOM; `streak.js`/`streak.css`: lưu, đồng bộ và giao diện.
- `tests/check_streak.js`: kết quả kỳ vọng độc lập cho ngày đầu, trùng ngày/tab, liên tiếp, bỏ ngày, kỷ lục, năm nhuận, bản ghi hỏng/tương lai, Việt Nam/Los Angeles và DST.
- `tests/check_study_layout.py`: sáu kích thước 320/390/768/1280/1440/1920 px, sáng/tối; thực sự chọn bài/từ, giữ quiz, dùng bàn phím/modal, tải lại, nhiều tab, qua nửa đêm và lỗi lưu; `file://` và tiền tố Pages.

[Ảnh trước/sau, số đo và kết quả chạy](evidence/study-layout/README.md). Các kiểm tra hiện có vẫn giữ các khẳng định chấm đúng/sai/bỏ trống và khôi phục; việc chờ sự kiện `close` gốc hoàn tất được làm rõ để không gõ trước lúc focus trở lại.

Kết quả cuối: **11 bộ trình duyệt liên quan đạt trên Chromium 153; bộ mới đạt cả Firefox 155; ba bộ logic Node và format đạt**. Có kiểm tra thật `file://`, tiền tố dự án Pages, zoom native 200%, font và lỗi JavaScript. Không coi các kiểm tra cấu trúc là rà soát lại nội dung tiếng Nhật của những đợt trước.

Chạy ngắn: `npm ci --ignore-scripts`, `npm run test:logic`, `python tests/check_study_layout.py`, `npm run format:check`. Chọn trình duyệt qua `DEKIRU_BROWSER=chromium` hoặc `firefox`, theo README. Cần giữ nguyên thư mục tài nguyên khi mở `index.html` trực tiếp.

Kiểm tra mobile bằng viewport trình duyệt desktop; chưa kiểm tra trên điện thoại thật hoặc Safari/iOS. Việc mô phỏng tiền tố Pages không phải deploy công khai. Không tuyên bố tăng tốc tải trang từ đợt bố cục này.
