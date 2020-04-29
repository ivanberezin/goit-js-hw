'use strict';

const formatString = function (string) {
  const symbols = string.split('');

  if (symbols.length > 40) {
    symbols.splice(40, symbols.length - 40, '...');
    const stringCut = symbols.join('');
    return stringCut;
  }

  const stringUnCut = symbols.join('');
  return stringUnCut;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
