/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const row = {};
  const column = {};
  const box = {};
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;
      if (!row[i]) row[i] = new Set();
      if (!column[j]) column[j] = new Set();
      const boxInt = `${Math.floor(i / 3)},${Math.floor(j /3)}`;
      if (!box[boxInt]) box[boxInt] = new Set();
      
      if (row[i].has(val) || column[j].has(val) || box[boxInt].has(val)) return false
      
      row[i].add(val);
      column[j].add(val);
      box[boxInt].add(val);
    }
  }
  
  return true;
};