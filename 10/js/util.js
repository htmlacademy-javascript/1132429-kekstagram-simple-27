const ALERT_SHOW_TIME = 5000;

/**
 * Фукнция проверки нажатой клавиши 'Esc'
 * @param {Object} evt - объект данных
 * @return {boolean} - возвращает булевое значение
 */
const isEscapeKey = (evt) => evt.key === 'Escape';
/**
 * Фукнция проверки нажатой клавиши 'Enter'
 * @param {Object} evt - объект данных
 * @return {boolean} - возвращает булевое значение
 */
const isEnterKey = (evt) => evt.key === 'Enter';

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.display = 'flex';
  alertContainer.style.alignItems = 'center';
  alertContainer.style.justifyContent = 'center';
  alertContainer.style.width = '100%';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.top = '220px';
  alertContainer.style.padding = '40px 30px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.background = 'red';
  alertContainer.style.marginLeft = 'auto';
  alertContainer.style.marginRight = 'auto';

  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте снова.';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const successSubmitHandler = () => {
  const successPopup = document.querySelector('#success')
    .content
    .querySelector('.success')
    .cloneNode(true);
  document.body.appendChild(successPopup);
  const closeSuccessButton = document.querySelector('.success__button');

  closeSuccessButton.addEventListener('click', () => {
    successPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'success') {
      successPopup.remove();
    }
  }, {once: true});
};

const errorSubmitHandler = () => {
  const errorPopup = document.querySelector('#error')
    .content
    .querySelector('.error')
    .cloneNode(true);
  document.body.appendChild(errorPopup);
  const closeErrorButton = errorPopup.querySelector('.error__button');

  closeErrorButton.addEventListener('click', () => {
    errorPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      errorPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'error') {
      errorPopup.remove();
    }
  }, {once: true});
};

export {isEscapeKey, isEnterKey, showAlert, successSubmitHandler, errorSubmitHandler};
