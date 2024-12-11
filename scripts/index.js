// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
// клонируем содержимое тега template
// const userElement = userTemplate.querySelector('.user').cloneNode(true);
const listElement = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(elementCards, removeCards) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    const deleteButton = cardElement.querySelector('.card__delete-button');


    // ссылка на картинку
    cardImage.setAttribute("src", elementCards.link);
    // тект на картинке
    cardImage.setAttribute("alt", elementCards.name);
    // назвение карточки
    cardTitle.textContent = elementCards.name;

    // удаление карточки
    deleteButton.addEventListener('click', () => {
        removeCards(cardElement);
    });

    return cardElement;

//     // выберите кнопку удаления
// const deleteButton = document.querySelector('.todo__item-button');
// // добавьте обработчик
// deleteButton.addEventListener('click', function () {
//  .....
// });

}

// @todo: Функция удаления карточки

function removeCards(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((elementCards) => {
    const cardElement = createCard(elementCards, removeCards);
    listElement.append(cardElement);
});

