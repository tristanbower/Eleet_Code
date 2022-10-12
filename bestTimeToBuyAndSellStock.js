/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  minBuyPrice = Infinity;
  bestProfit = 0;
  for (i = 0; i < prices.length; i++) {
    if (prices[i] < minBuyPrice) {
      minBuyPrice = prices[i];
    }
    var currentProfit = prices[i] - minBuyPrice;
    if (bestProfit < currentProfit) {
      bestProfit = currentProfit;
    }
  }
  return bestProfit;
};

check = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(check);
