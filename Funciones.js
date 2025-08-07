document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.slider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;

  function updateSlider() {
    const imageWidth = slider.querySelector('img').clientWidth + 20;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slider.children.length) {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slider.children.length - 1;
    }
    updateSlider();
  });
});

// Lightbox = Imagen ampliada //

document.addEventListener("DOMContentLoaded", () => {
  const sliderImages = document.querySelectorAll('.slider img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  sliderImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });
});
