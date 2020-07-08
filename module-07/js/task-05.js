'use strict';

const inputNameLink = document.querySelector('#name-input');
const spanOutputLink = document.querySelector('#name-output');

const primaryName = 'незнакомец';

const onInput = () => {
  inputNameLink.value == ''
    ? (spanOutputLink.textContent = primaryName)
    : (spanOutputLink.textContent = inputNameLink.value);
};

inputNameLink.addEventListener('input', onInput);
