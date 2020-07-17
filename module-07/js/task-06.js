'use strict';

const inputSymbolsLink = document.querySelector('#validation-input');

inputSymbolsLink.addEventListener('blur', onInput);

function onInput(event) {
  event.preventDefault();

  const input = event.target;

  if (
    inputSymbolsLink.value.length ==
    inputSymbolsLink.getAttribute('data-length')
  ) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }
  input.classList.remove('valid');
  input.classList.add('invalid');
}
