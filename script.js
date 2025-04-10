const images = document.querySelectorAll('#slider-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsCont = document.querySelector(".dots")

let totalImgs = images.length; // Total number of images
let dot;

for (let i = 0; i < totalImgs; i++) {
  dot = document.createElement("button");
  dot.classList.add("dot");
  dotsCont.appendChild(dot);
     dot.addEventListener("click", () => {
      images[currentIndex].classList.remove('active');
      currentIndex = i;
      images[currentIndex].classList.add('active');
      updateDots();
    }) 
}


const dots = document.querySelectorAll(".dot");


function updateDots() {
  dots.forEach(dot =>
    dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}



let currentIndex = 0; // Index of the currently displayed image

images[currentIndex].classList.add('active'); // Show the first image

prevButton.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  images[currentIndex].classList.add('active');
  updateDots();
})

nextButton.addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImgs;
  images[currentIndex].classList.add('active');
  updateDots();
})