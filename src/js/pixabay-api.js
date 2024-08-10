// Pixabay API
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = (query, page, per_page) => {
  const searchParams = {
    params: {
      key: '45255368-572b15c7c49880eb3615da83a',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: per_page,
    },
  };
  return axios.get('/api/', searchParams);
};
