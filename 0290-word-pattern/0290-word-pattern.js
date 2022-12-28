/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  let words = s.split(" ");
  
  // edge case
  if (pattern.length !== words.length) return false;
  
  // track matching pairs
  let match = new Map();
  
  // same pattern can't be existing as a different match
  let seen = new Set();
  
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (match.get(char)) {
      if (match.get(char) !== words[i]) return false;
    } else {
      if (seen.has(words[i])) return false;
      
      match.set(char, words[i]);
      seen.add(words[i]);
    }
  }
  
  return true;
};