
const scrollButton = document.getElementById('scrollButton');

function toogleButton() {
    if (window.scrollY >= document.documentElement.scrollHeight / 2) {
        scrollButton.classList.add('show-button');
    } else {
        scrollButton.classList.remove('show-button');
    }
}

window.addEventListener('scroll', toogleButton);

var videoPresentacion = document.getElementById("videoPresentacion");
videoPresentacion.autoplay = true;