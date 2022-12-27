/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  const pairs = new Map();
  let ans = 0;
  let i = 0;
  let j = 1;
  
  while (i < nums.length - 1) {
    while (j < nums.length) {
      let first = nums[i];
      let second = nums[j];
      
      if (first === second) {
        if (pairs.get(first)) {
          pairs.get(first).push([i, j]);
        } else {
          pairs.set(first, [[i, j]]);
        }
      }
      
      j++;
    }
    
    i++;
    j = i + 1;
  }
  
  for (const [key, arr] of pairs) {
    for (let count = 0; count < arr.length; count++) {
      ans++;
    }
  }
  
  return ans;
};