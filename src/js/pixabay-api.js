import axios from 'axios';
import iziToast from 'izitoast';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '45497823-3ee11a5b90ff874601dfe7178';

export const getAxiosPhotos = async (searchedQuery, page, perPage) => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}${urlParams}`);
    return response.data;
  } catch (err) {
    iziToast.error({
      message: 'Error. Please try again!',
      position: 'topRight',
    });
  }
};
