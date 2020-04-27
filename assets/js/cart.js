/* get all product cost and add them togother */
window.onload = function totalCostfun() {
    let productCost = document.querySelectorAll('.item--costWraper__productCost')
    let checkout_SubTotal_Price = document.querySelector('.checkout--subTotal__price')
    let checkout_ShippingCost_price = document.querySelector('.checkout--ShippingCost__price')
    let checkout__total__price = document.querySelector('.checkout--total__price')

    let subtotalCost = 0;

    for (let i = 0; i < productCost.length; i++) {
        /* get all product cost text and remove the $ and add them togother */
        subtotalCost += parseInt(productCost[i].textContent)
    }

    checkout_SubTotal_Price.textContent = '$' + subtotalCost

    let ShippingCost = parseInt(checkout_ShippingCost_price.textContent.substring(1))

    checkout__total__price.textContent = '$' + (subtotalCost + ShippingCost)
}

function increaseAmountByOne(e) {


    let amountCounter = e.parentNode.children[1]
    if (amountCounter.value >= 0 && amountCounter.value < 10) {
        const amount = parseInt(amountCounter.value)
        amountCounter.value = amount + 1

    }
}


function decreaseAmountByOne(e) {

    let amountCounter = e.parentNode.children[1]

    if (amountCounter.value > 0 && amountCounter.value <= 10) {
        const amount = parseInt(amountCounter.value)
        amountCounter.value = amount - 1

    }
}

