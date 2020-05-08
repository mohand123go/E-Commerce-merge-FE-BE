

new fullpage('#fullpage', {


    fixedElements: '.homePageNav',




    scrollingSpeed: 700,
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
    console.log('fuck')

    humburguer.addEventListener('click', () => {
        navLinks.classList.toggle('open')
        links.forEach(link => {
            link.classList.toggle('fade')
        })
    })
}
