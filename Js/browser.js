const btn = document.getElementById("menu-btn");
const lst = document.getElementById("menu-lst");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  lst.classList.toggle("hidden");
}
