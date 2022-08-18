const history_block = document.querySelector('.history');

if ( history_block ) {

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


}

