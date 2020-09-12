// Given a string S find the largest substring in it

function longestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(longestSubstring('HelloMyNigga')); // loMyNig 7
console.log(longestSubstring('davidsaint')); // avidsa 6
console.log(longestSubstring('tiwatope')); // iwatope | 7
console.log(longestSubstring('victoriously')); // riously | 7

// H
