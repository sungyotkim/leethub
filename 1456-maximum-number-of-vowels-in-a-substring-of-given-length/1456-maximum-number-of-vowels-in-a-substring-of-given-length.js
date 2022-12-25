/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
  const vowels = new Set('aeiou');
  
  let left = 0;
  let right = 0;
  let max = 0;
  
  // build the window
  while (right < k) {
    if (vowels.has(s[right])) max++;
    
    right++;
  }
  
  let curr = max;
  
  while (right < s.length) {
    if (right !== k - 1) {
      if (vowels.has(s[right])) curr++;
    }
    
    if (vowels.has(s[left])) curr--;
    
    left++;
    right++;
    
    max = Math.max(max, curr);
  }
  
  return max;
};