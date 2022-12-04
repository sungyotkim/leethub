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
function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let prev;
    let curr = head;
    let next = head.next
    
    while (curr && curr.next) {
        let nextTemp = next.next;
        if (!prev) {
            next.next = curr;
            curr.next = nextTemp;
            head = next;
        } else {
            next.next = curr;
            curr.next = nextTemp;
            prev.next = next;
        }
        prev = curr;
        curr = curr.next;
        if (!curr) break;
        next = curr.next;
    }
    
    return head;
};