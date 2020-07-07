const text = document.querySelector(".heading");
const txtarray = text.innerText.split("");
console.log(txtarray);
const newE = document.createElement("h1");
newE.innerHTML = `
${txtarray.map(letter=>`<span style="${visibility()}">${letter}</span>`).join("")}

`;

newE.classList.add("overlay");
document.body.appendChild(newE);

function visibility() {
 if (Math.random() < 0.5) {
  return "visibility: hidden"
 } else {
  "visibility: visible"
 }
}
