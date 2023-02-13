const on = document.getElementById("eye--on");
const off = document.getElementById("eye--off");
const password = document.getElementById("password");

off.addEventListener("click", (e) => {
  on.style.display = "block";
  off.style.display = "none";
  showPassword();
});

on.addEventListener("click", (e) => {
  on.style.display = "none";
  off.style.display = "block";
  hidePassword();
});

function showPassword() {
  password.setAttribute("type", "text");
}

function hidePassword() {
  password.setAttribute("type", "password");
}
