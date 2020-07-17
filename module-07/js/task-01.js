'use strict';

const categories = document.querySelector('#categories');

const categoriesQuantity = categories.children.length;
console.log(`В списке ${categoriesQuantity} категории`);

const categoriesString = [...categories.children]
  .map(
    categoryChild =>
      `Категория: ${categoryChild.children[0].textContent};\nКоличество элементов: ${categoryChild.children[1].children.length}`,
  )
  .join('\n');
console.log(categoriesString);
