/**
 * Функция для получения данных с сервера методом GET
 * @param {Function} onSuccess - коллбэк функция, которая вызывается при успешном ответе с сервера
 * @param {Function} onFail - коллбэк функция, которая вызывается при отрицательном ответе с сервера
 * @return {Promise} - возвращает промис
 */
const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};
/**
 * Функция для отправки данных на сервер методом POST
 * @param {Function} onSuccess - коллбэк функция, которая вызывается при успешном ответе с сервера
 * @param {Function} onFail - коллбэк функция, которая вызывается при отрицательном ответе с сервера
 * @return {Promise} - возвращает промис
 */
const sendData = (onSuccess, onFail, data) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
