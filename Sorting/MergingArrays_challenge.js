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

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
