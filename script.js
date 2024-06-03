// 1-masala

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const myArray = [1, 2, 3, 4, 5];
// const result = sumArray(myArray);
// console.log(result); 

// 2-masala

// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


// const myArray = [1, 2, 3, 4, 5];
// const result = findMax(myArray);
// console.log(result); 

// 3-masala

// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }


// const myArray = [1, 2, 3, 4, 5];
// const result = findMin(myArray);
// console.log(result); 

// 4-masala

// function manfiySon(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = Math.abs(arr[i]);
//         }
//     }
//     return arr;
// }

// const myArray = [-1, 2, -3, 4, -5];
// const result = manfiySon(myArray);
// console.log(result);

// 5-masala

// function doubleArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }


// const myArray = [1, 2, 3, 4, 5];
// const result = doubleArr(myArray);
// console.log(result); 

// 6-masala

// function removeEvenNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// const myArray = [1, 2, 3, 4, 5, 6];
// const result = removeEvenNumbers(myArray);
// console.log(result);

// 7-masala

// function removeOddNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             arr.splice(i, 1);
//             i--; 
//         }
//     }
//     return arr;
// }


// const myArray = [1, 2, 3, 4, 5, 6];
// const result = removeOddNumbers(myArray);
// console.log(result); 

// 8-masala

// function isElementInArray(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }

// const myArray = [1, 2, 3, 4, 5];
// const element = 3;
// const isPresent = isElementInArray(myArray, element);
// console.log(isPresent); 

// 9-masala

// function reverseArray(arr) {
//     const reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     return reversedArray;
// }

// const myArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(myArray);
// console.log(reversedArray); 


// 10-masala

// function findGreaterElements(arr, value) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > value) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// const myArray = [1, 5, 10, 15, 20];
// const value = 10;
// const greaterElements = findGreaterElements(myArray, value);
// console.log(greaterElements); 

// 11-masala

// function incrementArray(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + 1);
//     }
//     return result;
// }

// const myArray = [1, 2, 3, 4, 5];
// const incrementedArray = incrementArray(myArray);
// console.log(incrementedArray); 

// 12-masala

// function findElementIndex(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }
//     return -1; 
// }

// const myArray = [10, 20, 30, 40, 50];
// const elementToFind = 30;
// const index = findElementIndex(myArray, elementToFind);
// console.log(index); 

// 13-masala

// function findElementOccurrences(arr, value) {
//     const indices = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             indices.push(i);
//         }
//     }
//     return indices.length;
// }

// // Misol uchun foydalanish:
// const myArray = [1, 2, 2, 3, 2, 4, 5, 2];
// const valueToFind = 2;
// const occurrences = findElementOccurrences(myArray, valueToFind);
// console.log(occurrences); 

// 14-masala

// function filterPositiveNumbers(arr) {
//     const positiveNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveNumbers.push(arr[i]);
//         }
//     }
//     return positiveNumbers;
// }

// const myArray = [-2, 3, -5, 7, 0, 8, -10];
// const positiveArray = filterPositiveNumbers(myArray);
// console.log(positiveArray); 

// 15-masala

// function filterNegativeNumbers(arr) {
//     const negativeNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             negativeNumbers.push(arr[i]);
//         }
//     }
//     return negativeNumbers;
// }

// const myArray = [-2, 3, -5, 7, 0, 8, -10];
// const negativeArray = filterNegativeNumbers(myArray);
// console.log(negativeArray); 

// 16-masala

// function reverseArray(arr) {
//     const lastIndex = arr.length - 1;
//     for (let i = 0; i < arr.length / 2; i++) {
//         const temp = arr[i];
//         arr[i] = arr[lastIndex - i];
//         arr[lastIndex - i] = temp;
//     }
//     return arr;
// }

// const myArray = [1, 2, 3, 4, 5];
// reverseArray(myArray);
// console.log(myArray); 

// 17-masala

// function squareArray(arr) {
//     const squaredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         squaredArray.push(arr[i] ** 2);
//     }
//     return squaredArray;
// }

// const myArray = [1, 2, 3, 4, 5];
// const squaredArray = squareArray(myArray);
// console.log(squaredArray); 

// 18-masala

// function copyArray(arr) {
//     const copiedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         copiedArray.push(arr[i]);
//     }
//     return copiedArray;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const newArray = copyArray(originalArray);
// console.log(newArray); 

// 19-masala

// function sumAndAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     const average = sum / arr.length;
//     return { sum, average };
// }

// const myArray = [1, 2, 3, 4, 5];
// const result = sumAndAverage(myArray);
// console.log(result.sum); 
// console.log(result.average); 

// 20-masala

// function removeDuplicates(arr) {
//     const uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueArray.indexOf(arr[i]) === -1) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// const myArray = [1, 2, 2, 3, 4, 4, 5];
// const resultArray = removeDuplicates(myArray);
// console.log(resultArray); 
