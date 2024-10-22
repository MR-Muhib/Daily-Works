// x = 20;
// y = 10;
// z = x + y;
// console.log(z);

// user = 20;

// var this is a global scope
// let
// const

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// // console.log("This is a I" + " " + i);
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let x = 10;
// let y = 5
// console.log(x+=y)

// const isloggedIn = false;

// console.log(isloggedIn ? "wellcome" : "Get out");
// console.log(isloggedIn && console.log("heello world"));

// const a = 5;
// const b = 10;
// console.log(a < 0 || b < 0);
// const a = 5;
// const b = 10;

// console.log(a < 0 || b < 0); ///or operator
// console.log(a < 0 || b < 0);

// const updateTime = () => {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const fulldate = `: ${month}-${day} -${year}`;
//   const updatalfulldate = `: ${month}/${day} /${year}`;
//   console.log(updatalfulldate);
//   console.log(fulldate);
// };
// updateTime();

// const x = 5;
// const y = 6;
// const z = 7;

// const s = (x + y + z) / 2;
// var area = Math.sqrt(s * ((s - x) * (s - y) * (s - z)));
// console.log(area);

//

// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const age = [32, 30, 40, 60, 80, 100];

// const filteredAge = age.filter((item) => item < 40);
// console.log(filteredAge);

// const findage = age.find((item) => item >= 40);
// console.log(findage);

// const findindex = age.findIndex((age) => age > 60);
// console.log(age[1]);

// const finelast = age.findLast((age) => age > 60);

// console.log(finelast);

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const arrayflat = myArr.flat(1);
// console.log(arrayflat);
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 10);
// console.log(newArr);
// let text = "";
// const frouts = ["apples", "banana", "orenzo", "jackford"];

// let text = "ABCDEFG";
// const myArr = Array.from(text);
// console.log(myArr);
// const text = "ABCDEFG1234567890";
// const myArr = Array.from(text);
// console.log(myArr);
// const frouts = ["apples", "banana", "orenzo"];
// let index = frouts.indexOf("text");
// console.log(index);
// let fruits = Array.of("Banana", "Orange", "Apple", "Mango");
// console.log(fruits);

// const fruits = ["banana", "orange", "apple", "mango"];
// fruits.pop();
// console.log(fruits);

// --------------Prototype functions ---------------->
// Array.prototype.myUcase = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// // Use the method on any array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newarray = fruits.myUcase();
// console.dir(newarray);
// function leapyear (year) {
//   return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;

// }
// console.log(leapyear(2016))
// console.log(leapyear(2020))
// console.log(leapyear(2024))
// console.log(leapyear(2025))
// console.log(leapyear(20226))

// for (var year = 2014; year <= 2050; year++) {
//   let date = new Date(year, 0, 1);
//   if (date.getDay() === 0) {
//     console.log(year);
//   }
// }

// for (var year = 2014; year <= 2050; year++) {
//   let date = new Date(year, 0, 1);
//   if (date.getDay() === 2) {
//     console.log(year);
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let fulldate = `${month}-${day}-${year}`;
//     console.log(fulldate);
//   }
// }
