/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // base case
  if (nums.length === 0) return -1;
  
  const mid = Math.floor(nums.length / 2);
  const midpoint = nums[mid];
  
  if (midpoint === target) return mid;
  
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);
  
  if (target < midpoint) {
    return search(left, target);
  } else if (target > midpoint) {
    let res = search(right, target);
    
    return res === -1 ? res : search(right, target) + mid + 1;
  }
};