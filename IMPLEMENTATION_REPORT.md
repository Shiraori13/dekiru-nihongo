# Bàn giao Dekiru Master — 22–23/10/2026

**Cập nhật tiếp theo:** đã bổ sung [4 đề bài 6–7 / 180 câu](audits/CHAPTER67_EXAMS.md), nâng ngân hàng luyện đề lên 8 đề/360 câu. Báo cáo và số đo bên dưới ghi nhận mốc hiệu đính trước lần mở rộng này; bằng chứng của phần mới được lưu riêng.

Đã sửa chấm nghĩa tương đương, bảo vệ tiến độ nhiều tab và xác nhận trước khi thay bài; hoàn thiện giao diện mobile, font Nhật và tải theo chế độ. **16 bộ kiểm thử Python, logic Node và kiểm tra định dạng đều đạt** trong môi trường đã ghi bên dưới. Bản sửa ở workspace, chưa commit/push/deploy.

Tài nguyên ban đầu đo qua HTTP giảm từ **2.070.604 xuống 799.564 byte**, DOM từ **4.926 xuống 384**; không suy ra tốc độ tải khi chưa đo thời gian. Ảnh, log và điều kiện đo được lưu cùng báo cáo.

## Trạng thái ban đầu và phạm vi

Nhánh `main`, HEAD và remote main cùng `8409b6c1441e1dac6de4b732474fcc2500da13f5`; đã kiểm tra remote bằng `git ls-remote`. Workspace có phần mobile chưa commit; được giữ và tiếp tục hoàn thiện. Không thay `index - Back_up.html` hoặc `.vscode/`. SHA-256 bản backup vẫn là `16d735b9b07bc0ee9a39beda5edac3708654aa926c799b26b3693240fc2ecb4c`.

Giữ **921 thẻ, 71 bài đọc, 37 mục/666 bài tập ngữ pháp, 4 × 45 câu luyện đề**. Không mở rộng chapter. Các sửa nội dung nằm trong ngân hàng hiện có. Website vẫn tĩnh, không có máy chủ ứng dụng; file JSON version 1, các ID và thuộc tính điều khiển được giữ.

## Lỗi, nguyên nhân và cách sửa

| Lỗi / ca tái hiện trước sửa | Nguyên nhân | Bản sửa |
|---|---|---|
| Ép lấy mục 料理, chọn “Món ăn / Nấu ăn” thay “Nấu ăn / Món ăn”: 0% | Sinh nhiễu và chấm theo chuỗi | Nhóm nghĩa có kiểm duyệt, nhóm phần nghĩa giao nhau riêng; ưu tiên nhiễu cùng topic/bài/phạm vi rồi kho PDF; báo lỗi nếu không đủ 4 nghĩa hợp lệ |
| A trả lời 1 câu, B mở cùng bài, A thêm câu thứ hai, B đánh dấu: bản lưu còn 1 câu | Hai tab ghi toàn bộ snapshot vào localStorage | IndexedDB transaction đọc–kiểm quyền/ID/revision–ghi; một tab sửa, tab khác chỉ xem; chuyển quyền rõ ràng, từ chối thao tác cũ |
| Tab chưa tải đề vừa nhập ở tab khác coi bài/lịch sử là không hợp lệ | Cache thư viện đề cũ được dùng để chuẩn hóa bản lưu nguồn | Giữ nguyên bản chưa tra được đề; tải lại thư viện, khóa thao tác thay bài và cho thử lại khi đọc lỗi; kiểm thử đúng cửa sổ tranh chấp khởi tạo |
| Ngữ pháp đang làm → Học → Luyện mẫu này: mất bài, không có dialog | `start()` thay session ngay | Hộp thoại Tiếp tục/Bắt đầu mới; Escape hủy, focus trở lại nút; giữ câu, lựa chọn, thứ tự phương án và gợi ý |
| Một số nhiễu vẫn hợp ngữ pháp, vài lời giải lệch phương án | Câu thiếu nghĩa đích; ghi chú nhiễu dựa vào thứ tự vòng | Hiệu đính nguồn sinh dữ liệu theo ID/nội dung phương án; phiên bản và di chuyển bài cũ |
| Nội dung mobile bị đẩy sâu, nút bị thanh đáy che ở 320×568 | Phần giới thiệu/bộ chọn dài, chiều cao thẻ cố định | Điều hướng đáy/menu, bộ lọc tóm tắt, phần phụ thu gọn, thẻ ngắn theo chiều cao, tiến trình/đồng hồ cạnh câu hỏi |
| Ký tự thành phần Hán hiện ô vuông | 7 ký tự KanjiVG không tồn tại trong font JP gốc | Font bổ sung 2.208 byte cục bộ, chỉ tải khi gặp ký tự đó; kiểm tra cmap toàn bộ dữ liệu |
| Tải toàn bộ dữ liệu và khởi tạo các phần chưa mở | Script/UI eager | Loader classic script có thứ tự phụ thuộc, cache promise, template inert, trạng thái tải/lỗi/thử lại và chống kết quả tải cũ đổi màn hình |

Hai lỗi giao diện phát hiện khi tự xem ảnh đã được sửa trong lượt này: nhãn Việt bị lỗi mã hóa và hàng nút chuyển thẻ bị che ở màn hình ngắn. Không chỉ dùng kiểm tra tràn ngang để nghiệm thu.

Rà soát bổ sung sửa **21 câu ngữ pháp** còn dùng dạng giải thích `～のです` hoặc rút gọn khẩu ngữ `～てたい／～てましょう(か)` làm nhiễu sai tuyệt đối. Cùng các sửa trước đó, audit có quyết định theo ID cho 31 câu ngữ pháp và 10 câu luyện đề. Đáp án đúng, ID và số lượng câu giữ nguyên; có fixture kỳ vọng độc lập cho các sửa mới. Các nghĩa chỉ giao nhau (như AM/buổi sáng, ăn/dùng bữa, mặc/đeo/treo, làm/cho) dùng facet để tránh nhiễu gây tranh cãi, không được tự động chấm tương đương.

## Chính sách lưu và nhiều tab

`dekiru_attempts_v2/state/current` là nguồn trạng thái luyện đề sau lần di chuyển đầu. Các key localStorage v1 là bản chiếu tương thích, không có quyền ghi ngược lại nguồn trạng thái. Tab chạy mã cũ có thể sửa key cũ nhưng không ghi đè bản đang dùng trong IndexedDB.

Mỗi lần sửa kiểm tra lượt làm bài, chủ sở hữu và revision trong cùng transaction; đồng bộ thông báo không thay cho bước này. Lease 12 giây, cập nhật mỗi 3 giây. Đóng tab cố gắng nhả quyền; nếu tải lại quá nhanh hoặc trình duyệt không hoàn thành thao tác đóng, nút **Tiếp tục ở tab này** chuyển quyền ngay sau xác nhận. Tab cũ bị khóa ở lần đồng bộ tiếp theo và mọi ghi cũ bị từ chối ngay tại transaction. Tab chỉ xem có thể chuyển câu cục bộ.

Đồng hồ dựa vào `startedAt + minutes`, không cộng lượt interval. Bất kỳ tab nào phát hiện đến hạn có thể hoàn tất đúng lượt đó trong transaction; không thêm lịch sử trùng. Tab cũ không thể nộp lượt mới. Khôi phục bài có thời gian diễn ra nền ngay cả khi chưa mở màn hình Luyện đề.

Nếu cả bộ nhớ bị chặn, bài chạy trong RAM và không chiếu vào localStorage thiếu an toàn. Nếu ghi lỗi giữa phiên, tạo bản sao với ID riêng trong tab hiện tại và báo rõ chỉ giữ trong phiên; bản đã lưu không bị ghi đè. Đề/ảnh vẫn cần IndexedDB để nhập và lưu lâu dài.

## Mã và dữ liệu chính

- `index.html`: khung HTML/template; `assets/app.css`, `assets/app.js`: CSS và điều phối vốn nằm inline.
- `data/meaning-groups.js`, `assets/quiz-core.js`: dữ liệu nghĩa và logic lựa chọn/chấm độc lập.
- `assets/grammar-core.js`, `assets/grammar.js`: dạng chấp nhận, đủ mảnh ghép, lưu/khôi phục và bảo vệ bài đang làm.
- `assets/attempt-store.js`, `assets/exam-core.js`, `assets/exams.js`: transaction, chấm/định dạng, giao diện luyện đề/nhập ảnh.
- `assets/loader.js`, `assets/dialogs.js`, `assets/mobile.*`: tải theo chế độ, bàn phím/focus và bố cục responsive.
- `scripts/content_corrections.py`, `scripts/build_exams.py`, `audits/content-decisions.json`: hiệu đính có thể tái tạo; `data/grammar*.js`, `data/exams.js`: nội dung hiện hành.
- `tests/`, `requirements-dev.txt`, `package-lock.json`, `.github/workflows/checks.yml`: kiểm tra logic, hồi quy, trình duyệt và CI push/PR.

Audit đáp án và giới hạn từng ID: [audits/answers.md](audits/answers.md). Các câu tự biên soạn chưa có khóa chính thức/giáo viên duyệt độc lập; không coi kiểm thử đạt điểm tối đa là chứng minh nội dung đáp án.

## Bằng chứng và cách chạy

[Thư mục ảnh và số đo](audits/evidence/README.md) chứa ảnh trước/sau của 7 chế độ và ma trận sáng/tối 320×568, 390×844, 768×1024, 1440×1000; thêm màn hình đang làm/kết quả. `check_zoom.py` kiểm tra **zoom trang gốc 200% trên Chromium/Edge** bằng cấu hình profile riêng: viewport 1440, `innerWidth=720`, `devicePixelRatio=2`, `visualViewport.scale=1`; có 14 ảnh sáng/tối. Còn có mô phỏng reflow độc lập. Phím Ctrl+ không kích hoạt zoom trong môi trường headless nên không dùng làm bằng chứng. Firefox native zoom, Safari/iOS và TalkBack/VoiceOver còn cần kiểm tra trên thiết bị thật.

Kết quả chạy chi tiết và số đo cuối cùng nằm trong [audits/evidence/test-results.json](audits/evidence/test-results.json) và [audits/evidence/performance.md](audits/evidence/performance.md). Workflow đã thêm nhưng lần chạy trên GitHub Actions/Linux cần được xác nhận sau khi push. GitHub Pages được kiểm tra bằng HTTP có tiền tố `/dekiru-nihongo/`; chưa triển khai bản này lên website công khai trong lượt sửa.

```powershell
python -m pip install -r requirements-dev.txt
python -m playwright install chromium firefox
npm ci --ignore-scripts
node tests/check_logic.js
python tests/run_checks.py
npm run format:check
```

Chọn Chromium: `$env:DEKIRU_BROWSER='chromium'`; Edge: `'edge'`; Firefox: `'firefox'`. `DEKIRU_CHANNEL` và `DEKIRU_EXECUTABLE_PATH` cho phép chỉ định channel/binary. Mặc định Windows dùng Edge có sẵn; Linux dùng Chromium. Bộ test âm thanh vẫn có nhánh Firefox độc lập. Chỉ kiểm tra tiến trình phát/giải mã, không xác minh âm lượng loa vật lý. CDP touch chạy trên Chromium/Edge; Firefox dùng pointer drag thay thế.

Chạy website: mở `index.html` trực tiếp, hoặc `python -m http.server 8000` rồi vào `http://localhost:8000`. Không cần npm/build server để học. Khi sao chép/deploy giữ đủ `assets`, `data`, `sources`, `Material`.
