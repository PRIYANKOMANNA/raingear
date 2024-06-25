let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // Fetch products and display them
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsSection = document.querySelector('.products');
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price.toFixed(2)} <del>₹${(product.price + 100).toFixed(2)}</del></p>
                    <button class="btn-cart" onclick="add
