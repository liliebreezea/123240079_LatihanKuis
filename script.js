const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const carousel = document.querySelector('.cards-wrapper');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -350, 
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: 350, 
      behavior: 'smooth'
    });
  });
