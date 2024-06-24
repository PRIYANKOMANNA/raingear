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

function addToCart(product) {
    alert(`${product} has been added to your cart!`);
}

function moreInfo(product) {
    alert(`More information about ${product}`);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
