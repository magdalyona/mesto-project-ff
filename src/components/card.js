
// @todo: Функция создания карточки
function createCard(elementCards, deleteClick, likeClick, imageClick) {

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

 //5спринт
    // const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    // const cardTitle = cardElement.querySelector('.card__title');
    // const cardImage = cardElement.querySelector('.card__image');
    
    // ссылка на картинку
    
    

    // delete
    deleteButton.addEventListener('click', deleteClick); 
    // like
    cardLikeButton.addEventListener('click', likeClick);    
    // image
    cardImage.addEventListener('click', imageClick); 
     

    // deleteButton.addEventListener('click', () => {
    //     removeCards(cardElement);
    // });
    return cardElement;
}

// функия удаление карточки
function deleteCard(event) {

    const card = event.target.closest('.card');
    card.remove();

}

// функция лайка
function likeCard(event) {

    event.target.classList.toggle('card__like-button_is-active'); 
    console.log(likeCard)

}

export { createCard, deleteCard, likeCard };



