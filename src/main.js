import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from './img/error.svg';
import infoIcon from './img/ring.svg';

const form = document.querySelector('.form');
const loaderContainer = document.querySelector('.loader-container');
const loaderUnderContainer = document.querySelector('.loader-under-container');
const galleryList = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;

let inputValue;

let gallery = new SimpleLightbox('.gallery .gallery-item a');

form.addEventListener('submit', renderAllImages);
loadMoreBtn.addEventListener('click', getRestImages);

async function renderAllImages(event) {
  event.preventDefault();

  page = 1;
  inputValue = event.target.elements.search.value.trim();

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

  try {
    const images = await fetchImages(inputValue, page);

    galleryList.innerHTML = '';
    event.target.reset();

    if (images.total === 0) {
      iziToast.error({
        position: 'topRight',
        iconUrl: errorIcon,
        backgroundColor: '#ef4040',

        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16',

        message: `Sorry, there are no images matching your search query. Please, try again!`,
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
      loaderContainer.classList.add('hidden');
      loadMoreBtn.classList.add('hidden');
      return;
    }

    galleryList.insertAdjacentHTML('beforeend', renderImages(images));

    gallery.refresh('show.simplelightbox');
    gallery.on('show.simplelightbox');

    gallery.on('error.simplelightbox', function (e) {
      console.log(e);
    });

    page += 1;
    loaderContainer.classList.add('hidden');
    loadMoreBtn.classList.remove('hidden');
  } catch (error) {
    console.error(error);
  }
}

async function getRestImages() {
  loaderUnderContainer.classList.remove('hidden');

  try {
    const restOfImages = await fetchImages(inputValue, page);

    galleryList.insertAdjacentHTML('beforeend', renderImages(restOfImages));

    gallery.refresh('show.simplelightbox');
    page += 1;

    const galleryItem = document.querySelector('.gallery-item');

    const cardHeight = galleryItem.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(restOfImages.totalHits / 15);

    if (page > totalPages) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        position: 'topRight',
        iconUrl: infoIcon,
        backgroundColor: '#09f',

        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        title: 'Info',
        titleColor: '#fff',
        titleSize: '16',

        message: `We're sorry, but you've reached the end of search results.`,
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
    }

    loaderUnderContainer.classList.add('hidden');
  } catch (error) {
    console.error(error);
  }
}
