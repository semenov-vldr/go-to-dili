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






