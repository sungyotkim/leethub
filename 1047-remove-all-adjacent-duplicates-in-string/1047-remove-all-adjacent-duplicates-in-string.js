/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  const stack = [];
  let stackIdx = -1;
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    
    if (stack[stackIdx] === char) {
      stack.pop();
      stackIdx--;
    } else {
      stack.push(char);
      stackIdx++;
    }
  }
  
  return stack.join("")
};