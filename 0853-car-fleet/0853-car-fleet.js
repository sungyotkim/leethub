/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  // handle base case
  if (position.length === 1 || speed.length === 1) return 1;
  let ans = 0;
  
  // create object pair of position and speed
  const pairs = [];
  
  for (let i = 0; i < position.length; i++) {
    let pos = position[i];
    let spd = speed[i];
    pairs.push([pos, spd]);
  }
  
  // establish monotonic stack of increasing positions
  const stack = pairs.sort((a, b) => a[0] - b[0]);
  
  const times = [];
  
  // iterate through monotonic stack to create an array of times 
  for (let i = 0; i < stack.length; i++) {
    // mathematically, determine target - position / speed;
    let pos = stack[i][0];
    let spd = stack[i][1];
    let time = (target - pos) / spd;
    
    times.push(time);
  }
  
  // iterate through times and if popped value is greater than or equal to last in stack, continue popping
  while (times.length) {
    let curr = times.pop();
    // add to fleet count
    ans++;
    
    // skip the ones that follow if they would have been caught up to (time is slower than current)
    while (curr >= times[times.length - 1]) {
      times.pop();
    }      
  }
  
  return ans;
};