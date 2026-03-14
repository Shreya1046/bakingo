// Load Navigation Component
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-nav').innerHTML = data;
        })
        .catch(err => console.error('Error loading navigation:', err));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(err => console.error('Error loading footer:', err));
});

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide
setInterval(nextSlide, 3000);

function showAlert(item) {
    console.log(`Clicked: ${item}`);
}

function selectCake(cakeName) {
    console.log(`Selected: ${cakeName}`);
}

function orderNow() {
    alert('🎉 Order now redirects to checkout page!');
}

/* =========================================
   BESTSELLERS RENDERING (India Loves)
   ========================================= */
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('bestsellers-container');
    if (container && typeof products !== 'undefined') {
        const bestsellers = products.filter(p => p.category === 'bestsellers').slice(0, 6);
        
        bestsellers.forEach(cake => {
            const reviewsCount = (cake.reviews >= 1000) ? (cake.reviews / 1000).toFixed(1) + 'K' : cake.reviews;
            const discount = Math.round(((cake.originalPrice - cake.price) / cake.originalPrice) * 100);
            
            const card = document.createElement('div');
            card.className = 'bestseller-card';
            
            let priceHtml = `<span class="current-price">₹${cake.price}</span>`;
            if (cake.originalPrice > cake.price) {
                priceHtml += `<span class="original-price">₹${cake.originalPrice}</span>`;
                priceHtml += `<span class="discount">${discount}% OFF</span>`;
            }

            card.innerHTML = `
                <div class="product-image">
                    ${cake.isVeg ? `<div class="veg-icon"></div>` : ''}
                    <img src="${cake.image}" alt="${cake.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name" title="${cake.name}">${cake.name}</h3>
                    <div class="price-section">
                        ${priceHtml}
                        <span class="wishlist-icon">♡</span>
                    </div>
                    <div class="rating-section">
                        <span class="rating">${cake.rating} ★</span>
                        <span class="reviews">(${reviewsCount} Reviews)</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                window.location.href = `product.html?name=${encodeURIComponent(cake.name)}`;
            });
            
            container.appendChild(card);
        });
    }
});
