// Product data for all categories
// Each product has: name, category (slug), price, originalPrice, weight, image, rating
const products = [
    // ===== TRENDING CAKES =====
    { name: "Classic Cricket Bat Cake", category: "cricket-cakes", price: 699, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Cricket+Cake", rating: 4.5 },
    { name: "Stadium Cricket Cake", category: "cricket-cakes", price: 1299, originalPrice: 1599, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Stadium+Cake", rating: 4.7 },
    { name: "Cricket Ball Fondant Cake", category: "cricket-cakes", price: 999, originalPrice: 1199, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Ball+Cake", rating: 4.3 },
    { name: "IPL Theme Cake", category: "cricket-cakes", price: 1499, originalPrice: 1799, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=IPL+Cake", rating: 4.8 },
    { name: "Cricket Jersey Cake", category: "cricket-cakes", price: 1199, originalPrice: 1499, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Jersey+Cake", rating: 4.6 },
    { name: "Bowler Action Cake", category: "cricket-cakes", price: 899, originalPrice: 1099, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bowler+Cake", rating: 4.4 },

    { name: "Blazing Fire Cake", category: "fire-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Fire+Cake", rating: 4.5 },
    { name: "Flame Design Cake", category: "fire-cakes", price: 1099, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Flame+Cake", rating: 4.6 },
    { name: "Fireball Fondant Cake", category: "fire-cakes", price: 1299, originalPrice: 1499, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Fireball+Cake", rating: 4.4 },
    { name: "Hot Ember Cake", category: "fire-cakes", price: 699, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Ember+Cake", rating: 4.3 },

    { name: "Elegant Ribbon Cake", category: "ribbon-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Ribbon+Cake", rating: 4.7 },
    { name: "Pink Ribbon Delight", category: "ribbon-cakes", price: 749, originalPrice: 949, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pink+Ribbon", rating: 4.5 },
    { name: "Golden Ribbon Cake", category: "ribbon-cakes", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Gold+Ribbon", rating: 4.8 },

    { name: "Gourmet Truffle Cake", category: "gourmet-cakes", price: 1499, originalPrice: 1799, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Gourmet+Cake", rating: 4.9 },
    { name: "Premium Gourmet Delight", category: "gourmet-cakes", price: 1999, originalPrice: 2299, weight: "1.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Premium+Gourmet", rating: 4.8 },
    { name: "Gourmet Chocolate Tower", category: "gourmet-cakes", price: 2499, originalPrice: 2799, weight: "2 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Choco+Tower", rating: 4.7 },

    { name: "Cute Bento Cake", category: "bento-cakes", price: 499, originalPrice: 649, weight: "250 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bento+Cake", rating: 4.6 },
    { name: "Korean Bento Box Cake", category: "bento-cakes", price: 599, originalPrice: 749, weight: "250 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Korean+Bento", rating: 4.8 },
    { name: "Heart Bento Cake", category: "bento-cakes", price: 549, originalPrice: 699, weight: "250 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Heart+Bento", rating: 4.5 },
    { name: "Love Message Bento", category: "bento-cakes", price: 499, originalPrice: 649, weight: "250 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Love+Bento", rating: 4.7 },

    { name: "Pinata Hammer Cake", category: "pinata-cakes", price: 1199, originalPrice: 1499, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pinata+Cake", rating: 4.6 },
    { name: "Heart Pinata Cake", category: "pinata-cakes", price: 999, originalPrice: 1299, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Heart+Pinata", rating: 4.5 },

    { name: "Classic Drip Cake", category: "drip-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Drip+Cake", rating: 4.4 },
    { name: "Rainbow Drip Cake", category: "drip-cakes", price: 1099, originalPrice: 1299, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Rainbow+Drip", rating: 4.7 },

    // ===== BY TYPE =====
    { name: "Bestseller Chocolate Truffle", category: "bestsellers", price: 649, originalPrice: 799, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bestseller", rating: 4.9 },
    { name: "Top Rated Red Velvet", category: "bestsellers", price: 749, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Top+Rated", rating: 4.8 },
    { name: "Most Loved Butterscotch", category: "bestsellers", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Most+Loved", rating: 4.7 },

    { name: "Eggless Chocolate Cake", category: "eggless-cakes", price: 599, originalPrice: 749, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Eggless+Choco", rating: 4.5 },
    { name: "Eggless Vanilla Cake", category: "eggless-cakes", price: 549, originalPrice: 699, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Eggless+Vanilla", rating: 4.4 },
    { name: "Eggless Pineapple Cake", category: "eggless-cakes", price: 599, originalPrice: 749, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Eggless+Pine", rating: 4.3 },

    { name: "Customized Photo Cake", category: "photo-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Photo+Cake", rating: 4.6 },
    { name: "Round Photo Cake", category: "photo-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Round+Photo", rating: 4.5 },

    { name: "Heart Shape Red Velvet", category: "heart-shaped-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Heart+Cake", rating: 4.7 },
    { name: "Heart Chocolate Cake", category: "heart-shaped-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Heart+Choco", rating: 4.6 },

    // ===== BY FLAVOURS =====
    { name: "Dutch Chocolate Cake", category: "chocolate-cakes", price: 649, originalPrice: 799, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Dutch+Choco", rating: 4.8 },
    { name: "Chocolate Truffle Cake", category: "chocolate-cakes", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Truffle+Cake", rating: 4.9 },
    { name: "Dark Chocolate Cake", category: "chocolate-cakes", price: 749, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Dark+Choco", rating: 4.7 },
    { name: "Chocolate Fudge Cake", category: "chocolate-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Fudge+Cake", rating: 4.6 },
    { name: "Belgium Chocolate Cake", category: "chocolate-cakes", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Belgium+Choco", rating: 4.8 },
    { name: "Choco Lava Cake", category: "chocolate-cakes", price: 549, originalPrice: 699, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Lava+Cake", rating: 4.5 },

    { name: "Butterscotch Crunch Cake", category: "butterscotch-cakes", price: 599, originalPrice: 749, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=BS+Crunch", rating: 4.5 },
    { name: "Butterscotch Delight", category: "butterscotch-cakes", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=BS+Delight", rating: 4.6 },
    { name: "Premium Butterscotch", category: "butterscotch-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Premium+BS", rating: 4.7 },

    { name: "Fresh Strawberry Cake", category: "strawberry-cakes", price: 749, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Strawberry", rating: 4.6 },
    { name: "Strawberry Cream Cake", category: "strawberry-cakes", price: 849, originalPrice: 1049, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Straw+Cream", rating: 4.5 },

    { name: "Tropical Pineapple Cake", category: "pineapple-cakes", price: 599, originalPrice: 749, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pineapple", rating: 4.4 },
    { name: "Pineapple Pastry Cake", category: "pineapple-cakes", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pine+Pastry", rating: 4.5 },

    { name: "Kit Kat Chocolate Cake", category: "kit-kat-cakes", price: 999, originalPrice: 1199, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=KitKat+Cake", rating: 4.7 },
    { name: "Kit Kat Gems Cake", category: "kit-kat-cakes", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=KitKat+Gems", rating: 4.8 },

    { name: "Classic Black Forest", category: "black-forest-cakes", price: 599, originalPrice: 749, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Black+Forest", rating: 4.6 },
    { name: "Premium Black Forest", category: "black-forest-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Premium+BF", rating: 4.7 },

    { name: "Red Velvet Cream Cake", category: "red-velvet-cakes", price: 749, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Red+Velvet", rating: 4.8 },
    { name: "Red Velvet Heart Cake", category: "red-velvet-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=RV+Heart", rating: 4.7 },
    { name: "Red Velvet Jar Cake", category: "red-velvet-cakes", price: 349, originalPrice: 449, weight: "250 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=RV+Jar", rating: 4.5 },

    { name: "Vanilla Cream Cake", category: "vanilla-cakes", price: 549, originalPrice: 699, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Vanilla", rating: 4.4 },
    { name: "French Vanilla Cake", category: "vanilla-cakes", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=French+Vanilla", rating: 4.6 },

    { name: "Mixed Fruit Cake", category: "fruit-cakes", price: 649, originalPrice: 799, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Fruit+Cake", rating: 4.5 },
    { name: "Fresh Fruit Gateau", category: "fruit-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Fruit+Gateau", rating: 4.7 },

    { name: "Blueberry Cheese Cake", category: "blueberry-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Blueberry", rating: 4.6 },
    { name: "Blueberry Delight", category: "blueberry-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=BB+Delight", rating: 4.7 },

    // ===== BIRTHDAY =====
    { name: "Happy Birthday Chocolate", category: "birthday-cakes", price: 699, originalPrice: 849, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bday+Choco", rating: 4.6 },
    { name: "Birthday Celebration Cake", category: "birthday-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bday+Cake", rating: 4.7 },
    { name: "Birthday Butterscotch", category: "birthday-cakes", price: 649, originalPrice: 799, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bday+BS", rating: 4.5 },
    { name: "Birthday Red Velvet", category: "birthday-cakes", price: 749, originalPrice: 899, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bday+RV", rating: 4.8 },

    { name: "1st Birthday Teddy Cake", category: "1st-birthday-cakes", price: 999, originalPrice: 1199, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=1st+Bday", rating: 4.8 },
    { name: "1st Birthday Number Cake", category: "1st-birthday-cakes", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Number+1", rating: 4.7 },

    { name: "Birthday Photo Cake", category: "birthday-photo-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Bday+Photo", rating: 4.6 },

    // ===== DESSERTS =====
    { name: "Chocolate Jar Cake", category: "jar-cakes", price: 299, originalPrice: 399, weight: "200 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Jar+Cake", rating: 4.5 },
    { name: "Red Velvet Jar", category: "jar-cakes", price: 349, originalPrice: 449, weight: "200 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=RV+Jar", rating: 4.6 },
    { name: "Butterscotch Jar", category: "jar-cakes", price: 299, originalPrice: 399, weight: "200 gm", image: "https://placehold.co/300x300/fff5f0/E31C23?text=BS+Jar", rating: 4.4 },

    { name: "Chocolate Pastry", category: "pastries", price: 149, originalPrice: 199, weight: "1 Pc", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Choco+Pastry", rating: 4.5 },
    { name: "Blueberry Pastry", category: "pastries", price: 169, originalPrice: 219, weight: "1 Pc", image: "https://placehold.co/300x300/fff5f0/E31C23?text=BB+Pastry", rating: 4.6 },

    { name: "Classic Brownie Box", category: "brownies", price: 399, originalPrice: 499, weight: "6 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Brownies", rating: 4.7 },
    { name: "Walnut Brownie Box", category: "brownies", price: 449, originalPrice: 549, weight: "6 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Walnut+Brownie", rating: 4.6 },

    { name: "Chocolate Cupcakes", category: "cup-cakes", price: 499, originalPrice: 599, weight: "6 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Cupcakes", rating: 4.5 },
    { name: "Red Velvet Cupcakes", category: "cup-cakes", price: 549, originalPrice: 649, weight: "6 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=RV+Cupcakes", rating: 4.6 },

    // ===== ANNIVERSARY =====
    { name: "Anniversary Heart Cake", category: "all-anniversary-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Anni+Heart", rating: 4.8 },
    { name: "Anniversary Rose Cake", category: "all-anniversary-cakes", price: 999, originalPrice: 1199, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Anni+Rose", rating: 4.7 },
    { name: "Anniversary Photo Cake", category: "anniversary-photo-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Anni+Photo", rating: 4.6 },

    // ===== HAMPERS =====
    { name: "Deluxe Gift Hamper", category: "gift-hampers", price: 1999, originalPrice: 2499, weight: "2 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Gift+Hamper", rating: 4.8 },
    { name: "Premium Cake Hamper", category: "gift-hampers", price: 2499, originalPrice: 2999, weight: "2.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Premium+Hamper", rating: 4.9 },

    { name: "Assorted Pastry Box (6)", category: "assorted-pastry-box", price: 699, originalPrice: 849, weight: "6 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pastry+Box", rating: 4.6 },
    { name: "Assorted Pastry Box (12)", category: "assorted-pastry-box", price: 1199, originalPrice: 1399, weight: "12 Pcs", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Pastry+Box+12", rating: 4.7 },

    // ===== BY RELATIONSHIP =====
    { name: "Best Dad Cake", category: "cakes-for-father", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Dad+Cake", rating: 4.7 },
    { name: "Super Dad Fondant", category: "cakes-for-father", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Super+Dad", rating: 4.8 },

    { name: "Best Mom Cake", category: "cakes-for-mother", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Mom+Cake", rating: 4.7 },
    { name: "Queen Mom Cake", category: "cakes-for-mother", price: 1199, originalPrice: 1399, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Queen+Mom", rating: 4.9 },

    // ===== OCCASIONS =====
    { name: "Baby Shower Pink Cake", category: "baby-shower-cakes", price: 1099, originalPrice: 1299, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Baby+Shower", rating: 4.7 },
    { name: "Baby Shower Blue Cake", category: "baby-shower-cakes", price: 1099, originalPrice: 1299, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Baby+Blue", rating: 4.6 },

    { name: "Congratulations Cake", category: "congratulations-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Congrats", rating: 4.5 },

    { name: "Happy Retirement Cake", category: "retirement-cakes", price: 899, originalPrice: 1099, weight: "1 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Retirement", rating: 4.6 },

    { name: "Farewell Cake", category: "farewell-cakes", price: 799, originalPrice: 999, weight: "0.5 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Farewell", rating: 4.5 },

    { name: "Wedding Tier Cake", category: "wedding-cakes", price: 2999, originalPrice: 3499, weight: "3 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Wedding+Cake", rating: 4.9 },
    { name: "Wedding Floral Cake", category: "wedding-cakes", price: 2499, originalPrice: 2999, weight: "2 Kg", image: "https://placehold.co/300x300/fff5f0/E31C23?text=Wedding+Floral", rating: 4.8 },
];
