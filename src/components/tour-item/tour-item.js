{
  new Swiper('.tour-item__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.arrow-nav__next',
      prevEl: '.arrow-nav__prev',
    },

    uniqueNavElements: true,

    centeredSlides: true,

    slidesPerView: 'auto',

    // Бесконечная прокрутка
    loop: true,

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 15,

    // Активный слайд по центру
    initialSlides: true,
    // Стартовый слайд
    initialSlide: 0,

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      400: {
        slidesPerView: 'auto'
      },
    }

  });

}
