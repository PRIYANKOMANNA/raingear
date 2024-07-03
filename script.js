document.addEventListener('DOMContentLoaded', () => {
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
        console.log(`Adding to cart: ${productName} - ₹${productPrice}`);
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCart();
        alert(`${productName} has been added to your cart!`);
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            cartItems.innerHTML += `<div class="cart-item">
                <p>${item.name}</p>
                <p>₹${item.price}</p>
                <button class="btn-remove" data-index="${index}">Remove</button>
            </div>`;
        });

        // Add event listeners to dynamically created remove buttons
        document.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
            });
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
        alert(`More information about ${productName}`);
    }

    function proceedToPayment() {
        if (cart.length > 0) {
            alert('Proceeding to payment...');
        } else {
            alert('Your cart is empty.');
        }
    }

    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    document.querySelector('.view-cart').addEventListener('click', viewCart);

    document.querySelector('.btn-close-cart').addEventListener('click', closeCart);

    document.querySelectorAll('.btn-more-info').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            moreInfo(name);
        });
    });

    document.querySelector('.btn-payment').addEventListener('click', proceedToPayment);
});
// Function to proceed to payment and show Google Form in iframe
function proceedToPayment() {
    if (cart.length > 0) {
        // Open the iframe with Google Form
        const iframeContainer = document.createElement('div');
        iframeContainer.innerHTML = `
            <div id="iframe-overlay" class="iframe-overlay">
                <div class="iframe-container">
                    <button class="btn-close-iframe" onclick="closeIframe()">Close</button>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVAfHoPaHO9REcnwansPOb5DHzBHQLq9Z4JEMRj_CSt1fQ9w/viewform?embedded=true"
                            width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…
                    </iframe>
                </div>
            </div>
        `;
        document.body.appendChild(iframeContainer);

        // Optionally, you can also close the cart view if it's open
        closeCart();
    } else {
        alert('Your cart is empty.');
    }
}

function closeIframe() {
    const iframeOverlay = document.getElementById('iframe-overlay');
    iframeOverlay.remove();
}

// Function to finalize order after filling Google Form
function completeOrder() {
    // You can add additional logic here as needed, e.g., clearing cart, confirming order, etc.
    alert('Order completed! Thank you for your purchase.');
}

// Event listener for "Complete Order" button
document.getElementById('complete-order-button').addEventListener('click', completeOrder);
