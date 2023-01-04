/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let pointer = head;
  let left = null;
  let right = head;
  let fast = head;
  let num = 0;
  
  while (fast && right) {
    right = right.next;
    
    // handle odd lengths
    if (fast.next) {
      fast = fast.next.next;
    } else {
      break;
    }
    
    num++
  }

  // reverse left up to halfway point
  for (let i = 0; i < num; i++) {
    let temp = pointer.next;
    pointer.next = left;
    left = pointer;
    pointer = temp;
  }
  
  console.log(left, right)
  
  // while pointers exist, compare values and if they don't match, return false
  while (left && right) {
    if (left.val !== right.val) return false;
    
    left = left.next;
    right = right.next;
  }
  
  
  return true;
};