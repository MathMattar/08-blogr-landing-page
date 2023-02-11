const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
dots[currentSlide].classList.add("active");

const nextSlide = () => {
  removeActive();
  //Calculo para direcionar proximo slide
  currentSlide = (currentSlide + 1) % slides.length;
  addActive();
};

//Direciona proximo slide
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", () => {
  removeActive();
  //Calculo para direcionar para o slide anterior
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  addActive();
});

//Tempo de alternância
setInterval(nextSlide, 10000);


//Adicionar e remover classe
function removeActive() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].innerHTML = "○";
  dots[currentSlide].classList.remove("active");
}

function addActive() {
  slides[currentSlide].classList.add("active");
  dots[currentSlide].innerHTML = "•";
  dots[currentSlide].classList.add("active");
}
