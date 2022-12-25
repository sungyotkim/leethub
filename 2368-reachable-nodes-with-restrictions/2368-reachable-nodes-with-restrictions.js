/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
function reachableNodes(n, edges, restricted) {
  let max = 0; 
  let curr = 1; // includes node 0
  const graph = new Map();
  const seen = new Set();
  const restrictedSet = new Set();
  
  // build the graph
  for (let i = 0; i < n; i++) {
    graph.set(i, [])
  }
  
  // convert restricted arr into a set
  for (let i = 0; i < restricted.length; i++) {
    restrictedSet.add(restricted[i]);
  }
  
  // undirected graph
  for (let [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }
  
  // dfs helper function
  const dfs = node => {
    for (const neighbor of graph.get(node)) {
      if (!seen.has(neighbor) && !restrictedSet.has(neighbor)) {
        seen.add(neighbor);
        curr++;
        dfs(neighbor);
      }
    }
    
    max = Math.max(max, curr);
  }
  
  seen.add(0);
  dfs(0);
  
  return max;
};