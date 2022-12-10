
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
    // remove the smaller price
    this.prices.pop();
    // increment the counter
    count += this.values.pop();
  }
  this.prices.push(price);
  this.values.push(count);
  console.log(this.prices);
  console.log("val", this.values)
  
  return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */