/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  let words = s.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let left = 0;
    let right = words[i].length - 1;
    let newWord = words[i].split("");
    
    while (left < right) {
      let first = newWord[left];
      newWord[left] = newWord[right];
      newWord[right] = first;
      
      left++;
      right--;
    }
    
    words[i] = newWord.join("");
  }
  
  return words.join(" ")
};