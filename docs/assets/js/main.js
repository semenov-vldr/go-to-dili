
window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo svg");
  const button = document.querySelector(".header__button");
  const icon_phone = document.querySelector(".header__phone svg");
  if (pageYOffset > 100) {
    header.classList.add("scrolled");
    logo.classList.add("scrolled");
    button.classList.add("scrolled");
    icon_phone.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    button.classList.remove("scrolled");
    icon_phone.classList.remove("scrolled");
  }
};

const history_block = document.querySelector('.history');
const prev = history_block.querySelector('.arrow-nav__prev');
const next = history_block.querySelector('.arrow-nav__next');
const slides = history_block.querySelectorAll('.history-info-item');
const dots = history_block.querySelectorAll('.history-years-line__item'); // год(а) как кнопка

let index = 0;

const activeSlide = (num) => {
  slides.forEach(slide => slide.classList.remove('js-history-active'));
  slides[num].classList.add('js-history-active');
};

const activeDot = (num) => {
  dots.forEach(dot => dot.classList.remove('js-history-active'));
  dots[num].classList.add('js-history-active');
};

const currentSlide = (idx) => {
  activeSlide(idx);
  activeDot(idx);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    currentSlide(index);
  } else {
    index--;
    currentSlide(index);
  }
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((dot, indexDot) => {
  dot.addEventListener("click", () => {
    index = indexDot;
    currentSlide(index);
  });
});
