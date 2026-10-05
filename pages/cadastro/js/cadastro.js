/* Cadastro (protótipo): não existe back-end, então nada é enviado nem armazenado.
   Ao validar o formulário, apenas segue para a tela de confirmação. */
(function () {
  'use strict';

  var form = document.getElementById('form-cadastro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    window.location.href = '../cadastrook/cadastrook.html';
  });
})();
