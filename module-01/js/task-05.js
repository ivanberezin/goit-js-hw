const country = prompt('Shipment to: ');
let price;

if (country === null) {
  console.log('Canceled by User');
} else {
  switch (country.toLowerCase()) {
    case 'china': {
      price = 100;
      break;
    }
    case 'chili': {
      price = 250;
      break;
    }
    case 'australy': {
      price = 170;
      break;
    }
    case 'india': {
      price = 80;
      break;
    }
    case 'jamaika': {
      price = 120;
      break;
    }
    default: {
      alert('Shipment is not available to your country');
    }
  }
  console.log(`Shipment to ${country} will cost ${price} credits`);
}
