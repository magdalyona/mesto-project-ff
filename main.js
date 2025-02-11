(()=>{"use strict";function e(e,t,n,r,o){var c=document.querySelector("#card-template").content;if(!c)return console.error("Template not found!"),null;var a=c.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__title"),u=a.querySelector(".card__image"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-count");return u.setAttribute("src",e.link),u.setAttribute("alt",e.name),i.textContent=e.name,e.owner._id!==o?l.remove():l.addEventListener("click",(function(){return t(a,e._id)})),e.likes.some((function(e){return e._id===o}))&&s.classList.add("card__like-button_is-active"),e.likes.length>0?(d.textContent=e.likes.length,d.classList.remove("card__like-count_hidden")):d.classList.add("card__like-count_hidden"),u.addEventListener("click",(function(){return r(e)})),s.addEventListener("click",(function(){return n(e._id,s)})),a}function t(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function n(e){e.classList.add("popup_is-opened"),e.addEventListener("click",o),document.addEventListener("keydown",t)}function r(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",o),document.removeEventListener("keydown",t)}function o(e){e.target===e.currentTarget&&r(e.target)}function c(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);Array.prototype.every.call(n,(function(e){return e.checkValidity()}))?(r.disabled=!1,r.classList.remove(t.inactiveButtonClass)):(r.disabled=!0,r.classList.add(t.inactiveButtonClass))}function a(e,t,n){var r=e.querySelector("#".concat(t.name,"-input-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function i(e,t){e.querySelectorAll(t.inputSelector).forEach((function(n){a(e,n,t)}))}var u={baseUrl:"https://nomoreparties.co/v1//wff-cohort-32",headers:{authorization:"f32db58b-2a69-462b-a8f5-65801b05db69","Content-Type":"application/json"}};function l(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,p=document.querySelector(".places__list"),f=document.querySelector(".popup_type_image"),_=document.querySelector(".popup_type_new-card"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".profile__edit-button"),h=document.forms["edit-profile"],b=h.querySelector(".popup__input_type_name"),S=h.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),L=_.querySelector(".popup__form"),E=L.querySelector(".popup__input_type_card-name"),g=L.querySelector(".popup__input_type_url"),C=document.querySelectorAll(".popup__close"),A=f.querySelector(".popup__image"),x=f.querySelector(".popup__caption"),T=document.querySelector(".popup_type_delete-card"),U=T.querySelector(".popup__button"),w=null,j=document.querySelector(".popup_type_avatar"),O=document.forms["edit-avatar"],P=O.querySelector(".popup__input_type_avatar"),B=document.querySelector(".profile__image"),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n}function M(e,t){w={element:e,id:t},n(T)}function N(e,t){(function(e,t){return fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{method:t,headers:u.headers}).then(l)})(e,t.classList.contains("card__like-button_is-active")?"DELETE":"PUT").then((function(e){t.classList.toggle("card__like-button_is-active");var n=t.closest(".card").querySelector(".card__like-count");e.likes.length>0?(n.textContent=e.likes.length,n.classList.remove("card__like-count_hidden")):n.classList.add("card__like-count_hidden")})).catch((function(e){return console.error("Ошибка: ".concat(e))}))}function J(e){A.src=e.link,A.alt=e.name,x.textContent=e.name,n(f)}C.forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))})),v.addEventListener("click",(function(){b.value=k.textContent,S.value=q.textContent,i(h,D),c(h,D),n(y)})),y.addEventListener("click",o),h.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=e.submitter;I(!0,o),(t=b.value,n=S.value,fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:t,about:n})}).then(l)).then((function(e){k.textContent=e.name,q.textContent=e.about,r(y)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){I(!1,o)}))})),m.addEventListener("click",(function(){L.reset(),i(L,D),c(L,D),n(_)})),_.addEventListener("click",o),f.addEventListener("click",o),L.addEventListener("submit",(function(t){t.preventDefault();var n,o,a=t.submitter;I(!0,a),(n=E.value,o=g.value,fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:n,link:o})}).then(l)).then((function(t){var n=e(t,M,N,J,d);p.prepend(n),L.reset(),c(L,D),r(_)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){I(!1,a)}))})),U.addEventListener("click",(function(){var e;w&&(e=w.id,fetch("".concat(u.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:u.headers}).then(l)).then((function(){w.element.remove(),r(T),w=null})).catch((function(e){console.error("Ошибка: ".concat(e))}))})),B.addEventListener("click",(function(){O.reset(),i(O,D),c(O,D),n(j)})),j.addEventListener("click",o),O.addEventListener("submit",(function(e){!function(e,t,n,o){e.preventDefault();var c,a=e.submitter;I(!0,a),(c=t.value,fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:c})}).then(l)).then((function(e){o.style.backgroundImage="url(".concat(e.avatar,")"),r(n)})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){I(!1,a)}))}(e,P,j,B)})),function(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.querySelectorAll(e.inputSelector).forEach((function(n){n.addEventListener("input",(function(){n.checkValidity()?a(t,n,e):function(e,t,n){var r=e.querySelector("#".concat(t.name,"-input-error"));t.classList.add(n.inputErrorClass),t.validity.patternMismatch?r.textContent=t.dataset.errorMessage:r.textContent=t.validationMessage,r.classList.add(n.errorClass)}(t,n,e),c(t,e)}))})),c(t,e),i(t,e)}))}(D),Promise.all([fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then(l),fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then(l)]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];d=c._id,k.textContent=c.name,q.textContent=c.about,B.style.backgroundImage="url(".concat(c.avatar,")"),a.forEach((function(t){var n=e(t,M,N,J,d);p.append(n)}))})).catch((function(e){console.error("Ошибка: ".concat(e))}))})();