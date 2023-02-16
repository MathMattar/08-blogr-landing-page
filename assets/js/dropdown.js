const dropdowns = document.querySelectorAll(".dropdown__container");

//Loop para percorrer todas as opções do dropdown
dropdowns.forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector(".dropdown__link");
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const dropdownArrow = document.querySelector(".dropdown__icon");

  let timeoutId;

  //Funções responsáveis por exibir e ocultar dropdown e rotação da seta
  const displayDropdown = () => {
    dropdownList.style.display = "block";
    dropdownArrow.style.transform = "rotate(180deg)";
    dropdownArrow.style.transition = ".5s";
  };

  const hideDropdown = () => {
    dropdownList.style.display = "none";
    dropdownArrow.style.transform = "rotate(0)";
    dropdownArrow.style.transition = ".5s";
  };

  //Evento para manter o dropdown exposto em diferentes ocasiões
  dropdown.addEventListener("mouseenter", () => {
    displayDropdown();
    clearTimeout(timeoutId);
  });

  dropdownLink.addEventListener("mouseenter", () => {
    displayDropdown();
    clearTimeout(timeoutId);
  });

  //Evento para ocultar o dropdown
  dropdown.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(hideDropdown, 50);
  });
});
