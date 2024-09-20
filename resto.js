let cart = [];

function addToCart(restaurant, item, price) {
    cart.push({ restaurant, item, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in cart</p>';
    } else {
        let total = 0;
        cart.forEach((order, index) => {
            const orderDiv = document.createElement('div');
            orderDiv.innerHTML = `<p>${order.restaurant}: ${order.item} - $${order.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
            cartDiv.appendChild(orderDiv);
            total += order.price;
        });
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
        cartDiv.appendChild(totalDiv);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order placed successfully!');
        cart = [];
        displayCart();
    }
}
