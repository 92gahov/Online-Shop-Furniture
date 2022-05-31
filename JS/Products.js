document.getElementById("sort-h").addEventListener("click", function (e) {
    document.getElementById("sort-cont").style.height = "200px";
    document.getElementById("sort-cont").style.borderBottom = "1px solid black";
    e.stopPropagation();
})
document.getElementById("body").addEventListener("click", function () {
    document.getElementById("sort-cont").style.height = "0px";
    setTimeout(() => {
        document.getElementById("sort-cont").style.borderBottom = "0px";
    }, 700);
})

//Scripts for sorting.

function sortSizeToUp(a, b) {
    if (a.dataset.size > b.dataset.size) {
        return -1;
    }
    if (a.dataset.size < b.dataset.size) {
        return 1;
    }
    return 0;
};
function sizeToUp() {
    let sizes = document.querySelectorAll("[data-size]");
    let sizesArray = Array.from(sizes);
    let sorted = sizesArray.sort(sortSizeToUp);
    sorted.forEach(e => {
        document.querySelector("#container").appendChild(e);
    })
};
//////////////////////////////////////////////////////////

function sortSizeToDown(a, b) {
    if (a.dataset.size < b.dataset.size) {
        return -1;
    }
    if (a.dataset.size > b.dataset.size) {
        return 1;
    }
    return 0;
};
function sizeToDown() {
    let sizes = document.querySelectorAll("[data-size]");
    let sizesArray = Array.from(sizes);
    let sorted = sizesArray.sort(sortSizeToDown);
    sorted.forEach(e => {
        document.querySelector("#container").appendChild(e);
    })
};
///////////////////////////////////////////////////////////////

function sortPriceToUp(a, b) {
    if (Math.abs(a.dataset.price) < Math.abs(b.dataset.price)) {
        return -1;
    }
    if (Math.abs(a.dataset.price) > Math.abs(b.dataset.price)) {
        return 1;
    }
    return 0;
};
function priceToUp() {
    let prices = document.querySelectorAll("[data-price]");
    let pricesArray = Array.from(prices);
    let sorted = pricesArray.sort(sortPriceToUp);
    sorted.forEach(e => {
        document.querySelector("#container").appendChild(e);
    })
};
////////////////////////////////////////////////////////

function sortPriceToDown(a, b) {
    if (Math.abs(a.dataset.price) > Math.abs(b.dataset.price)) {
        return -1;
    }
    if (a.dataset.price < b.dataset.price) {
        return 1;
    }
    return 0;
};
function priceToDown() {
    let prices = document.querySelectorAll("[data-price]");
    let pricesArray = Array.from(prices);
    let sorted = pricesArray.sort(sortPriceToDown);
    sorted.forEach(e => {
        document.querySelector("#container").appendChild(e);
    })
}
