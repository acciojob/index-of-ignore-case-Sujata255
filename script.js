function indexOfIgnoreCase(str, subStr) {
  if (subStr.length === 0) {
    return 0;
  }

  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  for (let i = 0; i <= lowerStr.length - lowerSubStr.length; i++) {
    if (lowerStr.substring(i, i + lowerSubStr.length) === lowerSubStr) {
      return i;
    }
  }

  return -1;
}

console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output:   
 -1