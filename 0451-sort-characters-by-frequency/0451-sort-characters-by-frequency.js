/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const frequency = new Map();
  const countsOfChars = new Map();
  let highest = 0;
  let ans = '';
  
  // iterate through string and count frequency
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (frequency.get(char)) {
        frequency.set(char, frequency.get(char) + 1);
      } else {
        frequency.set(char, 1);
      }
    }
  
  // iterate through frequency hash and add each str into an array of the counts in another hash
  for (let [char, freq] of frequency) {
    if (countsOfChars.get(freq)) {
      // add the number of occurence
      for (let i = 0; i < freq; i++) {
        countsOfChars.get(freq).push(char);
      }
    } else {
      countsOfChars.set(freq, [char]);
      
      // excluding above, add to freq based on occurrence
      for (let i = 1; i < freq; i++) {
        countsOfChars.get(freq).push(char);
      }
    }
    
    // store highest frequency
    highest = Math.max(highest, freq);
  }
  
  // iterate from highest frequency down and add char to ans string
  for (let i = highest; i >= 0; i--) {
    let arr = countsOfChars.get(i);
    
    if (arr) {
      for (let char of arr) {
        ans += char;
      }
    }
  }
  
  return ans;
};