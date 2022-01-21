function editNav() {
  var x = document.getElementById("myTopnav"); // var
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM ELEMENTS


const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById("close");

const modalThanks = document.getElementById("thanks"); 
const closeModalThanksBtn = document.querySelector(".close-thanks-btn"); 

/**
 * Inputs 
 */ 
const firstName = document.querySelector("input[name=first]");
const lastName = document.querySelector("input[name=last]"); 
const email = document.querySelector("input[name=email]"); 
const birthdate = document.querySelector("input[name=birthdate]");
const quantity = document.querySelector("input[name=quantity]"); 
const locationRadio = document.querySelectorAll("input[type=radio]"); //
const terms = document.querySelector("input[type=checkbox]"); // 

const errorFirstName = document.getElementById("error_first"); // ajouté
const errorLastName = document.getElementById("error_last"); // ajouté
const errorEmail = document.getElementById("error_email"); // ajouté
const errorBirthdate = document.getElementById("error_birthdate"); // ajouté
const errorQuantity = document.getElementById("error_quantity"); // ajouté



// LAUNCH AND CLOSE MODAL


/**
 * Open modal 
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  modalThanks.style.display = "none"; 

  let inputs = Array.from(document.querySelectorAll(".input-validation")); // efface le contour vert des champs
  inputs.forEach((input) => input.classList.remove("input-validation"));
  
  form.style.display = "block"; // affiche le corps de la modale
}

/** 
 * Close modal with X 
 */ 
 closeModalBtn.addEventListener("click", closeModal);

 function closeModal() {
   modalbg.style.display = "none";
   errorFirstName.innerHTML = ""; // efface les messages d'erreur à la fermeture
   errorLastName.innerHTML = ""; 
   errorEmail.innerHTML = ""; 
   errorBirthdate.innerHTML = ""; 
   errorQuantity.innerHTML = ""; 
   errorLocation.innerHTML = ""; 
   errorTerms.innerHTML = ""; 
   formError.innerHTML = ""; 
   firstName.classList.remove("input-validation", "input-error"); // supprime les bordures
   lastName.classList.remove("input-validation", "input-error"); 
   email.classList.remove("input-validation", "input-error"); 
   birthdate.classList.remove("input-validation", "input-error"); 
   quantity.classList.remove("input-validation", "input-error"); 
   form.reset(); // efface le formulaire 
 }
 
 /**
*Close Thanks modal  
*/
function closeModalThanks() {
  modalThanks.style.display = "none"; 
  form.reset(); // efface le formulaire si fermé
}
closeModalThanksBtn.addEventListener("click", closeModal, closeModalThanks);



// EVENTS & ERRROR MESSAGES


const form = document.getElementById("form"); 
const formError = document.getElementById("form-error"); 
const errorClassMessage = "error-message"

/**
 * Check first name field and add error if length value < 2
 */
const isValidFirstName = (errorId, inputSelector) => { // #error_first et #first
  const errorFirstName = document.getElementById(errorId); 
  const entryFirstName = document.querySelector(inputSelector).value; 

  if (entryFirstName.length < 2) {
    firstName.classList.add("input-error"); // ajoute la bordure rouge 
    firstName.classList.remove("input-validation"); // supprime la bordure verte
    errorFirstName.innerText = "Votre prénom doit comporter au moins 2 caractères"; // message d'erreur
    errorFirstName.classList.add(errorClassMessage); // // message d'erreur, forme
    return false;
  } else {
    errorFirstName.innerHTML = ""; // efface les messages d'erreur à la fermeture
    firstName.classList.remove("input-error"); // supprime la bordure rouge
    firstName.classList.add("input-validation"); // ajoute la bordure verte
    return true; 
  }
};

/**
 * Check last name field and add error if length value < 2
 */
 const isValidLastName = (errorId, inputSelector) => { // #error_last et #last
  const errorLastName = document.getElementById(errorId); 
  const entryLastName = document.querySelector(inputSelector).value; 

  if (entryLastName.length < 2) {
    lastName.classList.add("input-error"); 
    lastName.classList.remove("input-validation"); 
    errorLastName.innerText = "Votre nom doit comporter au moins 2 caractères";
    errorLastName.classList.add(errorClassMessage);
    return false;
  } else {
    errorLastName.innerHTML = ""; 
    lastName.classList.remove("input-error"); 
    lastName.classList.add("input-validation"); 
    return true;
  }
};

/**
 * Check email validity and add error if not valid
 */
const isValidEmail = (errorId, inputSelector) => { // #error_email et #email
  const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //
  const entryEmail = document.querySelector(inputSelector).value; 

  if (emailFormatRegex.test(entryEmail)) {
    errorEmail.innerHTML = ""; 
    email.classList.remove("input-error"); 
    email.classList.add("input-validation"); 
    return true; 
  } else {
    email.classList.add("input-error");
    email.classList.remove("input-validation"); 
    errorEmail.innerText = "Le format de votre email doit être valide";
    errorEmail.classList.add(errorClassMessage);
    return false; 
  }
};

/**
 * Check birth date validity and add error if not valid
 */
 const birthDateField = document.querySelector('#birthdate');
 birthDateField.addEventListener('change', () => {
   isValidBirthdate("error_birthdate", "#birthdate");
 });

const isValidBirthdate = (errorId, inputSelector) => { // #error_birthdate et #birthdate
  const birthdateFormatRegex =
    /^\d{4}\-\d{2}\-\d{2}$/ 
  const errorBirthdate = document.getElementById(errorId); 
  const entryBirthdate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entryBirthdate)) {
    errorBirthdate.innerHTML = ""; 
    birthdate.classList.remove("input-error"); 
    birthdate.classList.add("input-validation");
    return true; 
    } else if (entryBirthdate.length === 0) { 
    birthdate.classList.add("input-error"); 
    birthdate.classList.remove("input-validation"); 
    errorBirthdate.innerText = "Le champ est vide";
    errorBirthdate.classList.add(errorClassMessage);
    return false; 
  } else {
    birthdate.classList.add("input-error"); 
    birthdate.classList.remove("input-validation"); 
    errorBirthdate.innerText =
      "Le format de votre date de naissance doit être valide"; 
    errorBirthdate.classList.add(errorClassMessage);
    return false; 
  }; 
}

/**
 * Check number of tournaments done and add error if no value
 */
const isValidQuantity = (errorId, inputSelector) => { // #error_quantity et #quantity
  const quantityFormatRegex = /^[0-9]+$/;
  const errorQuantity = document.getElementById(errorId); 
  const entryQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entryQuantity) && entryQuantity <= 99) {
    errorQuantity.innerHTML = ""; 
    quantity.classList.remove("input-error"); 
    quantity.classList.add("input-validation"); 
    return true;
  } else {
    quantity.classList.add("input-error"); 
    quantity.classList.remove("input-validation"); 
    errorQuantity.innerText = "Le nombre doit être compris entre 0 et 99";
    errorQuantity.classList.add(errorClassMessage);
    return false;
  }
};

/**
 * Check location of a future tournament and add error if not checked
 */
 const errorLocation = document.getElementById("error_location");
 
 const isValidLocation = () => {
   const allLocations = ["location1", "location2", "location3", "location4", "location5", "location6"];
   let isSomewhereSelected = false; 
   for (const location of allLocations) {
    if (document.getElementById(location).checked) {
      errorLocation.innerHTML = ""; 
      isSomewhereSelected = true; 
      return true;
    } 
  }
  if (isSomewhereSelected === false) { // if false isSomewhereSelected: no location checked
    document.getElementById("error_location").innerText =
      "Oups, veuillez indiquer une destination";
    errorLocation.classList.add(errorClassMessage);
    return false;
  }
};

/**
 * Check terms and add error message if not checked
 */
const checkbox1 = document.getElementById("checkbox1"); 
const errorTerms = document.getElementById("error_terms");

const isValidTerms = (checkbox, errorTerms) => { // #checkbox1 et errorTerms
  if (checkbox.checked) {
    errorTerms.innerHTML = ""; 
    return true;
  } else {
    errorTerms.innerText =
      "Oups, veuillez accepter les conditions d'utilisation";
    errorTerms.classList.add(errorClassMessage);
    return false;
  }
};



// SUBMIT CONFIRMATION // 


/**
 * Event listener on submit and error messages if not validated
 */ 
form.addEventListener("submit", isValidForm);

let validation; 

function isValidForm (e) {
  e.preventDefault();

  if (!isValidFirstName("error_first", "#first")) {
    validation = false; 
  } else if (!isValidLastName("error_last", "#last")) {
    validation = false; 
  } else if (!isValidEmail("error_email", "#email")) {
    validation = false; 
  } else if (!isValidBirthdate("error_birthdate", "#birthdate")) {
    validation = false; 
  } else if (!isValidQuantity("error_quantity", "#quantity")) {
    validation = false; 
  } else if (!isValidLocation()) {
    validation = false; 
  } else if (!isValidTerms(checkbox1, errorTerms)) {
    validation = false;
  } else {
    validation = true
  }
  
  if (validation === true) { 
    formError.innerHTML = ""; 
    form.reset(); // efface le formulaire validé
    form.style.display = "none"; 
    openThanksModal(); // affiche la modale de remerciement
  } else {
    formError.innerHTML = "Veuillez renseigner tous les champs du formulaire"; 
    formError.classList.add(errorClassMessage);
  }
}; 

/**
 * Open Thanks modal once submit form validated
*/
function openThanksModal() {
    modalThanks.style.display = "block"; 
}
