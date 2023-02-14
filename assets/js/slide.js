const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".slide-nav__dot");

//Iniciar o slide atual e ativar o primeiro ponto indicador
let currentSlide = 0;
dots[currentSlide].classList.add("active");

const nextSlide = () => {
  removeActive();
  currentSlide = (currentSlide + 1) % slides.length; //Calcular o índice do próximo slide, usando operador módulo para criar um loop
  addActive();
};

//Evento de clique botão "next"
nextBtn.addEventListener("click", nextSlide);

//Evento de clique botão "prev"
prevBtn.addEventListener("click", () => {
  removeActive();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; //Calcular o índice do slide anterior, usando operador módulo para criar um loop
  addActive();
});

//Tempo de alternância
setInterval(nextSlide, 10000);

function removeActive() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].innerHTML = "🞅"; //mudar o elemento identificador
  dots[currentSlide].classList.remove("active");
}

function addActive() {
  slides[currentSlide].classList.add("active");
  dots[currentSlide].innerHTML = "⬤"; //mudar o elemento identificador
  dots[currentSlide].classList.add("active");
}
