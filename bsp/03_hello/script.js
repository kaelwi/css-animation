const button = document.getElementById('start');
const div = document.getElementById('cont-1');

button.addEventListener('click', welcome);

function welcome() {
    div.classList.toggle('hello');
}