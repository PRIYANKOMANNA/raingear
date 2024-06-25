document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.view-cart').addEventListener('click', viewCart);

    // Fetch products and display them
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsSection = document.querySelector('.products');
            productsSection.innerHTML = ''; // Clear any existing products
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price.toFixed(2)} <del>₹${(product.price + 100).toFixed(2)}</del></p>
                    <button class="btn-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                `;
                productsSection.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});

let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    alert(`${name} added to cart!`);
}

function viewCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
    cartModal.classList.add('active');
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('active');
}
