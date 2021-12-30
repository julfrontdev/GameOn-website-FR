function editNav() {
  var x = document.getElementById("myTopnav"); // var ou let ? 
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // type = tableau
const formData = document.querySelectorAll(".formData"); // ...All pour sélectionner un ou plusieurs éléments
const closeModalBtn = document.getElementById("close"); // ajouté // sélectionne un ID ; l'ID est renseigné sans le #
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

// #1 close modal form 
function closeModal() { // ajouté
  modalbg.style.display = "none";
}



// #2 Conserver les données du formulaire

// Error messages 

/*
const errorNom = document.getElementById('error_nom')
const errorMail = document.getElementById('error_mail')
const errorDateNaissance = document.getElementById('error_date_naissance')
const errorNombreTournois = document.getElementById('error_nombre_tournois')
const errorOption = document.getElementById('error_option')
const errorTermes = document.getElementById('error_termes')
*/

const errorFirst = document.getElementById('error_first')
// console.log(errorFirst) OK
const form = document.getElementById('form')
// console.log(form); console : form#form

form.addEventListener('submit', (e) => {

  const entreeFirst = document.querySelector('#first').value; 
  //console.log('ça marche') OK

  let errorFirstMessage
  
  if (entreeFirst.length <= 2) {
    // console.log('ça fonctionne') OK
    errorFirstMessage = "Oups, votre prénom fait moins de 2 caractères"; 
    errorFirst.style.color = "red"; 
  } else {
    errorFirstMessage = "OK"; // à supprimer
  }

  if (errorFirstMessage) {
    errorFirst.innerText = errorFirstMessage; 
  }

  e.preventDefault()
}); 


// A faire : autres messages d'erreurs


