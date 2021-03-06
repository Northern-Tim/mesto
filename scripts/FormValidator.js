export  class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._config = config;
    this._submitButton = formElement.querySelector(config.submitButtonSelector);
  }

  _hideInputError(inputElement) {
    const { inputErrorClass, errorClass } = this._config;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  }

  _showInputError(inputElement, errorMessage) {
    const { inputErrorClass, errorClass } = this._config;
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  }

  _toggleButtonState(buttonElement, inactiveButtonClass) {
    const isFormValid = this._formElement.checkValidity();
    buttonElement.disabled = !isFormValid;
    buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
  }

  _setEventListeners() {
    const { inputSelector, submitButtonSelector, inactiveButtonClass } =this._config;
    const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
    const buttonElement = this._formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonElement, inactiveButtonClass);
      });
    });
  }

  enableButton() {
    this._submitButton.classList.remove(this._config.inactiveButtonClass);
    this._submitButton.removeAttribute("disabled", "disabled");
  }

  disableButton() {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
    this._submitButton.setAttribute("disabled", "disabled");
  }
  
  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }   
}