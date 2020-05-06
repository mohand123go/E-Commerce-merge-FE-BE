

function gethi(e) {

    console.log(orders)
    let orderParent = document.querySelector('.mange-order--table-body')
  
    console.log('orderParent',orderParent)
   
    for (let i = 0; i < e.children.length; i++) {
        if (e.children[i].classList.contains('fullorderinfoKey')) {
        
            
            let itemKey = e.children[i].value
            let elment = '';
                        
          
                for (let j = 0; j < orders.length; j++) {


                
                    if( orders[j]._id == itemKey ) {
                    
                        for(let b = 0 ; b < orders[j].item.length ; b++ ){
    

                       
                       
                       
                         elment  +=   `<div class="mange-order--table-body__order-wraper">
                        <span><img src='/${orders[j].item[b].image_name}' width="50" /></span>
                        <span>${orders[j].item[b].name}</span>
                        <span>${orders[j].item[b].amount}</span>
                        <span>${orders[j].item[b].size}</span>
                        <span>
                            <span
                                style="display: inline-block; background-color: ${orders[j].item[b].color}; border-radius: 50%; width: 20px; height: 20px;"></span>
                        </span>
                        <span>${orders[j].item[b].price} EGP</span>
                        <span>${orders[j].item[b].amount * orders[j].item[b].price} EGP</span>
                    </div>`

                        
              
                  
                    }
                    let mangeOrdeTableFooter = document.querySelector('.mange-order--table-footer')

                    let billCheck = `<div class="mange-order--bill-check">

                    <div class="bill-check--content-wraper">
                        <span>QTY</span>
                        <span>${orders[j].orderInfo.CartProductAmount} unite</span>
                    </div>
                    <div class="bill-check--content-wraper">
                        <span>subtotal</span>
                        <span>${orders[j].orderInfo.subTotal} EGP</span>
                    </div>
                    <div class="bill-check--content-wraper">
                        <span>shipping cost</span>
                        <span>${orders[j].orderInfo.ShippingCost} EGP</span>
                    </div>
                    <div class="bill-check--content-wraper">
                        <span>Total</span>
                        <span> ${orders[j].orderInfo.CartTotal} EGP</span>
                    </div>


                </div>`

                mangeOrdeTableFooter.innerHTML = billCheck


                let navBuyerInfo = document.querySelector('#nav-buyerInfo')
                console.log()
                navBuyerInfo.innerHTML =     `<div class="mange-order-panal--buyer-info">
                <div class="mange-order-panal--buyer--info-content-wraper">

                    <div class="buyer-info">
                        <span>First Name</span>
                        <span>${orders[j].buyerInfo.firstName}</span>
                    </div>

                    <div class="buyer-info">
                        <span>Last Name</span>
                        <span>${orders[j].buyerInfo.lastName}</span>
                    </div>

                    <div class="buyer-info">
                        <span>Address 1</span>
                        <span>${orders[j].buyerInfo.addressLine1}</span>
                    </div>

                    <div class="buyer-info">
                        <span>Address 2</span>
                        <span>${orders[j].buyerInfo.addressLine2}</span>
                    </div>

                    <div class="buyer-info">
                        <span>City</span>
                        <span>${orders[j].buyerInfo.city}</span>
                    </div>

                    <div class="buyer-info">
                        <span>Telephone</span>
                        <span>${orders[j].buyerInfo.mobileNumber}</span>
                    </div>

                    <div class="buyer-info">
                        <span>Email</span>
                        <span>mohand.mostafa9811@gamil.com</span>
                    </div>
                </div>
            </div>`
                
                    orderParent.innerHTML = elment


                    let buyer_info__shipping_info__context =  ` 
                    <span>${orders[j].buyerInfo.lastName} ${orders[j].buyerInfo.lastName}</span>
                    <span>${orders[j].buyerInfo.mobileNumber}</span>
                    <span>${orders[j].buyerInfo.addressLine1}</span>
                    <span>${orders[j].buyerInfo.addressLine2}</span>
               
              `
              let buyer_info__hipping_info = document.querySelector('.buyer-info--shipping-info')
              buyer_info__hipping_info.innerHTML = buyer_info__shipping_info__context

              let buyer_info__bill_check_elment = document.querySelector('.buyer-info--bill-check')

              let buyer_info__bill_check_content = `

              <div class="bill-check--content-wraper">
                  <span>QTY</span>
                  <span>${orders[j].orderInfo.CartProductAmount} unite</span>
              </div>
              <div class="bill-check--content-wraper">
                  <span>subtotal</span>
                  <span>${orders[j].orderInfo.subTotal} EGP</span>
              </div>
              <div class="bill-check--content-wraper">
                  <span>shipping cost</span>
                  <span>${orders[j].orderInfo.ShippingCost} EGP</span>
              </div>
              <div class="bill-check--content-wraper">
                  <span>Total</span>
                  <span> ${orders[j].orderInfo.CartTotal} EGP</span>
              </div>
              
` 

        buyer_info__bill_check_elment.innerHTML = buyer_info__bill_check_content


        let buyer_info_panal_control = document.querySelector('.buyer-info-panal-control')

        let mange_order_form = ` <form method="POST">
        <select name="editedStatus">
            <option value="on process">on process</option>
            <option value="accepted">accepted</option>
            <option value="in delivery">in delivery</option>
            <option value="delivered">delivered</option>
        </select>
        <input type="hidden" name="cartId" value="${orders[j]._id}">
        <input type="submit" value="Save" class="btn btn-success" formaction="/admin/orders/save">
        <button type="submit" class="btn btn-danger" formaction="/admin/orders/cancel">Cancel
            order</button>
    </form>
`        
    buyer_info_panal_control.innerHTML = mange_order_form


          
          
              
               
                   
                    }
                }
                


            }
        }
    }


    /*
            orderParent.children[2].textContent  = orders[j].item[b].name
                        orderParent.children[3].textContent  = orders[j].item[b].amount
                        orderParent.children[4].textContent  = orders[j].item[b].size
                        orderParent.children[5].textContent  = orders[j].item[b].color
                        orderParent.children[6].textContent  = orders[j].item[b].price
                         */


/* نجيب كل الانبوت في الصفحة ونطابق الايدي والبرينت بتعها هو ده البيرنت اللي عليه الدور  */

/*
for (let i = 0; i < e.nextElementSibling.children.length; i++) {

        if (e.nextElementSibling.children[i].classList.contains("mange-order-panal--product-wraper")) {
            let parent = e.nextElementSibling.children[i]

            for (let j = 0; j < parent.children.length; j++) {

                let child = parent.children[j]

                for (let k = 0; k < child.children.length; k++) {

                    if (child.children[k].classList.contains('mange-order--table-body__order-wraper')) {

                        let childOfchild = child.children[k]
                        for (let l = 0; l < childOfchild.children.length; l++) {
                            console.log(childOfchild.children[l])
                        }
                    }

                }
            }


        }


    } */

    /*
    
    
function gethi(e) {

    console.log(orders)
    let allItems = document.querySelectorAll('.mange-order--table-body__order-wraper')

    for (let i = 0; i < e.children.length; i++) {
        if (e.children[i].classList.contains('fullorderinfoKey')) {
            let itemKey = e.children[i].value
            for (let j = 0; j < allItems.length; j++) {

                for (let k = 0; k < allItems[j].children.length; k++) {

                    console.log('from here', allItems[j].children[k])

                    if (allItems[j].children[k].classList.contains('fullorderinfoValue')) {


                        itemValue = allItems[j].children[k].value
                        if (itemValue == itemKey) {
                            console.log('ohh')
                        }
                    }
                }


            }
        }
    }
}*/