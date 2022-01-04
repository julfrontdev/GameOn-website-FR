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

const form = document.getElementById("form");

/**
 * Check names field and add error if value length is under 2.
 */
const validateIdentity = (errorId, inputSelector) => {
  const errorName = document.getElementById(errorId); // toujours comme ça 
  const entreeName = document.querySelector(inputSelector).value; //

  if (entreeName.length <= 2) {
    errorName.innerText = "Oups, votre saisie fait moins de 2 caractères";
    errorName.classList.toggle("error-color"); // couleur du message d'erreur, éviter error.style.color = "red";
    console.log("name not matched");
    return false; 
  } else {
    console.log("name matched"); 
    return true; 
  }
};

form.addEventListener("submit", (e) => {
  // à réexpliquer
  validateIdentity("error_first", "#first");
  validateIdentity("error_last", "#last");

  e.preventDefault();
});

/**
 * Check email validity and add error if not valid
 */
const validateEmail = (errorId, inputSelector) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //  
  const entreeEmail = document.querySelector(inputSelector).value; // 
  
  // Essai 
  /*
if (entreeEmail.match(!emailFormat)) { // ? Comment dire, ! ne match pas avec emailFormat ?
  console.log("email not matched"); // 
  errorEmail.innerText = "Oups, le format de votre email est invalide";
  errorEmail.classList.add("error-color");
  return false; 
} else {
  console.log("email matched"); // 
  return false; 
}
  */

  if (entreeEmail.match(emailFormat)) { // match ou test ? 
    console.log("email matched"); // OK
    return true; 
  } else {
    errorEmail.innerText = "Oups, le format de votre email est invalide";
    errorEmail.classList.add("error-color");
    console.log("email not matched"); // Nothing, and no message for birthdate
    return false; 
  }
};

form.addEventListener("submit", (e) => {
  validateEmail("error_email", "#email");

  e.preventDefault();
});

/**
 * Check birth date validity and add error if not valid
 */
const validateBirthdate = (errorId, inputSelector) => {
  const birthdateFormatRegex = /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;
  const errorBirthdate = document.getElementById(errorId); //
  const entreeBirthDate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entreeBirthDate)) {
    console.log("birthdate matched"); // OK
    // return true; 
  } else if (entreeBirthdate.length === 0) { // pas d'entrée indiquée ! à revoir ! ne fonctionne pas ! 
    errorBirthdate.innerText = "Oups, veuillez indiquer une date de naissance";
    errorBirthdate.classList.add("error-color");
    console.log("quantity not entered"); // 
  } else {
    errorBirthdate.innerText = "Oups, le format de votre date de naissance est invalide"; // message s'affiche toujours, et trop bas 
    errorBirthdate.classList.add("error-color");
    console.log("birthdate not matched"); // 
    // return false; 
  }
};

form.addEventListener("submit", (e) => {
  validateBirthdate("error_birthdate", "#birthdate");

  e.preventDefault();
});

/**
 * Check number of tournaments done and add error if no value
 */
 const validateQuantity = (errorId, inputSelector) => {
  const quantityFormatRegex = /^[0-9]+$/; 
  const errorQuantity = document.getElementById(errorId); //
  const entreeQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entreeQuantity)) {
    console.log("quantity matched"); //
    // return true; 
  } else if (entreeQuantity === null ) { // pas d'entrée indiquée ! à revoir ! 
    errorQuantity.innerText = "Oups, veuillez indiquer à combien de tournois vous avez participé";
    errorQuantity.classList.add("error-color");
    console.log("quantity not entered"); // OK 
  } else {
    errorQuantity.innerText = "Oups, veuillez indiquer un nombre entre 0 et 99";
    errorQuantity.classList.add("error-color");
    console.log("quantity not matched"); // OK 
    // return false; 
  }
};

form.addEventListener("submit", (e) => {
  validateQuantity("error_quantity", "#quantity");

  e.preventDefault();
});


/**
 * Check option of a future tournament and add if no value
 */

/**
 * Check terms and add error if no check
 */

