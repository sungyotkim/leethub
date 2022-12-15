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
function diameterOfBinaryTree(root) {
  // initialize variables
  let diameter = 0;
  
  // set up helper function to track paths
  let dfs = (node) => {
    // base case
    if (!node) return 0;
    
    // recursively call the children
    let left = dfs(node.left);
    let right = dfs(node.right);
    
    // update diamater if the paths lengths are longer
    diameter = Math.max(diameter, left + right);
    
    // return the incremented value of the longest path length to account for parent and child path
    return Math.max(left, right) + 1;
  }
  
  // call the helper function
  dfs(root);
  
  // return the final answer;
  
  return diameter;
};