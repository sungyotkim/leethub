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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  let sum = 0;
  if (!root) return sum;
  
  let queue = [root];
  
  while (queue.length) {
    let nextQueue = [];
    
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      
      // if node falls within range, add to sum;
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
      
      // only go to left if value is not lower than low
      if (node.val >= low && node.left) {
        nextQueue.push(node.left)
      }
      
      // only go to right if value is not higher than high
      if (node.val <= high && node.right) {
        nextQueue.push(node.right)
      }
    }
    
    queue = nextQueue;
  }
  
  return sum;
};