new Swiper('.tours__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  centeredSlides: true,

  // Отступ между слайдами
  spaceBetween: 15,

  // Стартовый слайд
  initialSlide: 0,

  loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  }

});
