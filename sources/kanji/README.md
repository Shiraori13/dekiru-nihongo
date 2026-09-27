# Nguồn dữ liệu Hán tự

## Phạm vi và cách đối chiếu

- `sources/new-words.pdf` là nguồn của từ vựng, cách đọc tiếng Nhật, nghĩa tiếng Việt, bài và chủ đề. PDF không cung cấp âm Hán Việt hay sơ đồ thứ tự nét.
- `data/kanji-source.json` ghi cách viết trong PDF và liên kết đến từng mục của `data/vocabulary.js`. Có 607 mục từ chứa chữ Hán, thuộc 15 bài và 45 chủ đề; câu ví dụ bổ sung từ bản cũ không được tính.
- 4 mục có chữ Hán bổ sung cho cách viết kana trong PDF: 喫煙所 ← きつえんじょ, 喫茶店 ← きっさてん, 靴 ← くつ, 天気が悪い ← 天気がわるい. Giao diện hiển thị rõ cách viết gốc và nhãn bổ sung.
- 496 chữ khác nhau có âm Hán Việt được rà soát, nghĩa gợi nhớ, âm On/Kun tham khảo và đầy đủ đường nét. Bộ lọc giữ nguyên tên bài/chủ đề của danh sách đã đối chiếu, kể cả chủ đề không có từ chứa chữ Hán.
- Nghĩa từng chữ và ghi chú từ trong `data/kanji-meanings.tsv`, `assets/kanji.js` là phần biên soạn hỗ trợ học. Nghĩa cả từ theo ngữ cảnh luôn được hiển thị riêng. Âm Hán Việt không thay thế cách đọc tiếng Nhật, cũng không phải cách dịch máy móc của cả từ.
- Âm On/Kun là mục tra cứu của chữ; dấu chấm trong Kun phân cách thân chữ Hán và phần kana. Cách đọc từ cụ thể dùng trường `h` của từ vựng.
- Thành phần hình thể lấy từ các nhóm SVG của KanjiVG, không được trình bày như nguồn gốc lịch sử của chữ. Số nét lấy từ số đường SVG và được đối chiếu với các số nét được KANJIDIC2 ghi nhận.

## KANJIDIC2

Copyright James William BREEN and the Electronic Dictionary Research and Development Group (EDRDG).

- Dữ liệu gốc: https://www.edrdg.org/kanjidic/kanjidic2.xml.gz
- Tài liệu: https://www.edrdg.org/kanjidic/kanjd2index_legacy.html
- Giấy phép: https://www.edrdg.org/edrdg/licence.html — Creative Commons Attribution-ShareAlike 4.0, https://creativecommons.org/licenses/by-sa/4.0/
- Phiên bản tạo ngày 2026-09-25; SHA-256 của file nén: `aef74d1c86bad7ef03441e6c0ded48f0b0da3e2637e00bcc80f6e10488811c99`.

Trích các âm On/Kun; dùng trường `vietnam` làm dữ liệu tham khảo và chọn âm thông dụng trong phạm vi bài học. Không đưa mọi biến âm/âm Nôm vào giao diện. Các dạng Nhật cần đối chiếu với dạng tương ứng: 両／兩 (lưỡng), 伝／傳 (truyền), 払／拂 (phất), 桜／櫻 (anh), 晩／晚 (vãn), 着／著 (trước/trứ), 予／預 (dự trong 予約). Vì vậy dữ liệu âm Hán Việt được lưu riêng trong TSV, không lấy máy móc âm đầu tiên của từ điển. 働 là chữ Nhật tạo; “động” được ghi là âm đối chiếu theo 動. 込 được ghi chú là chữ Nhật tạo, không gán âm Hán Việt trong bài học này.

## KanjiVG

Copyright © 2009–2026 Ulrich Apel. Creative Commons Attribution-ShareAlike 3.0.

- Trang dự án và tài liệu: https://kanjivg.tagaini.net/
- Kho dữ liệu: https://github.com/KanjiVG/kanjivg
- Commit: `422b5538595676da918c288a4230cb5e22a1ee7e`.
- Nguồn ZIP: https://codeload.github.com/KanjiVG/kanjivg/zip/422b5538595676da918c288a4230cb5e22a1ee7e
- Giấy phép đầy đủ đi kèm: [KANJIVG-COPYING.txt](KANJIVG-COPYING.txt), https://creativecommons.org/licenses/by-sa/3.0/

Các đường SVG và tọa độ số nét được chuyển thành mảng dữ liệu; thứ tự, hình dạng và hướng nét không thay đổi. Giao diện thay màu, thêm lưới và mô phỏng nét. Dữ liệu chuyển đổi kết hợp trong `data/kanji.js` được phân phối theo CC BY-SA 4.0; quyền tác giả của các nguồn gốc được giữ nguyên. Giấy phép dữ liệu này không áp dụng cho các PDF do người dùng cung cấp.

## Tạo lại và cập nhật

Giữ hai file nén gốc trong thư mục công cụ cục bộ (không cần cho website hoạt động). Chạy:

```powershell
python scripts/build_kanji.py .work/kanjivg.zip .work/kanjidic2.xml.gz
python scripts/build_font.py .work/NotoSansJP.ttf
python tests/check_kanji.py
```

Script kiểm tra đủ mục từ, ánh xạ bài/chủ đề/trang nguồn, đủ nghĩa và âm đọc đã chọn, đủ hình nét, đủ vị trí số nét, số nét khớp KANJIDIC2. Metadata của bản dựng nằm trong `KANJI_META`.

Khi cập nhật danh sách từ, rà lại `data/kanji-source.json` với PDF; bổ sung chữ mới vào `data/kanji-meanings.tsv` trước khi tạo dữ liệu. Với cập nhật từ điển, tải lại file KANJIDIC2 từ URL chính thức ở trên (kiểm tra định kỳ hàng tháng theo hướng dẫn EDRDG), chạy script, xem diff các âm On/Kun và số nét, rồi kiểm thử trước khi đưa lên website. Cập nhật các mốc nguồn trong tài liệu này theo metadata của bản mới.

Website không gọi API từ điển hay tải SVG từ dịch vụ ngoài khi học. Tiến độ lưu trong trình duyệt; ô tập viết tự do không tự đánh giá độ chính xác.
