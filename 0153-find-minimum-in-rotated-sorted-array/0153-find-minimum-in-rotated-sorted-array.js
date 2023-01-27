/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let first = nums[0]
  let last = nums[nums.length - 1]
  
  if (nums.length === 2) {
    if (first < last) {
      return first
    } else {
      return last
    }
  }
  
  let midpoint = Math.floor(nums.length / 2);
  let mid = nums[midpoint];
  
  // check if rotated
  if (first < last) {
    // not rotated
    let left = nums[midpoint - 1];
    let right = nums[midpoint + 1];
    
    if (left < mid) {
      return findMin(nums.slice(0, midpoint))
    } else if (right < mid) {
      return findMin(nums.slice(midpoint + 1))
    } else {
      return mid
    }
  } else {
    // rotated
    if (first < mid) {
      // check right
      return findMin(nums.slice(midpoint + 1))
    } else {
      // check left
      return findMin(nums.slice(0, midpoint + 1))
    }
  }
};