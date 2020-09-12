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

console.log(partition([4, 8, 2, 1, 5, 7, 6, 3]));
