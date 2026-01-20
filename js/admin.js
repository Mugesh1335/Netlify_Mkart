// Admin Panel Management
let adminProducts = mockProducts;

document.addEventListener('DOMContentLoaded', () => {
  const adminTabs = document.querySelectorAll('.admin-tab');
  const adminContents = document.querySelectorAll('.admin-content');

  // Tab switching
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      
      adminTabs.forEach(t => t.classList.remove('active'));
      adminContents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(tabName).classList.add('active');

      if (tabName === 'dashboard') {
        loadDashboard();
      } else if (tabName === 'products') {
        loadProducts();
      } else if (tabName === 'orders') {
        loadAllOrders();
      }
    });
  });

  loadDashboard();
});

function loadDashboard() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  let totalOrders = 0;
  let totalRevenue = 0;

  users.forEach(user => {
    if (user.orders) {
      totalOrders += user.orders.length;
      user.orders.forEach(order => {
        totalRevenue += order.total;
      });
    }
  });

  document.getElementById('totalProducts').textContent = adminProducts.length;
  document.getElementById('totalOrders').textContent = totalOrders;
  document.getElementById('totalUsers').textContent = users.length;
  document.getElementById('totalRevenue').textContent = '$' + totalRevenue.toFixed(2);
}

function loadProducts() {
  const list = document.getElementById('productsList');

  list.innerHTML = adminProducts.map(product => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return `
      <div class="admin-product-card">
        <div class="admin-product-image">${product.emoji}</div>
        <div class="admin-product-details">
          <h3>${product.title}</h3>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price.toFixed(2)} <span style="text-decoration: line-through;">$${product.originalPrice.toFixed(2)}</span></p>
          <p><strong>Discount:</strong> ${discount}% | <strong>Stock:</strong> In Stock</p>
        </div>
        <div class="admin-actions">
          <button class="btn btn-secondary" onclick="editProduct(${product.id})">Edit</button>
          <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

function addNewProduct() {
  const name = document.getElementById('productName').value;
  const category = document.getElementById('productCategory').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const originalPrice = parseFloat(document.getElementById('productOriginalPrice').value);
  const description = document.getElementById('productDescription').value;

  if (!name || !category || !price || !originalPrice) {
    alert('Please fill in all fields');
    return;
  }

  const newProduct = {
    id: adminProducts.length + 1,
    title: name,
    category: category,
    price: price,
    originalPrice: originalPrice,
    emoji: '📦',
    rating: 0,
    reviews: 0,
    description: description,
    features: []
  };

  adminProducts.push(newProduct);

  // Clear form
  document.getElementById('productName').value = '';
  document.getElementById('productCategory').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productOriginalPrice').value = '';
  document.getElementById('productDescription').value = '';

  alert('Product added successfully!');
  loadProducts();
}

function editProduct(productId) {
  const product = adminProducts.find(p => p.id === productId);
  if (!product) return;

  const newName = prompt('Product name:', product.title);
  if (newName) {
    product.title = newName;
    alert('Product updated!');
    loadProducts();
  }
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    adminProducts = adminProducts.filter(p => p.id !== productId);
    alert('Product deleted!');
    loadProducts();
  }
}

function loadAllOrders() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const ordersList = document.getElementById('ordersList');
  let allOrders = [];

  users.forEach(user => {
    if (user.orders) {
      user.orders.forEach(order => {
        allOrders.push({
          ...order,
          userEmail: user.email
        });
      });
    }
  });

  if (allOrders.length === 0) {
    ordersList.innerHTML = '<p style="color: var(--text-light);">No orders yet.</p>';
    return;
  }

  ordersList.innerHTML = allOrders.map(order => `
    <div class="admin-product-card">
      <div class="admin-product-details">
        <h3>Order #${order.id}</h3>
        <p><strong>Customer:</strong> ${order.userEmail}</p>
        <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
        <p><strong>Items:</strong> ${order.items.map(item => `${item.quantity}x ${item.title}`).join(', ')}</p>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
      </div>
      <div class="admin-actions">
        <select onchange="updateOrderStatus('${order.id}', '${order.userEmail}', this.value)" style="padding: 0.5rem;">
          <option value="${order.status}">${order.status}</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>
  `).join('');
}

function updateOrderStatus(orderId, userEmail, newStatus) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === userEmail);

  if (user && user.orders) {
    const order = user.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Order status updated!');
      loadAllOrders();
    }
  }
}
