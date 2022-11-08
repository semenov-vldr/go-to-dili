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
