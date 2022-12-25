/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    if (nums[left] === 0) {
      // remove element at index
      nums.splice(left, 1);
      // add to end
      nums.push(0);
      // no need to check last number
      right--;
    } else {
      left++;
    }
  }
  
  return nums;
};