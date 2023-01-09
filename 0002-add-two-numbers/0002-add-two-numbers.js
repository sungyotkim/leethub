/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const ans = new ListNode(0);
  let curr = ans;
  let remainder = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  
  while (pointer1 && pointer2) {
    let sum = pointer1.val + pointer2.val;
    
    if (remainder > 0) {
      sum += 1;
      remainder = 0;
    }
    
    if (sum >= 10) {
      sum -= 10;
      remainder = 1;
    }
    
    curr.val = sum;
    
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    
    if (pointer1 && pointer2) {
      curr.next = new ListNode(0);
      curr = curr.next;
    }
  }
  
  // handle edge case
  let remaining;
  
  if (pointer1) {
    remaining = pointer1;
  } else if (pointer2) {
    remaining = pointer2;
  }
  
  if (remaining) {
    curr.next = new ListNode(0);
    curr = curr.next;
  } 
  
  while (remaining) {
    let val = remaining.val;
    
    if (remainder > 0) {
      val++;
      remainder = 0;
    }
    
    if (val >= 10) {
      val -= 10;
      remainder = 1;
    }
    
    curr.val = val;
    
    if (remaining.next) {
      curr.next = new ListNode(0);
      curr = curr.next;
    } 
    remaining = remaining.next;
  }
  
  if (remainder > 0) {
    curr.next = new ListNode(1);
    curr = curr.next;
  } 
  
  return ans;
};