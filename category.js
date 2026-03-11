// Category page logic
// Reads URL parameter and renders filtered product cards

document.addEventListener('DOMContentLoaded', function () {
    // Get category from URL
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    if (!category) {
        showNoProducts();
        return;
    }

    // Convert slug to display name: "cricket-cakes" → "Cricket Cakes"
    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Update page title and breadcrumb
    document.title = categoryName + ' - Bakingo';
    document.getElementById('category-title').textContent = categoryName;
    document.getElementById('breadcrumb-category').textContent = categoryName;

    // Filter products by category
    const filtered = products.filter(p => p.category === category);

    if (filtered.length === 0) {
        showNoProducts();
        return;
    }

    // Update product count
    document.getElementById('product-count').textContent = filtered.length + ' Product' + (filtered.length > 1 ? 's' : '');

    // Render product cards
    renderProducts(filtered);

    // Sort functionality
    document.getElementById('sort-select').addEventListener('change', function () {
        let sorted = [...filtered];
        switch (this.value) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break; // relevance = original order
        }
        renderProducts(sorted);
    });
});

function renderProducts(productList) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    productList.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="card-name">${product.name}</div>
                <div class="card-weight">${product.weight}</div>
                <div class="card-pricing">
                    <span class="card-price">₹${product.price}</span>
                    <span class="card-original-price">₹${product.originalPrice}</span>
                    <span class="card-discount">${discount}% OFF</span>
                </div>
                <div class="card-rating">
                    <span class="star">★</span> ${product.rating}
                </div>
            </div>
            <button class="add-btn">ADD TO CART</button>
        `;
        grid.appendChild(card);
    });
}

function showNoProducts() {
    document.getElementById('product-grid').style.display = 'none';
    document.getElementById('no-products').style.display = 'block';
    document.querySelector('.category-toolbar').style.display = 'none';
}
