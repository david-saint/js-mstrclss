function isPalindrome(S) {
  if (S.length === 1) return true;
  if (S.length === 2) return (S[0] === S[1]);
  if (S[0] === S[S.length - 1]) return isPalindrome(S.slice(1, -1));
  return false;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('father')); // false
