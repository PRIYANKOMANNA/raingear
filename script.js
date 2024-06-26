// script.js

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function viewCart() {
    alert('Viewing cart...');
}

function addToCart(item) {
    alert(`${item} added to cart.`);
}

function moreInfo(item) {
    alert(`More information about ${item}.`);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
