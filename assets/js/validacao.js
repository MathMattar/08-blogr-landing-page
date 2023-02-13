export default function checkInputs(input) {
  let message = "";

  errorTypes.forEach((erro) => {
    if (input.validity[erro]) {
      message = messages[input.name][erro];
    }
  });

  const messageError = input.parentNode.querySelector(".error-message");
  const inputValidator = input.checkValidity();

  if (!inputValidator) {
    messageError.textContent = message;
  } else {
    messageError.textContent = "";
  }
}

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
];

const messages = {
  name: {
    valueMissing: "The name field cannot be empty",
    patternMismatch: "Please fill in a valid name address",
    tooShort: "Please fill in a valid name address",
  },
  email: {
    valueMissing: "The email field cannot be empty",
    patternMismatch: "Please fill in a valid email address",
    tooShort: "Please fill in a valid email address",
  },
  password: {
    valueMissing: "The password field cannot be empty",
    // patternMismatch:
    //   "The password must contain at least 8 characters, including upper and lower case letters, numbers, and special characters",
    tooShort: "The password must be at least 10 characters long",
    tooLong: "The password must be no longer than 20 characters",
    customError:
      "The password must contain at least one special character (!, @, #, $, %, &, *, -, _, =, +, ?)",
  },
};
