function MaxSubArraySum(arr, num) {
  // solve for the zero cases
  if (num < 1) return null;
  if (arr.length < num) return null;
  if (num === 1) return Math.max(...arr);

  // get the first num sum
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i += 1) {
    maxSum += arr[i];
  }

  // loop through the arr and create a window of num elements, then update maxSum.
  tempSum = maxSum;
  for (let i = num; i < arr.length; i += 1) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(MaxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(MaxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(MaxSubArraySum([], 4)); // null
