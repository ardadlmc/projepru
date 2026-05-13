const products = [
    { 
        id: 1, 
        name: "Apex Pro TKL", 
        price: 189.99, 
        category: "keyboard",
        image: "https://images.unsplash.com/photo-1595225403013-4330699049a4?auto=format&fit=crop&q=80&w=600"
    },
    { 
        id: 2, 
        name: "Ultralight Ghost Mouse", 
        price: 75.00, 
        category: "mouse",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600"
    },
    { 
        id: 3, 
        name: "Custom PBT Keycaps", 
        price: 45.50, 
        category: "keyboard",
        image: "https://images.unsplash.com/photo-1618384881928-0248bc839218?auto=format&fit=crop&q=80&w=600"
    },
    { 
        id: 4, 
        name: "Ergo Desktop Mat", 
        price: 30.00, 
        category: "accessory",
        image: "https://images.unsplash.com/photo-1631553127988-348270119e7a?auto=format&fit=crop&q=80&w=600"
    }
];

let cartCount = 0;

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-btn" onclick="addToCart()">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterItems(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    // Simple visual feedback
    const btn = document.getElementById('cart-btn');
    btn.style.transform = "scale(1.1)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);
}

// Initial display
displayProducts(products);
