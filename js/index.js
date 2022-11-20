const menubar = document.querySelector('.nav-mobile-popup');
const closebtn = document.querySelector('.close-popup');
const menuLink = document.querySelector('.menu-link');

menuLink.addEventListener('click', () => {
  menubar.style.display = 'flex';
});

closebtn.addEventListener('click', () => {
  menubar.style.display = 'none';
});