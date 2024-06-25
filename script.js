document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                    <button class="btn-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
                    <button class="btn-more-info">More Info</button>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function toggleCart() {
    const cartContent = document.getElementById('cart-content');
    cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
}

let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item;
        cartItems.appendChild(itemDiv);
    });
}
