function showCartContent() {
    if ("productsInCart" in localStorage) {
        document.querySelector(".cart-empty").style.display = "none";
        document.querySelector(".main-titles").style.display = "flex";
        document.querySelector(".finish-cart").style.display = "grid";
    }
}

showCartContent();

//Script for loading.

document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("totalCost");
    localStorage.removeItem("cartNumbers");
    document.querySelector(".loading-cart").style.display = "block";
    document.querySelector(".finish-cart").style.display = "none";
    document.querySelector(".main-titles").style.display = "none";
    document.querySelector(".product-contain").style.display = "none";
    setTimeout(() => {
        document.querySelector(".loading-cart").style.display = "none";
        location.reload();
    }, 1300)
})

//Script for modal.

document.getElementById("body").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
});
document.querySelector(".cart-form").addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "block";
    e.stopPropagation();
})
document.querySelector(".close").addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "none";
    e.stopPropagation();
})

//Script for continue to finish order.

document.getElementById("continue").addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "block";
    e.stopPropagation();
})

//Script for order information.

document.getElementById("body").addEventListener("click", () => {
    document.querySelector(".modal-order").style.display = "none";
    document.getElementById("valid-info").innerHTML = "";
});
document.querySelector(".order-main").addEventListener("click", (e) => {
    document.querySelector(".modal-order").style.display = "block";
    e.stopPropagation();
});
document.getElementById("close_order").addEventListener("click", (e) => {
    document.querySelector(".modal-order").style.display = "none";
    e.stopPropagation();
});

//Script for validating cart form.

var nameCart = document.getElementById("name-cart");
var phoneCart = document.getElementById("phone-cart");
var emailCart = document.getElementById("email-cart");
var deliveryPlace = document.getElementById("city-cart");
var deliveryAddress = document.getElementById("street-cart");
var bankPayment = document.getElementById("bank");
var cashPayment = document.getElementById("cash");
var agreement = document.getElementById("agreement");
var cartForm = document.getElementById("cart_form");
var regxEmailCart = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regxPhoneCart = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

cartForm.addEventListener("submit", validName, true);
cartForm.addEventListener("submit", validPhone, true);
cartForm.addEventListener("submit", validEmail, true);
cartForm.addEventListener("submit", validPlace, true);
cartForm.addEventListener("submit", validAddress, true);
cartForm.addEventListener("submit", validPayment, true);
cartForm.addEventListener("submit", validAgreement, true);


//Retur false.

function validateCartForm(e) {
    if (nameCart.value == "") {
        nameCart.style.borderColor = "red";
        nameCart.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Моля въведете име!";
        return false;
    }
    if (phoneCart.value == "") {
        phoneCart.style.borderColor = "red";
        phoneCart.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Моля въведете телефонен номер!";
        return false;
    } else if (!phoneCart.value.match(regxPhoneCart)) {
        phoneCart.style.borderColor = "red";
        phoneCart.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Невалиден телефонен номер!";
        return false;
    }
    if (emailCart.value == "") {
        emailCart.style.borderColor = "red";
        emailCart.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Моля въведете имейл адрес!";
        return false;
    } else if (!emailCart.value.match(regxEmailCart)) {
        emailCart.style.borderColor = "red";
        emailCart.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Невалиден имейл адрес!";
        return false;
    }
    if (deliveryPlace.value == "") {
        deliveryPlace.style.borderColor = "red";
        deliveryPlace.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Моля въведете населено място!";
        return false;
    }
    if (deliveryAddress.value == "") {
        deliveryAddress.style.borderColor = "red";
        deliveryAddress.style.backgroundColor = "#facfd2";
        document.getElementById("valid-info").innerHTML = "Моля въведете адрес!";
        return false;
    }
    if (bankPayment.checked == false && cashPayment.checked == false) {
        document.getElementById("valid-info").innerHTML = "Моля въведете начин на плащане!";
        return false;
    }
    if (agreement.checked == false) {
        document.getElementById("valid-info").innerHTML = "Моля посочете дали сте съгласни с условията за доставка!";
        return false;
    }
    e.preventDefault();
};

//Return true.

function validName() {
    if (nameCart.value != "") {
        nameCart.style.borderColor = "black";
        nameCart.style.backgroundColor = "white";
        return true;
    }
};
function validPhone() {
    if (phoneCart.value.match(regxPhoneCart)) {
        phoneCart.style.borderColor = "black";
        phoneCart.style.backgroundColor = "white";
        return true;
    }
};
function validEmail() {
    if (emailCart.value.match(regxEmailCart)) {
        emailCart.style.borderColor = "black";
        emailCart.style.backgroundColor = "white";
        return true;
    }
};
function validPlace() {
    if (deliveryPlace.value != "") {
        deliveryPlace.style.borderColor = "black";
        deliveryPlace.style.backgroundColor = "white";
        return true;
    }
};
function validAddress() {
    if (deliveryAddress.value != "") {
        deliveryAddress.style.borderColor = "black";
        deliveryAddress.style.backgroundColor = "white";
        return true;
    }
};
function validPayment() {
    if (bankPayment.checked == true || cashPayment.checked == true) {
        return true;
    }
};
function validAgreement(e) {
    if (agreement.checked == true) {
        document.querySelector(".modal-order").style.display = "block";
        e.preventDefault();
        return true;
    }
}

//Script for get results from input fields.

cartForm.addEventListener("submit", () => {
    let payment_result = document.getElementsByName("payment");
    document.getElementById("name_result").innerHTML = nameCart.value;
    document.getElementById("phone_result").innerHTML = phoneCart.value;
    document.getElementById("email_result").innerHTML = emailCart.value;
    document.getElementById("city_result").innerHTML = deliveryPlace.value;
    document.getElementById("street_result").innerHTML = deliveryAddress.value;
    for (let i = 0; i < payment_result.length; i++) {
        if (payment_result[i].checked) {
            document.getElementById("payment_result").innerHTML = payment_result[i].value;
            break;
        }
    }
});

//Script for pos button for going to home page.

document.getElementById("home-page").addEventListener("click", () => {
    location.assign("FrontPage.html");
});

//Script for end order and show pos.

var finishOrderButton = document.getElementById("make_order_button");
var confirmation = document.getElementById("confirmation");

finishOrderButton.addEventListener("click", (e) => {
    if (confirmation.checked == true) {
        document.querySelector(".pos-main").style.display = "block";
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("cartNumbers");
        document.querySelector(".modal-order").style.display = "none";
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".finish-cart").style.display = "none";
        document.querySelector(".product-contain").style.display = "none";
        document.querySelector(".main-titles").style.display = "none";
        e.stopPropagation();
        setTimeout(() => {
            document.querySelector(".receipt").style.display = "block";
        }, 1600);
    }
});

//Script for end order and show thanks msg.

document.getElementById("make_order_button_m").addEventListener("click", (e) => {
    if (document.getElementById("confirmation-m").checked == true) {
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("cartNumbers");
        document.querySelector(".order-end-s").style.display = "block";
        document.querySelector(".modal-order").style.display = "none";
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".finish-cart").style.display = "none";
        document.querySelector(".product-contain").style.display = "none";
        document.querySelector(".main-titles").style.display = "none";
        e.stopPropagation();
    }
});

//Script for button for going to home page for small screen.

document.getElementById("home-page-m").addEventListener("click", () => {
    location.assign("FrontPage.html");
});


