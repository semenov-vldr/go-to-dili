{
  new Swiper('.tour-item__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation:  {
      nextEl: '.arrow-nav__next',
      prevEl: '.arrow-nav__prev',
    },

    uniqueNavElements: true,

    //slidesPerView: 1,
    slidesPerView: 'auto',
    // Бесконечная прокрутка
    loop: true,

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
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.1
    //   },
    //   480: {
    //     slidesPerView: 1.2
    //   },
    //   1100: {
    //     slidesPerView: 1.2
    //   },
    // }

  });

}
