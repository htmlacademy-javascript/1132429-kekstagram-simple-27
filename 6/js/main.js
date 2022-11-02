import {createPicturesDescription} from './mock/data.js';
import {renderThumbnails} from './thumbnails.js';
import {addEventListenersToForm} from './form.js';

const PICTURES_COUNT = 25;

renderThumbnails(createPicturesDescription(PICTURES_COUNT));
addEventListenersToForm();
