const products = [
    { id: 1, name: "Mechanical Keyboard", price: 120, category: "keyboard" },
    { id: 2, name: "Wireless Mouse", price: 80, category: "mouse" },
    { id: 3, name: "RGB Keycaps", price: 40, category: "keyboard" }
];

let cartCount = 0;

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = items.map(product => `
        <div class="card">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
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
}

// Initial Load
displayProducts(products);
