// Бургер

const burgerBtnClose = document.querySelector('.burger-iconClose');
const burgerBtnOpen = document.querySelector('.burger-iconOpen');
const burgerMenu = document.querySelector('.header__nav-burger');

burgerBtnOpen.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerBtnOpen.classList.toggle('active');
    burgerBtnClose.classList.toggle('active');
});

burgerBtnClose.addEventListener('click', function () {
    burgerBtnClose.classList.remove('active');
    burgerMenu.classList.remove('active');
    burgerBtnOpen.classList.remove('active');
});