
new Swiper('.about-people__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      slidesPerView: 3,
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

/* Map Yandex */

{

  // Контент для заполнения баллунов
  const Json = [
    {
      mark_name: "mark-logo",
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
    wrapperMapClass: '.contacts__map-wrapper',
    // класс блока с картой
    mapClass: '.contacts__map',
    // id карты
    mapId: 'contacts__map',
  };


  createMapMark (mapData, Json)

}



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
      slidesPerView: 3,
    },
  }

});

{

  const accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');

  if (accordionItems) {

    accordionItems.forEach(accordionItem => {
      accordionItem.addEventListener('click', () => toggleClass(accordionItem));
    });

  }



}


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


  const formList = document.querySelectorAll('.feedback__form');

  if (formList) {

  formList.forEach(form => {
    const inputName = form.querySelector('.input-name');
    const inputPhone = form.querySelector('.input-phone');
    const inputEmail = form.querySelector('.input-email');
    const submitButton = form.querySelector('.feedback-form__button');


// Ввод в поле ИМЯ только русские буквы
// inputName.addEventListener('input', function () {
//   this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]+$/, '');
//  });

// Ввод в поле ТЕЛЕФОН только цифр
// inputPhone.addEventListener('input', function () {
//   this.value = this.value.replace(/[^\d]/g, "");
// });


    // Сообщение об ошибки валидации
    const nameError = form.querySelector('.input-name ~ span');
    const nameErrorMessage = 'Вы ввели неверное имя';
    const phoneError = form.querySelector('.input-phone ~ span');
    const phoneErrorMessage = 'Вы ввели неверный номер';
    const EmailError = form.querySelector('.input-email ~ span');
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
  })

  }



const API_URL = 'https://httpbin.org/post';

const html = document.querySelector('html')

let popup;

const isPressedEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentEscKeydown (evt) {
  if ( isPressedEscapeKey(evt) ) {
    evt.preventDefault();
    closePopup();
  };
};


function closePopup () {
  document.querySelector('.feedback__popup').remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', closePopup);
  html.classList.remove('js-lock-scroll')
  form.reset();
};

function showPopup () {
  document.body.append(popup);
  //const closeButton = popup.querySelector('.popup__close');
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', closePopup);
  html.classList.add('js-lock-scroll')
};

function displayPopupSuccess () {
  popup = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

function displayPopupError () {
  popup = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

const submitButton = document.querySelector('.feedback-form__button');

function blockSubmitButton () {
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляю...';
  }
};

function unblockSubmitButton () {
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = 'Отправить заявку';
  }

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

if (formList) {
formList.forEach(form => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = form.checkValidity();

    if (isValid) {
      sendDataForm(() => {
          blockSubmitButton();
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          unblockSubmitButton();
          onError();
        },
        new FormData(evt.target)
      );
    }
  });
})
}
};

setUserFormSubmit ( displayPopupSuccess, displayPopupError );

{

  const html = document.querySelector('html')
  const main = document.querySelector('main')

  const formPopup = document.querySelector('.form-popup');
  const partnersButton = document.querySelector('.partners__button');


  if (formPopup) {
    const form = formPopup.querySelector('.feedback-form');
    const close = formPopup.querySelector('.form-popup__close');


    function onDocumentClick () {
      document.body.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('form-popup')) closeFormPopup();
      })
    };

    function closeFormPopup () {
      formPopup.classList.remove('js-popup-active');
      html.classList.remove('js-lock-scroll');
      main.style.zIndex = '100';
    };

    function openFormPopup () {
      formPopup.classList.add('js-popup-active');
      html.classList.add('js-lock-scroll');
      onDocumentClick()
      main.style.zIndex = '102';
    };


    close.addEventListener('click', closeFormPopup)
    form.addEventListener('submit', closeFormPopup);

    if (partnersButton) partnersButton.addEventListener('click', openFormPopup);

  }





}

// const header = document.querySelector('.header');
// const weatherTemp = header.querySelector('.header__weather-temp');
//
// const KEY = '8c0d97481931b1c092950c47648f9df4';
// const city = 'Dilijan';
// const API = `${location.protocol}//api.weatherstack.com/current?access_key=${KEY}&query=${city}`;
//
// const fetchData = async () => {
//   try{
//     const responce = await fetch(API);
//     if (responce.ok) {
//       const data = await responce.json();
//       const temp = `${data.current.temperature}°C`;
//       weatherTemp.textContent = temp;
//     } else {
//       weatherTemp.textContent = '25°C';
//     }
//
//   } catch (err) {
//     console.log(err);
//     console.log('Ошибка запроса погоды')
//     weatherTemp.textContent = '25°C';
//   }
// };
//
// fetchData()
//
//
//
//
// // const API_KEY = 'fd04c038b4083dd0d159274298038549';
// // const city = 'Dilijan';
// // const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// //
// // fetch(API)
// //   .then(responce => responce.json())
// //   .then(data => {
// //     console.log(data.main.temp);
// //       let temp = `${Math.round(data.main.temp - 273)}°C`;
// //       weatherTemp.textContent = temp;
// //   })
// //   .catch(err => {
// //     console.log(err);
// //     console.log('Ошибка доступа к погоде')
// //     weatherTemp.textContent = '+10°C';
// //   })
//

let previousPosition = window.scrollTop || document.documentElement.scrollTop;

//---- set padding main ---
  function setPaddingMain () {
    const main = document.querySelector('main');
    const header = document.querySelector(".header");
    main.style.paddingTop = `${header.offsetHeight}px`;
  }
  setPaddingMain();
  window.addEventListener('resize', setPaddingMain);



// ---- scrollHeader ------
window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");

  let currentPosition = window.scrollTop || document.documentElement.scrollTop;

  if ( previousPosition > currentPosition) {
    header.classList.add('scrolled-bottom');
    header.classList.remove('scrolled-top');
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled-bottom');
    if (scrollY > 200) header.classList.add('scrolled-top');
  }

  previousPosition = currentPosition;

  if (scrollY < 200) {
    header.classList.remove('scrolled-bottom');
    header.classList.remove('scrolled-top');
    header.classList.remove('scrolled');
  }

};



// burger
const burger = document.querySelector('.jsHeaderBurgerIcon');
const header = document.querySelector('.header');

if (burger) {
  burger.addEventListener('click', () => {
    header.classList.toggle('header-mobile_active')
    document.querySelector('html').classList.toggle('no-scroll');
  })
}




// Accordion sub-nav
const subNavList = document.querySelectorAll('.header__sub-nav') // list sub-nav

function accordion (item) {
  item.style.maxHeight ? null : item.scrollHeight + "px";
};

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
    if (index === slides.length - 1) {
      index = 0;
      currentSlide(index);
    } else {
      index++;
      currentSlide(index);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
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
  // navigation: {
  //   nextEl: '.arrow-nav__next',
  //   prevEl: '.arrow-nav__prev',
  // },

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

new Swiper('.tours__list', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      slidesPerView: 3,
    }
  }

});





const customJson = [
  // ----------------Eat (Еда)----------------
  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://only2weeks.ru/wp-content/uploads/2018/06/gde-poest-v-diligane_4.jpg",
    title: "Ресторан Kchuch",
    desc: 'Тепло домашнего очага и возрождение традиций',
    address: 'ул. Мясникяна, 37/3, Дилижан, Армения',
    location: [40.739334, 44.866747],
    link: 'kchuch.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5098556/2a00000181ddcd82b85c5d4149f3103cc7a9/XXXL",
    title: "Ресторан TAVA",
    desc: 'Все оттенки Дилижана в одном ресторане',
    address: 'ул. Мясникяна, 37/4, Дилижан, Армения',
    location: [40.739187, 44.866274],
    link: 'tava.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5538812/2a000001847711e89dc082d9cdf0eec7620b/XXXL",
    title: "Papanino House",
    desc: 'Винный ресторан в старинном квартале Дилижана',
    address: 'ул. Калинина, 104, Дилижан, Армения',
    location: [40.742120, 44.853316],
    link: 'papanino-house.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5457654/2a0000017cc6d21ae842ffbc86ddd297c209/XXXL",
    title: "Café #2",
    desc: 'Городское кафе в самом сердце города',
    address: 'ул. Максима Горького, 17/1, Дилижан, Армения',
    location: [40.742120, 44.853316],
    link: 'cafe№2.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/6/6/5/original.jpg",
    title: "Im toon Dilijan",
    desc: 'Для истинных ценителей красоты и спокойствия',
    address: 'улица Степана Шаумяна, Дилижан, Армения',
    location: [40.751802, 44.887693],
    link: 'im-toon-dilijan.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/363935543.jpg?k=d45f0a0fbcf69622b38f1f1aad84061bf9a8cb89f47efd8809d4eedf9deae22d&o=&hp=1",
    title: "Toon Armeni Guest house",
    desc: 'Домашний уют и функциональность',
    address: 'улица Камарина, 4, Дилижан, Армения',
    location: [40.743096, 44.872861],
    link: 'toon-armeni-guest-house.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5476645/2a0000017d6b5ed08dd200a4ecd98ef5761e/XXL",
    title: "Darchin pastry and cafe",
    desc: 'Эксклюзивные десерты в дружелюбной атмосфере',
    address: 'ул. Калинина, 202, Дилижан, Армения',
    location: [40.741137, 44.842463],
    link: 'darchin-pastry-and-cafe.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/1696029/2a0000016d361e2e63269fdec78bf1592696/XXXL",
    title: "Carahunge Café and More",
    desc: 'По следам армянского Стоунхенджа',
    address: 'улица Калинина, 25, Дилижан, Армения',
    location: [40.739785, 44.861051],
    link: 'carahunge-café-and-more.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/7979184/2a000001844c46a7525c291b8f2667170863/XXXL",
    title: "Sovats Vozni cafe & garden",
    desc: 'По следам армянского Стоунхенджа',
    address: 'улица Мясникяна, Дилижан, Армения',
    location: [40.738882, 44.865700],
    link: 'sovats-vozni-cafe.html',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/4544819/2a000001793a0034bb87d7c3f2c393d68a2a/XXXL",
    title: "DiliJazz Hotel & Restaurant",
    desc: 'В окружении гор и джаза',
    address: '2-я улица, 1/1, село Техут, Тавушская область, Дилижан, Армения',
    location: [40.778002, 44.926091],
    link: 'dilijazz-hotel-&-restaurant.html',
  },




  // ----------------Hotel (Отели)----------------
  {
    type: "hotel",
    mark_name: "mark-hotel",
    mark_hover_name: "mark-hotel-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Hilton",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75740056093835,44.88809144458006],
    link: '',
  },

  {
    type: "hotel",
    mark_name: "mark-hotel",
    mark_hover_name: "mark-hotel-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Mriya",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75217903445399,44.90439927539061],
    link: '',
  },

  // ----------------Route (Маршруты)----------------
  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Маршрут 1",
    desc: 'По лесу',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.74525987533819,44.85084092578122],
    link: '',
  },

  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Маршрут 2",
    desc: 'В горы',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.73638417553341,44.86307759338689],
    link: '',
  },

  // ----------------Place (Места)----------------
  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/6/6/4/original.jpg",
    title: "Городской парк и искусственное озеро",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.739400, 44.864129],
    link: 'city-park-and-artificial-lake.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://avatars.dzeninfra.ru/get-zen_doc/1626348/pub_5cbb3fbf1c8e87021bb86ee2_5cbb4c2b953d9400b3f9eabb/scale_2400",
    title: "Улица ремесленников и старый город",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.739496, 44.868773],
    link: 'craftsmen-street.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=TNrnW7fJO5GAeXUZ_wy9pA&image_size=X5L",
    title: "Улочки Дилижана и возрождение традиций",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.746417, 44.875753],
    link: 'streets-of-dilijan.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/6/2/7/original.jpeg",
    title: "Центр города и советское наследие",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.742288, 44.871412],
    link: 'city-center.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://cdn-ynd-nav.technolab.com.ru/file/5cf7ebed1946a10018d636cc",
    title: "Краеведческий музей и картинная галерея Дилижана",
    desc: 'Описание',
    address: 'ул. Мясникяна, 28, Дилижан, Армения',
    location: [40.738813, 44.866919],
    link: 'local-history-museum.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://armeniaplanet.com/Content/Img/Creative/ashot-babayan-wood-art/2.jpg",
    title: "Музей-мастерская Ашота Бабаяна",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737881, 44.866438],
    link: 'museum-master-ashota-babayana.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://hyurservice.com/images/attractions/1/16119507516509/hqdefault.jpeg",
    title: "BuduArt",
    desc: 'Описание',
    address: 'ул. Мясникяна, 34, Дилижан, Армения',
    location: [40.738698, 44.866922],
    link: 'buduart.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://photos.wikimapia.org/p/00/02/40/09/90_big.jpg",
    title: "Экскурсия по Музею денег",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.748459, 44.865947],
    link: 'museum-of-money.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c1/56/09/dilijan-amphitheater.jpg?w=1200&h=-1&s=1",
    title: "«Ротонда» и новый амфитеатр",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.743467, 44.870740],
    link: 'rotunda-and-new-amphitheater.html',
  },


  // -------Event (События)----------------
  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Событие 1",
    desc: 'Праздник',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.78833239918575,44.94719166809392],
    link: '',
  },

  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Событие 2",
    desc: 'Новый год',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.7778938307187,44.945475054324405],
    link: '',
  },


  // ----------------Culture (Культура)----------------
  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/5/9/8/original.jpeg",
    title: "Монумент в честь 50-летия Советской Армении",
    desc: 'Описание',
    address: 'Тбилисское шоссе/ул. Саят-Новы, Дилижан, Армения',
    location: [40.741477, 44.867013],
    link: '50th-anniversary-of-soviet- armenia.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://s00.yaplakal.com/pics/pics_preview/1/6/3/11464361.jpg",
    title: "Памятник героям фильма «Мимино»",
    desc: 'Описание',
    address: 'улица Эмма Цатурян, Дилижан, Армения',
    location: [40.740352, 44.865363],
    link: 'mimino.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "http://www.armeniatur.am/d_images/2008-10-17_14-10_DSC03865_2.jpg",
    title: "Памятник воинам ВОВ",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.850869],
    link: 'monument-to-the-soldiers-of-the-great-patriotic-war.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://sun9-21.userapi.com/impg/bit4pc5YISEu-JXjiPKS9qMzkCz77QT01UECuw/IhBsE8u6WhU.jpg?size=810x540&quality=96&sign=afde3297efab5a988a75518aae91528d&type=album",
    title: "«Армения» по подобию богини Анаит",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.830569],
    link: 'armenia-in-the-likeness-of-the-goddess-anahit.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c1/56/09/dilijan-amphitheater.jpg?w=1200&h=-1&s=1",
    title: "«Ротонда» и новый амфитеатр",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.750569],
    link: 'rotunda-and-new-amphitheater.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Родник Матинова",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.720569],
    link: 'spring-matinova.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://www.abandonedspaces.com/wp-content/uploads/sites/58/2019/11/soghomon-matevosyan-cc-by-sa-4-0-h.jpg",
    title: "Царь леса",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.787327, 44.720569],
    link: 'king-of-the-forest.html',
  },



  // ----------------Neighborhood (Пригород)----------------

  {
    type: "Neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gosh_Village%2C_Tavush_Province%2C_Armenia.jpg/1024px-Gosh_Village%2C_Tavush_Province%2C_Armenia.jpg",
    title: "Гош",
    desc: 'По следам выдающегося мыслителя Мхитара Гоша',
    address: 'село Гош, Тавушская область, Дилижан, Армения',
    location: [40.729991, 45.000430],
    link: 'gosh.html',
  },

  {
    type: "neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hovk_village_10.jpg/1280px-Hovk_village_10.jpg",
    title: "Овк",
    desc: 'Ворота в небеса',
    address: 'село Овк, Тавушская область, Дилижан, Армения',
    location: [40.788140, 45.031108],
    link: 'ovc.html',
  },

  {
    type: "neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gosh_Village%2C_Tavush_Province%2C_Armenia.jpg/1024px-Gosh_Village%2C_Tavush_Province%2C_Armenia.jpg",
    title: "Агавнаванк",
    desc: 'На лоне величественной природы Тавушской области',
    address: 'село Агавнаванк, Тавушская область, Дилижан, Армения',
    location: [40.721578, 45.094367],
    link: 'aghavnavank.html',
  },

  {
    type: "neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Haghartsin_Village.jpg",
    title: "Агарцин",
    desc: 'На пути к священному монастырю',
    address: 'село Агарцин, Тавушская область, Дилижан, Армения',
    location: [40.777755, 44.972520],
    link: 'haghartsin.html',
  },

  {
    type: "neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://www.info9.ge/images/stories/1280px-mtkvari-aragviconfluenceatmtskheta.jpg",
    title: "Техут",
    desc: 'На перекрестке Дилижана и Иджевана',
    address: 'село Техут, Лорийская область, Дилижан, Армения',
    location: [41.111263, 44.849675],
    link: 'teghut.html',
  },

  {
    type: "neighborhood",
    mark_name: "mark-neighborhood",
    mark_hover_name: "mark-neighborhood-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Khachardzan_village.jpg/1920px-Khachardzan_village.jpg",
    title: "Хачардзан",
    desc: 'Живописные долины и пасторальный пейзаж',
    address: 'село Хачардзан, Тавушская область, Дилижан, Армения',
    location: [40.717183, 45.052685],
    link: 'khachardzan.html',
  },




  // ----------------monasteries (Монастыри)----------------

  {
    type: "monasteries",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/1363376/2a0000016509d0dfb956e5c007c4ea808bfc/XXXL",
    title: "Монастырский комплекс Агарцин",
    desc: 'Описание',
    address: 'село Агарцин, Тавушская область, Дилижан, Армения',
    location: [40.801993, 44.890569],
    link: 'monastery-complex-haghartsin.html',
  },

  {
    type: "monasteries",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/1363250/2a0000016509cde18c7d0fb9cca1fc564346/XXXL",
    title: "Монастырский комплекс Гошаванк",
    desc: 'Описание',
    address: 'село Гош, Тавушская область, Дилижан, Армения',
    location: [40.729927, 44.997540],
    link: 'monastery-complex-goshavank.html',
  },

  {
    type: "monasteries",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/7725442/2a000001833fb49bd7d9a3f6867cc492f76a/XXXL",
    title: "Монастырский комплекс Джухтакванк",
    desc: 'Описание',
    address: 'Дилижанский национальный парк, Дилижан, Армения',
    location: [40.757694, 44.802953],
    link: 'monastery-complex-jukhtakvank.html',
  },

  {
    type: "monasteries",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Aghavnavank_Monastery_1.jpg/1280px-Aghavnavank_Monastery_1.jpg",
    title: "Монастырский комплекс Агавнаванк",
    desc: 'Описание',
    address: 'Дилижанский национальный парк, Дилижан, Армения',
    location: [40.724984, 45.107594],
    link: 'monastery-complex-aghavnavank.html',
  },

  {
    type: "monasteries",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://yerkirarmenia.ru/upload/iblock/950/9508a228d2b2d8776e4502acc99e3fc0.JPG",
    title: "Монастырский комплекс Матосаванк",
    desc: 'Описание',
    address: 'Дилижанский национальный парк, Дилижан, Армения',
    location: [40.750163, 44.803884],
    link: 'monastery-complex-matosavank.html',
  },


  // ----------------other (Разное)----------------

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.dzeninfra.ru/get-zen_doc/4797662/pub_639a0c848c167b2cb5cf42f5_639a0fdb40f4d07e3082fbc1/scale_2400",
    title: "Улица Шарамбеяна",
    desc: 'Узкие улочки, ажурные балконы, ремесленные лавки',
    address: 'улица Шарамбеяна, Тавушская область, Дилижан, Армения',
    location: [40.739496, 44.868773],
    link: 'sharambeyan-street.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/78/7c/dc/from-tree-to-tree.jpg?w=1200&h=1200&s=1",
    title: "VereV Rope Park",
    desc: 'Самый длинный веревочный парк Армении',
    address: 'ул. Гетапня, 19/1, Дилижан, Армения',
    location: [40.737670, 44.856036],
    link: 'verev-rope-park.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5488055/2a0000017f55593567472332900c96c88c11/XXXL",
    title: "UWC Dilijan",
    desc: 'Международная школа в сердце Дилижана',
    address: 'ул. Гетапня, 7, Дилижан, Армения',
    location: [40.739253, 44.833251],
    link: 'uwc-dilijan.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5257938/2a0000017c6368129b37f33dc68cb3756cde/XXL",
    title: "Центробанк и экскурсия в музей денег",
    desc: 'Образовательно-исследовательский центр ЦБ Армении',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.743690, 44.865171],
    link: 'money-museum.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://kartinkin.net/pics/uploads/posts/2022-08/1659507201_28-kartinkin-net-p-ozero-parz-armeniya-priroda-krasivo-foto-29.jpg",
    title: "Озеро Парз",
    desc: 'Жемчужина Дилижанского национального парка',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.752512, 44.961171],
    link: 'lakes-of-dilijan-park.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/2433982/2a00000174b9c9dc5844da594d8c4ab0b5df/XXXL",
    title: "Озеро Гош",
    desc: 'Жемчужина Дилижанского национального парка',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.719981, 45.016059],
    link: 'lakes-of-dilijan-park.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://hikearmenia.blob.core.windows.net/hikearmeniacontainer/images/default-source/images/img_20190710_162505-(1).jpg?sfvrsn=7e2a22f4_10",
    title: "Пьяный лес",
    desc: 'Идеальный хайкинг-маршрут для начинающих',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.73602232005918,44.880795836059555],
    link: 'drunk-forest.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5554141/2a000001840ee71ce3bb8282537315e9a8bd/XXXL",
    title: "Информационный туристический центр",
    desc: 'Выбери свой маршрут',
    address: 'ул. Максима Горького, 15/2,Тавушская область, Дилижан, Армения',
    location: [40.739265, 44.862566],
    link: 'tourism-information-center.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://www.trip2.am/ussr/uploads/1551955462/1558704987/UWC_Dilijan_Main_building_4.jpg",
    title: "Библиотека им. Газароса Агаяна",
    desc: 'Традиции прошлого и большие надежды на будущее',
    address: 'улица Мясникяна,Тавушская область, Дилижан, Армения',
    location: [40.740533, 44.870874],
    link: 'dilijan-library.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=9HBGp78yvGrynSXuDyq&image_size=X5L",
    title: "Дилижанский национальный парк",
    desc: 'Лесной храм Армении',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.745542, 44.922005],
    link: 'national-park.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/6550540/2a00000184c341537d0cdd7f827364aee6f4/XXXL",
    title: "Краеведческий музей – картинная галерея Дилижана",
    desc: 'Айвазовский, Шишкин и доисторические артефакты под одной крышей',
    address: 'ул. Мясникяна, 28, Тавушская область, Дилижан, Армения',
    location: [40.738450, 44.866954],
    link: 'picture-gallery.html',
  },

  {
    type: "other",
    mark_name: "mark-monasteries",
    mark_hover_name: "mark-monasteries-black",
    photo_src: "https://avatars.mds.yandex.net/get-altay/5102477/2a000001840ea8e889a7977542ec5432124e/XXXL",
    title: "TUMO Dilijan",
    desc: 'Окно в мир инноваций для детей Тавушской области',
    address: 'ул. Мясникяна, 63, Тавушская область, Дилижан, Армения',
    location: [40.743540, 44.872313],
    link: 'tumo.html',
  },


];



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
  const createBalloon = ({photo_src, title, desc, address, link}) => {
    const balloon = balloonTemplate.cloneNode(true);

    balloon.querySelector('.balloon__image').src = photo_src;
    balloon.querySelector('.balloon__title').textContent = title;
    balloon.querySelector('.balloon__desc-text').textContent = desc;
    balloon.querySelector('.balloon__address-text').textContent = address;
    balloon.querySelector('.balloon__button').href = link;

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
            // map.behaviors.disable('scrollZoom');
            // map.behaviors.disable('dblClickZoom');
            // map.behaviors.disable('multiTouch');

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
          controls: [],
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
  setPaddingMain();
})

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

