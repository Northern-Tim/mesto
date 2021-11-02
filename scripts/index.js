let changeButton = document.querySelector('.menu__user-info-changes-button');
let popup = document.querySelector('.popup');
let userName = document.querySelector('.menu__user-name');
let userWorking = document.querySelector('.menu__user-working');
let closeButton = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__form');
let inputUserName = document.querySelector('.popup__input_value_name');
let inputUserWork = document.querySelector('.popup__input_value_work');

function openPopup() {
  inputUserName.value = userName.textContent;
  inputUserWork.value = userWorking.textContent;
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputUserName.value;
  userWorking.textContent = inputUserWork.value;
  closePopup();
}

changeButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);