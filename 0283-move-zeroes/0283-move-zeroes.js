/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let first = 0;
  let second = 1;
  
  while (second < nums.length) {
    if (nums[first] === 0 && nums[second] !== 0) {
      nums[first] = nums[second];
      nums[second] = 0;
      first++;
    }
    
    if (nums[first] !== 0) first++;
    
    second++;
  }
};