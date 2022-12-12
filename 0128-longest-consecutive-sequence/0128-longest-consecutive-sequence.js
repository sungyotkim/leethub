/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0;
    const visited = new Set()
    const intSet = new Set(nums);
    for(let num of intSet.values()){
        if(!visited.has(num)){
            let count = 1
            for(let i = 1; i < nums.length; i++){            
                if(intSet.has(num+i)){
                    count++;
                    visited.add(num+i)
                    } else break;
                }
                if(count > longest) longest = count
            }

        }

        return longest
    }