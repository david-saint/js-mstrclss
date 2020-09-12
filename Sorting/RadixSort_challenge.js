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

/**
 * Get the ith digit of a number N
 * @param  {integer} N [description]
 * @param  {integer} i [description]
 * @return {+integer}   [description]
 */
function getDigit(N, i) {
  return Math.floor((Math.abs(N) / (10 ** i)) % 10);
}

/**
 * Generates an array of N elements.
 * @param  {integer} N
 * @param {integer} I numbers between 0 and 10^i
 * @return {array}
 */
function generateArrayOf(N, I = 2) {
  const A = [];
  for (let i = N; i >= 0; i -= 1) {
    A.push(Math.floor(Math.random() * (10 ** I)));
  }
  return A;
}

/**
 * Sorts by creating buckets of digits
 * rcontinuously
 * @param {[type]} A [description]
 */
function RadixSort(A) {
  let Arr = A;
  const md = maxDigits(Arr);
  for (let k = 0; k < md; k += 1) {
    const db = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < Arr.length; i += 1) {
      db[getDigit(Arr[i], k)].push(Arr[i]);
    }
    Arr = [].concat(...db);
    console.log(Arr);
  }
  return Arr;
}

console.log(RadixSort(generateArrayOf(40, 4)));
