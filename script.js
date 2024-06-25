function fetchProducts() {
    fetch('http://127.0.0.1:5000/products')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('.products');
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <button class="btn-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
                    <button class="btn-more-info" onclick="moreInfo('${product.name}')">More Info</button>
                `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

document.addEventListener('DOMContentLoaded', fetchProducts);
