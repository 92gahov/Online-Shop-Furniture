//Script for validation registration form - return false.

var unameReg = document.forms["formReg"]["unameReg"];
var nameReg = document.forms["formReg"]["nameReg"];
var surnameReg = document.forms["formReg"]["surnameReg"];
var emailReg = document.forms["formReg"]["emailReg"];
var telReg = document.forms["formReg"]["telReg"];
var pswReg = document.forms["formReg"]["pswReg"];
var pswRegSecond = document.forms["formReg"]["pswRegSecond"];
var regxEmail = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regxTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var regSubmit = document.getElementById("formReg");

regSubmit.addEventListener("submit", unamVerify, true);
regSubmit.addEventListener("submit", nameVerify, true);
regSubmit.addEventListener("submit", surnameVerify, true);
regSubmit.addEventListener("submit", emailVerify, true);
regSubmit.addEventListener("submit", telVerify, true);
regSubmit.addEventListener("submit", pswVerify, true);

function validateReg(e) {
    if (unameReg.value == "") {
        unameReg.style.border = "2px solid red";
        document.getElementById("unameRegL").style.color = "red";
        return false;
    }
    if (nameReg.value == "") {
        nameReg.style.border = "2px solid red";
        document.getElementById("nameRegL").style.color = "red";
        return false;
    }
    if (surnameReg.value == "") {
        surnameReg.style.border = "2px solid red";
        document.getElementById("surnameRegL").style.color = "red";
        return false;
    }
    if (emailReg.value == "") {
        emailReg.style.border = "2px solid red";
        document.getElementById("emailRegL").style.color = "red";
        document.getElementById("invalidEmailReg").innerHTML = "";
        return false;
    } else if (!emailReg.value.match(regxEmail)) {
        emailReg.style.border = "2px solid red";
        document.getElementById("emailRegL").style.color = "red";
        document.getElementById("invalidEmailReg").innerHTML = "Невалиден имейл адрес!";
        return false;
    }
    if (telReg.value == "") {
        telReg.style.border = "2px solid red";
        document.getElementById("telRegL").style.color = "red";
        document.getElementById("invalidTelReg").innerHTML = "";
        return false;
    } else if (!telReg.value.match(regxTel)) {
        telReg.style.border = "2px solid red";
        document.getElementById("telRegL").style.color = "red";
        document.getElementById("invalidTelReg").innerHTML = "Невалиден телефонен номер!";
        return false;
    }
    if (pswReg.value == "") {
        pswReg.style.border = "2px solid red";
        document.getElementById("pswRegL").style.color = "red";
        return false;
    }
    if (pswRegSecond.value == "") {
        pswRegSecond.style.border = "2px solid red";
        document.getElementById("pswRegSecondL").style.color = "red";
        document.getElementById("pswRegL").style.color = "black";
        return false;
    } else if (pswReg.value != pswRegSecond.value) {
        pswReg.style.border = "2px solid red";
        pswRegSecond.style.border = "2px solid red";
        document.getElementById("pswRegL").style.color = "red";
        document.getElementById("pswRegSecondL").style.color = "red";
        document.getElementById("invalidPswReg").innerHTML = "Грешно въведена парола!";
        return false;
    }
    e.preventDefault();
}

//Script when validation is true.

function unamVerify() {
    if (unameReg.value != "") {
        unameReg.style.border = "2px solid black";
        document.getElementById("unameRegL").style.color = "black";
        return true;
    }
}
function nameVerify() {
    if (nameReg.value != "") {
        nameReg.style.border = "2px solid black";
        document.getElementById("nameRegL").style.color = "black";
        return true;
    }
}
function surnameVerify() {
    if (surnameReg.value != "") {
        surnameReg.style.border = "2px solid black";
        document.getElementById("surnameRegL").style.color = "black";
        return true;
    }
}
function emailVerify() {
    if (emailReg.value.match(regxEmail)) {
        emailReg.style.border = "2px solid black";
        document.getElementById("emailRegL").style.color = "black";
        document.getElementById("invalidEmailReg").innerHTML = "";
        return true;
    }
}
function telVerify() {
    if (telReg.value.match(regxTel)) {
        telReg.style.border = "2px solid black";
        document.getElementById("telRegL").style.color = "black";
        document.getElementById("invalidTelReg").innerHTML = "";
        return true;
    }
}
function pswVerify(e) {
    if (pswReg.value == pswRegSecond.value && pswRegSecond.value != "") {
        pswReg.style.border = "2px solid black";
        pswRegSecond.style.border = "2px solid black";
        document.getElementById("pswRegL").style.color = "black";
        document.getElementById("pswRegSecondL").style.color = "black";
        document.getElementById("invalidPswReg").innerHTML = "";
        document.getElementById("unameRegL").style.color = "black";
        document.getElementById("regLoadiong").style.display = "block";
        document.getElementById("formReg").style.display = "none";
        setTimeout(function () {
            document.getElementById("regLoadiong").style.display = "none";
        }, 1500);
        e.preventDefault();
        return true;
    }
}

//Script for showing successfull registration.

document.getElementById("formReg").addEventListener("submit", function () {
    setTimeout(function () {
        if (document.getElementById("formReg").style.display === "none") {
            document.getElementById("SuccessReg").style.display = "block";
        }
    }, 1500);
})

//Script for showing password inputs by eye.

document.getElementById("eyeRegF").addEventListener("click", function () {
    if (document.getElementById("pswReg").type === "password") {
        document.getElementById("pswReg").type = "text";
        document.getElementById("pswReg").style.width = "80%";
    } else {
        document.getElementById("pswReg").type = "password";
    }
})
document.getElementById("eyeRegS").addEventListener("click", function () {
    if (document.getElementById("pswRegSecond").type === "password") {
        document.getElementById("pswRegSecond").type = "text";
        document.getElementById("pswRegSecond").style.width = "80%";
    } else {
        document.getElementById("pswRegSecond").type = "password";
    }
})

//Script for go back to registration form by button.

document.getElementById("regBtnBack").addEventListener("click", function () {
    document.getElementById("SuccessReg").style.display = "none";
    document.getElementById("regLoadiong").style.display = "none";
    document.getElementById("formReg").style.display = "block";
    document.getElementById("unameReg").value = "";
    document.getElementById("nameReg").value = "";
    document.getElementById("surnameReg").value = "";
    document.getElementById("emailReg").value = "";
    document.getElementById("telReg").value = "";
    document.getElementById("pswReg").value = "";
    document.getElementById("pswRegSecond").value = "";
})


//Script for going to chosen page.

function goToWardrobes() {
    location.assign("WardrobePage1.html");
};
function goToTables() {
    location.assign("TablePage1.html");
};
function goToBeds() {
    location.assign("BedsPage1.html");
};
function goToShowcase() {
    location.assign("ShowcasePage1.html");
};
function goToOthers() {
    location.assign("OthersPage1.html");
};

//Script for enter key.

document.getElementsByTagName("INPUT").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        validateReg();
    }
})













