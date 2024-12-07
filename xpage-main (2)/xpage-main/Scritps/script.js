function addToCart(productName) {
  console.log(`${productName} został dodany do koszyka.`);
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");
    addToCart(productName);
  });
});

//==================================================================

const servicesList = document.getElementById("services-list");
const serviceDetails = document.getElementById("service-details");

servicesList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const details = event.target.dataset.details;
    serviceDetails.textContent = details;
    serviceDetails.style.display = "block";
  }
});



