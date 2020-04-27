



function exit_addToCart_fun(e) {


    let ui_product = e.parentNode.parentNode

    if (ui_product.classList.contains('display_none')) {



    } else {
        const tl = new TimelineMax({ onComplete: Add_display_none_Class })



        tl.fromTo(ui_product, 0.5, { x: '0', opacity: 1 }, { x: '250', opacity: 0, clearProps: "all" })

        function Add_display_none_Class() {
            ui_product.className += (' display_none')

        }


    }
}





function show_productUI(e) {

    let parent = e.parentNode.parentNode.parentNode
    console.log(parent)
    let ui_product

    for (let i = 0; i < parent.children.length; i++) {

        if (parent.children[i].classList.contains('ui_product')) {

            ui_product = parent.children[i];


            if (ui_product.classList.contains('display_none')) {

                let RemoveClass = new Promise((reslove, reject) => {
                    reslove(ui_product.classList.remove('display_none'))
                })
                RemoveClass.then(() => {
                    const t2 = new TimelineMax({})
                    t2.fromTo(ui_product, 0.5, { x: '250', opacity: 0 }, { x: '0', opacity: 1, clearProps: "all" })

                })



            } else {

            }
        }




    }
}

/*if (ui_product.classList.contains('display_none')) {

    let RemoveClass = new Promise((reslove, reject) => {
        reslove(ui_product.classList.remove('display_none'))
    })
    RemoveClass.then(() => {
        const t2 = new TimelineMax({})
        t2.fromTo(ui_product, 0.5, { x: '250', opacity: 0 }, { x: '0', opacity: 1, clearProps: "all" })

    })



} else {

}
}
*/

