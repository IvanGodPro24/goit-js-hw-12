import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';

function renderImages(images) {
  const galleryList = document.querySelector('.gallery');

  galleryList.innerHTML = '';

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
    return;
  }

  const galleryItem = images.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
      title="${tags}"
    />
  </a>
        <div class="image-info">
        <div class="info-container">
          <p class="info-paragraph">Likes</p>
          <p class="info-value">${likes}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Views</p>
          <p class="info-value">${views}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Comments</p>
          <p class="info-value">${comments}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Downloads</p>
          <p class="info-value">${downloads}</p>
        </div>
      </div>
</li>`;
      }
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', galleryItem);

  let gallery = new SimpleLightbox('.gallery .gallery-item a');
  gallery.refresh();
  gallery.on('show.simplelightbox');

  gallery.on('error.simplelightbox', function (e) {
    console.log(e);
  });
}

export default renderImages;
