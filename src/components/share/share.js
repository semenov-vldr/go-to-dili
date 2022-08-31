// const width = window.matchMedia("(max-width: 768px)").matches;
//
// if (width) {
//
//   $(window).load(function() {
//
//     $('.marquee').marquee({
//       duration: 5000,
//       gap: 0,
//       delayBeforeStart: 0,
//       direction: 'left',
//       startVisible: true,
//       duplicated: true,
//     });
//
//   });
//
// }

let swiperOptions = {
  slidesPerView: 1,
  loop: true,
  // Смена прозрачности
  effect: 'fade',
  fadeEffect: {
    // Параллельная смена прозрачности
    crossFade: true,
  }
};

const { slidesPerView, loop, effect, fadeEffect } = swiperOptions;


new Swiper('.js-share-slider-1, .js-share-slider-5', {
  autoplay: { delay: 1200 },
  slidesPerView, loop, effect, fadeEffect,
});

new Swiper('.js-share-slider-2, .js-share-slider-4', {
  autoplay: { delay: 1500 },
  slidesPerView, loop, effect, fadeEffect,
});

new Swiper('.js-share-slider-3, .js-share-slider-6', {
  autoplay: { delay: 1800 },
  slidesPerView, loop, effect, fadeEffect,
});



