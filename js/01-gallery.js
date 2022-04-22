import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const cardsMarkup = createGalleryCardMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend', cardsMarkup)
gallery.addEventListener('click', onGalleryElClick)

function createGalleryCardMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href=#">
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
}

function onGalleryElClick(e) {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const originalImg = e.target.dataset.source;
    modalWindow(originalImg);
}

function modalWindow(img) {
    const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`)
    instance.show()
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close()
        }
    })
}