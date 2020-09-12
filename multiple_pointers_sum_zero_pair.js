function sumZeroPair(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    // If the sum is exactly 0 then we've found the answer
    if (sum === 0) return [arr[left], arr[right]];

    if (sum > 0) right -= 1;
    else left += 1;
  }

  return undefined;
}

console.log(sumZeroPair([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
