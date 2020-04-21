let total = 0;

do {
  let input = prompt('Enter your number');
  if (input === null) {
    console.log('Canceled by User');
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Not a number, try again');
    continue;
  }
  total += input;
} while (true);

if (total !== 0) {
  alert(`The total amount of numbers is: ${total}`);
}
