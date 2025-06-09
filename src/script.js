const menuHamburger = document.getElementById('menu-hamburger')
const menuClose = document.querySelectorAll('#menu-close, .blur-background')
const navBar = document.querySelector('.navbar')
const blurBackground = document.querySelector('.blur-background')
const cart = document.getElementById('cart')
const modal = document.querySelector('.modal-box')
const previousArrow = document.getElementById('previous-arrow')
const nextArrow = document.getElementById('next-arrow')

menuHamburger.addEventListener('click', () => {
    navBar.classList.add('on-screen')
    blurBackground.classList.remove('hidden')
})

menuClose.forEach((element) => {
    element.addEventListener('click', () => {
        navBar.classList.remove('on-screen')
        blurBackground.classList.add('hidden')
    })
})

cart.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

nextArrow.addEventListener('click', () => {
    const imgContainer = document.querySelector('.img-container')
    let imageWidth = document.querySelector('.img-container__element').clientWidth
    imgContainer.scrollLeft += imageWidth
})

previousArrow.addEventListener('click', () => {
    const imgContainer = document.querySelector('.img-container')
    let imageWidth = document.querySelector('.img-container__element').clientWidth
    imgContainer.scrollLeft -= imageWidth
})
