/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if(!deck || deck.length < 2) return false;
  deck.sort((a, b) => (a - b));
  let min = Number.MAX_SAFE_INTEGER;
  let len = deck.length;
  let group = [];
  let result = true;
  for (let i = 0; i < len; i++) {
    let temp = [];
    temp.push(deck[i]);
    for (let j = i+1; j <= len; j++) {
      if(deck[j] === deck[i]){
        temp.push(deck[j]);
      } else {
        min = Math.min(min, temp.length);
        group.push([...temp]);
        i = j - 1;
        break;
      }
    }
  }

  console.log(min)
  console.log(group)
  console.log(deck)

  if(min < 2) return false;

  for (let i = 0; i < group.length; i++) {
    if(group[i].length % min !== 0) {
      return false;
    }
  }

  return result;
};

console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))
