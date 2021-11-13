const changeButton = document.querySelector('.menu__user-info-changes-button');
const addButton = document.querySelector('.menu__add-button');
const popup = document.querySelector('.popup');
const popupUser = document.querySelector('.popup_type_user');
const popupPhoto = document.querySelector('.popup_type_photo');
const userName = document.querySelector('.menu__user-name');
const userWorking = document.querySelector('.menu__user-working');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPhoto = document.querySelector('.popup_type_photo .popup__close-btn');
const formElement = document.querySelector('.popup__form');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserWork = document.querySelector('.popup__input_value_work');
const formElementPhoto = document.querySelector('.popup_type_photo .popup__form');
const inputPhotoCaption = document.querySelector('.popup_type_photo .popup__input_value_name');
const inputPhotoLink = document.querySelector('.popup_type_photo .popup__input_value_work');
const cardTemplate = document.querySelector('#card').content;
const cardsSection = document.querySelector('.cards');
const likeBtn = document.querySelector('.card__button');
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

initialCards.forEach(function (element) {
// клонируем содержимое тега template
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
// наполняем содержимым
cardElement.querySelector('.card__image').src = element.link;
cardElement.querySelector('.card__title').textContent = element.name;
// отображаем на странице
cardsSection.append(cardElement); 
});



function addNewPhoto(evt) {
  evt.preventDefault();
  closePopupPhoto();
  cardElement.querySelector('.card__image').src = inputPhotoLink.value;
  cardElement.querySelector('.card__title').textContent = inputPhotoCaption.value;
  cardsSection.prepend(cardElement); 
}

cardsElement.querySelector('.card__button').addEventListener('click', function (evt) {
  evt.currentTarget.classList.add('card__button_active');
}); 


function openPopupUser() {
  inputUserName.value = userName.textContent;
  inputUserWork.value = userWorking.textContent;
  popupUser.classList.add('popup_opened');
};

function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
};

function closePopupUser() {
  popupUser.classList.remove('popup_opened');
};

function closePopupPhoto() {
  popupPhoto.classList.remove('popup_opened');
};



function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputUserName.value;
  userWorking.textContent = inputUserWork.value;
  closePopup();
}

changeButton.addEventListener('click', openPopupUser);
addButton.addEventListener('click', openPopupPhoto);
closeButton.addEventListener('click', closePopupUser);
closeButtonPhoto.addEventListener('click', closePopupPhoto);
formElement.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', addNewPhoto)
