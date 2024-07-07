document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const paymentModal = document.getElementById('payment-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    const signInModal = document.getElementById('sign-in-modal');
    const signInButton = document.getElementById('sign-in-button');
    const registerButton = document.getElementById('register-button');
    const signInBtn = document.querySelector('.sign-in');
    const signOutBtn = document.querySelector('.sign-out');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    let isAuthenticated = false;
    let users = {}; // To store registered users

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

    document.querySelectorAll('.close-modal').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            paymentModal.style.display = 'none';
            confirmationModal.style.display = 'none';
            signInModal.style.display = 'none';
        });
    });

    window.addEventListener('message', (event) => {
        if (event.data === 'formSubmitted') {
            closePaymentModal();
            showConfirmationModal();
        }
    });

    signInButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password && users[username] && users[username] === password) {
            isAuthenticated = true;
            signInModal.style.display = 'none';
            signInBtn.style.display = 'none';
            signOutBtn.style.display = 'inline-block';
        } else {
            alert('Invalid username or password.');
        }
    });

    registerButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password && !users[username]) {
            users[username] = password;
            alert(`User registered. Username: ${username}, Password: ${password}`);
        } else {
            alert('Username already exists or invalid input.');
        }
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
    }

    function closeCart() {
        cartContainer.style.display = 'none';
    }

    function openPaymentModal() {
        paymentModal.style.display = 'flex';
    }

    function closePaymentModal() {
        paymentModal.style.display = 'none';
    }

    function showConfirmationModal() {
        confirmationModal.style.display = 'flex';
        setTimeout(() => {
            confirmationModal.style.display = 'none';
        }, 3000);
    }
});

function formSubmit() {
    window.parent.postMessage('formSubmitted', '*');
}
