/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return [];
  let map = ['' ,'', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let num = digits.split('');
  let code = num.map((item) => {
    return  map[item];
  });
  
  function combine(arr) {
    let tempResult = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tempResult.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tempResult);
    if(arr.length > 1){
      combine(arr);
    }
  }



  if(digits.length > 1){
    combine(code);
    return code[0];
  } else {
    return code[0].split('');
  }
};

letterCombinations('2')
