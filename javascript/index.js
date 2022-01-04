// NAVBAR

const openNav = document.getElementById("hamburger")

const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

const menu = document.getElementById("menu")


openNav.addEventListener("click", () => closeMenu())

function closeMenu(){
  menu.classList.toggle("hide")

  line1.classList.toggle("line1Close")
  line2.classList.toggle("line2Close")
  line3.classList.toggle("line3Close")
}


// CLOSING MENU ON CLICKS

menu.addEventListener("click", function(e){
  if(e.target.matches("a")){
    closeMenu()
  }
})

// NAVBAR END

// PORTFOLIO SPLIDE

var splide = new Splide( '.splide', {
    perPage: 4,
    breakpoints: {
        
    600:{
        perPage: 1,
    },
    900:{
    perPage: 2,
    },
    1200: {
    perPage: 3
    }
    
    }
  
  } )
  splide.mount();

// PORTFOLIO SPLIDE END

// SCROLLTRIGGER ANIMATIONS

// HEADER ANIMATION

// const showAnim = gsap.from('nav', { 
//   yPercent: -100,
//   paused: true,
//   duration: 0.2
// }).progress(1);

// ScrollTrigger.create({
//   start: "top top",
//   end: 99999,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
//   }
// });

// HEROBOX ANIMATION

gsap.to("#moco-verde-1", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  // ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

gsap.to(".herobox-image-1", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  // ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

gsap.to(".herobox-image-2", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  // ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

// SERVICES ANIMATION

const servicesAnim1 = gsap.fromTo(".services-card-1 img", {autoAlpha: 0, y:48}, {duration: 1, autoAlpha: 1, y:0});
  ScrollTrigger.create({
    trigger: ".services-card-1 img",
    start: "top bottom-=48px",
    animation: servicesAnim1,
    toggleActions: 'play none none none',
    once: true,
});

const servicesAnim2 = gsap.fromTo(".services-card-2 img", {autoAlpha: 0, y:48}, {duration: 1, autoAlpha: 1, y:0});
  ScrollTrigger.create({
    trigger: ".services-card-2 img",
    start: "top bottom-=48px",
    animation: servicesAnim2,
    toggleActions: 'play none none none',
    once: true,
});

const servicesAnim3 = gsap.fromTo(".services-card-3 img", {autoAlpha: 0, y:48}, {duration: 1, autoAlpha: 1, y:0});
  ScrollTrigger.create({
    trigger: ".services-card-3 img",
    start: "top bottom-=48px",
    animation: servicesAnim3,
    toggleActions: 'play none none none',
    once: true,
});

// ABOUT ANIMATION

const aboutAnim1 = gsap.fromTo(".about-image-1", {autoAlpha: 0, x:96}, {duration: 1, autoAlpha: 1, x:0});
  ScrollTrigger.create({
    trigger: ".about-image-1",
    start: "center bottom",
    animation: aboutAnim1,
    toggleActions: 'play none none none',
    once: true,
});

const aboutAnim2 = gsap.fromTo(".about-image-2", {autoAlpha: 0, x:96}, {duration: 1, autoAlpha: 1, x:0});
  ScrollTrigger.create({
    trigger: ".about-image-2",
    start: "bottom bottom",
    animation: aboutAnim2,
    toggleActions: 'play none none none',
    once: true,
});

const aboutAnim3 = gsap.fromTo(".about-image-3", {autoAlpha: 0, x:96}, {duration: 1, autoAlpha: 1, x:0});
  ScrollTrigger.create({
    trigger: ".about-image-3",
    start: "bottom bottom",
    animation: aboutAnim3,
    toggleActions: 'play none none none',
    once: true,
});

gsap.to("#moco-verde-2", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,

  scrollTrigger: {
    trigger: "#moco-verde-2",
    start: "top bottom",
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

// FAQ ANIMATION

gsap.to("#moco-verde-3", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,

  scrollTrigger: {
    trigger: "#moco-verde-3",
    start: "top bottom",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

// CONTACT ANIMATION

gsap.to("#moco-verde-4", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,

  scrollTrigger: {
    trigger: "#moco-verde-4",
    start: "top bottom",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

gsap.to("#moco-verde-5", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,

  scrollTrigger: {
    trigger: "#moco-verde-5",
    start: "top bottom",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

gsap.to("#astronaut", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,

  scrollTrigger: {
    trigger: "#astronaut",
    start: "top bottom",
    end: "bottom top",
    invalidateOnRefresh: true,
    scrub: 0.5
  }
});

// SCROLLTRIGGER ANIMATIONS END

