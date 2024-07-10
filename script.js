document.addEventListener("DOMContentLoaded", function() {
    // View cart functionality
    const viewCartButton = document.querySelector('.view-cart');
    const cartContainer = document.getElementById('cart-container');
    viewCartButton.addEventListener('click', function() {
        cartContainer.style.display = 'block';
    });

    const closeCartButton = document.querySelector('.btn-close-cart');
    closeCartButton.addEventListener('click', function() {
        cartContainer.style.display = 'none';
    });

    // Sign-in functionality
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const signInFormButton = document.getElementById('sign-in-button');

    signInButton.addEventListener('click', function() {
        signInModal.style.display = 'block';
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            signInModal.style.display = 'none';
        });
    });

    signInFormButton.addEventListener('click', function() {
        signInModal.style.display = 'none';
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    });

    signOutButton.addEventListener('click', function() {
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
    });

    // Chat bot functionality
    const chatBot = document.getElementById('chat-bot');
    const chatBotToggle = document.getElementById('chat-bot-toggle');
    const closeChatButton = document.querySelector('.close-chat');

    chatBotToggle.addEventListener('click', function() {
        chatBot.classList.toggle('hidden');
    });

    closeChatButton.addEventListener('click', function() {
        chatBot.classList.add('hidden');
    });
});
 