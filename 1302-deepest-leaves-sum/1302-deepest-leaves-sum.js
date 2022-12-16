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
  let queue = [root];
  let sum = 0;
  if (!root) return sum;
  
  while (queue.length) {
    sum = 0;
    let nextQueue = [];
    
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      
      sum += node.val;
      
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    
    queue = nextQueue;
  }
  
  return sum;
};