/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];
  const operators = new Set('+-*/');
  
  for (let token of tokens) {
    // if not an operator push to stack
    if (!operators.has(token)) {
      stack.push(token);
    } else {
      // handle operation
      let second = parseInt(stack.pop());
      let first = parseInt(stack.pop());
      let result;
      
      switch(token) {
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
        case "*":
          result = first * second;
          break;
        case "/":
          result = parseInt(first / second);
          break;
        default:
          break;
      }
      // add result to stack
      console.log(result)
      stack.push(result)
    }
  }
  
  // return the top of stack
  return stack.pop();
};