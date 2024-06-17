function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Elements
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

function validate(event) {
  event.preventDefault();

  var First = document.getElementById('first').value;
  var Last = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  var birthdate = document.getElementById('birthdate').value;
  var quantity = document.getElementById('quantity').value;
  var checked = document.getElementById('checkbox1').checked;
  var BtnRadio = document.getElementsByName('location');
  var Selected = false;


  // Regex pour l'email
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //Vérifie si un lieu est sélectionné
  for (var i = 0; i < BtnRadio.length; i++) {
    if (BtnRadio[i].checked) {
      Selected = true;
      break;
    }

  }

  //Si le prénom est inférieur à 2 caractères
  if (First.length < 2) {
    document.getElementById('ErrorFirst').innerHTML = 'Le prénom doit contenir au moins 2 caractères.';
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si le nom est inférieur à 2 caractères
  else if (Last.length < 2) {
    document.getElementById('ErrorLast').innerHTML = 'Le nom doit contenir au moins 2 caractères.';
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si l'email est vide
  else if (email == "") {
    document.getElementById('ErrorEmail').innerHTML = 'Veuillez entrer une adresse email.';
    return false;
  } 
  
  //Si l'email n'est pas valide
  else if (!regexEmail.test(email)) {
    document.getElementById('ErrorEmail').innerHTML = 'Veuillez entrer une adresse email valide.';
    return false;
  } 
  
  //Si la date de naissance est vide
  else if (birthdate == "") {
    document.getElementById('ErrorBirthdate').innerHTML = 'Veuillez entrer votre date de naissance.';
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si la quantité est inférieur à 1
  else if (quantity.length < 1) {
    document.getElementById('ErrorQuantity').innerHTML = 'Veuillez entrer le nombre de tournoi à éffectuer.';
    return false; // Empêche l'envoie du formulaire
  } 
  
  //Si aucun lieu n'est sélectionné
  else if (!Selected) {
    document.getElementById('ErrorSelected').innerHTML = 'Veuillez sélectionner un lieu de tournoi.';
    return false;
  } 
  
  //Si les conditions ne sont pas acceptées
  else if (checked == false) {
    document.getElementById('ErrorChecked').innerHTML = 'Veuillez accepter les conditions d\'utilisation.';
    return false; // Empêche l'envoie du formulaire
  }


  // Affichage de la modal de succès si toutes les validations sont passées
  document.querySelector('.bground').style.display = 'none';
  document.querySelector('.bground-success').style.display = 'block';
}

function closeSuccessModal() {
  document.querySelector('.bground-success').style.display = 'none';
}
