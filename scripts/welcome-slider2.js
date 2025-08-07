const images = [
  'monnaliza1.jpg',
  'monnaliza2.jpg',
  'monnaliza3.jpg',
  'monnaliza4.jpg',
  'monnaliza5.jpg'
];

let currentSlide = 0;

const slider = document.querySelector('.fotomonnaliza');
const leftArrow = document.querySelector('.leftarrow');
const rightArrow = document.querySelector('.rightarrow');

function updateBackground() {
  slider.style.backgroundImage = `url('assets/${images[currentSlide]}')`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateBackground();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateBackground();
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Первоначальное изображение
updateBackground();