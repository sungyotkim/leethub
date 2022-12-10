/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  // Use a stack to track all elements smaller than initial
  const stack = [];
  // use map to track next greatest element
  const map = {};
  let ans = [];

  // iterate through nums2 and add to stack if num is less than top of stack
  for (let i = 0; i < nums2.length; i++) {
    
    // if num is greater, pop the stack and replace the popped element in the map
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      let last = stack.pop();
      map[last] = nums2[i];
    }
    stack.push(nums2[i])
  }
  
  // if it exists in the map, add the answer, otherwise it's -1
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      ans.push(map[nums1[i]])
    } else {
      ans.push(-1)
    }
  }
    
  
  return ans;
};