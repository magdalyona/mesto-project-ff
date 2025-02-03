
// @todo: Функция создания карточки
function createCard(elementCards, deleteClick, likeClick, imageClick, userId) {

    const template = document.querySelector('#card-template');

    if (!template) {
        console.error('Template not found!');
        return null; // или выбросить ошибку
      }

    const item = template.content.cloneNode(true);
    const cardElement = item.querySelector('.card');

    const cardTitle = item.querySelector('.card__title');
    const cardImage = item.querySelector('.card__image');

    cardImage.setAttribute("src", elementCards.link);
    // тект на картинке
    cardImage.setAttribute("alt", elementCards.name);
    // назвение карточки
    cardTitle.textContent = elementCards.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    const cardLikeButton = cardElement.querySelector('.card__like-button');  
    
    const cardLikeCount = cardElement.querySelector('.card__like-count');

    
    if (elementCards.owner._id !== userId) {
        deleteButton.remove();
    } else {
        deleteButton.addEventListener('click', () => 
        deleteClick(cardElement, elementCards._id));
    }
    
    if (elementCards.likes.some((ures) => ures._id === userId)) {
        cardLikeButton.classList.add('card__like-button_is-active');
    }

    if (elementCards.likes.length > 0) {
        cardLikeCount.textContent = elementCards.likes.length;
        cardLikeCount.classList.remove('card__like-count_hidden');
    } else {
        cardLikeCount.classList.add('card__like-count_hidden')
    };

    cardImage.addEventListener('click', () => imageClick(elementCards));
    cardLikeButton.addEventListener('click', () => likeClick(elementCards._id, cardLikeButton));

    return cardElement;
}

export { createCard };



