function checkPart(part) {
  const reversedString = (str) => str.split('').reverse().join('');
  const isPalindrome = (str1, str2) => str1 === str2;
  const removeLetter = (str, index) => {
    // convert the string to an array of characters
    const chars = str.split('');

    // remove the character at the specified index
    chars.splice(index, 1);

    // convert the array of characters back to a string and return it
    return chars.join('');
  };

  if (reversedString(part) === part) return true;

  for (let i = 0; i < part.length; i++) {
    const removedLetterStr = removeLetter(part, i);
    const reversedRemovedLetterStr = reversedString(removedLetterStr);

    if (isPalindrome(reversedRemovedLetterStr, removedLetterStr)) return true;
  }
  return false;
}

// function checkPart(part) {
//   // helper function to check if a string is a palindrome
//   const isPalindrome = (str) => {
//     const reversedString = str.split('').reverse().join('');
//     return reversedString === str;
//   };

//   // helper function to remove a character from a string
//   const removeLetter = (str, index) => {
//     const chars = str.split('');
//     chars.splice(index, 1);
//     return chars.join('');
//   };

//   if (isPalindrome(part)) return true;

//   // create an array of strings with one letter removed from the original string
//   const removedLetterStrs = [];
//   for (let i = 0; i < part.length; i++) {
//     removedLetterStrs.push(removeLetter(part, i));
//   }

//   // return true if any of the removed letter strings are palindromes
//   return removedLetterStrs.some(isPalindrome);
// }
