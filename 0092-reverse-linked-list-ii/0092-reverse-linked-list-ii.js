/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  // if (left === right || !head.next) return head;
  let start = head, cur = head;
  let i = 1;
  while (i < left) {
      start = cur;
      cur = cur.next;
      i++;
  }
  let prev = null, tail = cur;
  while (i <= right) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      i++;
  }
  start.next = prev;
  tail.next = cur;
  return left === 1 ? prev : head; 
};
