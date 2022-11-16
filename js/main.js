import {getData} from './network.js';
import {renderThumbnails} from './thumbnails.js';
import {addEventListenersToForm} from './form.js';
import {showAlert, successSubmitHandler, errorSubmitHandler} from './util.js';

getData(renderThumbnails, showAlert).then(() => addEventListenersToForm(successSubmitHandler, errorSubmitHandler));
