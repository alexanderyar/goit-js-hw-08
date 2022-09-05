// Add imports above this line
import { galleryItems } from './gallery-items';
// const SimpleLightbox = require('simplelightbox')
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryMarkupCreatorPartial as galleryMarkupCreator } from './markUp'

// Change code below this line


const galleryParent = document.querySelector('.gallery')

const markup = galleryMarkupCreator(galleryItems)


galleryParent.insertAdjacentHTML('beforeend', markup);


const gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250});

