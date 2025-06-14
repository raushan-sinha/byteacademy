'use strict';

const navLinks = document.querySelector('.nav-links');
const hamburgerIcon = document.querySelector('.hamburger');

//todo: NavLinks open after clicked hamburger icon -
hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
})