// index.js

import { createCard, likeCard, deleteCard } from './components/card.js'; // удаление и лайки карточек
import { openModal, closeModal } from './components/modal.js'; // работа модальных окон
import { initialCards } from './components/cards.js'; // добавьте импорт главного файла стилей
import './pages/index.css';


// @todo: DOM формы редактирования профиля

const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');

const popupTypeImg = document.querySelector('.popup_type_image');
const popupCloseImg = popupTypeImg.querySelector('.popup__close');
const popupImg = popupTypeImg.querySelector('.popup__image');
const popupCaptionImg = popupTypeImg.querySelector('.popup__caption');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupClosed = popupTypeEdit.querySelector('.popup__close');

const popupProfileEdit = document.querySelector('.popup__form[name="edit-profile"]');
const popupInitName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupInitDescription = popupProfileEdit.querySelector('.popup__input_type_description');

const popupNewCard = document.querySelector('.popup__form[name="new-place"]');
const popupInitCard = popupNewCard.querySelector('.popup__input_type_card-name');
const popupInitUrl = popupNewCard.querySelector('.popup__input_type_url');

const popupNewCardType = document.querySelector('.popup_type_new-card');
const popupCloseCard = popupNewCardType.querySelector('.popup__close');


const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonProfileAdd = document.querySelector('.profile__add-button');


 // const userElement = userTemplate.querySelector('.user').cloneNode(true); вывести карту на страницу

const listElement = document.querySelector('.places__list');
initialCards.map((placesList) => {
    listElement.append(createCard(placesList, deleteCard, likeCard, openImgPopup));
})

// pедактирование имени и информации о себе
function openModalEditProfile () {
    popupInitName.value = titleProfile.textContent;
    popupInitDescription.value = descriptionProfile.textContent;
    openModal(popupTypeEdit);
}

// closed button кнопка
function handlePopupCloseButton (event) {
    const closedButton = event.target.closest('.popup');
    closeModal(closedButton);
}

function handleProfilFormSubmit(evt) {

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    titleProfile.textContent = popupInitName.value;
    descriptionProfile.textContent = popupInitDescription.value;
    closeModal(popupTypeEdit);
 
}

// функция окно для создания карточек
function handleCardAddFormSubmit(evt) {

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    const newForms = {
        name: popupInitCard.value,
        link: popupInitUrl.value
    };

    addCards(newForms, true);
    popupNewCard.reset();
    closeModal(popupNewCardType)

}

// функция для добавления карточек
function addCards(cardElement, cardsNew) {

    if (cardsNew) {
        listElement.prepend(createCard(cardElement, deleteCard, likeCard, openImgPopup));
    } else {
        listElement.append(createCard(cardElement, deleteCard, likeCard, openImgPopup));
    }
}

// открытие popul с картинкой
function openImgPopup (event) {
    popupImg.setAttribute('src', event.target.src);
    popupImg.setAttribute('alt', event.target.alt);
    popupCaptionImg.setAttribute = event.target.alt;

    openModal(popupTypeImg);
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

buttonProfileEdit.addEventListener('click', openModalEditProfile);

popupClosed.addEventListener('click', handlePopupCloseButton);
popupCloseCard.addEventListener('click', handlePopupCloseButton);
popupCloseImg.addEventListener('click', handlePopupCloseButton);

popupProfileEdit.addEventListener('submit', handleProfilFormSubmit);

buttonProfileAdd.addEventListener('click', function() {
    openModal(popupNewCardType)
});

popupNewCard.addEventListener('submit', handleCardAddFormSubmit);



// // @todo: Темплейт карточки
// const cardTemplate = document.querySelector('#card-template').content;

// Открытие и закрытие модального окна


//     // выберите кнопку удаления
// const deleteButton = document.querySelector('.todo__item-button');
// // добавьте обработчик
// deleteButton.addEventListener('click', function () {
//  .....
// });



// @todo: Функция удаления карточки

// function removeCards(cardElement) {
//     cardElement.remove();
// }

// @todo: Вывести карточки на страницу

// initialCards.forEach((elementCards) => {
//     const cardElement = createCard(elementCards, removeCards);
//     listElement.append(cardElement);
// });

 


 // "build": "webpack --mode production" //
