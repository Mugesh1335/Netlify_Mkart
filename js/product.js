// Product Detail Page
document.addEventListener('DOMContentLoaded', () => {
  const productMain = document.getElementById('productMain');
  if (!productMain) return;

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  // Get product from products.js
  const product = mockProducts.find(p => p.id === productId);

  if (!product) {
    productMain.innerHTML = `
      <div class="alert alert-error">
        <h2>Product not found</h2>
        <p><a href="/">← Back to Home</a></p>
      </div>
    `;
    return;
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  productMain.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <a href="/" class="btn btn-secondary" style="display: inline-block;">← Back to Home</a>
    </div>

    <div class="product-detail">
      <div class="product-detail-image" style="background: linear-gradient(135deg, ${product.color}33 0%, ${product.color}55 100%);">
        <span style="font-size: 5rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));">${product.emoji}</span>
      </div>
      
      <div class="product-detail-info">
        <h1>${product.title}</h1>
        
        <div class="detail-rating">
          ⭐ ${product.rating} stars (${product.reviews.toLocaleString()} reviews)
        </div>

        <div class="detail-price">
          <span class="price-current">$${product.price.toFixed(2)}</span>
          <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
          <span class="price-discount" style="background: linear-gradient(135deg, #e63946, #d62828);">${discount}% OFF</span>
        </div>

        <div class="availability in-stock">
          ✓ In Stock - Free Shipping Available
        </div>

        <p class="detail-description">${product.description}</p>

        <div class="detail-features">
          <h3>✨ Key Features:</h3>
          <ul>
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>

        <div class="detail-quantity">
          <label>Quantity:</label>
          <div class="quantity-control">
            <button onclick="decreaseQty()">−</button>
            <input type="number" id="quantityInput" value="1" min="1" max="10">
            <button onclick="increaseQty()">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn btn-primary btn-accent" onclick="addProductToCart(${product.id})" style="background: linear-gradient(135deg, var(--accent), #ff8c42);">
            🛒 Add to Cart
          </button>
          <button class="btn btn-secondary" onclick="buyNow(${product.id})">
            ⚡ Buy Now
          </button>
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #f0f7ff 0%, #e0f2ff 100%); border-radius: 8px; border-left: 4px solid var(--primary);">
          <h3 style="color: var(--primary); margin-bottom: 0.75rem;">📦 Why Choose Us?</h3>
          <p>✓ Free shipping on orders over $50</p>
          <p>✓ 30-day money-back guarantee</p>
          <p>✓ Secure checkout with SSL encryption</p>
          <p>✓ 24/7 customer support</p>
        </div>
      </div>
    </div>
  `;
});

function increaseQty() {
  const input = document.getElementById('quantityInput');
  if (input && parseInt(input.value) < 10) {
    input.value = parseInt(input.value) + 1;
  }
}

function decreaseQty() {
  const input = document.getElementById('quantityInput');
  if (input && parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function addProductToCart(productId) {
  const quantity = parseInt(document.getElementById('quantityInput').value);
  const product = mockProducts.find(p => p.id === productId);

  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      emoji: product.emoji,
      quantity: quantity
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`Added ${quantity} item(s) to cart!`);
}

function buyNow(productId) {
  addProductToCart(productId);
  window.location.href = '/cart.html';
}
