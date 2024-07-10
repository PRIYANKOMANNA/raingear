document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById('cart-container');
    const viewCartButton = document.querySelector('.view-cart');
    const closeCartButton = document.querySelector('.btn-close-cart');
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const paymentModal = document.getElementById('payment-modal');
    const chatBot = document.getElementById('chat-bot');
    const chatBotToggle = document.getElementById('chat-bot-toggle');
    const closeChat = document.querySelector('.close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const modalCloseButtons = document.querySelectorAll('.close-modal');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentCarouselIndex = 0;

    viewCartButton.addEventListener('click', function() {
        cartContainer.style.display = 'block';
    });

    closeCartButton.addEventListener('click', function() {
        cartContainer.style.display = 'none';
    });

    signInButton.addEventListener('click', function() {
        signInModal.style.display = 'block';
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.modal').style.display = 'none';
        });
    });

    chatBotToggle.addEventListener('click', function() {
        chatBot.classList.toggle('hidden');
        chatBotToggle.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', function() {
        chatBot.classList.add('hidden');
        chatBotToggle.classList.remove('hidden');
    });

    sendChat.addEventListener('click', function() {
        const message = chatInput.value;
        if (message.trim()) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
        }
    });

    // Carousel functionality
    function showCarouselItem(index) {
        carouselItems.forEach((item, idx) => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    nextButton.addEventListener('click', function() {
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    });

    prevButton.addEventListener('click', function() {
        currentCarouselIndex = (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    let cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            const item = { name: itemName, price: itemPrice };

            cartItems.push(item);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ₹${item.price}`;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Payment button functionality
    const paymentButton = document.querySelector('.btn-payment');

    paymentButton.addEventListener('click', function() {
        cartContainer.style.display = 'none';
        paymentModal.style.display = 'block';
    });
});
