const valueSpan = document.querySelector("#value");
const btnUp = document.querySelector('button[data-action="increment"]');
const btnDown = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

btnUp.addEventListener("click", () => counting(++counterValue));
btnDown.addEventListener("click", () => counting(--counterValue));

function counting(val) {
  counterValue = val;
  valueSpan.textContent = counterValue;
}
