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
const modalBtn = document.querySelectorAll(".modal-btn"); // type = tableau
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementById("close");
const modalThanks = document.getElementById("thanks"); 
const closeModalThanksBtn = document.querySelector(".close-thanks-btn"); 

const FirstName = document.querySelector("input[name=first]"); // ajoutées pour les bordures vertes et rouges
const LastName = document.querySelector("input[name=last]"); // ajouté
const email = document.querySelector("input[name=email]"); // ajouté
const birthdate = document.querySelector("input[name=birthdate]"); // ajouté
const quantity = document.querySelector("input[name=quantity]"); // ajouté
const locationRadio = document.querySelectorAll("input[type=radio]"); // pas utilisée
const terms = document.querySelector("input[type=checkbox]"); // pas utilisée



// LAUNCH AND CLOSE MODAL

/**
 * Open modal 
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  modalThanks.style.display = "none"; // Modale thanks n'apparait pas à l'ouverture 
  
  let inputs = Array.from(document.querySelectorAll(".input-validation")); // ajouté // effacer le contour vert des champs
  inputs.forEach((input) => input.classList.remove("input-validation")); // ajouté 
  
  form.style.display = "block"; // apparition du corps de la modale
}

/** 
 * Close modal with x 
 */ 
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
  form.reset(); // efface le formulaire si fermé
}

/**
*Close Thanks modal  
*/
function closeModalThanks() {
  modalThanks.style.display = "none"; 
  form.reset(); // efface le formulaire si fermé
}
closeModalThanksBtn.addEventListener("click", closeModal, closeModalThanks);



// #3 EVENTS & ERRROR MESSAGES

const form = document.getElementById("form"); 
const formError = document.getElementById("form-error"); 
const errorClassMessage = "error-message" // CSS class 

/**
 * Check first name field and add error if value length is under 2.
 */
const isValidFirstName = (errorId, inputSelector) => {
  const errorFirstName = document.getElementById(errorId); 
  const entryFirstName = document.querySelector(inputSelector).value; 

  if (entryFirstName.length < 2) {

    FirstName.classList.add("input-error"); // ajouté 
    FirstName.classList.remove("input-validation"); // ajouté

    errorFirstName.innerText = "Votre prénom doit comporter au moins 2 caractères";
    errorFirstName.classList.add(errorClassMessage);
    console.log("first name not matched"); // OK
    return false;

  } else {

    FirstName.classList.remove("input-error"); // ajouté
    FirstName.classList.add("input-validation"); // ajouté 

    console.log("first name matched"); // OK
    return true;
  }
};

/**
 * Check last name field and add error if value length is under 2.
 */
 const isValidLastName = (errorId, inputSelector) => {
  const errorLastName = document.getElementById(errorId); 
  const entryLastName = document.querySelector(inputSelector).value; 

  if (entryLastName.length < 2) {
    
    LastName.classList.add("input-error"); // ajouté 
    LastName.classList.remove("input-validation"); // ajouté

    errorLastName.innerText = "Votre nom doit comporter au moins 2 caractères";
    errorLastName.classList.add(errorClassMessage);
    console.log("last name not matched"); // OK
    return false;

  } else {

    LastName.classList.remove("input-error"); // ajouté
    LastName.classList.add("input-validation"); // ajouté 

    console.log("last name matched"); // OK
    return true;
  }
};


/**
 * Check email validity and add error if not valid
 */
const isValidEmail = (errorId, inputSelector) => {
  const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //
  const entryEmail = document.querySelector(inputSelector).value; 

  if (emailFormatRegex.test(entryEmail)) {

    email.classList.remove("input-error"); // ajouté
    email.classList.add("input-validation"); // ajouté 

    console.log("email matched");
    return true; // OK (avant pb : message d'erreur Email non valide)

  } else {

    email.classList.add("input-error"); // ajouté 
    email.classList.remove("input-validation"); // ajouté

    errorEmail.innerText = "Le format de votre email doit être valide";
    errorEmail.classList.add(errorClassMessage);
    console.log("email not matched"); // OK
    return false; 
  }
};

/**
 * Check birth date validity and add error if not valid
 */
const isValidBirthdate = (errorId, inputSelector) => {
  const birthdateFormatRegex =
    /^\d{4}\-\d{2}\-\d{2}$/
    // /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;
  const errorBirthdate = document.getElementById(errorId); 
  const entryBirthdate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entryBirthdate)) {

    birthdate.classList.remove("input-error"); // ajouté
    birthdate.classList.add("input-validation"); // ajouté 

    console.log("birthdate matched") // OK
    return true; 
    
    } else if (entryBirthdate.length === 0) { 

    birthdate.classList.add("input-error"); // ajouté 
    birthdate.classList.remove("input-validation"); // ajouté

    errorBirthdate.innerText = "Le champ est vide";
    errorBirthdate.classList.add(errorClassMessage);
    console.log("birthdate not entered"); // OK
    return false; 
  } else {

    birthdate.classList.add("input-error"); // ajouté 
    birthdate.classList.remove("input-validation"); // ajouté

    errorBirthdate.innerText =
      "Le format de votre date de naissance doit être valide"; 
    errorBirthdate.classList.add(errorClassMessage);
    console.log("birthdate not matched"); // OK 
    return false; 
  }; 
}

/**
 * Check number of tournaments done and add error if no value
 */
const isValidQuantity = (errorId, inputSelector) => {
  const quantityFormatRegex = /^[0-9]+$/;
  const errorQuantity = document.getElementById(errorId); 
  const entryQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entryQuantity) && entryQuantity <= 99) {

    quantity.classList.remove("input-error"); // ajouté
    quantity.classList.add("input-validation"); // ajouté 

    console.log("quantity matched"); // OK
    return true;
  } else {

    quantity.classList.add("input-error"); // ajouté 
    quantity.classList.remove("input-validation"); // ajouté

    errorQuantity.innerText = "Le nombre doit être compris entre 0 et 99";
    errorQuantity.classList.add(errorClassMessage);
    console.log("quantity not matched"); // OK
    return false;
  }
};

// isValidQuantity() => true ou false
// console.log(isValidQuantity());
// const result = isValidQuantity() => result soit true soit false

/*
isValidQuantity(); 
const resultQuantity = isValidQuantity(); 
console.log(isValidQuantity());
*/


/**
 * Check location of a future tournament and add error if no check
 */
 const errorLocation = document.getElementById("error_location");
 
 const isValidLocation = () => {
   const allLocations = ["location1", "location2", "location3", "location4", "location5", "location6"];
   let isSomewhereSelected = false; // valeur par défaut

   /* allLocations.forEach((location) => {
    if (document.getElementById(location).checked) {
      console.log(location)
       // ? location = input name? // 
      console.log("location checked"); // OK (mais message d'erreur Lieu non valide)
      isSomewhereSelected = true; 
      return true; // the checked location in the array returns the value true 
    } // pas de else ici, sinon ça retournerait la valeur location 1 ; le if permet de trouver le checked location
   }); */

   for (const location of allLocations) {
    if (document.getElementById(location).checked) {
      console.log(location)
       // ? location = input name? // 
      console.log("location checked"); // OK (mais message d'erreur Lieu non valide)
      isSomewhereSelected = true; 
      return true; // the checked location in the array returns the value true 
    } 
  }


  if (isSomewhereSelected === false) { // means if no location checked, the value is false, { error message etc.}
    document.getElementById("error_location").innerText =
      "Oups, veuillez indiquer une destination";
    errorLocation.classList.add(errorClassMessage);
    console.log("no location checked"); // OK
    return false;
  }
};

/**
 * Check terms and add error message if not checked
 */
const checkbox1 = document.getElementById("checkbox1"); 
const errorTerms = document.getElementById("error_terms");

const isValidTerms = (checkbox, errorTerms) => {
  if (checkbox.checked) {
    console.log("terms checked"); // OK
    return true;
  } else {
    errorTerms.innerText =
      "Oups, veuillez accepter les CGV";
    errorTerms.classList.add(errorClassMessage);
    console.log("terms not checked"); // OK
    return false;
  }
};

// #4 SUBMIT CONFIRMATION // en cours... 

// Ecoute de l'évenement sur le submit et message si erreur
form.addEventListener("submit", isValidForm);


let validation; // inactive

function isValidForm (e) {
  e.preventDefault();

  if (!isValidFirstName("error_first", "#first")) {
    console.log("Prénon non valide"); 
    validation = false; 
  } else if (!isValidLastName("error_last", "#last")) {
    console.log("Nom non valide"); 
    validation = false; 
  } else if (!isValidEmail("error_email", "#email")) {
    console.log("Email non valide"); // message d'erreur (mais email matched) //
    validation = false; 
  } else if (!isValidBirthdate("error_birthdate", "#birthdate")) {
    console.log("Date de naissance non valide"); 
    validation = false; 
  } else if (!isValidQuantity("error_quantity", "#quantity")) {
    console.log("Quantité non valide"); 
    validation = false; 
  } else if (!isValidLocation()) {
    console.log("Lieu non valide"); // message d'erreur (mais location checked) // 
    validation = false; 
  } else if (!isValidTerms(checkbox1, errorTerms)) {
    console.log("Terms non valide"); 
    validation = false; 
  } else {
    validation = true
  } // ajouté 
  
  if (validation === true) { // enlever === true ? 
    formError.innerHTML = ""; 
    form.reset(); // efface le formulaire si OK
    form.style.display = "none"; // ferme la modale si OK
    openThanksModal(); // affiche la modale de  remerciement si OK
  } else {
    formError.innerHTML = "Veuillez renseigner tous les champs du formulaire"; // erreur si pas OK // Pb : s'affiche même si OK
    formError.classList.add(errorClassMessage);
  }
}; 

// Si le fomulaire est OK, ouverture de la modale Thanks

function openThanksModal() {
    modalThanks.style.display = "block"; 
}
