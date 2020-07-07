window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  if (isactivated) {
    document.body.style.transform = "scale(2)";
    document.body.style.transformOrigin = `${x}px ${y}px`;
  } else {
    document.body.style.transform = "none";
  }
});

let isactivated = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    isactivated = !isactivated;
  }
});
