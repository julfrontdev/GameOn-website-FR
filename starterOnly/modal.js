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

function closeModal() { // ajouté
  modalbg.style.display = "none";
}


// #2 FORM DATA 


// #3 ERRROR MESSAGES  


/*
const errorLast = document.getElementById('error_last')
const errorBirthdate = document.getElementById('error_birthdate')
const errorQuantity = document.getElementById('error_quantity')
const errorOption = document.getElementById('error_option')
const errorTerms = document.getElementById('error_terms')
*/

const form = document.getElementById('form'); 

/**
 * Check names field and add error if value length is under 2.
 */

const validateIdentity = (errorId, inputSelector) => {
  const error = document.getElementById(errorId); // error Ids passent 
  const entree = document.querySelector(inputSelector).value; // input Selectors passent 

  if (entree.length <= 2) {
    error.innerText = "Oups, votre saisie fait moins de 2 caractères";
    error.classList.add('error'); // éviter error.style.color = "red"; 
  }
};

form.addEventListener('submit', (e) => {
  validateIdentity('error_first', '#first');
  validateIdentity('error_last', '#last');

  e.preventDefault()
});

// Error email 
const errorEmail = document.getElementById('error_email'); 
form.addEventListener('submit', (e) => {

  const entreeEmail = document.querySelector('#email').value; 
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (entreeEmail.match(mailFormat)) {
    console.log('email matched');
  } else {
    errorEmail.innerText = "Oups, le format de votre email est invalide"; 
    errorEmail.style.color = "red"; 
    console.log('email not matched');
  }

  e.preventDefault()
});






// Error birthdate
// Error quantity
// Error option 
// Error terms

