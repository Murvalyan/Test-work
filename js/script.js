const body = document.querySelector('body')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.navigation')

burger.addEventListener('click', () => {
    burger.classList.toggle('_active')
    body.classList.toggle('_lock')
    menu.classList.toggle('_active')
})