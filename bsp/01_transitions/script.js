const div = document.getElementById('onevent');

div.addEventListener('click', () => {
    let bg = window.getComputedStyle(div).getPropertyValue('background-color');
    div.style.backgroundColor = bg == 'rgb(255, 0, 0)' ? 'black' : 'red';
})