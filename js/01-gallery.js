import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const cardsMarkup = createGalleryCardMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend', cardsMarkup)

function createGalleryCardMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    }).join("");

    console.log(markup);

}