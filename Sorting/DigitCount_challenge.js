/**
 * Gets the number of digits in a number
 * @param  {integer} N [description]
 * @return {+integer}   [description]
 */
function digitCount(N) {
  if (N === 0) return 1;
  return Math.floor(Math.log10(Math.abs(N))) + 1;
}

console.log(digitCount(1)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(341)); // 3
console.log(digitCount(1213)); // 4
