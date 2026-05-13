const products = [
    { id: 1, name: "ULTRA KEYBOARD", price: 159, category: "keyboard", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800" },
    { id: 2, name: "MINIMAL MOUSE", price: 89, category: "mouse", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800" },
    { id: 3, name: "TECH HEADSET", price: 210, category: "audio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
    { id: 4, name: "DESK PAD BLACK", price: 45, category: "acc", img: "https://images.unsplash.com/photo-1616412411311-5943a5aa9384?w=800" }
];

let cart = [];

// NAVIGATION FUNCTION
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId + '-page').style.display = 'block';
    window.scrollTo(0, 0);
}

// RENDER PRODUCTS
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p.img}">
            <div class="card-info">
                <p>${p.name}</p>
                <p>${p.price} USD</p>
                <p class="add-to-cart" onclick="addToCart(${p.id})">+ ADD TO CART</p>
            </div>
        </div>
    `).join('');
}

// CART LOGIC
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
    
    cartList.innerHTML = cart.map(item => {
        total += item.price;
        return `<div style="margin-bottom:15px; font-size:11px;">${item.name} - ${item.price} USD</div>`;
    }).join('');
    
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cart-sidebar');
    if (forceOpen) sidebar.classList.add('active');
    else sidebar.classList.toggle('active');
}

// INITIALIZE
renderProducts(products);
