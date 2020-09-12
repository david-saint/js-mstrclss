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
function InsertionSort(A) {
  for (let i = 1; i < A.length; i += 1) {
    let j;
    const v = A[i];
    for (j = i - 1; j >= 0 && A[j] > v; j -= 1) {
      A[j + 1] = A[j];
    }
    A[j + 1] = v;
  }
  return A;
}


const arr = generateArrayOf(20);

console.log(InsertionSort(arr));
