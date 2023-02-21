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
  name: {
    valueMissing: "The name field cannot be empty",
    tooShort: "Please fill in a valid email address",
  },
  email: {
    valueMissing: "The email field cannot be empty",
    patternMismatch: "Please fill in a valid email address",
    tooShort: "Please fill in a valid email address",
  },
  password: {
    valueMissing: "The password field cannot be empty",
    tooShort: "The password must be at least 10 characters long",
  },
};

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
    name: e.target["name"].value,
    email: e.target["email"].value,
    password: e.target["password"].value,
  };

  localStorage.setItem("Sign Up", JSON.stringify(answers));

  location.reload();
});

// Evento de clique para redirecionar a página
const redirect = document.getElementById("redirect");

redirect.addEventListener("click", () => {
  window.location.href = "./login.html";
});

