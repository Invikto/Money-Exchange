module.exports = function makeExchange(currency) {
  let coinsKit = {};
  const coinsValues = [50, 25, 10, 5, 1];
  const coinsLetters = ['H', 'Q', 'D', 'N', 'P'];

  if ((currency > 0) && (currency <= 10000)) {
    for (let i = 0; i <= 4; i++) {
      let amount = Math.floor(currency / coinsValues[i]);
      if (amount !== 0) {
        coinsKit[coinsLetters[i]] = amount;
        currency %= coinsValues[i];
      }
    }
  }

  if (currency > 10000) {
    coinsKit['error'] = 'You are rich, my friend! We don\'t have so much coins for exchange';
  }

  return coinsKit;
}
