// Works for only sorted lists

function Search(A, V) {
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    const avg = Math.floor((right + left) / 2);
    if (A[avg] > V) right = avg - 1;
    else if (A[avg] < V) left = avg + 1;
    else return avg;
  }
  return -1;
}

console.log(Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
