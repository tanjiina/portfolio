const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const lines = document.querySelectorAll('.hamburger div.line');

let navheight = 0;
const getWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        navheight = document.getElementById('nav').offsetHeight
    }
    return navheight;
}
// const navheight = document.getElementById('nav').offsetHeight;

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
    offset: getWidth,
    updateURL: false
});