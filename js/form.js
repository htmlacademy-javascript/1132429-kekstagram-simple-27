import {isEnterKey, isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const formOpenElement = document.querySelector('#upload-file');
const formCloseElement = form.querySelector('#upload-cancel');
const editorForm = form.querySelector('.img-upload__overlay');
const decreaseButton = form.querySelector('.scale__control--smaller');
const increaseButton = form.querySelector('.scale__control--bigger');
const scaleInputValue = form.querySelector('.scale__control--value');
const photo = form.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

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

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    class: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    class: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    class: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    class: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    class: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let choosenEffect = DEFAULT_EFFECT;

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

const scalePhoto = (value = ScaleValue.DEFAULT_SCALE) => {
  scaleInputValue.value = `${value}%`;
  photo.style.transform = `scale(${value / 100})`;
};

const decreaseButtonClickHandler = () => {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue - ScaleValue.SCALE_STEP;
  if (newValue < ScaleValue.MIN_SCALE) {
    newValue = ScaleValue.MIN_SCALE;
  }
  scalePhoto(newValue);
};

const increaseButtonClickHandler = () => {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue + ScaleValue.SCALE_STEP;
  if (newValue > ScaleValue.MAX_SCALE) {
    newValue = ScaleValue.MAX_SCALE;
  }
  scalePhoto(newValue);
};

const resetScale = () => {
  scalePhoto();
};

/**
* Функция по проверке длины комментария
* @param {string} comment - принимает комментарий
* @return {boolean} - вовзращает булевое значение
*/
const isCommentsLength = (comment) => comment.length >= CommentsLength.MIN && comment.length <= CommentsLength.MAX;

const isDefault = () => choosenEffect === DEFAULT_EFFECT;

const udpateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: choosenEffect.min,
      max: choosenEffect.max,
    },
    start: choosenEffect.max,
    step: choosenEffect.step,
  });
  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const formChangeHandler = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  choosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  udpateSlider();
};

const sliderUpdateHandler = () => {
  photo.style.filter = '';
  photo.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  photo.style.filter = `${choosenEffect.class}(${sliderValue}${choosenEffect.unit})`;
  photo.classList.add(`effects__preview--${choosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  choosenEffect = DEFAULT_EFFECT;
  udpateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
udpateSlider();

const addEventListenersToForm = () => {
  formOpenElement.addEventListener('change', () => {
    openEditorForm();
    scalePhoto();
  });

  formOpenElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openEditorForm();
      scalePhoto();
    }
  });

  formCloseElement.addEventListener('click', () => {
    closeEditorForm();
    resetScale();
    resetEffects();
  });

  formCloseElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeEditorForm();
      resetScale();
      resetEffects();
    }
  });

  increaseButton.addEventListener('click', increaseButtonClickHandler);
  decreaseButton.addEventListener('click', decreaseButtonClickHandler);

  form.addEventListener('change', formChangeHandler);
  sliderElement.noUiSlider.on('update', sliderUpdateHandler);

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
