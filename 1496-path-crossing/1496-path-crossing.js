/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  let directions = {"N": [0, 1], "S": [0, -1], "E": [1, 0], "W": [-1, 0]};
  let [x, y] = [0, 0];
  
  const stringify = (row, col) => {
    return row + "," + col
  }
  
  const visited = new Set();
  
  visited.add(stringify(x, y));
  
  for (let dir of path) {
    let [dx, dy] = directions[dir];
    x += dx
    y += dy
    
    let stringified = stringify(x, y);
    
    if (visited.has(stringified)) return true;;
    
    visited.add(stringified);
  }
  
  return false;
};