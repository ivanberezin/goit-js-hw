'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsLink = document.querySelector('#ingredients');

const ingredientList = ingredients.map(ingredient => {
  const itemLink = document.createElement('li');
  itemLink.textContent = ingredient;
  return itemLink;
});

ingredientsLink.append(...ingredientList);
