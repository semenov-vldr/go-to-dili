
new Swiper('.events__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

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
      slidesPerView: 3
    },
  }

});

new Swiper('.about-people__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

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
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 3.2
    },
    1400: {
      slidesPerView: 4
    },
  }

});

const phoneInputs = document.querySelectorAll('input[data-tel-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g,"");
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if ( !inputNumbersValue ) input.value = "";


  if ( input.value.length != selectionStart ) {
    if ( evt.data && /\D/g.test(evt.data) ) {
      input.value = formattedInputValue;
    }
    return;
  }

  if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
    // Российские номера
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue[0] == "8") {
      phoneInputs[0].setAttribute("pattern", ".{17,}");
    }

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

// Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;
  input.value = formattedInputValue;
};

// Стирание первого символа
const onPhoneKeyDown = (evt) => {
  const input = evt.target;
  if (evt.keyCode == 8 && getInputNumbersValue(input).length == 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
const onPhonePaste = (evt) => {
  const pasted = evt.clipboardData || window.clipboardData;
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);
  if (pasted) {
    const pastedText = pasted.getData("Text");
    if ( /\D/g.test(pastedText) ) input.value = inputNumbersValue;
  }
};

// phoneInputs.forEach(input => {
//   input.addEventListener('input', onPhoneInput);
//   input.addEventListener("keydown", onPhoneKeyDown);
//   input.addEventListener("paste", onPhonePaste);
// });

const form = document.querySelector('.feedback__form');

if (form) {

  const inputName = form.querySelector('#name');
  const inputPhone = form.querySelector('#phone');
  const inputEmail = form.querySelector('#email');

// Ввод в поле ИМЯ только русские буквы
// inputName.addEventListener('input', function () {
//   this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]+$/, '');
//  });

// Ввод в поле ТЕЛЕФОН только цифр
// inputPhone.addEventListener('input', function () {
//   this.value = this.value.replace(/[^\d]/g, "");
// });


// Сообщение об ошибки валидации
  const nameError = form.querySelector('#name ~ span');
  const nameErrorMessage = 'Вы ввели неверное имя';
  const phoneError = form.querySelector('#phone ~ span');
  const phoneErrorMessage = 'Вы ввели неверный номер';



  function showError(input, error, message) {
    if ( !input.checkValidity() ) {
      error.textContent = message;
    }
    else  error.textContent = '';
    if (!input.value) error.textContent = '';
  };

  inputName.addEventListener('input', () => showError(inputName, nameError, nameErrorMessage));
  inputPhone.addEventListener('input', () => showError(inputPhone, phoneError, phoneErrorMessage));


// --------pop-up--------------
  const ButtonForm = form.querySelector('.feedback-form__button');
  const popup = document.querySelector('.feedback__popup');
  const popupContent = popup.querySelector('.popup__content');
  const closeButton = popup.querySelector('.popup__close');

  const isPressedEscapeKey = (evt) => evt.key === 'Escape';

  const closePopup = () => {
    popup.classList.remove('js-popup-active');
  }

  function onDocumentEscKeydown(evt) {
    if (isPressedEscapeKey(evt)) closePopup();
  };

  function onDocumentClick(evt) {
    const click = evt.composedPath().includes(popupContent);
    if (!click) closePopup();
  };

  function submitForm(evt) {
    evt.preventDefault();
    popup.classList.add('js-popup-active');
    form.reset();
  };


  form.addEventListener('submit', submitForm);
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);

}



window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");
  const headerMobile = document.querySelector('.header-mobile');
  const logo = document.querySelector(".header__logo svg");
  const button = document.querySelector(".header__button");
  const icon_phone = document.querySelector(".header__phone svg");
  if ( scrollY > 50) {
    header.classList.add("scrolled");
    headerMobile.classList.add("scrolled");
    logo.classList.add("scrolled");
    button.classList.add("scrolled");
    icon_phone.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    headerMobile.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    button.classList.remove("scrolled");
    icon_phone.classList.remove("scrolled");
  }
};

// burger
const burger = document.querySelector('.header__burger-icon');
const menu = document.querySelector('.header__container');
const headerMobile = document.querySelector('.header-mobile');
const logo_mobile = document.querySelector('.header-mobile__logo');
if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('js-lock-scroll');
    burger.classList.toggle('js-active-menu');
    headerMobile.classList.toggle('js-active-menu');
    menu.classList.toggle('js-active-menu');
    logo_mobile.classList.toggle('js-active-menu');
  });
}


// select
// const select = document.querySelector('.header-select');
// const selectList = select.querySelector('.header-select__list');
//
// const accordion = (item) => {
//   if (item.style.maxHeight){
//     item.style.maxHeight = null;
//   } else {
//     item.style.maxHeight = item.scrollHeight + "px";
//   }
// };
//
// select.addEventListener("click",function () {
//   accordion(selectList);
//   this.classList.toggle("js-select-active");
// });

const subNavList = document.querySelectorAll('.header__sub-nav') // list sub-nav

subNavList.forEach(subNav => {
  let parrent = subNav.parentElement; // .header__nav-list-item
  parrent.addEventListener('click', function () {
    this.classList.toggle("js-select-active");
    accordion(subNav);
  });
})


function accordion (item) {
  if (item.style.maxHeight){
    item.style.maxHeight = null;
  } else {
    item.style.maxHeight = item.scrollHeight + "px";
  }
};







const history_block = document.querySelector('.history');

if ( history_block ) {

  const prev = history_block.querySelector('.arrow-nav__prev');
  const next = history_block.querySelector('.arrow-nav__next');
  const slides = history_block.querySelectorAll('.history-info-item');
  const dots = history_block.querySelectorAll('.history-years-line__item'); // год(а) как кнопка

  let index = 0;

  const activeSlide = (num) => {
    slides.forEach(slide => slide.classList.remove('js-history-active'));
    slides[num].classList.add('js-history-active');
  };

  const activeDot = (num) => {
    dots.forEach(dot => dot.classList.remove('js-history-active'));
    dots[num].classList.add('js-history-active');
  };

  const currentSlide = (idx) => {
    activeSlide(idx);
    activeDot(idx);
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      currentSlide(index);
    } else {
      index++;
      currentSlide(index);
    }
  };

  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1
      currentSlide(index);
    } else {
      index--;
      currentSlide(index);
    }
  };

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  dots.forEach((dot, indexDot) => {
    dot.addEventListener("click", () => {
      index = indexDot;
      currentSlide(index);
    });
  });


}



new Swiper('.places__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.arrow-nav__next',
    prevEl: '.arrow-nav__prev',
  },

  slidesPerView: 3,

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
    768: {
      slidesPerView: 1
    },
  }

});


// {
//   const places_block = document.querySelector('.places');
//   const prev = places_block.querySelector('.arrow-nav__prev');
//   const next = places_block.querySelector('.arrow-nav__next');
//   const slides = places_block.querySelectorAll('.place-card');
//
// // const dots = history_block.querySelectorAll('.history-years-line__item'); // год(а) как кнопка
//
//   slides[0].classList.add('js-place-active');
//   let index = 0;
//
//   const activeSlide = (num) => {
//     slides.forEach(slide => slide.classList.remove('js-place-active'));
//     slides[num].classList.add('js-place-active');
//   };
//
//   const currentSlide = (idx) => {
//     activeSlide(idx);
//   };
//
//   const nextSlide = () => {
//     if (index == slides.length - 1) {
//       index = 0;
//       currentSlide(index);
//     } else {
//       index++;
//       currentSlide(index);
//     }
//   };
//
//   const prevSlide = () => {
//     if (index == 0) {
//       index = slides.length - 1
//       currentSlide(index);
//     } else {
//       index--;
//       currentSlide(index);
//     }
//   };
//
//   next.addEventListener("click", nextSlide);
//   prev.addEventListener("click", prevSlide);
//
// }
//
//

new Swiper('.tours__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

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
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 3.2
    },
    1400: {
      slidesPerView: 4
    },
  }

});





/* Map Yandex */

{
// places-inner
const placesInnerMap = document.querySelector('.places-inner-map__container');

let placesInnerMapItem;
let balloonTemplate;

if (placesInnerMap) {
  placesInnerMapItem = placesInnerMap.querySelector('.places-inner-map__item');
// Шаблон для клонирования
  balloonTemplate = placesInnerMap.querySelector('.balloon-template').content.querySelector('.balloon');
}

// Создание и заполнение данными баллуна
//   const createBalloon = ( { photo_url, title, desc, address } ) => {
//     const balloon = balloonTemplate.cloneNode(true);
//
//     balloon.querySelector('.balloon__image').rsc = photo_url;
//     balloon.querySelector('.balloon__title').textContent = title;
//     balloon.querySelector('.balloon__desc-text').textContent = desc;
//     balloon.querySelector('.balloon__address-text').textContent = address;
//
//     return balloon.outerHTML;
//   };

let map;

if ( placesInnerMapItem ) {

  ymaps.ready(init);

  // Инициализация карты
  function init() {
    map = new ymaps.Map("places-inner-map__item", {
        center: [40.74521099740435, 44.868688838134744],
        zoom: 13,
        controls: ['routeButtonControl'],
      },

      { //ограничения области просмотра карты
        restrictMapArea: [
          [39.874858480470486,42.27403199633786],
          [41.82876820666636,47.54746949633786]
        ]
      });

    let clusterer = new ymaps.Clusterer({});
    map.geoObjects.add(clusterer);

  };
}

  }

const customJson = [
  // Eat
  {
    type: "eat",
    mark_name: "mark-eat",
    photo_url: "./assets/img/map/01.jpg",
    title: "Dilijazz Restaurant 1",
    desc: 'Средиземноморская, Американска, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75826541732117, 44.88379503930662],

  },

  {
    type: "eat",
    mark_name: "mark-eat",
    photo_url: "./assets/img/map/01.jpg",
    title: "Dilijazz Restaurant 2",
    desc: 'Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.751999618091304, 44.87363867944334],
  },

  // Hotel
  {
    type: "hotel",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Hilton",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75740056093835,44.88809144458006],
  },

  {
    type: "hotel",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Mriya",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75217903445399,44.90439927539061],
  },

  // Route
  {
    type: "route",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Маршрут 1",
    desc: 'По лесу',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.74525987533819,44.85084092578122],
  },

  {
    type: "route",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Маршрут 2",
    desc: 'В горы',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.73638417553341,44.86307759338689],
  },

  // Place
  {
    type: "place",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Место 1",
    desc: 'Клуб',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.749309792605956,44.91097111755681],
  },

  {
    type: "place",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Место 2",
    desc: 'Площадь',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.749962534398996,44.90273137146308],
  },


  // Event
  {
    type: "event",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Событие 1",
    desc: 'Праздник',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.78833239918575,44.94719166809392],
  },

  {
    type: "event",
    mark_name: "mark-hotel",
    photo_url: "./assets/img/map/01.jpg",
    title: "Событие 2",
    desc: 'Новый год',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.7778938307187,44.945475054324405],
  },

];


// let json = JSON.stringify(customJson);


/* Map Yandex */

{
// блок "Что делать в городе?"
  const whatToDo = document.querySelector('.what-to-do');

  let map__item;
  let balloonTemplate;
  let navItems;

  if (whatToDo) {
    map__item = whatToDo.querySelector('.map__item');
// Шаблон для клонирования
    balloonTemplate = whatToDo.querySelector('.balloon-template').content.querySelector('.balloon');
// Список элементов навигации
    navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');
  }


// Создание и заполнение данными баллуна
  const createBalloon = ({photo_url, title, desc, address}) => {
    const balloon = balloonTemplate.cloneNode(true);

    balloon.querySelector('.balloon__image').rsc = photo_url;
    balloon.querySelector('.balloon__title').textContent = title;
    balloon.querySelector('.balloon__desc-text').textContent = desc;
    balloon.querySelector('.balloon__address-text').textContent = address;

    const closeButton = balloon.querySelector('.balloon__close');
    const ballonYmaps = document.querySelector('.ymaps-2-1-79-balloon');
    if (ballonYmaps) {
      console.log(ballonYmaps)
      closeButton.addEventListener('click', () => {
        ballonYmaps.style.display = "none";
      })
    }


    return balloon.outerHTML;
  };


// Функция отрисовки меток на карте
  const renderMark = (navElems, arrObj) => {
    // Создание пустой коллекции геообъектов
    let geoObjects = new ymaps.GeoObjectCollection({});

    navElems.forEach(item => {
      if (item.classList.contains('js-active-mark')) {
        const dataType = item.dataset.type;

        arrObj.forEach(obj => {

          const balloonLayout = ymaps.templateLayoutFactory.createClass(createBalloon(obj), {

            build: function () {
              this.constructor.superclass.build.call(this);

              this._$element = $('.balloon', this.getParentElement());

              this._$element.find('.balloon__close')
                .on('click', $.proxy(this.onCloseClick, this));
            },

            // clear: function () {
            //   this._$element.find('.balloon__close').off('click');
            //
            //   this.constructor.superclass.clear.call(this);
            // },
            //
            // Закрывает балун при клике на крестик
            onCloseClick: function (evt) {
              evt.preventDefault();
              this.events.fire('userclose');
            },

          });

          const {type, location, mark_name} = obj;

          if (type === dataType) {

            // Создание кастомных меток и баллунов
            const placemark = new ymaps.Placemark(location, {
              balloonContentBody: createBalloon(obj),
            }, {
              balloonLayout,
              hideIconOnBalloonOpen: false,
              iconLayout: 'default#image',
              iconImageHref: `./assets/img/map/${mark_name}.svg`,
              iconImageSize: [49, 59],
              iconImageOffset: [0, -60],
            });

            // Добавление метки в коллекцию
            geoObjects.add(placemark);
            // Добавление коллекции на карту
            map.geoObjects.add(geoObjects);
            // Установка масштаба для видимости всей коллекции
            map.setBounds(geoObjects.getBounds());
            // итоговый масштаб карты чуть меньше зоны видимости
            map.setZoom(map.getZoom() - 2);

            // Баллун в виде панели при мобильном разрешении экрана
            if (window.matchMedia("(max-width: 480px)").matches) {
              map.options.set({balloonPanelMaxMapArea:'Infinity'}) ;
            }



          }
        });
      }
      ;
    });
  };

  let map;

  if (map__item) {

    ymaps.ready(init);

    // Инициализация карты
    function init() {
      map = new ymaps.Map("map-index", {
          center: [40.74521099740435, 44.868688838134744],
          zoom: 13,
          controls: ['routeButtonControl'],
        },

        { //ограничения области просмотра карты
          restrictMapArea: [
            [39.874858480470486, 42.27403199633786],
            [41.82876820666636, 47.54746949633786]
          ]
        });

      navItems.forEach((navItem) => {

        renderMark(navItems, customJson);

        navItem.addEventListener('click', () => {
          map.geoObjects.removeAll();
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          navItem.classList.add('js-active-mark');
          renderMark(navItems, customJson);
        })
      });

      let clusterer = new ymaps.Clusterer({});
      map.geoObjects.add(clusterer);

    };
  }

}

{
  new Swiper('.other-places__list', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      nextEl: '.arrow-nav__next',
      prevEl: '.arrow-nav__prev',
    },

    slidesPerView: 3,

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
        slidesPerView: 3
      },
    }

  });

}

const promoDiscount = document.querySelector('.promo-discount');
const closePromoDiscount = promoDiscount.querySelector('.promo-discount__close');



closePromoDiscount.addEventListener('click', () => {
  promoDiscount.style.display = "none";
  console.log(closePromoDiscount);
})
