const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel-card');
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
});

cards[currentIndex].classList.add('active');
  const offset = -cards[currentIndex].offsetLeft + (carousel.offsetWidth - cards[currentIndex].offsetWidth) / 2;
carousel.style.transform = `translateX(${offset}px)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
updateCarousel();
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
