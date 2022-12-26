/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  let outgoing = new Set();
  
  for (let [start, end] of paths) {
    outgoing.add(start);
  }
  
  for (let [start, end] of paths) {
    if (!outgoing.has(end)) return end
  }
};