// script.js

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Service selection functionality
const services = document.querySelectorAll('.service');
const cart = [];

services.forEach(service => {
    service.addEventListener('click', () => {
        const serviceId = service.getAttribute('data-id');
        if (!cart.includes(serviceId)) {
            cart.push(serviceId);
            updateCart();
        }
    });
});

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = cart.length > 0 ? `Cart: ${cart.length} items` : 'Cart is empty';
}

// Cart management functionality
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout with items: ' + cart.join(', '));
    } else {
        alert('Your cart is empty.');
    }
});
