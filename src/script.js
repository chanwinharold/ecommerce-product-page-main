// menu elements
const menuHamburger = document.getElementById('menu-hamburger')
const menuClose = document.querySelectorAll('#menu-close, .blur-background')
const navBar = document.querySelector('.navbar')
const blurBackground = document.querySelector('.blur-background')

// modal elements
const cart = document.getElementById('cart')
const modal = document.querySelector('.modal-box')
const modalContent = document.querySelectorAll('#modal-content article, #modal-content button')
const modalEmpty = document.querySelector("#modal-content .empty-modal")
const modalTotalPrice = document.querySelector('#modal-content p[data-calc="total-price"]')
const bubble = document.querySelector('.bubble')

// arrow for images scroll
const previousArrow = document.querySelector('.previous-arrow')
const nextArrow = document.querySelector('.next-arrow')
const previousAsideArrow = document.querySelector('.aside-previous-arrow')
const nextAsideArrow = document.querySelector('.aside-next-arrow')

// buttons
const countArticle = document.querySelector("span[data-item='count']")
const btnAddArticle = document.getElementById('plus')
const btnRemoveArticle = document.getElementById('minus')
const btnAddToCart = document.getElementById("add-to-cart")
const btnDeleteArticle = document.getElementById('delete')
const btnBuyArticle = document.querySelector('.checkout')

// focusable and activable images
const maxiImage = document.querySelector('.img-container picture img')
const miniImages = document.querySelectorAll('.img-container__element')
const source = document.querySelector('.preview-src')

// Aside elements
const asideContainer = document.querySelector('aside')
const asideMiniImages = document.querySelectorAll('.aside-image')
const asideSource = document.querySelector('aside source')



// Event Listeners
miniImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        miniImages.forEach((image) => image.classList.remove('is-active'))
        if (!('is-active' in image.classList)) {
            image.classList.add('is-active')
            source.srcset = e.target.src
        }
    })
})
asideMiniImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        asideMiniImages.forEach((image) => image.classList.remove('is-active'))
        if (!('is-active' in image.classList)) {
            image.classList.add('is-active')
            asideSource.srcset = e.target.src
            i = parseInt(e.target.id)
        }
    })
})

let i = 0
nextAsideArrow.addEventListener('click', () => {
    i = i >= (asideMiniImages.length - 1) ? (asideMiniImages.length - 1) : i + 1;
    showAsideImage(i)
})
previousAsideArrow.addEventListener('click', () => {
    i = i <= 0 ? 0 : i - 1;
    showAsideImage(i)
})

maxiImage.addEventListener('click', (e) => {
    blurBackground.classList.remove('hidden')
    asideContainer.classList.remove('hidden')
})
blurBackground.addEventListener('click', (e) => {
    asideContainer.classList.add('hidden')
})

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

let count = 0

btnAddArticle.addEventListener('click', () => {
    count++; countArticle.innerText = count;
})
btnRemoveArticle.addEventListener('click', () => {
    count = (count <= 0) ? 0 : count - 1;
    countArticle.innerText = count
})

btnAddToCart.addEventListener('click', () => {
    if (count > 0) {
        addToCart(count)
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        modal.classList.remove('hidden')
        bubble.classList.remove('hidden')
        bubble.textContent = count
    }
})

btnDeleteArticle.addEventListener('click', () => {
    removeFromCart()
    bubble.classList.add('hidden')
})

btnBuyArticle.addEventListener('click', () => {
    removeFromCart()
    bubble.classList.add('hidden')
    alert('Purchase completed !!')
    modal.classList.add('hidden')
})


// Functions
function addToCart(number) {
    modalEmpty.classList.add('hidden')
    modalContent.forEach((element) => element.classList.remove('hidden'))
    modalTotalPrice.innerHTML = `$125 x ${number} = <span>$${(number * 125).toFixed(2)}</span>`
}

function removeFromCart() {
    modalEmpty.classList.remove('hidden')
    modalContent.forEach((element) => element.classList.add('hidden'))
    modalTotalPrice.innerHTML = ""
    count = 0; countArticle.innerText = count;
}

function showAsideImage(index) {
    asideMiniImages.forEach((image) => image.classList.remove('is-active'))
    if (!('is-active' in asideMiniImages[index].classList)) {
        asideMiniImages[index].classList.add('is-active')
        asideSource.srcset = asideMiniImages[index].src
    }
}