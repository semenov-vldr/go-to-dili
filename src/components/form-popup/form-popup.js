{

  const formPopup = document.querySelector('.form-popup');
  const partnersButton = document.querySelector('.partners__button');

  if (formPopup) {
    const form = formPopup.querySelector('.feedback-form');
    const close = formPopup.querySelector('.form-popup__close');


    function onDocumentClick () {
      document.body.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('form-popup')) {
          formPopup.classList.remove('js-popup-active');
        }
      })
    };

    close.addEventListener('click', () => {
      formPopup.classList.remove('js-popup-active')
      //document.body.classList.remove('js-lock-scroll')
    })

    form.addEventListener('submit', () => {
      formPopup.classList.remove('js-popup-active')
      //document.body.classList.remove('js-lock-scroll')
    })


    if (partnersButton) {
      partnersButton.addEventListener('click', () => {
        formPopup.classList.add('js-popup-active')
        //document.body.classList.add('js-lock-scroll')
        onDocumentClick()
      })
    }
  }





}
