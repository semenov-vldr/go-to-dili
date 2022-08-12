
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
      console.log(phoneInputs[0].getAttribute("pattern"));
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
    if ( /\D/g.test(pastedText) ) {
      input.value = inputNumbersValue;
    }
  }
};

phoneInputs.forEach(input => {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});


// Ввод в поле ИМЯ только русские буквы
const input_name = document.querySelector('#name');
input_name.addEventListener('input', function () {
  this.value = this.value.replace(/[^А-Яа-яЁё\s]+$/, '');
});


window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo svg");
  const button = document.querySelector(".header__button");
  const icon_phone = document.querySelector(".header__phone svg");
  if (pageYOffset > 100) {
    header.classList.add("scrolled");
    logo.classList.add("scrolled");
    button.classList.add("scrolled");
    icon_phone.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    button.classList.remove("scrolled");
    icon_phone.classList.remove("scrolled");
  }
};

// burger
const burger = document.querySelector('.header__burger-icon');
if (burger) {
  const menu = document.querySelector('.header__container');
  const logo_mobile = document.querySelector('.header-mobile__logo');
  burger.addEventListener('click', () => {
    document.body.classList.toggle('js-lock-scroll');
    burger.classList.toggle('js-active-menu');
    menu.classList.toggle('js-active-menu');
    logo_mobile.classList.toggle('js-active-menu');
  });
}



// select
// const select = document.querySelector('.header-select');
// const selectHeader = select.querySelectorAll('.header-select__header');
// const selectItems = select.querySelectorAll('.header-select__item');
// const selectCurrent = select.querySelector('.header-select__current');
//
// function selectToggle () {
//   this.parentElement.classList.toggle('js-active-select');
// };
//
// function selectChoose () {
//   selectCurrent.innerText = this.innerHTML;
//   select.classList.remove('js-active-select');
// };
//
// selectHeader.forEach(item => {
//   item.addEventListener('click', selectToggle);
// });
//
// selectItems.forEach(item => {
//   item.addEventListener('click', selectChoose);
// });
//
//
// // Клик снаружи выпадающего списка, закрытие списка
//   document.addEventListener('click', (evt) => {
//     if ( evt.target !== selectCurrent ) {
//       select.classList.remove('js-active-select');
//     };
//   });
//
// // Клик по кнопке Tab или Esc, закрытие списка
//   document.addEventListener('keydown', (evt) => {
//     if ( evt.key === 'Tab' || evt.key === 'Escape' ) {
//       select.classList.remove('js-active-select');
//     };
//   });




const history_block = document.querySelector('.history');
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

{
  const places_block = document.querySelector('.places');
  const prev = places_block.querySelector('.arrow-nav__prev');
  const next = places_block.querySelector('.arrow-nav__next');
  const slides = places_block.querySelectorAll('.places__item');

// const dots = history_block.querySelectorAll('.history-years-line__item'); // год(а) как кнопка

  let index = 0;

  const activeSlide = (num) => {
    slides.forEach(slide => slide.classList.remove('js-history-active'));
    slides[num].classList.add('js-history-active');
  };

  const currentSlide = (idx) => {
    activeSlide(idx);
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

}

if (document.documentElement.clientWidth < 768) {

  new Swiper('.share__images', {
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
        slidesPerView: 4
      },
    },

  });


}


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

const whatToDo = document.querySelector('.what-to-do'); // блок "Что делать в городе?"

const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('js-active-mark');
  })
});

// const url_icon = './assets/img/map/mark-hotel.svg';

const hotels = [
  {
    name_icon: 'mark-hotel',
    lat: 40.752999618091304,
    long: 44.87483867944334,
    url: './assets/components/_items/map/01.jpg',
    title: "Hotel 1",
    kitchen_name: 'Американская, Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
  {
    name_icon: 'mark-hotel',
    lat: 40.75626541732117,
    long: 44.88479503930662,
    url: './assets/components/_items/map/01.jpg',
    title: "Hotel 2",
    kitchen_name: 'Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
];

export { hotels }

/* Map Yandex */

// import {restaurants} from "./restaurants";

const map = document.querySelector('#map');

if ( map ) {

  ymaps.ready(init);

  const center = [40.74521099740435,44.868688838134744];

  const getBalloon = ( {url, title, kitchen_name, address} ) => {
    return `
    <div class="balloon">
        <div class="balloon__wrapper">
            <div class="balloon__close">X</div>
            <div class="balloon__image-wrapper">
                <img class="balloon__image" src="${url}" alt="">
            </div>
            <div class="balloon__content-text">
                <p class="balloon__title">${title}</p>

                <div class="balloon__kitchen">
                    <span class="balloon__kitchen-title">Кухня:</span>
                    <div class="balloon__kitchen-list">
                        <span class="balloon__kitchen-name">${kitchen_name}</span>
                    </div>
                </div>
                <p class="balloon__address">
                    <img src="./assets/img/map/ballon-location.svg" alt="">
                    ${address}
                </p>
            </div>
        </div>
    </div>`;
  };


  function init() {
    let map = new ymaps.Map("map", {
      center,
      zoom: 13,
      controls: ['routeButtonControl'],
      behaviours: ['drag'],
    });


    // Формирование баллунов по данным из массива объектов
    const renderMarks = (array) => {
      array.forEach( (obj) => {

        let placemark = new ymaps.Placemark([obj.lat, obj.long], {
          balloonContent: getBalloon(obj),
        }, {
          iconLayout: 'default#image',
          iconImageHref: `./assets/img/map/${obj.name_icon}.svg`,
          iconImageSize: [49, 59],
          iconImageOffset: [0, -60],
        });
        map.geoObjects.add(placemark);
      });
      let clusterer = new ymaps.Clusterer({});
      map.geoObjects.add(clusterer);
    };

    renderMarks (restaurants);

    const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item'); // Все элементы навигации

    const navItem_eat = whatToDo.querySelector('.nav-item-eat');     // Еда
    const navItem_hotel = whatToDo.querySelector('.nav-item-hotel'); // Отели
    const navItem_route = whatToDo.querySelector('.nav-item-route'); // Маршруты
    const navItem_place = whatToDo.querySelector('.nav-item-place'); // Места
    const navItem_event = whatToDo.querySelector('.nav-item-event'); // События


    // Добавление активного класса для элемента навигации и отрисовка нужных меток
    function itemActive (item, array) {
      item.addEventListener('click', function() {
        if (this.classList.contains('js-active-mark')) {
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          map.geoObjects.removeAll();
          this.classList.add('js-active-mark');
          renderMarks (array);
        };
      });
    };

    // В аргументы функции добавляем название элемента навигации и массив данных для меток
    itemActive ( navItem_eat, restaurants);
    itemActive ( navItem_hotel, hotels);
    itemActive ( navItem_route, routes);
    itemActive ( navItem_place, routes);
    itemActive ( navItem_event, routes);

  };

}


const restaurants = [
  {
    name_icon: 'mark-eat',
    lat: 40.751999618091304,
    long: 44.87383867944334,
    url: './assets/img/map/01.jpg',
    title: "Dilijazz Restaurant 1",
    kitchen_name: 'Американская, Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
  {
    name_icon: 'mark-eat',
    lat: 40.75826541732117,
    long: 44.88379503930662,
    url: './assets/img/map/01.jpg',
    title: "Dilijazz Restaurant 2",
    kitchen_name: 'Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
];

export { restaurants }

const routes = [
  {
    name_icon: 'mark-eat',
    lat: 40.752999618091304,
    long: 44.87483867944334,
    url: './assets/img/map/01.jpg',
    title: "Маршрут 1",
    kitchen_name: 'Американская, Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
  {
    name_icon: 'mark-eat',
    lat: 40.75726541732117,
    long: 44.88279503930662,
    url: './assets/img/map/01.jpg',
    title: "Маршрут 2",
    kitchen_name: 'Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
  },
];

export { routes }
