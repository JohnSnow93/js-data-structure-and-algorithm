/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let count = 0;

  function match(substr) {
    let startStr = substr.match('/(1+|2+)/')[0];
    let strToTest = (startStr[0] ^ 1).toString().repeat(startStr.length);

    if(substr.startsWith(strToTest)){
      return true;
    } else {
      return false
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    const result = match(s.slice(i));
    if(result){
      count ++;
    }
  }

  return count;
};
