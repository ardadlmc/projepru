const products = [
    { 
        id: 1, 
        name: "MECHANICAL KEYBOARD V1", 
        price: 159, 
        category: "keyboard", 
        img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800" 
    },
    { 
        id: 2, 
        name: "MINIMAL OPTICAL MOUSE", 
        price: 89, 
        category: "mouse", 
        img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800" 
    },
    { 
        id: 3, 
        name: "STUDIO HEADPHONES", 
        price: 210, 
        category: "audio", 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800" 
    },
    { 
        id: 4, 
        name: "OVERSIZED DESK MAT", 
        price: 45, 
        category: "acc", 
        img: "https://images.unsplash.com/photo-1616412411311-5943a5aa9384?q=80&w=800" 
    }
];

let cart = [];

// Navigation switching
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId + '-page').style.display = 'block';
    window.scrollTo(0, 0);
}

// Display products
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <div class="card-info">
                <p>${p.name}</p>
                <p>${p.price} USD</p>
                <span class="add-to-cart" onclick="addToCart(${p.id})">ADD TO CART</span>
            </div>
        </div>
    `).join('');
}

// Cart logic
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartList = document.getElementById('cart-items');
    let total = 0;
    
    cartList.innerHTML = cart.map((item) => {
        total += item.price;
        return `<div style="margin-bottom:20px; font-size:11px; display:flex; justify-content:space-between; border-bottom: 1px solid #f2f2f2; padding-bottom: 10px;">
                    <span>${item.name}</span>
                    <span>${item.price} USD</span>
                </div>`;
    }).join('');
    
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cart-sidebar');
    if (forceOpen) sidebar.classList.add('active');
    else sidebar.classList.toggle('active');
}

// Checkout and reset
function processCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    
    const finalTotal = document.getElementById('cart-total').innerText;
    alert("ORDER CONFIRMED.\nTOTAL: " + finalTotal + " USD\nThank you for shopping with NovaTech.");
    
    cart = [];
    updateCartUI();
    toggleCart();
    showPage('home');
}

// Category filter
function filterItems(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Start on load
renderProducts(products);
