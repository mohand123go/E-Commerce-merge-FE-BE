/* get all product cost and add them togother */
window.onload = function totalCostfun() {

    let title = document.querySelector('title')

    if (title.textContent == 'Cart - online shop') {


        let productCost = document.querySelectorAll('.item--costWraper__productCost')
        let item_amount = document.querySelectorAll('.item--costWraper__amount')
        let checkout_SubTotal_Price = document.querySelector('.checkout--subTotal__price')
        let checkout_ShippingCost_price = document.querySelector('.checkout--ShippingCost__price')
        let checkout__total__price = document.querySelector('.checkout--total__price')

        let subtotalCost = 0;

        for (let i = 0; i < productCost.length; i++) {
            /* get all product cost text and remove the $ and add them togother */
            subtotalCost += parseInt(productCost[i].textContent) * parseInt(item_amount[i].textContent)
        }

        checkout_SubTotal_Price.textContent = '$' + subtotalCost

        let ShippingCost = parseInt(checkout_ShippingCost_price.textContent.substring(1))

        checkout__total__price.textContent = '$' + (subtotalCost + ShippingCost)

        orderInfo(subtotalCost, ShippingCost)
    }

    console.log('hi')
    console.log('fukkkkk')
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


function orderInfo(subtotalCost, ShippingCost) {



    /* get the value of subtotal and shipping cost and total and put the value in hiden input */

    let subtotal_input = document.querySelector('input[name="cartSubTotal"]')
    subtotal_input.value = subtotalCost



    let shippingCost_input = document.querySelector('input[name="CartShippingCost"]')
    shippingCost_input.value = ShippingCost


    let CartTotal_input = document.querySelector('input[name="CartTotal"]')
    CartTotal_input.value = (subtotalCost + ShippingCost)

    /* get the amount input and Sum all the values  in amountSum input*/
    let productsAmount = document.querySelectorAll('input[name="amount"]')
    let AmountSum = 0;

    let CartProductAmount_input = document.querySelector('input[name="CartProductAmount"')
    for (let i = 0; i < productsAmount.length; i++) {
        AmountSum += parseInt(productsAmount[i].value)
    }
    CartProductAmount_input.value = AmountSum

    console.log(CartProductAmount_input.value)
    console.log(subtotal_input.value)
    console.log(shippingCost_input.value)
    console.log(CartTotal_input.value)


}

