/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    if (!head || !head.next) {
        return false
    }
    let slow = head.next;
    let fast = head.next.next;
    
    while (fast && fast.next) {
        if (slow === fast) {
            return true
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};