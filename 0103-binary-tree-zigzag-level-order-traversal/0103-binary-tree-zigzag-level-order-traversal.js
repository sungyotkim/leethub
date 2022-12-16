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
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  // intialize variables
  let ans = [];
  let queue = [root];
  // track order traversal
  let left = true;
  
  // handle base case
  if (!root) return ans;
  
  // start traversal
  while (queue.length) {
    let nextQueue = [];
    let level = [];
    
    // iterate through the queue and add to ans;
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      
      // if left, push into level. Otherwise unshift instead
      if (left) {
        level.push(node.val)
      } else {
        level.unshift(node.val)
      }
      
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    
    // push level into ans
    ans.push(level)
    
    // go to next level and flip the order
    queue = nextQueue;
    left = !left;
  }
  
  return ans;
};