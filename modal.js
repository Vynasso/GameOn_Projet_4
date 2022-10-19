function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        console.log("responsive added")
        x.className += " responsive";
    } else {
        console.log("responsive closed")
        x.className = "top-nav";
    }
}

// DOM Elements
const modalBg = document.querySelector(".bgGround");
const modalBtn = document.querySelectorAll(".modalBtn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

//Form Control
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const participateTournaments = document.getElementById("quantity")
const locations = document.getElementsByClassName("location")
const generalCondition = document.getElementById("checkbox1")
const formConfirmation = document.getElementById("formConfirmation")

// Regex for the management of the email and the name and first name
let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexFirstAndLastName = /^[a-z ,.'-]+$/i

// Customized error messages for each input conformity
const messagesErrors = {
    firstNameError_1: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    firstNameError_2: "Seul l'alphabet est accepté",
    lastNameError_1: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    lastNameError_2: "Seul l'alphabet est accepté",
    emailError_1: "Veuillez entrer une adresse mail valide",
    birthdateError_1: "Veuillez entrer une date de naissance",
    birthdateError_2 : "Vous devez être majeur pour participer à cet évènement",
    participateTournamentsError: "Veuillez entrer un nombre",
    locationError: "Veuillez sélectionner une ville",
    generalConditionError: "Vous devez accepter les condition générales pour continuer"
}

// ***************** CHECKING FUNCTION *****************

// I check that the content of the first name input has more than two characters,
// then I make sure that it does not include any special characters, if everything is good,
// I validate the user's input
function isFirstNameValid() {
    if (firstName.value.length < 2) {
        let firstNameErrorMessage = document.getElementById("firstNameError");
        firstNameErrorMessage.innerHTML = messagesErrors.firstNameError_1
        firstNameErrorMessage.style.color = "red"
        firstNameErrorMessage.style.fontSize = "1rem"
        firstName.style.border = "2px solid red";
        return false;
    } else if (!regexFirstAndLastName.test(firstName.value)) {
        let firstNameErrorMessage = document.getElementById("firstNameError");
        firstNameErrorMessage.innerHTML = messagesErrors.firstNameError_2
        firstNameErrorMessage.style.color = "red"
        firstNameErrorMessage.style.fontSize = "1rem"
        firstName.style.border = "2px solid red";
        return false;
    } else {
        let firstNameErrorMessage = document.getElementById("firstNameError");
        firstNameErrorMessage.innerHTML = "Champ valide"
        firstNameErrorMessage.style.color = "green"
        firstNameErrorMessage.style.fontSize = "1rem"
        firstName.style.border = "2px solid green";
        // document.getElementById("firstNameError").innerHTML = "";
        return true;
    }
}
// I check that the content of the last name input has more than two characters,
// then I make sure that it does not include any special characters, if everything is good,
// I validate the user's input
function isLastNameValid() {
    if (lastName.value.length < 2) {
        let lastNameErrorMessage = document.getElementById("lastNameError");
        lastNameErrorMessage.innerHTML = messagesErrors.lastNameError_1
        lastNameErrorMessage.style.color = "red"
        lastNameErrorMessage.style.fontSize = "1rem"
        lastName.style.border = "2px solid red";
        return false;
    } else if (!regexFirstAndLastName.test(lastName.value)) {
        let lastNameErrorMessage = document.getElementById("lastNameError");
        lastNameErrorMessage.innerHTML = messagesErrors.lastNameError_2
        lastNameErrorMessage.style.color = "red"
        lastNameErrorMessage.style.fontSize = "1rem"
        lastName.style.border = "2px solid red";
        return false;
    } else {
        let lastNameErrorMessage = document.getElementById("lastNameError")
        lastNameErrorMessage.innerHTML = "Champ valide"
        lastNameErrorMessage.style.color = "green"
        lastNameErrorMessage.style.fontSize = "1rem"
        lastName.style.border = "2px solid green";
        // document.getElementById("lastNameError").innerHTML = "";
        // lastName.style.border = "2px solid white";
        return true;
    }
}

// I make sure that the user's input conforms to the regex, if it does, I accept the user's input
function isEmailValid(){
    if(regexEmail.test(email.value) === false){
        let emailErrorMessage = document.getElementById("emailError");
        emailErrorMessage.innerHTML = messagesErrors.emailError_1
        emailErrorMessage.style.color = "red"
        emailErrorMessage.style.fontSize = "1rem"
        email.style.border = "2px solid red";
        return false;
    } else {
        let emailErrorMessage = document.getElementById("emailError");
        emailErrorMessage.innerHTML = "Champ valide"
        emailErrorMessage.style.color = "green"
        emailErrorMessage.style.fontSize = "1rem"
        email.style.border = "2px solid green";
        // document.getElementById("emailError").innerHTML = "";
        // email.style.border = "2px solid white";
        return true
    }
}

// I create the now variable to get the current date, then the currentYear variable to get the current year.
// The first condition makes sure that the date input has been filled, the second one makes sure that the user is of age.
// If these two conditions are met, I accept the user's input

function isBirthdateValid() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let registeredDate = new Date(birthdate.value)
    if (birthdate.value.length < 1) {
        let birthDateErrorMessage = document.getElementById("birthdateError");
        birthDateErrorMessage.innerHTML = messagesErrors.birthdateError_1
        birthDateErrorMessage.style.color = "red";
        birthDateErrorMessage.style.fontSize = "1rem"
        birthdate.style.border = "2px solid red"
        return false
    } else if (currentYear - registeredDate.getFullYear() < 18) {
        let birthDateErrorMessage = document.getElementById("birthdateError");
        birthDateErrorMessage.innerHTML = messagesErrors.birthdateError_2
        birthDateErrorMessage.style.color = "red";
        birthDateErrorMessage.style.fontSize = "1rem"
        birthdate.style.border = "2px solid red"
        return false
    } else {
        let birthDateErrorMessage = document.getElementById("birthdateError");
        birthDateErrorMessage.innerHTML = "Champ valide"
        birthDateErrorMessage.style.color = "green";
        birthDateErrorMessage.style.fontSize = "1rem"
        birthdate.style.border = "2px solid green"
        // document.getElementById("birthdateError").innerHTML = "";
        // birthdate.style.border = "2px solid white";
        return true;
    }
}

// I make sure that the user has entered a number greater than 0, if so, I validate his entry
function isParticipateTournaments() {
    if (participateTournaments.value <= 0) {
        let participateTournamentsErrorMessage = document.getElementById("quantityError")
        participateTournamentsErrorMessage.innerHTML = messagesErrors.participateTournamentsError;
        participateTournamentsErrorMessage.style.color = "red";
        participateTournamentsErrorMessage.style.fontSize = "1rem";
        participateTournaments.style.border = "2px solid red"
        return false
    } else {
        let participateTournamentsErrorMessage = document.getElementById("quantityError")
        participateTournamentsErrorMessage.innerHTML = "Champ valide";
        participateTournamentsErrorMessage.style.color = "green";
        participateTournamentsErrorMessage.style.fontSize = "1rem";
        participateTournaments.style.border = "2px solid green"
        // document.getElementById("quantityError").innerHTML = "";
        // participateTournaments.style.border = "2px solid white"
        return true
    }
}

// I created a variable including all the checkboxes via a class that they all have.
// I make a loop to see if one of these checkboxes is checked,
// if it is the case, I validate the user's entry, otherwise, I display an error
function isLocation(){
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            document.getElementById('locationError').innerHTML = "";
            return true;
        }
    }
    let locationsErrorMessage = document.getElementById('locationError');
    locationsErrorMessage.innerHTML = messagesErrors.locationError;
    locationsErrorMessage.style.color = "red";
    locationsErrorMessage.style.fontSize = "1rem";
    return false;
}

// I make sure that the user has checked the terms and conditions, if not,
// I display an error message, if not, I validate the user's entry
function isGeneralCondition(){
    if (!generalCondition.checked){
        let generalConditionErrorMessage = document.getElementById("generalConditionError")
        generalConditionErrorMessage.innerHTML = messagesErrors.generalConditionError;
        generalConditionErrorMessage.style.color = "red";
        generalConditionErrorMessage.style.fontSize = "1rem";
        generalCondition.style.border = "2px solid red"
        return false
    } else {
        document.getElementById("generalConditionError").innerHTML = "";
        return true;
    }
}

// this function will call all the check functions created above, each of these functions returns a boolean response.
// If all these functions are true, the whole form is correct, I display the validation message
function isFormValid() {
    isFirstNameValid()
    isLastNameValid()
    isEmailValid()
    isBirthdateValid()
    isParticipateTournaments()
    isLocation()
    isGeneralCondition()
    return isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthdateValid() && isGeneralCondition() && isLocation() ;
}



//******************** MANAGEMENT OF MODALS************************

// I select the whole form having given an id to it, then I create an event listener on the "submit" button.
// When it is triggered, I call the function isFormValid() which will make sure that each input of the form is correct,
// if everything is good, I close the modal and open the confirmation modal, otherwise the error messages are displayed and I log a message in the console
document.getElementById("formData")
    .addEventListener("submit", function (event) {
        event.preventDefault()
        if (isFormValid()) {
            closeModal()
            launchConfirmation()
            console.log("working")
            return true
        } else {
            console.log("form failed, invalid input")
            return false
        }
    })

// Submit Button
// const btnSubmit = document.getElementById("submit")
//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalBg.style.display = "block";
}

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
// This function closes the modal, using the forEach method, I will reset each user input to 0
function closeModal() {
    modalBg.style.display = "none";
    document.getElementById("FormData")
        const inputs = document.querySelectorAll("#firstName, #lastName, #email,#birthdate, #quantity")
            inputs.forEach(input=> {
                input.value = "";
            })
    // const checkbox = document.querySelectorAll("#location1, #location2, #location3, #location4, #location5, #location6")
    // checkbox.forEach(check => {
    //     console.log(check.value)
    //     check.value = false
    // })
}

function launchConfirmation() {
    formConfirmation.style.display = "block";
}

function closeConfirmation() {
    formConfirmation.style.display = "none";
}