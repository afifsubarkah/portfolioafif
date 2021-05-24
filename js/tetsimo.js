(() => {
    const sliderContainer = document.querySelector('.testi-slider-container'),
        slides = sliderContainer.querySelectorAll('.testi-item'),
        slideWidth = sliderContainer.offsetWidth,
        prevBtn = document.querySelector('.testi-slider-nav .prev'),
        nextBtn = document.querySelector('.testi-slider-nav .next');
    activeSlide = sliderContainer.querySelector('.testi-item.active');
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    // set width of all
    slides.forEach((slide) => {
        slide.style.width = slideWidth + 'px';
    });
    // set width container
    sliderContainer.style.width = slideWidth * slides.length + 'px';

    nextBtn.addEventListener('click', () => {
        if (slideIndex === slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        slider();
    });
    prevBtn.addEventListener('click', () => {
        if (slideIndex === 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }
        slider();
    });

    function slider() {
        sliderContainer.querySelector('.testi-item.active').classList.remove('actve');
        slides[slideIndex].classList.add('active');
        sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + 'px';
    }
    slider();
})();