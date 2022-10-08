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

getRandomNumber(0, 5);

/*
Функция для проверки максимальной длины строки:
1. Объявляет функцию с двумя параметрами: сама строка и максимальное значение строки по символам;
2. Возвращает булевое значение 'true' в случае если длина строки меньшь либо равна максимальной длине строки
3. Вызывает функцию с заданными параметрами;
*/
function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('', 140);
