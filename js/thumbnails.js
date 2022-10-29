import {createPicturesDescription} from './main.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhoto = createPicturesDescription();
const similarPictureFragment = document.createDocumentFragment();

similarPhoto.forEach(({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = likes;
  photoElement.querySelector('.picture__likes').textContent = comments;
  similarPictureFragment.appendChild(photoElement);
});

similarPictureFragment.appendChild(pictureContainer);

export {similarPictureFragment};
