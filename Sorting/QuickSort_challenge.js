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
 * Partitions an array by picking its first
 * element as the pivot.
 * @param  {array} A [description]
 * @return {array}  The partitioned array
 */
function partition(A, start = 0, end = A.length) {
  // let's pick the first element as the pivot.
  const pivot = A[start];
  // the number of elements less than the pivot.
  let np = start;
  // Loop through the array.
  for (let i = start + 1; i < end; i += 1) {
    // if the ith index is less than the pivot
    if (A[i] < pivot) {
      // increment the np
      np += 1;
      // then swap the ith elemnt with the element at the np index
      [A[i], A[np]] = [A[np], A[i]];
    }
  }
  // Swap the pivot to it's place.
  [A[start], A[np]] = [A[np], A[start]];
  // return the array partitioned. 😎
  return np;
}

/**
 * [QuickSort description]
 * @param {array} A [description]
 * @return {array}
 */
function QuickSort(A, left = 0, right = A.length) {
  if (left < right - 1) {
    const pivotIndex = partition(A, left, right);
    // left
    QuickSort(A, left, pivotIndex);
    // right
    QuickSort(A, pivotIndex + 1, right);
  }
  return A;
}

console.log(QuickSort(generateArrayOf(20)));
