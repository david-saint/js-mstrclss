// Given 2 strings S and s
// determine if s is a substring of S

function isSubstring(S, s) {
  // solve for zero cases
  if (s.length > S.length) return false;
  if (s === S) return true;
  if (s.length === 0) return null;
  if (S.length < 2) return false;

  // Sliding Window sustring
  for (let i = s.length; i < S.length; i += 1) {
    if (S.slice(i - s.length, i) === s) return true;
  }

  // Multiple Pointers subsequence
  // let i = 0;
  // let j = 0;

  // while (j < S.length) {
  //   if (S[j] === s[i]) i += 1;
  //   if (i === s.length) return true;
  //   j += 1;
  // }

  return false;
}

console.log(isSubstring('akldshackflkasdngserdlfkjdslhackrrkfdslkaghdssdklfjds', 'hacker'));
