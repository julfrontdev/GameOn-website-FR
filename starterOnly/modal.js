function editNav() {
  var x = document.getElementById("myTopnav"); // let ?
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

const form = document.getElementById("form"); //
const errorClassColor = "error-color"

/**
 * Check names field and add error if value length is under 2.
 */
const validateIdentity = (errorId, inputSelector) => {
  const errorName = document.getElementById(errorId); 
  const entreeName = document.querySelector(inputSelector).value; 

  if (entreeName.length <= 2) {
    errorName.innerText = "Oups, votre saisie fait moins de 2 caractères";
    errorName.classList.toggle(errorClassColor);
    console.log("name not matched"); // OK
    return false;
  } else {
    console.log("name matched"); // OK
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateIdentity("error_first", "#first");
  validateIdentity("error_last", "#last"); // rien dans la console si erreur seulement là
});

/**
 * Check email validity and add error if not valid
 */
const validateEmail = (errorId, inputSelector) => {
  const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorEmail = document.getElementById(errorId); //
  const entreeEmail = document.querySelector(inputSelector).value; 

  if (emailFormatRegex.test(entreeEmail)) {
    console.log("email matched"); // OK
  } else {
    errorEmail.innerText = "Oups, le format de votre email est invalide";
    errorEmail.classList.add(errorClassColor);
    console.log("email not matched"); // OK
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
  const errorBirthdate = document.getElementById(errorId); 
  const entreeBirthdate = document.querySelector(inputSelector).value;

  if (birthdateFormatRegex.test(entreeBirthdate)) {
    console.log("birthdate matched") // OK
  } else if (entreeBirthdate.length === 0) { 
    errorBirthdate.innerText = "Le champ est vide";
    errorLocation.classList.add(errorClassColor);
    console.log("quantity not entered"); // OK
  } else {
    errorBirthdate.innerText =
      "Oups, le format de votre date de naissance est invalide"; 
    errorBirthdate.classList.add(errorClassColor);
    console.log("birthdate not matched"); // OK 
  }; 
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateBirthdate("error_birthdate", "#birthdate");
});

/**
 * Check number of tournaments done and add error if no value
 */
const validateQuantity = (errorId, inputSelector) => {
  const quantityFormatRegex = /^[0-9]+$/;
  const errorQuantity = document.getElementById(errorId); 
  const entreeQuantity = document.querySelector(inputSelector).value;

  if (quantityFormatRegex.test(entreeQuantity) && entreeQuantity <= 99) {
    console.log("quantity matched"); // OK
  } else {
    errorQuantity.innerText = "Oups, veuillez indiquer un nombre entre 0 et 99";
    errorQuantity.classList.add(errorClassColor);
    console.log("quantity not matched"); // OK
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
 
 const validateLocation = () => {
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
    console.log("location 6 checked"); // OK
    return true;
  } else {
    document.getElementById("error_location").innerText =
      "Veuillez indiquer une destination pour votre prochain tournoi";
    errorLocation.classList.add(errorClassColor);
    console.log("no location checked"); // OK
    return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLocation(errorClassColor);
});

/**
 * Check terms and add error message if not checked
 */
const checkbox1 = document.getElementById("checkbox1"); 
const errorTerms = document.getElementById("error_terms");

const validateTerms = (checkbox, errorTerms, errorClassColor) => {
  if (checkbox.checked) {
    console.log("terms checked"); // OK
    return true;
  } else {
    errorTerms.innerText =
      "Veuillez accepter les CGV";
    errorTerms.classList.add(errorClassColor);
    console.log("terms not checked"); // OK
    return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateTerms(checkbox1, error_terms, errorClassColor);
});


// #4 SUBMIT CONFIRMATION

// const form = document.getElementById("form"); // déjà déclarée


// const validateTermsValue  

