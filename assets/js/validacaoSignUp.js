const inputs = document.querySelectorAll("[required]");

// Evento blur para verificar o input e invalid para impedir o comportamento padrão do navegador
inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInputs(input));
  input.addEventListener("invalid", (evento) => evento.preventDefault());
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
}

// Seleciona o formulário, adiciona o evento de envio e salva no localStorage
//Não está funcionando! Não consigo entender o porque, aceito dicas!
const form = document.getElementById("form-register");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answers = {
    name: e.target["name"].value,
    email: e.target["email"].value,
    password: e.target["password"].value,
  };

  localStorage.setItem("Sign", JSON.stringify(answers));

  form.reset();
});

// Também não está funcionando
// const form = document.querySelector("[data-sign-up]");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   localStorage.setItem("name", name);
//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);

//   form.reset();
// });


// Evento de clique para redirecionar a página
const redirect = document.getElementById("redirect");

redirect.addEventListener("click", () => {
  window.location.href = "./login.html";
});
