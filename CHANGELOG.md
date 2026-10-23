# Các thay đổi mới của Dekiru

## 23/10/2026 — Bốn đề chuyên bài 6–7

- Thêm 4 đề × 45 câu, phủ đủ 18 mục ngữ pháp/6 topic bài 6–7. Bám đúng ma trận đề mẫu đã nhập: 6 đọc Hán tự, 8 chọn chữ Hán, 1 từ vựng, 21 ngữ pháp, 7 hội thoại, 2 dịch.
- Mỗi câu có câu hoàn chỉnh/từ chuẩn, nghĩa Việt, quy tắc và lời giải đủ A–D sau nộp; giữ luồng xáo trộn, hẹn giờ, đánh dấu, khôi phục, nhiều tab, nhập/xuất và lịch sử hiện có.
- Thêm bộ lọc nhóm đề, nhãn/phạm vi theo đúng bài và danh mục ôn 125 mục từ bài 6–7. Đề bài 4–5 vẫn giữ phạm vi riêng.
- Tổng ngân hàng tăng từ 4 đề/180 câu lên 8 đề/360 câu; bốn đề cũ giữ nội dung, ID và dấu nhận diện. Có nguồn sinh dữ liệu, audit và kiểm thử riêng: [báo cáo bài 6–7](audits/CHAPTER67_EXAMS.md).

## 22–23/10/2026 — Hiệu đính đáp án, bảo vệ bài và tải theo chế độ

- Quiz dùng nhóm nghĩa Việt có dữ liệu duyệt; loại nghĩa tương đương/giao nhau khỏi nhiễu, giữ dấu khi chấm, phân biệt cách đọc/ngữ cảnh. Ưu tiên phạm vi học trước kho chung; báo rõ nếu không đủ phương án. Hiển thị bài/topic/trang nguồn ở câu hỏi.
- Ngữ pháp và quiz hỏi trước khi thay bài chưa nộp. Giữ thứ tự phương án, câu đang làm và gợi ý; hộp thoại hỗ trợ Tab/Shift+Tab, Escape và focus.
- Luyện đề dùng quyền sửa một tab và transaction kiểm ID/revision; chuyển quyền, hết giờ, lịch sử một lần, chống tab cũ ghi đè lượt mới. Lỗi lưu giữa phiên tạo bản sao RAM riêng, không ghi đè bài đã lưu.
- Giữ bài và lịch sử khi tab chưa tải được đề vừa nhập ở tab khác; tự tải lại thư viện, có trạng thái lỗi/thử lại, không xóa bản lưu do cache đề cũ.
- Rà soát 666 bài ngữ pháp/180 câu đề; sửa nhiễu vẫn hợp ngữ pháp, câu thiếu ngữ cảnh và hai lỗi giải thích lệch phương án. Có migration câu đã lưu và audit theo ID với nguồn/giới hạn xác minh; số lượng nội dung giữ nguyên.
- Tách CSS/JS khỏi HTML, trì hoãn các bộ dữ liệu và khởi tạo reading/kanji/grammar/exam; loader classic script hỗ trợ `file://`, lỗi/thử lại và chuyển chế độ nhanh.
- Hoàn thiện mobile màn hình ngắn, tiến trình/đồng hồ cạnh câu hỏi; font cục bộ bổ sung 7 thành phần Hán bị thiếu. Có ảnh trước/sau, số liệu tải và bộ kiểm thử hồi quy mới.
- Ghim dependency, lockfile, lựa chọn Chromium/Edge/Firefox và workflow push/PR. [Báo cáo bàn giao](IMPLEMENTATION_REPORT.md).

## 22/10/2026 — Tối ưu giao diện và thao tác mobile

- Thu gọn header, đưa Thẻ ghi nhớ/Luyện đọc/Ngữ pháp/Luyện đề xuống thanh điều hướng đáy; Kiểm tra/Danh sách/Hán tự vào menu Khác. Nút cũ được dùng lại; bản PC vẫn có đủ 7 chế độ tại header.
- Thay phần giới thiệu dài bằng tiêu đề ngắn. Thu gọn bộ lọc, thư viện bài đọc/từ Hán/mẫu câu, gợi ý/cỡ chữ và từ vựng bài đọc. Chọn nội dung xong tự đóng bộ chọn, cuộn đến đúng phần đang học.
- Chuyển danh sách từ sang thẻ dọc, mỗi đợt 50 mục có nút Xem thêm. Tập viết có hai mục Xem nét/Tự viết để không xếp cả hai bảng nối tiếp trên điện thoại.
- Khi làm bài, thu gọn bảng số và thiết lập phụ; đề 45 câu có tiến trình ngay trên câu hỏi. Phần kết quả thu gọn từng câu, vẫn mở được lời giải chi tiết và chuyển nhanh bằng bảng số.
- Tăng vùng chạm/cỡ chữ nhập, chừa safe area và khoảng trống dưới thanh đáy. Bố trí popup nghĩa/âm thanh tránh đè điều hướng và đè nhau, gồm cả màn hình ngang. Giữ chế độ sáng/tối và giảm chuyển động.
- Thêm kiểm tra mobile cho 7 chế độ ở 320/390/430/740 px, thao tác học/làm bài, menu, popup, quay về PC và Firefox. Chi tiết: [MOBILE_UX.md](MOBILE_UX.md).

## 20/10/2026 — Lời giải chi tiết và xáo trộn đề

- Bổ sung lời giải cho **180/180 câu** trong 4 đề: từ/câu chuẩn, nghĩa tiếng Việt, lý do chọn đáp án, điểm ngữ pháp/từ vựng cần nhớ và phân tích từng lựa chọn A–D. Lời giải chỉ xuất hiện sau khi nộp; áp dụng cả câu đúng, sai và bỏ trống, xem lại lịch sử và file xuất kết quả.
- Xáo trộn đủ 45 câu mỗi lần bắt đầu hoặc làm lại, áp dụng cả đề có sẵn và đề tự nhập. Lưu hoán vị riêng cho từng lượt; quay lại, đổi chế độ và tải lại không làm đổi câu hay lệch đáp án/đánh dấu. Làm lại tạo thứ tự mới so với lượt vừa xem.
- Chấm điểm, lịch sử, bộ lọc xem lại, nguồn ảnh và xuất kết quả đều theo thứ tự của lượt làm. File kết quả có thêm `order`, `sourceNumber` và `solution` để đối chiếu câu gốc/lời giải.
- Bài và lịch sử từ phiên bản trước chưa có hoán vị được giữ thứ tự gốc. Chỉ bổ sung lời giải không làm mất bài đang lưu. Dữ liệu thứ tự trùng/thiếu/không hợp lệ không được dùng để ghép đáp án.
- Làm rõ câu 7 của đề 03 yêu cầu cách đọc **theo mục từ bài 5 trong PDF**; giải thích thêm rằng 今年 cũng có cách đọc こんねん trong văn viết trang trọng. Khóa đáp án và vị trí lựa chọn được giữ; bài cũ vẫn được khôi phục.
- Đề JSON hỗ trợ `solution` tùy chọn với câu chuẩn, nghĩa, quy tắc và 4 phân tích. Giữ lời giải qua nhập/xuất/lưu nháp; khi tác giả sửa câu/đáp án, bỏ phần lời giải chi tiết cũ để tránh ghép sai. Đề không cung cấp lời giải vẫn hiện phần giải thích tác giả đã nhập, không tự đoán nội dung.
- Thêm kiểm thử xáo trộn/khôi phục, dữ liệu phiên bản cũ, đúng/sai/trống, ánh xạ đủ 180 lời giải và ảnh nguồn, xuất file, giao diện sáng/tối 320–1280 px và Firefox.

## 20/10/2026 — Luyện đề 45 câu và thêm đề từ file/ảnh

- Thêm tab **Luyện đề**, riêng với kiểm tra từ vựng và luyện từng mục ngữ pháp. Có 4 đề / 180 câu, mỗi đề đúng 45 câu, 4 lựa chọn, đáp án và giải thích sau khi nộp.
- Chuyển 44 ảnh trong Material thành đề mẫu hiệu đính, ghi rõ thiếu câu 18 và câu bổ sung; sửa lỗi gõ, lựa chọn trùng, thêm ngữ cảnh cho câu mơ hồ. Giữ liên kết từng ảnh để đối chiếu sau khi nộp. Đề mẫu có cả bài 6/chữ Hán mở rộng, được phân biệt với đề bài 4–5.
- Biên soạn **3 đề mới / 135 câu** chỉ tập trung nội dung mới bài 4–5. Mỗi đề phủ đủ 19 mục ngữ pháp/6 topic, gồm đọc/viết chữ Hán, từ vựng, điền câu, hội thoại và dịch. Từ vựng được luân phiên giữa đề; không coi 45 câu là kiểm tra riêng toàn bộ 127 mục từ.
- Thêm danh mục đủ 127 mục từ bài 4–5 theo 6 topic, với cách viết/đọc/nghĩa, để ôn ngoài màn hình làm bài. Ảnh tự thêm có chế độ phóng to/kích thước gốc.
- Bổ sung bản đồ câu hỏi, tiến trình theo số câu đã chọn, đánh dấu xem lại, quay lại sửa/bỏ lựa chọn, chọn nhanh bằng phím 1–4. Câu chưa chọn không mang dấu đã trả lời; đáp án chỉ xuất hiện sau khi nộp.
- Chọn 30/45/60 phút hoặc không giới hạn; lưu bài qua lần tải lại, tính thời gian khi ẩn/đổi tab và tự nộp khi hết giờ. Chấm đúng/sai/bỏ trống từng câu, lọc câu cần ôn, làm lại đề, giữ 30 lượt lịch sử, xuất kết quả JSON.
- **Thêm đề**: nhập JSON với bước kiểm tra/xem trước; tải file đề mẫu để chỉnh; trình soạn 45 câu cho phép tải nhiều ảnh, nhập đề bài/lựa chọn/đáp án và lưu bản nháp. Không có OCR hoặc tự đoán đáp án từ ảnh.
- Đề và ảnh lưu cục bộ trong IndexedDB; hỗ trợ xuất/nhập để chuyển thiết bị và xóa đề tự thêm. Kiểm tra dữ liệu, giới hạn file/ảnh, hiển thị lỗi khi bộ nhớ bị chặn. Giao diện dùng font Nhật cục bộ, hỗ trợ di động và sáng/tối.
- Chi tiết nguồn, hiệu đính, phạm vi và định dạng file: [EXAM_AUDIT.md](EXAM_AUDIT.md). Thêm kiểm thử toàn bộ 180 câu và luồng nhập/ảnh/lưu/chấm, trên Edge/Firefox.

## 19/10/2026 — Tách câu dễ lộ đáp án và thêm gợi ý chữ Hán

- Thay ngữ cảnh của 261 câu ghép bổ sung, một câu ghép gốc và một số câu chọn dạng từ còn trùng để tách khỏi câu liên quan. Giữ ngân hàng 666 bài tập / 18 câu mỗi mục thuộc bài 4–7.
- Thêm kiểm tra khi tạo đề: không chọn cùng các câu chứa sẵn câu hoàn chỉnh hoặc dạng từ đang được hỏi ở câu khác, kể cả trong lựa chọn đáp án. Số câu tối đa theo bộ lọc phản ánh các câu ghép được độc lập; lượt ôn riêng một mục có 15–18 câu.
- Thêm mục mở/đóng **Gợi ý chữ Hán · cách đọc và nghĩa** ngay dưới đề; động/tính từ giải thích theo từ gốc. Phân biệt mục này với gợi ý ngữ pháp cũ; xem từ không tự chọn/chấm đáp án.
- Gợi ý có cách đọc cụm từ, tên riêng, số giờ/phút/tháng và lượng từ; không ghép âm On/Kun tùy ý. Kiểm tra toàn bộ câu hỏi hiện không thiếu mục từ Hán trong phần đề/mảnh ghép.
- Lưu trạng thái mở gợi ý qua chuyển câu/tải lại. Bài cũ được rà lại, giữ các câu trả lời còn phù hợp và hiện thông báo nếu nội dung câu đã đổi hoặc cặp tiết lộ đáp án được loại.
- Bổ sung kiểm thử ngữ cảnh khác nhau, đề không chứa cặp tiết lộ, cách đọc/nghĩa, giao diện di động và giữ đáp án khi mở gợi ý.

## 18/10/2026 — Sửa phát âm Firefox và mở rộng bài tập ngữ pháp

- Thay việc phụ thuộc hoàn toàn `speechSynthesis` bằng bộ phát chung, ưu tiên **1.178 MP3** đi kèm trang cho từ vựng, ví dụ ngữ pháp và câu luyện đọc. Firefox không còn cần giọng Nhật trong hệ điều hành để nghe các nội dung đã đóng gói.
- MP3 được tổng hợp cục bộ bằng Open JTalk / giọng HTS Mei, dung lượng khoảng 10,9 MB; bổ sung nguồn và giấy phép. Không gửi tài liệu tới dịch vụ TTS ngoài để tạo bộ file này.
- Thêm trạng thái tải/đang phát/lỗi, nút dừng, hướng dẫn khi Firefox chặn quyền âm thanh. Giọng Nhật của thiết bị làm dự phòng khi bản ghi không tải được; có kiểm tra giọng sẵn có, giữ đối tượng đọc và giới hạn chờ khởi động.
- Dùng chung cơ chế phát ở thẻ từ vựng, danh sách, ngữ pháp và luyện đọc; phát từng câu, đổi chế độ/đổi thẻ sẽ dừng nội dung cũ; callback cũ không tự bật lại sau khi dừng.
- Tăng **127 → 666 bài tập ngữ pháp**, đúng **18 câu cho mỗi mục** trong 37 mục của bài 4–7: 335 trắc nghiệm, 298 ghép câu, 33 điền dạng từ. Giữ ID câu cũ và tiến độ đã lưu.
- Phân bổ: bài 4 — 162 câu; bài 5 — 180; bài 6 — 126; bài 7 — 198. Mỗi tình huống mới bám công thức của mục tương ứng; một tình huống có thể luyện cả chọn đáp án và ghép câu.
- Bổ sung kiểm thử MP3 thật trên Firefox/Edge không có giọng Nhật, quyền phát bị chặn, thiếu file và mở cục bộ; kiểm tra đủ 18 câu/mục, chấm toàn bộ 666 câu, lưu/khôi phục và luyện lại.

## 15/10/2026 — Bản cập nhật ngữ pháp và thao tác thẻ

So với bản trước trên GitHub, commit [`0a8ab99`](https://github.com/Shiraori13/dekiru-nihongo/commit/0a8ab99cfd6533ea17704a86b32166d98b0a6632):

| Tính năng | Trước | Bản cập nhật |
|---|---|---|
| Ôn ngữ pháp | Chưa có chế độ riêng | Tab Ngữ pháp cho bài 4–7: 12 topic, 37 mục học, công thức, giải thích, ví dụ và lỗi thường gặp |
| Luyện ngữ pháp | Chưa có | 127 câu: 57 trắc nghiệm, 37 ghép câu, 33 điền dạng từ; chọn phạm vi, dạng bài và số câu |
| Chấm và ôn lại | Chưa có bài luyện ngữ pháp | Nộp rồi chấm, đánh dấu đúng/sai/bỏ trống, giải thích từng câu, luyện lại câu cần ôn |
| Tiến độ ngữ pháp | Chưa có | Lưu mục đã nắm vững, câu cần ôn và bài đang làm qua lần tải lại trang |
| Phím tắt thẻ | Enter có thể kích hoạt lại nút điều hướng/Xáo trộn đang giữ focus | Enter/↑/↓ lật thẻ; ←/→ chuyển thẻ; giữ phím không lặp hành động |
| Hiển thị thẻ | Viền focus mặc định và xoay 3D | Viền tím bo góc khi dùng bàn phím, chuyển mặt nhẹ để tránh mảng trắng |
| Giao diện di động | 5 chế độ trên một hàng | 6 chế độ trên hai hàng, bổ sung giao diện ngữ pháp sáng/tối và font Nhật |

Chi tiết nội dung, nguồn PDF và phân loại: [GRAMMAR_AUDIT.md](GRAMMAR_AUDIT.md). Các ghi chú triển khai ngày 08–09/10 được giữ bên dưới.

## 09/10/2026 — Ôn ngữ pháp bài 4–7

- Thêm tab **Ngữ pháp**, gồm 37 mục theo 4 bài/12 topic; có giải thích, công thức, ví dụ mới, cách đọc, nghĩa, nghe câu, lỗi thường gặp và liên kết trang PDF để đối chiếu.
- Phân loại từ PDF từ vựng, đối chiếu PDF ôn speaking và đề cương chính thức; tách mẫu mới của bài khỏi mẫu ôn lại/xuất hiện sớm. Chi tiết: [GRAMMAR_AUDIT.md](GRAMMAR_AUDIT.md).
- Thêm 127 câu luyện: 57 chọn đáp án, 37 sắp xếp, 33 điền dạng từ; bảng chia thể て với 16 động từ và các ngoại lệ.
- Lọc bài/topic, tìm kiếm không dấu, tự đánh dấu nắm vững, luyện riêng mẫu, chọn dạng bài và tự nhập số câu.
- Làm rồi nộp, tiến trình theo số câu hoàn tất, sửa đáp án trước nộp; kết quả phân biệt đúng/sai/bỏ trống, giải thích và luyện lại câu cần ôn.
- Lưu bài luyện ngữ pháp và tiến độ qua lần tải lại trang. Bài đang làm không thay đổi khi đổi bộ lọc hoặc chuyển tab.
- Điều chỉnh thanh chế độ thành 2 hàng trên di động, bổ sung giao diện sáng/tối và font Nhật cho nội dung mới.

## 08/10/2026 — Sửa phím tắt và hiển thị thẻ ghi nhớ

- Enter và ↑/↓ lật thẻ; ←/→ chuyển thẻ, kể cả khi nút điều hướng hoặc Xáo trộn đang giữ focus. Enter không còn vô tình bấm lại các nút này.
- Chặn cuộn trang và lặp hành động khi giữ các phím điều khiển thẻ. Không can thiệp ô nhập, bộ lọc hoặc phím tắt có Ctrl/Alt/Shift/Meta.
- Giữ thao tác chuột và Space trên các nút; Space trên thẻ vẫn lật thẻ.
- Thay viền focus mặc định bằng viền tím bo góc khi dùng bàn phím. Thay xoay 3D bằng chuyển mặt với hiệu ứng hiện nội dung nhẹ để tránh các mảng trắng khi lật; hỗ trợ giảm chuyển động.
- Cập nhật hướng dẫn phím trên cả hai mặt thẻ; chuyển focus về khung thẻ nếu nút đang được focus sắp bị ẩn.

## 27/09/2026 — Học Hán tự và cải tiến bài kiểm tra

Mốc so sánh: bản `main` trước đợt cập nhật này, commit [`72673f0`](https://github.com/Shiraori13/dekiru-nihongo/commit/72673f0c86798346ba91201c87f865c49ba9863e).

Bản trước đã có **921 thẻ từ vựng, 15 bài, 45 chủ đề và 71 bài luyện đọc**. Đợt này bổ sung chức năng học Hán tự từ bộ dữ liệu đó và nâng cấp phần kiểm tra. Nếu so với file gốc `index - Back_up.html` có 475 thẻ, xem thêm bảng đối chiếu từng bài trong [VOCABULARY_AUDIT.md](VOCABULARY_AUDIT.md).

### So sánh trước và sau

| Hạng mục | Bản trước trên repo | Bản cập nhật |
|---|---|---|
| Các chế độ học | Thẻ ghi nhớ, Kiểm tra, Danh sách, Luyện đọc | Thêm tab **Hán tự** |
| Học chữ Hán | Xem chữ và cách đọc trong thẻ/bài đọc | 607 mục từ có chữ Hán, gồm 496 chữ khác nhau; học theo bài/chủ đề |
| Giải thích chữ | Nghĩa của cả từ | Thêm âm Hán Việt, nghĩa từng chữ, On/Kun, thành phần hình thể và ghi chú các từ dễ nhầm |
| Luyện viết | Chưa có | Mô phỏng thứ tự nét; xem từng nét; ô tập viết bằng chuột/bút/cảm ứng |
| Chọn số câu | Danh sách xổ xuống: 5, 10, 20, 30 hoặc tất cả | Nút chọn nhanh 5, 10, 15, 20, 30, tất cả; thêm tự nhập và nút − / + |
| Phạm vi tối thiểu | Cần ít nhất 4 từ trong bộ lọc | Có thể kiểm tra từ 1 câu; đáp án nhiễu lấy từ kho từ vựng chung |
| Chấm bài | Chọn xong biết đúng/sai ngay, tự chuyển câu | Thêm chế độ mặc định **Nộp bài rồi xem đáp án**; vẫn có chấm từng câu |
| Tiến trình | Dòng “Câu hỏi n / tổng số” và điểm | Thêm thanh tiến trình, số câu đã trả lời và phần trăm hoàn thành |
| Chuyển câu | Theo thứ tự, tự chuyển sau khi chấm | Ở chế độ nộp sau: bảng số câu, câu trước/câu tiếp, sửa lựa chọn trước khi nộp |
| Kết quả | Tỷ lệ đúng và tổng số câu đúng | Thống kê đúng/sai/bỏ trống; xem lại từng câu, đánh dấu đáp án đã chọn và đáp án đúng |
| Làm lại | Nút làm lại gọi tạo đề ngẫu nhiên mới | **Làm lại đề này** giữ nguyên câu hỏi và thứ tự đáp án, xóa lựa chọn và điểm cũ |
| Đổi tab khi đang làm | Quay lại phần thiết lập | Giữ đề, câu đang xem và lựa chọn trong phiên hiện tại |

### 1. Hán tự theo bài và chủ đề

- Thêm **607 mục từ / 496 chữ Hán**, liên kết với 15 bài và 45 chủ đề. Số mục theo bài 1–15 lần lượt là: **29, 30, 56, 51, 48, 31, 48, 61, 40, 46, 31, 39, 25, 35, 37**. Một từ xuất hiện ở nhiều bài/chủ đề được giữ riêng để đúng ngữ cảnh.
- Lọc theo bài, chủ đề, đã học/chưa học; tìm bằng chữ Hán, kana, nghĩa tiếng Việt hoặc âm Hán Việt không dấu.
- Hiển thị cách đọc và nghĩa của cả từ, cách viết trong PDF, liên kết đến trang nguồn. Chọn từng chữ trong từ để xem âm Hán Việt, nghĩa gợi nhớ, âm On/Kun và số nét.
- Thêm ghi chú cho các trường hợp cần học nghĩa/cách đọc của cả từ, ví dụ 勉強, 手紙, 大人, 今日; phân biệt âm Hán Việt với cách đọc tiếng Nhật.
- Ghi rõ bốn cách viết có chữ Hán bổ sung cho kana trong PDF: **喫煙所, 喫茶店, 靴, 天気が悪い**. Âm Hán Việt, giải thích từng chữ và hướng dẫn viết là phần bổ sung; các phần này không có trong PDF.
- Viết mẫu theo thứ tự nét, tiến/lùi từng nét, kéo thanh chọn nét, hiện toàn chữ, bật/tắt số thứ tự và chọn ba tốc độ. Mô phỏng dừng khi đổi chữ, từ hoặc tab.
- Ô tập viết hỗ trợ chuột, bút và ngón tay; bật/tắt chữ mờ, hoàn tác một nét, xóa nét viết. Đây là ô tập viết tự do, **không tự chấm độ chính xác**.
- Có danh sách từ khác chứa cùng chữ, điều hướng từ trước/từ tiếp và đánh dấu đã học. Tiến độ Hán tự được lưu trong trình duyệt; vẫn dùng được khi trình duyệt chặn lưu dữ liệu.
- Đóng gói dữ liệu nét để học ngoại tuyến. Bổ sung nguồn KANJIDIC2/KanjiVG, giấy phép, script tạo dữ liệu và mở rộng font Nhật cục bộ. Xem [nguồn và cách cập nhật](sources/kanji/README.md).

### 2. Giao diện chọn số câu

- Thay danh sách xổ xuống bằng các nút chọn nhanh và khung **Tự nhập số câu** riêng.
- Ô nhập số lớn, có đơn vị “câu hỏi”, nút giảm/tăng và dòng xác nhận số câu sẽ làm trước khi bắt đầu.
- Chấp nhận số nguyên từ **1 đến số từ đang lọc**, tối đa 921 câu khi chọn toàn bộ. Không chấp nhận ô trống, số âm, số thập phân hoặc số vượt phạm vi.
- Hiển thị giới hạn theo bộ lọc hiện tại và thông báo lỗi ngay tại ô thiết lập. Nút giảm/tăng dừng ở giới hạn 1 và số từ hiện có.
- Các mức chọn nhanh vẫn lấy tối đa số từ đang có trong phạm vi; phần xem trước thể hiện số câu thực tế.
- Bố cục thích ứng màn hình 320/390 px, chế độ sáng/tối và thao tác bàn phím; Enter trong ô nhập bắt đầu bài hợp lệ.

### 3. Nộp bài và xem lỗi từng câu

- Mặc định **Nộp bài rồi xem đáp án**. Mỗi câu chỉ có một đáp án được chọn; người học có thể sửa trước khi nộp, không nhận thông báo đúng/sai trong lúc làm.
- Đề và thứ tự đáp án được tạo một lần. Quay lại câu trước giữ nguyên lựa chọn, không xáo lại đáp án.
- Thanh tiến trình tăng theo **số câu có đáp án**, không theo số câu đã mở. Sửa lựa chọn của một câu không làm tăng số câu hoàn thành.
- Có bảng số câu, nút câu trước/câu tiếp và nút nộp bài. Nếu còn câu trống, hiển thị số câu chưa làm để chọn làm tiếp hoặc vẫn nộp.
- Sau khi nộp: khóa bài, tính điểm, thống kê đúng/sai/bỏ trống. Mỗi câu đúng được 10 điểm; sai/bỏ trống được 0; tỷ lệ đúng tính trên toàn bộ đề.
- Từng câu trong phần xem lại có chữ Nhật, kana, các lựa chọn và trang PDF nguồn. Lựa chọn sai có nhãn **Bạn chọn · Sai**, đáp án đúng có nhãn **Đáp án đúng**; câu chưa làm được ghi **Bỏ trống**.
- Có bộ lọc **Tất cả** và **Sai / bỏ trống**, giúp tập trung vào các câu cần ôn lại.
- **Làm lại đề này** xóa lựa chọn và kết quả cũ, giữ nguyên đề. **Thiết lập bài mới** quay lại chọn phạm vi, số câu và cách chấm.
- Chế độ **Chấm từng câu** tiếp tục hoạt động, có thanh tiến trình và phần xem lại kết quả. Xử lý các bộ hẹn giờ khi đổi tab/làm lại để tránh tự chuyển nhầm câu hoặc cộng điểm hai lần.
- Đề đang làm được giữ khi chuyển tab trong trang và không đổi theo bộ lọc tra cứu ở tab khác. Bài kiểm tra được giữ trong bộ nhớ của trang; **tải lại hoặc đóng trang sẽ mất bài đang làm**.

### 4. Sửa trạng thái câu chưa trả lời

Trong giao diện nộp bài mới, dòng chú thích “Đã chọn đáp án” từng được hiển thị cố định, dễ bị hiểu là trạng thái của câu đang xem. Đã thay bằng trạng thái thực, ví dụ **“Câu 5: Chưa trả lời”**.

- **Viền tím**: câu đang xem.
- **✓ màu xanh**: đã có lựa chọn hợp lệ.
- **○**: chưa trả lời.
- Chỉ chuyển qua một câu không đánh dấu câu đó đã trả lời. Dữ liệu lựa chọn thiếu hoặc không hợp lệ được coi là chưa trả lời trong tiến trình, thông báo nộp bài và kết quả.
- Xóa bảng trạng thái khi bắt đầu/làm lại để không giữ dấu đã trả lời của lần trước.
- Đã kiểm tra trường hợp trả lời câu 1–4 rồi mở câu 5: tiến trình **4/5, 80%** và câu 5 vẫn hiển thị **Chưa trả lời**.

### 5. Kiểm thử và các file chính

Các lượt kiểm thử đã đạt bao gồm:

- [check_app.py](tests/check_app.py): từ vựng, chấm từng câu, luyện đọc, bộ lọc, lưu trạng thái và giao diện máy tính/điện thoại.
- [check_interactions.py](tests/check_interactions.py): thẻ ghi nhớ ngoại tuyến, bàn phím và vòng đời âm thanh giả lập.
- [check_kanji.py](tests/check_kanji.py): 607 liên kết nguồn, 496 hình chữ, 45 chủ đề, nét viết, chuột/cảm ứng, tiến độ và số câu tự nhập.
- [check_quiz.py](tests/check_quiz.py): chỉ chuyển câu không đánh dấu đã trả lời; nộp bài, sửa lựa chọn, bỏ trống, tính điểm, làm lại, đổi tab, sự kiện trả về trễ và đề tối đa **921 câu**.

| Nhóm file | Vai trò |
|---|---|
| `index.html`, `assets/study.css` | Giao diện Hán tự, thiết lập số câu, làm bài, chấm bài và xem lại |
| `assets/kanji.js` | Tìm/lọc Hán tự, mô phỏng nét, tập viết và lưu tiến độ |
| `data/kanji.js`, `data/kanji-source.json`, `data/kanji-meanings.tsv` | Dữ liệu học chữ, cách viết gốc và âm/nghĩa được rà soát |
| `scripts/build_kanji.py`, `sources/kanji/` | Tạo dữ liệu, ghi nguồn và giấy phép |
| `assets/fonts/NotoSansJP-study.woff2` | Font Nhật mở rộng cho nội dung mới |
| `README.md`, `VOCABULARY_AUDIT.md`, `tests/` | Hướng dẫn, đối chiếu dữ liệu và kiểm thử |

File `index - Back_up.html` được giữ tại máy; các thư mục công cụ `.tools`, `.work` không được đưa lên repo.
