document.getElementById('inventoryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    addToCart();
});

function updatePrice(itemId) {
    var quantity = parseInt(document.getElementById(itemId).value);
    var priceElement = document.getElementById(itemId + 'NamePrice');
    var price;

    if (itemId === 'item1') {
        price = 5; // Price of Eclair Chocolate
    } else if (itemId === 'item2') {
        price = 40; // Price of Mountain Dew Coldrink
    }

    var totalPrice = quantity * price;
    priceElement.textContent = getPriceLabel(itemId, price) + ' - Total Price: Rs. ' + totalPrice;
}

function getPriceLabel(itemId, price) {
    var itemName;

    if (itemId === 'item1') {
        itemName = 'Eclair Chocolate';
    } else if (itemId === 'item2') {
        itemName = 'Mountain Dew Coldrink';
    }

    return itemName + ' - Price: Rs. ' + price;
}

function addToCart() {
    var item1Quantity = parseInt(document.getElementById('item1').value);
    var item2Quantity = parseInt(document.getElementById('item2').value);

    var cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    var totalPrice = 0;


    if (item1Quantity > 0) {
        var listItem1 = document.createElement('li');
        listItem1.textContent = 'Eclair Chocolate - Quantity: ' + item1Quantity;
        cartItems.appendChild(listItem1);

        var item1Price = 5; // Price of Eclair Chocolate
        totalPrice += item1Quantity * item1Price;

        var remainingItem1 = document.getElementById('remainingItem1');
        var remainingQuantity1 = parseInt(remainingItem1.textContent) - item1Quantity;
        remainingItem1.textContent = remainingQuantity1;
    }

    if (item2Quantity > 0) {
        var listItem2 = document.createElement('li');
        listItem2.textContent = 'Mountain Dew Coldrink - Quantity: ' + item2Quantity;
        cartItems.appendChild(listItem2);

        var item2Price = 40; // Price of Mountain Dew Coldrink
        totalPrice += item2Quantity * item2Price;

        var remainingItem2 = document.getElementById('remainingItem2');
        var remainingQuantity2 = parseInt(remainingItem2.textContent) - item2Quantity;
        remainingItem2.textContent = remainingQuantity2;
    }

    var priceElement = document.getElementById('price');
    priceElement.textContent = 'Total Price: Rs. ' + totalPrice;
}