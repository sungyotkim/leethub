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
// function reverseBetween(head, left, right) {
//   if (left === right || !head.next) return head;
//   let start = head, cur = head;
//   let i = 1;
//   while (i < left) {
//       start = cur;
//       cur = cur.next;
//       i++;
//   }
//   let prev = null, tail = cur;
//   while (i <= right) {
//       let next = cur.next;
//       cur.next = prev;
//       prev = cur;
//       cur = next;
//       i++;
//   }
//   start.next = prev;
//   tail.next = cur;
//   return head
// };

var reverseBetween = function(head, m, n) {
    let start = head, cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }
    let prev = null, tail = cur;
    while (i <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    start.next = prev;
    tail.next = cur;
    return m == 1 ? prev : head; 
    // if m == 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head)
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};