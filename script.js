let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function addToCart(product) {
    alert(`${product} added to cart!`);
}

function moreInfo(product) {
    alert(`More information about ${product}`);
}

function viewCart() {
    alert('Viewing cart!');
}
