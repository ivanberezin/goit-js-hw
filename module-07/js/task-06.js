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
    input.setAttribute('class', 'valid');
    return;
  }
  input.setAttribute('class', 'invalid');
  return;
}
