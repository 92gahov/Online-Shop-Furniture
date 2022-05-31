//Script for greetings in middle.

let time = new Date().getHours();
let greetings;
if (time < 10) {
    greetings = "Добро утро";
} else if (time < 18) {
    greetings = "Добър ден";
} else {
    greetings = "Добър вечер";
}
document.getElementById("idGreetings").innerHTML = greetings + ", и добре дошли в " + "<b>" + "Gahov Furniture" + "</b>" + " . Тук ще откриете голямо разнообразие от красиви и качествени мебели на страхотни цени." + "<br>" + "Доверете се на нас!";

//Script for showing main search content.

document.getElementById("main-search").addEventListener("focus", function (e) {
    document.getElementById("main-search-cont").style.display = "block";
    document.getElementById("main-search").style.borderColor = "black";
    document.getElementById("main-search").value = "";
    e.stopPropagation();
});

document.getElementById("main-search").addEventListener("click", function (e) {
    document.getElementById("main-search-cont").style.display = "block";
    document.getElementById("main-search").style.borderColor = "black";
    document.getElementById("main-search").value = "";
    e.stopPropagation();
});

document.getElementById("body").addEventListener("click", function () {
    document.getElementById("main-search-cont").style.display = "none";
})

function getSearching() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("main-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("main-search-cont");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//Script for searching in main search.

function search() {
    let furniture = ["бюра", "бюро", "витрина", "витрини", "врата", "врати", "гардероб", "гардероби", "детско легло", "други", "етажерка за стена", "кухни", "кухня", "ламперия", "малка библиотека", "маса", "маси", "спални", "спалня", "тв секция", "тв шкаф", "тоалетка", "шкаф"];
    let searchField = document.getElementById("main-search").value;
    if (searchField == furniture[0] || searchField == furniture[1]) {
        location.assign("OthersPage4.html");
    } else if (searchField == furniture[2] || searchField == furniture[3]) {
        location.assign("ShowcasePage1.html");
    } else if (searchField == furniture[4] || searchField == furniture[5]) {
        location.assign("OthersPage3.html");
    } else if (searchField == furniture[6] || searchField == furniture[7]) {
        location.assign("WardrobePage1.html");
    } else if (searchField == furniture[8] || searchField == furniture[9] || searchField == furniture[14] || searchField == furniture[20] || searchField == furniture[22]) {
        location.assign("OthersPage1.html");
    } else if (searchField == furniture[11] || searchField == furniture[12]) {
        location.assign("OthersPage6.html");
    } else if (searchField == furniture[13]) {
        location.assign("OthersPage3.html");
    } else if (searchField == furniture[15] || searchField == furniture[16]) {
        location.assign("TablePage1.html");
    } else if (searchField == furniture[17] || searchField == furniture[18]) {
        location.assign("BedsPage1.html");
    } else if (searchField == furniture[19] || searchField == furniture[21] || searchField == furniture[10]) {
        location.assign("OthersPage2.html");
    } else if (searchField == "") {
        document.getElementById("main-search").style.borderColor = "red";
    } else {
        document.getElementById("main-search").value = "Няма намерени резултати!";
        document.getElementById("main-search").style.borderColor = "red";
    }
}

//Script for search by enter key.

var inputField = document.getElementById("main-search");
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});

//Script for entry form - dispaly or not.

let bodyForm = document.getElementById("body");
let btnEntryForm = document.getElementById("eBtn");
let entryForm = document.getElementById("iddivForm1");
let closeForm = document.getElementById("closeForm");
bodyForm.addEventListener("click", function () {
    setTimeout(function () {
        entryForm.style.display = "none";
    }, 200)
    entryForm.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0)' }
    ], { duration: 300 })
    document.getElementById("uname").value = "";
    document.getElementById("uname").style.borderColor = "black";
    document.getElementById("psw").value = "";
    document.getElementById("psw").style.borderColor = "black";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("unameL").style.fontWeight = "normal";
    document.getElementById("pswL").style.fontWeight = "normal";
}, false);
btnEntryForm.addEventListener("click", function (event) {
    document.getElementById("idnavMobileCont").style.width = "0";
    document.getElementById("main-search-cont-m").style.display = "none";
    document.getElementById("main-search-cont").style.display = "none";
    event.stopPropagation();
}, false);
entryForm.addEventListener("click", function (event) {
    entryForm.style.display = "block";
    event.stopPropagation();
}, false);
closeForm.addEventListener("click", function () {
    setTimeout(function () {
        entryForm.style.display = "none";
    }, 200)
    entryForm.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0)' }
    ], { duration: 300 })
    document.getElementById("uname").value = "";
    document.getElementById("uname").style.borderColor = "black";
    document.getElementById("psw").value = "";
    document.getElementById("psw").style.borderColor = "black";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("unameL").style.fontWeight = "normal";
    document.getElementById("pswL").style.fontWeight = "normal";
}, false);
document.getElementById("uname").addEventListener("focus", function () {
    document.getElementById("unameL").style.fontWeight = "bold";
})
document.getElementById("psw").addEventListener("focus", function () {
    document.getElementById("pswL").style.fontWeight = "bold";
});

//Script for showing password in entry form.

function showPsw() {
    let seePsw = document.getElementById("psw");
    if (seePsw.type === "password") {
        seePsw.type = "text";
    } else {
        seePsw.type = "password";
    }
}

//Script for search content for small screen - display or not.

let bodySearch = document.getElementById("body");
let searchFieldMobile = document.getElementById("searchFieldMobile");
let searchButtonMobile = document.getElementById("searchButtonMobile");
let searchButtonMobileUp = document.getElementById("searchButtonMobileUp");
let btnEntryForMobile = document.getElementById("eBtn");
btnEntryForMobile.addEventListener("click", function () {
    document.getElementById("mainSearchMobileCont").style.display = "none";
}, false);
bodySearch.addEventListener("click", function (e) {
    setTimeout(function () {
        document.getElementById("mainSearchMobileCont").style.display = "none"
    }, 200)
    document.getElementById("mainSearchMobileCont").animate([
        { transform: 'scale(1)' },
        { transform: 'scale(0)' }
    ], { duration: 400 });
    e.stopPropagation();
}, false);
searchButtonMobileUp.addEventListener("click", function (e) {
    document.getElementById("mainSearchMobileCont").style.display = "block";
    document.getElementById("idnavMobileCont").style.width = "0";
    e.stopPropagation();
}, false);
searchFieldMobile.addEventListener("click", function (e) {
    document.getElementById("mainSearchMobileCont").style.display = "block";
    e.stopPropagation();
}, false);
searchButtonMobile.addEventListener("click", function (e) {
    document.getElementById("mainSearchMobileCont").style.display = "block";
    e.stopPropagation();
}, false);

//Script for showing main search content for small screen.

document.getElementById("searchFieldMobile").addEventListener("click", function (e) {
    document.getElementById("main-search-cont-m").style.display = "block";
    document.getElementById("searchFieldMobile").value = "";
    e.stopPropagation();
});

document.getElementById("body").addEventListener("click", function () {
    document.getElementById("main-search-cont-m").style.display = "none";
});
function getSearchingM() {
    var inputM, filterM, ulM, liM, aM, iM, txtValueM;
    inputM = document.getElementById("searchFieldMobile");
    filterM = inputM.value.toUpperCase();
    ulM = document.getElementById("main-search-cont-m");
    liM = ulM.getElementsByTagName("li");
    for (iM = 0; iM < liM.length; iM++) {
        aM = liM[iM].getElementsByTagName("a")[0];
        txtValueM = aM.textContent || aM.innerHTML;
        if (txtValueM.toUpperCase().indexOf(filterM) > -1) {
            liM[iM].style.display = "";
        } else {
            liM[iM].style.display = "none";
        }
    }
}

//Script for searching in main search for small screen.

function searchM() {
    let furniture = ["бюра", "бюро", "витрина", "витрини", "врата", "врати", "гардероб", "гардероби", "детско легло", "други", "етажерка за стена", "кухни", "кухня", "ламперия", "малка библиотека", "маса", "маси", "спални", "спалня", "тв секция", "тв шкаф", "тоалетка", "шкаф"];
    let searchFieldM = document.getElementById("searchFieldMobile").value;
    if (searchFieldM == furniture[0] || searchFieldM == furniture[1]) {
        location.assign("OthersPage4.html");
    } else if (searchFieldM == furniture[2] || searchFieldM == furniture[3]) {
        location.assign("ShowcasePage1.html");
    } else if (searchFieldM == furniture[4] || searchFieldM == furniture[5]) {
        location.assign("OthersPage3.html");
    } else if (searchFieldM == furniture[6] || searchFieldM == furniture[7]) {
        location.assign("WardrobePage1.html");
    } else if (searchFieldM == furniture[8] || searchFieldM == furniture[9] || searchFieldM == furniture[14] || searchFieldM == furniture[20] || searchFieldM == furniture[22]) {
        location.assign("OthersPage1.html");
    } else if (searchFieldM == furniture[11] || searchFieldM == furniture[12]) {
        location.assign("OthersPage6.html");
    } else if (searchFieldM == furniture[13]) {
        location.assign("OthersPage3.html");
    } else if (searchFieldM == furniture[15] || searchFieldM == furniture[16]) {
        location.assign("TablePage1.html");
    } else if (searchFieldM == furniture[17] || searchFieldM == furniture[18]) {
        location.assign("BedsPage1.html");
    } else if (searchFieldM == furniture[19] || searchFieldM == furniture[21] || searchFieldM == furniture[10]) {
        location.assign("OthersPage2.html");
    } else if (searchFieldM == "") {
        document.getElementById("searchFieldMobile").style.borderColor = "red";
    } else {
        document.getElementById("searchFieldMobile").value = "Няма намерени резултати!";
        document.getElementById("searchFieldMobile").style.borderColor = "red";
    }
}

//Script for search by enter key for small screen.

var inputFieldM = document.getElementById("searchFieldMobile");
inputFieldM.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchM();
    }
})

//Script for getting right username with loading display.

function getRightUname(e) {
    let unameField = document.getElementById("uname").value;
    let pswField = document.getElementById("psw").value;
    let usernames = ["g_gahov", "m_preshelkova"];
    let passwords = [123456, 654321];
    if (unameField == usernames[0] && pswField == passwords[1]) {
        document.getElementById("loading").style.display = "block";
        document.getElementById("iddivForm1").style.display = "none";
        document.getElementById("eBtn").style.display = "none";
        document.getElementById("profileImg").style.display = "none";
        sessionStorage.setItem("username", JSON.stringify(unameField));
    } else if (unameField == usernames[1] && pswField == passwords[0]) {
        document.getElementById("loading").style.display = "block";
        document.getElementById("iddivForm1").style.display = "none";
        document.getElementById("eBtn").style.display = "none";
        document.getElementById("profileImg").style.display = "none";
        sessionStorage.setItem("username", JSON.stringify(unameField));
    } else {
        document.getElementById("wrong").innerHTML = "Грешен потребител/парола!";
        document.getElementById("wrong").style.display = "block";
        document.getElementById("uname").style.borderColor = "red";
        document.getElementById("psw").style.borderColor = "red";
        document.getElementById("iddivForm1").style.display = "block";
        document.getElementById("exBtn").style.display = "none";
        e.stopPropagation();
    }
}
function removeLoading() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.getElementById("profileImg").style.display = "block";
        document.getElementById("exBtn").style.display = "block";
        let username = JSON.parse(sessionStorage.getItem("username"));
        document.getElementById("idprofileName").innerHTML = username;
        document.getElementById("profileName").style.display = "block";
        document.getElementById("iddivForm1").style.display = "none";
    }, 1000);
}
function getProfile(a) {
    a.preventDefault();
    getRightUname();
    removeLoading();
}
let formSubmit = document.getElementById("form1");
formSubmit.addEventListener("submit", getProfile);

//Script for showing username in every page.

window.onload = showUser();
function showUser() {
    let username = JSON.parse(sessionStorage.getItem("username"));
    if ("username" in sessionStorage) {
        document.getElementById("profileName").style.display = "block";
        document.getElementById("eBtn").style.display = "none";
        document.getElementById("exBtn").style.display = "block";
        document.getElementById("idprofileName").innerHTML = username;
    }
}

//Script for making navbar for small screen - display or not.

function openNav() {
    document.getElementById("idnavMobileCont").style.width = "250px";
    document.getElementById("body").style.overflow = "hidden";
}
let closeNav = document.getElementById("closeNav");
let body = document.getElementById("body");
let openNavM = document.getElementById("openNav");
let navCont = document.getElementById("idnavMobileCont");
closeNav.addEventListener("click", function (e) {
    navCont.style.width = "0";
    body.style.overflowY = "scroll";
    e.stopPropagation();
}, false);
body.addEventListener("click", function () {
    navCont.style.width = "0";
    body.style.overflowY = "scroll";
}, false);
openNavM.addEventListener("click", function (e) {
    navCont.style.width = "250px";
    document.getElementById("mainSearchMobileCont").style.display = "none";
    document.getElementById("iddivForm1").style.display = "none";
    document.getElementById("main-search-cont-m").style.display = "none";
    e.stopPropagation();
}, false);
navCont.addEventListener("click", function (e) {
    navCont.style.width = "250px";
    e.stopPropagation();
}, false);

//Script for question form for exit from profile.

let exitBtnProfile = document.getElementById("idexBtn");
let closeBtnQuestion = document.getElementById("closeQuestion");
let answerNo = document.getElementById("answerNo");
let clickModal = document.getElementById("modalShadow");
let clickOnFrame = document.getElementById("questionFrame");
exitBtnProfile.addEventListener("click", function (e) {
    clickModal.style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    e.stopPropagation();
})
closeBtnQuestion.addEventListener("click", function (e) {
    setTimeout(function () {
        clickModal.style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 400);
    clickOnFrame.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, -500px)' }
    ], { duration: 650 })
    e.stopPropagation();
})
answerNo.addEventListener("click", function (e) {
    setTimeout(function () {
        clickModal.style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 400);
    clickOnFrame.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, -500px)' }
    ], { duration: 650 });
    e.stopPropagation();
});
clickModal.addEventListener("click", function (e) {
    document.getElementById("body").style.overflow = "hidden";
    clickOnFrame.style.backgroundColor = "orange";
    e.stopPropagation();
    count = 0;
    let frame = setInterval(function () {
        if (clickOnFrame.style.backgroundColor == "orange") {
            clickOnFrame.style.backgroundColor = "red";
        } else if (clickOnFrame.style.backgroundColor == "red") {
            clickOnFrame.style.backgroundColor = "orange";
        } else {
            clickOnFrame.style.backgroundColor = "orange";
        }
        if (count > 8) { clearInterval(frame) };
        count++;
    }, 70);
})
clickOnFrame.addEventListener("click", function (e) {
    clickOnFrame.style.backgroundColor = "orange";
    e.stopPropagation();
})
function clickAnswerYes() {
    document.getElementById("exBtn").style.display = "none";
    document.getElementById("profileImg").style.display = "none";
    document.getElementById("profileName").style.display = "none";
    document.getElementById("loading").style.display = "block";
    document.getElementById("modalShadow").style.display = "none";
    document.getElementById("uname").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("uname").style.borderColor = "black"
    document.getElementById("psw").style.borderColor = "black";
    document.getElementById("wrong").innerHTML = "";
    sessionStorage.removeItem("username");
}
function removeLoadingExit() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.getElementById("eBtn").style.display = "block";
        document.getElementById("profileImg").style.display = "block"
        document.getElementById("body").style.overflowY = "scroll";
    }, 1000);
}
function exitFromProfile() {
    clickAnswerYes();
    removeLoadingExit();
}
let answerYes = document.getElementById("answerYes");
answerYes.addEventListener("click", exitFromProfile);

//Script for footer links - dispaly or not.

window.onload = openCloseFooterMobile();
function openCloseFooterMobile(e) {
    let footerMobileLinks = document.getElementById("footerMobileLinks");
    if (footerMobileLinks.style.height === "0px") {
        footerMobileLinks.style.height = "410px";
        document.getElementById("body").style.overflow = "hidden";
        e.stopPropagation();
    } else {
        footerMobileLinks.style.height = "0px";
    }
}
let footerMobileButton = document.getElementById("footerMobileButton");
footerMobileButton.addEventListener("click", openCloseFooterMobile);
footerMobileButton.addEventListener("click", function () {
    document.getElementById("main-search-cont-m").style.display = "none";
})
let clickOnBodyFooter = document.getElementById("body");
clickOnBodyFooter.addEventListener("click", function () {
    document.getElementById("footerMobileLinks").style.height = "0px";
    document.getElementById("footerMobileButton").classList.remove("change");
})
let clickOnFooterMobileLinks = document.getElementById("footerMobileLinks");
clickOnFooterMobileLinks.addEventListener("click", function (e) {
    document.getElementById("footerMobileLinks").style.height = "410px";
    e.stopPropagation();
})

//Script for going to registration page.

function goToRegister() {
    location.assign("Registration_page.html");
}

//Script for display number products in cart.

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cartName span").textContent = productNumbers;
    }
}

onLoadCartNumbers();

