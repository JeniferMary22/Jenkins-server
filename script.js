
// Shopping Cart

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to your cart!");
}

// Update Cart

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let total = document.getElementById("total");

    let sum = 0;

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    } else {

        cartItems.innerHTML = "";

        cart.forEach((item, index) => {

            sum += item.price;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} - ₹${item.price}</span>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>
            `;
        });
    }

    total.innerText = "Total: ₹" + sum;
}

// Remove Product

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert("Thank you for shopping with Choco World!");

        cart = [];

        updateCart();
    }
}

// Contact Form

document.getElementById("contact-form")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

    this.reset();

});
