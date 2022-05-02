// NAVBAR
const openNav = document.getElementById("hamburger")
const lines = document.querySelectorAll(".hamburger div")
const menu = document.getElementById("menu")

openNav.addEventListener("click", () => closeMenu())

function closeMenu(){
  menu.classList.toggle("hide")
  lines[0].classList.toggle("line1Close")
  lines[1].classList.toggle("line2Close")
  lines[2].classList.toggle("line3Close")
}


// CLOSING MENU ON CLICKS
menu.addEventListener("click", (e) => {
  if(e.target = ("a") || e.target.matches("button")){
    closeMenu()
  }
  // Ejemplo de uso de target = y target.matches
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



// MAIL MODAL

const modalMail = document.getElementById("modalMail")
const mailSent = document.getElementById("mailSent")
const addModal = document.getElementById("modalContact")

function modalSent(){
  modalMail.style.display = "none"
  mailSent.style.display = "block"
}

// tiene que correr despues de el link JSmail
setTimeout(() => {
  emailjs.init("tBXBXWfxsqMqZYmOg");
}, 500)

addModal.addEventListener("submit", (e) => {
  e.preventDefault()

  const modalData = {
    name: addModal.name.value,
    email: addModal.email.value,
    website: addModal.website.value,
    message: addModal.message.value
  }

  emailjs.send("service_is7siqj", "template_ntqf91l", modalData)
  .then((res) => {
      console.log("SUCCESS", res.status, res.text),
      modalSent()
  }).catch((err) => {
      console.log(err)
  })

})


// CONTACT FORM
const contactForm = document.getElementById("contactForm")
const mailSentContactForm = document.getElementById("mailSentForm")


function emailSentFooter(){
    contactForm.style.display = "none"
    mailSentContactForm.style.display = "block"
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const contactFormData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    website: contactForm.website.value,
    message: contactForm.message.value
  }

  emailjs.send("service_is7siqj", "template_ntqf91l", contactFormData)
  .then((res) => {
      console.log("SUCCESS", res.status, res.text),
      emailSentFooter()
  }).catch((err) => {
      console.log(err)
  })
})


