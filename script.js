// Featured Video Slider New
const wrapper = document.querySelector('.video-wrapper');
const slides = document.querySelectorAll('.video-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if (i >= slides.length) index = 0;
  if (i < 0) index = slides.length - 1;
  wrapper.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index++;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index--;
  showSlide(index);
});
