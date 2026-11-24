# Phát Triển Du Lịch Thông Minh Tại Việt Nam

Dự án bài thuyết trình tương tác được xây dựng bằng **HTML5**, **External CSS3** và **External JavaScript**, kết hợp góc nhìn phân tích kinh tế học, thiết kế giao diện trình chiếu hiện đại và cơ chế điều hướng bằng bàn phím tương tự PowerPoint (PPTX).

---

## Cấu Trúc Thư Mục

```text
smart_tourism_presentation/
├── index.html   # Cấu trúc 5 slide, nội dung phân tích & media (.WebP, .WebM)
├── style.css    # Thiết kế giao diện, bố cục lưới, hiệu ứng Fly In & None
└── script.js    # Điều khiển chuyển slide bằng phím mũi tên & đảo ngược hiệu ứng
```

---

## Nội Dung 5 Slide

1. **Tổng quan:** Khái niệm du lịch thông minh, vai trò chuyển đổi số và các chỉ tiêu kinh tế mục tiêu.
2. **Động lực kinh tế:** Tối ưu hóa nguồn lực bằng Big Data, cá nhân hóa doanh thu (tăng chi tiêu bình quân / CLV) và thanh toán QR xuyên biên giới.
3. **Xu hướng công nghệ:** 4 trụ cột chính gồm *AI & Gen-AI*, *VR / AR / Metaverse*, *IoT & Smart Hotel* và *Big Data Analytics*.
4. **Ví dụ thực tiễn tại Việt Nam:**
   - **Hà Nội:** Tour đêm Văn Miếu - Quốc Tử Giám ứng dụng 3D Mapping.
   - **Đà Nẵng:** Ứng dụng *Danang FantastiCity*.
   - **TP. Hồ Chí Minh:** Bản đồ du lịch tương tác 3D/360.
5. **Thách thức và Giải pháp:** Phân mảnh dữ liệu, năng lực số của doanh nghiệp vừa và nhỏ (SMEs), an toàn thông tin cùng các giải pháp nền tảng dùng chung, hợp tác công - tư (PPP) và du lịch xanh.

---

## Hướng Dẫn Trình Chiếu & Phím Tắt

- **Mở bài thuyết trình:** Mở tệp `index.html` trực tiếp bằng trình duyệt web hiện đại (Chrome, Edge, Firefox, Safari).
- **Mũi tên Xuống (`↓`):** Chuyển sang slide kế tiếp.
- **Mũi tên Lên (`↑`):** Quay lại slide trước đó.

---

## Cơ Chế Hiệu Ứng & Kỹ Thuật

- **Hiệu ứng Fly In (`.fly-in`):** Các khối nội dung tự động trượt từ dưới lên theo nhịp trễ tuần tự khi slide được kích hoạt; khi rời khỏi slide, trạng thái hiệu ứng được đảo ngược/thu hồi để sẵn sàng chạy lại ở lần xem sau.
- **Hiệu ứng None (`.none-effect`):** Các khung media (`.WebP`, `.WebM`) và thanh thông điệp tổng kết hiển thị ngay lập tức, không kèm chuyển động.
- **Định dạng Media:** Sử dụng ảnh định dạng `.WebP` và video định dạng `.WebM`. *(Lưu ý: cần có kết nối Internet để tải tài nguyên ảnh/video mẫu từ bên ngoài, hoặc bạn có thể thay thế bằng tệp `.webp` và `.webm` nội bộ đặt cùng thư mục).*

---

# Liên Kết Trình Chiếu: 
`https://baobao110912.github.io/B-i-t-p-a-l-24-11-2026/`
