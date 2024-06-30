let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.carousel-item img');

    const lazyLoad = function() {
        lazyImages.forEach(img => {
            if (img.offsetTop < window.innerHeight + window.pageYOffset) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            }
        });
    };

    lazyLoad();

    document.addEventListener('scroll', lazyLoad);
});
