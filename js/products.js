// Mock Products Database
const mockProducts = [
  // Electronics - Accessories
  {
    id: 1,
    title: 'Premium Wireless Headphones Pro',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '🎧',
    color: '#ff6b6b',
    rating: 4.8,
    reviews: 2843,
    description: 'Premium noise cancellation with superior sound quality and 40-hour battery',
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '40-hour Battery', 'Comfort Fit', 'Premium Sound']
  },
  {
    id: 2,
    title: 'Wireless Mouse Ultra',
    category: 'Electronics',
    subcategory: 'Peripherals',
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
    id: 3,
    title: 'USB-C Fast Charging Cable',
    category: 'Electronics',
    subcategory: 'Cables',
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
    id: 4,
    title: 'Phone Stand Magnetic',
    category: 'Electronics',
    subcategory: 'Phone Accessories',
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
    id: 5,
    title: 'Portable Power Bank 30000mAh',
    category: 'Electronics',
    subcategory: 'Power',
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
    id: 6,
    title: 'Wireless Bluetooth Speaker',
    category: 'Electronics',
    subcategory: 'Audio',
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
    id: 7,
    title: 'Smartwatch Pro',
    category: 'Electronics',
    subcategory: 'Wearables',
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
    id: 8,
    title: 'Portable Projector HD',
    category: 'Electronics',
    subcategory: 'Home Entertainment',
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
    id: 9,
    title: 'Gaming Mouse RGB',
    category: 'Electronics',
    subcategory: 'Gaming',
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
    id: 10,
    title: 'USB Hub 7-Port',
    category: 'Electronics',
    subcategory: 'Peripherals',
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
    id: 11,
    title: 'Mechanical Keyboard RGB',
    category: 'Electronics',
    subcategory: 'Gaming',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '⌨️',
    color: '#ffccee',
    rating: 4.9,
    reviews: 4567,
    description: 'Professional mechanical gaming keyboard',
    features: ['RGB Switches', 'Programmable Keys', 'Aluminum Frame', 'USB-C Connection']
  },
  {
    id: 12,
    title: 'Portable Phone Charger',
    category: 'Electronics',
    subcategory: 'Power',
    price: 24.99,
    originalPrice: 44.99,
    emoji: '⚡',
    color: '#ffcccc',
    rating: 4.8,
    reviews: 5432,
    description: 'Ultra-compact fast charging power adapter',
    features: ['65W Fast Charging', 'Dual USB-C Ports', 'Foldable Plug', 'Travel Friendly']
  },

  // Clothing & Fashion
  {
    id: 13,
    title: 'Premium Cotton T-Shirt',
    category: 'Clothing',
    subcategory: 'Men',
    price: 19.99,
    originalPrice: 39.99,
    emoji: '👕',
    color: '#ff6b6b',
    rating: 4.7,
    reviews: 3456,
    description: '100% organic cotton comfortable t-shirt',
    features: ['100% Organic Cotton', 'Breathable', 'Machine Washable', '5 Colors Available']
  },
  {
    id: 14,
    title: 'Designer Jeans',
    category: 'Clothing',
    subcategory: 'Men',
    price: 59.99,
    originalPrice: 99.99,
    emoji: '👖',
    color: '#4ecdc4',
    rating: 4.8,
    reviews: 2345,
    description: 'Stylish and comfortable premium denim jeans',
    features: ['Premium Denim', 'Comfortable Fit', 'Fading Resistant', 'Size XS-XXL']
  },
  {
    id: 15,
    title: 'Casual Hoodie',
    category: 'Clothing',
    subcategory: 'Men',
    price: 34.99,
    originalPrice: 64.99,
    emoji: '🧥',
    color: '#ffe66d',
    rating: 4.6,
    reviews: 2876,
    description: 'Warm and cozy hoodie for all seasons',
    features: ['Soft Fleece', 'Drawstring Hood', 'Kangaroo Pockets', 'Easy Care']
  },
  {
    id: 16,
    title: 'Women\'s Summer Dress',
    category: 'Clothing',
    subcategory: 'Women',
    price: 44.99,
    originalPrice: 79.99,
    emoji: '👗',
    color: '#a8e6cf',
    rating: 4.8,
    reviews: 4123,
    description: 'Elegant and breathable summer dress',
    features: ['Light Fabric', 'UV Protection', 'Casual Chic Style', 'Pockets Included']
  },
  {
    id: 17,
    title: 'Sports Leggings',
    category: 'Clothing',
    subcategory: 'Women',
    price: 39.99,
    originalPrice: 69.99,
    emoji: '🩳',
    color: '#ff8cc3',
    rating: 4.9,
    reviews: 5234,
    description: 'High-waist sports leggings with compression',
    features: ['High Waist', 'Compression Fit', 'Moisture Wicking', 'Breathable']
  },
  {
    id: 18,
    title: 'Casual Shorts',
    category: 'Clothing',
    subcategory: 'Men',
    price: 24.99,
    originalPrice: 44.99,
    emoji: '🩱',
    color: '#ffd93d',
    rating: 4.5,
    reviews: 1876,
    description: 'Comfortable shorts perfect for warm weather',
    features: ['Quick Dry', 'Comfortable Fit', 'Multiple Pockets', 'Lightweight']
  },
  {
    id: 19,
    title: 'Formal Blazer',
    category: 'Clothing',
    subcategory: 'Men',
    price: 79.99,
    originalPrice: 139.99,
    emoji: '🧑‍💼',
    color: '#aa96da',
    rating: 4.7,
    reviews: 1567,
    description: 'Premium formal blazer for business',
    features: ['Premium Wool', 'Perfect Fit', 'Professional Look', 'Easy Care']
  },
  {
    id: 20,
    title: 'Winter Jacket',
    category: 'Clothing',
    subcategory: 'Men',
    price: 99.99,
    originalPrice: 179.99,
    emoji: '🧑‍🎤',
    color: '#b5ead7',
    rating: 4.8,
    reviews: 2654,
    description: 'Warm waterproof winter jacket',
    features: ['Waterproof', 'Insulated', 'Multiple Pockets', '3 Colors']
  },

  // Sports & Fitness
  {
    id: 21,
    title: 'Stainless Steel Water Bottle',
    category: 'Sports',
    subcategory: 'Hydration',
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
    id: 22,
    title: 'Premium Yoga Mat',
    category: 'Sports',
    subcategory: 'Fitness',
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
    id: 23,
    title: 'Professional Running Shoes',
    category: 'Sports',
    subcategory: 'Footwear',
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
    id: 24,
    title: 'Fitness Tracker Band',
    category: 'Sports',
    subcategory: 'Wearables',
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
    id: 25,
    title: 'Dumbbell Set 20kg',
    category: 'Sports',
    subcategory: 'Equipment',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '🏋️',
    color: '#f38181',
    rating: 4.8,
    reviews: 2143,
    description: 'Professional strength training dumbbell set',
    features: ['20kg Total Weight', 'Chrome Plated', 'Non-Slip Grip', 'Space Saving']
  },
  {
    id: 26,
    title: 'Resistance Bands Set',
    category: 'Sports',
    subcategory: 'Equipment',
    price: 19.99,
    originalPrice: 39.99,
    emoji: '💪',
    color: '#a8e6cf',
    rating: 4.6,
    reviews: 2654,
    description: 'Set of 5 resistance bands for training',
    features: ['5 Resistance Levels', 'Eco-Friendly Latex', 'Portable', 'Exercise Guide']
  },
  {
    id: 27,
    title: 'Soccer Ball Premium',
    category: 'Sports',
    subcategory: 'Equipment',
    price: 29.99,
    originalPrice: 49.99,
    emoji: '⚽',
    color: '#ffe66d',
    rating: 4.7,
    reviews: 1987,
    description: 'Professional quality soccer ball',
    features: ['Official Size', 'Durable Leather', 'Consistent Bounce', 'Great Grip']
  },
  {
    id: 28,
    title: 'Basketball',
    category: 'Sports',
    subcategory: 'Equipment',
    price: 34.99,
    originalPrice: 59.99,
    emoji: '🏀',
    color: '#ffd93d',
    rating: 4.6,
    reviews: 1654,
    description: 'Professional grade basketball',
    features: ['Official Size', 'Rubber Compound', 'Great Grip', 'Indoor/Outdoor']
  },

  // Home & Kitchen
  {
    id: 29,
    title: 'Smart LED Desk Lamp',
    category: 'Home',
    subcategory: 'Lighting',
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
    id: 30,
    title: 'Stainless Steel Cookware Set',
    category: 'Home',
    subcategory: 'Kitchen',
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
    id: 31,
    title: 'Premium Coffee Maker',
    category: 'Home',
    subcategory: 'Kitchen',
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
    id: 32,
    title: 'Modern Desk Organizer',
    category: 'Home',
    subcategory: 'Organization',
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
    id: 33,
    title: 'Air Purifier',
    category: 'Home',
    subcategory: 'Climate',
    price: 99.99,
    originalPrice: 179.99,
    emoji: '🌬️',
    color: '#e0aaff',
    rating: 4.9,
    reviews: 4567,
    description: 'HEPA air purifier for clean home air',
    features: ['HEPA Filter', 'Smart App Control', 'Whisper Quiet', '300 sq ft Coverage']
  },
  {
    id: 34,
    title: 'Bedding Sheet Set',
    category: 'Home',
    subcategory: 'Bedding',
    price: 49.99,
    originalPrice: 89.99,
    emoji: '🛏️',
    color: '#ffccff',
    rating: 4.8,
    reviews: 3456,
    description: 'Premium cotton bedding set 4-piece',
    features: ['100% Egyptian Cotton', 'Soft & Durable', 'Easy Care', 'Queen Size']
  },
  {
    id: 35,
    title: 'Smart WiFi Thermostat',
    category: 'Home',
    subcategory: 'Smart Home',
    price: 129.99,
    originalPrice: 199.99,
    emoji: '🌡️',
    color: '#b5ead7',
    rating: 4.7,
    reviews: 2876,
    description: 'WiFi enabled smart thermostat control',
    features: ['App Control', 'Voice Control', 'Energy Saving', 'Easy Installation']
  },
  {
    id: 36,
    title: 'Microwave Oven',
    category: 'Home',
    subcategory: 'Kitchen',
    price: 89.99,
    originalPrice: 149.99,
    emoji: '🔥',
    color: '#ff8cc3',
    rating: 4.6,
    reviews: 1876,
    description: 'Digital microwave with multiple settings',
    features: ['1100W Power', 'Digital Control', '10 Power Levels', 'Safety Lock']
  },
  {
    id: 37,
    title: 'Vacuum Cleaner',
    category: 'Home',
    subcategory: 'Cleaning',
    price: 149.99,
    originalPrice: 249.99,
    emoji: '🧹',
    color: '#a8d8ea',
    rating: 4.7,
    reviews: 2543,
    description: 'Powerful cordless vacuum cleaner',
    features: ['60-minute Runtime', 'HEPA Filter', 'Cordless', 'Lightweight Design']
  },

  // Toys & Games
  {
    id: 38,
    title: 'Building Blocks Set 500pcs',
    category: 'Toys',
    subcategory: 'Building',
    price: 29.99,
    originalPrice: 49.99,
    emoji: '🧱',
    color: '#ff6b6b',
    rating: 4.8,
    reviews: 2345,
    description: 'Colorful and safe building blocks for kids',
    features: ['500 Pieces', 'Safe & Non-Toxic', 'Multiple Colors', 'Storage Box']
  },
  {
    id: 39,
    title: 'Remote Control Car',
    category: 'Toys',
    subcategory: 'RC',
    price: 39.99,
    originalPrice: 69.99,
    emoji: '🚗',
    color: '#4ecdc4',
    rating: 4.7,
    reviews: 3123,
    description: 'High-speed remote control racing car',
    features: ['4WD Drive', '25km/h Speed', '15-minute Battery', 'All Terrain']
  },
  {
    id: 40,
    title: 'Puzzle Game 1000pcs',
    category: 'Toys',
    subcategory: 'Puzzles',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '🧩',
    color: '#ffe66d',
    rating: 4.9,
    reviews: 2876,
    description: 'Educational 1000 piece puzzle game',
    features: ['1000 Pieces', 'Eco-Friendly', 'Smooth Edges', 'Storage Box']
  },
  {
    id: 41,
    title: 'Action Figures 5-Pack',
    category: 'Toys',
    subcategory: 'Figures',
    price: 24.99,
    originalPrice: 44.99,
    emoji: '🦸',
    color: '#a8e6cf',
    rating: 4.6,
    reviews: 1987,
    description: 'Popular action figures collection pack',
    features: ['5 Unique Figures', 'Articulated Joints', 'Collectible', 'Ages 4+']
  },
  {
    id: 42,
    title: 'Drone with Camera',
    category: 'Toys',
    subcategory: 'Drones',
    price: 149.99,
    originalPrice: 249.99,
    emoji: '🛸',
    color: '#ff8cc3',
    rating: 4.8,
    reviews: 4321,
    description: '4K drone with stabilized camera',
    features: ['4K Camera', '30-minute Flight', 'GPS Tracking', 'App Control']
  },
  {
    id: 43,
    title: 'Board Game Collection',
    category: 'Toys',
    subcategory: 'Games',
    price: 34.99,
    originalPrice: 59.99,
    emoji: '🎲',
    color: '#ffd93d',
    rating: 4.7,
    reviews: 1654,
    description: 'Classic board games collection',
    features: ['5 Different Games', 'Family Fun', 'Ages 6+', 'Complete Set']
  },
  {
    id: 44,
    title: 'Kids Scooter',
    category: 'Toys',
    subcategory: 'Outdoor',
    price: 49.99,
    originalPrice: 89.99,
    emoji: '🛴',
    color: '#ffb3ba',
    rating: 4.8,
    reviews: 2345,
    description: 'Safe and fun kids scooter',
    features: ['3-Wheel Design', 'LED Lights', 'Adjustable Height', 'Weight Limit 50kg']
  },

  // Beauty & Personal Care
  {
    id: 45,
    title: 'Skincare Routine Set',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 39.99,
    originalPrice: 69.99,
    emoji: '💆',
    color: '#ffd93d',
    rating: 4.7,
    reviews: 3456,
    description: 'Complete skincare 5-piece routine set',
    features: ['5 Products', 'Natural Ingredients', 'All Skin Types', 'Dermatologist Tested']
  },
  {
    id: 46,
    title: 'Electric Toothbrush',
    category: 'Beauty',
    subcategory: 'Oral Care',
    price: 34.99,
    originalPrice: 64.99,
    emoji: '🪥',
    color: '#f38181',
    rating: 4.8,
    reviews: 2876,
    description: 'Sonic electric toothbrush with smart features',
    features: ['Smart Timer', 'Pressure Sensor', '30-day Battery', 'Travel Case']
  },
  {
    id: 47,
    title: 'Hair Dryer Professional',
    category: 'Beauty',
    subcategory: 'Hair Care',
    price: 54.99,
    originalPrice: 99.99,
    emoji: '💇',
    color: '#aa96da',
    rating: 4.6,
    reviews: 2134,
    description: 'Professional ionic hair dryer',
    features: ['Ionic Technology', '3 Heat Settings', 'Cold Shot', 'Lightweight']
  },
  {
    id: 48,
    title: 'Nail Care Kit',
    category: 'Beauty',
    subcategory: 'Nail Care',
    price: 19.99,
    originalPrice: 34.99,
    emoji: '💅',
    color: '#ffcccc',
    rating: 4.5,
    reviews: 1654,
    description: '15-piece complete nail care kit',
    features: ['15 Tools', 'Stainless Steel', 'Travel Pouch', 'Professional Grade']
  },
  {
    id: 49,
    title: 'Face Massage Device',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 44.99,
    originalPrice: 79.99,
    emoji: '💆‍♀️',
    color: '#e0aaff',
    rating: 4.8,
    reviews: 2987,
    description: 'Electric face massage roller',
    features: ['Ionic Technology', 'Red Light Therapy', 'USB Rechargeable', 'Travel Friendly']
  },
  {
    id: 50,
    title: 'Perfume Gift Set',
    category: 'Beauty',
    subcategory: 'Fragrance',
    price: 59.99,
    originalPrice: 99.99,
    emoji: '💐',
    color: '#ffb3ba',
    rating: 4.9,
    reviews: 3234,
    description: 'Luxury perfume collection 3-piece set',
    features: ['3 Premium Scents', 'Long Lasting', 'Gift Box', 'Unisex Fragrances']
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
