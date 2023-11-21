function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");
let boxSize = 30;

createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);
destroyBtn.addEventListener("click", destroyBoxes);

function divGenerator() {
  const genDiv = `<div style="background-color: ${getRandomHexColor()};
  width: ${boxSize}px; height: ${boxSize}px; "></div>`;
  boxSize += 10;
  return genDiv;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = divGenerator();
    boxesDiv.insertAdjacentHTML("beforeend", newDiv);
  }
}

function destroyBoxes() {
  boxesDiv.remove();

  // FOR REMOVING SELECTED AMOUNT OF ELEMENTS
  // for (let i = 0; i < amount; i++) {
  //   if (typeof boxesDiv.lastChild != "undefined" && boxesDiv.lastChild != null) {
  //     boxesDiv.lastChild.remove();
  //     boxSize -= 10;
  //   }
  // }
  // createBoxes(Number(numberInput.value))
}
