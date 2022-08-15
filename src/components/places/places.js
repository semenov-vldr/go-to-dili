// {
//   const places_block = document.querySelector('.places');
//   const prev = places_block.querySelector('.arrow-nav__prev');
//   const next = places_block.querySelector('.arrow-nav__next');
//   const slides = places_block.querySelectorAll('.place-card');
//
// // const dots = history_block.querySelectorAll('.history-years-line__item'); // год(а) как кнопка
//
//   slides[0].classList.add('js-place-active');
//   let index = 0;
//
//   const activeSlide = (num) => {
//     slides.forEach(slide => slide.classList.remove('js-place-active'));
//     slides[num].classList.add('js-place-active');
//   };
//
//   const currentSlide = (idx) => {
//     activeSlide(idx);
//   };
//
//   const nextSlide = () => {
//     if (index == slides.length - 1) {
//       index = 0;
//       currentSlide(index);
//     } else {
//       index++;
//       currentSlide(index);
//     }
//   };
//
//   const prevSlide = () => {
//     if (index == 0) {
//       index = slides.length - 1
//       currentSlide(index);
//     } else {
//       index--;
//       currentSlide(index);
//     }
//   };
//
//   next.addEventListener("click", nextSlide);
//   prev.addEventListener("click", prevSlide);
//
// }
//
//
