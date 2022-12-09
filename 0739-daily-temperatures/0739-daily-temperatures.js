/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  let stack = [];
  let ans = [];
  
  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];
    
    if (i === 0) {
      stack.push([temp, i]);
      ans.push(0);
      continue;
    } 
    
    if (stack[stack.length - 1][0] < temp) {
      while (stack.length) {
        if (stack[stack.length - 1][0] >= temp) break;
        
        let last = stack.pop();
        ans[last[1]] = i - last[1];
      }  
    }
    
    stack.push([temp, i]);
    ans.push(0)
  }
  
  return ans;
};