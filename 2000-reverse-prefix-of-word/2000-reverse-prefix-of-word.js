/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
  let left = 0;
  let right = 0;
    
  const arr = word.split("")
  
  // iterate until ch is found
  while (arr[right] !== ch && right < arr.length) {
    right++;
  }
  
  // exit if ch isn't found
  if (arr[right] !== ch) return word;
  
  while (left < right) {
    let first = arr[left];
    arr[left] = arr[right];
    arr[right] = first;
    left++;
    right--;
  }
         
  return arr.join("");
};