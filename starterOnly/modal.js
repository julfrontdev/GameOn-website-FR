function editNav() {
  var x = document.getElementById("myTopnav"); // var ou let ? 
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // type = tableau
const formData = document.querySelectorAll(".formData"); // ...All pour sélectionner un ou plusieurs éléments
const closeModalBtn = document.getElementById("close"); // ajouté // sélectionne un ID ; l'ID est renseigné sans le #
// console.log(closeModalBtn); // mon réflexe


// EVENTS

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event 
closeModalBtn.addEventListener("click", closeModal); // ajouté


// FUNCTIONS

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() { // ajouté
  modalbg.style.display = "none";
}

