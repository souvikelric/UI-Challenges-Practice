const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");

const box = document.querySelector(".box");

topLeft.addEventListener("input", (e) => {
  box.style.borderTopLeftRadius = e.target.value + "px";
});

topRight.addEventListener("input", (e) => {
  box.style.borderTopRightRadius = e.target.value + "px";
});

bottomLeft.addEventListener("input", (e) => {
  box.style.borderBottomLeftRadius = e.target.value + "px";
});

bottomRight.addEventListener("input", (e) => {
  box.style.borderBottomRightRadius = e.target.value + "px";
});
