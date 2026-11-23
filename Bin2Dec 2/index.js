//error and helper texts
const binaryError = "Input can contain only 0's or 1's";
const decimalError = "Input can contain only integers";
const binaryHelpertext = "Please Input a Binary Number";

//let input = document.querySelector("#inputContainer");
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

// function to show error
function showError(errorText, helperText) {
  isError = true;
  errorDiv.textContent = errorText;
  resultDiv.textContent = helperText;
  resultDiv.classList.remove("filled");
}

function convertBinaryToDecimal(binaryStr) {
  let len = binaryStr.length - 1;
  let digit = 0;

  for (let i = 0; i <= len; i++) {
    digit += binaryStr[i] * Math.pow(2, len - i);
  }
  return digit;
}

function convertDecimalToBinary(decimalStr) {
  let binaryStr = "";
  try {
    let dec = parseInt(decimalStr);
    while (dec > 0) {
      binaryStr = String(dec % 2) + binaryStr;
      dec = Math.floor(dec / 2);
    }
  } catch (e) {
    showError("Unable to Convert decimal to Binary", e);
  }
  return binaryStr;
}

const input = document.querySelector("#inputContainer");

const digits = Array.from(document.querySelectorAll(".digit"));

input.addEventListener("input", (e) => {
  if (!e.target.classList.contains("digit")) return;
  if (e.target.value !== "0" && e.target.value !== "1") {
    showError(binaryError, binaryHelpertext);
    return;
  }
  isError = false;
  errorDiv.textContent = "";
  resultDiv.classList.add("filled");

  const index = digits.indexOf(e.target);
  if (index < digits.length - 1) {
    digits[index + 1].focus();
  }
  let inputValue = digits.reduce((str, d) => {
    if (d.value === "") return str + "0";
    else return str + d.value;
  }, "");
  resultDiv.textContent = convertBinaryToDecimal(inputValue);
});

// event listener to make backspace work
input.addEventListener("keydown", (e) => {
  if (!e.target.classList.contains("digit")) return;
  if (e.key === "Backspace") {
    const index = digits.indexOf(e.target);
    if (index > 0) {
      digits[index].value = "";
      digits[index - 1].focus();
    } else {
      digits[index].value = "";
    }
  }
});
const button = document.querySelector("#clickButton");

button.addEventListener("click", () => {
  let inputValue = digits.reduce((str, d) => {
    if (d.value === "") return str + "0";
    else return str + d.value;
  }, "");
  resultDiv.textContent = convertBinaryToDecimal(inputValue);
});
