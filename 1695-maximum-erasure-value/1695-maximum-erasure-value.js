/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumUniqueSubarray(nums) {
  let seen = new Set();
  let max = 0;
  let curr = 0;
  
  let left = 0;
  let right = 0;
  
  while (right < nums.length) {
    let num = nums[right];
    
    // all unique, add to curr and seen
    if (!seen.has(num)) {
      curr += num;
      seen.add(num);
      
      // update max
      max = Math.max(max, curr);
    } else {
      
      // if seen, increment until the same number is removed
      while (left < right && nums[left] !== nums[right]) {
        let prev = nums[left];
        
        curr -= prev;
        seen.delete(prev);
        left++;
      }
      
      // once you find the same one, increment left once to exclude it
      // no need to change curr or seen since it's the same num as current right
      left++;
    }
    
    right++;
  }
  
  return max;
};