class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest = ''
        
        if len(strs) == 1:
          return strs[0]
        
        
        i = 0
        
        while i < len(strs[0]):
          char = strs[0][i]
          
          for idx in range(1, len(strs)):
            word = strs[idx]
            
            # if first word is longer than other words
            if i >= len(word): 
              return longest
            
            if char != word[i]:
              return longest
            
          longest += char
          i += 1
          
        # empty string edge case
        return longest