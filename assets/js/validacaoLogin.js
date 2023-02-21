const inputs = document.querySelectorAll("[required]");

// Evento blur para verificar o input e invalid para impedir o comportamento padrão do navegador
inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInputs(input));
  input.addEventListener("invalid", (e) => e.preventDefault());
});

// Tipos de erros e mensagens correspondentes
const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
];

const messages = {
  email: {
    valueMissing: "The email field cannot be empty",
    patternMismatch: "Please fill in a valid email address",
    tooShort: "Please fill in a valid email address",
  },
  password: {
    valueMissing: "The password field cannot be empty",
    patternMismatch:
      "The password must contain at least 8 characters, including: 1 uppercase, 1 lowercase, 1 numeric and 1 special character",
    tooShort: "The password must be at least 10 characters long",
  },
};

const regex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!#@$%&/()=?*-+-_.:;,][{}^])[A-Za-z0-9!#@$%&/()=?*-+-_.:;,][{}^]{10,32}$/;

function checkInputs(input) {
  const messageError = input.parentNode.querySelector(".input__error-message");
  const inputValidator = input.checkValidity();
  let message = "";

  // Verifica se o input é invalido e define a mensagem de erro correspondente
  errorTypes.forEach((erro) => {
    if (input.validity[erro]) {
      message = messages[input.name][erro];
    }
  });

  // Verifica se a senha atende ao padrão de regex
  // OBS: A condicional está exibindo uma única mensagem de erro, impedindo a personalização para cada item do ValidityState
  if (
    input.name === "password" &&
    (input.getAttribute("type") === "password" ||
      input.getAttribute("type") === "text") &&
    !regex.test(input.value)
  ) {
    message = messages[input.name]["patternMismatch"];
  }

  // Define a mensagem de erro no elemento HTML e limpa a mensagem de erro se o input é válido
  if (!inputValidator) {
    messageError.textContent = message;
  } else {
    messageError.textContent = "";
  }

  console.log(input.validity);
}

// Seleciona o formulário, adiciona o evento de envio e salva no localStorage
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answers = {
    email: e.target["email"].value,
    password: e.target["password"].value,
  };

  localStorage.setItem("Login", JSON.stringify(answers));

  form.reset();
});

// Evento de clique para redirecionar a página
const redirect = document.getElementById("redirect");

redirect.addEventListener("click", () => {
  window.location.href = "./signup.html";
});
