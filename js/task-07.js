const slider = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

slider.addEventListener("input", (e) => {
  textSpan.style.fontSize = `${e.currentTarget.value}px`;
});
