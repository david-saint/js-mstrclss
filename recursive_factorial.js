function factorial(N) {
  if (N === 2) return 2;
  return N * factorial(N - 1);
}

console.log(factorial(5));
