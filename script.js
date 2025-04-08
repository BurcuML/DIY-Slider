const images = document.querySelectorAll('#slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


let totalImgs = images.length; // Total number of images

  for (let i = 1; i < totalImgs; i++) {
  images[i].style.display = 'none'; // Hide all images initially
}  
 

images[0].classList.add('active'); // Show the first image
let currentIndex = 0; // Index of the currently displayed image


function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
    });
    images[index].classList.add('active');
  }

prevButton.addEventListener('click', () => {

  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs; // Move to the previous image
showImage(currentIndex)
})

nextButton.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % totalImgs; // Move to the next image
showImage(currentIndex)
    } )