import fetchImages from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', fetchImages);
