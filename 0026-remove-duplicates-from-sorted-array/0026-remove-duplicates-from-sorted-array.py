class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        curr = 0
        end = len(nums) - 1

        while curr < end:
          currEle = nums[curr]
          nextEle = nums[curr + 1]
          
          if currEle == nextEle:
            nums.remove(nums[curr + 1])
            nums.append(nextEle)
            end -= 1
          else:
            curr += 1
            
        end += 1
            
        return end