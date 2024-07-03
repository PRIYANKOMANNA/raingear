// script.js

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Cart Functionality
let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = `<h2>Your Cart</h2>`;
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `<div class="cart-item">
            <p>${item.name}</p>
            <p>₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'block';
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function moreInfo(productName) {
    alert(`More information about ${productName}`);
}
