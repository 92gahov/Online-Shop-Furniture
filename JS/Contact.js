//Script for validate contact form.
//Return false.

var nameC = document.forms["contactForm"]["nameC"];
var telC = document.forms["contactForm"]["telC"];
var emailC = document.forms["contactForm"]["emailC"];
var textC = document.forms["contactForm"]["textC"];
var regxEmailC = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regxTelC = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var contactSubmit = document.getElementById("contactForm");

contactSubmit.addEventListener("submit", CnameVerify, true);
contactSubmit.addEventListener("submit", CtelVerify, true);
contactSubmit.addEventListener("submit", CemailVerify, true);
contactSubmit.addEventListener("submit", CtextVerify, true);

function ValidateContact(e) {
    if (nameC.value === "") {
        nameC.style.border = "2px solid red";
        return false;
    };
    if (telC.value === "") {
        telC.style.border = "2px solid red";
        return false;
    } else if (!telC.value.match(regxTelC)) {
        telC.style.border = "2px solid red";
        telC.value = "Невалиден телефонен номер!";
        telC.style.color = "red";
        return false;
    };
    if (emailC.value === "") {
        emailC.style.border = "2px solid red";
        return false
    } else if (!emailC.value.match(regxEmailC)) {
        emailC.style.border = "2px solid red";
        emailC.value = "Невалиден имейл адрес!"
        emailC.style.color = "red";
        return false;
    };
    if (textC.value === "") {
        textC.style.border = "2px solid red";
        return false;
    }
    sendName();
    sendPhone();
    sendEmail();
    sendMessage();
    e.preventDefault();
}

//Return true.

function CnameVerify() {
    if (nameC.value != "") {
        nameC.style.border = "2px solid black";
        return true;
    }
}
function CtelVerify() {
    if (telC.value.match(regxTelC)) {
        telC.style.border = "2px solid black";
        return true;
    }
}
function CemailVerify() {
    if (emailC.value.match(regxEmailC)) {
        emailC.style.border = "2px solid black";
        return true;
    }
}
function CtextVerify(e) {
    if (textC.value != "") {
        textC.style.border = "2px solid black";
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("envelope").style.display = "block";
        document.getElementById("envBoxMain").style.display = "block";
        setTimeout(function () {
            if (document.getElementById("envelope").style.display === "block") {
                document.getElementById("envelope").style.display = "none";
                document.getElementById("envelopeEnd").style.display = "block";
            }
        }, 1400);
        setTimeout(function () {
            if (document.getElementById("envelopeEnd").style.display === "block") {
                document.getElementById("envelopeEnd").style.display = "none";
                document.getElementById("envBoxMain").style.display = "none";
                document.getElementById("ContactBackMain").style.display = "block";
            }
        }, 3600);
        e.preventDefault();
        return true;
    }
}

//Script when clicking in input.

document.getElementById("nameC").addEventListener("focus", function () {
    document.getElementById("nameC").style.border = "2px solid black";
});
document.getElementById("telC").addEventListener("focus", function () {
    document.getElementById("telC").style.border = "2px solid black";
    document.getElementById("telC").value = "";
    document.getElementById("telC").style.color = "black";
});
document.getElementById("emailC").addEventListener("focus", function () {
    document.getElementById("emailC").style.border = "2px solid black";
    document.getElementById("emailC").value = "";
    document.getElementById("emailC").style.color = "black";
});
document.getElementById("textC").addEventListener("focus", function () {
    document.getElementById("textC").style.border = "2px solid black";
});

//Scipt for back button to contact form.

document.getElementById("ContactBackP").addEventListener("mouseover", function () {
    document.getElementById("ContactBackP").style.transform = "translateY(84px)";
})
document.getElementById("ContactBackB").addEventListener("mouseover", function () {
    document.getElementById("ContactBackP").style.transform = "translateY(84px)";
})
document.getElementById("ContactBackP").addEventListener("mouseleave", function () {
    document.getElementById("ContactBackP").style.transform = "translateY(0px)";
})
document.getElementById("ContactBackB").addEventListener("mouseleave", function () {
    document.getElementById("ContactBackP").style.transform = "translateY(0px)"
})

//Script when click the back button.

document.getElementById("backButton").addEventListener("click", function () {
    document.getElementById("ContactBackMain").style.display = "none";
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("contactForm").animate([
        { transform: "scaleX(0)" },
        { transform: "scaleX(1)" }
    ], { duration: 1000 });
    document.getElementById("nameC").value = "";
    document.getElementById("telC").value = "";
    document.getElementById("emailC").value = "";
    document.getElementById("textC").value = "";
})

//Script for validate form for small screen.
//Return false.

var nameCM = document.getElementById("nameCMobile");
var telCM = document.getElementById("telCMobile");
var emailCM = document.getElementById("emailCMobile");
var textCM = document.getElementById("textCMobile");
var contactSubmitM = document.getElementById("contactFormMobile");
contactSubmitM.addEventListener("submit", CnameVerifyM, true);
contactSubmitM.addEventListener("submit", CtelVerifyM, true);
contactSubmitM.addEventListener("submit", CemailVerifyM, true);
contactSubmitM.addEventListener("submit", CtextVerifyM, true);

function ValidateContactMobile(e) {
    if (nameCM.value === "") {
        nameCM.style.border = "2px solid red";
        nameCM.value = "Въведете име"
        nameCM.style.color = "red";
        return false;
    };
    if (telCM.value === "") {
        telCM.style.border = "2px solid red";
        telCM.value = "Въведете телефонен номер";
        telCM.style.color = "red";
        return false;
    } else if (!telCM.value.match(regxTelC)) {
        telCM.style.border = "2px solid red";
        telCM.value = "Невалиден телефонен номер!";
        telCM.style.color = "red";
        return false;
    };
    if (emailCM.value === "") {
        emailCM.style.border = "2px solid red";
        emailCM.value = "Въведете имейл адрес"
        emailCM.style.color = "red";
        return false;
    } else if (!emailCM.value.match(regxEmailC)) {
        emailCM.style.border = "2px solid red";
        emailCM.value = "Невалиден имейл адрес!";
        emailCM.style.color = "red";
        return false;
    };
    if (textCM.value === "") {
        textCM.style.border = "2px solid red";
        textCM.value = "Направете запитване";
        textCM.style.color = "red";
        return false;
    };
    sendNameM();
    sendPhoneM();
    sendEmailM();
    sendMessageM();
    e.preventDefault();
};

//Return true.

function CnameVerifyM() {
    if (nameCM.value != "") {
        nameCM.style.border = "2px solid black";
        nameCM.style.color = "black";
        return true;
    };
};
function CtelVerifyM() {
    if (telCM.value.match(regxTelC)) {
        telCM.style.border = "2px solid black";
        telCM.style.color = "black";
        return true;
    };
};
function CemailVerifyM() {
    if (emailCM.value.match(regxEmailC)) {
        emailCM.style.border = "2px solid black";
        emailCM.style.color = "black";
        return true;
    };
};
function CtextVerifyM(e) {
    if (textCM.value != "") {
        textCM.style.border = "2px solid black";
        textCM.style.color = "black";
        document.getElementById("contactFormMobile").style.display = "none";
        document.getElementById("loading-contact-form-m").style.display = "block";
        setTimeout(function () {
            if (document.getElementById("loading-contact-form-m").style.display === "block") {
                document.getElementById("loading-contact-form-m").style.display = "none";
                document.getElementById("contact-back-mobile").style.display = "block";
            }
        }, 1000);
        e.preventDefault();
        return true;
    };
};

//Script for go back to contact form.

document.getElementById("back-button-mobile").addEventListener("click", function () {
    document.getElementById("contact-back-mobile").style.display = "none";
    document.getElementById("contactFormMobile").style.display = "block";
    document.getElementById("contactFormMobile").animate([
        { transform: "scaleX(0)" },
        { transform: "scaleX(1)" }
    ], { duration: 500 });
    nameCM.value = "";
    telCM.value = "";
    emailCM.value = "";
    textCM.value = "";
})

//Script when click in input field for small screen.

nameCM.addEventListener("focus", function () {
    nameCM.value = "";
    nameCM.style.color = "black";
    nameCM.style.border = "2px solid black";
});
telCM.addEventListener("focus", function () {
    telCM.value = "";
    telCM.style.color = "black";
    telCM.style.border = "2px solid black";
});
emailCM.addEventListener("focus", function () {
    emailCM.value = "";
    emailCM.style.color = "black";
    emailCM.style.border = "2px solid black";
});
textCM.addEventListener("focus", function () {
    textCM.value = "";
    textCM.style.color = "black";
    textCM.style.border = "2px solid black";
});

//Script for sending message.

function sendName() {
    var Aname = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var name = document.getElementById("nameC").value;
    Aname.push(name);
    localStorage.setItem("name", JSON.stringify(Aname));
};
function sendPhone() {
    var Aphone = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var phone = document.getElementById("telC").value;
    Aphone.push(phone);
    localStorage.setItem("phone", JSON.stringify(Aphone));
};
function sendEmail() {
    var Aemail = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var email = document.getElementById("emailC").value;
    Aemail.push(email);
    localStorage.setItem("email", JSON.stringify(Aemail));
};
function sendMessage() {
    var Amsg = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    var msg = document.getElementById("textC").value;
    Amsg.push(msg);
    localStorage.setItem("message", JSON.stringify(Amsg));
};

/////////////////////////////////////////////

function showMsg() {
    var Aname = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var Aphone = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var Aemail = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var Amsg = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    localStorage.setItem("name", JSON.stringify(Aname));
    localStorage.setItem("phone", JSON.stringify(Aphone));
    localStorage.setItem("email", JSON.stringify(Aemail));
    localStorage.setItem("message", JSON.stringify(Amsg));
    document.getElementById("name-value").innerHTML = Aname[0];
    document.getElementById("phone-value").innerHTML = Aphone[0];
    document.getElementById("email-value").innerHTML = Aemail[0];
    document.getElementById("msg-value").innerHTML = Amsg[0]
};

////////////////////////////////////////////////

function deleteMsg() {
    var Aname = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var Aphone = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var Aemail = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var Amsg = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    Aname.shift();
    Aphone.shift();
    Aemail.shift();
    Amsg.shift();
    localStorage.setItem("name", JSON.stringify(Aname));
    localStorage.setItem("phone", JSON.stringify(Aphone));
    localStorage.setItem("email", JSON.stringify(Aemail));
    localStorage.setItem("message", JSON.stringify(Amsg));
    document.getElementById("name-value").innerHTML = "";
    document.getElementById("phone-value").innerHTML = "";
    document.getElementById("email-value").innerHTML = "";
    document.getElementById("msg-value").innerHTML = "";
}

//////////////////////For smal screen.

function sendNameM() {
    var AnameM = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var nameM = document.getElementById("nameCMobile").value;
    AnameM.push(nameM);
    localStorage.setItem("name", JSON.stringify(AnameM));
};
function sendPhoneM() {
    var AphoneM = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var phoneM = document.getElementById("telCMobile").value;
    AphoneM.push(phoneM);
    localStorage.setItem("phone", JSON.stringify(AphoneM));
};
function sendEmailM() {
    var AemailM = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var emailM = document.getElementById("emailCMobile").value;
    AemailM.push(emailM);
    localStorage.setItem("email", JSON.stringify(AemailM));
};
function sendMessageM() {
    var AmsgM = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    var msgM = document.getElementById("textCMobile").value;
    AmsgM.push(msgM);
    localStorage.setItem("message", JSON.stringify(AmsgM));
};

/////////////////////////////////////////////////

function showMsgM() {
    var AnameM = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var AphoneM = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var AemailM = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var AmsgM = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    localStorage.setItem("name", JSON.stringify(AnameM));
    localStorage.setItem("phone", JSON.stringify(AphoneM));
    localStorage.setItem("email", JSON.stringify(AemailM));
    localStorage.setItem("message", JSON.stringify(AmsgM));
    document.getElementById("name-value").innerHTML = AnameM[0];
    document.getElementById("phone-value").innerHTML = AphoneM[0];
    document.getElementById("email-value").innerHTML = AemailM[0];
    document.getElementById("msg-value").innerHTML = AmsgM[0]
};

//////////////////////////////////////////////////

function deleteMsgM() {
    var AnameM = !!localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : [];
    var AphoneM = !!localStorage.getItem("phone") ? JSON.parse(localStorage.getItem("phone")) : [];
    var AemailM = !!localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : [];
    var AmsgM = !!localStorage.getItem("message") ? JSON.parse(localStorage.getItem("message")) : [];
    AnameM.shift();
    AphoneM.shift();
    AemailM.shift();
    AmsgM.shift();
    localStorage.setItem("name", JSON.stringify(AnameM));
    localStorage.setItem("phone", JSON.stringify(AphoneM));
    localStorage.setItem("email", JSON.stringify(AemailM));
    localStorage.setItem("message", JSON.stringify(AmsgM));
    document.getElementById("name-value").innerHTML = "";
    document.getElementById("phone-value").innerHTML = "";
    document.getElementById("email-value").innerHTML = "";
    document.getElementById("msg-value").innerHTML = "";
};

//Scripts for enter key.

document.getElementsByTagName("INPUT").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        ValidateContact();
        ValidateContactMobile();
    }
})




