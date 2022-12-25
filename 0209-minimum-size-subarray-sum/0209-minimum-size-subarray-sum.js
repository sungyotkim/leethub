/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  let curr = nums[right];
  
  while (right < nums.length) {
    // can exit early if exactly 1 number equals target
    if (nums[right] >= target) return 1;
    
    if (curr >= target && left < right) {
      min = Math.min(min, (right - left + 1));
      curr -= nums[left];
      left++;
    } else {
      right++;    
      curr += nums[right];
    }
  }
  
  // if no subarr found, return 0
  return min > nums.length ? 0 : min
};