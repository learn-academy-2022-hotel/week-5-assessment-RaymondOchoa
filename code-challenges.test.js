// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//Psuedocode: 
// Input: strings of coded words
// Output: strings of decoded words
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that utilizes the .replace method to swap letters obtained from the translatedLetters array if the letters match 
// use gi (global ignore) to be case insensitive
// console log the test and variables
// test should pass

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("decoder", () => {
    it ("takes in a string and returns a string with a coded message.", () => {
      expect(decoder(secretCodeWord1)).toEqual(["L4ck4d41s1c4l"]) 
      expect(decoder(secretCodeWord2)).toEqual(["G0bbl3dyg00k"])
      expect(decoder(secretCodeWord3)).toEqual(["3cc3ntr1c"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   decoder
//     ✕ takes in a string and returns a string with a coded message. (1 ms)

//   ● decoder › takes in a string and returns a string with a coded message.

//     ReferenceError: decoder is not defined

// b) Create the function that makes the test pass.

const translatedLetters = {
  A: 4,
  a: 4,
  E: 3,
  e: 3,
  I: 1,
  i: 1,
  O: 0,
  o: 0
}

const decoder = (string) => {
  return string.replace(/[aeio]/gi, (match) =>
      translatedLetters[match])
  }
console.log(decoder(secretCodeWord1))
console.log(decoder(secretCodeWord2))
console.log(decoder(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Psuedocode: 
// Input: array of words and strings of letters to check for
// Output: an array of the words that contain those letters
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that uses the .filter and .includes methods to check for words in the array that include the letter variables
// use .toLowerCase to be inclusive of letters that are lowercased 
// console log the test and variables
// test should pass

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("fruitChecker", () => {
    it ("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
      expect(fruitChecker(letterA)).toEqual(["Mango", "Apricot", "Peach"]) 
      expect(fruitChecker(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   fruitChecker
//     ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ● fruitChecker › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//     ReferenceError: fruitChecker is not defined

// b) Create the function that makes the test pass.

const fruitChecker = (array, letter) => {
    return array.filter((array) => array.toLowerCase().includes(letter))
}

console.log(fruitChecker(letterA))
console.log(fruitChecker(letterE))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

//Psuedocode: 
// Input: arrays of numbers
// Output: boolean values
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that uses the .sort method on the array to return a boolean value based on if there are pairs by using the indexes of th numbers in the array
// console log the test and variables
// test should pass


// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true


describe("cardChecker", () => {
  it ("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {
    expect(cardChecker(hand1)).toEqual(true) 
    expect(cardChecker(hand2)).toEqual([false])
    expect(cardChecker(hand3)).toEqual([false])
    expect(cardChecker(hand4)).toEqual([true])
  })
})
// b) Create the function that makes the test pass.

const cardChecker = (array) => {	
  array.sort()
	
  if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]) {
      return true
  } 
    else if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]) {
      return true
  } else {
      return false
  }

	}

  console.log(cardChecker(hand1))
  console.log(cardChecker(hand2))
  console.log(cardChecker(hand3))
  console.log(cardChecker(hand4))