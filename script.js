document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const paymentModal = document.getElementById('payment-modal');
    const signInModal = document.getElementById('sign-in-modal');
    const signInButton = document.getElementById('sign-in-button');
    const registerButton = document.getElementById('register-button');
    const signInBtn = document.querySelector('.sign-in');
    const signOutBtn = document.querySelector('.sign-out');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    let isAuthenticated = false;

    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            addToCart(name, price);
        });
    });

    document.querySelector('.view-cart').addEventListener('click', () => {
        cartContainer.style.display = 'block';
        renderCart();
    });

    document.querySelector('.btn-close-cart').addEventListener('click', closeCart);

    document.querySelector('.btn-payment').addEventListener('click', () => {
        if (isAuthenticated) {
            openPaymentModal();
        } else {
            signInModal.style.display = 'flex';
        }
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        paymentModal.style.display = 'none';
        signInModal.style.display = 'none';
    });

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

    registerButton.addEventListener('click', () => {
        // Add your register logic here
        alert('Register button clicked');
    });

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

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        }
    }

    function closeCart() {
        cartContainer.style.display = 'none';
    }

    function openPaymentModal() {
        paymentModal.style.display = 'flex';
    }
});
