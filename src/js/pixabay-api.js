import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '45497823-3ee11a5b90ff874601dfe7178';

export const getAxiosPhotos = async (searchedQuery, page) => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 18,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}${urlParams}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
