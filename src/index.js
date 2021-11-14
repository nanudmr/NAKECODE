
// MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU 

const menuOpener = document.getElementById("openMenu")

const menuCloser = document.getElementById("closeMenu")

const menu = document.getElementById("menu")

menuOpener.addEventListener("click", function(){
    menu.style.display = "block"
    menuOpener.style.display = "none"
    menuCloser.style.display = "block"
})

menuCloser.addEventListener("click", function(){
    menu.style.display = "none"
    menuOpener.style.display = "block"
    menuCloser.style.display = "none"
})

// MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU 




// CAROUSEL CAROUSEL CAROUSEL CAROUSEL CAROUSEL 

var splide = new Splide( '.splide', {
  perPage: 4,
  breakpoints: {
    640:{
      perPage: 1,
    },
    1024: {
      perPage: 3
    }
  }

} )
splide.mount();

// MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL 




// GSAP  GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP 

// ABOUT SECTION ABOUT SECTION ABOUT SECTION 

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".primeraImg",
    start: "top bottom"
  }
})

tl.from(".primeraImg", {
  x:200,
  opacity:0,
  duration: 1
})
tl.from(".segundaImg",{
  x:200,
  opacity:0,
  duration: 1
})
tl.from(".terceraImg", {
  x:200,
  opacity:0,
  duration:1
})