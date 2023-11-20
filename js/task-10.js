function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('div.input[type="number"]');
const createBtn = document.querySelector('div.button[data-create="Create"]');
const destroyBtn = document.querySelector('div.button[data-destroy="Destroy"]');
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {}
