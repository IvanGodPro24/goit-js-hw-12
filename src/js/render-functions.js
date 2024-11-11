function renderImages(images) {
  return images.hits
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
}

export default renderImages;
