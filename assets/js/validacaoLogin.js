import checkInputs from "./validacao.js";

const inputs = document.querySelectorAll("[required]");

inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInputs(input));
  input.addEventListener("invalid", (e) => e.preventDefault());
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answers = {
    email: e.target["email"].value,
    password: e.target["password"].value,
  };

  localStorage.setItem("Login", JSON.stringify(answers));
});
