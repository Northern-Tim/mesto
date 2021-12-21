export class Card {
  constructor(item, template, openPopupFullscreen) {
    this._link = item.link;
    this._name = item.name;
    this._template = template;
    this._openPopupFullscreen = openPopupFullscreen;
  }
  _newCard() {
    const newCard = this._template.content
      .querySelector(".card")
      .cloneNode(true);
    return newCard;
  }
  
  _deleteCard() {
    this._element.remove()
    this._element = null;
  }

  _likeCard(evt) {
    evt.target.classList.toggle("card__button_active");
  }

  _setEventListeners() {
    const buttonDeleteCard = this._element.querySelector(".card__button-trash");
    buttonDeleteCard.addEventListener("click", () => this._deleteCard());
    this._cardImage.addEventListener("click", () => this._openPopupFullscreen(this._name, this._link));
    const buttonLike = this._element.querySelector(".card__button");
    buttonLike.addEventListener("click", this._likeCard);
  }
  
  generateCard() {
    this._element = this._newCard();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}


