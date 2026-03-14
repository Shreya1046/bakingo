// product.js
// Handles reading the URL parameter, fetching product details, and rendering the view

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productName = params.get('name');
    
    // Find the product
    let productDetails = null;
    if (productName && typeof products !== 'undefined') {
        productDetails = products.find(p => p.name === productName);
    }
    
    const wrapper = document.getElementById('product-wrapper');
    const errorDiv = document.getElementById('no-product-error');
    
    if (!productDetails) {
        errorDiv.style.display = 'block';
        return;
    }
    
    // Format the reviews and generate random SKU placeholder structure based on string
    const formattedReviews = (productDetails.reviews >= 1000) ? (productDetails.reviews / 1000).toFixed(1) + 'K' : productDetails.reviews;
    const sku = "cake0003" + productDetails.name.slice(0, 4).toLowerCase();

    // Dynamically calculate what weights to show depending on price scale
    // By default showing typical options from screenshot regardless of the object's specific properties
    const weightOptions = ["0.5 Kg", "1 Kg", "1.5 Kg", "2 Kg", "4 Kg"];
    let defaultWeightStr = productDetails.weight;
    
    // Safety check just in case product object has a non-standard weight format
    if (!weightOptions.includes(defaultWeightStr)) {
        weightOptions[0] = defaultWeightStr; // override first option if it's unique
    }

    let weightsHtml = weightOptions.map((w, index) => {
        const isActive = w === defaultWeightStr ? "active" : "";
        const peopleText = w === "0.5 Kg" ? "4 - 5 People" : "&nbsp;";
        return `
            <div class="weight-box-container">
                <div class="weight-box ${isActive}" data-weight="${w}">
                    ${w}
                </div>
                <!-- Only append people text below the active/first one depending on design -->
                <div class="people-sub">${isActive ? peopleText : ''}</div>
            </div>
        `;
    }).join('');

    wrapper.innerHTML = `
        <div class="product-grid">
            
            <!-- Left side gallery -->
            <div class="product-gallery">
                <div class="thumbnail-list">
                    <div class="thumb active"><img src="${productDetails.image}" alt="Thumb"></div>
                    <div class="thumb"><img src="${productDetails.image}" alt="Thumb"></div>
                    <div class="thumb"><img src="${productDetails.image}" alt="Thumb"></div>
                    <div class="thumb"><img src="${productDetails.image}" alt="Thumb"></div>
                </div>
                <div class="main-image">
                    ${productDetails.isVeg ? '<div class="veg-badge"><span class="v-dot"></span><span class="v-text">EGGLESS</span></div>' : ''}
                    <img src="${productDetails.image}" alt="${productDetails.name}">
                </div>
            </div>
            
            <!-- Right side details -->
            <div class="product-info-panel">
                <div class="info-header">
                    <div>
                        <h1 class="product-title">${productDetails.name}</h1>
                        <div class="product-rating">
                            <span class="star-score">${productDetails.rating} ★</span> 
                            <span class="review-count">(${formattedReviews} Reviews)</span>
                        </div>
                    </div>
                    <div class="wishlist-btn"><span class="heart-icon">♡</span></div>
                </div>
                
                <div class="product-pricing">
                    <span class="price-val">₹${productDetails.price}</span> 
                    <span class="inclusive-gst">(Inclusive of GST)</span>
                </div>
                
                <p class="product-desc">
                    Celebrate beautifully with this signature masterpiece created freshly to make your moments magical. Specially crafted with love, layers of rich textures, and delightful flavors.
                </p>
                
                <!-- Weight Selection -->
                <div class="weight-section">
                    <div class="weight-header">
                        <h4>Select Weight</h4>
                        <a href="#" class="serving-info">Serving Info</a>
                    </div>
                    <div class="weight-options">
                        ${weightsHtml}
                    </div>
                </div>
                
                <!-- Cake Message -->
                <div class="message-section">
                    <div class="message-header">
                        <h4>Cake Message</h4>
                        <span class="char-count">0/25</span>
                    </div>
                    <input type="text" class="cake-msg-input" placeholder="Write A Sweet Wish!" maxlength="25">
                </div>
                
                <!-- Delivery Location -->
                <div class="delivery-section">
                    <h4>Delivery Location</h4>
                    <div class="pincode-input-row">
                        <div class="input-wrapper">
                            <span class="loc-pin">📍</span>
                            <input type="text" placeholder="Search for area/locality/pincode">
                        </div>
                        <button class="check-btn">Check Availability</button>
                    </div>
                    <p class="limited-cities-warning">Available in limited cities*</p>
                </div>
                
                <!-- Meta info -->
                <div class="product-meta">
                    <div class="sku-block">
                        <strong>SKU Number</strong>
                        <span>${sku}</span>
                    </div>
                    <div class="earliest-delivery">
                        <span class="clock-icon">⏱</span> Earliest Delivery : <strong>2-3 Hrs</strong>
                    </div>
                </div>
                
                <!-- Buy Now Button -->
                <div class="action-buttons">
                    <button class="buy-now-btn">Buy Now | ₹${productDetails.price}</button>
                </div>
            </div>
        </div>
    `;

    // Add interactivity to weight options
    const weightBoxes = wrapper.querySelectorAll('.weight-box');
    weightBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            wrapper.querySelectorAll('.weight-box').forEach(b => {
                b.classList.remove('active');
                b.nextElementSibling.innerHTML = ''; // clear text under others
            });
            box.classList.add('active');
            box.nextElementSibling.innerHTML = '4 - 5 People'; // simple mockup update
        });
    });
    
    // Interactivity to message counter
    const msgInput = wrapper.querySelector('.cake-msg-input');
    const charCount = wrapper.querySelector('.char-count');
    if (msgInput) {
        msgInput.addEventListener('input', () => {
            charCount.textContent = msgInput.value.length + '/25';
        });
    }

    // Wishlist
    const wishBtn = wrapper.querySelector('.wishlist-btn');
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
             const heart = wishBtn.querySelector('.heart-icon');
             heart.textContent = heart.textContent === '♡' ? '❤️' : '♡';
        });
    }
});
