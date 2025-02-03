const config = {
    baseUrl: "https://nomoreparties.co/v1//wff-cohort-30",
    headers: {
        authorization: "20aaa3b5-0e43-4e4d-9730-a8ae3c4ef3fa",
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
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
      }).then((res) => checkResponse(res));
};

// изменнеие аватара
export const userAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatar,
        }),
      }).then((res) => checkResponse(res));
};

// отправляем данные
export const patchUserInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about,
        }),
      }).then((res) => checkResponse(res));
};

// данные новой карточки
export const postNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link,
        }),
      }).then((res) => checkResponse(res));
};

// данные профиля
export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
      }).then((res) => checkResponse(res));
};

// удаление своей карточки
export const deleteCardMy = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: config.headers,       
    }).then((res) => checkResponse(res));
};


// добалвение лайка
export const putLike = (cardId, method) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: method,
        headers: config.headers,       
      }).then((res) => checkResponse(res));
};
 