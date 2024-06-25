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
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsSection = document.querySelector('.products');
            data.products.forEach(product => {
                const productElement = document.createElement('article');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3><a href="#">${product.name}</a></h3>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                    <button class="btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn-more-info" onclick="moreInfo(${product.id})">More Info</button>
                `;
                productsSection.appendChild(productElement);
            });
        });
});

function addToCart(productId) {
    fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, quantity: 1 })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function moreInfo(productId) {
    fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            alert(`More information about ${data.product.name}: ${data.product.description}`);
        });
}
/* Add the following styles */

.cart-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.cart-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.cart-content h2 {
    margin-top: 0;
}

.cart-content ul {
    list-style-type: none;
    padding: 0;
}

.cart-content ul li {
    margin: 10px 0;
}

.cart-content button {
    background-color: #ff9900;
    border: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cart-content button:hover {
    background-color: #e68a00;
}
