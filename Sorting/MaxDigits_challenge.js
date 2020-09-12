/**
 * Gets the number of digits in a number
 * @param  {integer} N [description]
 * @return {+integer}   [description]
 */
function digitCount(N) {
  if (N === 0) return 1;
  return Math.floor(Math.log10(Math.abs(N))) + 1;
}

/**
 * returns the maximum digits in an array
 * @param  {array} A [description]
 * @return {+integer}   [description]
 */
function maxDigits(A) {
  return digitCount(Math.max(...A));
}

console.log(maxDigits([1, 123, 1321]));
