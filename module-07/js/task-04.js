'use strict';

const decrementCounterLink = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementCounterLink = document.querySelector(
  'button[data-action="increment"]',
);
const counterLink = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  counterLink.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterLink.textContent = counterValue;
};

decrementCounterLink.addEventListener('click', decrement);
incrementCounterLink.addEventListener('click', increment);
