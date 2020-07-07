const btn = document.querySelector(".toggle");

const nav = document.getElementById("navbar");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
