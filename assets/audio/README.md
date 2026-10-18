# Bộ phát âm tiếng Nhật cục bộ

1.178 MP3 bao phủ 921 thẻ từ vựng, 37 ví dụ ngữ pháp và các câu trong 71 bài đọc. Các nội dung trùng nhau dùng chung file. Mỗi tên file là 20 ký tự đầu SHA-256 của chuỗi chuẩn hóa; ánh xạ ở `data/audio.js`.

Âm thanh tổng hợp được tạo **trên máy** bằng [pyopenjtalk-plus / Open JTalk](https://github.com/tsukumijima/pyopenjtalk-plus), giọng **HTS Mei normal**. Không gửi văn bản tài liệu tới dịch vụ TTS bên ngoài. Giọng có âm sắc tổng hợp; đây là hỗ trợ luyện đọc, không phải bản thu người bản ngữ. Đầu vào dùng kana đã có trong dữ liệu để hạn chế đọc nhầm chữ Hán.

Giọng Mei: Copyright © 2009–2013 Nagoya Institute of Technology, Department of Computer Science / MMDAgent Project Team, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Xem [LICENSE-Mei.txt](LICENSE-Mei.txt). File được tổng hợp từ văn bản học tập, chuẩn hóa âm lượng và mã hóa mono MP3 24 kHz / 48 kbit/s; không ngụ ý tác giả giọng bảo trợ website này.

Tạo lại: cài `pyopenjtalk-plus`, `numpy`, `imageio-ffmpeg`, `playwright`, Microsoft Edge; chạy `python scripts/build_audio.py`. Các thư viện/mô hình chỉ cần khi tạo dữ liệu. Website phát MP3 bằng HTMLAudio; không cần cài công cụ hay giọng Nhật trên máy người học.

Khi sao chép website, giữ nguyên `assets/audio/` và `data/audio.js`. Khi chạy trên hosting, lần nghe đầu cần tải MP3 từ hosting; mở bản đầy đủ cục bộ thì không cần mạng. Cache của trình duyệt không đảm bảo toàn bộ website đã được tải để học offline.
