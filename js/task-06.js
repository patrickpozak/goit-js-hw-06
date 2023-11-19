const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
  } else {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  }
});
