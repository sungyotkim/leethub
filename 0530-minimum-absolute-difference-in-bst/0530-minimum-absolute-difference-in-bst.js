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
function getMinimumDifference(root) {
  let min = Number.MAX_SAFE_INTEGER;
  
  // approach with DFS to get sorted array in o(n) time
  let dfs = (node) => {
    // establish base case, should return empty array
    if (!node) return [];
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    
    // combine the arrays in sorted order;
    return left.concat([node.val]).concat(right);
  }
  
  // call on helper function
  let values = dfs(root);
  
  // iterate through values and check for min difference
  for (let i = 0; i < values.length - 1; i++) {
    let diff = values[i + 1] - values[i];
    min = Math.min(min, diff)
  }
  
  return min;
};