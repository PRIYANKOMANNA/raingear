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
