const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const DEFAULT_VALUE = "Anonymous";

textInput.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    textOutput.textContent = DEFAULT_VALUE;
  } else {
    textOutput.textContent = e.currentTarget.value;
  }
});
// INLINE CODE:
// textInput.addEventListener("input",(e) =>(textOutput.textContent =e.currentTarget.value === "" ? DEFAULT_VALUE : e.currentTarget.value));
