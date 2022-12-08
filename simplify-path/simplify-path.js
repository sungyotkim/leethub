/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const stack = [];
  let paths = path.split("/");
  
  for (let i = 0; i < paths.length; i++) {
    let curr = paths[i];
    
    if (i === 0) {
      stack.push(curr);
      continue;
    }
    
    if (curr[0] === '.' && curr.length === 1) {
      continue;
    } else if (curr[0] === '.' && curr[1] === '.' && curr.length === 2) {
      if (stack.length > 1) stack.pop();
      continue;
    }
    
    if (i === paths.length - 1) {
      if (!curr.length) break;
    }
    
    if (curr.length > 0) stack.push(curr)
  }
  console.log(stack)
  
  if (stack.length === 1 || stack.length === 0) {
    return "/" + stack.join("/")
  }
  return stack.join("/")
};