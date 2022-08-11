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



// select
const select = document.querySelector('.header-select');
const selectHeader = select.querySelectorAll('.header-select__header');
const selectItems = select.querySelectorAll('.header-select__item');
const selectCurrent = select.querySelector('.header-select__current');

function selectToggle () {
  this.parentElement.classList.toggle('js-active-select');
};

function selectChoose () {
  selectCurrent.innerText = this.innerHTML;
  select.classList.remove('js-active-select');
};

selectHeader.forEach(item => {
  item.addEventListener('click', selectToggle);
});

selectItems.forEach(item => {
  item.addEventListener('click', selectChoose);
});


// Клик снаружи выпадающего списка, закрытие списка
  document.addEventListener('click', (evt) => {
    if ( evt.target !== selectCurrent ) {
      select.classList.remove('js-active-select');
    };
  });

// Клик по кнопке Tab или Esc, закрытие списка
  document.addEventListener('keydown', (evt) => {
    if ( evt.key === 'Tab' || evt.key === 'Escape' ) {
      select.classList.remove('js-active-select');
    };
  });



