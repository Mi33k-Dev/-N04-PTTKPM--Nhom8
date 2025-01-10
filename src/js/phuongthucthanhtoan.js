document.addEventListener('DOMContentLoaded', function() {
    // Load cart and shipping info
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};
    
    // Display cart items and update totals
    displayCartItems(cart);
    updateTotals(cart);

    // Handle order completion
    document.getElementById('complete-order').addEventListener('click', function() {
        const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

        const orderData = {
            cart,
            shippingInfo,
            shippingMethod,
            paymentMethod
        };

        // Save order and redirect to confirmation page
        localStorage.setItem('orderData', JSON.stringify(orderData));
        window.location.href = 'confirmation.html';
    });
    document.getElementById('complete-order').addEventListener('click', function() {
        // Show success popup
        document.getElementById('success-popup').classList.remove('hidden');
    });
    
    function closePopup() {
        document.getElementById('success-popup').classList.add('hidden');
        // Redirect to homepage after closing popup
        window.location.href = 'index.html';
    }
});