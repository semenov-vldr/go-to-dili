new Swiper('.tours__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 15,

  // Стартовый слайд
  initialSlide: 0,

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
    }
  }

});
