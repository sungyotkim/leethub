/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (count[num]) {
            return true
        } else {
            count[num] = 1
        }
    }

    return false;
};