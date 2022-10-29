import {getRandomNumber, getRandomArrayElement} from './util.js';

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
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
/*Создание массива объектов*/
const createPicturesDescription = (count) => {
  const photosList = [];
  for (let i = 0; i <= count; i++) {
    photosList[i] = {
      id: i,
      url: `../../photos/${i}.jpg`,
      description: getRandomArrayElement(PICTURES_DESCRIPTION),
      likes: getRandomNumber(LikesCount.MIN, LikesCount.MAX),
      comments: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX),
    };
  }
  return photosList;
};

export {createPicturesDescription};
