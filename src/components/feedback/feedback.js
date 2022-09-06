{

  const phoneInputs = document.querySelectorAll('input[data-tel-input]');

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const onPhoneInput = (evt) => {
    const input = evt.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) input.value = "";


    if (input.value.length != selectionStart) {
      if (evt.data && /\D/g.test(evt.data)) {
        input.value = formattedInputValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      // Российские номера
      if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      if (inputNumbersValue[0] === "8") {
        phoneInputs[0].setAttribute("pattern", ".{17,}");
      }

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
      }

// Не российские номера
    } else formattedInputValue = "+" + inputNumbersValue;
    input.value = formattedInputValue;
  };

// Стирание первого символа
  const onPhoneKeyDown = (evt) => {
    const input = evt.target;
    if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
      input.value = "";
    }
  };

// Вставка цифр в любое место
  const onPhonePaste = (evt) => {
    const pasted = evt.clipboardData || window.clipboardData;
    const input = evt.target;
    const inputNumbersValue = getInputNumbersValue(input);
    if (pasted) {
      const pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) input.value = inputNumbersValue;
    }
  };

// phoneInputs.forEach(input => {
//   input.addEventListener('input', onPhoneInput);
//   input.addEventListener("keydown", onPhoneKeyDown);
//   input.addEventListener("paste", onPhonePaste);
// });

  const form = document.querySelector('.feedback__form');

  if (form) {

    const inputName = form.querySelector('#name');
    const inputPhone = form.querySelector('#phone');
    const inputEmail = form.querySelector('#email');

// Ввод в поле ИМЯ только русские буквы
// inputName.addEventListener('input', function () {
//   this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]+$/, '');
//  });

// Ввод в поле ТЕЛЕФОН только цифр
// inputPhone.addEventListener('input', function () {
//   this.value = this.value.replace(/[^\d]/g, "");
// });


    // Сообщение об ошибки валидации
    const nameError = form.querySelector('#name ~ span');
    const nameErrorMessage = 'Вы ввели неверное имя';
    const phoneError = form.querySelector('#phone ~ span');
    const phoneErrorMessage = 'Вы ввели неверный номер';
    const submitButton = form.querySelector('.feedback-form__button');


    function showError(input, error, message) {
      if (!input.checkValidity()) {
        error.textContent = message;
        submitButton.disabled = true;
      } else {
        error.textContent = '';
        submitButton.disabled = false;
      };
      if (!input.value) {
        error.textContent = '';
        submitButton.disabled = false;
      };
    };

    inputName.addEventListener('input', () => showError(inputName, nameError, nameErrorMessage));
    inputPhone.addEventListener('input', () => showError(inputPhone, phoneError, phoneErrorMessage));


// --------pop-up--------------
    const page = document.querySelector('.page');
    const popup = document.querySelector('.feedback__popup');
    const popupContent = popup.querySelector('.popup__content');
    const closeButton = popup.querySelector('.popup__close');

    const isPressedEscapeKey = (evt) => evt.key === 'Escape';

    const closePopup = () => {
      popup.classList.remove('js-popup-active');
      page.classList.remove('js-lock-scroll');
    }

    function onDocumentEscKeydown(evt) {
      if (isPressedEscapeKey(evt)) closePopup();
    };

    function onDocumentClick(evt) {
      const click = evt.composedPath().includes(popupContent);
      if (!click) closePopup();
    };

    function submitForm(evt) {
      evt.preventDefault();
      popup.classList.add('js-popup-active');
      page.classList.add('js-lock-scroll');
      form.reset();
    };


    form.addEventListener('submit', submitForm);
    closeButton.addEventListener('click', closePopup);
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onDocumentEscKeydown);

  }


}
