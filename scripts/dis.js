document.getElementById('disc-btn').addEventListener('click', function () {
    const element = document.getElementById('input-field');
    const fieldValue = element.value;
    if (fieldValue === 'DISC30') {
        const mainPrice = document.getElementById('main-price');
        const mainPriceValueString = mainPrice.innerText;
        const mainPriceValue = parseFloat(mainPriceValueString);
        const discount = 30 / 100;
        const totalPrice = mainPriceValue - (mainPriceValue * discount);
        const payPrice = document.getElementById('pay-price');
        payPrice.innerText = totalPrice;
    }
    else {
        
        alert('Please type DISC30')
    }
    element.value = '';
})
