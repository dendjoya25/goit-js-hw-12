import {
  createGalleryCardTemplate,
  initializeLightbox,
} from './js/render-functions';

import { getAxiosPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';

const formEl = document.querySelector('.js-page-form');
const galleryEl = document.querySelector('.js-gallery');

const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.load-more-btn-js');

const removeloadBtnClass = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};

const addloadBtnClass = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};
const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};
let page = 1;
addloadBtnClass();
const onFormElSubmit = async event => {
  event.preventDefault();
  const searchedValue = formEl.elements.user_query.value;

  showLoader();

  const data = await getAxiosPhotos(searchedValue, page);
  if (data.hits && data.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    galleryEl.innerHTML = '';
    formEl.reset();
    return;
  }

  const galleryCardsTemplate = data.hits
    .map(imgDetails => createGalleryCardTemplate(imgDetails))
    .join('');

  galleryEl.innerHTML = galleryCardsTemplate;

  page = 1;

  initializeLightbox();
  hideLoader();
  removeloadBtnClass();
};

const onloadMoreBtnElSubmit = async () => {
  showLoader();

  page = page + 1;

  const searchedValue = formEl.elements.user_query.value;
  const data = await getAxiosPhotos(searchedValue, page);
  const galleryCardsTemplate = data.hits
    .map(imgDetails => createGalleryCardTemplate(imgDetails))
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

  initializeLightbox();
  hideLoader();
  removeloadBtnClass();
};

loadMoreBtnEl.addEventListener('click', onloadMoreBtnElSubmit);
formEl.addEventListener('submit', onFormElSubmit);
