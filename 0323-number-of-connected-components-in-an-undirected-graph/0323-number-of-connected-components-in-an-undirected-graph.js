/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  const seen = new Set();
  const graph = new Map();
  
  // build the graph
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  
  // edges is undirected
  for (const [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }
  
  // set up dfs helper function to add neighbors to seen
  const dfs = node => {
    for (const neighbor of graph.get(node)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
  }
  
  let ans = 0;
  
  // loop through nodes
  for (let i = 0; i < n; i++) {
    // if it isn't in seen, it's a new component
    if (!seen.has(i)) {
      ans++;
      seen.add(i);
      dfs(i);
    }
  }
  
  return ans;
};