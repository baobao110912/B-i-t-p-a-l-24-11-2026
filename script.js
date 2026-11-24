document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.getElementById('progressBar');
    const slideCounter = document.getElementById('slideCounter');
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    // Hàm kích hoạt hiệu ứng Fly In tuần tự khi vào Slide
    function playSlideAnimations(slideElement) {
        const flyInElements = slideElement.querySelectorAll('.fly-in');
        flyInElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 110); // Stagger delay tạo nhịp điệu chuyên nghiệp
        });
    }

    // Hàm đảo ngược hiệu ứng (thu hồi trạng thái) khi rời sang Slide khác
    function reverseSlideAnimations(slideElement) {
        const flyInElements = slideElement.querySelectorAll('.fly-in');
        flyInElements.forEach((el) => {
            el.classList.remove('animate-in');
        });
    }

    // Cập nhật giao diện thanh tiến trình và số trang
    function updateUI(index) {
        const progressPercent = ((index + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercent}%`;
        const currentFormatted = String(index + 1).padStart(2, '0');
        const totalFormatted = String(totalSlides).padStart(2, '0');
        slideCounter.textContent = `${currentFormatted} / ${totalFormatted}`;
    }

    // Hàm chuyển đổi Slide
    function goToSlide(targetIndex) {
        if (targetIndex < 0 || targetIndex >= totalSlides || targetIndex === currentSlideIndex) {
            return;
        }

        const previousSlide = slides[currentSlideIndex];
        const nextSlide = slides[targetIndex];

        // 1. Đảo ngược hiệu ứng của Slide cũ ngay khi chuyển đi
        reverseSlideAnimations(previousSlide);
        previousSlide.classList.remove('active');

        // 2. Hiển thị Slide mới và tự động chạy hiệu ứng Fly In
        currentSlideIndex = targetIndex;
        nextSlide.classList.add('active');
        updateUI(currentSlideIndex);

        // Kích hoạt tự động hiệu ứng đối tượng trên Slide mới
        requestAnimationFrame(() => {
            playSlideAnimations(nextSlide);
        });
    }

    // Lắng nghe sự kiện bàn phím theo yêu cầu:
    // - Mũi tên xuống (ArrowDown) -> Đến Slide sau
    // - Mũi tên lên (ArrowUp) -> Đến Slide trước
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            goToSlide(currentSlideIndex + 1);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            goToSlide(currentSlideIndex - 1);
        }
    });

    // Khởi chạy hiệu ứng tự động cho Slide đầu tiên ngay khi tải trang
    updateUI(0);
    setTimeout(() => {
        playSlideAnimations(slides[0]);
    }, 150);
});