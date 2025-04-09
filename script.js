const images = document.querySelectorAll('#slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


let totalImgs = images.length; // Total number of images

/* for (let i = 1; i < totalImgs; i++) {
  images[i].style.display = 'none';
}    */

let currentIndex = 0; // Index of the currently displayed image

images[currentIndex].classList.add('active'); // Show the first image

prevButton.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  images[currentIndex].classList.add('active');
})

nextButton.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImgs;
    images[currentIndex].classList.add('active');
    } )