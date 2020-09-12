// Given an array of numbers A, and a number N
// write a function to determine if the average of
// any 2 numbers in the array A is equal to the number N

function AveragePair(A, N) {
  // solve for the zero cases
  if (A.length === 0) return null;

  // initialize the multiple pointers
  let start = 0;
  let end = A.length - 1;

  while (start < end) {
    const avg = (A[start] + A[end]) / 2;

    if (avg === N) return true;
    if (avg > N) end -= 1;
    else start += 1;
  }

  return null;
}

console.log(AveragePair([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 12));
