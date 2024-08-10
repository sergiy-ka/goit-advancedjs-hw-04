import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { fetchPhotos } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const searchForm = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.js-load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
const per_page = 15;
let searchValue = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchValue = event.currentTarget.elements.user_query.value.trim();

    if (searchValue === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter something to search.',
        position: 'topRight',
      });
      searchForm.reset();
      return;
    }
    loadMoreBtn.classList.add('is-hidden');
    gallery.innerHTML = '';
    loader.classList.remove('is-hidden');
    page = 1;

    const { data } = await fetchPhotos(searchValue, page, per_page);

    loader.classList.add('is-hidden');

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    gallery.innerHTML = galleryMarkup(data.hits);

    lightbox.refresh();

    loadMoreBtn.classList.remove('is-hidden');
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images.',
      position: 'topRight',
    });
    loader.classList.add('is-hidden');
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    loader.classList.remove('is-hidden');
    loadMoreBtn.classList.add('is-hidden');

    page += 1;

    const { data } = await fetchPhotos(searchValue, page, per_page);

    loader.classList.add('is-hidden');

    gallery.insertAdjacentHTML('beforeend', galleryMarkup(data.hits));
    loadMoreBtn.classList.remove('is-hidden');

    lightbox.refresh();

    if (page * per_page >= data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    let rect = document.querySelector('.gallery__item').getBoundingClientRect();
    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images.',
      position: 'topRight',
    });
    loader.classList.add('is-hidden');
  }
};

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
