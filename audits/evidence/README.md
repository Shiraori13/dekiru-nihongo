# Bằng chứng kiểm thử và ảnh giao diện

Đọc [báo cáo bàn giao](../../IMPLEMENTATION_REPORT.md), [audit đáp án theo ID](../answers.md) và [số đo tài nguyên](performance.md). Kết quả máy đọc được: [test-results.json](test-results.json). Kết quả trước sửa: [11 bộ kiểm thử](baseline-tests.json), [ba lỗi đã tái hiện](baseline-reproduction.json).

## Cách đọc bằng chứng

Kiểm thử chạy trên Windows bằng Playwright 1.63.0. Chromium là cấu hình chính; những bộ có nhánh Firefox ghi rõ trong output. Các lượt Firefox/Edge riêng có log trong cùng JSON. Bộ logic Node dùng các đáp án kỳ vọng cố định độc lập: đúng/sai/bỏ trống/sửa đáp án, đồng nghĩa/đa nghĩa/dấu Việt, biến thể Kanji/kana và yêu cầu dùng hết mảnh. Việc duyệt toàn bộ ngân hàng qua khóa đang lưu chỉ chứng minh ánh xạ/chấm/UI, không chứng minh tiếng Nhật của khóa đúng.

Trước sửa: 8/11 bộ cũ đạt; `check_interactions.py`, `check_kanji.py`, `check_quiz.py` gặp điều khiển bị phần mobile đang có thu gọn. Đây là giả định tương tác chưa phù hợp với trạng thái workspace, không phải thiếu browser/dependency. Đã cập nhật bước mở menu/summary/tab thật; giữ các khẳng định hành vi. Lỗi quyền tạo subprocess của sandbox được xử lý bằng chạy browser ngoài sandbox đã được duyệt; không tính lỗi đó là lỗi ứng dụng.

## Những luồng được kiểm tra

| Bộ | Bằng chứng chính |
|---|---|
| `check_logic.js` | 921 mục nghĩa, toàn bộ cấu trúc 666/180; kỳ vọng chấm độc lập và biến thể được nhận |
| `check_regressions.py` | Hai mục 料理; hủy/tiếp tục/tạo bài ngữ pháp; giữ lựa chọn/gợi ý; hai tab, chuyển quyền, tab cũ/lượt mới, lịch sử và khôi phục |
| `check_attempt_store.py` | CAS cùng revision, ghi cũ sau chuyển quyền, đồng hồ thực/hết giờ nhiều tab, bộ nhớ bị chặn và lỗi giữa phiên |
| `check_imported_tabs.py` | Đề mới nhập ở tab khác, cache thư viện cũ khi khởi tạo, lỗi đọc đề tạm thời và thử lại; không xóa bài/lịch sử nguồn |
| `check_delivery.py` | Thao tác không vá helper, lazy lỗi/thử lại/chuyển nhanh/dedup, font, focus, `file://`, Pages subdirectory, đồng hồ khôi phục nền |
| `check_zoom.py` | Zoom trang thật 200% Chromium/Edge bằng profile riêng, 7 chế độ sáng/tối; kiểm tra chiều rộng CSS/DPR/visualViewport |
| 11 bộ hồi quy có sẵn | Toàn ngân hàng, nhập/xuất/ảnh/dữ liệu cũ, audio Firefox, thẻ/bàn phím, mobile, lưu/khôi phục/lịch sử/xáo trộn |

Không ghi nhận lỗi JavaScript chưa xử lý trong các luồng đã chạy. Không suy rộng kết quả sang mọi thiết bị hay mọi câu người dùng tự nhập. GitHub Actions/Linux, Firefox native zoom, Safari/iOS, bàn phím/đọc màn hình trên thiết bị thật và âm lượng loa vật lý chưa được xác minh.

## Ảnh trước và sau

Ảnh trước chụp workspace ban đầu tại `8409b6c` cùng phần mobile đã có chưa commit. Ảnh sau là giao diện bản sửa. Ma trận sau gồm 320×568, 390×844, 768×1024, 1440×1000, hai giao diện sáng/tối, đủ bảy chế độ. Có thêm ảnh câu hỏi/kết quả đang làm và zoom 200%; tổng cộng 83 ảnh. Các bảng dưới dẫn tới ảnh nguyên bản để xem đầy đủ.

| Màn hình | Trước | Sau sáng | Sau tối |
|---|---|---|---|
| Thẻ, 320 px | [Trước](before-home-320-light.png) | [Sau](after-flashcard-320-light.png) | [Sau](after-flashcard-320-dark.png) |
| Thẻ, 390 px | [Trước](before-flashcard-390-light.png) | [Sau](after-flashcard-390-light.png) | [Sau](after-flashcard-390-dark.png) |
| Kiểm tra từ vựng | [Trước](before-quiz-390-light.png) | [Sau](after-quiz-390-light.png) | [Sau](after-quiz-390-dark.png) |
| Danh sách | [Trước](before-list-390-light.png) | [Sau](after-list-390-light.png) | [Sau](after-list-390-dark.png) |
| Luyện đọc | [Trước](before-reading-390-light.png) | [Sau](after-reading-390-light.png) | [Sau](after-reading-390-dark.png) |
| Hán tự | [Trước](before-kanji-390-light.png) | [Sau](after-kanji-390-light.png) | [Sau](after-kanji-390-dark.png) |
| Ngữ pháp | [Trước](before-grammar-390-light.png) | [Sau](after-grammar-390-light.png) | [Sau](after-grammar-390-dark.png) |
| Luyện đề | [Trước](before-exam-390-light.png) | [Sau](after-exam-390-light.png) | [Sau](after-exam-390-dark.png) |
| Desktop, 1440 px | [Trước](before-home-1440-light.png) | [Sau](after-flashcard-1440-light.png) | [Sau](after-flashcard-1440-dark.png) |

| Đang học / làm bài, 390 px tối | Ảnh |
|---|---|
| Câu hỏi luyện đề | [Xem](after-exam-question-390-dark.png) |
| Kết quả luyện đề | [Xem](after-exam-result-390-dark.png) |
| Câu hỏi ngữ pháp | [Xem](after-grammar-question-390-dark.png) |

| Zoom trang thật 200% | Sáng | Tối |
|---|---|---|
| Thẻ | [Xem](after-native-zoom-200-flashcard-light.png) | [Xem](after-native-zoom-200-flashcard-dark.png) |
| Kiểm tra từ vựng | [Xem](after-native-zoom-200-quiz-light.png) | [Xem](after-native-zoom-200-quiz-dark.png) |
| Danh sách | [Xem](after-native-zoom-200-list-light.png) | [Xem](after-native-zoom-200-list-dark.png) |
| Luyện đọc | [Xem](after-native-zoom-200-reading-light.png) | [Xem](after-native-zoom-200-reading-dark.png) |
| Hán tự | [Xem](after-native-zoom-200-kanji-light.png) | [Xem](after-native-zoom-200-kanji-dark.png) |
| Ngữ pháp | [Xem](after-native-zoom-200-grammar-light.png) | [Xem](after-native-zoom-200-grammar-dark.png) |
| Luyện đề | [Xem](after-native-zoom-200-exam-light.png) | [Xem](after-native-zoom-200-exam-dark.png) |

[Thông số zoom thật](native-zoom.json) khác [ảnh mô phỏng reflow](after-reflow-200-percent.png). Đã tự xem ảnh thẻ, bài đọc, ngữ pháp, đề/kết quả, sáng/tối ở mobile/desktop/zoom. Phát hiện và sửa nút thẻ bị che, nhãn lỗi mã hóa, phần đầu bài đọc dài và điểm kết quả bị cuộn khuất. Chữ Nhật đọc được, nguồn PDF/controls vẫn truy cập được; nội dung dài cuộn dọc bình thường. Không dùng tiêu chí không tràn ngang làm bằng chứng duy nhất.
