/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  let counter = {};

  nums.forEach((num) => {
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  });

  let bucket = {};
  let highest = 0;

  for (let key in counter) {
    let count = counter[key];
    if (count > highest) {
      highest = count;
    }
    if (bucket[count]) {
      bucket[count].push(parseInt(key));
    } else {
      bucket[count] = [parseInt(key)];
    }
  }

  let results = [];

  for (let i = highest; i >= 0; i--) {
      if (bucket[i]) {
          for (let j = 0; j < bucket[i].length; j++) {
              results.push(bucket[i][j])
          }
      } else {
          continue
      }
  }

    return results.slice(0, k)
};