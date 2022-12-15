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
var maxAncestorDiff = function(root) {
  if (!root) return 0;
  
  let dfs = (node, max, min) => {
    // return the max min along the path once you hit a leaf
    if (!node) return max - min;
    
    // update max and min, returning the max left and right of subtrees
    
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    let left = dfs(node.left, max, min);
    let right = dfs(node.right, max, min);
    return Math.max(left, right)
  } 
  
  return dfs(root, root.val, root.val)
};