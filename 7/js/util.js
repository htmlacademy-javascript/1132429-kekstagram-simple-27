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

export {isEscapeKey, isEnterKey};
