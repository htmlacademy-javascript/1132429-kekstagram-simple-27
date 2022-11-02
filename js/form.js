import {isEnterKey, isEscapeKey} from './mock/util.js';

const addEventListenersToForm = () => {
  const form = document.querySelector('.img-upload__form');
  const formOpenElement = document.querySelector('#upload-file');
  const formCloseElement = form.querySelector('#upload-cancel');
  const editorForm = form.querySelector('.img-upload__overlay');

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

  // const pristine = new Pristine(form, {
  //   classTo: 'img-upload__text',
  //   errorTextParent: 'img-upload__text',
  // }); // не знаю как реализовать проверку валидации

export {addEventListenersToForm};
