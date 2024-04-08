function addToCart(productId) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {}; // Retrieve cart data from storage or create an empty object
    cartData[productId] = (cartData[productId] || 0) + 1; // Increment the quantity of the product in the cart
    localStorage.setItem('cart', JSON.stringify(cartData)); // Store the updated cart data back into localStorage
    alert('Item added to cart!');
}
document.getElementById('b1').addEventListener('click', function () {
    addToCart(1);
});
document.getElementById('b2').addEventListener('click', function () {
    addToCart(2);
});