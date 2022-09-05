{

  let baseOptions = {
    slidesPerView: 1,
    loop: true,
    // Смена прозрачности
    effect: 'fade',
    fadeEffect: {
      // Параллельная смена прозрачности
      crossFade: true,
    }
  };


  const swiperOptions = ( delayValue ) => {
    return Object.assign({autoplay: { delay: delayValue },}, baseOptions);
  };


  new Swiper('.js-share-slider-1, .js-share-slider-5', swiperOptions( 2000 ));

  new Swiper('.js-share-slider-2, .js-share-slider-4', swiperOptions( 2200 ));

  new Swiper('.js-share-slider-3, .js-share-slider-6', swiperOptions( 1800 ));


}
