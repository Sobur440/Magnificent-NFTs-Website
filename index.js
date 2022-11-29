const nav = document.querySelector(".nav-bar")
const hamburger = document.querySelector('.hamburger')
const links = document.querySelector('.links')
const backdrop = document.querySelector('.backdrop')
const homeNav = document.querySelector('#home-navigator')
const itemsNav = document.querySelector('#items-navigator')
const creatorsNav = document.querySelector('#creators-navigator')
const exploreNav = document.querySelector('#explore-navigator')
const blogNav = document.querySelector('#blog-navigator')
const backToTop = document.querySelector('.back-to-top')


window.addEventListener("scroll", () => {
    let scrolled = window.scrollY
     console.log(scrolled)
    if (scrolled >= 90) {
        nav.style.background = '#202443'
        nav.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0.3)'
    } else if (scrolled < 90) {
        nav.style.background = 'transparent'
        nav.style.boxShadow = '0px 0px 4px rgba(0, 0, 0, 0)'
    }

    if (scrolled >= 1100) {
        backToTop.style.bottom = "3%"
    } else {
        backToTop.style.bottom = "-100%"
    }
})



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
    backdrop.classList.toggle('active')
})

backdrop.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})

homeNav.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})
itemsNav.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})
creatorsNav.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})
exploreNav.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})
blogNav.addEventListener('click', () => {
    hamburger.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})


  
