import axios from 'axios';

async function fetchImages(inputValue, page) {
  axios.defaults.baseURL = 'https://pixabay.com/api';

  const response = await axios.get(`/`, {
    params: {
      key: '43411884-3619a4282f4626ec6920d1cff',
      q: encodeURIComponent(inputValue),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}

export default fetchImages;
