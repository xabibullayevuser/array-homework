//73-masala

// function calculateBoxSize(height, width, length) {
//     if (isNaN(height) || isNaN(width) || isNaN(length)) {
//       return "Raqam kiriting: ";
//     }

//     const size = height * width * length;
  
//     return `Qutining hajmi: ${size}`;
//   }
  
//   const height = parseFloat(prompt("Qutining balandligini kirgizing:"));
//   const width = parseFloat(prompt("Qutining enini kirgizing:"));
//   const length = parseFloat(prompt("Qutining uzunligini kirgizing:"));

//   const result = calculateBoxSize(height, width, length);
//   console.log(result);

//74-masala

// function separateNumbers(number1, number2, arr) {
//     if (typeof number1 !== "number" || typeof number2 !== "number" || !Array.isArray(arr)) {
//       throw new Error("Input:");
//     }

//     if (number1 >= number2) {
//       throw new Error("Num1 Num2.");
//     }

//     const filteredNumbers = arr.filter(num => num > number1 && num < number2);
  
//     return filteredNumbers;
//   }

// const myArray = [1,2,3,78];
// const num1 = 7;
// const num2 = 32;

// try {
//   const filteredArray = separateNumbers(num1, num2, myArray);
//   console.log("Array:", filteredArray); // Console: Array: [ 5, 4, 7 ]
// } catch (error) {
//   console.error("Error:", error.message);
// }

//83-masala
// function areWordsEqual(words1, words2) {
//     if (typeof words1 !== "string" || typeof words2 !== "string") {
//       throw new Error("Invalid input: word1 and word2 must be strings.");
//     }
  
//     const lowerWord1 = word1.toLowerCase();
//     const lowerWord2 = word2.toLowerCase();
  
//     return lowerWord1 === lowerWord2;
//   }
//   const word1 = "motive";
//   const word2 = "emotive";
  
//   const areEqual = areWordsEqual(word1, word2);
//  console.log("So'zlar to'g'rimi?:", areEqual); //console: False

//84-masala
// function getWordLength(word) {
//     // Validate input type
//     if (typeof word !== "string") {
//       throw new Error("Invalid input: word must be a string.");
//     }
  
//     let charCount = 0;
//     for (let char of word) {
//       charCount++;
//     }
  
//     return charCount;
// }
// const myWord = "HelloWorld";
// const wordLength = getWordLength(myWord);
//console.log("Bu so'z", myWord, "-", wordLength); // console: Bu so'z: 10

//86-masala
// function multiplyByTwo(arr) {
//     if (!Array.isArray(arr)) {
//       throw new TypeError("Must be an array");
//     }
  
//     const doubledElements = [];
  
//     for (const element of arr) {
//       doubledElements.push(element * 2);
//     }
  
//     return doubledElements;
//   }
  
//   const numbers = [2, 5, 3];
//   const doubledNumbers = multiplyByTwo(numbers);
//   console.log(doubledNumbers); // Console: [4, 10, 6]
  
//87-masala

// function wordLengths(words) {
//     if (!Array.isArray(words)) {
//       throw new TypeError("Barcha so'zlar Array...");
//     }
  
//     const wordLengthsArray = [];
  
//     wordLengthsArray.push(...words.map(word => word.length));
  
//     return wordLengthsArray;
//   }
//   const words = ["hello", "world"];
//   const wordLengthsArray = wordLengths(words);
//  console.log(wordLengthsArray); //console; [5, 5]

//95-masala

// function sumNestedArray(arr) {
//     if (!Array.isArray(arr)) {
//       throw new TypeError("Input must be an array.");
//     }
  
//     function sumElements(element) {
//       if (Array.isArray(element)) {
//         return sumElements(element.reduce((acc, val) => acc.concat(val), []));
//       } else {
//         return element;
//       }
//     }
  
//     const flattenedArray = arr.reduce((acc, val) => acc.concat(sumElements(val)), []);
  
//     const totalSum = flattenedArray.reduce((acc, num) => acc + num, 0);
  
//     return totalSum;
//   }
  
//   const nestedArray = [2, 4, 7];
//   const sum = sumNestedArray(nestedArray);
//  console.log("Barcha elementlar yeg'indisi:", sum); //console: yeg'indi 13
  
  