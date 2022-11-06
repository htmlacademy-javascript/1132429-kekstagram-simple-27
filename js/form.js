import {isEnterKey, isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const formOpenElement = document.querySelector('#upload-file');
const formCloseElement = form.querySelector('#upload-cancel');
const editorForm = form.querySelector('.img-upload__overlay');
const decreaseButton = form.querySelector('.scale__control--smaller');
const increaseButton = form.querySelector('.scale__control--bigger');
const scaleInputValue = form.querySelector('.scale__control--value');
const photoContainer = form.querySelector('.img-upload__preview');

const CommentsLength = {
  MIN: 20,
  MAX: 140,
};

const ScaleValue = {
  SCALE_STEP: 25,
  MIN_SCALE: 25,
  MAX_SCALE: 100,
  DEFAULT_SCALE: 100
};

const scalePhoto = (value = ScaleValue.DEFAULT_SCALE) => {
  scaleInputValue.value = `${value}%`;
  photoContainer.style.transform = `scale(${value / 100})`;
};

const DecreaseButtonClickHandler = () => {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue - ScaleValue.SCALE_STEP;
  if (newValue < ScaleValue.MIN_SCALE) {
    newValue = ScaleValue.MIN_SCALE;
  }
  scalePhoto(newValue);
};

const IncreaseButtonClickHandler = () => {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue + ScaleValue.SCALE_STEP;
  if (newValue > ScaleValue.MAX_SCALE) {
    newValue = ScaleValue.MAX_SCALE;
  }
  scalePhoto(newValue);
};

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditorForm();
  }
};

const openEditorForm = () => {
  editorForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
};

function closeEditorForm() {
  editorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFormEscKeydown);
  formOpenElement.value = '';
}

/**
* Функция по проверке длины комментария
* @param {string} comment - принимает комментарий
* @return {boolean} - вовзращает булевое значение
*/
const isCommentsLength = (comment) => comment.length >= CommentsLength.MIN && comment.length <= CommentsLength.MAX;

const addEventListenersToForm = () => {
  formOpenElement.addEventListener('click', () => {
    openEditorForm();
  });

  formOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openEditorForm();
    }
  });

  formCloseElement.addEventListener('click', () => {
    closeEditorForm();
  });

  formCloseElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeEditorForm();
    }
  });

  increaseButton.addEventListener('click', IncreaseButtonClickHandler);
  decreaseButton.addEventListener('click', DecreaseButtonClickHandler);

  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
  });

  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });

  pristine.addValidator(
    form.querySelector('.text__description'),
    isCommentsLength,
    `Необходимое количество символов от ${CommentsLength.MIN} до ${CommentsLength.MAX}`
  );
};

export {addEventListenersToForm};
