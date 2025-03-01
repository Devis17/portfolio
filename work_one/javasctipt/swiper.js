document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".swiper-container").forEach((slider, index) => {
        const swiper = new Swiper(slider, {
            loop: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            speed: 1000,
            on: {
                slideChange: function () {
                    const currentSlide = slider.querySelector(".current-slide");
                    if (currentSlide) {
                        currentSlide.textContent = this.realIndex + 1;
                    }
                }
            }
        });

        // Оновлюємо загальну кількість слайдів
        const totalSlides = slider.querySelector(".total-slides");
        if (totalSlides) {
            totalSlides.textContent = swiper.slides.length - swiper.loopedSlides * 0;
        }
    });
});
