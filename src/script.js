const menuHamburger = document.getElementById('menu-hamburger')
const menuClose = document.getElementById('menu-close')
const navBar = document.querySelector('.navbar')
const blurBackground = document.querySelector('.blur-background')
const cart = document.getElementById('cart')
const modal = document.querySelector('.modal-box')
const previousArrow = document.getElementById('previous-arrow')
const nextArrow = document.getElementById('next-arrow')

menuHamburger.addEventListener('click', (e) => {
    navBar.classList.add('on-screen')
    blurBackground.classList.remove('hidden')
})

menuClose.addEventListener('click', (e) => {
    navBar.classList.remove('on-screen')
    blurBackground.classList.add('hidden')
})

cart.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})
