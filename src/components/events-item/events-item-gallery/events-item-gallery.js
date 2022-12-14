{
  new Swiper('.events-item-gallery__list', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.arrow-nav__next',
      prevEl: '.arrow-nav__prev',
    },

    uniqueNavElements: true,

    slidesPerView: 3,

    // Бесконечная прокрутка
    loop: true,

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 15,

    // Стартовый слайд
    initialSlide: 0,

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.1
      },
      480: {
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2.5
      },
      1100: {
        slidesPerView: 3
      },
    }

  });

}
