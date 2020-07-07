const tagscontainer = document.getElementById("tags");
const textarea = document.querySelector(".textarea");

textarea.addEventListener("keyup", (e) => {
  createtags(e.target.value);

  if (e.key === "Enter") {
    e.target.value = "";

    randomize();
  }
});

function createtags(value) {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  //clear the data in html
  tagscontainer.innerHTML = "";

  tags.forEach((tag) => {
    const newel = document.createElement("span");
    newel.classList.add("tag");
    newel.innerText = tag;
    tagscontainer.appendChild(newel);
  });
}

function randomize() {
  const times = 30;

  let interval = setInterval(() => {
    const randomtag = pickrandom();

    highlight(randomtag);
    setTimeout(() => {
      unhighlight(randomtag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    const randomtag = pickrandom();

    highlight(randomtag);
  }, times * 100);
}

function pickrandom() {
  const all = document.querySelectorAll(".tag");
  console.log(all);

  const random = Math.floor(Math.random() * all.length);
  return all[random];
}

function highlight(randomtag) {
  randomtag.classList.add("highlight");
}

function unhighlight(randomtag) {
  randomtag.classList.remove("highlight");
}
