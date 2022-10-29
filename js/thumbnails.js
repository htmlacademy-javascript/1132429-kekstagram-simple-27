/**
 * Создание миниатюр фотографий
 * @param {Array} thumbnails - объект данных фотографий
 */
const renderThumbnails = (thumbnails) => {
  const thumbnailFragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  thumbnails.forEach(({url, likes, comments}) => {
    const thumbnailElement = document.querySelector('#picture')
      .content
      .querySelector('.picture')
      .cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__comments').textContent = likes;
    thumbnailElement.querySelector('.picture__likes').textContent = comments;
    thumbnailFragment.appendChild(thumbnailElement);
  });

  pictureContainer.appendChild(thumbnailFragment);
};

export {renderThumbnails};
