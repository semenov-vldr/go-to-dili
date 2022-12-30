new Swiper('.places__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.arrow-nav__next',
  //   prevEl: '.arrow-nav__prev',
  // },

  slidesPerView: 3,

  centeredSlides: true,

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  // Отступ между слайдами
  spaceBetween: 15,

  loop: true,

  // Стартовый слайд
  initialSlide: 0,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2
    },
    768: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  }

});

