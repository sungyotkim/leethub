/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
    
  let i = 0;
  let j = 0;
  let ans = 0;
  
  while (j < nums.length) {
    // adds single subarr up to this point
    if (prefix[j] === goal) {
      ans++;
    }
    
    while (i < j) {
      // includes any differences if current sum is greater than or equal to goal
      if (prefix[j] - prefix[i] === goal) {
        ans++;
      }
      i++;
    }
    
    i = 0;
    j++;
  }
  
  return ans;
};