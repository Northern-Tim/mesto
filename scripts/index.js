const changeButton = document.querySelector('.menu__user-info-changes-button');
const addButton = document.querySelector('.menu__add-button');
const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup_type_user');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const userName = document.querySelector('.menu__user-name');
const userWorking = document.querySelector('.menu__user-working');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPhoto = document.querySelector('.popup_type_photo .popup__close-btn');
const closeButtonFullscreen = document.querySelector('.popup_type_fullscreen .popup__close-btn');
const formElement = document.querySelector('.popup__form');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserWork = document.querySelector('.popup__input_value_work');
const formElementPhoto = document.querySelector('.popup_type_photo .popup__form');
const inputPhotoCaption = document.querySelector('.popup_type_photo .popup__input_value_name');
const inputPhotoLink = document.querySelector('.popup_type_photo .popup__input_value_work');
const cardTemplate = document.querySelector('#card').content;
const cardsSection = document.querySelector('.cards');
const likeBtn = document.querySelector('.card__button');
const popupDescription = document.querySelector('.popup__description');
const popupImage = document.querySelector('.popup__image');
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
initialCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardsSection.append(cardElement);
  cardElement.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active');
  });
  deleteCard();
  cardImage.addEventListener('click', function (event) { // картинка на весь экран
    openPopupFullscreen(popupImage);
    popupImage.setAttribute('src', event.target.src);
    popupImage.setAttribute('alt', element.name);
    popupDescription.innerText = element.name;
  });
});

// добавляем новую карточку
function addNewPhoto(evt) {
  evt.preventDefault();
  closePopupPhoto();
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__image').src = inputPhotoLink.value;
  cardElement.querySelector('.card__title').textContent = inputPhotoCaption.value;
  cardsSection.prepend(cardElement);
  cardElement.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active');
  });
  cardImage.addEventListener('click', function (event) { // картинка на весь экран
    openPopupFullscreen(popupImage);
    popupImage.setAttribute('src', event.target.src);
    popupImage.setAttribute('alt', element.name);
    popupDescription.innerText = event.name;
  });
  deleteCard();
  document.querySelector(".card__image").addEventListener("click", () => {
    openFullscreenPlace(evt);
  });
}

// открытие фото на весь экран
function openFullscreenPlace() {
  popupImage.src = document.querySelector(".card__image").src;
  popupDescription.textContent = document.querySelector(".card__title").textContent;
  openPopupFullscreen(popupFullscreen);
}

// удаление карточки
function deleteCard() {
  let deleteItems = document.getElementsByClassName('card__button-trash'); // удаление карточки
  let deleteBtn = Array.from(deleteItems);
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
      let element = deleteBtn[i].parentNode;
      element.remove();
    });
  }
}

// открытие и закрытие попапов
function openPopupUser() {
  inputUserName.value = userName.textContent;
  inputUserWork.value = userWorking.textContent;
  popupUser.classList.add('popup_opened');
};

function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
};

function openPopupFullscreen() {
  popupFullscreen.classList.add('popup_opened');
};

function closePopupUser() {
  popupUser.classList.remove('popup_opened');
};

function closePopupPhoto() {
  popupPhoto.classList.remove('popup_opened');
};

function closePopupFullscreen() {
  popupFullscreen.classList.remove('popup_opened');
};

// применение данных из формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputUserName.value;
  userWorking.textContent = inputUserWork.value;
  closePopupUser();
}

// добавляем слушатели
changeButton.addEventListener('click', openPopupUser);
addButton.addEventListener('click', openPopupPhoto);
closeButton.addEventListener('click', closePopupUser);
closeButtonPhoto.addEventListener('click', closePopupPhoto);
closeButtonFullscreen.addEventListener('click', closePopupFullscreen);
formElement.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', addNewPhoto);