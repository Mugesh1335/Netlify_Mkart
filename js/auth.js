// Auth Management
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

document.addEventListener('DOMContentLoaded', () => {
  const authSection = document.getElementById('authSection');
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');

  if (authTabs.length > 0) {
    // Tab switching
    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const formId = tab.dataset.form;
        
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(formId).classList.add('active');
      });
    });
  }

  // Auth form handlers
  const signupBtn = document.getElementById('signupBtn');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (signupBtn) {
    signupBtn.addEventListener('click', signup);
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', login);
  }
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }

  updateAuthUI();
  loadOrders();
});

function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  // Check if user already exists
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.email === email)) {
    alert('Email already exists');
    return;
  }

  // Create new user
  const user = {
    id: Date.now().toString(),
    email,
    password, // Note: In production, NEVER store plain passwords
    createdAt: new Date().toISOString(),
    orders: []
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Auto-login
  currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  alert('Account created successfully!');
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  updateAuthUI();
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert('Invalid email or password');
    return;
  }

  currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  updateAuthUI();
  loadOrders();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  document.getElementById('ordersList').innerHTML = 'Please login to view your orders.';
}

function updateAuthUI() {
  const authForms = document.getElementById('authForms');
  const userInfo = document.getElementById('userInfo');
  const userEmail = document.getElementById('userEmail');

  if (currentUser && authForms) {
    authForms.style.display = 'none';
    userInfo.style.display = 'block';
    if (userEmail) {
      userEmail.textContent = currentUser.email;
    }
  } else if (authForms) {
    authForms.style.display = 'block';
    if (userInfo) {
      userInfo.style.display = 'none';
    }
  }
}

function loadOrders() {
  const ordersList = document.getElementById('ordersList');
  if (!ordersList) return;

  if (!currentUser) {
    ordersList.innerHTML = 'Please login to view your orders.';
    return;
  }

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === currentUser.id);

  if (!user || !user.orders || user.orders.length === 0) {
    ordersList.innerHTML = '<p style="color: var(--text-light);">No orders yet. <a href="/">Start shopping!</a></p>';
    return;
  }

  ordersList.innerHTML = user.orders.map(order => `
    <div class="order-card">
      <div class="order-header">
        <div>
          <div class="order-id">Order #${order.id}</div>
          <small>${new Date(order.date).toLocaleDateString()}</small>
        </div>
        <div class="order-status ${order.status.toLowerCase()}">${order.status}</div>
      </div>
      <div class="order-items">
        <strong>${order.items.length} item(s)</strong>
        <p>${order.items.map(item => `${item.quantity}x ${item.title}`).join(', ')}</p>
      </div>
      <div class="order-total">Total: $${order.total.toFixed(2)}</div>
    </div>
  `).join('');
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
