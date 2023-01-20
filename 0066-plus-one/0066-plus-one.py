class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        ans = []
        i = len(digits) - 1
        increment = False
        
        while i >= 0:
          digit = digits[i]
          
          if i == len(digits) - 1:
            digit += 1
          
          if digit == 10:
            ans.insert(0, 0)
            increment = True
            i -= 1
          else:
            if increment == True:
              digit += 1
              
              if digit == 10:
                ans.insert(0, 0)
              else:
                ans.insert(0, digit)
                increment = False
                
              i -= 1
            else:
              ans.insert(0, digit)
              i -= 1
              
        if ans[0] == 0:
          ans[0] = 0
          ans.insert(0, 1)
        
        return ans