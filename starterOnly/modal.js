function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById("close"); // ajouté 
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
