
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

var splide = new Splide( '.splide' );

splide.mount();


function carouselShow(x) {
  if (x.matches) { 
    let splide = new Splide( '.splide' );
    splide.mount();
  } else {
    let splide = new Splide( '.splide', {
      perPage: 3,
      rewind : true,
    } );
    
    splide.mount();
  }
}

let space = window.matchMedia("(max-width: 809px)")
carouselShow(space)
space.addListener(carouselShow)



// CAROUSEL CAROUSEL CAROUSEL CAROUSEL CAROUSEL 




// FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 



// MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL 

const modalMail = document.getElementById("modalMail")
const mailSent = document.getElementById("mailSent")

function emailSent(){
  modalMail.style.display = "none"
  mailSent.style.display = "block"
}

// MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL 

// FOOTER MAIL FOOTER MAIL FOOTER MAIL FOOTER MAIL


const formFooter = document.getElementById("formFooter")
const mailSentFooter = document.getElementById("mailSentFooter")

function emailSentFooter(){
  formFooter.style.display = "none"
  mailSentFooter.style.display = "block"
}

// FOOTER MAIL FOOTER MAIL FOOTER MAIL FOOTER MAIL


// GSAP  GSAP GSAP GSAP GSAP GSAP GSAP GSAP GSAP 

// gsap.from(".primeraImg",{
//   scrollTrigger: {
//     trigger: ".primeraImg",
//     start: "center bottom"
//   },
//   x: 200,
//   duration: 2
// })
// gsap.from(".segundaImg",{
//   scrollTrigger: {
//     trigger: ".segundaImg",
//     start: "center bottom"
//   },
//   x: 200,
//   duration: 2
// })
// gsap.from(".terceraImg",{
//   scrollTrigger: {
//     trigger: ".terceraImg",
//     start: "center bottom"
//   },
//   x: 200,
//   duration: 2
// })

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

