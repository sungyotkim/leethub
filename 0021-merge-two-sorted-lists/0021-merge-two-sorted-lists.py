# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        left = list1
        right = list2
        ans = ListNode(0)
        prevAns = ans
        
        while left is not None and right is not None:
          if left.val < right.val:
            ans.next = left
            left = left.next
          else:
            ans.next = right
            right = right.next
        
          ans = ans.next
          
        if left is not None:
          ans.next = left
        elif right is not None:
          ans.next = right
          
        return prevAns.next