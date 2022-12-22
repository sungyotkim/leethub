/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  let numProvinces = 0;
  // set up a seen array, which functions as a reverse set
  let seen = new Set();
  
  // convert adjacency matrix into hashmap of a node and its neighbors as an array
  let graph = new Map();
  for (let i = 0; i < isConnected.length; i++) {
    graph.set(i, []);
  }
  
  // populate the graph
  for (let i = 0; i < isConnected.length - 1; i++) {
    // ignore same index since a city will always be connected to itself
    // no need to check last array since all connected nodes should be addressed by then
    for (let j = i + 1; j < isConnected.length; j++) {
      // equal to 1 if connected
      if (isConnected[i][j]) {
        // indrected graph, so push to both
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }
  
  // set up dfs
  let dfs = node => {
    // loop through the neighbor array of node
    for (const neighbor of graph.get(node)) {
      // prevent cycles
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        // recursive call
        dfs(neighbor)
      }
    }
  }
  
  // loop through matrix and call dfs if node is not in seen
  for (let i = 0; i < isConnected.length; i++) {
    if (!seen.has(i)) {
      seen.add(i);
      dfs(i);
      // increment final count
      numProvinces++;
    }
  }
  
  return numProvinces;
};