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

    // Contact Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can implement the logic to send the form data
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // For example, send data to server or perform further actions

        // Clear the form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Optionally, show a confirmation message or redirect
        alert('Message sent successfully!');
    });

    // Additional JavaScript specific to blog.html or other pages can be added here
});
