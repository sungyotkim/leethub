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
function goodNodes(root) {
  let dfs = (node, maxSoFar) => {
    if (!node) return 0;
    
    // see how many children nodes satisfy a good node attribute;
    let left = dfs(node.left, Math.max(maxSoFar, node.val));
    let right = dfs(node.right, Math.max(maxSoFar, node.val));
    
    // add left and right to get current # of good nodes
    let ans = left + right;
    
    // if current node is good (higher than maxSoFar), increment ans
    if (node.val >= maxSoFar) {
      ans++;
    }
    
    // then return the ans
    return ans;
  }
  
  return dfs(root, Number.MIN_SAFE_INTEGER)
};