/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  // initialize the queue and sum
  let queue = [root];
  let sum = 0;
  // handle base case
  if (!root) return sum;
  
  // continue iteration through the tree via the queue
  while (queue.length) {
    // reset the sum for each new level
    sum = 0;
    // establish next queue for efficiency
    let nextQueue = [];
    
    // loop through each of the nodes in the level
    for (let i = 0; i < queue.length; i++) {
      // initialize node for readability
      let node = queue[i];
      
      // add the node val to the sum
      sum += node.val;
      
      // if not a leaf node, add to nextQueue
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    } 
    
    // change the queue to move to the next level
    queue = nextQueue;
  }
  
  // return the deepest sum
  return sum;
};