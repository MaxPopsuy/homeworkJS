import photos from "./items.js";


const refs = {
  lightboxRef: document.querySelector(".lightbox"),
  originalImageRef: document.querySelector(".lightbox__image"),
  closeButtonRef: document.querySelector(".lightbox__button"),
  closeAreaRef: document.querySelector(".lightbox__overlay"),
  galleryRef: document.querySelector(".gallery"),
  lightboxBtnRef: [...document.querySelectorAll(".lightbox__btn")],
};

const removeModal = (refs) => {
  refs.lightboxRef.classList.remove("js-open");
  refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
  refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
  window.removeEventListener("keydown", refs.bindRemoveModalEsc);
  window.removeEventListener("keydown", refs.bindChangePhoto);
  refs.lightboxBtnRef.forEach(() =>
    removeEventListener("click", refs.bindChangePhoto)
  );
};

const removeModalEsc = (refs) => {
  if (event.key === "Escape") {
    refs.lightboxRef.classList.remove("js-open");
    refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
    refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
    window.removeEventListener("keydown", refs.bindRemoveModalEsc);
    window.removeEventListener("keydown", refs.bindChangePhoto);

    refs.lightboxBtnRef.forEach(() =>
      removeEventListener("click", refs.bindChangePhoto)
    );
  }
};

const changePhoto = (refs, photos) => {
  if (event.key === "ArrowRight" || event.target.dataset.action === "right") {
    event.target.blur();
    if (refs.photoId === photos.length) {
      refs.photoId = 1;
      refs.originalImageRef.src = document.querySelector(`[data-id="${refs.photoId}"]`).dataset.source;
    } else {
      refs.originalImageRef.src = document.querySelector(`[data-id="${refs.photoId + 1}"]`).dataset.source;
      refs.photoId++;
    }
  }
  if (event.key === "ArrowLeft" || event.target.dataset.action === "left") {
    event.target.blur();
    if (refs.photoId === 1) {
      refs.photoId = photos.length;
      refs.originalImageRef.src = document.querySelector(`[data-id="${refs.photoId}"]`).dataset.source;
    } else {
      refs.originalImageRef.src = document.querySelector(`[data-id="${refs.photoId - 1}"]`).dataset.source;
      refs.photoId--;

    }
  }
};

const drawImage = (photo, refs) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");
  item.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");
  image.setAttribute("data-id", photo.id);
  image.setAttribute("data-source", photo.original);
  link.href = photo.original;
  image.src = photo.preview;
  refs.galleryRef.appendChild(item);
  item.appendChild(link);
  link.appendChild(image);
};


photos.forEach((photos) => drawImage(photos, refs));
refs.photosRef = [...refs.galleryRef.querySelectorAll(".gallery__image")];
refs.galleryRef.addEventListener("click", (event) => {
  refs.originalImageRef.src = event.target.dataset.source;
  refs.photoId = +event.target.dataset.id;
  event.preventDefault();

  refs.lightboxRef.classList.add("js-open");
  refs.bindRemoveModal = removeModal.bind(event, refs);
  refs.bindRemoveModalEsc = removeModalEsc.bind(refs, refs);
  refs.bindChangePhoto = _.throttle(changePhoto.bind(refs, refs, photos), 100);
  refs.closeButtonRef.addEventListener("click", refs.bindRemoveModal);
  window.addEventListener("keydown", refs.bindRemoveModalEsc);
  window.addEventListener("keydown", refs.bindChangePhoto);

  refs.closeAreaRef.addEventListener("click", refs.bindRemoveModal);
  refs.lightboxBtnRef.forEach(() =>
    addEventListener("click", refs.bindChangePhoto)
  );
});
