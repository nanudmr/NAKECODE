// import { initializeApp } from "firebase/app"

// import {
//     getFirestore, collection, addDoc
// } from "firebase/firestore"

// const firebaseConfig = {
//     apiKey: "AIzaSyA_1tEzVUtxYaRfvDpwVRQQSVuaVtTG7f8",
//     authDomain: "nakecodev2.firebaseapp.com",
//     projectId: "nakecodev2",
//     storageBucket: "nakecodev2.appspot.com",
//     messagingSenderId: "1030841114629",
//     appId: "1:1030841114629:web:6eb21bf9af852c309efc6c"
//   };


// // init firebase app
// initializeApp(firebaseConfig)

// // init services
// const db = getFirestore()

// // collection ref
// const colRef = collection(db, "contacts")

// Modal Contact Form

// const modalMail = document.getElementById("modalMail")
// const mailSent = document.getElementById("mailSent")

// function emailSent(){
//     modalMail.style.display = "none"
//     mailSent.style.display = "block"
// }

// // MODAL CONTACT INFO

// const addModal = document.getElementById("modalContact")

// addModal.addEventListener("submit", (e) => {
//     e.preventDefault()

//     addDoc(colRef, {
//         to: "info@nakecode.com",
//         message: {
//             subject: "new contact request nakecode.com",
//             html: 
//             `name: ${addModal.name.value}
//             mail: ${addModal.email.value}
//             currentWeb: ${addModal.website.value} 
//             message: ${addModal.message.value}`
//         }
        
//     })
//     .then(() => {
//         addModal.reset()
//         emailSent()
//     })
// })

// CONTACT FORM
// const contactForm = document.getElementById("contactForm")
// const mailSentContactForm = document.getElementById("mailSentForm")


// function emailSentFooter(){
//     contactForm.style.display = "none"
//     mailSentContactForm.style.display = "block"
// }

// const addContact = document.getElementById("contactForm")

// addContact.addEventListener("submit", (e) => {
//     e.preventDefault()

//     addDoc(colRef, {
//         to: "info@nakecode.com",
//         message: {
//             subject: "new contact request nakecode.com",
//             html:
//             `name: ${addContact.name.value}
//             mail: ${addContact.email.value}
//             currentWeb: ${addContact.website.value} 
//             message: ${addContact.message.value}`
//         }
//     })
//     .then(() => {
//         emailSentFooter()
//         addContact.reset()
//     })
// })
