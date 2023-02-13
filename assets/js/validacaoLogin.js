import checkInputs from "./validacao.js";

const inputs = document.querySelectorAll("[required]");

inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInputs(input));
  input.addEventListener("invalid", (e) => e.preventDefault());
});
