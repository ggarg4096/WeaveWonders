function displayCartItems() {
    var cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    for (var productId in cartData) {
        var quantity = cartData[productId];


        productId = parseInt(productId);

        var productDetails = getProductDetails(productId);
        var productImage = productDetails.image;
        var productName = productDetails.name;
        var productPrice = productDetails.price;
        var itemHTML = `<div class="cart-item-data">
        <div class="cart-item-image"> 
        <img src="${productImage}" alt="">
        </div>
        <div class="cart-item-name">~${productName}~
        </div>
        <div class="cart-item-price">${productPrice}
        </div>
        <div class="cart-item-quantity">
            <button class="sub-quan" onclick="updateQuantity(${productId}, -1)">-</button> ${quantity}
            <button class="add-quan" onclick="updateQuantity(${productId}, 1)">+</button>
        </div>
        <div class="cart-item-totalprice">Total~${productPrice * quantity}
        </div>
        </div>`;
        cartItemsDiv.innerHTML += itemHTML;
    }
}

window.addEventListener('load', displayCartItems);


function applyCoupon() {
    var couponInput = document.getElementById('couponInput');
    var couponValidDiv = document.querySelector('.coupon-valid');
    var valDiv = document.querySelector('.val');
    var totalValue = calculateTotalValue();
    if (couponInput.value.toLowerCase() === 'weavelove') {
        var discount = 0.1 * totalValue;

        couponValidDiv.innerHTML = `Coupon is valid! You get a 10% discount: -Rs.${discount.toFixed(2)}`;
        valDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${(totalValue - discount).toFixed(2)}`;
    } else {
        couponValidDiv.textContent = 'Coupon is not valid.';

        valDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${totalValue.toFixed(2)}`;
    }
}
function displayTotalValue() {
    var totalValueDiv = document.querySelector('.val');
    var totalValue = calculateTotalValue();
    totalValueDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${totalValue.toFixed(2)}`;
}

window.addEventListener('load', function () {
    displayTotalValue();
});
function calculateTotalValue() {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    var totalValue = 0;

    for (var productId in cartData) {
        var quantity = cartData[productId];
        var productDetails = getProductDetails(parseInt(productId));
        totalValue += productDetails.price * quantity;
    }

    return totalValue;
}



function updateQuantity(productId, quantityChange) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};

    cartData[productId] = (cartData[productId] || 0) + quantityChange;

    if (cartData[productId] <= 0) {
        delete cartData[productId];
    }

    localStorage.setItem('cart', JSON.stringify(cartData));

    displayCartItems();
    applyCoupon();
    displayTotalValue();
}
function displayTotalValue() {
    var totalValueDiv = document.querySelector('.val');
    var totalValue = calculateTotalValue();
    totalValueDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${totalValue.toFixed(2)}`;
}

var products = [
    { id: 1, name: "Evil Eye Bracellete", price: 999, image: "img/Brace1.jpg" },
    { id: 2, name: "Sunflower Bracellete", price: 1499, image: "img/Brace2.jpg" },
    { id: 3, name: "Modren Wall Art", price: 799, image: "img/wall1.jpg" },
    { id: 4, name: "Wall Mirror", price: 999, image: "img/wall2.jpg" },
    { id: 5, name: "Evil Eye", price: 650, image: "img/wall3.jpg" },
    { id: 6, name: "Modren Art", price: 799, image: "img/wall5.jpg" },
    { id: 7, name: "Evil Eye For Door", price: 3000, image: "img/wall4.jpg" },
    { id: 8, name: "Heart", price: 499, image: "img/wallhanging.png" },
    { id: 9, name: "Shubh Labh", price: 459, image: "img/wall6.jpg" },
    { id: 10, name: "Wall Decore", price: 999, image: "img/wall8.jpg" },
    { id: 11, name: "Happy Birthday", price: 1300, image: "img/amb1.jpg" },
    { id: 12, name: "Happy Anniversary", price: 1700, image: "img/amb2.jpg" },
    { id: 13, name: "Love", price: 1599, image: "img/amb6.jpg" },
    { id: 14, name: "Special Date", price: 1300, image: "img/amb4.jpg" },
    { id: 15, name: "couple", price: 1499, image: "img/amb5.jpg" },
    { id: 16, name: "Embroidery Photo Hoop", price: 1199, image: "img/amb7.jpg" },
    { id: 17, name: "First Birthday", price: 1199, image: "img/amb8.jpg" },
    { id: 18, name: "Friends Forever", price: 1999, image: "img/amb9.jpg" },
    { id: 19, name: "Flowers", price: 3199, image: "img/flower.jpg" },
    { id: 20, name: "Sun Flower", price: 249, image: "img/flower3.jpg" },
    { id: 21, name: "Rose", price: 350, image: "img/flower4.jpg" },
    { id: 22, name: "LOVE", price: 500, image: "img/flower7.jpg" },
    { id: 23, name: "Tulips", price: 1000, image: "img/flower2.jpg" },
    { id: 24, name: "Book Mark", price: 150, image: "img/flower5.jpg" },
    { id: 25, name: "Lily", price: 459, image: "img/flower6.jpg" },
    { id: 26, name: "Bouquet", price: 1799, image: "img/flower8.jpg" },
    { id: 27, name: "Boy", price: 3199, image: "img/boy.jpg" },
    { id: 28, name: "Penguin", price: 1149, image: "img/doll12.jpg" },
    { id: 29, name: "Snow Man", price: 550, image: "img/doll11.jpg" },
    { id: 30, name: "Snake", price: 1000, image: "img/doll10.jpg" },
    { id: 31, name: "Cat", price: 2000, image: "img/doll9.jpg" },
    { id: 32, name: "Watermelon", price: 350, image: "img/doll8.jpg" },
    { id: 33, name: "Duck", price: 1000, image: "img/doll6.jpg" },
    { id: 34, name: "Panda", price: 1799, image: "img/doll5.jpg" },
    { id: 35, name: "Pinku", price: 999, image: "img/doll1.jpg" },
    { id: 36, name: "Snail", price: 1100, image: "img/doll4.jpg" },
    { id: 37, name: "Pikachu", price: 1099, image: "img/doll3.jpg" },
    { id: 38, name: "Blue Bear", price: 499, image: "img/doll2.jpg" },
    { id: 39, name: "Nike", price: 3199, image: "img/hood1.jpg" },
    { id: 40, name: "Pink Hoodies", price: 1149, image: "img/hood2.jpg" },
    { id: 41, name: "Flower", price: 550, image: "img/hood3.jpg" },
    { id: 42, name: "Happiness", price: 1000, image: "img/hood4.jpg" },
    { id: 43, name: "Love", price: 1000, image: "img/hood5.jpg" },
    { id: 44, name: "Flower Top", price: 1000, image: "img/hood6.jpg" },
    { id: 45, name: "Woolen Scarf", price: 1000, image: "img/hood7.jpg" },
    { id: 46, name: "White Shirt", price: 1000, image: "img/hood8.jpg" },
    { id: 47, name: "Embroidery Jean", price: 1000, image: "img/hood9.jpg" },
    { id: 48, name: "Dragon Gloves", price: 1000, image: "img/hood10.jpg" },
    { id: 49, name: "Owl Scarf", price: 1000, image: "img/hood11.jpg" },
    { id: 50, name: "Lion", price: 699, image: "img/decore.png" },
    { id: 51, name: "Girl On Swing", price: 1999, image: "img/decore1.jpg" },
    { id: 52, name: "Key Holder", price: 2222, image: "img/decore3.jpg" },
    { id: 53, name: "Table Lamp", price: 3000, image: "img/decore4.jpg" },
    { id: 54, name: "Tulip Lamp", price: 2500, image: "img/decore5.jpg" },
    { id: 55, name: "Pandier Cushion", price: 1000, image: "img/decore6.jpg" },
    { id: 56, name: "Peacock Feather Table Cover", price: 999, image: "img/decore7.jpg" },
    { id: 57, name: "Heart Cushion", price: 500, image: "img/decore8.jpg" },
    { id: 58, name: "Rainbow Mat", price: 4000, image: "img/decore9.jpg" },
    { id: 59, name: "Evil Eye Coster", price: 1200, image: "img/decore10.jpg" },
    { id: 60, name: "Sofa Side", price: 1499, image: "img/decore11.jpg" },
    { id: 61, name: "Napkin Bus", price: 1799, image: "img/decore12.jpg" }
];
function getProductDetails(productId) {
    var product = products.find(product => product.id === productId);
    if (product) {
        return { name: product.name, price: product.price, image: product.image };
    }
}

function addToCart(productId) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    cartData[productId] = (cartData[productId] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cartData));
    updateCartCount();
}
