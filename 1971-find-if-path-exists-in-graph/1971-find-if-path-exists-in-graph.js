/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const seen = new Set();
  const graph = new Map();
  let ans = false;
  
  if (source === destination) return true;
  
  // set up graph
  for (let i = 0; i < n; i++) {
    graph.set(i, [])
  }
  
  // create undirected graph
  for (const [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }
  
  // dfs helper function
  const dfs = node => {
    for (const neighbor of graph.get(node)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        if (neighbor === destination) ans = true;
        dfs(neighbor)
      }
    }
  }
  
  seen.add(source);
  dfs(source);
  
  return ans;
};