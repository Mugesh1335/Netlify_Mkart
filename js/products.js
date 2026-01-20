// Mock Products Database
const mockProducts = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '🎧',
    color: '#ff6b6b',
    rating: 4.8,
    reviews: 2843,
    description: 'Premium noise cancellation with superior sound quality',
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '40-hour Battery', 'Comfort Fit']
  },
  {
    id: 2,
    title: 'Stainless Steel Water Bottle',
    category: 'Sports',
    price: 24.99,
    originalPrice: 39.99,
    emoji: '💧',
    color: '#4ecdc4',
    rating: 4.9,
    reviews: 5120,
    description: 'Keep your drink hot or cold for hours with style',
    features: ['Double-Walled Insulation', 'Leak-Proof', 'BPA-Free', '10 Colors Available']
  },
  {
    id: 3,
    title: 'Wireless Mouse Ultra',
    category: 'Electronics',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '🖱️',
    color: '#ffe66d',
    rating: 4.7,
    reviews: 3421,
    description: 'Ergonomic wireless mouse with precision tracking',
    features: ['2.4GHz Wireless', 'Adjustable DPI', 'Ergonomic Design', '24-month Battery']
  },
  {
    id: 4,
    title: 'USB-C Fast Charging Cable',
    category: 'Electronics',
    price: 9.99,
    originalPrice: 19.99,
    emoji: '🔌',
    color: '#a8e6cf',
    rating: 4.8,
    reviews: 8932,
    description: 'Ultra-fast charging and data transfer cable',
    features: ['Fast Charging 100W', '10 Gbps Data Transfer', 'Durable Nylon', '3-meter Length']
  },
  {
    id: 5,
    title: 'Premium Yoga Mat',
    category: 'Sports',
    price: 29.99,
    originalPrice: 49.99,
    emoji: '🧘',
    color: '#ff8cc3',
    rating: 4.9,
    reviews: 4521,
    description: 'Professional non-slip yoga mat with carrying strap',
    features: ['8mm Thickness', 'Non-Slip TPE Material', 'Eco-Friendly', 'Free Carrying Strap']
  },
  {
    id: 6,
    title: 'Smart LED Desk Lamp',
    category: 'Home',
    price: 34.99,
    originalPrice: 59.99,
    emoji: '💡',
    color: '#ffd93d',
    rating: 4.6,
    reviews: 2103,
    description: 'RGB smart lamp with USB charging and app control',
    features: ['RGB Color Control', 'USB Charging Port', 'Flexible Neck', 'Eye-Care Technology']
  },
  {
    id: 7,
    title: 'Phone Stand Magnetic',
    category: 'Electronics',
    price: 14.99,
    originalPrice: 24.99,
    emoji: '📱',
    color: '#f38181',
    rating: 4.8,
    reviews: 6543,
    description: 'Universal magnetic mount for all smartphones',
    features: ['Magnetic Grip', 'Adjustable Angle', 'Aluminum Body', 'Ultra Portable']
  },
  {
    id: 8,
    title: 'Stainless Steel Cookware Set',
    category: 'Home',
    price: 79.99,
    originalPrice: 129.99,
    emoji: '🍳',
    color: '#aa96da',
    rating: 4.7,
    reviews: 3214,
    description: '12-piece professional non-stick cookware set',
    features: ['12-Piece Set', 'Non-Stick Coating', 'Dishwasher Safe', 'Induction Compatible']
  },
  {
    id: 9,
    title: 'Professional Running Shoes',
    category: 'Sports',
    price: 79.99,
    originalPrice: 129.99,
    emoji: '👟',
    color: '#fcbad3',
    rating: 4.8,
    reviews: 5432,
    description: 'Advanced cushioning for maximum comfort',
    features: ['Memory Foam Insole', 'Breathable Mesh', 'Cushioned Heel', 'Lightweight']
  },
  {
    id: 10,
    title: 'Portable Power Bank 30000mAh',
    category: 'Electronics',
    price: 39.99,
    originalPrice: 69.99,
    emoji: '🔋',
    color: '#b5ead7',
    rating: 4.9,
    reviews: 7821,
    description: 'Ultra-fast charging power bank with dual USB',
    features: ['30000mAh Capacity', 'Super Fast Charging', 'Dual USB Ports', 'LED Display']
  },
  {
    id: 11,
    title: 'Premium Coffee Maker',
    category: 'Home',
    price: 44.99,
    originalPrice: 74.99,
    emoji: '☕',
    color: '#c7ceea',
    rating: 4.7,
    reviews: 2876,
    description: 'Automatic drip coffee maker with temperature control',
    features: ['15-Cup Capacity', 'Programmable Timer', 'Thermal Carafe', 'Auto Shut-off']
  },
  {
    id: 12,
    title: 'Modern Desk Organizer',
    category: 'Home',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '📦',
    color: '#ffdac1',
    rating: 4.8,
    reviews: 1543,
    description: '6-compartment bamboo desk organizer',
    features: ['6 Compartments', 'Bamboo Material', 'Space-Saving', 'Easy Assembly']
  },
  {
    id: 13,
    title: 'Wireless Bluetooth Speaker',
    category: 'Electronics',
    price: 49.99,
    originalPrice: 89.99,
    emoji: '🔊',
    color: '#a8d8ea',
    rating: 4.8,
    reviews: 4200,
    description: 'Portable speaker with 360° surround sound',
    features: ['360° Sound', 'Waterproof IPX7', '20-hour Battery', 'Built-in Microphone']
  },
  {
    id: 14,
    title: 'Smartwatch Pro',
    category: 'Electronics',
    price: 149.99,
    originalPrice: 249.99,
    emoji: '⌚',
    color: '#ffccff',
    rating: 4.7,
    reviews: 3450,
    description: 'Advanced fitness tracking smartwatch',
    features: ['Heart Rate Monitor', 'Sleep Tracking', '14-day Battery', 'Water Resistant']
  },
  {
    id: 15,
    title: 'Portable Projector HD',
    category: 'Electronics',
    price: 199.99,
    originalPrice: 349.99,
    emoji: '🎬',
    color: '#e0aaff',
    rating: 4.6,
    reviews: 2100,
    description: '1080P portable projector for home theater',
    features: ['1080P Resolution', '2000 Lumens', 'Built-in Speaker', 'HDMI & WiFi']
  },
  {
    id: 16,
    title: 'Gaming Mouse RGB',
    category: 'Electronics',
    price: 59.99,
    originalPrice: 99.99,
    emoji: '🖱️',
    color: '#ffb3ba',
    rating: 4.9,
    reviews: 6234,
    description: 'Professional gaming mouse with RGB lighting',
    features: ['16,000 DPI', 'RGB Lighting', '8 Programmable Buttons', 'Ultra Light']
  },
  {
    id: 17,
    title: 'USB Hub 7-Port',
    category: 'Electronics',
    price: 29.99,
    originalPrice: 49.99,
    emoji: '🔗',
    color: '#ffffcc',
    rating: 4.5,
    reviews: 2987,
    description: 'Multi-port USB hub with fast charging',
    features: ['7 USB Ports', 'Fast Charging', 'LED Indicators', 'Aluminum Build']
  },
  {
    id: 18,
    title: 'Fitness Tracker Band',
    category: 'Sports',
    price: 34.99,
    originalPrice: 59.99,
    emoji: '⛹️',
    color: '#ffcccc',
    rating: 4.7,
    reviews: 3876,
    description: 'Advanced fitness tracker with multiple sport modes',
    features: ['Steps Counter', 'Calorie Tracker', '10-day Battery', 'Waterproof']
  },
  {
    id: 19,
    title: 'Portable Phone Charger Fast',
    category: 'Electronics',
    price: 24.99,
    originalPrice: 44.99,
    emoji: '⚡',
    color: '#ffcccc',
    rating: 4.8,
    reviews: 5432,
    description: 'Ultra-compact fast charging power adapter',
    features: ['65W Fast Charging', 'Dual USB-C Ports', 'Foldable Plug', 'Travel Friendly']
  },
  {
    id: 20,
    title: 'Mechanical Keyboard RGB',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '⌨️',
    color: '#ffccee',
    rating: 4.9,
    reviews: 4567,
    description: 'Professional mechanical gaming keyboard',
    features: ['RGB Switches', 'Programmable Keys', 'Aluminum Frame', 'USB-C Connection']
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
          <div class="product-image" style="background: linear-gradient(135deg, ${product.color}22 0%, ${product.color}44 100%);">
            <span style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">${product.emoji}</span>
          </div>
          <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-rating">${product.rating} (${product.reviews.toLocaleString()})</div>
            <div class="product-price">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
              <span class="price-discount">${discount}%</span>
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
