
new Swiper('.about-people__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  }

});


new Swiper('.about-people__list2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  }

});

new Swiper('.events__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 3,

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  centeredSlides: true,

  // Отступ между слайдами
  spaceBetween: 15,

  loop: true,

  // Стартовый слайд
  initialSlide: 0,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3,
    },
  }

});


  const phoneInputs = document.querySelectorAll('input[data-tel-input]');

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const onPhoneInput = (evt) => {
    const input = evt.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) input.value = "";


    if (input.value.length != selectionStart) {
      if (evt.data && /\D/g.test(evt.data)) {
        input.value = formattedInputValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      // Российские номера
      if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      if (inputNumbersValue[0] === "8") {
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
    if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
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
      if (/\D/g.test(pastedText)) input.value = inputNumbersValue;
    }
  };

// phoneInputs.forEach(input => {
//   input.addEventListener('input', onPhoneInput);
//   input.addEventListener("keydown", onPhoneKeyDown);
//   input.addEventListener("paste", onPhonePaste);
// });


  const form = document.querySelector('.feedback__form');

  const inputName = form.querySelector('#name');
  const inputPhone = form.querySelector('#phone');
  const inputEmail = form.querySelector('#email');
  const submitButton = form.querySelector('.feedback-form__button');

  if (form) {


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
    const EmailError = form.querySelector('#email ~ span');
    const emailErrorMessage = 'Введите правильную почту';


    function showError(input, error, message) {
      if (!input.checkValidity()) {
        error.textContent = message;
        submitButton.disabled = true;
      } else {
        error.textContent = '';
        submitButton.disabled = false;
      };
      if (!input.value) {
        error.textContent = '';
        submitButton.disabled = false;
      };
    };

    inputName.addEventListener('input', () => showError(inputName, nameError, nameErrorMessage));
    inputEmail.addEventListener('input', () => showError(inputEmail, EmailError, emailErrorMessage));
    inputPhone.addEventListener('input', (evt) => {
      showError(inputPhone, phoneError, phoneErrorMessage);
      const numberLength = evt.target.value.length;
      if (numberLength < 10 && numberLength > 0) {
        phoneError.textContent = "Номер должен содержать не менее 10 цифр";
      } else {
        phoneError.textContent = '';
      };
    });

  }



const API_URL = 'https://httpbin.org/post';

// let html = document.documentElement;
// let scrollY = window.scrollY;

let popup;

const isPressedEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentEscKeydown (evt) {
  if ( isPressedEscapeKey(evt) ) {
    evt.preventDefault();
    closePopup();
  };
};

// function onFreePlaceClick (item, evt) {
//   const content = item.querySelector('.popup__content');
//   const click = evt.composedPath().includes(content);
//   if (!click) closePopup();
// };

function closePopup () {
  document.querySelector('.feedback__popup').remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', closePopup);
  document.body.classList.remove('js-lock-scroll');
  form.reset();
  //window.scrollTo(0, scrollY);
  //html.style.top = "";
};

function showPopup () {
  document.body.append(popup);
  const closeButton = popup.querySelector('.popup__close');
  document.body.classList.add('js-lock-scroll')
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', closePopup);
  //closeButton.addEventListener('click', closePopup);
  //html.style.top = -scrollY + 'px';
};

function displayPopupSuccess () {
  popup = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

function displayPopupError () {
  popup = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

function blockSubmitButton () {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

function unblockSubmitButton () {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить заявку';
};

function sendDataForm (onSuccess, onError, body) {
  fetch(API_URL,{
      method: 'POST',
      body,
    },
  ).then((responce) => {
    responce.ok ? onSuccess() : onError();
  }).catch(() => onError());
};

function setUserFormSubmit (onSuccess, onError) {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = form.checkValidity();

    if (isValid) {
      sendDataForm(() => {
          blockSubmitButton();
          onSuccess();
        },
        () => {
          unblockSubmitButton();
          onError();
        },
        new FormData(evt.target)
      );
    }
  });
};

setUserFormSubmit ( displayPopupSuccess, displayPopupError );

window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");
  const headerMobile = document.querySelector('.header-mobile');
  const logo = document.querySelector(".header__logo svg");
  const button = document.querySelector(".header__button");
  const icon_phone = document.querySelector(".header__phone svg");
  if ( scrollY > 1) {
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


// Accordion sub-nav
const subNavList = document.querySelectorAll('.header__sub-nav') // list sub-nav

subNavList.forEach(subNav => {
  const parrent = subNav.parentElement; // .header__nav-list-item
    parrent.addEventListener('click', function () {
    this.classList.toggle("js-select-active");
    accordion(subNav);
  });
  if (window.innerWidth < 1000) {
    const navLink = parrent.querySelector('.header__link');
    navLink.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
  };
});

function accordion (item) {
  item.style.maxHeight ? null : item.scrollHeight + "px";
};







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


new Swiper('.tours__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  centeredSlides: true,

  // Отступ между слайдами
  spaceBetween: 15,

  // Стартовый слайд
  initialSlide: 0,

  loop: true,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.2,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  }

});

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





/* Map Yandex */

{

  const Json = [
    {
      mark_name: "mark-logo",
      mark_hover_name: "mark-logo-black",
      photo_url: "./assets/img/map/01.jpg",
      title: "Техут",
      desc: 'Поход за грибами',
      address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
      location: [40.75326541732117, 44.88379503930662],
    },

  ];


  const mapData = {
    // класс блока-обертки, внутри которого находится карта
    wrapperMapClass: '.tour-item__map-sticky',
    // класс блока с картой
    mapClass: '.tour-item__map',
    // id карты
    mapId: 'tour-item__map',
  };

  createMapMark (mapData, Json)

}

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

/* Map Yandex */

{

  // Контент для заполнения баллунов
  const Json = [
    {
      mark_name: "mark-hotel",
      mark_hover_name: "mark-hotel-black",
      photo_url: "./assets/img/map/01.jpg",
      title: "Техут",
      desc: 'На перекрестке Дилижана и Иджевана',
      address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
      location: [40.75326541732117, 44.88379503930662],
    },

  ];

 // Вводные данные для заполнения
  const mapData = {
    // класс блока-обертки, внутри которого находится карта
    wrapperMapClass: '.places-inner-map__wrapper',
    // класс блока с картой
    mapClass: '.places-inner-map__item',
    // id карты
    mapId: 'places-inner-map__item',
  };


  createMapMark (mapData, Json)

}



const customJson = [
  // Eat
  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Dilijazz Restaurant 1",
    desc: 'Средиземноморская, Американска, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75826541732117, 44.88379503930662],

  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
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
    mark_hover_name: "mark-hotel-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Hilton",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75740056093835,44.88809144458006],
  },

  {
    type: "hotel",
    mark_name: "mark-hotel",
    mark_hover_name: "mark-hotel-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Mriya",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75217903445399,44.90439927539061],
  },

  // Route
  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Маршрут 1",
    desc: 'По лесу',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.74525987533819,44.85084092578122],
  },

  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Маршрут 2",
    desc: 'В горы',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.73638417553341,44.86307759338689],
  },

  // Place
  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Место 1",
    desc: 'Клуб',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.749309792605956,44.91097111755681],
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Место 2",
    desc: 'Площадь',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.749962534398996,44.90273137146308],
  },


  // Event
  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
    photo_url: "./assets/img/map/01.jpg",
    title: "Событие 1",
    desc: 'Праздник',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.78833239918575,44.94719166809392],
  },

  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
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

            clear: function () {
              this._$element.find('.balloon__close').off('click');

              this.constructor.superclass.clear.call(this);
            },
            //
            // Закрывает балун при клике на крестик
            onCloseClick: function (evt) {
              evt.preventDefault();
              this.events.fire('userclose');
            },

            // Используется для автопозиционирования
            getShape: function () {
              // if(!this._isElement(this._$element)) {
              //   return balloonLayout.superclass.getShape.call(this);
              // }
              let position = this._$element.position();
              let width = this._$element.offsetWidth;
              let height = this._$element.offsetHeight;

              return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                [position.left, position.top], [
                  position.left + width,
                  position.top + height
                ]
              ]));
            },

          });

          // Баллун в виде панели при мобильном разрешении экрана
          if (window.matchMedia("(max-width: 580px)").matches) {
            map.options.set({balloonPanelMaxMapArea:'Infinity'}) ;
          }

          const {type, location, mark_name, mark_hover_name} = obj;

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

            // смена иконки при hover
            placemark.events.add('mouseenter', (evt) => {
              evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_hover_name}.svg`)
            });
            placemark.events.add('mouseleave', (evt) => {
              evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_name}.svg`)
            });


            // Добавление метки в коллекцию
            geoObjects.add(placemark);
            // Добавление коллекции на карту
            map.geoObjects.add(geoObjects);
            // Установка масштаба для видимости всей коллекции
            map.setBounds(geoObjects.getBounds());
            // итоговый масштаб карты чуть меньше зоны видимости
            map.setZoom(map.getZoom() - 2);

            // Запрет зума
            map.behaviors.disable('scrollZoom');
            map.behaviors.disable('dblClickZoom');
            map.behaviors.disable('multiTouch');

          }
        });
      };
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

        function filterMark() {
          map.geoObjects.removeAll();
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          navItem.classList.add('js-active-mark');
          renderMark(navItems, customJson);
          //navItem.removeEventListener('click', filterMark);
        };

        navItem.addEventListener('click', filterMark);


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

const promoDiscount = document.querySelector('.promo-discount');
const closePromoDiscount = promoDiscount.querySelector('.promo-discount__close');

closePromoDiscount.addEventListener('click', () => {
  promoDiscount.style.display = "none";
})

function createMapMark ( { wrapperMapClass, mapClass, mapId }, Json ) {

  const wrapper = document.querySelector(wrapperMapClass);

  let mapItem;
  let balloonTemplate;

  if (wrapper) {
      // Шаблон для клонирования
      balloonTemplate = document.querySelector('.balloon-template').content.querySelector('.balloon');
      mapItem = wrapper.querySelector(mapClass);
  }

    // Создание и заполнение данными баллуна
    const createBalloon = ( { photo_url, title, desc, address } ) => {
      const balloon = balloonTemplate.cloneNode(true);

      balloon.querySelector('.balloon__image').rsc = photo_url;
      balloon.querySelector('.balloon__title').textContent = title;
      balloon.querySelector('.balloon__desc-text').textContent = desc;
      balloon.querySelector('.balloon__address-text').textContent = address;

      return balloon.outerHTML;
    };

    // Функция отрисовки меток на карте
    const renderMark = (arrObj) => {
      // Создание пустой коллекции геообъектов
      let geoObjects = new ymaps.GeoObjectCollection();


          arrObj.forEach(obj => {

            const balloonLayout = ymaps.templateLayoutFactory.createClass (createBalloon(obj), {

              build: function () {
                this.constructor.superclass.build.call(this);
                this._$element = $('.balloon', this.getParentElement());
                this._$element.find('.balloon__close')
                  .on('click', $.proxy(this.onCloseClick, this));
              },

              clear: function () {
                this._$element.find('.balloon__close').off('click');
                this.constructor.superclass.clear.call(this);
              },

              // Закрывает балун при клике на крестик
              onCloseClick: function (evt) {
                evt.preventDefault();
                this.events.fire('userclose');
              },

              // Используется для автопозиционирования
              getShape: function () {
                // if(!this._isElement(this._$element)) {
                //   return balloonLayout.superclass.getShape.call(this);
                // }
                const position = this._$element.position();
                const width = this._$element.offsetWidth;
                const height = this._$element.offsetHeight;

                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                  [position.left, position.top],
                    [position.left + width,
                    position.top + height]
                ]));
              },

            });

            // Баллун в виде панели при мобильном разрешении экрана
            if (window.matchMedia("(max-width: 580px)").matches) {
              map.options.set({balloonPanelMaxMapArea:'Infinity'}) ;
            }

            const { location, mark_name, mark_hover_name } = obj;

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

              // смена иконки при hover
              placemark.events.add('mouseenter', (evt) => {
                evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_hover_name}.svg`)
              });
              placemark.events.add('mouseleave', (evt) => {
                evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_name}.svg`)
              });

              // Добавление метки в коллекцию
              geoObjects.add(placemark);
              // Добавление коллекции на карту
              map.geoObjects.add(geoObjects);
              // Установка масштаба для видимости всей коллекции
              map.setBounds(geoObjects.getBounds());
              // итоговый масштаб карты чуть меньше зоны видимости
              map.setZoom(map.getZoom() - 5);

              map.behaviors.disable('scrollZoom');
              map.behaviors.disable('dblClickZoom');
              map.behaviors.disable('multiTouch');

          });
    };

  let map;

  if ( mapItem ) {

    ymaps.ready(init);

    // Инициализация карты
    function init() {
      map = new ymaps.Map(mapId, {
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

        renderMark(Json);

      let clusterer = new ymaps.Clusterer();
      map.geoObjects.add(clusterer);

    };
  };

}

