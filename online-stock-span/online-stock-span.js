
function StockSpanner() {
  this.prices = [];
  this.values = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1;
  
  while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
    this.prices.pop();
    let prevCount = this.values.pop();
    count += prevCount;
  }
  this.prices.push(price);
  this.values.push(count);
  
  return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */