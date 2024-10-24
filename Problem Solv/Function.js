// Problem 1:

// function batsMan(runs, balls) {
//   return parseFloat((runs / balls) * 100).toFixed(2);
// }

// const result = batsMan(45, 30);
// const result2 = batsMan(100, 60);
// const result3 = batsMan(25, 40);
// console.log(result, result2, result3);

// function MyFunction(args) {
//   let arr = args.split("");

//   let count = 0;
// arr.forEach((element) => {
//   if (element % 2 === 0) {
//     count++;
//   }
// });
// return count;
//   arr.filter((item) => {
//     if (item % 2 === 0) {
//       count++;
//     }
//   });
//   return count;
// }
// const result = MyFunction("a1b2c3d4e5f6");
// const result2 = MyFunction("x1y2z3");
// const result3 = MyFunction("a2b2c2d2");
// console.log(result, result2, result3);

//Problem 3:

// function ResevedString(str) {
//   let resuved = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     resuved += str[i];
//   }
//   console.log(resuved);
// }
// ResevedString("hello");

//Problem 4:
// function isPalindrome(palin) {
//   let firstChild = palin.at(); // find first text
//   let lastChild = palin[palin.length - 1]; //find last string

//   if (firstChild === lastChild) return true;
//   else return false;
// }
// const result = isPalindrome("pop");
// console.log(result);

//Problem 5:

// function mergeArrays(arr1, arr2) {
//   const newArr = [];
//   newArr.push(...arr1, ...arr2);
//   return newArr.sort((a, b) => a - b);
// }
// const result = mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

// console.log(result);

// Problem 5: anoter away!

// function mergeArrays(arr1, arr2) {
//   const newArr = [];

//   arr1.forEach((element) => {
//     newArr.push(element);
//   });

//   arr2.forEach((element) => {
//     newArr.push(element);
//   });
//   return newArr.sort((a, b) => a - b);
// }
// const result = mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

// console.log(result);

// function findShortestWord(sentence) {
//   let cleanSecntence = sentence.replace(/[^\w\s]/g, "");
//   let word = cleanSecntence.split(" ");

//   let sortWords = word[0];
//   for (let i = 1; i < word.length; i++) {
//     if (word[i].length < sortWords.length) {
//       sortWords = word[i];
//     }
//   }
//   return sortWords;
// }
// const result = findShortestWord("Hello world");
// const result2 = findShortestWord("The quick brown fox jumps over the lazy dog");
// const result3 = findShortestWord("Today is Monday");
// console.log(result, result2, result3);

// Problem 7:

// function removeDuplicates(studentNames) {
//   const uniqueNames = [...new Set(studentNames)];
//   return uniqueNames;
// }
// const studentNames = [
//   "Zara",
//   "Sadia",
//   "Mahin",
//   "Adnan",
//   "Maisha",
//   "Adnan",
//   "Faiyaz",
// ];
// const result = removeDuplicates(studentNames);
// console.log(result);

// function removeDuplicates(studentNames) {
//   const unikName = studentNames.filter((name, index) => {
//     return studentNames.indexOf(name) === index;
//   });

//   return unikName;
// }
// const studentNames = [
//   "Zara",
//   "Sadia",
//   "Mahin",
//   "Adnan",
//   "Maisha",
//   "Adnan",
//   "Faiyaz",
// ];
// const result = removeDuplicates(studentNames);
// console.log(result);

// Problem 8:

/* // Initialize arrays to store book data
let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

// Function to create a new book entry
function createBookList(bookTitle, authorName, copies) {
    bookTitles.push(bookTitle);
    authorNames.push(authorName);
    copiesAvailable.push(copies);
}

// Function to add copies to a specific book
function addCopies(bookTitle, copiesToAdd) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        copiesAvailable[index] += copiesToAdd;
        console.log(`Updated number of copies available for "${bookTitle}" to ${copiesAvailable[index]}.`);
    } else {
        console.log(`Book titled "${bookTitle}" not found.`);
    }
}

// Function to sell a number of copies of a book
function sellBook(bookTitle, copiesToSell) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        if (copiesAvailable[index] >= copiesToSell) {
            copiesAvailable[index] -= copiesToSell;
            console.log(`Updated number of copies available for "${bookTitle}" to ${copiesAvailable[index]}.`);
        } else {
            console.log(`Not enough copies of "${bookTitle}" to sell.`);
        }
    } else {
        console.log(`Book titled "${bookTitle}" not found.`);
    }
}

// Function to get details of all books
function getDetails() {
    for (let i = 0; i < bookTitles.length; i++) {
        console.log(`"${bookTitles[i]}" by "${authorNames[i]}" - Number of copies available: ${copiesAvailable[i]}`);
    }
}

// Sample Input and Execution

// Creating a book list
createBookList('Bohubrihi', 'Humayun Ahmed', 10);

// Add copies to a book
addCopies('Bohubrihi', 5); // Updates number of copies to 15

// Sell some copies of a book
sellBook('Bohubrihi', 3); // Updates number of copies to 12

// Get details of all books
getDetails();
 */

// function add(...params) {
//   let allNumbers = true;
//   let result = 0;

//   for (const param of params) {
//     if (isNaN(param)) {
//       allNumbers = false;
//       break;
//     }
//   }

//   if (allNumbers) {
//     result = params.reduce((sum, num) => sum + Number(num), 0);
//   } else {
//     result = params.join(" ");
//   }

//   return result;
// }

// const result = add("21", "24", "40");
// const result2 = add("Hello", "Alpha");
// const result3 = add("Summer", "2022");
// console.log(result, result2, result3);

// Problem 10:

/* function getPositiveNumbers(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) result.push(num[i]);
  }

  return result;
}

const inputNumber = [2, -5, 10, -3, 8, -1, 0, 7];
const result = getPositiveNumbers(inputNumber);
console.log(result); */

// /Problem 11:
/* function findMissingNumber(num) {
  const maxNum = Math.max(...num);
  const expectedSum = (maxNum * (maxNum + 1)) / 2;

  const actualSum = num.reduce((acc, val) => acc + val, 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

const result = findMissingNumber([1, 2, 3, 5, 6, 7, 8]);
console.log(result); */

// Problem 12:

/* function getMaxProduct(...params) {
  const result = [];

  for (const param of params) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < param.length; i++) {
      for (let j = i + 1; j < param.length; j++) {
        const product = param[i] * param[j];
        if (product > maxProduct) maxProduct = product;
      }
    }
    result.push(maxProduct);
  }
  return result;
}
const productArr = [2, 3, 5, 6, 7];
const result = getMaxProduct(productArr);
console.log(result);
 */

/* function getMaxProduct(...params) {
  for (const param of params) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < param.length; i++) {
      for (let j = i + 1; j < param.length; j++) {
        const product = param[i] * param[j];
        if (product > maxProduct) maxProduct = product;
      }
    }

    return maxProduct;
  }
}
const productArr = [2, 3, 5, 6, 7];
const result = getMaxProduct(productArr);
console.log(result); */

//Problem 13:

/* function findPrimeNumbers() {
  let primeNumbers = [];
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}
const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findPrimeNumbers(inputArray);

console.log(result); // Output: [2, 3, 5, 7]
 */
/* 
function findPrimeNumbers(params) {
  let primeNumbers = [];

  for (let i = 2; i <= params.length; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}
const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findPrimeNumbers(inputArray);

console.log(result); // Output: [2, 3, 5, 7] */

/* function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);

    let leftSide = "";
    for (let j = 1; j <= i; j++) {
      leftSide += "*";
    }

    let rightSide = "";
    for (let j = i - 1; j >= 1; j--) {
      rightSide += "*";
    }

    console.log(spaces + leftSide + rightSide);
  }
}
printTriangle(5);
 */

/* function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= rows - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
  
}
printTriangle(5); */

// function printTriangle(rows) {
//   for (let i = 0; i <= rows; i++) {
//     let row = ""; // row number of the triangle
//     for (let j = 0; j < rows - i; j++) {
//       row += " "; // add spaces before stars
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//       row += "*"; // add stars
//     }
//     console.log(row);
//   }
// }
// printTriangle(5);
