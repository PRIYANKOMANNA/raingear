// script.js

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
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
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<div class="cart-item">
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

function closeCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'none';
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function moreInfo(productName) {
    alert(`More information about ${productName
