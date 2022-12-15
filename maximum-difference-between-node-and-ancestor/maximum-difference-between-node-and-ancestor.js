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
  let dfs = (node, max, min) => {
    // base case: once you reach a leaf, return max difference;
    if (!node) {
      return max - min;
    }
    
    // update max and min
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    
    // traverse left and right;
    let left = dfs(node.left, max, min);
    let right = dfs(node.right, max, min);
        
    // return higher value;
    return Math.max(left, right)
  }
  
  return dfs(root, root.val, root.val)
};