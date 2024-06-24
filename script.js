// JavaScript for carousel control
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.carousel-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Initial call to start carousel

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

// Function to add items to cart
function addToCart(productName) {
    // Replace with actual cart handling logic (e.g., update UI, store in localStorage, etc.)
    alert(`${productName} added to cart!`);
}

// Function to show more info about a product
function moreInfo(productName) {
    // Replace with modal or detailed view logic (e.g., show modal dialog with product details)
    alert(`More info about ${productName}`);
}
