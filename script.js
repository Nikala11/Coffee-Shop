// Search
let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Navbar
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// When scrolling down, hide search input/hamburger menu
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Change Navbar bg-color, when scrolling down
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    header.classList.toggle('shadow', window.scrollY > 0);
});