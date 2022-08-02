
window.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo svg");
  const button = document.querySelector(".header__button");
  const icon_phone = document.querySelector(".header__phone svg");
  if (pageYOffset > 5) {
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
