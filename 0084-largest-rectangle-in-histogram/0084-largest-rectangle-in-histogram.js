/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  // initialize a stack that starts with -1 index and 0 as height (left most minimum height)
  let stack = [[-1, 0]];
  // initialize maximum
  let maxArea = Number.MIN_SAFE_INTEGER;
  
  // loop through heights using an index
  for (let i = 0; i < heights.length; i++) {
    // check if current height is greater than last height
    let currH = heights[i];
    let lastH = stack[stack.length - 1][1];
    
    if (currH > lastH) {
      stack.push([i, currH])
    } else {
      // when currH is smaller than lastH, continue to pop lastH while stack length > 1
      while (stack.length > 1 && currH < lastH) {
        let popped = stack.pop();
        // establish new last item in stack;
        let last = stack[stack.length - 1];
        
        // calculate rect width
        let width = i - last[0] - 1;
        let currArea = width * popped[1];
        
        // adjust maxArea;
        maxArea = Math.max(maxArea, currArea);
        
        // reset lastH;
        lastH = last[1];
      }
      
      // add curr to stack
      stack.push([i , currH])
    }
  }
  
  // handle remaining stack
  while (stack.length > 1) {
    let popped = stack.pop();
    let last = stack[stack.length - 1];
    
    let currArea = (heights.length - last[0] - 1) * popped[1];
    maxArea = Math.max(maxArea, currArea);
  }
  
  return maxArea;
};