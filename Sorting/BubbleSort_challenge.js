/**
 * Generates an array of N elements.
 * @param  {integer} N
 * @return {array}
 */
function generateArrayOf(N) {
  const A = [];

  for (let i = N; i >= 0; i -= 1) {
    A.push(Math.floor(Math.random() * 100));
  }

  return A;
}

/**
 * Should sort an unsorted array.
 * @param {array} A unsorted array
 * @return {array} A sorted.
 */
function BubbleSort(A) {
  for (let i = A.length - 1; i >= 0; i -= 1) {
    let noSwap = true;
    for (let j = 0; j < i; j += 1) {
      if (A[j] > A[j + 1]) {
        [A[j + 1], A[j]] = [A[j], A[j + 1]];
        noSwap = false;
      }
      console.log(A);
    }
    if (noSwap) break;
  }
  return A;
}


const arr = generateArrayOf(10);

console.log(BubbleSort(arr));
