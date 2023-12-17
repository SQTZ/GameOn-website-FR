function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  var First = document.getElementById('first').value;
  var Last = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  var birthdate = document.getElementById('birthdate').value;
  var quantity = document.getElementById('quantity').value;
  var checked = document.getElementById('checkbox1').checked;
  var BtnRadio = document.getElementsByName('location');
  var Selected = false;

  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  for (var i = 0; i < BtnRadio.length; i++) {
    if (BtnRadio[i].checked) {
      Selected = true;
      break;
    }
  }

  //Si le prénom est inférieur à 2 caractères
  if (First.length < 2) {
    alert('Le prénom doit contenir au moins 2 caractères.');
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si le nom est inférieur à 2 caractères
  else if (Last.length < 2) {
    alert('Le nom doit contenir au moins 2 caractères.');
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si l'email est vide
  else if (email == "") {
    alert('L’adresse email ne doit pas être vide.');
    return false;
  } 
  
  //Si l'email n'est pas valide
  else if (!regexEmail.test(email)) {
    alert('Veuillez entrer une adresse email valide.');
    return false;
  } 
  
  //Si la date de naissance est vide
  else if (birthdate == "") {
    alert('Veuillez entrer votre date de naissance.');
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si la date de naissance est inférieur à 1
  else if (quantity.length < 1) {
    alert('Veuillez entrer le nombre de tournoi à éffectuer.');
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si aucun lieu n'est sélectionné
  else if (!Selected) {
    alert('Veuillez sélectionner un lieu de tournoi.');
    return false;
  } 
  
  //Si les conditions ne sont pas acceptées
  else if (checked == false) {
    alert('Veuillez accepter les conditions d\'utilisation.');
    return false; // Empêche l'envoie du formulaire
  }

  //Si tout est valide
  alert('Merci ! Votre réservation a été reçue.');
  return true; // Envoie le formulaire
}

