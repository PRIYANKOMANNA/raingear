// Global variables for cart items and current slide index
let cartItems = [];
let currentSlide = 0;

// Function to add item to cart
function addToCart(itemName, price) {
    const item = {
        name: itemName,
        price: price
    };
    cartItems.push(item);
    console.log('Item added to cart:', item);
}

// Function to update and show cart contents
function updateCart() {
    const cartContainer = $('#cart-container');
    cartContainer.empty(); // Clear previous cart items

    cartItems.forEach(item => {
        const cartItemElement = $('<div class="cart-item"></div>');
        cartItemElement.html(`
            <p>${item.name} - ₹${item.price}</p>
        `);
        cartContainer.append(cartItemElement);
    });

    // Show modal or overlay with cart contents
    // Example: $('#cartModal').modal('show');
    // Replace with your modal library or custom implementation
}

// Function to handle view cart button click
function viewCart() {
    updateCart(); // Update cart contents
}

// Function to show next slide in the carousel
function nextSlide() {
    const slides = $('.carousel-item');
    $(slides[currentSlide]).removeClass('active');
    currentSlide = (currentSlide + 1) % slides.length;
    $(slides[currentSlide]).addClass('active');
}

// Function to show previous slide in the carousel
function prevSlide() {
    const slides = $('.carousel-item');
    $(slides[currentSlide]).removeClass('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    $(slides[currentSlide]).addClass('active');
}

// Function to handle payment when clicking "Buy Now" button
$('#paymentModal button.btn-primary').on('click', function() {
    // Perform payment processing logic here
    alert('Payment processed successfully!');
    $('#paymentModal').modal('hide'); // Close payment modal after processing
});

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
