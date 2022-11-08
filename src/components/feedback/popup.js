const API_URL = 'https://httpbin.org/post';

const html = document.querySelector('html')

let popup;

const isPressedEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentEscKeydown (evt) {
  if ( isPressedEscapeKey(evt) ) {
    evt.preventDefault();
    closePopup();
  };
};


function closePopup () {
  document.querySelector('.feedback__popup').remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', closePopup);
  html.classList.remove('js-lock-scroll')
  form.reset();
};

function showPopup () {
  document.body.append(popup);
  //const closeButton = popup.querySelector('.popup__close');
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', closePopup);
  html.classList.add('js-lock-scroll')
};

function displayPopupSuccess () {
  popup = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

function displayPopupError () {
  popup = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

const submitButton = document.querySelector('.feedback-form__button');

function blockSubmitButton () {
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Отправляю...';
  }
};

function unblockSubmitButton () {
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = 'Отправить заявку';
  }

};

function sendDataForm (onSuccess, onError, body) {
  fetch(API_URL,{
      method: 'POST',
      body,
    },
  ).then((responce) => {
    responce.ok ? onSuccess() : onError();
  }).catch(() => onError());
};

function setUserFormSubmit (onSuccess, onError) {

if (formList) {
formList.forEach(form => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = form.checkValidity();

    if (isValid) {
      sendDataForm(() => {
          blockSubmitButton();
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          unblockSubmitButton();
          onError();
        },
        new FormData(evt.target)
      );
    }
  });
})
}
};

setUserFormSubmit ( displayPopupSuccess, displayPopupError );
