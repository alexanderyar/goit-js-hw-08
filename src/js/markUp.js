export function galleryMarkupCreatorPartial(picsArray) {
    const markupItself = picsArray.map(({preview, original, description}) => {
        return `
        <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image ${description}" />
</a></li>
       `
    }
    )
    
    return markupItself.join('');
}