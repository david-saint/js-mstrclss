function ValidAnagram(str1, str2) {
  // Check for the Zero Cases first
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;

  // Create the frequency tables for both str1 and str2
  const table1 = {};
  const table2 = {};

  for (let i = 0; i < str1.length; i += 1) {
    table1[str1[i]] = table1[str1[i]] + 1 || 1;
    table2[str2[i]] = table2[str2[i]] + 1 || 1;
  }

  // loop through the keys of one table and make sure it matches on the others
  let ret = true;

  Object.keys(table1).forEach((k) => {
    // if the key doesn't exist in the other table
    if (!(k in table2)) ret = false;

    // if the key exists but they are of different sizes
    if (table1[k] !== table2[k]) ret = false;
  });

  return ret;
}

console.log(ValidAnagram('racecar', 'carrace')); // true
console.log(ValidAnagram('racecar', 'racecar')); // true
console.log(ValidAnagram('racecar', 'chasers')); // false
console.log(ValidAnagram('racecar', 'carr')); // false
console.log(ValidAnagram('', '')); // true
