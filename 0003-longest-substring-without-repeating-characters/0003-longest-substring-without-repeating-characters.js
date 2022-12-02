/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let set = new Set();
    let first = 0;
    let last = 0;
    let longest = 0;
    let current = 0;
    
    while (last < s.length) {
        if (set.has(s[last])) {
            while (first < last) {
                if (s[first] === s[last]) {
                    first++;
                    break;
                } else {
                    set.delete(s[first]);
                    current--;
                    first++;
                }
            }
            last++;
        } else {
            set.add(s[last]);
            current++;
            last++;
            if (current > longest) {
                longest = current;
            }
        }
    }
    
    return longest;
}