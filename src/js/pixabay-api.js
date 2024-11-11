import renderImages from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';

function fetchImages(event) {
  event.preventDefault();

  const searchInput = document.querySelector('.search-input');
  const loaderContainer = document.querySelector('.loader-container');

  const inputValue = searchInput.value.trim();

  const API_KEY = '43411884-3619a4282f4626ec6920d1cff';

  if (inputValue === '') {
    iziToast.error({
      position: 'topRight',
      iconUrl: errorIcon,
      backgroundColor: '#ef4040',

      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      title: 'Error',
      titleColor: '#fff',
      titleSize: '16',

      message: `The field must not be empty`,
      messageColor: '#fff',

      close: false,
      buttons: [
        [
          '<button class="close-bnt"> <svg class="close-icon" width="16" height="16"><path d="M8 8l-4-4m4 4l4-4m-4 4l4 4m-4-4l-4 4" /></svg>  </button>',
          function (instance, toast) {
            instance.hide(
              {
                transitionOut: 'fadeOutUp',
              },
              toast
            );
          },
        ],
      ],
    });
    return;
  }

  loaderContainer.classList.remove('hidden');

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: encodeURIComponent(inputValue),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.json())
    .then(images => {
      renderImages(images);
      loaderContainer.classList.add('hidden');
    })
    .catch(error => console.error(error));
}

export default fetchImages;
