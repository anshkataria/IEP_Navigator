let images = [
  './assets/uni1.jpg', 
  './assets/uni2.jpg', 
  './assets/uni3.jpg', 
  './assets/uni4.jpg', 
  './assets/uni5.jpg'
];

let texts = [
  'University of Queensland',
  'University of Toledo',
  'Trinity College Dublin',
  'University of New South Wales',
  'University of Leeds'   
];

let currentImageIndex = 0;
const scrollingImage = document.getElementById('scrolling-image');
const imageText = document.getElementById('image-text'); // Text overlay element

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  scrollingImage.src = images[currentImageIndex]; // Change the image
  imageText.textContent = texts[currentImageIndex]; // Change the text for the current image
}

setInterval(changeImage, 3000); // Change image every 3 seconds

document.getElementById('student-btn').addEventListener('click', function() {
  window.location.href = './student_page.html'; // Redirect to student page
});

document.getElementById('admin-btn').addEventListener('click', function() {
  window.location.href = './admin_page.html'; // Redirect to admin page
});
