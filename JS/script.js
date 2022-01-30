(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 40) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }

}());

// Burger header

(function () {
    const BurgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    BurgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    } )
}()); 


