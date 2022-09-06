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
    // slidesPerView: 1,
    loop: true,
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
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 1.5,
      },
    }

  });

}
