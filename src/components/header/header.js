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







