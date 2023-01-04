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
function reverseEvenLengthGroups(head) {
  // helper function to reverse the list
  let reverseList = (start, end, count) => {
    // handle single node edge case 
    if (!start.next) return start;
    
    let prev = start;
    let curr = start.next;
    let tail = start.next;
    
    for (let i = 0; i < count; ++i) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
        
    start.next = prev;
    tail.next = end;
    
    return
  }
  
  let size = 2; // first even group
  let start = head;
  let prev = head;
  let curr = head.next;
  let count = 0;

  while (curr) {
    if (count === size) {
      // check if count is even
      if (count % 2 === 0) {
        const end = curr;
        const tail = start.next; // the starting node of the reverse linked list will be the tail after the reverse takes place
        reverseList(start, end, count); // we need to reverse everything in the middle of start and end 
        start = tail; // we set the new start to the end of the reversed linked list
      } else {
        // move start up to next group;
        start = prev;
      }
      
      // reset count and go to next group
      count = 0;
      size++;
    } else {
      // iterate normally
      prev = curr;
      curr = curr.next;
      count++;
    }
  }  
  
  // last group is even edge case
  if (count % 2 === 0) { 
     reverseList(start, null, count);
  }
    
  return head;
};