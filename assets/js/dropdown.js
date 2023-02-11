const dropdowns = document.querySelectorAll(".dropdown");

//loop para percorrer todas as opções do dropdown
dropdowns.forEach((dropdown) => {
  const dropdownNav = dropdown.querySelector(".dropdown__nav");
  const navArrow = dropdown.querySelector(".nav__arrow");

  let timeoutId;

  const displayDropdown = () => {
    dropdownNav.style.display = "block";
    navArrow.style.transform = "rotate(180deg)";
    navArrow.style.transition = ".5s"
  };

  const hideDropdown = () => {
    dropdownNav.style.display = "none";
    navArrow.style.transform = "rotate(0)";
    navArrow.style.transition = ".5s"
  };

  //Evento para manter o dropdown exposto em diferentes ocasiões
  dropdown.addEventListener("mouseenter", () => {
    displayDropdown();
    clearTimeout(timeoutId);
  });

  dropdownNav.addEventListener("mouseenter", () => {
    displayDropdown();
    clearTimeout(timeoutId);
  });

  //Evento para ocultar o dropdown
  dropdown.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(hideDropdown, 50);
  });
});
