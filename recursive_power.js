function power(N, pow) {
  // solve for base
  if (pow === 0) return 1;
  return N * power(N, pow - 1);
}

console.log(power(9, 19));
