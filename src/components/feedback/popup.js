const API_URL = 'https://httpbin.org/post';

// let html = document.documentElement;
// let scrollY = window.scrollY;

let popup;

const isPressedEscapeKey = (evt) => evt.key === 'Escape';

function onDocumentEscKeydown (evt) {
  if ( isPressedEscapeKey(evt) ) {
    evt.preventDefault();
    closePopup();
  };
};

// function onFreePlaceClick (item, evt) {
//   const content = item.querySelector('.popup__content');
//   const click = evt.composedPath().includes(content);
//   if (!click) closePopup();
// };

function closePopup () {
  document.querySelector('.feedback__popup').remove();
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.removeEventListener('click', closePopup);
  document.body.classList.remove('js-lock-scroll');
  form.reset();
  //window.scrollTo(0, scrollY);
  //html.style.top = "";
};

function showPopup () {
  document.body.append(popup);
  const closeButton = popup.querySelector('.popup__close');
  document.body.classList.add('js-lock-scroll')
  document.addEventListener('keydown', onDocumentEscKeydown);
  document.addEventListener('click', closePopup);
  //closeButton.addEventListener('click', closePopup);
  //html.style.top = -scrollY + 'px';
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

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = form.checkValidity();

    if (isValid) {
      sendDataForm(() => {
          blockSubmitButton();
          onSuccess();
        },
        () => {
          unblockSubmitButton();
          onError();
        },
        new FormData(evt.target)
      );
    }
  });
};

setUserFormSubmit ( displayPopupSuccess, displayPopupError );
