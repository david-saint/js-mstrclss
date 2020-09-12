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
function SelectionSort(A) {
  // Create a loop from 0 to the end of the array
  for (let i = 0; i < A.length; i += 1) {
    let min = i;
    // create another loop from i to the end of the array
    for (let j = A.length - 1; j > i; j -= 1) {
      // store the min of A[j] in to a variable placed in the upper loop.
      if (A[j] < A[min]) min = j;
    }
    // swap the min ish
    if (i !== min) [A[i], A[min]] = [A[min], A[i]];
  }
  return A;
}


const arr = generateArrayOf(10);

console.log(SelectionSort(arr));
