function SearchRecursive(A, V) {
  let index = 0;

  (function indexOf(arr, val) {
    if (arr[0] === val) return index + 1;
    if (arr.length === 0) {
      index = -1;
      return false;
    }
    index += 1;
    return indexOf(arr.slice(1, arr.length), val);
  })(A, V);

  return index;
}

function Search(A, V) {
  for (let i = A.length - 1; i >= 0; i -= 1) {
    if (A[i] === V) return i;
  }
  return -1;
}

console.log(Search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
