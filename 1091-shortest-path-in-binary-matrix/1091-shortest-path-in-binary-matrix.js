/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestPathBinaryMatrix(grid) {
  // edge case
  if (grid[0][0] === 1) return -1;
  
  const seen = new Set();
  
  const stringify = (row, col) => {
    return `${row},${col}`
  }
  
  const n = grid.length;
  
  const valid = (row, col) => {
    return 0 <= row && row < n && 0 <= col && col < n && grid[row][col] === 0;
  }
  
  const directions = [[0,1], [0,-1], [1,0], [-1,0], [1,1], [1,-1], [-1,1], [-1,-1]];
  
  let steps = 0;
  let queue = [[0,0]];
  seen.add(stringify(0, 0));
  
  while (queue.length) {
    let nextQueue = [];
    steps++;
    
    for (const [row, col] of queue) {
      if (row === n - 1 && col === n - 1) return steps;
      
      for (const [dx, dy] of directions) {
        let nextRow = row + dx;
        let nextCol = col + dy;
        
        if (valid(nextRow, nextCol) && !seen.has(stringify(nextRow, nextCol))) {
          nextQueue.push([nextRow, nextCol]);
          seen.add(stringify(nextRow, nextCol));
        }
      }
    }
    
    queue = nextQueue;
  }
  
  return -1; // end not found
};