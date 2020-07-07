const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const navbars = document.querySelectorAll(".netflix-nav");

openbtn.addEventListener("click", () => {
  navbars.forEach((item) => {
    item.classList.add("visible");
  });
});

closebtn.addEventListener("click", () => {
  navbars.forEach((item) => {
    item.classList.remove("visible");
  });
});
