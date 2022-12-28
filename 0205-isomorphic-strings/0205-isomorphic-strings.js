/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  let match = new Map();
  let seen = new Set();
  
  for (let i = 0; i < s.length; i++) {
    if (match.get(s[i])) {
      if (match.get(s[i]) !== t[i]) return false;
    } else {
      if (seen.has(t[i])) return false;
      
      match.set(s[i], t[i]);
      seen.add(t[i]);
    }
  }
  
  return true;
};