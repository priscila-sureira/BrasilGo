/* ==========================================================================
   Brasil GO - comportamento da página inicial
   Cada bloco verifica se os elementos existem antes de usá-los: um erro em
   um recurso (ex.: botão ausente) não pode derrubar os outros.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Navbar: fundo ao rolar a página ---------- */
  var navbar = document.querySelector('.navbar');

  function atualizarNavbar() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
  }

  window.addEventListener('scroll', atualizarNavbar, { passive: true });
  atualizarNavbar();

  /* ---------- Menu mobile (hambúrguer) ---------- */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('menu');

  function definirMenu(aberto) {
    menu.classList.toggle('aberto', aberto);
    toggle.setAttribute('aria-expanded', String(aberto));
    toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    var icone = toggle.querySelector('i');
    if (icone) {
      icone.classList.toggle('fa-bars', !aberto);
      icone.classList.toggle('fa-xmark', aberto);
    }
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      definirMenu(!menu.classList.contains('aberto'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { definirMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('aberto')) {
        definirMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) definirMenu(false);
    });
  }

  /* ---------- Carrossel de depoimentos ---------- */
  var cards = document.querySelectorAll('.review-card');
  var btnAnterior = document.getElementById('prevReview');
  var btnProximo = document.getElementById('nextReview');
  var atual = 0;

  function mostrarDepoimento(indice) {
    atual = (indice + cards.length) % cards.length;
    cards.forEach(function (card, i) {
      card.classList.toggle('active', i === atual);
    });
  }

  if (cards.length > 1 && btnAnterior && btnProximo) {
    btnAnterior.addEventListener('click', function () { mostrarDepoimento(atual - 1); });
    btnProximo.addEventListener('click', function () { mostrarDepoimento(atual + 1); });
    mostrarDepoimento(0);
  }

  /* ---------- Busca: não permite escolher datas no passado ---------- */
  var campoData = document.getElementById('DATAS');
  if (campoData) {
    var hoje = new Date();
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var dia = String(hoje.getDate()).padStart(2, '0');
    campoData.min = hoje.getFullYear() + '-' + mes + '-' + dia;
  }

  /* ---------- Newsletter (simulada: este projeto não tem back-end) ---------- */
  var formNewsletter = document.getElementById('form-newsletter');
  var msgNewsletter = document.getElementById('newsletter-msg');

  if (formNewsletter && msgNewsletter) {
    formNewsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      var campo = document.getElementById('newsletter-email');

      if (!campo.checkValidity()) {
        msgNewsletter.textContent = 'Digite um e-mail válido para assinar.';
        campo.focus();
        return;
      }

      // Nenhum dado é enviado nem armazenado: é apenas uma demonstração da interface.
      msgNewsletter.textContent = 'Inscrição simulada: este é um projeto de demonstração e nenhum e-mail foi enviado.';
      formNewsletter.reset();
    });
  }
})();
