let currentSlide = 0;

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
  
  // Setze die maximale Höhe des Containers basierend auf der Höhe des aktiven Slides
  slideContainer.style.maxHeight = activeSlide.scrollHeight + 'px';
}

window.onload = updateSlideHeight;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateSlideHeight(); // Aktualisiere die Höhe nach dem Wechsel
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateSlideHeight(); // Aktualisiere die Höhe nach dem Wechsel
}

// Initial slide anzeigen
showSlide(currentSlide);
