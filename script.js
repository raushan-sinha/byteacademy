'use strict';

// Mobile menu toggle
const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navLinks');
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Navbar Buttons 'Enroll' & 'Login' open page
const navBtnsLinks = [
    'enrollPage.html',
    'loginPage.html'
];

document.querySelectorAll('.btn-enroll, .btn-login').forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(navBtnsLinks[idx], '_blank');
    });
});