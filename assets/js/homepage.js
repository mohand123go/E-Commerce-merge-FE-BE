

new fullpage('#fullpage', {


    fixedElements: '.homePageNav',




    scrollingSpeed: 1000,
    afterRender: function () {
        let landingPageTitle = document.querySelector(' .HomeProductItem--ctn h2:first-of-type ');
        console.log(landingPageTitle)
        let landingPageImage = document.querySelector(' .HomeProductItem--ctn  img:first-of-type ');
        const tl = new TimelineMax({ delay: 0.5 })
        tl.fromTo(landingPageImage, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })
        tl.fromTo(landingPageTitle, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })

    },
    onLeave: function (origin, destination, direction) {
        const section = destination.item;
        const title = section.querySelector('h2')
        const shoe = section.querySelector('img')

        const tl = new TimelineMax({ delay: 0.5 })
        tl.fromTo(shoe, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })
        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })


    },




})

let title = document.querySelector('title')
if (title.textContent == 'Home - online shop') {
    const humburguer = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.homePageNav--nav-links')
    const links = document.querySelectorAll('.homPageNave--list-item')
    const hamburger_line = document.querySelectorAll('.hamburger-line')
    const homePage_cart_icon = document.querySelector('.homePage-cart-icon')


    humburguer.addEventListener('click', () => {
        navLinks.classList.toggle('open')

        hamburger_line.forEach(bar => {
            bar.classList.toggle('hamburger-lineIconColorBlack')
            bar.classList.toggle('hamburger-lineIconColorWhite')

        })
        homePage_cart_icon.classList.toggle('homePage-cart-icon-colorWhite')

        homePage_cart_icon.classList.toggle('homePage-cart-icon-colorBlack')


        links.forEach(link => {
            link.classList.toggle('fade')
        })
    })
}



let checkmark = document.querySelectorAll('.theRealcheckmark')
let shoes = document.querySelectorAll('.productImageInProductUi')
let image_name = document.querySelectorAll('.image_name_hidden_input')



for (let i = 0; i < checkmark.length; i++) {
    checkmark[i].addEventListener("change", () => {


        for (let j = 0; j < products.length; j++) {

            for (let k = 0; k < products[j].imageAndColor.length; k++)

                if (products[j].imageAndColor[k]._id == checkmark[i].nextElementSibling.nextElementSibling.value) {

                    const t3 = new TimelineMax()
                    t3.fromTo(shoes[j], 0.5, { opacity: 0 }, { opacity: 1, clearProps: "all" })


                    shoes[j].src = products[j].imageAndColor[k].image_name
                    image_name[j].value = products[j].imageAndColor[k].image_name
                }
        }
    })
}
