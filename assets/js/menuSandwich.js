const iconMenu = document.getElementById("icon-menu");
const iconCloseMenu = document.getElementById("icon-close");
const navBar = document.getElementById("nav-bar");

//Show menu sandwich
iconMenu.addEventListener("click", changeVisibility);
iconCloseMenu.addEventListener("click", changeVisibility);

function changeVisibility() {
  navBar.classList.toggle("--active");
  iconMenu.classList.toggle("--hide");
  iconCloseMenu.classList.toggle("--active");
}

//Dropdown
const dropdownLinks = document.querySelectorAll(".dropdown__link");
const arrow = document.getElementById("arrow");

//Adiciona um evento de clique em cada link para exibir sua respectiva lista
dropdownLinks.forEach((dropdownLink) => {
  const dropdownList = dropdownLink.nextElementSibling; //Seleciona a lista associada ao link atual
  const arrowLight = dropdownLink.querySelector(".dropdown__icon"); //Seleciona a seta associada ao link atual
  const arrowDark = dropdownLink.querySelector(".dropdown__icon--dark"); //Seleciona a seta associada ao link atual

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();

    //Percorre todos os links e desativa quallquer lista que esteja ativa
    dropdownLinks.forEach((link) => {
      if (link !== dropdownLink && link.classList.contains("--active")) {
        link.classList.remove("--active");
        link.nextElementSibling.classList.remove("--active");
        link.querySelector(".dropdown__icon").classList.remove("--rotate");
      }
    });

    //Ativa a lista do link atual
    dropdownLink.classList.toggle("--active");
    dropdownList.classList.toggle("--active");
    arrowLight.classList.toggle("--rotate");
    arrowDark.classList.toggle("--rotate");
  });
});
