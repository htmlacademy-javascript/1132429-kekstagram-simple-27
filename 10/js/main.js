import {getData} from './network.js';
import {renderThumbnails} from './thumbnails.js';
import {addEventListenersToForm} from './form.js';
import {showAlert} from './util.js';

addEventListenersToForm();
getData(renderThumbnails, showAlert);
