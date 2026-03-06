let menuOpenBtn = document.querySelector('.main-nav .fa-bars');
let closeMenuBtn = document.querySelector('.nav-bar .fa-xmark');
let navList = document.querySelector('.nav-list');

menuOpenBtn.addEventListener('click', () => {
    navList.style.left = '0';
});

closeMenuBtn.addEventListener('click', () => {
    navList.style.left = '-100%';
});