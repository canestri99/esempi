const changeImageButton = document.querySelector('#change-image');
const changeTextButton = document.querySelector('#change-text');
const perviewImage =document.querySelector('#preview-image');
const perviewText =document.querySelector('#preview-text');

const assetCount = 4;
let currentImageIndex = 1;

function changeImage() {
    currentImageIndex++;
    if(currentImageIndex > assetCount) {
        currentImageIndex = 1;
    } 
    console.log( 'cambia immagine',currentImageIndex )
    perviewImage.src = `./images/img_${currentImageIndex}.png`

}

let currentTextIndex = 1;

function changeText() {
    currentTextIndex++;
    if(currentTextIndex > assetCount) {
        currentTextIndex = 1;
    } 
    console.log( 'cambia testo',currentTextIndex )
    perviewText.src = `./images/txt_${currentTextIndex}.png`

}



changeImageButton.addEventListener('click', changeImage);
changeTextButton.addEventListener('click', changeText);

