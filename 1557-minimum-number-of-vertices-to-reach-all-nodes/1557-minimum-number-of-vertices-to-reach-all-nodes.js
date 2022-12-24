/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  // want a set of nodes that have an indegree of 0;
  const ans = [];
  // track number of indegrees, default being 0 for each node
  const indegrees = new Array(n).fill(0);
  
  // count indegrees
  for (const [x, y] of edges) {
    // x is outgoing, y is incoming
    // increment the indegree counter for y
    indegrees[y]++;
  }
  
  // loop through each node and add to ans if indegree is 0
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) {
      ans.push(i)
    }
  }
  
  return ans;
};