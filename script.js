let current = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('dots');

// Build dots
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => goTo(i);
  dotsContainer.appendChild(d);
});

function goTo(n) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
}

function moveSlide(dir) { goTo(current + dir); }
