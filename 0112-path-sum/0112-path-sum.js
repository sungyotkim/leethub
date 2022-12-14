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
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  let dfs = (node, currSum) => {
    // handle base case
    if (!node) return false;
  
    // check if it is a leaf node
    if (!node.left && !node.right) {
      // if it is a leaf node, compare current with targetSum
      if (currSum + node.val === targetSum) return true
    }
    
    // add to value
    currSum += node.val;
    
    // recursive call to increment currSum
    let left = dfs(node.left, currSum);
    let right = dfs(node.right, currSum);
    return left || right // prioritize left over right
  }
  
  return dfs(root, 0)
};