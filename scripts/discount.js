document.getElementById('disc-btn').addEventListener('click', function () {
    const mainPrice = document.getElementById('main-price');
    const mainPriceValueString = mainPrice.innerText;
    const mainPriceValue = parseFloat(mainPriceValueString);
    const discount = 30 / 100;
    const totalPrice = mainPriceValue - (mainPriceValue * discount);
    const payPrice = document.getElementById('pay-price');
    payPrice.innerText = totalPrice;
})