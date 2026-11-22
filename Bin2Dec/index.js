//error and helper texts
const binaryError = "Input can contain only 0's or 1's";
const decimalError = "Input can contain only integers";
const binaryHelpertext = "Please Input a Binary Number";

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

const button = document.querySelector("#clickButton");
button.addEventListener("click", () => {
  let inputValue = input.value;

  if (binaryToDecimal) {
    // check if it contains only 0's and 1's
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] !== "0" && inputValue[i] !== "1") {
        showError(binaryError, binaryHelpertext);
        return;
      }
    }
    isError = false;
    errorDiv.textContent = "";
    resultDiv.classList.add("filled");

    resultDiv.textContent = convertBinaryToDecimal(inputValue);
  } else {
    // check if it only contains numbers
    //regex for only numbers
    const regex = /^[0-9]+$/;
    if (!regex.test(inputValue)) {
      showError(decimalError, "Please input only Integers");
      return;
    }

    isError = false;
    errorDiv.textContent = "";
    resultDiv.classList.add("filled");
    resultDiv.textContent = convertDecimalToBinary(inputValue);
  }
});
