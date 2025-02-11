import './pages/index.css';

import { createCard } from './components/card.js'; // удаление и лайки карточек
import { openModal, closeModal, closedOverlay } from './components/modal.js'; // работа модальных окон
import { initialCards } from './components/cards.js'; // добавьте импорт главного файла стилей

import { enableValidation, clearValidation, toggleButtonState } from './components/validate.js';
import { getInitialCards, getUserInfo, patchUserInfo, postNewCard, putLike, deleteCardMy, userAvatar } from './components/api.js';

// Сохраняем ссылки на важные элементы DOM для оптимизации
const listElement = document.querySelector('.places__list');
const popupTypeImg = document.querySelector('.popup_type_image');
const popupNewCardType = document.querySelector('.popup_type_new-card');
const buttonProfileAdd = document.querySelector('.profile__add-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = document.forms['edit-profile'];
const popupInitName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupInitDescription = popupProfileEdit.querySelector('.popup__input_type_description');
const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');
const formNewCard = popupNewCardType.querySelector('.popup__form');
const popupInitCard = formNewCard.querySelector('.popup__input_type_card-name');
const popupInitUrl = formNewCard.querySelector('.popup__input_type_url');
const closeButtons = document.querySelectorAll('.popup__close');
const popupImg = popupTypeImg.querySelector('.popup__image');
const popupCaptionImg = popupTypeImg.querySelector('.popup__caption');

let userId;
const popupDelete = document.querySelector('.popup_type_delete-card');
const popupDeleteButton = popupDelete.querySelector('.popup__button');

let cardToDelete = null;
const popupAvatar = document.querySelector('.popup_type_avatar');
const formAvatar = document.forms['edit-avatar'];
const inputAvatar = formAvatar.querySelector('.popup__input_type_avatar');

const profileAvatar = document.querySelector('.profile__image');

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

function renderLoading(isLoading, button, buttonText = 'Сохранить', loadingText = 'Сохранение...') {
    if (isLoading) {
        button.textContent = loadingText;
    } else {
        button.textContent = buttonText;
    }
}

//редактирование аватарки
function handleAvatarFormSubmit(evt, inputAvatar, popupAvatar, profileAvatar) {
    evt.preventDefault();

    const submitButton = evt.submitter;
    renderLoading(true, submitButton);

    userAvatar(inputAvatar.value)
        .then((userData) => {
            profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
            closeModal(popupAvatar);
        })
        .catch((err) => {
            console.error(`Ошибка: ${err}`);
        })
        .finally(() => {
            renderLoading(false, submitButton);
        });
}

function deleteClick(cardElement, cardId) {
    cardToDelete = { element: cardElement, id: cardId };
    openModal(popupDelete);
}


//обработка клика 
function likeClick(cardId, likeButton) {
    const method = likeButton.classList.contains('card__like-button_is-active')
        ? 'DELETE'
        : 'PUT';
    putLike(cardId, method)
        .then((data) => {
            likeButton.classList.toggle('card__like-button_is-active');
            const cardLikeCount = likeButton
                .closest('.card')
                .querySelector('.card__like-count');

            if (data.likes.length > 0) {
                cardLikeCount.textContent = data.likes.length;
                cardLikeCount.classList.remove('card__like-count_hidden');
            } else {
                cardLikeCount.classList.add('card__like-count_hidden');
            }
        })
        .catch((err) => console.error(`Ошибка: ${err}`));
}

function imageClick(elementCards) {
    popupImg.src = elementCards.link;
    popupImg.alt = elementCards.name;
    popupCaptionImg.textContent = elementCards.name;
    openModal(popupTypeImg);
}

closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closeModal(popup);
    });
});


//редактировнаие имени и описание
function handleFormEditSubmit(evt) {
    evt.preventDefault();
    // const form = evt.target;
    const submitButton = evt.submitter;

    // if (!validateForm(form, validationConfig)) {
    //     return;
    // }

    renderLoading(true, submitButton);

    patchUserInfo(popupInitName.value, popupInitDescription.value)
        .then((userData) => {
            titleProfile.textContent = userData.name;
            descriptionProfile.textContent = userData.about;
            closeModal(popupTypeEdit);
        })
        .catch((err) => {
            console.error(`Ошибка: ${err}`);
        })
        .finally(() => {
            renderLoading(false, submitButton);
        });
}


function fillProfileForm() {
    popupInitName.value = titleProfile.textContent;
    popupInitDescription.value = descriptionProfile.textContent;
}





//добавление новой карты
function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    // const form = evt.target;

    const submitButton = evt.submitter;

    // if (!validateForm(form, validationConfig)) {
    //     return;
    // }

    renderLoading(true, submitButton);

    postNewCard(popupInitCard.value, popupInitUrl.value)
        .then((newCards) => {
            const cardElement = createCard( newCards, deleteClick, likeClick, imageClick, userId );
            listElement.prepend(cardElement);
            formNewCard.reset();
            toggleButtonState(formNewCard, validationConfig);
            closeModal(popupNewCardType);
        })
        .catch((err) => {
            console.error(`Ошибка: ${err}`);
          })
          .finally(() => {
            renderLoading(false, submitButton);
          });
}




buttonProfileEdit.addEventListener('click', () => {
    fillProfileForm();
    clearValidation(popupProfileEdit, validationConfig);
    toggleButtonState(popupProfileEdit, validationConfig);
    openModal(popupTypeEdit);
});

popupTypeEdit.addEventListener('click', closedOverlay);
popupProfileEdit.addEventListener('submit', handleFormEditSubmit);
buttonProfileAdd.addEventListener('click', () => {
    formNewCard.reset();
    clearValidation(formNewCard, validationConfig);
    toggleButtonState(formNewCard, validationConfig);
    openModal(popupNewCardType);
});

popupNewCardType.addEventListener('click', closedOverlay);
popupTypeImg.addEventListener('click', closedOverlay);
formNewCard.addEventListener('submit', handleAddCardFormSubmit);

popupDeleteButton.addEventListener('click', () => {
    if (cardToDelete) {
        deleteCardMy(cardToDelete.id)
            .then(() => {
                cardToDelete.element.remove();
                closeModal(popupDelete);
                cardToDelete = null;
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            });
    }
});

profileAvatar.addEventListener('click', () => {
    formAvatar.reset();
    clearValidation(formAvatar, validationConfig);
    toggleButtonState(formAvatar, validationConfig);
    openModal(popupAvatar);
});

popupAvatar.addEventListener('click', closedOverlay);

formAvatar.addEventListener('submit', (evt) => {
    handleAvatarFormSubmit(evt, inputAvatar, popupAvatar, profileAvatar);
});

//включение Валидации форм
enableValidation(validationConfig);

//загрузка данных профиля и карточек с сервера
// @todo: Вывести карточки на страницу
Promise.all([getUserInfo(), getInitialCards()])
    .then(([userData, initialCards]) => {
        userId = userData._id;
        titleProfile.textContent = userData.name;
        descriptionProfile.textContent = userData.about;
        profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
        initialCards.forEach((elementCards) => {
            const card = createCard(elementCards, deleteClick, likeClick, imageClick, userId);
            listElement.append(card);
        });
    })
    .catch((err) => {
        console.error(`Ошибка: ${err}`);
    });