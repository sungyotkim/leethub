class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        left = 0
        right = 0
        
        i = m
      
        # remove 0s
        while i < len(nums1):
          nums1.pop()
        
        while left < len(nums1) and right < n:
          num1 = nums1[left]
          num2 = nums2[right]
          
          if num1 < num2:
            left += 1
          elif num2 <= num1:
            nums1.insert(left, num2)
            left += 1
            right += 1
            
        if right < n and left == len(nums1):
          while right < n:
            nums1.append(nums2[right])
            right += 1