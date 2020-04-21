const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let quantity = prompt('How many droids do you want to buy? :');

do {
  if (quantity === null) {
    console.log('Canceled by User');
    break;
  }
  quantity = Number(quantity);
  const notANumber = Number.isNaN(quantity);
  if (notANumber) {
    console.log('Enter the NUMBER, please');
    break;
  } else if (quantity !== null) {
    let totalPrice = quantity * pricePerDroid;
    // console.log('Total: ', totalPrice);
    if (totalPrice > credits) {
      console.log('Not enough credits on account!');
      break;
    } else {
      console.log(
        `You buy ${quantity} droids, on your account ${
          credits - totalPrice
        } credits`,
      );
      break;
    }
  }
} while (true);
