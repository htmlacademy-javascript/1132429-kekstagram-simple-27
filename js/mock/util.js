/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно
 * @param {number} minNum - минимальное значение
 * @param {number} maxNum - максимальное значение
 * @return {number} - случайно число из заданного диапазона
 */
const getRandomNumber = (minNum, maxNum) => {
  if (minNum < 0 || maxNum < minNum) {
    return NaN;
  }
  return Math.round((maxNum - minNum) * Math.random() + minNum);
};
/**
 * Функция по проверке длины строки с заданным значением
 * @param {string} string - исходная строка, которую добавляет пользователь
 * @param {number} maxLength - количество максимального значения символов для проверки
 * @return {boolean} - возвращает истину, если количество символов в исходной строке меньше заданного значения
 */
const checkStringLength = (string, maxLength) => string.length <= maxLength;
/**
 * Функция, которая возвращает случайный элемент массива
 * @param {array} array - массив данных
 * @return {number} - возвращает рандомное число от длины массива
 */
const getRandomArrayElement = (array) =>
  array[getRandomNumber(0, array.length - 1)];
/**
 * Фукнция проверки нажатой клавиши
 * @param {*} evt
 * @return {boolean} - возвращает булевое значение
 */
const isEscapeKey = (evt) => evt.key === 'Escape';
/**
 *
 * @param {*} evt
 * @return {boolean} - возвращает булевое значение
 */
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomNumber, getRandomArrayElement, checkStringLength, isEscapeKey, isEnterKey};
