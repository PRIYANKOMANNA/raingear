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
// Initialize an empty cart
let cart = [];

// Function to add an item to the cart
function addToCart(itemName) {
    // Add the item to the cart array
    cart.push(itemName);
    console.log(itemName + ' added to cart.');
}

// Function to display the cart
function viewCart() {
    // Implement logic to display the cart contents
    console.log('View Cart clicked.');
    // Show the cart contents in an alert for demonstration
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Your cart contains: ' + cart.join(', '));
    }
}

// Example usage
addToCart('Apple');
addToCart('Banana');
viewCart();
