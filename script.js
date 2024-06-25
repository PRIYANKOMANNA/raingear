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
