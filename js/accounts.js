let accountsHeader = document.querySelector(".accounts-header");
let checks = document.querySelectorAll(".fa-solid");
let accounts = document.querySelectorAll(".accounts-cards .card");
let prices = document.querySelectorAll(".price");
let totalTL = document.querySelector(".total-price");


document.querySelector(".total-accounts").innerHTML =
  "Accounts: " + accounts.length;

window.onscroll = handleWindowScroll;

var totalPrice = 0;
prices.forEach(function (element) {
  var priceText = element.textContent.replace(" TL", "");
  var priceValue = parseFloat(priceText);

  totalPrice += priceValue;
});

totalTL.innerHTML = "Total price: " + totalPrice + "TL"

function handleWindowScroll() {
  console.log(window.scrollY);
  const maxScroll = 80;
  const ratio = Math.min(window.scrollY / maxScroll, 1);
  const newTop = 80 - 80 * ratio;
  accountsHeader.style.top = newTop + "px";
}

for (let i = 0; i <= checks.length; i++) {
  checks[i].onclick = function () {
    checks[i].style.color = "#72cc50";
  };
}

