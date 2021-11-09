import { initializeApp } from "firebase/app"
import {
    getFirestore, collection, getDocs,
    addDoc
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDz0CpxLetmd5hNButi9sJnEsoIcje3eQs",
    authDomain: "nakecodeback-284fc.firebaseapp.com",
    projectId: "nakecodeback-284fc",
    storageBucket: "nakecodeback-284fc.appspot.com",
    messagingSenderId: "391381322879",
    appId: "1:391381322879:web:7b60920890f1d6f556834a"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, "contacts")

// get collection data

getDocs(colRef)
    .then((snapshot) => {
        let contacts = []
        snapshot.docs.forEach((doc) => {
            contacts.push({ ...doc.data(), id: doc.id})
        })
    })
    .catch(err => {
        console.log(err.message)
    })





// change footer form to sent email
const formFooter = document.getElementById("formFooter")
const mailSentFooter = document.getElementById("mailSentFooter")

function emailSentFooter(){
    formFooter.style.display = "none"
    mailSentFooter.style.display = "block"
}

// Modal Contact Form

const modalMail = document.getElementById("modalMail")
const mailSent = document.getElementById("mailSent")

function emailSent(){
  modalMail.style.display = "none"
  mailSent.style.display = "block"
}


// adding documents

// FOOTER CONTACT FORM
const addContactForm = document.querySelector(".add")
addContactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    addDoc(colRef, {
        to: "info@nakecode.com",
        message: {
            subject: "new contact request from nakecode.com",
            html: `name: ${addContactForm.name.value} email: ${addContactForm.email.value} message: ${addContactForm.message.value}`
        }
    })
    .then(() => {
        emailSentFooter()
        addContactForm.reset()
    })

})

// MODAL CONTACT FORM
const addContactModal = document.getElementById("modalContact")

addContactModal.addEventListener("submit", (e) => {
    e.preventDefault()

    addDoc(colRef, {
        to: "info@nakecode.com",
        message: {
            subject: "new contact request from nakecode.com",
            html: `name: ${addContactModal.name.value} email: ${addContactModal.email.value} message: ${addContactModal.message.value}`
        }
    })
    .then(() => {
        addContactModal.reset()
        emailSent()
    })
})