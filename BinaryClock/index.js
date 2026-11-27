//error and helper texts
const timeDiv = document.querySelector(".time");
const hoursDiv = document.querySelector(".hours-binary");
const minDiv = document.querySelector(".min-binary");
const secDiv = document.querySelector(".sec-binary");

function createBoxes(element) {
  const boxes = [];
  for (let i = 0; i < 8; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    element.appendChild(box);
    boxes.push(box);
  }
  return boxes;
}

function updateBoxes(boxes, binaryStr) {
  boxes.forEach((box, index) => {
    box.textContent = binaryStr[index];
  });
}

function convertToBinary(decimalStr) {
  let binaryStr = "";
  try {
    let dec = parseInt(decimalStr);
    while (dec > 0) {
      binaryStr = String(dec % 2) + binaryStr;
      dec = Math.floor(dec / 2);
    }
  } catch (e) {}
  return binaryStr.padStart(8, 0);
}

const hourBoxes = createBoxes(hoursDiv);
const minBoxes = createBoxes(minDiv);
const secBoxes = createBoxes(secDiv);

setInterval(() => {
  let timeNow = new Date();

  let hours = timeNow.getHours().toString().padStart(2, 0);
  let minutes = timeNow.getMinutes().toString().padStart(2, 0);
  let seconds = timeNow.getSeconds().toString().padStart(2, 0);

  let hoursBinary = convertToBinary(timeNow.getHours().toString());
  let minBinary = convertToBinary(timeNow.getMinutes().toString());
  let secBinary = convertToBinary(timeNow.getSeconds().toString());

  updateBoxes(hourBoxes, hoursBinary);
  updateBoxes(minBoxes, minBinary);
  updateBoxes(secBoxes, secBinary);

  let resultantTime = `${hours}:${minutes}:${seconds}`;

  timeDiv.textContent = resultantTime;
}, 1000);
