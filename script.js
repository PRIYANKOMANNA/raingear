document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const paymentModal = document.getElementById('payment-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    const signInModal = document.getElementById('sign-in-modal');
    const signInButton = document.getElementById('sign-in-button');
    const signInBtn = document.querySelector('.sign-in');
    const signOutBtn = document.querySelector('.sign-out');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    let isAuthenticated = false;
    let currentIndex = 0;

    // Carousel items
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    // Event listeners for carousel controls
    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    function showSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }

        const offset = -index * 100;
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${offset}%)`;
        });

        currentIndex = index;
    }

    // Event listeners for 'Add to Cart' buttons
    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            addToCart(name, price);
        });
    });

    // Event listener for 'View Cart' button
    document.querySelector('.view-cart').addEventListener('click', () => {
        cartContainer.style.display = 'block';
        renderCart();
    });

    // Event listener for 'Close Cart' button
    document.querySelector('.btn-close-cart').addEventListener('click', closeCart);

    // Event listener for 'Proceed to Payment' button
    document.querySelector('.btn-payment').addEventListener('click', () => {
        if (isAuthenticated) {
            openPaymentModal();
        } else {
            signInModal.style.display = 'flex';
        }
    });

    // Event listener for 'Close Modal' buttons
    document.querySelectorAll('.close-modal').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            paymentModal.style.display = 'none';
            confirmationModal.style.display = 'none';
            signInModal.style.display = 'none';
        });
    });

    // Event listener for 'Sign In' button
    signInButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            isAuthenticated = true;
            signInModal.style.display = 'none';
            signInBtn.style.display = 'none';
            signOutBtn.style.display = 'inline-block';
        }
    });

    // Event listener for 'Sign Out' button
    signOutBtn.addEventListener('click', () => {
        isAuthenticated = false;
        signInBtn.style.display = 'inline-block';
        signOutBtn.style.display = 'none';
    });

    function addToCart(name, price) {
        cart.push({ name, price });
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.name}</p><p>₹${item.price.toFixed(2)}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    function closeCart() {
        cartContainer.style.display = 'none';
    }

    function openPaymentModal() {
        paymentModal.style.display = 'flex';
    }
});
