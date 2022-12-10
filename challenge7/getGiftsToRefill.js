function getGiftsToRefill(a1, a2, a3) {
  // eliminate duplicates
  const store1 = [...new Set(a1)];
  const store2 = [...new Set(a2)];
  const store3 = [...new Set(a3)];

  const giftCount = {};

  const addToInventory = (gift) => {
    giftCount[gift] ? giftCount[gift]++ : (giftCount[gift] = 1);
  };

  const needToBeReplenished = (gift) => giftCount[gift] === 1;

  // add to giftCountObj and count ocurrency...
  store1.forEach(addToInventory);
  store2.forEach(addToInventory);
  store3.forEach(addToInventory);

  const giftArray = Object.keys(giftCount);

  return giftArray.filter(needToBeReplenished);
}
