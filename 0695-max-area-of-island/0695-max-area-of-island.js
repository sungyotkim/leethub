/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  const seen = new Set();
  const m = grid.length;
  const n = grid[0].length;
  
  // helper function to check valid rows
  const valid = (row, col) => {
    return 0 <= row && row < m && 0 <= col && col < n && grid[row][col] === 1
  }
  
  // helper function for the set
  const stringify = (x, y) => {
    return x + "," + y
  }
  
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  let max = 0;
  let curr = 0;
  
  // dfs helper function
  const dfs = (row, col) => {
    for (const [dx, dy] of directions) {
      let nextRow = row + dy, nextCol = col + dx;
      let stringified = stringify(nextRow, nextCol)
      if (valid(nextRow, nextCol) && !seen.has(stringified)) {
        seen.add(stringified);
        dfs(nextRow, nextCol);
        curr++;
      }
    }
    max = Math.max(max, curr);
  }
  
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let stringified = stringify(row, col);
      if (grid[row][col] === 1 && !seen.has(stringified)) {
        seen.add(stringified);
        curr = 1;
        dfs(row, col);
      }
    }
  }
  
  return max;
};