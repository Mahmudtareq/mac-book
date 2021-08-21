// memory 
function memoryPrice(isUpdate) {
    const memoryCost = document.getElementById('memory-cost');
    if (isUpdate == true) {
        memoryCost.innerText = 180
    }
    else if (isUpdate == false) {
        memoryCost.innerText = 0
    }
    return memoryCost;
}
document.getElementById('memory-btn').addEventListener('click', function () {
    memoryPrice(true)
    calculate()
});
document.getElementById('memory-btn1').addEventListener('click', function () {
    memoryPrice(false)
    calculate()
});

// storage
function storageProduct(update) {
    const storagePrice = document.getElementById('storage-cost');
    if (update == true) {
        storagePrice.innerText = 0
    }
    else if (update == false) {
        storagePrice.innerText = 100
    }
    else {
        storagePrice.innerText = 180
    }
    return storagePrice;
}
document.getElementById('storage-256').addEventListener('click', function () {
    storageProduct(true)
    calculate()
})
document.getElementById('storage-512').addEventListener('click', function () {
    storageProduct(false)
    calculate()
})
document.getElementById('storage-1').addEventListener('click', function () {
    storageProduct()
    calculate()
})

// delivery
function deliveryProduct(product) {
    const deliveryPrice = document.getElementById('delivery-cost');
    if (product == true) {
        deliveryPrice.innerText = 0
    }
    else if (product == false) {
        deliveryPrice.innerText = 20
    }
    return deliveryPrice;
}
document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryProduct(true)
    calculate()
})
document.getElementById('delivery-price').addEventListener('click', function () {
    deliveryProduct(false)
    calculate()
})
function calculate() {
    // update best price
    const bestPrice = document.getElementById('best-price');
    const bestTotal = parseFloat(bestPrice.innerText);
    // update memory cost
    const extraMemoryPrice = document.getElementById('memory-cost');
    const extraMemoryTotal = parseFloat(extraMemoryPrice.innerText);

    //update storage cost
    const extraStoragePrice = document.getElementById('storage-cost');
    const extraStorageTotal = parseFloat(extraStoragePrice.innerText);
    // update delivary cost
    const extraDeliveryPrice = document.getElementById('delivery-cost');
    const extraDeliveryTotal = parseFloat(extraDeliveryPrice.innerText);
    //   total sum of cost 
    const total = extraMemoryTotal + bestTotal + extraStorageTotal + extraDeliveryTotal;
    // update total price
    document.getElementById('total-price').innerText = total;
    // extra pert 
    document.getElementById('total-cost-price').innerText = total;
}
document.getElementById('apply-btn').addEventListener('click', function () {
    const textInput = document.getElementById('input-text').value;
    const stringValue = 'stevekaku';
    if (textInput == stringValue) {
        const subTotal = document.getElementById('total-cost-price').innerText;
        const sum = subTotal * 0.8;
        document.getElementById('total-cost-price').innerText = sum;
    }
    else {
        alert('Pls Enter valid code!');
    }



});







