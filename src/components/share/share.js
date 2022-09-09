{

  let baseOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      // Параллельная смена прозрачности
      crossFade: true,
    }
  };


  const swiperOptions = ( delayValue ) => {
    return Object.assign({autoplay: { delay: delayValue },}, baseOptions);
  };


  new Swiper('.js-share-slider-1', swiperOptions( 8000 ));

  new Swiper('.js-share-slider-2', swiperOptions( 14000 ));

  new Swiper('.js-share-slider-3', swiperOptions( 12000 ));

  new Swiper('.js-share-slider-4', swiperOptions( 16000 ));

  new Swiper('.js-share-slider-5', swiperOptions( 10000 ));

  new Swiper('.js-share-slider-6', swiperOptions( 15000 ));


}
