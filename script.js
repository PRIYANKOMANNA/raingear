document.addEventListener('DOMContentLoaded', () => {
    // Sign-In and Sign-Out buttons
    const signInButton = document.querySelector('.sign-in');
    const signOutButton = document.querySelector('.sign-out');
    const signInModal = document.getElementById('sign-in-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const signInModalButton = document.getElementById('sign-in-button');

    signInButton.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    signInModalButton.addEventListener('click', () => {
        // Here, add your logic to handle sign-in
        alert('Sign-In logic goes here');
        signInModal.style.display = 'none';
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        // Here, add your logic to handle sign-out
        alert('Sign-Out logic goes here');
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
});
