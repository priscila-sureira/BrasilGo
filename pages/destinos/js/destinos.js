const modal = document.getElementById('modal');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('modal-titulo').textContent = card.dataset.titulo;
    document.getElementById('modal-local').textContent = card.dataset.local;
    document.getElementById('modal-descricao').textContent = card.dataset.descricao;

    modal.classList.remove('hidden');
  });
});

document.querySelector('.fechar').addEventListener('click', () => {
  modal.classList.add('hidden');
});

