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
// Define a global variable for cart items
let cartItems = [];

// Function to add item to cart
function addToCart(itemName, price) {
    const item = {
        name: itemName,
        price: price
    };
    cartItems.push(item);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
        `;
        cartContainer.appendChild(cartItemElement);
    });
}

// Function to view cart when button is clicked
function viewCart() {
    updateCart();
    // Add code here to show a modal or overlay with cart contents
    // Example: $('#cartModal').modal('show');
    // Replace with your preferred modal library or custom implementation
}

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization if needed
});
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
// Function to handle payment when clicking "View Cart" button
function viewCart() {
    updateCart(); // Update cart contents
    // Simulate opening a payment modal or redirect to a payment page
    // Example using Bootstrap modal:
    // $('#paymentModal').modal('show');
    // Replace with your modal library or custom implementation
}
