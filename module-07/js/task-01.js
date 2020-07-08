'use strict';

const itemsLink = document.querySelectorAll('.item');

console.log(`В списке ${itemsLink.length} категории`);

itemsLink.forEach(itemLink => {
  const categoryNameLink = itemLink.querySelector('h2');
  const categoryListLink = itemLink.querySelector('ul');
  console.log(`Категория: ${categoryNameLink.textContent}`);
  console.log(`Количество элементов: ${categoryListLink.children.length}`);
});
