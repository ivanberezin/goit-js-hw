'use strict';

const checkForSpam = function (message) {
  const messageNormalized = message.toLowerCase();
  const spam = messageNormalized.includes('spam');
  const sale = messageNormalized.includes('sale');

  if (spam || sale) {
    return true;
  }

  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
