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

/**
 * Check quantity
 */

  else if (entreeQuantity.length === 0) { // pas d'entrée indiquée * à revoir * ne fonctionne pas **
    errorQuantity.innerText = "Le champ est vide";
    errorQuantity.classList.add("error-color");
    console.log("quantity not entered"); // OK
  } 

/**
 * Check location of a future tournament and add error if no value
 */

 function validateLocation() { 
  let checkRadio = document.querySelector(
      'input[name="location"]:checked');
    
  if(checkRadio != null) {
      document.getElementById("error_location").innerHTML
          = checkRadio.value
          + " radio button checked"; // rien
          console.log("checked"); // rien
  }
  else {
      document.getElementById("error_location").innerHTML
          = "No one selected"; // rien
          console.log("not checked"); // rien
  }
}


// sinon 

const validateLocation = (errorId, change) => {

const errorLocation = document.getElementById(errorId); 
const entreeLocation = document.querySelector(locations).value;

 const location1 = document.getElementById("location1");
 const location2 = document.getElementById("location2");
 const location3 = document.getElementById("location3");
 const location4 = document.getElementById("location4");
 const location5 = document.getElementById("location5");
 const location6 = document.getElementById("location6"); 

 const locations = [
   location1,
   location2,
   location3,
   location4,
   location5,
   location6,
 ];

 for (i = 0; i < locations.length; i++) {
   if (locations[i].checked) break; 
   return true; 
   console.log(locations[i].value);
 } else { // problème 
  errorLocation.innerText = "Oups, veuillez indiquer un lieu";
  errorLocation.classList.add("error-color");
  return false; 
  console.log("Location not matched"); // pas de message d'erreur 
 }
}

 form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLocation("error_location", "locations");
});

/**
 * Check terms and add error if no check
 */