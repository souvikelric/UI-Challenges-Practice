let input = document.querySelector("#inputContainer");
const resultDiv = document.querySelector(".answer");
const errorDiv = document.querySelector(".error");
const options = document.querySelector("#dropdown");

const isDecimal = options.value === "decimal";

let isError = false;
let binaryToDecimal = true;

//check for dropdown selection change
options.addEventListener("change", (e) => {
  if (e.target.value === "decimal") {
    binaryToDecimal = true;
  } else {
    binaryToDecimal = false;
  }
});

const button = document.querySelector("#clickButton");
button.addEventListener("click", () => {
  let inputValue = input.value;
  // check if it contains only 0's and 1's
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] !== "0" && inputValue[i] !== "1") {
      isError = true;
      errorDiv.textContent = "Input can contain only 0's or 1's";
      resultDiv.textContent = "Please Input a Binary Number";
      resultDiv.classList.remove("filled");
      return;
    }
  }
  isError = false;
  errorDiv.textContent = "";

  resultDiv.classList.add("filled");
  let len = inputValue.length - 1;
  let digit = 0;

  for (let i = 0; i <= len; i++) {
    digit += inputValue[i] * Math.pow(2, len - i);
  }
  resultDiv.textContent = digit;
});
