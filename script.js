//Get Data
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm() {

    clearMessages();
    let errorFlag = "false";

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag: true;
    }

    if(!validatePhoneNumber(phone.value)) {
        errorNodes[1].innerText = "Please enter a valid phone number";
        phone.classList.add("error-border");
        errorFlag: true;
    }

    if(!emailIsValid(email.value)) {
        errorNodes[2].innerText = "Please enter a valid email address";
        email.classList.add("error-border");
        errorFlag: true;
    }

    if(message.value.length < 1) {
        errorNodes[3].innerText = "Please enter your message";
        message.classList.add("error-border");
        errorFlag: true;
    }

    if(!errorFlag) {
        success.innerText = "Your message has been sent!";
    }
}

//Clear error or success messages
function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    phone.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//Check if email or phone number is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function validatePhoneNumber(phone) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return pattern.test(phone);
}
