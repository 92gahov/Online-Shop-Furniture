let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Маса",
        tag: "table7",
        price: 108.10,
        inCart: 0
    },
    {
        name: "Маса",
        tag: "table8",
        price: 362.45,
        inCart: 0
    },
    {
        name: "Маса",
        tag: "table9",
        price: 230.90,
        inCart: 0
    },
    {
        name: "Маса",
        tag: "table10",
        price: 302.65,
        inCart: 0
    },
    {
        name: "Маса",
        tag: "table11",
        price: 290.99,
        inCart: 0
    },
    {
        name: "Маса",
        tag: "table12",
        price: 196.70,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function () {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cartName span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cartName span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cartName span").textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".product-contain");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && productContainer) {
        productContainer.innerHTML = ""
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="products-main">
            <div class="products">
              <div>
                <img src="./Imgs/${item.tag}.jpg">
                <p>${item.name}</p>
              </div>
            </div>
            <div class="quantity">
              <p>${item.inCart}</p>
            </div>
            <div class="price">
              <p>${Number(item.price).toFixed(2)} лева</p>
            </div>
            <div class="total">
              <p>${Number(item.inCart * item.price).toFixed(2)} лева</p>
            </div>
        </div>
            `
        });

        amountTotal.innerHTML += `
        <div class="basketTotal">
        <p>Обща сума:</p>
        <p>${Number(cartCost).toFixed(2)} лева</p>
        `
    }
}

onLoadCartNumbers();
displayCart();