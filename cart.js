let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart-icon i');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const li = this.closest('li');
        const quantityInput = li.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value) || 1;
        cartCount += quantity;
        cartCountElement.textContent = cartCount;

        // Animação no ícone
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);

        // Alert opcional
        alert(`Adicionado ${quantity} item(s) ao carrinho!`);
    });
});