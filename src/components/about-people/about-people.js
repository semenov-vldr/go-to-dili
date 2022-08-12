new Swiper('.about-people__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 15,

  // Активный слайд по центру
  initialSlides: false,
  // Стартовый слайд
  initialSlide: 0,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.1
    },
    480: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 3.2
    },
    1400: {
      slidesPerView: 4
    },
  }

});

