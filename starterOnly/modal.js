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
const closeThanks = document.getElementsByClassName("closeThanks"); 




// #1 LAUNCH AND CLOSE MODAL

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

function launchModal() {
  modalbg.style.display = "block";
  modalThanks.style.display = "none"; // Modale thanks n'apparait pas à l'ouverture 
  form.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}




// #2 FORM DATA




// #3 ERRROR MESSAGES

const form = document.getElementById("form"); //
const formError = document.getElementById("form-error"); 
const errorClassMessage = "error-message" // CSS class 

/**
 * Check names field and add error if value length is under 2.
 */
const validateIdentity = (errorId, inputSelector) => {
  const errorName = document.getElementById(errorId); 
  const entryName = document.querySelector(inputSelector).value; 

  if (entryName.length <= 2) {
    errorName.innerText = "Oups, votre saisie fait moins de 2 caractères";
    errorName.classList.add(errorClassMessage);
    console.log("name not matched"); // OK
    return false;
  } else {
    console.log("name matched"); // OK
    return true;
  }
};

/**
 * Check email validity and add error if not valid
 */
const validateEmail = (errorId, inputSelector) => {
  const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //
  const entryEmail = document.querySelector(inputSelector).value; 

  if (emailFormatRegex.test(entryEmail)) {
    console.log("email matched"); // OK (mais message d'erreur Email non valide)
  } else {
    errorEmail.innerText = "Oups, le format de votre email est invalide";
    errorEmail.classList.add(errorClassMessage);
    console.log("email not matched"); // OK
  }
};

/**
 * Check birth date validity and add error if not valid
 */
const validateBirthdate = (errorId, inputSelector) => {
  const birthdateFormatRegex =
    /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;
  const errorBirthdate = document.getElementById(errorId); 
  const entryBirthdate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entryBirthdate)) {
    console.log("birthdate matched") // OK
    return true; 
  } else if (entryBirthdate.length === 0) { 
    errorBirthdate.innerText = "Le champ est vide";
    errorBirthdate.classList.add(errorClassMessage);
    console.log("birthdate not entered"); // OK
    return false; 
  } else {
    errorBirthdate.innerText =
      "Oups, le format de votre date de naissance est invalide"; 
    errorBirthdate.classList.add(errorClassMessage);
    console.log("birthdate not matched"); // OK 
    return false; 
  }; 
}

/**
 * Check number of tournaments done and add error if no value
 */
const validateQuantity = (errorId, inputSelector) => {
  const quantityFormatRegex = /^[0-9]+$/;
  const errorQuantity = document.getElementById(errorId); 
  const entryQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entryQuantity) && entryQuantity <= 99) {
    console.log("quantity matched"); // OK
    return true;
  } else {
    errorQuantity.innerText = "Oups, veuillez indiquer un nombre entre 0 et 99";
    errorQuantity.classList.add(errorClassMessage);
    console.log("quantity not matched"); // OK
    return false;
  }
};

// validateQuantity() => true ou false
// console.log(validateQuantity());
// const result = validateQuantity() => result soit true soit false

/*
validateQuantity(); 
const resultQuantity = validateQuantity(); 
console.log(validateQuantity());
*/


/**
 * Check location of a future tournament and add error if no check
 */
 const errorLocation = document.getElementById("error_location");
 
 const validateLocation = () => {
   const allLocations = ["location1", "location2", "location3", "location4", "location5", "location6"];
   let isSomewhereSelected = false; // valeur par défaut

   allLocations.forEach((location) => {
    if (document.getElementById(location).checked) { // ? location = input name? // 
      console.log("location checked"); // OK (mais message d'erreur Lieu non valide)
      isSomewhereSelected = true; // the checked location in the array returns the value true 
    } // pas de else ici, sinon ça retournerait la valeur location 1 ; le if permet de trouver le checked location
   });
  if (isSomewhereSelected === false) { // means if no location checked, the value is false, { error message etc.}
    document.getElementById("error_location").innerText =
      "Veuillez indiquer une destination pour votre prochain tournoi";
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

const validateTerms = (checkbox, errorTerms) => {
  if (checkbox.checked) {
    console.log("terms checked"); // OK
    return true;
  } else {
    errorTerms.innerText =
      "Veuillez accepter les CGV";
    errorTerms.classList.add(errorClassMessage);
    console.log("terms not checked"); // OK
    return false;
  }
};

// #4 SUBMIT CONFIRMATION // en cours... 

// Ecoute de l'évenement sur le submit et message si erreur
form.addEventListener("submit", (e) => { // 
  e.preventDefault();
  isValidatedForm(); 
});

function isValidatedForm () {
  //   e.preventDefault(); ?

  let validation = true; 

  if (!validateIdentity("error_first", "#first")) {
    console.log("Prénon non valide"); 
    validation = false; 
  }
  if (!validateIdentity("error_last", "#last")) {
    console.log("Nom non valide"); 
    validation = false; 
  }
  if (!validateEmail("error_email", "#email")) {
    console.log("Email non valide"); // message d'erreur (mais email matched) // 
    validation = false; 
  }
  if (!validateBirthdate("error_birthdate", "#birthdate")) {
    console.log("Date de naissance non valide"); 
    validation = false; 
  }
  if (!validateQuantity("error_quantity", "#quantity")) {
    console.log("Quantité non valide"); 
    validation = false; 
  }
  if (!validateLocation()) {
    console.log("Lieu non valide"); // message d'erreur (mais location checked) // 
    validation = false; 
  }
  if (!validateTerms(checkbox1, errorTerms)) {
    console.log("Terms non valide"); 
    validation = false; 
  }
  
  if (validation === true) {
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