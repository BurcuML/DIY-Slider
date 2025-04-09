const images = document.querySelectorAll('#slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelector(".dots")

let totalImgs = images.length; // Total number of images

for (let i = 0; i < totalImgs; i++) {
  let dot = document.createElement("button");
  dot.classList.add("dot");
  dots.appendChild(dot);
}   

/* dot.classList.add("active") */

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