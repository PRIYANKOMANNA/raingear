document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById('cart-container');
    const viewCartButton = document.querySelector('.view-cart');
    const closeCartButton = document.querySelector('.btn-close-cart');
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const paymentModal = document.getElementById('payment-modal');
    const cartItems = document.getElementById('cart-items');
    const cart = [];

    viewCartButton.addEventListener('click', function() {
        console.log('View Cart button clicked');
        cartContainer.style.display = 'block';
        updateCart();
    });

    closeCartButton.addEventListener('click', function() {
        console.log('Close Cart button clicked');
        cartContainer.style.display = 'none';
    });

    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.dataset.name;
            const price = this.dataset.price;
            console.log(Adding ${name} - ${price} to cart);
            addToCart(name, price);
        });
    });

    signInButton.addEventListener('click', function() {
        signInModal.style.display = 'block';
    });

    signOutButton.addEventListener('click', function() {
        signOut();
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    function addToCart(name, price) {
        const item = cart.find(product => product.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
            `;
            cartItems.appendChild(itemElement);
        });
    }

    function signOut() {
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
        alert('You have signed out successfully.');
    }

    // Carousel functionality
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', function() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    });

    prevButton.addEventListener('click', function() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    });

    // Chat Bot functionality
    const chatBotToggle = document.getElementById('chat-bot-toggle');
    const chatBot = document.getElementById('chat-bot');
    const closeChatButton = document.querySelector('.close-chat');

    chatBotToggle.addEventListener('click', function() {
        chatBot.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', function() {
        chatBot.classList.add('hidden');
    });

    const sendChatButton = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    sendChatButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.innerText = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Payment button functionality
    const paymentButton = document.querySelector('.btn-payment');

    paymentButton.addEventListener('click', function() {
        cartContainer.style.display = 'none';
        paymentModal.style.display = 'block';
    });

});