# Bằng chứng sửa menu và vùng học

Ngày 23/10/2026. [Báo cáo nguyên nhân và thay đổi](../../UI_SPACE_FIX.md).

| Trường hợp | Trước sửa | Sau sửa |
|---|---|---|
| Menu mobile tối | [Hai nhãn/icon mỗi hàng](before-menu-390-dark.png) | [Một nhãn/icon mỗi hàng](after-menu-390-dark.png) |
| PC 1600 mở Giao diện | [Vùng học bị thu hẹp](before-open-1600-dark.png) | [Overlay giữ nguyên vùng học](after-open-1600-dark.png) |
| PC 1920 đóng Giao diện | [Thừa cột phải](before-closed-1920-dark.png) | [Flashcard dùng đủ chiều rộng](after-closed-1920-dark.png) |
| Firefox mobile sáng | — | [Không còn chữ hằn qua menu](firefox/after-menu-390-light.png) |
| Firefox PC tối | — | [Bảng Giao diện đọc rõ](firefox/after-open-1920-dark.png) |

`before-measurements.json` tái hiện mỗi menu item hai nhãn/hai SVG và vùng học co lại khi mở bảng. `results-chromium.json`, `firefox/results-firefox.json` đo sau sửa và kiểm tra tự động; `check-ui-space-chromium.log`, `firefox/check-ui-space-firefox.log` là log chạy ca mới.

Phạm vi: sáng/tối, 320/390/768 px và PC 1280/1440/1600/1920 px, cỡ chữ 20 px, resize lúc panel mở qua mốc 1500, ảnh nền chi tiết/slider 55%, nền menu/dialog đặc, đủ bảy nút gốc, giữ đáp án quiz, focus/Escape, `file://` và tiền tố `/dekiru-nihongo/`. Đã mở trực tiếp ảnh Chromium và Firefox để rà lại.

`regression-results.json` chứa sáu suite liên quan được chạy lại; ca mới chạy riêng trên Chromium 153.0.8010.12 và Firefox 155.0. Hai kiểm tra Node và format đạt. `regression/` giữ ảnh zoom 200% và các màn học của các suite cũ. Không gọi đây là lần chạy lại toàn bộ 21 suite.

```powershell
python tests/check_ui_space.py
python tests/run_checks.py check_mobile.py check_appearance.py check_glass_layout.py check_reference_ui.py check_flashcard_keyboard.py check_zoom.py
```

Tài nguyên nội dung và logic chấm/lưu không thay đổi trong lần sửa này. Chưa push/deploy; Safari/iOS và thiết bị thật còn cần kiểm tra riêng.
