/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  // convert binary tree into an undirected graph using either bfs or dfs
  const dfs = (node, parent) => {
    if (!node) return;
    
    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  }
  
  dfs(root, null); // convert from root which has no parent
  
  const seen = new Set([target]);
  let queue = [target]; // want to start from target and move k distance away
  let distance = 0; // to track distance away from target
  
  // loop while queue exists and until distance is k
  while (queue.length && distance < k) {
    distance++;
    let nextQueue = [];
    
    for (const node of queue) {
      // move to next level for each of the neighbors
      for (const neighbor of [node.left, node.right, node.parent]) {
        if (neighbor && !seen.has(neighbor)) {
          seen.add(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }
    
    queue = nextQueue;
  }
  
  return queue.map(node => node.val) // return the array of values of the nodes that are k distance away 
};