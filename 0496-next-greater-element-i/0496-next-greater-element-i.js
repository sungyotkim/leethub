/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const map = {};
  let ans = [];
  
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      let last = stack.pop();
      map[last] = nums2[i];
    }
    stack.push(nums2[i])
  }
  
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      ans.push(map[nums1[i]])
    } else {
      ans.push(-1)
    }
  }
    
  
  return ans;
};