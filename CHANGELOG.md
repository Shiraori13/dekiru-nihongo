# Các thay đổi mới của Dekiru

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
