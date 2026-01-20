// Shopping Cart
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart() {
  const cartContainer = document.getElementById('cartContainer');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Start shopping by visiting our <a href="/">home page</a></p>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  const cartItemsHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-image">${item.emoji}</div>
        <div class="cart-item-details">
          <h3>${item.title}</h3>
          <p>$${item.price.toFixed(2)} x ${item.quantity} = <strong>$${itemTotal.toFixed(2)}</strong></p>
          <div style="margin-top: 0.5rem;">
            <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span style="margin: 0 0.5rem;">${item.quantity}</span>
            <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="updateQuantity(${item.id}, 1)">+</button>
            <button class="btn btn-danger" style="padding: 0.5rem 1rem; font-size: 0.85rem; margin-left: 0.5rem;" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">
            $${itemTotal.toFixed(2)}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const tax = subtotal * 0.1;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  cartContainer.innerHTML = `
    <div class="cart-items">
      ${cartItemsHTML}
    </div>

    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (10%)</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
      </div>
      ${shipping > 0 ? '<p style="color: var(--text-light); font-size: 0.85rem;">Free shipping on orders over $50</p>' : '<p style="color: var(--success); font-size: 0.85rem;">✓ Qualified for free shipping</p>'}
      <div class="summary-row total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <button class="btn btn-primary btn-accent" style="width: 100%; padding: 1rem; font-size: 1rem; margin-top: 1rem;" onclick="checkout(${total})">
        ⚡ Proceed to Checkout
      </button>
      <button class="btn btn-secondary" style="width: 100%; padding: 1rem; margin-top: 0.5rem;" onclick="window.location.href='/'">
        ← Continue Shopping
      </button>
    </div>
  `;
}

function updateQuantity(productId, change) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const item = cart.find(item => item.id === productId);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function checkout(total) {
  if (!currentUser) {
    alert('Please login to checkout');
    window.location.href = '/account.html';
    return;
  }

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Create order
  const order = {
    id: 'ORD-' + Date.now(),
    date: new Date().toISOString(),
    items: cart,
    total: total,
    status: 'Pending',
    shippingAddress: 'Saved Address'
  };

  // Save order to user
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  
  if (userIndex !== -1) {
    if (!users[userIndex].orders) {
      users[userIndex].orders = [];
    }
    users[userIndex].orders.push(order);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update current user
    currentUser.orders = users[userIndex].orders;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  // Clear cart
  localStorage.removeItem('cart');
  updateCartCount();

  // Show success
  alert(`✓ Order placed successfully!\nOrder ID: ${order.id}\nTotal: $${total.toFixed(2)}\n\nYou will receive a confirmation email shortly.`);
  window.location.href = '/';
}
