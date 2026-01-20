// Mock Products Database
const mockProducts = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '🎧',
    rating: 4.5,
    reviews: 2843,
    description: 'High-quality sound with noise cancellation',
    features: ['Noise Cancellation', 'Bluetooth 5.0', '30-hour Battery', 'Comfort Fit']
  },
  {
    id: 2,
    title: 'Stainless Steel Water Bottle',
    category: 'Sports',
    price: 24.99,
    originalPrice: 39.99,
    emoji: '💧',
    rating: 4.8,
    reviews: 5120,
    description: 'Keep your drink hot or cold for hours',
    features: ['Double-Walled Insulation', 'Leak-Proof', 'BPA-Free', 'Multiple Colors']
  },
  {
    id: 3,
    title: 'Wireless Mouse',
    category: 'Electronics',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '🖱️',
    rating: 4.3,
    reviews: 3421,
    description: 'Precision tracking wireless mouse',
    features: ['2.4GHz Wireless', 'Adjustable DPI', 'Ergonomic Design', '18-month Battery']
  },
  {
    id: 4,
    title: 'USB-C Charging Cable',
    category: 'Electronics',
    price: 9.99,
    originalPrice: 19.99,
    emoji: '🔌',
    rating: 4.6,
    reviews: 8932,
    description: 'Fast charging and data transfer',
    features: ['Fast Charging', '10 Gbps Data Transfer', 'Durable Nylon', '2-meter Length']
  },
  {
    id: 5,
    title: 'Yoga Mat',
    category: 'Sports',
    price: 29.99,
    originalPrice: 49.99,
    emoji: '🧘',
    rating: 4.7,
    reviews: 4521,
    description: 'Non-slip surface with carrying strap',
    features: ['6mm Thickness', 'Non-Slip Surface', 'Eco-Friendly', 'Carrying Strap']
  },
  {
    id: 6,
    title: 'LED Desk Lamp',
    category: 'Home',
    price: 34.99,
    originalPrice: 59.99,
    emoji: '💡',
    rating: 4.4,
    reviews: 2103,
    description: 'Adjustable brightness with USB charging',
    features: ['Dimmable LED', 'USB Charging Port', 'Flexible Neck', 'Eye-Care Technology']
  },
  {
    id: 7,
    title: 'Portable Phone Stand',
    category: 'Electronics',
    price: 14.99,
    originalPrice: 24.99,
    emoji: '📱',
    rating: 4.5,
    reviews: 6543,
    description: 'Universal mount for all phones',
    features: ['Universal Compatibility', 'Adjustable Angle', 'Aluminum Body', 'Portable']
  },
  {
    id: 8,
    title: 'Stainless Steel Cookware Set',
    category: 'Home',
    price: 79.99,
    originalPrice: 129.99,
    emoji: '🍳',
    rating: 4.6,
    reviews: 3214,
    description: '10-piece professional cooking set',
    features: ['10-Piece Set', 'Heat-Resistant Handles', 'Dishwasher Safe', 'Induction Compatible']
  },
  {
    id: 9,
    title: 'Running Shoes',
    category: 'Sports',
    price: 79.99,
    originalPrice: 129.99,
    emoji: '👟',
    rating: 4.7,
    reviews: 5432,
    description: 'Comfortable and durable running shoes',
    features: ['Memory Foam Insole', 'Breathable Mesh', 'Cushioned Heel', 'Lightweight']
  },
  {
    id: 10,
    title: 'Portable Power Bank',
    category: 'Electronics',
    price: 39.99,
    originalPrice: 69.99,
    emoji: '🔋',
    rating: 4.5,
    reviews: 7821,
    description: '20000mAh capacity with fast charging',
    features: ['20000mAh Capacity', 'Fast Charging', 'Dual USB Ports', 'LED Display']
  },
  {
    id: 11,
    title: 'Coffee Maker',
    category: 'Home',
    price: 44.99,
    originalPrice: 74.99,
    emoji: '☕',
    rating: 4.4,
    reviews: 2876,
    description: 'Automatic drip coffee maker',
    features: ['12-Cup Capacity', 'Programmable Timer', 'Thermal Carafe', 'Auto Shut-off']
  },
  {
    id: 12,
    title: 'Desk Organizer',
    category: 'Home',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '📦',
    rating: 4.3,
    reviews: 1543,
    description: 'Multi-compartment desk organizer',
    features: ['5 Compartments', 'Bamboo Material', 'Space-Saving', 'Easy Assembly']
  }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('search');
  const categoryFilter = document.getElementById('categoryFilter');

  if (!productGrid) return;

  // Populate category filter
  const categories = ['All categories', ...new Set(mockProducts.map(p => p.category))];
  categoryFilter.innerHTML = categories.map(cat => 
    `<option value="${cat === 'All categories' ? '' : cat}">${cat}</option>`
  ).join('');

  function renderProducts(products) {
    productGrid.innerHTML = products.map(product => {
      const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      return `
        <div class="product-card" onclick="goToProduct(${product.id})">
          <div class="product-image">${product.emoji}</div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-rating">⭐ ${product.rating} (${product.reviews.toLocaleString()} reviews)</div>
            <div class="product-price">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
              <span class="price-discount">${discount}% OFF</span>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
              <button class="btn btn-secondary" onclick="event.stopPropagation(); goToProduct(${product.id})">View</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = mockProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm) ||
                           product.description.toLowerCase().includes(searchTerm);
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
  }

  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);

  // Initial render
  renderProducts(mockProducts);
});

function goToProduct(productId) {
  window.location.href = `/product.html?id=${productId}`;
}

function addToCart(productId) {
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return;

  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      emoji: product.emoji,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Show feedback
  alert(`${product.title} added to cart!`);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartButton = document.querySelector('.cart-count');
  if (cartButton) {
    cartButton.textContent = totalItems;
  }
}

// Get product by ID
function getProductById(id) {
  return mockProducts.find(p => p.id === parseInt(id));
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
