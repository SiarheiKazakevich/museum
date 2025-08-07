const images = [
  'monnaliza.jpg',
  'monnaliza2.jpg',
  'monnaliza3.jpg',
  'monnaliza4.jpg',
  'monnaliza5.jpg'
];
let currentSlide = 1;
let isAnimating = false;
let startX = 0;

const sliderWrapper = document.createElement('div');
sliderWrapper.classList.add('slider-wrapper');

const cloneLast = createSlide(images[images.length - 1]);
sliderWrapper.appendChild(cloneLast);

images.forEach(src => {
  const slide = createSlide(src);
  sliderWrapper.appendChild(slide);
});

const cloneFirst = createSlide(images[0]);
sliderWrapper.appendChild(cloneFirst);

const sliderContainer = document.querySelector('.fotomonnaliza');
sliderContainer.style.overflow = 'hidden';
sliderContainer.appendChild(sliderWrapper);

updateSlidePosition();

document.querySelector('.rightarrow')?.addEventListener('click', nextSlide);
document.querySelector('.leftarrow')?.addEventListener('click', prevSlide);

sliderContainer.addEventListener('mousedown', e => startX = e.clientX);
sliderContainer.addEventListener('mouseup', e => {
  const deltaX = e.clientX - startX;
  if (Math.abs(deltaX) > 50) {
    deltaX > 0 ? prevSlide() : nextSlide();
  }
});

const bullets = document.querySelectorAll('.squaresbox .square');
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    if (isAnimating) return;
    currentSlide = index + 1;
    updateSlidePosition();
    updateCounter();
    updateBullets();
  });
});

function createSlide(src) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.style.background = `url('assets/${src}') center/cover no-repeat`;
  return slide;
}

function updateSlidePosition() {
  sliderWrapper.style.transition = 'transform 0.6s ease-in-out';
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateCounter() {
  document.querySelector('.leftnum').textContent = '0' + currentSlide;
}

function updateBullets() {
  bullets.forEach((b, i) => {
    b.classList.toggle('colorbru', i === currentSlide - 1);
  });
}

function nextSlide() {
  if (isAnimating) return;
  isAnimating = true;
  currentSlide++;
  updateSlidePosition();
  setTimeout(() => {
    if (currentSlide > images.length) {
      sliderWrapper.style.transition = 'none';
      currentSlide = 1;
      updateSlidePosition();
    }
    updateCounter();
    updateBullets();
    isAnimating = false;
  }, 600);
}

function prevSlide() {
  if (isAnimating) return;
  isAnimating = true;
  currentSlide--;
  updateSlidePosition();
  setTimeout(() => {
    if (currentSlide === 0) {
      sliderWrapper.style.transition = 'none';
      currentSlide = images.length;
      updateSlidePosition();
    }
    updateCounter();
    updateBullets();
    isAnimating = false;
  }, 600);
}

