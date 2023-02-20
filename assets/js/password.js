const inputPassword = document.getElementById("password");
const buttonPassword = document.getElementById("password-toggle");
const iconHidden = document.getElementById("hidden");
const iconExposed = document.getElementById("exposed");

iconHidden.addEventListener("click", changeIcon);
iconExposed.addEventListener("click", changeIcon);

function changeIcon() {
    iconHidden.classList.toggle("--hidden");
    iconExposed.classList.toggle("--exposed");
    password.setAttribute("type", password.getAttribute("type") === "password" ? "text" : "password");
}
