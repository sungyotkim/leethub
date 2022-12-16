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
 * @return {boolean}
 */
var isValidBST = function(root) {
  // set up a helper function to traverse recursively while tracking small and large
  let dfs = (node, small, large) => {
    // base case, if empty tree, it is a BST
    if (!node) return true;
    
    // if node value is smaller small or larger than large or equal to either, return false
    if (small >= node.val || large <= node.val) {
      return false;
    }
    
    // traverse left while updating large value to be the current node val
    let left = dfs(node.left, small, node.val);
    // traverse right while updating small value to be current node val
    let right = dfs(node.right, node.val, large);
    
    // it is a BST if both left and right subtrees are also BSTs
    return left && right;
  }
  
  // call on dfs helper function, small should be smallest possible number, large should be largest possible number
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};