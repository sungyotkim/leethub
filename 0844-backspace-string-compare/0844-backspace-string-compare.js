/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  const stack1 = [];
  const stack2 = [];
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '#') {
      stack1.pop();
    } else {
      stack1.push(char)
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (char === '#') {
      stack2.pop();
    } else {
      stack2.push(char)
    }
  }
  
  if (stack1.length !== stack2.length) return false;
  
  for (let i = 0; i < stack1.length; i++) {
    if (stack1[i] !== stack2[i]) return false
  }
  
  return true
};