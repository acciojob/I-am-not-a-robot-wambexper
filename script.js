//your code here

//your code here
const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');
const h = document.getElementById('h');

let selectedImages = [];
let identicalImage = 0;

// Randomly shuffling images
function shuffleImages() {
  const imageSources = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/',
    'https://picsum.photos/200/300.jpg',
  ];

  imageSources.sort(() => Math.random() - 0.5);
  images.forEach((img, index) => {
    img.src = imageSources[index];
    img.addEventListener('click', () => handleClick(index + 1));
  });
}

// Resetting the state to default
function resetState() {
  selectedImages = [];
  identicalImage = 0;
  para.textContent = '';
  verifyButton.style.display = 'none';
  resetButton.style.display = 'none';
  images.forEach((img) => img.classList.remove('selected'));
}

// Handling click on the images
function handleClick(imageIndex) {
  if (selectedImages.length < 2) {
    if (!selectedImages.includes(imageIndex)) {
      selectedImages.push(imageIndex);
      images[imageIndex - 1].classList.add('selected');
    }
  }

  if (selectedImages.length === 2) {
    verifyButton.style.display = 'block';
  }

  if (selectedImages.length === 1) {
    resetButton.style.display = 'block';
  }
}

// Verifying the user's selection
function verifySelection() {
  if (selectedImages.length === 2) {
    if (selectedImages[0] === selectedImages[1]) {
      para.textContent = 'You are a human. Congratulations!';
    } else {
      para.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
  }
  verifyButton.style.display = 'none';
}

// Event listeners for reset and verify buttons
resetButton.addEventListener('click', resetState);
verifyButton.addEventListener('click', verifySelection);

// Initialize the app
shuffleImages();


