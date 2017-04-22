'use strict';

// show languages on click
function showLanguages() {
    document.getElementById('dropdown').classList.toggle("show");
};

// hide languages when clicking anywhere else
window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        let dropdown = document.getElementsByClassName("languages");
        if (dropdown[0].classList.contains('show')) {
            dropdown[0].classList.remove('show');
        }
    }
};

// scroll through content
let slide = 1;

function scrollContent(n) {
    let content = document.getElementsByClassName('scroll-content');
    let dots = document.getElementsByClassName('dots');
    if (n > content.length) {
        slide = 1;
    }
    if (n < 1) {
        slide = content.length;
    }
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
        // content[i].classList.toggle('fadeIn-animation');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" bright-dot", "");
    }
    content[slide - 1].style.display = "block";
    dots[slide - 1].className += " bright-dot";
}

scrollContent(slide);

function countContent(n) {
    scrollContent(slide += n);
}

function currentContent(n) {
    scrollContent(slide = n)
}

// rotate menu icon and show sign-up/in options on mobile
function userOptions() {
    document.getElementById('menu-icon').classList.toggle('rotate-icon');
    let buttons = document.getElementsByClassName('log-in');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('show-buttons');
    }
};
