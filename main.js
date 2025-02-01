/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\n// @todo: Функция создания карточки\nfunction createCard(elementCards, deleteClick, likeClick, imageClick) {\n  var template = document.querySelector('#card-template');\n  if (!template) {\n    console.error('Template not found!');\n    return null; // или выбросить ошибку\n  }\n  var item = template.content.cloneNode(true);\n  var cardElement = item.querySelector('.card');\n  var cardTitle = item.querySelector('.card__title');\n  var cardImage = item.querySelector('.card__image');\n  cardImage.setAttribute(\"src\", elementCards.link);\n  // тект на картинке\n  cardImage.setAttribute(\"alt\", elementCards.name);\n  // назвение карточки\n  cardTitle.textContent = elementCards.name;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var cardLikeButton = cardElement.querySelector('.card__like-button');\n\n  //5спринт\n  // const cardElement = cardTemplate.querySelector('.card').cloneNode(true);\n  // const cardTitle = cardElement.querySelector('.card__title');\n  // const cardImage = cardElement.querySelector('.card__image');\n\n  // ссылка на картинку\n\n  // delete\n  deleteButton.addEventListener('click', deleteClick);\n  // like\n  cardLikeButton.addEventListener('click', likeClick);\n  // image\n  cardImage.addEventListener('click', imageClick);\n\n  // deleteButton.addEventListener('click', () => {\n  //     removeCards(cardElement);\n  // });\n  return cardElement;\n}\n\n// функия удаление карточки\nfunction deleteCard(event) {\n  var card = event.target.closest('.card');\n  card.remove();\n}\n\n// функция лайка\nfunction likeCard(event) {\n  event.target.classList.toggle('card__like-button_is-active');\n  console.log(likeCard);\n}\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://yandex_praktikum/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// открытие модального окна\n\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  popup.addEventListener('click', closedOverlay);\n  document.addEventListener('keydown', closedEsc);\n}\n\n// закрытие модального окна\n\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  popup.removeEventListener('click', closedOverlay);\n  document.removeEventListener('keydown', closedEsc);\n}\n\n// закрытие попапа кликом оверлей\n\nfunction closedOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.target);\n  }\n}\n;\n\n// закрытие нажатие на картинку esc\n\nfunction closedEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popupIsOpened = document.querySelector('.popup_is-opened');\n    closeModal(popupIsOpened);\n  }\n}\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n// index.js\n\n // удаление и лайки карточек\n // работа модальных окон\n // добавьте импорт главного файла стилей\n\nvar popups = document.querySelectorAll('.popup');\npopups.forEach(function (item) {\n  item.classList.add('popup_is-animated');\n});\n\n// @todo: DOM формы редактирования профиля\n\nvar titleProfile = document.querySelector('.profile__title');\nvar descriptionProfile = document.querySelector('.profile__description');\nvar popupTypeImg = document.querySelector('.popup_type_image');\nvar popupCloseImg = popupTypeImg.querySelector('.popup__close');\nvar popupImg = popupTypeImg.querySelector('.popup__image');\nvar popupCaptionImg = popupTypeImg.querySelector('.popup__caption');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popupClosed = popupTypeEdit.querySelector('.popup__close');\nvar popupProfileEdit = document.querySelector('.popup__form[name=\"edit-profile\"]');\nvar popupInitName = popupProfileEdit.querySelector('.popup__input_type_name');\nvar popupInitDescription = popupProfileEdit.querySelector('.popup__input_type_description');\nvar formNewCard = document.querySelector('.popup__form[name=\"new-place\"]');\nvar popupInitCard = formNewCard.querySelector('.popup__input_type_card-name');\nvar popupInitUrl = formNewCard.querySelector('.popup__input_type_url');\nvar popupNewCardType = document.querySelector('.popup_type_new-card');\nvar popupCloseCard = popupNewCardType.querySelector('.popup__close');\nvar buttonProfileEdit = document.querySelector('.profile__edit-button');\nvar buttonProfileAdd = document.querySelector('.profile__add-button');\n\n// const userElement = userTemplate.querySelector('.user').cloneNode(true); вывести карту на страницу\n\nvar listElement = document.querySelector('.places__list');\n_components_cards_js__WEBPACK_IMPORTED_MODULE_2__.initialCards.map(function (placesList) {\n  listElement.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(placesList, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.likeCard, openImgPopup));\n});\n\n// pедактирование имени и информации о себе\nfunction openModalEditProfile() {\n  popupInitName.value = titleProfile.textContent;\n  popupInitDescription.value = descriptionProfile.textContent;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupTypeEdit);\n}\n\n// closed button кнопка\nfunction handlePopupCloseButton(event) {\n  var closedButton = event.target.closest('.popup');\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(closedButton);\n}\nfunction handleProfilFormSubmit(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n\n  titleProfile.textContent = popupInitName.value;\n  descriptionProfile.textContent = popupInitDescription.value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupTypeEdit);\n}\n\n// функция окно для создания карточек\nfunction handleCardAddFormSubmit(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n\n  var newForms = {\n    name: popupInitCard.value,\n    link: popupInitUrl.value\n  };\n  addCards(newForms, true);\n  formNewCard.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(popupNewCardType);\n}\n\n// функция для добавления карточек\nfunction addCards(cardElement, cardsNew) {\n  if (cardsNew) {\n    listElement.prepend((0,_components_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardElement, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.likeCard, openImgPopup));\n  } else {\n    listElement.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardElement, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_0__.likeCard, openImgPopup));\n  }\n}\n\n// открытие popul с картинкой\nfunction openImgPopup(event) {\n  popupImg.setAttribute('src', event.target.src);\n  popupImg.setAttribute('alt', event.target.alt);\n  popupCaptionImg.setAttribute = event.target.alt;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupTypeImg);\n}\n\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\n\nbuttonProfileEdit.addEventListener('click', openModalEditProfile);\npopupClosed.addEventListener('click', handlePopupCloseButton);\npopupCloseCard.addEventListener('click', handlePopupCloseButton);\npopupCloseImg.addEventListener('click', handlePopupCloseButton);\npopupProfileEdit.addEventListener('submit', handleProfilFormSubmit);\nbuttonProfileAdd.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_1__.openModal)(popupNewCardType);\n});\nformNewCard.addEventListener('submit', handleCardAddFormSubmit);\n\n// // @todo: Темплейт карточки\n// const cardTemplate = document.querySelector('#card-template').content;\n\n// Открытие и закрытие модального окна\n\n//     // выберите кнопку удаления\n// const deleteButton = document.querySelector('.todo__item-button');\n// // добавьте обработчик\n// deleteButton.addEventListener('click', function () {\n//  .....\n// });\n\n// @todo: Функция удаления карточки\n\n// function removeCards(cardElement) {\n//     cardElement.remove();\n// }\n\n// @todo: Вывести карточки на страницу\n\n// initialCards.forEach((elementCards) => {\n//     const cardElement = createCard(elementCards, removeCards);\n//     listElement.append(cardElement);\n// });\n\n// \"build\": \"webpack --mode production\" //\n\n//# sourceURL=webpack://yandex_praktikum/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;