const cartKey = "cartItems";
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const viewCartButton = document.getElementById("view-cart");

if (addToCartButtons) {
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement.querySelector("strong").textContent;
      let cart = JSON.parse(sessionStorage.getItem(cartKey)) || [];
      cart.push(item);
      sessionStorage.setItem(cartKey, JSON.stringify(cart));
      alert(`Added "${item}" to cart!`);
    });
  });
}

if (viewCartButton) {
  viewCartButton.addEventListener("click", () => {
    let cart = JSON.parse(sessionStorage.getItem(cartKey)) || [];
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert("Items in cart:\n" + cart.join("\n"));
    }
  });
}

// =============================
// 2. Contact Form (localStorage)
// =============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const contactData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      message: document.getElementById("message").value,
      customOrder: document.getElementById("customOrder").checked,
    };

    localStorage.setItem("contactSubmission", JSON.stringify(contactData));
    alert(`Thank you for your message, ${contactData.name}!`);
    contactForm.reset();
  });
}

// =============================
// 3. Subscription Alert (if used in footer)
// =============================
const subscribeBtn = document.getElementById("subscribe-btn");
const subscribeInput = document.getElementById("subscribe-input");

if (subscribeBtn && subscribeInput) {
  subscribeBtn.addEventListener("click", () => {
    const email = subscribeInput.value.trim();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      subscribeInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  });
}
