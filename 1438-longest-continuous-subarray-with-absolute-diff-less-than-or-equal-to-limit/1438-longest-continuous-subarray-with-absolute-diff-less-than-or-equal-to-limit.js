/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function longestSubarray(nums, limit) {
  // hold indexes in deques for largest and smallest values of window
  const largest = [];
  const smallest = [];
  let left = 0;
  let right = 0;
  let ans = 0;
  
  // increment right to iterate through nums
  while (right < nums.length) {
    let num = nums[right];
    
    // handle largest 
    while (largest.length) {
      let prev = nums[largest[largest.length - 1]];
      
      if (prev < num) {
        largest.pop();
        continue;
      } else {
        break;
      }
    }
    largest.push(right);
    
    // handle smallest
    while (smallest.length) {
      let prev = nums[smallest[smallest.length - 1]];
      
      if (prev > num) {
        smallest.pop();
        continue;
      } else {
        break;
      }
    }
    smallest.push(right);
    
    // check if absolute diff is less than or equal to limit
    if (nums[largest[0]] - nums[smallest[0]] <= limit) {
      let curr = right - left + 1;
      if (curr > ans) ans = curr;
    } else {
    // if greater, check if window size is greater than longest
    // decrease window until satisfied 
      while (left < right) {
        // handle dequeues 
        while (largest[0] <= left) {
          largest.shift();
        }
        
        while (smallest[0] <= left) {
          smallest.shift();
        }
        
        left++;
        if (nums[largest[0]] - nums[smallest[0]] <= limit) break;
      }
    }
    
    
    right++;
  }
  
  return ans
};