let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "Витрина",
        tag: "showcase7",
        price: 390.10,
        inCart: 0
    },
    {
        name: "Витрина",
        tag: "showcase8",
        price: 520.90,
        inCart: 0
    },
    {
        name: "Витрина",
        tag: "showcase9",
        price: 465.50,
        inCart: 0
    },
    {
        name: "Витрина",
        tag: "showcase10",
        price: 390.99,
        inCart: 0
    },
    {
        name: "Витрина",
        tag: "showcase11",
        price: 999.00,
        inCart: 0
    },
    {
        name: "Витрина",
        tag: "showcase12",
        price: 276.30,
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