import { closeModal } from "./modal";


// @todo: Функция создания карточки
function createCard(elementCards, likeClick, deleteClick, imageClick ) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    const deleteButton = cardElement.querySelector('.card__delete-button');

    const cardLikeButton = cardElement.querySelector('card__like-button');


    // ссылка на картинку
    cardImage.setAttribute("src", elementCards.link);
    // тект на картинке
    cardImage.setAttribute("alt", elementCards.name);
    // назвение карточки
    cardTitle.textContent = elementCards.name;

    // like
    cardLikeButton.addEventListener('click', likeClick);
    // delete
    deleteButton.addEventListener('click', deleteClick);
    // image
    cardImage.addEventListener('click', imageClick);

    // deleteButton.addEventListener('click', () => {
    //     removeCards(cardElement);
    // });

    return cardElement;
}

// функция лайка

function likeCard(event) {

    event.tagret.toggle('card__like-button_is-active');

}

// функия удаление карточки

function deleteCard(event) {

    const card = event.tagret.closest('card');

    card.remove();
}

export { createCard, likeCard, deleteCard };



