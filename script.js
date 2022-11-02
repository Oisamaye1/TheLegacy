const bar = document.getElementById('bar');
const navItem = document.getElementById('nav-item-right');
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        navItem.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navItem.classList.remove('active');
    })
}