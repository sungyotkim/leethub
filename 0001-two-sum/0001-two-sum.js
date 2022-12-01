/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let match = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;

        if (match[diff] >= 0) {
            return [match[diff], i]
        } else {
            match[num] = i
        }
    }
};