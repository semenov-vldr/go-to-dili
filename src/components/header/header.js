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
const headerMobile = document.querySelector('.header-mobile')
const headerMobileWrapper = document.querySelector('.header-mobile__wrapper');
const logo_mobile = document.querySelector('.header-mobile__logo');
if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('js-lock-scroll');
    burger.classList.toggle('js-active-menu');
    headerMobile.classList.toggle('js-active-menu');
    menu.classList.toggle('js-active-menu');
    logo_mobile.classList.toggle('js-active-menu');
    headerMobileWrapper.classList.toggle('js-active-menu');
    promoDiscount.classList.toggle('js-active-menu');
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






