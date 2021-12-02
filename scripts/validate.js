//показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, { errorClass, inputErrorClass }) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //добавляем классы и сообщение
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//прячем ошибку
const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  //убираем классы и сообщение
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

//проверяем валидность
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

//переключаем положение кнопки
function toggleButtonState(formElement, buttonElement, inactiveButtonClass) {
  const isFormValid = formElement.checkValidity();

  buttonElement.disabled = !isFormValid;
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
};

//вешаем слушатели
function setEventListeners(formElement, config) {
  const {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
  } = config;

  const forms = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  forms.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, { errorClass, inputErrorClass });
      toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    });
  });
};



//включаем валидацию
function enableValidation(config) {
  const { formSelector, ...object } = config;
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, object);
  });
};

