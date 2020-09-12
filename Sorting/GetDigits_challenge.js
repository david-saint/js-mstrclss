/**
 * Get the ith digit of a number N
 * @param  {integer} N [description]
 * @param  {integer} i [description]
 * @return {+integer}   [description]
 */
function getDigit(N, i) {
  return Math.floor((Math.abs(N) / (10 ** i)) % 10);
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0
