'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('enter the number');
  if (input === null) {
    break;
  } else if (input !== null) {
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
      alert('not a number');
      continue;
    }
    numbers.push(input);
    console.log(numbers);
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Total amount: ${total}`);
