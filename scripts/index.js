import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import {popupUser, popupImage, template, popupPhoto, popupFullscreen, popupList, changeButton, 
  addButton, closeButton, closeButtonPhoto, closeButtonFullscreen, inputUserName, inputUserWork, 
  inputPhotoCaption, inputPhotoLink, userName, userWorking, formElement, formElementPhoto, 
  elementsContainer, initialCards} from './constants.js';

  const formValidationObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__message-error_active'
  };

// создания новой карточки
function createCard(item) {
  // тут создаете карточку и возвращаете ее
  const card = new Card(item, template, openPopupFullscreen);
  // Создаём карточку и возвращаем наружу
  return card.generateCard();
}

const result = initialCards.map((item) => {
  return createCard(item);
});
elementsContainer.append(...result);

// Изменен порядок функций по указанию наставника
// применение данных из формы
function handleSubmitForm(evt) {
  evt.preventDefault(); 
  // нестандартное применение формы
  userName.textContent = inputUserName.value; // присваиваем имя
  userWorking.textContent = inputUserWork.value; // присваиваем подпись
  closePopup(popupUser);
}

// применение данных из формы добавления фото
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  elementsContainer.prepend(
    createCard({ 
      name: inputPhotoCaption.value, 
      link: inputPhotoLink.value })
  );
  inputPhotoCaption.value = '';
  inputPhotoLink.value = '';
  closePopup(popupPhoto);
}

// добавляем слушатели
changeButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', () => openPopup(popupPhoto));
closeButton.addEventListener('click', () => closePopup(popupUser));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));
closeButtonFullscreen.addEventListener('click', () => closePopup(popupFullscreen));
formElement.addEventListener('submit', handleSubmitForm);
formElementPhoto.addEventListener('submit', handleAddFormSubmit);

function openPopupFullscreen(name, link) {
  openPopup(popupFullscreen);
  popupImage.src = link;
  popupImage.alt = name;
  popupFullscreen.querySelector(".popup__description").textContent = name;
}

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupByEsc);
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupByEsc);
}

// закрытие попапа на клавишу escape
function handleClosePopupByEsc (evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape'){
    closePopup(popup)
  }
};

// закрытие попапа при клике на оверлей
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) {
          closePopup(popup)
      }
  })
})

// Заполняем поля попапа информации о пользователе и открываем его
function openPopupEdit() {
  inputUserName.value = userName.textContent;  // присваиваем имя
  inputUserWork.value = userWorking.textContent;  // присваиваем подпись
  openPopup(popupUser);
}

// добавляем слушатели
changeButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', () => openPopup(popupPhoto));
addButton.addEventListener('click', () => openPopup(popupPhoto));
closeButton.addEventListener('click', () => closePopup(popupUser));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));
closeButtonFullscreen.addEventListener('click', () => closePopup(popupFullscreen));
formElement.addEventListener('submit', handleSubmitForm);
formElementPhoto.addEventListener('submit', handleAddFormSubmit);

// включаем валидацию
const validPopupTypeEdit = new FormValidator(formElement, formValidationObject);
validPopupTypeEdit.enableValidation();

const validPopupTypeCard = new FormValidator(formElementPhoto, formValidationObject);
validPopupTypeCard.enableValidation();