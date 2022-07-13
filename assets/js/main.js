const menuButton = document.querySelector('.toggle-menu');
const menuMobile = document.querySelector('.navigation-menu-list');
const colorReverseLogo = document.querySelector('.site-logo-link');
const colorReverseMenu = document.querySelector('.toggle-menu-line');
let menuActive = false;
let accordionActive = false;
var scrollDirection = 0;
var windowWidth = window.innerWidth;

menuButton.addEventListener('click', () => {
    if (!menuActive) {
        addClass();
    }
    else {
        removeClass();
    }
});

window.addEventListener('scroll', function() {
    if ((document.body.getBoundingClientRect()).top < scrollDirection) {
        if (menuActive) {
            removeClass();
        }
    }
    scrollDirection = (document.body.getBoundingClientRect()).top;
});

window.addEventListener('resize', function() {
    if (menuActive) {
        if (windowWidth < 900) {
            removeClass();
        }
    }
});

function addClass() {
    menuButton.classList.add('active');
    menuMobile.classList.add('open');
    colorReverseLogo.classList.add('color-reverse');
    colorReverseMenu.classList.add('color-reverse');
    menuActive = true;
}

function removeClass() {
    menuButton.classList.remove('active');
    menuMobile.classList.remove('open');
    colorReverseLogo.classList.remove('color-reverse');
    colorReverseMenu.classList.remove('color-reverse');
    menuActive = false;
}

let accordion = document.getElementsByClassName('question-container');;
var acc = document.getElementsByClassName("question-title");

for (let click = 0; click < accordion.length; click++) {
    accordion[click].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}