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
function minDepth(root) {
  // handle base case
  if (!root) return 0;
  
  // check if leaf, increment by 1
  if (!root.left && !root.right) {
    return 1;
  }
  
  // establish minimum, which starts at max value;
  let min = Number.MAX_SAFE_INTEGER;
  
  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }
  
  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }
  
  return min + 1;
};