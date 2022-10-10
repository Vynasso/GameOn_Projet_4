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

//Form Control
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")

// Regex
let regexEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
let regexFirstAndLastName = /^[a-z ,.'-]+$/i
let regexBirthdate = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/

// Checking Function
function isFirstNameValid(){
  if(firstName.value.length < 2){
    return false
  } else if (firstName.value.length > 2 && regexFirstAndLastName.test(firstName.value)){
    return true
  }
}

function isLastNameValid(){
  if(lastName.value.length < 2){
    return false
  } else if (lastName.value.length > 2 && regexFirstAndLastName.test(lastName.value)){
    return true
  }
}

function isBirthdateValid(){
  if(birthdate.value.length < 9){
    return false
  } else if (birthdate.value.length > 9 && regexBirthdate.test(birthdate.value)){
    return true
  }
}

function isEmailValid(){
  if(regexEmail.test(email.value)){
    return true
  }
}

function isFormValid(){
  if(isFirstNameValid() && isLastNameValid()){
    return true
  }
}

document.addEventListener("submit", function (event){
  console.log("ok")
  if(isFormValid()){
    console.log("working")
  }
})


// Submit Button
const btnSubmit = document.getElementById("submit")

// btnSubmit.addEventListener('click',isEmail)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closeBtn.forEach( (btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal(){
  modalbg.style.display = "none";

}
