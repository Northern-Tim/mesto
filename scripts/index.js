const changeButton = document.querySelector('.menu__user-info-changes-button');
const addButton = document.querySelector('.menu__add-button');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPhoto = document.querySelector('.popup_type_photo .popup__close-btn');
const closeButtonFullscreen = document.querySelector('.popup_type_fullscreen .popup__close-btn');

const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup_type_user');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupOverlay = document.querySelector('.popup__overlay');
const popupList = document.querySelectorAll('.popup')

const userName = document.querySelector('.menu__user-name');
const userWorking = document.querySelector('.menu__user-working');

const formElement = document.querySelector('.popup__form');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserWork = document.querySelector('.popup__input_value_work');
const formElementPhoto = document.querySelector('.popup_type_photo .popup__form');

const inputPhotoCaption = document.querySelector('.popup_type_photo .popup__input_value_name');
const inputPhotoLink = document.querySelector('.popup_type_photo .popup__input_value_work');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// добавляем карточки из массива
initialCards.forEach(function (cardInfo) {  // перебираем массив
  createCard(cardInfo);  // вызываем функцию создание карточки
});

// Изменен порядок функций по указанию наставника
// применение данных из формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // нестандартное применение формы
  userName.textContent = inputUserName.value; // присваиваем имя
  userWorking.textContent = inputUserWork.value; // присваиваем подпись
  closePopup(popupUser);
}

// применение данных из формы добавления фото
function formAddSubmitHandler(evt) {
  evt.preventDefault();  // нестандартное применение формы
  closePopup(popupPhoto);
  const card = {
    name: inputPhotoCaption.value,
    link: inputPhotoLink.value
  }
  createCard(card); // добавляем карточку со значениями из формы
}

// создаем новую карточку
function addCard(cardInfo) { // !!! Изменил название функции, так как наставник сказал, что в имени должен быть глагол !!!
  const cardTemplate = document.querySelector('#card').content;  // обращаемся к шаблону
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);  // клонируем содержимое шаблона
  const cardImage = cardElement.querySelector('.card__image');  // определяем значение для изображения в карточке
  const cardTitle = cardElement.querySelector('.card__title');  // определяем значение для заголовка в карточке
  cardTitle.textContent = cardInfo.name; // присваиваем имя
  cardImage.src = cardInfo.link; // присваиваем ссылку
  cardImage.alt = cardInfo.name; // присваиваем альт через запрос имени
  return cardElement; // возвращаем значение карточки с заполненными полями
}

// добавляем новую карточку
function createCard(cardInfo) {
  const cardElement = addCard(cardInfo); // обращаемся к функции создания карточки
  document.querySelector('.cards').prepend(cardElement); // пушим карточку
  cardElement.querySelector('.card__button').addEventListener('click', likeCard); // добавляем слушатель лайка
  cardElement.querySelector('.card__image').addEventListener('click', () => openPopupFullscreen(cardInfo));  // добавляем слушатель фото на весь экран
  cardElement.querySelector('.card__button-trash').addEventListener('click', () => deleteCard(cardElement));  // добавляем слушатель удаления
}

// открытие фото на весь экран
function openPopupFullscreen(cardInfo) {
  popupFullscreen.querySelector('.popup__image').src = cardInfo.link; // присваиваем ссылку
  popupFullscreen.querySelector('.popup__image').alt = cardInfo.name; // присваиваем альт
  popupFullscreen.querySelector('.popup__description').textContent = cardInfo.name; // присваиваем описание
  openPopup(popupFullscreen);
}

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
  
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

// закрытие попапа на клавишу escape
function keyHandler (evt) {
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

// Переключаем лайк в карточке
function likeCard(evt) {
  evt.target.classList.toggle('card__button_active');  // переключаем кнопку
}

// Удаляем карточку
function deleteCard(cardElement) {
  cardElement.remove();  // удаляем элемент
}

// добавляем слушатели
changeButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', () => openPopup(popupPhoto));
closeButton.addEventListener('click', () => closePopup(popupUser));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));
closeButtonFullscreen.addEventListener('click', () => closePopup(popupFullscreen));
formElement.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formAddSubmitHandler);

// валидируем поля
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__message-error_active'
});