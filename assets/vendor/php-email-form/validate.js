/**
* PHP Email Form Validation - v3.8
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
/*
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = 'https://api.render.com/deploy/srv-cprnncqj1k6c738bsubg?key=-zGevn6EphQ';  // Reemplaza con la URL de tu backend Flask


      if (!action) {
        displayError(thisForm, '¡La propiedad action del formulario no está configurada!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      php_email_form_submit(thisForm, action, formData);
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`);
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.message && data.message.includes('Datos enviados con éxito')) {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      } else {
        throw new Error(data.message || 'El envío del formulario falló y no se devolvió un mensaje de error desde: ' + action);
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error.message || error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
*/
