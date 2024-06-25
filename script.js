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

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // Fetch products and display them
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
                    <button class="btn-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                    <button class="btn-more-info" onclick="moreInfo(${product.id})">More Info</button>
                `;
                productsSection.appendChild(productElement);
            });
        });

    // Attach event listener to the "View Cart" button
    document.querySelector('.view-cart').addEventListener('click', viewCart);
});

function addToCart(id, name, price) {
    const product = { id, name, price, quantity: 1 };
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    alert(`${name} has been added to your cart.`);
}

function moreInfo(id) {
    fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
            alert(`More information about ${data.product.name}: ${data.product.description}`);
        });
}

function viewCart() {
    let cartHTML = '<h2>Cart Details</h2><ul>';
    let total = 0;

    if (cart.length === 0) {
        cartHTML += '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            cartHTML += `
                <li>
                    ${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}
                    = ₹${(item.price * item.quantity).toFixed(2)}
                </li>`;
            total += item.price * item.quantity;
        });
    }

    cartHTML += `</ul><p>Total: ₹${total.toFixed(2)}</p>`;

    const cartModal = document.createElement('div');
    cartModal.classList.add('cart-modal');
    cartModal.innerHTML = `
        <div class="cart-content">
            ${cartHTML}
            <button onclick="closeCart()">Close</button>
        </div>
    `;
    document.body.appendChild(cartModal);
}

function closeCart() {
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) {
        document.body.removeChild(cartModal);
    }
}
