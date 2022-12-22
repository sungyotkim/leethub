/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let seen = [];
  let islands = 0;
  let rows = grid.length;
  let columns = grid[0].length;
  
  // build seen
  for (let i = 0; i < rows; i++) {
    let subArr = new Array(columns).fill(false);
    seen.push(subArr);
  }
  
  // dfs to check if land
  let dfs = (row, col) => {

    // up
    if (row + 1 < rows && grid[row + 1][col] === '1' && !seen[row + 1][col]) {
      seen[row + 1][col] = true;
      dfs(row + 1, col);
    }
    
    // down 
    if (row - 1 >= 0 && grid[row - 1][col] === '1' && !seen[row - 1][col]) {
      seen[row - 1][col] = true;
      dfs(row - 1, col);
    }
    
    // right
    if (col + 1 < columns && grid[row][col + 1] === '1' && !seen[row][col + 1]) {
      seen[row][col + 1] = true;
      dfs(row, col + 1);
    }
    
    // left
    if (col - 1 >= 0 && grid[row][col - 1] === '1' && !seen[row][col - 1]) {
      seen[row][col - 1] = true;
      dfs(row, col - 1);
    }
  }
  
  // iterate through grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // check if land in grid and if so, check if it isn't already seen
      if (grid[row][col] === "1" && !seen[row][col]) {
        // found a new island
        islands++;
        seen[row][col] = true;

        // add connected islands to dfs
        dfs(row, col);
      }
    }
  }
  
  return islands;
};