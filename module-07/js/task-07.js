'use strict';

const inputSizeLink = document.querySelector('#font-size-control');
const spanTextLink = document.querySelector('#text');

inputSizeLink.addEventListener('input', changeTextSize);

function changeTextSize() {
  spanTextLink.style.fontSize = inputSizeLink.value + 'px';
}
