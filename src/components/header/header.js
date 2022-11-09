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
  const headerMobile = header.querySelector('.header-mobile');
  const logo = header.querySelector(".header__logo svg");
  const button = header.querySelector(".header__button");
  const icon_phone = header.querySelector(".header__phone svg");

  const elemsHeader = [header, headerMobile, logo, button, icon_phone];


  let currentPosition = window.scrollTop || document.documentElement.scrollTop;

  if ( previousPosition > currentPosition) {
    elemsHeader.forEach(elem => {
      elem.classList.add('scrolled-bottom');
      elem.classList.remove('scrolled-top');
      elem.classList.add('scrolled');
    });

  } else {
    elemsHeader.forEach(elem => {
      elem.classList.remove('scrolled-bottom');
      if (scrollY > 200) elem.classList.add('scrolled-top');
    });
  }

  previousPosition = currentPosition;

  if (scrollY < 1) {
    elemsHeader.forEach(elem => {
      elem.classList.remove('scrolled-bottom');
      elem.classList.remove('scrolled-top');
      elem.classList.remove('scrolled');
    });
  }

};



// burger
const burger = document.querySelector('.header__burger-icon');
const menu = document.querySelector('.header__container');
const headerMobile = document.querySelector('.header-mobile')
const headerMobileWrapper = document.querySelector('.header-mobile__wrapper');
const logo_mobile = document.querySelector('.header-mobile__logo');

const elemsHeader = [burger, menu, headerMobile, headerMobileWrapper, logo_mobile];

if (burger) {
  burger.addEventListener('click', () => {
    elemsHeader.forEach(elemHeader => elemHeader.classList.toggle('js-active-menu'))
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







