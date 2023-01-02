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
function deleteDuplicates(head) {
  // base case
  if (!head || !head.next) return head;
  
  // initialize dummy in the event head node is a duplicate
  let dummy = new ListNode(-101);
  let prev = dummy;
  
  while (head) {
    // check for dup
    if (head.next && head.val === head.next.val) {
      // skip dupes
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      // move prev to skip the above dupes
      prev.next = head.next;
    } else {
      // if first is unique, need to set prev equal to head
      if (prev.val === -101) {
        prev.next = head;
      }
      
      // not a dupe, move the prev
      prev = prev.next;
    }
    
    // move forward
    head = head.next;
  }
  
  return dummy.next;
};