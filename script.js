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
            // Open the iframe with Google Form
            const iframeContainer = document.createElement('div');
            iframeContainer.className = 'iframe-overlay';
            iframeContainer.innerHTML = `
                <div class="iframe-container">
                    <button class="btn-close-iframe">Close</button>
                    <iframe id="payment-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdVAfHoPaHO9REcnwansPOb5DHzBHQLq9Z4JEMRj_CSt1fQ9w/viewform?embedded=true"
                            width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…
                    </iframe>
                </div>
            `;
            document.body.appendChild(iframeContainer);

            // Optionally, you can also close the cart view if it's open
            closeCart();

            // Add event listener to close button
            document.querySelector('.btn-close-iframe').addEventListener('click', closeIframe);

            // Check for form submission
            const paymentIframe = document.getElementById('payment-iframe');
            paymentIframe.addEventListener('load', function () {
                const iframeDoc = paymentIframe.contentDocument || paymentIframe.contentWindow.document;
                const observer = new MutationObserver(() => {
                    if (iframeDoc.body.innerText.includes('Your response has been recorded.')) {
                        closeIframe();
                        observer.disconnect();
                        showConfirmationModal();
                    }
                });
                observer.observe(iframeDoc.body, { childList: true, subtree: true });
            });
        } else {
            alert('Your cart is empty.');
        }
    }

    function closeIframe() {
        const iframeOverlay = document.querySelector('.iframe-overlay');
        iframeOverlay.remove();
    }

    function showConfirmationModal() {
        const modal = document.getElementById('confirmation-modal');
        modal.style.display = 'block';

        const closeModalButton = modal.querySelector('.close-modal');
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
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
