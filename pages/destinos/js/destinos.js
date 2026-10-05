/* ==========================================================================
   Página de destinos: modal de detalhes (acessível por teclado) + filtro
   ========================================================================== */
(function () {
  'use strict';

  var modal = document.getElementById('modal');
  var botaoFechar = modal ? modal.querySelector('.fechar') : null;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var ultimoFocado = null;

  /* ---------- Modal ---------- */
  function abrirModal(card) {
    document.getElementById('modal-titulo').textContent = card.dataset.titulo;
    document.getElementById('modal-local').textContent = card.dataset.local;
    document.getElementById('modal-descricao').textContent = card.dataset.descricao;

    ultimoFocado = card;
    modal.classList.remove('hidden');
    botaoFechar.focus();
  }

  function fecharModal() {
    modal.classList.add('hidden');
    if (ultimoFocado) ultimoFocado.focus();
  }

  if (modal && botaoFechar) {
    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        // Clique no preço (link para a reserva) segue o link, sem abrir o modal
        if (e.target.closest('a')) return;
        abrirModal(card);
      });

      card.addEventListener('keydown', function (e) {
        // Só reage quando o foco está no próprio card, não no link interno
        if (e.target !== card) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          abrirModal(card);
        }
      });
    });

    botaoFechar.addEventListener('click', fecharModal);

    // Clique no fundo escuro fecha o modal
    modal.addEventListener('click', function (e) {
      if (e.target === modal) fecharModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) fecharModal();
    });
  }

  /* ---------- Filtro por nome do destino ---------- */
  var campoBusca = document.getElementById('busca-destino');
  var botaoBuscar = document.getElementById('btn-buscar');
  var formBusca = document.getElementById('form-busca');
  var semResultados = document.getElementById('sem-resultados');

  function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function filtrar() {
    var termo = normalizar(campoBusca.value);
    var visiveis = 0;

    cards.forEach(function (card) {
      var combina = normalizar(card.dataset.titulo + ' ' + card.dataset.local).indexOf(termo) !== -1;
      card.hidden = !combina;
      if (combina) visiveis++;
    });

    if (semResultados) semResultados.hidden = visiveis > 0;
  }

  if (campoBusca) {
    campoBusca.addEventListener('input', filtrar);
    if (botaoBuscar) botaoBuscar.addEventListener('click', filtrar);
    if (formBusca) formBusca.addEventListener('submit', function (e) { e.preventDefault(); filtrar(); });
  }
})();
