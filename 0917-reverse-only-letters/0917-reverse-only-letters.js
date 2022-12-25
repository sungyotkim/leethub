/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ');
  const words = s.split("");
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    // only change if they are letters
    while (!alphabet.has(words[left]) && left < right) {
      left++;
    }
    while (!alphabet.has(words[right]) && left < right) {
      right--;
    }
    
    let first = words[left];
    words[left] = words[right];
    words[right] = first;
    
    left++;
    right--;
  }
  
  return words.join("");
};