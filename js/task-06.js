const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
    textInput.classList.toggle("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.toggle("invalid");
  }
});
