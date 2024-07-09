document.addEventListener('DOMContentLoaded', () => {
    // Sign-In and Sign-Out buttons
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const signInModalButton = document.getElementById('sign-in-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Check sign-in state on page load
    if (localStorage.getItem('signedIn') === 'true') {
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    }

    signInButton.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    signInModalButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Mock authentication logic
        if (username === 'user' && password === 'password') {
            localStorage.setItem('signedIn', 'true');
            alert('Sign-In successful');
            signInModal.style.display = 'none';
            signInButton.style.display = 'none';
            signOutButton.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    signOutButton.addEventListener('click', () => {
        localStorage.setItem('signedIn', 'false');
        alert('Signed out');
        signOutButton.style.display = 'none';
        signInButton.style.display = 'block';
    });

    // Cart functionality
    const cart = [];
    const cartContainer = document.getElementById('cart-container');
    const cartItemsContainer = document.getElementById('cart-items');
    const viewCartButton = document.querySelector('.view-cart');
    const closeCartButton = document.querySelector('.btn-close-cart');
    const proceedToPaymentButton = document.querySelector('.btn-payment');

    function updateCart() {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price}</p>
            </div>
        `).join('');
    }

    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            cart.push({ name, price });
            updateCart();
        });
    });

    viewCartButton.addEventListener('click', () => {
        cartContainer.style.display = 'block';
    });

    closeCartButton.addEventListener('click', () => {
        cartContainer.style.display = 'none';
    });

    proceedToPaymentButton.addEventListener('click', () => {
        cartContainer.style.display = 'none';
        document.getElementById('payment-modal').style.display = 'block';
    });

    // Carousel controls
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Initial slide
    showSlide(currentSlide);

    // Chatbot functionality
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const chatCloseButton = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'block';
    });

    chatCloseButton.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value;
            if (message.trim()) {
                const userMessage = document.createElement('div');
                userMessage.classList.add('message', 'user-message');
                userMessage.textContent = message;
                chatMessages.appendChild(userMessage);
                chatInput.value = '';

                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.classList.add('message', 'bot-message');
                    botMessage.textContent = 'This is a bot response.';
                    chatMessages.appendChild(botMessage);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const chatBot = document.getElementById('chat-bot');
    const chatHeader = chatBot.querySelector('.chat-header');
    const closeChatButton = chatBot.querySelector('.close-chat');
    const sendChatButton = chatBot.querySelector('#send-chat');
    const chatInput = chatBot.querySelector('#chat-input');
    const chatMessages = chatBot.querySelector('#chat-messages');
    const chatBotToggle = document.getElementById('chat-bot-toggle');

    chatBotToggle.addEventListener('click', () => {
        chatBot.classList.toggle('open');
        chatBotToggle.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', () => {
        chatBot.classList.remove('open');
        chatBotToggle.classList.remove('hidden');
    });

    sendChatButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                addMessage('Bot response to: ' + message);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    function addMessage(message, className = '') {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        if (className) {
            messageElement.classList.add(className);
        }
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const chatBot = document.getElementById('chat-bot');
    const chatHeader = chatBot.querySelector('.chat-header');
    const closeChatButton = chatBot.querySelector('.close-chat');
    const sendChatButton = chatBot.querySelector('#send-chat');
    const chatInput = chatBot.querySelector('#chat-input');
    const chatMessages = chatBot.querySelector('#chat-messages');
    const chatBotToggle = document.getElementById('chat-bot-toggle');

    chatBotToggle.addEventListener('mouseover', () => {
        chatBot.classList.toggle('open');
        chatBotToggle.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', () => {
        chatBot.classList.remove('open');
        chatBotToggle.classList.remove('hidden');
    });

    sendChatButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                addMessage('Bot response to: ' + message);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    function addMessage(message, className = '') {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        if (className) {
            messageElement.classList.add(className);
        }
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
