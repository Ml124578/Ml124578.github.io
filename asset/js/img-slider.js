document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.zero-image .bg_img');
    const indicators = document.querySelectorAll('.zero-image .indicator');
    let current = 0;
    let interval;

    function changeImage(index) {
        images[current].classList.remove('active');
        indicators[current].classList.remove('active');
        current = index;
        images[current].classList.add('active');
        indicators[current].classList.add('active');
    }

    function autoChangeImage() {
        changeImage((current + 1) % images.length);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            clearInterval(interval); // Stop automatic changing
            changeImage(index);
            interval = setInterval(autoChangeImage, 3000); // Restart automatic changing
        });
    });

    interval = setInterval(autoChangeImage, 3000); // Start automatic changing initially
});