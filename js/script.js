const container = document.querySelector('.card-container');

document.querySelector('.next').onclick = () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
};

document.querySelector('.prev').onclick = () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
};
