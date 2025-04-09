const images = document.querySelectorAll('#slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


let totalImgs = images.length; // Total number of images

 for (let i = 1; i < totalImgs; i++) {
  images[i].style.display = 'none';
}   
 

images[0].style.display = 'block';
let currentIndex = 0; // Index of the currently displayed image

prevButton.addEventListener('click', () => {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  images[currentIndex].style.display = 'block';
})

nextButton.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImgs;
    images[currentIndex].style.display = 'block';
    } )