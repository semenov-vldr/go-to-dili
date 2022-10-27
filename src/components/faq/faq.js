{

  const accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');

  if (accordionItems) {

    accordionItems.forEach(accordionItem => {
      accordionItem.addEventListener('click', () => toggleClass(accordionItem));
    });

  }



}
