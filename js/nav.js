const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const lines = document.querySelectorAll('.hamburger div.line');
const navheight = document.getElementById('nav').offsetHeight;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    lines.forEach(line => {
        line.classList.toggle('open-line');
    })
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        lines.forEach(line => {
            line.classList.remove('open-line');
        })
    })
})

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    updateURL: false
});