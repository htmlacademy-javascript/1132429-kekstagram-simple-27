import {isEnterKey, isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const formOpenElement = document.querySelector('#upload-file');
const formCloseElement = form.querySelector('#upload-cancel');
const editorForm = form.querySelector('.img-upload__overlay');

const CommentsLength = {
  MIN: 20,
  MAX: 140,
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
