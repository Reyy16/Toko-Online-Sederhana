let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let btnClose = document.querySelector('.btn-close');

hamburger.addEventListener('click', () => {
    nav.classList.add('active');
    btnClose.classList.add('active');
})

btnClose.addEventListener('click', () => {
    nav.classList.remove('active');
    btnClose.classList.remove('active');
})