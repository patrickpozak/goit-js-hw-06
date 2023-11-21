const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const formUser = {
    email: this.email.value,
    password: this.password.value,
  };
  console.log(formUser);
  registerForm.reset();
}
