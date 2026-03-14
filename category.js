// Category page logic
// Reads URL parameter and renders filtered product cards

document.addEventListener('DOMContentLoaded', function () {
    // Get category from URL
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'cricket-cakes'; // Default for demo

    // Filter products by category
    const filtered = products.filter(p => p.category === category);

    if (filtered.length === 0) {
        showNoProducts();
        return;
    }

    // Convert slug to display name
    const categoryName = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    document.title = categoryName + ' - Bakingo';
    document.getElementById('category-title').textContent = categoryName;

    // Initial render
    renderProducts(filtered);

    // Sort Dropdown Toggle
    const sortBtn = document.getElementById('sort-trigger');
    const sortDropdown = document.getElementById('sort-dropdown');

    sortBtn.addEventListener('click', () => {
        const isVisible = sortDropdown.style.display === 'block';
        sortDropdown.style.display = isVisible ? 'none' : 'block';
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!sortBtn.contains(e.target) && !sortDropdown.contains(e.target)) {
            sortDropdown.style.display = 'none';
        }
    });

    // Sort Selection Logic
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            let sorted = [...filtered];
            
            switch (value) {
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
                    break; 
            }
            
            renderProducts(sorted);
            sortDropdown.style.display = 'none';
            sortBtn.innerHTML = `Sort: ${this.textContent} ↓↑`;
        });
    });
});

function renderProducts(productList) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-image-wrapper">
                ${product.isVeg ? '<div class="veg-icon"></div>' : ''}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="wishlist-icon">♡</button>
            </div>
            <div class="card-body">
                <div class="card-name">${product.name}</div>
                <div class="card-pricing">
                    <span class="card-price">₹${product.price}</span>
                </div>
                <div class="card-rating-row">
                    <div class="card-rating">
                        ${product.rating} <span class="star">★</span>
                    </div>
                    <div class="card-reviews">
                        (${product.reviews} Reviews)
                    </div>
                </div>
            </div>
        `;
        
        // Wishlist toggle demo
        const wishBtn = card.querySelector('.wishlist-icon');
        wishBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            wishBtn.textContent = wishBtn.textContent === '♡' ? '❤️' : '♡';
        });

        // Redirect to product details
        card.addEventListener('click', () => {
            window.location.href = `product.html?name=${encodeURIComponent(product.name)}`;
        });

        grid.appendChild(card);
    });
}

function showNoProducts() {
    document.getElementById('product-grid').style.display = 'none';
    document.getElementById('no-products').style.display = 'block';
    document.querySelector('.category-toolbar').style.display = 'none';
}
