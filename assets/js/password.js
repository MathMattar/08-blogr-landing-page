const on = document.getElementById("eye--on");
const off = document.getElementById("eye--off");
const password = document.getElementById("input__password-visibility");

off.addEventListener("click", togglePassword);
on.addEventListener("click", togglePassword);

function togglePassword() {

  //Altera a exibição dos botões, alternando os valores diretamente
  on.style.display = off.style.display;
  off.style.display = on.style.display;

  //Operador ternário responsável por verificar e definir o tipo atual do input e alterar entre "password" e "text"
  password.setAttribute(
    "type",
    password.getAttribute("type") === "password" ? "text" : "password"
  );
}
