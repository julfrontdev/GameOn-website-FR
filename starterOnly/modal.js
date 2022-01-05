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
closeModalBtn.addEventListener("click", closeModal);

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// #2 FORM DATA

// #3 ERRROR MESSAGES

const form = document.getElementById("form"); // elle peut être supprimée

/**
 * Check names field and add error if value length is under 2.
 */
const validateIdentity = (errorId, inputSelector) => {
  const errorName = document.getElementById(errorId); //
  const entreeName = document.querySelector(inputSelector).value; //

  if (entreeName.length <= 2) {
    errorName.innerText = "Oups, votre saisie fait moins de 2 caractères";
    errorName.classList.toggle("error-color"); //
    console.log("name not matched");
    return false;
  } else {
    console.log("name matched");
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateIdentity("error_first", "#first");
  validateIdentity("error_last", "#last");
});

/**
 * Check email validity and add error if not valid
 */
const validateEmail = (errorId, inputSelector) => {
  const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //
  const entreeEmail = document.querySelector(inputSelector).value; //

  if (emailFormatRegex.test(entreeEmail)) {
    console.log("email matched"); // OK
    // return true;
  } else {
    errorEmail.innerText = "Oups, le format de votre email est invalide";
    errorEmail.classList.add("error-color");
    console.log("email not matched"); // OK
    // return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail("error_email", "#email");
});

/**
 * Check birth date validity and add error if not valid
 */
const validateBirthdate = (errorId, inputSelector) => {
  const birthdateFormatRegex =
    /(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})/;
  const errorBirthdate = document.getElementById(errorId); //
  const entreeBirthDate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entreeBirthDate)) {
    console.log("birthdate matched"); // OK
    // return true;
  } else if (entreeBirthdate.length === 0) {
    // pas d'entrée indiquée * à revoir * ne fonctionne pas **
    errorBirthdate.innerText = "Le champ est vide";
    errorBirthdate.classList.add("error-color");
    console.log("quantity not entered"); //
  } else {
    errorBirthdate.innerText =
      "Oups, le format de votre date de naissance est invalide"; // message s'affiche toujours, et trop bas
    errorBirthdate.classList.add("error-color");
    console.log("birthdate not matched"); //
    // return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateBirthdate("error_birthdate", "#birthdate");
});

/**
 * Check number of tournaments done and add error if no value
 */
const validateQuantity = (errorId, inputSelector) => {
  const quantityFormatRegex = /^[0-9]+$/;
  const errorQuantity = document.getElementById(errorId); //
  const entreeQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entreeQuantity)) {
    console.log("quantity matched"); // OK
    // return true;
  } else if (entreeQuantity.length === "") {
    // pas d'entrée indiquée * à revoir * ne fonctionne pas **
    errorQuantity.innerText = "Le champ est vide";
    errorQuantity.classList.add("error-color");
    console.log("quantity not entered"); //
  } else {
    errorQuantity.innerText = "Oups, veuillez indiquer un nombre entre 0 et 99";
    errorQuantity.classList.add("error-color");
    console.log("quantity not matched"); // pas de message d'erreur
    // return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateQuantity("error_quantity", "#quantity");
});

/**
 * Check location of a future tournament and add error if no check
 */

const errorLocation = document.getElementById("error_location");

function validateLocation() {
  if (document.getElementById("location1").checked) {
    console.log("location 1 checked");
    return true;
  } else if (document.getElementById("location2").checked) {
    console.log("location 2 checked");
    return true;
  } else if (document.getElementById("location3").checked) {
    console.log("location 3 checked");
    return true;
  } else if (document.getElementById("location4").checked) {
    console.log("location 4 checked");
    return true;
  } else if (document.getElementById("location5").checked) {
    console.log("location 5 checked");
    return true;
  } else if (document.getElementById("location6").checked) {
    console.log("location 6 checked");
    return true;
  } else {
    document.getElementById("error_location").innerHTML =
      "Veuillez indiquer une destination pour votre prochain tournoi";
    return false;
    errorLocation.classList.add("error-color");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLocation();
});

/**
 * Check terms and add error message if not checked
 */

