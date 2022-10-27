const API_URL = 'https://httpbin.org/post';

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
  document.body.classList.remove('js-lock-scroll');
  form.reset();
};

function showPopup () {
  document.body.append(popup);
  const closeButton = popup.querySelector('.popup__close');
  document.body.classList.add('js-lock-scroll')
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', closePopup);
};

function displayPopupSuccess () {
  popup = document.querySelector('#success').content.cloneNode(true);
  showPopup();
};

function displayPopupError () {
  popup = document.querySelector('#error').content.cloneNode(true);
  showPopup();
};

function blockSubmitButton () {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

function unblockSubmitButton () {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить заявку';
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

if (form) {
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
}
};

setUserFormSubmit ( displayPopupSuccess, displayPopupError );
