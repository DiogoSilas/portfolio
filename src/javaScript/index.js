function mobileMenu() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icone').src = "src/images/icone-menu-hamburguer.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icone').src = "src/images/icone-menu-x.png"
    }
}