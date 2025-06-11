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

// For all mini images
miniImages.forEach((image) => {
    // When one is clicked
    image.addEventListener('click', (e) => {
        // those who are not clicked are disabled
        miniImages.forEach((image) => image.classList.remove('is-active'))
        // And if the one who is clicked is not already activated
        if (!('is-active' in image.classList)) {
            // activate it
            image.classList.add('is-active')
            source.srcset = e.target.src
        }
    })
})
// Same process for the light box images
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
// For the light box, if the next arrow of the light box is clicked
nextAsideArrow.addEventListener('click', () => {
    // go to the next image index and show it
    i = i >= (asideMiniImages.length - 1) ? (asideMiniImages.length - 1) : i + 1;
    showAsideImage(i)
})
// but if it's the previous arrow that's clicked
previousAsideArrow.addEventListener('click', () => {
    // go to the previous image index and show it
    i = i <= 0 ? 0 : i - 1;
    showAsideImage(i)
})

// Same process here, but it's for the mobile images container
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

// if the maxi image of the desktop layout is clicked
maxiImage.addEventListener('click', () => {
    // show the light box and add the blur background
    blurBackground.classList.remove('hidden')
    asideContainer.classList.remove('hidden')
})
// for the desktop light box if the blur background is clicked
blurBackground.addEventListener('click', () => {
    // hide the light box
    asideContainer.classList.add('hidden')
})

// for mobile media if the menu hamburger icon is clicked
menuHamburger.addEventListener('click', () => {
    // show the mobile menu and add the blur background
    navBar.classList.add('on-screen')
    blurBackground.classList.remove('hidden')
})

// for mobile media if the menu close icon is clicked
menuClose.forEach((element) => {
    element.addEventListener('click', () => {
        // hide the mobile menu and add the blur background
        navBar.classList.remove('on-screen')
        blurBackground.classList.add('hidden')
    })
})

// if the cart icon is clicked show or hide the cart modal box
cart.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})
// but if the cart modal box is visible and the user click on the body hide it
document.body.addEventListener('click', (e) => {
    if (!modal.classList.contains('hidden') && !modal.contains(e.target) &&!cart.contains(e.target) && !btnAddToCart.contains(e.target)) {
        modal.classList.add('hidden');
    }
});


let count = 0
// if the plus button is clicked increment of 1 the count and show it in the button
btnAddArticle.addEventListener('click', () => {
    count++; countArticle.innerText = count;
})
// but if the minus button is clicked decrement of 1 the count and show it in the button
btnRemoveArticle.addEventListener('click', () => {
    count = (count <= 0) ? 0 : count - 1;
    countArticle.innerText = count
})

// listener for the add to cart button
btnAddToCart.addEventListener('click', () => {
    // if the count of articles added to the cart is superior to 0
    if (count > 0) {
        // show the count in the cart modal box and calculate the total price
        addToCart(count)
        // then, scroll to the top of the page to let the user see the articles added
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        // and then, show the bubble on the cart icon and add the count of articles added
        modal.classList.remove('hidden')
        bubble.classList.remove('hidden')
        bubble.textContent = count
    }
})

// if the trash icon is clicked
btnDeleteArticle.addEventListener('click', () => {
    // remove the articles from the cart
    removeFromCart()
    // and hide the bubble
    bubble.classList.add('hidden')
})

//  but if the user click on the checkout button to purchase the articles
btnBuyArticle.addEventListener('click', () => {
    // empty the articles from the cart
    removeFromCart()
    // hide the bubble
    bubble.classList.add('hidden')
    // show a confirmation message of the purchase
    alert('Purchase completed !!')
    //  and then hide the cart modal box
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