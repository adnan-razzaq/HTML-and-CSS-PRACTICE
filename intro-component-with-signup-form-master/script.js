const form = document.getElementById("form");
const first = document.getElementById("firstname");
const last = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formcontrol = document.getElementsByClassName("form-control");
form.addEventListener("submit", e => {
  e.preventDefault();
  const first = document.getElementById("firstname");

  const firstvalue = first.value;
  const lastvalue = last.value;
  const emailvalue = email.value;
  const passwordvalue = password.value;
  if (firstvalue === "") {
    error("firstname", "firstname cannot be empty");
  }
  if (lastvalue === "") {
    error("lastname", "Lastname cannot be empty");
  }
  if (emailvalue === "") {
    error("email", "Email cannot be empty");
  }
  if (passwordvalue === "") {
    error("password", "Password cannot be empty");
  }
});

function error(field, message) {
  formcontrol.classList.add = "error";
  const small = document
    .getElementById(field)
    .parentNode.querySelector("small");
  small.innerText = message;
  small.style.opacity = 1;

  setTimeout(() => {
    small.style.opacity = 0;
  }, 3000);
}
