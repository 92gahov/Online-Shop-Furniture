function validateEmail() {
    let forgotEmailField = document.getElementById("forgotPswField").value;
    let regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regx.test(forgotEmailField)) {
        document.getElementById("forgottenPswResult").style.display = "block";
        document.getElementById("forgottenPswForm").style.display = "none";
        sendEmail();
    } else {
        document.getElementById("validNotValid").innerHTML = "Невалиден имейл адрес!"
        document.getElementById("validNotValid").style.color = "red";
        document.getElementById("forgotPswField").style.borderColor = "red";
    }
}

document.getElementById("forgotPswField").addEventListener("focus", clearField);
function clearField() {
    document.getElementById("forgotPswField").value = "";
    document.getElementById("validNotValid").innerHTML = "Въведете имейл на който ще получите нова парола!";
    document.getElementById("validNotValid").style.color = "black";
    document.getElementById("forgotPswField").style.borderColor = "black";
}

function getTheEmailAddress() {
    let emailChoose = document.getElementById("forgotPswField").value;
    document.getElementById("emailAddress").innerHTML = emailChoose;
    document.getElementById("forgotPswField").value = "";
}
let ChooseEmailClick = document.getElementById("emailButton");
ChooseEmailClick.addEventListener("click", getTheEmailAddress);

document.getElementById("emailAddress").addEventListener("click", function () {
    window.open("https://www.google.com/", "_blank");
})

//---------------------------------------------------------------------------------------

let goBack = document.getElementById("goBack");
goBack.addEventListener("click", function () {
    document.getElementById("forgottenPswResult").style.display = "none";
    document.getElementById("forgottenPswForm").style.display = "block";
});

//////////////////////////////////////////

function sendEmail() {
    var Aemail = !!localStorage.getItem("email_forgotten_psw") ? JSON.parse(localStorage.getItem("email_forgotten_psw")) : [];
    var email = document.getElementById("forgotPswField").value;
    Aemail.push(email);
    localStorage.setItem("email_forgotten_psw", JSON.stringify(Aemail));
}
function showEmail() {
    var Aemail = !!localStorage.getItem("email_forgotten_psw") ? JSON.parse(localStorage.getItem("email_forgotten_psw")) : [];
    localStorage.setItem("email_forgotten_psw", JSON.stringify(Aemail));
    document.getElementById("email-name").innerHTML = Aemail[0];
};
function deleteEmail() {
    var Aemail = !!localStorage.getItem("email_forgotten_psw") ? JSON.parse(localStorage.getItem("email_forgotten_psw")) : [];
    Aemail.shift();
    localStorage.setItem("email_forgotten_psw", JSON.stringify(Aemail));
    document.getElementById("email-name").innerHTML = "";
}

//Script for enter key

document.getElementById("forgotPswField").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        validateEmail();
    }
})
