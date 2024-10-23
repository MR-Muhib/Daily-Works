

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
