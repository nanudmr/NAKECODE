/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascript/fire.js":
/*!***********************************!*\
  !*** ./public/javascript/fire.js ***!
  \***********************************/
/***/ (() => {

eval("// import { initializeApp } from \"firebase/app\"\n\n// import {\n//     getFirestore, collection, addDoc\n// } from \"firebase/firestore\"\n\n// const firebaseConfig = {\n//     apiKey: \"AIzaSyA_1tEzVUtxYaRfvDpwVRQQSVuaVtTG7f8\",\n//     authDomain: \"nakecodev2.firebaseapp.com\",\n//     projectId: \"nakecodev2\",\n//     storageBucket: \"nakecodev2.appspot.com\",\n//     messagingSenderId: \"1030841114629\",\n//     appId: \"1:1030841114629:web:6eb21bf9af852c309efc6c\"\n//   };\n\n\n// // init firebase app\n// initializeApp(firebaseConfig)\n\n// // init services\n// const db = getFirestore()\n\n// // collection ref\n// const colRef = collection(db, \"contacts\")\n\n// Modal Contact Form\n\n// const modalMail = document.getElementById(\"modalMail\")\n// const mailSent = document.getElementById(\"mailSent\")\n\n// function emailSent(){\n//     modalMail.style.display = \"none\"\n//     mailSent.style.display = \"block\"\n// }\n\n// // MODAL CONTACT INFO\n\n// const addModal = document.getElementById(\"modalContact\")\n\n// addModal.addEventListener(\"submit\", (e) => {\n//     e.preventDefault()\n\n//     addDoc(colRef, {\n//         to: \"info@nakecode.com\",\n//         message: {\n//             subject: \"new contact request nakecode.com\",\n//             html: \n//             `name: ${addModal.name.value}\n//             mail: ${addModal.email.value}\n//             currentWeb: ${addModal.website.value} \n//             message: ${addModal.message.value}`\n//         }\n        \n//     })\n//     .then(() => {\n//         addModal.reset()\n//         emailSent()\n//     })\n// })\n\n// CONTACT FORM\n// const contactForm = document.getElementById(\"contactForm\")\n// const mailSentContactForm = document.getElementById(\"mailSentForm\")\n\n\n// function emailSentFooter(){\n//     contactForm.style.display = \"none\"\n//     mailSentContactForm.style.display = \"block\"\n// }\n\n// const addContact = document.getElementById(\"contactForm\")\n\n// addContact.addEventListener(\"submit\", (e) => {\n//     e.preventDefault()\n\n//     addDoc(colRef, {\n//         to: \"info@nakecode.com\",\n//         message: {\n//             subject: \"new contact request nakecode.com\",\n//             html:\n//             `name: ${addContact.name.value}\n//             mail: ${addContact.email.value}\n//             currentWeb: ${addContact.website.value} \n//             message: ${addContact.message.value}`\n//         }\n//     })\n//     .then(() => {\n//         emailSentFooter()\n//         addContact.reset()\n//     })\n// })\n\n\n//# sourceURL=webpack://nakecode-kike/./public/javascript/fire.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/javascript/fire.js"]();
/******/ 	
/******/ })()
;