let changeButton = document.querySelector('.menu__user-info-changes-button');
let popup = document.querySelector('.popup');
let userName = document.querySelector('.menu__user-name');
let userWorking = document.querySelector('.menu__user-working');
let closeButton = document.querySelector('.popup__close-btn');
let saveButton = document.querySelector('.popup__save-btn');
let formElement = document.querySelector('.popup__form');
let inputUserName = document.querySelector('.popup__input-name');
let inputUserWork = document.querySelector('.popup__input-work');

function openPopup() {
  popup.classList.add("popup_opened");
  inputUserName.value = userName.textContent;
  inputUserWork.value = userWorking.textContent;
};

function closePopup() {
  popup.classList.remove("popup_opened");
};

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let UserNameVal = inputUserName.value;
  let UserWorkVal = inputUserWork.value;
  userName.textContent = inputUserName.value;
  userWorking.textContent = inputUserWork.value;
}

changeButton.addEventListener('click', openPopup); 
closeButton.addEventListener('click', closePopup); 
formElement.addEventListener('submit', formSubmitHandler); 
saveButton.addEventListener('click', closePopup); 