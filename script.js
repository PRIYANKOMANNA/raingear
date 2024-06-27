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

// Function to toggle the menu (for mobile view)
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Example function to handle more info button click (optional)
function moreInfo(itemName) {
    alert('More information about ' + itemName + ' will be shown here.');
}

// Carousel control functions (optional for your slider)
function nextSlide() {
    // Logic to show the next slide
}

function prevSlide() {
    // Logic to show the previous slide
}
