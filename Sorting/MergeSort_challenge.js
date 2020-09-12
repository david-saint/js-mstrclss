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
 * Function to supposedly merge 2 sorted arrays
 * @param  {array} A [description]
 * @param  {array} B [description]
 * @return {array}   A and B merged
 */
function merge(A, B) {
  const Arr = [];
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] <= B[j]) { Arr.push(A[i]); i += 1; } else { Arr.push(B[j]); j += 1; }
  }

  while (i < A.length) { Arr.push(A[i]); i += 1; }
  while (j < B.length) { Arr.push(B[j]); j += 1; }

  return Arr;
}

/**
 * Supposed to sort an array by dividing it into
 * halves recursively. ¯\_(ツ)_/¯
 * @param {array} A [an unsorted array]
 * @return {array} sorted 😎
 */
function MergeSort(A) {
  // Solve for base case
  if (A.length <= 1) return A;
  // We nee to divide the array into 2, so we find the middle.
  const middle = Math.floor(A.length / 2);
  // merge the resulting halves
  return merge(
    MergeSort(A.slice(0, middle)),
    MergeSort(A.slice(middle)),
  );
}

console.log(MergeSort(generateArrayOf(99)));
