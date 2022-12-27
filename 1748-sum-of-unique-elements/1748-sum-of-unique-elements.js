/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums) {
  const counts = new Map();
  let sum = 0;
  
  for (let num of nums) {
    if (counts.get(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1)
    }
  }
  
  counts.forEach((val, key) => {
    if (val === 1) {
      sum += key;
    }
  })
  
  return sum;
};