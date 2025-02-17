let currentSlide = 0;

function startSlideshow() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('slideshow-container').classList.remove('hidden');
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function updateSlideHeight() {
  const activeSlide = document.querySelector('.slide.active');
  const slideContainer = document.getElementById('slide-container');
  slideContainer.style.maxHeight = activeSlide.scrollHeight + 'px';
}

window.onload = updateSlideHeight;

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  updateSlideHeight();
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  updateSlideHeight();
}

// Initial slide anzeigen
showSlide(currentSlide);
