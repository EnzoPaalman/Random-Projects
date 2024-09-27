const button = document.getElementById('js--menuButton');

const nav = document.getElementById('js--nav');

const body = document.getElementById('js--body');

button.onclick = function() {
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
    body.style.overflow = 'hidden';
}