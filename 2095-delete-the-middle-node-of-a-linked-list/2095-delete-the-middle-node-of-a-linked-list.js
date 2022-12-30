/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteMiddle(head) {
  // handle edge case
  if (!head.next) {
    return head.next
  };
  
  let fast = head;
  let slow = head;
  let prevSlow;
  
  // move slow pointer to middle
  while (fast && fast.next) {
    fast = fast.next.next;
    prevSlow = slow;
    slow = slow.next;
  }
  
  // delete middle node
  let nextSlow = slow.next;
  slow.next = null;
  prevSlow.next = nextSlow;
  
  return head;
};