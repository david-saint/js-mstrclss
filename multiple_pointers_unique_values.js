function uniqueValues(arr) {
  // solve for the zero cases first
  if (arr.length < 1) return null;
  if (arr.length < 2) return arr;

  // Initialize the pointers.
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    // if the ith element is different from the jth element move i up and set it's value to the the jth element
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
    // Move j up
    j += 1;
  }
  // remove the duplicates
  arr.splice(i + 1, j);

  // return the array of unique values
  return arr;
}

console.log(uniqueValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6])); // [1, 2, 3, 4, 5, 6]
