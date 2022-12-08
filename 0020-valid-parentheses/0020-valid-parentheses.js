/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const closingPair = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let ele = s[i];
    
    // check if opening tag
    if (ele in closingPair) {
      stack.push(ele);
    } else {
      // not an opening tag
      if (closingPair[stack.pop()] !== ele) return false;
    }
  }
  
  return stack.length === 0
};