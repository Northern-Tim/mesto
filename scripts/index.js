const changeButton = document.querySelector('.menu__user-info-changes-button');
const addButton = document.querySelector('.menu__add-button');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPhoto = document.querySelector('.popup_type_photo .popup__close-btn');
const closeButtonFullscreen = document.querySelector('.popup_type_fullscreen .popup__close-btn');

const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup_type_user');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');

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

// создаем новую карточку
function newCard(cardInfo) {
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
  const cardElement = newCard(cardInfo); // обращаемся к функции создания карточки
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
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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
  evt.name = inputPhotoCaption.value;  // присваиваем имя
  evt.link = inputPhotoLink.value; // присваиваем ссылку
  closePopup(popupPhoto);
  createCard(evt); // добавляем карточку со значениями из формы
}

// добавляем слушатели
changeButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', () => openPopup(popupPhoto));
closeButton.addEventListener('click', () => closePopup(popupUser));
closeButtonPhoto.addEventListener('click', () => closePopup(popupPhoto));
closeButtonFullscreen.addEventListener('click', () => closePopup(popupFullscreen));
formElement.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formAddSubmitHandler);

//Надеюсь, что не смутит количество комментариев. Я пытался из своей абсурдной массы собрать что-то более
//структурированное и понятное. Потому, делал себе множество пометок.