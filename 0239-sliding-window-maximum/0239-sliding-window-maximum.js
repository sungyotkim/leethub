/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  let ans = [];
  let queue = [];
  
  for (let i = 0; i < nums.length; i++) {
    // build window if i is less than k
    // check if prev queue values are less than current, remove if so
    while (queue.length) {
      let prev = nums[queue[queue.length - 1]];
      
      if (prev < nums[i]) {
        queue.pop();
        continue;
      } else {
        break // exit loop
      }
    }
    
    // add index of next ele to queue;
    queue.push(i);
    // if first element is out of window, remove from queue;
    if (i - k === queue[0]) {
      queue.shift();
    }
    
    // once i is at least k - 1 (handle first most case), window is built, so start adding to ans;
    if (i >= k - 1) {
      let max = nums[queue[0]];
      ans.push(max)
    }
  }
  
  
  return ans;
};