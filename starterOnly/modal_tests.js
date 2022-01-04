function editNav() {
  var x = document.getElementById("myTopnav"); // var ou let ?
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // type = tableau
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById("close");

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location = document.getElementById("location"); // ! à revoir !
const checkbox1 = document.getElementById("checkbox1"); // ajouter checkbox2 ?

// #1 LAUNCH AND CLOSE MODAL

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal); // ajouté

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  // ajouté
  modalbg.style.display = "none";
}

// #2 FORM DATA

// #3 ERRROR MESSAGES

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get the values of the inputs
  const firstValue = first.value.trim(); 
  const lastValue = last.value.trim(); 
  const emailValue = email.value.trim(); 
  const birthdateValue = birthdate.value.trim(); 
  const quantityValue = quantity.value .trim(); 
  const locationValue = location.value .trim(); 
  const checkbox1Value = checkbox1.value .trim(); 
}

/**
 * Check names field and add error if value length is under 2.
 */
