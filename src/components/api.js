// api.js
const config = {
    baseUrl: "https://nomoreparties.co/v1//wff-cohort-32",
    headers: {
        authorization: "f32db58b-2a69-462b-a8f5-65801b05db69",
        "Content-Type": "application/json",
    },
};

// обработка ответа от сервеса
function checkResponse(res) {
    if (res.ok) {
        return res.json();
      }
    return Promise.reject(`Ошибка: ${res.status}`);
};

// данные карточек
export function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    }).then(checkResponse);
  }

// изменнеие аватара
export function updateUserAvatar(avatar)  {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(checkResponse);
  }

// отправляем данные
export function patchUserInfo(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({ name, about }),
    }).then(checkResponse);
  }

// данные новой карточки
export function postNewCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({ name, link }),
    }).then(checkResponse);
  }

// данные профиля
export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    }).then(checkResponse);
  }

// удаление своей карточки
export function deleteCardMy(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  }

// добалвение лайка
export function putLike(cardId, isLiked) {
 return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  }

