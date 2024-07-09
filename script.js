document.addEventListener('DOMContentLoaded', function() {
    // Mock sign-in/sign-out logic
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const signInFormButton = document.getElementById('sign-in-button');

    signInButton.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            signInModal.style.display = 'none';
        });
    });

    signInFormButton.addEventListener('click', () => {
        // Mock sign-in logic
        signInModal.style.display = 'none';
        signInButton.style.display = 'none';
        signOutButton.style.display = 'inline-block';
    });

    signOutButton.addEventListener('click', () => {
        // Mock sign-out logic
        signInButton.style.display = 'inline-block';
        signOutButton.style.display = 'none';
    });

    // Chat Bot functionality
    const chatBot = document.getElementById('chat-bot');
    const chatHeader = chatBot.querySelector('.chat-header');
    const closeChatButton = chatBot.querySelector('.close-chat');
    const sendChatButton = chatBot.querySelector('#send-chat');
    const chatInput = chatBot.querySelector('#chat-input');
    const chatMessages = chatBot.querySelector('#chat-messages');
    const chatBotToggle = document.getElementById('chat-bot-toggle');

    chatBotToggle.addEventListener('click', () => {
        chatBot.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', () => {
        chatBot.classList.add('hidden');
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

    // Cart Functionality
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const viewCartButton = document.querySelector('.view-cart');
    const closeCartButton = document.querySelector('.btn-close-cart');
    const proceedToPaymentButton = document.querySelector('.btn-payment');
    const products = document.querySelectorAll('.btn-cart');

    viewCartButton.addEventListener('click', () => {
        cartContainer.classList.add('open');
    });

    closeCartButton.addEventListener('click', () => {
        cartContainer.classList.remove('open');
    });

    proceedToPaymentButton.addEventListener('click', () => {
        // Open payment modal or proceed to payment logic here
        document.getElementById('payment-modal').style.display = 'block';
    });

    products.forEach(product => {
        product.addEventListener('click', () => {
            const productName = product.getAttribute('data-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            // Add item to cart
            addItemToCart(productName, productPrice);
        });
    });

    function addItemToCart(name, price) {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <p>${name} - ₹${price}</p>
            <button class="btn-remove-item">Remove</button>
        `;
        cartItems.appendChild(item);

        // Update total price
        updateTotalPrice(price);
    }

    function updateTotalPrice(price) {
        const totalPriceElement = document.getElementById('total-price');
        let totalPrice = parseFloat(totalPriceElement.textContent.replace('Total: ₹', ''));
        totalPrice += price;
        totalPriceElement.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
    }

    // Remove item from cart
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-remove-item')) {
            const item = e.target.parentElement;
            const price = parseFloat(item.querySelector('p').textContent.split(' - ')[1].replace('₹', ''));
            item.remove();
            updateTotalPrice(-price);
        }
    });

    // Payment Modal
    const paymentModal = document.getElementById('payment-modal');
    const closePaymentModal = paymentModal.querySelector('.close-modal');

    closePaymentModal.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });

    // Contact Form submission (assuming contact.html implementation)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Implement your logic to handle form submission (e.g., send data to server)

            // Optional: Show a confirmation message or clear the form
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form fields after submission
        });
    }

});
