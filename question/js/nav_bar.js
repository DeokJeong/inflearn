const toggleBtn = document.querySelector(".navbar_togglebtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

//nav_bar.js:5 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
