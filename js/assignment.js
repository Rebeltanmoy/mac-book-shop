// get best price value
function bestCost() {
    const bestPriceSpan = document.getElementById('best-price');
    const bestPriceText = bestPriceSpan.innerText;
    const bestPriceNum = parseInt(bestPriceText);
    return bestPriceNum;
};
// get memory cost value
function memoryCost() {
    const memoryPriceSpan = document.getElementById('memory-cost');
    const memoryPriceText = memoryPriceSpan.innerText;
    const memoryPriceNum = parseInt(memoryPriceText);
    return memoryPriceNum;
};
// get storage cost value
function storageCost() {
    const storagePriceSpan = document.getElementById('storage-cost');
    const storagePriceText = storagePriceSpan.innerText;
    const storagePriceNum = parseInt(storagePriceText);
    return storagePriceNum;
};
// get delivery charged cost value
function deliveryCost() {
    const deliveryPriceSpan = document.getElementById('delivery-cost');
    const deliveryPriceText = deliveryPriceSpan.innerText;
    const deliveryPriceNum = parseInt(deliveryPriceText);
    return deliveryPriceNum;
};

// update cost with event
function updateCost(costId, price) {
    const costSpan = document.getElementById(costId);
    costSpan.innerText = price;
};

// get total calculation
function totalPriceOfProduct() {
    const bestPrice = bestCost();
    const memoryPrice = memoryCost();
    const storagePrice = storageCost();
    const deliveryCharge = deliveryCost();
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryCharge;
    document.getElementById('sub-total-price').innerText = totalPrice;
    const totalPriceSpan = document.getElementById('total-price');
    totalPriceSpan.innerText = totalPrice;
};

// Promo Code For Discount Section
document.getElementById('apply').onclick = function () {

    const subTotalText = document.getElementById('sub-total-price').innerText;
    const subTotalNum = parseInt(subTotalText);
    const totalPriceSpan = document.getElementById('total-price');
    const totalPriceText = totalPriceSpan.innerText;
    const totalPriceNum = parseInt(totalPriceText);
    const promoCodeInput = document.getElementById('promo-code');
    if (promoCodeInput.value == 'stevekaku') {
        const tweentyPercentTaka = 20 / 100 * subTotalNum;
        totalPriceSpan.innerText = subTotalNum - tweentyPercentTaka;
    }
    // clean Input Box
    promoCodeInput.value = '';
};

// add event listener on buttons
document.getElementById('8gb-memory').addEventListener('click', function () {
    updateCost('memory-cost', 0);
    totalPriceOfProduct();
});

document.getElementById('16gb-memory').addEventListener('click', function () {
    updateCost('memory-cost', 180);
    totalPriceOfProduct();
});

document.getElementById('256gb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 0);
    totalPriceOfProduct();
});

document.getElementById('512gb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 100);
    totalPriceOfProduct();
});

document.getElementById('1tb-storage').addEventListener('click', function () {
    updateCost('storage-cost', 180);
    totalPriceOfProduct();
});

document.getElementById('free-charge').addEventListener('click', function () {
    updateCost('delivery-cost', 0);
    totalPriceOfProduct();
});

document.getElementById('prime-charge').addEventListener('click', function () {
    updateCost('delivery-cost', 20);
    totalPriceOfProduct();
});