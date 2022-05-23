// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContRef = document.querySelector('.gallery');
const imagesMarkup = createItmMod(galleryItems);
galleryContRef.insertAdjacentHTML('beforeend', imagesMarkup);

function createItmMod(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});

console.log(galleryItems);