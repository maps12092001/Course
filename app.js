const btn = document.getElementById('header-menu');
const menu = document.getElementById('header-dropdown');
const body = document.getElementById('home');

btn.addEventListener('click', () => {
    menu.classList.toggle('header-dropdown-open');
    body.classList.toggle('home-noscroll');
})




