// function reverseString(str) {
//   let reversedStr = ''

//   for (let i=str.length-1; i > -1; --i) {
//     reversedStr += str[i]
//   };

//   return reversedStr
// }


//converting to an array-not the cleanest method
// function reverseString(str) {

//   const backwardsString = [];
//   const totalItems = str.length -1;
//   for (let i = totalItems; i>=0; --i) {
//     backwardsString.push(str[i])
//   }

//   return backwardsString.join('');

// }

//3rd way thats clean but they might not want this
const reverseString = (str) => {
  return str.split('').reverse().join('')
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