/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }
    
    let last = stack[stack.length - 1]
    if (s[i] !== last && s[i].toLowerCase() === last.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  
  return stack.join("")
};