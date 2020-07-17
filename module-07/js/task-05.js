'use strict';

const inputNameLink = document.querySelector('#name-input');
const spanOutputLink = document.querySelector('#name-output');

const primaryName = 'незнакомец';

const onInput = () => {
  spanOutputLink.textContent =
    inputNameLink.value == '' ? primaryName : inputNameLink.value;
};

inputNameLink.addEventListener('input', onInput);
