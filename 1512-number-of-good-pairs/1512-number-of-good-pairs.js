/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  const pairs = new Map();
  let ans = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let temp = pairs.get(num);
    
    // if same number exists, all prev ones are a match to this one, so include prev count with this count
    if (temp) ans += temp;
    
    pairs.set(num, temp ? temp + 1 : 1);
  }
  
  return ans;
};