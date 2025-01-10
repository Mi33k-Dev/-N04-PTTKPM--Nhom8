document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.open-cart-btn');
    const closeBtn = document.querySelector('.close-cart-btn');
    const cartOverlay = document.querySelector('.cart-overlay');

    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartOverlay.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', function() {
        cartOverlay.classList.add('hidden');
    });
});