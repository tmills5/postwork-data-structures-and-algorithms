function reverseString(str) {
  let reversedStr = ''

  for (let i=str.length-1; i > -1; --i) {
    reversedStr += str[i]
  };

  return reversedStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// start at the end and work backwards
// initialize new empty string
// take each letter and place them in a new string
// return that new string