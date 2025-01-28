// открытие модального окна

function openModal(popup) {

    popup.classList.add('popup_is-opened');
    popup.addEventListener('click', closedOverlay);
    document.addEventListener('keydown', closedEsc);    

}

// закрытие модального окна

function closeModal(popup) {

    popup.classList.remove('popup_is-opened');
    popup.removeEventListener('click', closedOverlay);
    document.removeEventListener('keydown', closedEsc);   

}

// закрытие попапа кликом оверлей

function closedOverlay(evt) {

    if(evt.target === evt.currentTarget) {
        closeModal(evt.target)
    }
};


// закрытие нажатие на картинку esc

function closedEsc(evt) {

    if (evt.key === 'Escape') {

        const popupIsOpened = document.querySelector('.popup_is-opened');

        closeModal(popupIsOpened)
    }
}


export { openModal, closeModal };