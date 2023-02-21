const iconMenu = document.getElementById("icon-menu");
const iconCloseMenu = document.getElementById("icon-close");
const navBar = document.getElementById("nav-bar");

// Exibir menu sandwich
iconMenu.addEventListener("click", changeVisibility);
iconCloseMenu.addEventListener("click", changeVisibility);

// Alterar o icone do menu
function changeVisibility() {
  navBar.classList.toggle("--active");
  iconMenu.classList.toggle("--hide");
  iconCloseMenu.classList.toggle("--active");
}

// Dropdown
const dropdownLinks = document.querySelectorAll(".dropdown__link");
const arrow = document.getElementById("arrow");

function toggleDropdown(dropdownLink, dropdownList, arrowLight, arrowDark) {
  dropdownLink.classList.toggle("--active");
  dropdownList.classList.toggle("--active");
  arrowLight.classList.toggle("--rotate");
  arrowDark.classList.toggle("--rotate");
}

// Adiciona um evento de clique em cada link para exibir sua respectiva lista
dropdownLinks.forEach((dropdownLink) => {
  const dropdownList = dropdownLink.nextElementSibling; // Seleciona a lista associada ao link atual
  const arrowLight = dropdownLink.querySelector(".dropdown__icon"); // Seleciona a seta associada ao link atual
  const arrowDark = dropdownLink.querySelector(".dropdown__icon--dark"); // Seleciona a seta associada ao link atual

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Percorre todos os links e desativa quallquer lista que esteja ativa
    dropdownLinks.forEach((link) => {
      if (link !== dropdownLink && link.classList.contains("--active")) {
        link.classList.remove("--active");
        link.nextElementSibling.classList.remove("--active");
        link.querySelector(".dropdown__icon").classList.remove("--rotate");
      }
    });

    // Ativa a lista do link atual
    toggleDropdown(dropdownLink, dropdownList, arrowLight, arrowDark);
  });
});

// Evento de clique no corpo da página para fechar a lista ou o menu
document.body.addEventListener("click", (event) => {
  // Verifica onde foi o clique
  const dropdownList = event.target.closest(".dropdown__list");
  const dropdownLink = event.target.closest(".dropdown__link");

  if (
    !dropdownList &&
    !dropdownLink &&
    !event.target.closest("#nav-bar") &&
    !event.target.closest("#icon-menu")
  ) {
    dropdownLinks.forEach((link) => {
      if (link.classList.contains("--active")) {
        const activeList = link.nextElementSibling;
        const activeArrowLight = link.querySelector(".dropdown__icon");
        const activeArrowDark = link.querySelector(".dropdown__icon--dark");

        toggleDropdown(link, activeList, activeArrowLight, activeArrowDark);
      }
    });

    changeVisibility();
  }
});
