{
  new Swiper('.other-places__list', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation:  {
      nextEl: '.other-places__next',
      prevEl: '.other-places__prev',
    },

    uniqueNavElements: true,

    slidesPerView: 3,

    loop: true,

    centeredSlides: true,

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
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2.5
      },
      1100: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    }

  });

}
