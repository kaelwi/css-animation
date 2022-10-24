const shake = document.getElementById('shake');
const exit = document.getElementById('exit');
const container = document.getElementById('container');
const red = document.getElementById('red');
const offset = document.getElementById('offset');

shake.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('shake');
});

exit.addEventListener('click', (e) => {
    e.currentTarget.classList.add('exit');
});

container.addEventListener('mouseover', scale);
container.addEventListener('mouseout', scale);
container.addEventListener('click', remove);

function scale(e) {
    if (e.target != e.currentTarget) {
        e.target.classList.toggle('scale');
    }
}

function remove(e) {
    currentTarget = e.currentTarget;
    if (e.target != e.currentTarget) {
        if (e.target != red) {
            e.target.classList.add('remove');
            setTimeout(function() {
                currentTarget.removeChild(e.target);
            }, 1000);
        } else {
            e.target.classList.add('shake');
            setTimeout(function() {
                e.target.classList.remove('shake');
            }, 1000);
        }
    }
}

offset.addEventListener('click', (e) => {
    e.target.classList.add('path');
    setTimeout(function() {
        e.target.classList.remove('path');
    }, 6000);
})