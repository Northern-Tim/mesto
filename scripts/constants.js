const changeButton = document.querySelector('.menu__user-info-changes-button');
const addButton = document.querySelector('.menu__add-button');
const closeButton = document.querySelector('.popup__close-btn');
const closeButtonPhoto = document.querySelector('.popup_type_photo .popup__close-btn');
const closeButtonFullscreen = document.querySelector('.popup_type_fullscreen .popup__close-btn');


const popupUser = document.querySelector('.popup_type_user');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupList = document.querySelectorAll('.popup')
const elementsContainer = document.querySelector('.cards')

const userName = document.querySelector('.menu__user-name');
const userWorking = document.querySelector('.menu__user-working');

const formElement = document.querySelector('.popup__form');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserWork = document.querySelector('.popup__input_value_work');
const formElementPhoto = document.querySelector('.popup_type_photo .popup__form');

const popupImage = popupFullscreen.querySelector('.popup__image');

const inputPhotoCaption = document.querySelector('.popup_type_photo .popup__input_value_name');
const inputPhotoLink = document.querySelector('.popup_type_photo .popup__input_value_work');

const template = document.querySelector('#card');

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

export {popupUser, popupImage, template, popupPhoto, popupFullscreen, popupList, changeButton, 
  addButton, closeButton, closeButtonPhoto, closeButtonFullscreen, inputUserName, inputUserWork, 
  inputPhotoCaption, inputPhotoLink, userName, userWorking, formElement, formElementPhoto, 
  elementsContainer, initialCards}
