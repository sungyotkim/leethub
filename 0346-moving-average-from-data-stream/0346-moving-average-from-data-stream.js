/**
 * @param {number} size
 */
function MovingAverage(size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.queue.length >= this.size) {
    let last = this.queue.shift();
    this.sum -= last;
  }
  
  this.sum += val;
  this.queue.push(val);
  
  return this.sum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */