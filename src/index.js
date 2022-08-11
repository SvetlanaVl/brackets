module.exports = function check(str, bracketsConfig) {
  
  const bracketsConfigObject = bracketsConfig.map( function resalt([key, value]){
    const obj = ({[key]:value});
    return obj;
  });
  
  let openBrackets = bracketsConfigObject.reduce((container, obj) => [...container, ...Object.keys(obj)], []);

  
  const pairBrackets = {
    [')'] : '(',
    [']'] : '[',
    ['}'] : '{',
    ['|'] : '|',
    ['|'] : '|',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
    ['7'] : '7',
    ['8'] : '8',
  };
  
  let stack = [];

  for (let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
    if (stack.length === 0) {
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        return false;
      }
    } else {
      if (pairBrackets[currentSymbol] === topElement) {
        stack.pop();
      } else if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        return false;
      } 
    }
  }
  return stack.length === 0; 
}
