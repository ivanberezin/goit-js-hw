import gallery from '../js/gallery-items.js';

const galleryLink = document.querySelector('.js-gallery');
const largeImageLink = document.querySelector('.lightbox__image');
const lightboxLink = document.querySelector('.js-lightbox');
const backDropLink = document.querySelector('.lightbox__content');
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);

galleryLink.addEventListener('click', onGalleryClick);
closeModalBtn.addEventListener('click', onCloseModal);
backDropLink.addEventListener('click', onBackDrop);

const galleryItems = galleryItem => {
  const containerLink = document.createElement('li');
  containerLink.classList.add('gallery__item');

  const refLink = document.createElement('a');
  refLink.classList.add('gallery__link');
  refLink.setAttribute('href', galleryItem.original);

  const imageLink = document.createElement('img');
  imageLink.classList.add('gallery__image');
  imageLink.setAttribute('src', galleryItem.preview);
  imageLink.setAttribute('data-source', galleryItem.original);
  imageLink.setAttribute('alt', galleryItem.description);

  refLink.appendChild(imageLink);
  containerLink.appendChild(refLink);
  return containerLink;
};

const galleryArray = gallery.map(galleryItem => galleryItems(galleryItem));

galleryLink.append(...galleryArray);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  lightboxLink.classList.add('is-open');
  largeImageLink.src = e.target.dataset.source;
  largeImageLink.alt = e.target.alt;
  window.addEventListener('keydown', onPressEsc);
}

function onCloseModal() {
  lightboxLink.classList.remove('is-open');
  largeImageLink.src = '';
  largeImageLink.alt = '';
  window.removeEventListener('keydown', onPressEsc);
}

function onPressEsc(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onBackDrop(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}
