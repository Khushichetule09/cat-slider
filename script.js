let slideIndex = 0;

function slide(n) {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slides img').width;

  // Calculate the new position for the slide
  slideIndex += n;

  // Ensure the index stays within the bounds of the slides array
  if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  } else if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }

  // Move the slides container to the new position
  slides.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
}