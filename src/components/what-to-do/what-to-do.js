const whatToDo = document.querySelector('.what-to-do'); // блок "Что делать в городе?"

const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('js-active-mark');
  })
});
