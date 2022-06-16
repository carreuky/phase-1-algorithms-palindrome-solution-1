  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  }
  // fuction to reverse word
  function reverseString(word) {
    return word.split("").reverse().join("");
  }

/* 
  Add your pseudocode here
  // reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  I have a function called reverseWord that split the string to an array and the reverse the array.
  the join function joins the array to an array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
