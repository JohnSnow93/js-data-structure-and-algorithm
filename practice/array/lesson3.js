/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if(n === 0) return true;
  let plant = 0;
  let result = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i] === 1) continue;
    if(flowerbed[i] === 0) {
      if(flowerbed[i + 1] === 0 && !flowerbed[i - 1]){
        flowerbed[i] = 1;
        plant ++;
      }
    }

    if(plant >= n) {
      result = true;
      break;
    }
  }
  return result;
};
