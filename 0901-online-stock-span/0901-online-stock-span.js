
function StockSpanner() {
  this.prices = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1;
  let prevPrices = this.prices.slice();
  
  while (prevPrices.length && prevPrices[prevPrices.length - 1] <= price) {
    // remove the smaller price
    prevPrices.pop();
    // increment the counter
    count++
  }
  this.prices.push(price);
  
  return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */