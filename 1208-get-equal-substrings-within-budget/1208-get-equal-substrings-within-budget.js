/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
  const costs = new Map();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  // build a cost hash
  for (let i = 0; i < alphabet.length; i++) {
    costs.set(alphabet[i], i + 1)
  }
  
  let max = 0;
  let cost = 0;
  
  let left = 0;
  let right = 0;
  
  while (right < s.length) {
    let length = right - left + 1;
    
    // check if any needs to be changed;
    if (s[right] === t[right]) {  
      max = Math.max(max, length);
      right++;
    } else {
      let diff = Math.abs(costs.get(s[right]) - costs.get(t[right]));
      cost += diff;
      
      while (cost > maxCost && left < right) {
        let prevDiff = Math.abs(costs.get(s[left]) - costs.get(t[left]));
        cost -= prevDiff;
        left++;
      }
      
      length = right - left + 1;
      if (cost <= maxCost) max = Math.max(max, length);
      right++;
    }
  }
  
  return max;
};