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
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.background = 'red';
  alertContainer.style.margin = 'auto';

  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте снова.';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, isEnterKey, showAlert};
