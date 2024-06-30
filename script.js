let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    console.log(itemName + ' added to cart.');
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    viewCart();
}

// Function to change item quantity
function changeQuantity(itemName, quantity) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1 && quantity > 0) {
        cart[itemIndex].quantity = parseInt(quantity, 10);
    } else {
        removeFromCart(itemName);
    }
    viewCart();
}

// Function to display the cart
function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        const cartTable = document.createElement('table');
        cartTable.innerHTML = `
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        `;

        let totalPrice = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>₹${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1"
                           onchange="changeQuantity('${item.name}', this.value)">
                </td>
                <td>₹${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
            `;
            cartTable.appendChild(row);
        });

        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td colspan="3">Total</td>
            <td>₹${totalPrice.toFixed(2)}</td>
            <td></td>
        `;
        cartTable.appendChild(totalRow);

        cartContainer.appendChild(cartTable);
        cartContainer.innerHTML += '<button onclick="checkout()">Proceed to Checkout</button>';
    }
}

// Function to handle checkout
function checkout() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = `
        <h2>Checkout</h2>
        <p>Total Amount: ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <label for="payment-method">Select Payment Method:</label>
        <select id="payment-method">
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="net-banking">Net Banking</option>
        </select>
        <button onclick="processPayment()">Pay Now</button>
    `;
}

// Function to process payment
function processPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    alert(`Payment method selected: ${paymentMethod}\nProcessing payment...`);
    // Implement payment processing logic here
    cart = []; // Clear cart after payment
    viewCart();
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

// Carousel control functions (optional for image slider functionality)
function prevSlide() {
    // Implement previous slide functionality
}

function nextSlide() {
    // Implement next slide functionality
}
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

// Auto-slide functionality (optional)
setInterval(nextSlide, 3000);
