const products = [
    { id: 1, name: "ULTRA KEYBOARD", price: 159, category: "keyboard", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800" },
    { id: 2, name: "MINIMAL MOUSE", price: 89, category: "mouse", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800" }, // Fixed Mouse Image
    { id: 3, name: "TECH HEADSET", price: 210, category: "audio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
    { id: 4, name: "DESK PAD BLACK", price: 45, category: "acc", img: "https://images.unsplash.com/photo-1631553127988-348270119e7a?w=800" } // Fixed Desk Pad Image
];

let cart = [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId + '-page').style.display = 'block';
    window.scrollTo(0, 0);
}

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
    
    cartList.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `<div style="margin-bottom:15px; font-size:11px; display:flex; justify-content:space-between;">
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

// FAKE CHECKOUT LOGIC
function processCheckout() {
    if (cart.length === 0) {
        alert("YOUR CART IS EMPTY.");
        return;
    }
    
    const total = document.getElementById('cart-total').innerText;
    alert(`THANK YOU FOR YOUR PURCHASE.\nTOTAL AMOUNT: ${total} USD\nYOUR ORDER HAS BEEN RECEIVED.`);
    
    // Reset Cart
    cart = [];
    updateCartUI();
    toggleCart();
    showPage('home');
}

renderProducts(products);
