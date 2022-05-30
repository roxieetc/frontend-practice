// Get the elements
const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle the navbar menu on click
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle('nav-background');
    menu.classList.toggle('nav-toggle');
})