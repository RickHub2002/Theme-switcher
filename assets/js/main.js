const checkbox = document.querySelector('#checkbox');
const header = document.querySelector('#header-element');
const headerTitle = document.querySelector('#header-title');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    headerTitle.classList.toggle('dark');
});