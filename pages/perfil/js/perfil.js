/* Perfil (protótipo): sem back-end, as alterações não são salvas.
   O preventDefault também impede que os dados (inclusive senha e CPF)
   sejam enviados na URL caso o formulário seja submetido. */
(function () {
  'use strict';

  var form = document.getElementById('form-perfil');
  var status = document.getElementById('perfil-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (status) status.textContent = 'Protótipo: as alterações não são salvas.';
  });
})();
