const PICTURES_COUNT = 25;

const likesCount = {
  MIN: 15,
  MAX: 200,
};

const сommentsCount = {
  MIN: 0,
  MAX: 200,
};

const PICTURES_DESCRIPTION = [
  'Вау!',
  'Круто!',
  'Не очень.',
  'Могло бы быть и лучше..',
  'Хорошая фотография!',
  'Хорошего отдыха!'
];

/*
Функция, возвращающая случайное целое число из переданного диапазона включительно:
1. Объявляет функцию с двумя параметрами: минимальным и максимальным значением;
2. Записывает условие, что если минимальное значение меньше 0 (т.е отрицательное число) или максимальное значение меньше минимального значения, то верни NaN;
3. В противном случае верни округленное до целого число по логике: [1](максимальное - минимальное) [2]* рандомное число [3]+ минимальное число, где: [1] - разница заданных параметров,
[2] - умножение разницы заданных параметров на рандомное число, [3] - прибавляет минимальное число, чтобы полученное число находилось в диапазоне заданных параметров;
4. Вызывает функцию с заданными параметрами;
*/

function getRandomNumber (minNum, maxNum) {
  if (minNum < 0 || maxNum < minNum) {
    return NaN;
  }
  return Math.round((maxNum - minNum) * Math.random() + minNum);
}

getRandomNumber();

/*
Функция для проверки максимальной длины строки:
1. Объявляет функцию с двумя параметрами: сама строка и максимальное значение строки по символам;
2. Возвращает булевое значение 'true' в случае если длина строки меньшь либо равна максимальной длине строки
3. Вызывает функцию с заданными параметрами;
*/

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('', 140);

/* Функция, которая возвращает случайный элемент массива */

const getRandomArrayElement = (array) =>
  array[getRandomNumber(0, array.length - 1)];

/*Создание массива объектов*/

const createPicturesDescription = (count) => {
  const photosList = [];

  for (let i = 1; i <= count; i++) {
    photosList[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(PICTURES_DESCRIPTION),
      likes: getRandomNumber(likesCount.MIN, likesCount.MAX),
      comments: getRandomNumber(сommentsCount.MIN, сommentsCount.MAX),
    };
  }
  return photosList;
};

createPicturesDescription(PICTURES_COUNT);
