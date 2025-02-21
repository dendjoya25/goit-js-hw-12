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

const params = {
  searchedValue: '',
  page: 1,
  total: 100,
};

const onFormElSubmit = async event => {
  event.preventDefault();
  params.searchedValue = formEl.elements.user_query.value.trim();
  params.page = 1;

  showLoader();

  const data = await getAxiosPhotos(params.searchedValue, params.page);
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

  params.total = data.totalHits;

  checkBtnStatus();

  hideLoader();
  showloadBtn();
};

const onloadMoreBtnElClick = async () => {
  hideloadBtn();
  showLoader();

  params.page += 1;

  const data = await getAxiosPhotos(params.searchedValue, params.page);
  const galleryCardsTemplate = data.hits
    .map(imgDetails => createGalleryCardTemplate(imgDetails))
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

  initializeLightbox();
  hideLoader();
  showloadBtn();
  checkBtnStatus();
};

const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

const showloadBtn = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};

const hideloadBtn = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};

const checkBtnStatus = () => {
  const perPage = 18;
  const maxPage = Math.ceil(params.total / perPage);

  if (params.page >= maxPage) {
    hideloadBtn();
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showloadBtn();
  }
};

loadMoreBtnEl.addEventListener('click', onloadMoreBtnElClick);
formEl.addEventListener('submit', onFormElSubmit);
