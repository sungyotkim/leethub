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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }
  // establish a queue to traverse via BFS
  let queue = [root];
  
  while (queue.length) {
    // pop from queue and check if node value is less or greater than val;
    let node = queue.pop();
    
    // check if current node is less than val, if child doesn't exist, insert val right, otherwise push right to queue
    if (node.val < val) {
      if (!node.right) {
        node.right = new TreeNode(val);
      } else {
        queue.push(node.right);
      }
    }
    
    // check if current node is greater than val, if child doesn't exist, insert val left, otherwise push left to queue
    if (node.val > val) {
      if (!node.left) {
        node.left = new TreeNode(val);
      } else {
        queue.push(node.left);
      }
    }
  }
  
  // return the new root
  return root;
};