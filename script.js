let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function getImageById(id) {
    switch (id) {
        case 1:
            return 'image.png';
        case 2:
            return 'banana.jpeg';
        // 다른 id에 대한 이미지를 추가할 수 있습니다.
        default:
            return 'default-image.jpg';
    }
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'list-group-item cart-item';
        cartItem.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${getImageById(item.id)}" alt="${item.name}" class="img-thumbnail" style="max-width: 50px; margin-right: 10px;">
                <span>${item.name}</span>
            </div>
            <span>$${item.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}
