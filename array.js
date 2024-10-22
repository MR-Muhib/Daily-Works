// let users = [
//   ["muhib", 23, "React"],
//   ["sumit", 23, "TailwindCss"],
//   ["setu", 23, "JavaScript"],
// ];

// users.push("Helal");
// users.pop("Muhib"); delete
// users.unshift('rahat');
// users.shift("Habib"); //delete first array
// console.log(users);
// console.log(users);
// users.forEach((user) => {
//   user.forEach((use) => {
//     console.log(use);
//   });
// });

// for (const user of users) {
//   for (const child of user) {
//     console.log(child);
//   }
// }

// for (let i = 0; i < users.length; i++) {
//  for(let x = 0; x<users[i].length; x++){
//   console.log(users[i][x])
//  }
// }

// const
// let
// var

// const users = [
//   ["Samsul", 24, "Bangla"],
//   ["Mintu", 23, "English"],
// ];

// for (const user of users) {
//   for (const use of user) {
//     console.log(use);
//   }
// }

// for (let i = 0; i < users.length; i++) {
//   for (let j = 0; j < users[i].length; j++) {
//     console.log(users[i][j]);
//   }
// }

// const users = [
//   { name: "Samsul Islam", age: 24, language: ["Bangla", "English"] },
//   { name: "Muhibur Rahman", age: 24, language: ["Hindi", "English"] },
// ];

// users.map((user) => {
//   console.log(user.name);
// });

// export default {
//   methods: {
//     cool() {
//       return () => {};
//     },
//   },
// };

// const arr = [20, 60, 80, -60, -90, 40, 12, 600, 81, 1];

// const smallnum = arr.reduce(
//   (prevValue, currentValue) =>
//     currentValue < prevValue ? currentValue : prevValue,
//   arr[0]
// );
// console.log(smallnum);

// const smallestNumber = Math.min(...arr);
// console.log(smallestNumber);

// const smallest = arr.slice().sort((prevValue, currentValue) => {
//   return prevValue - currentValue;
// });
// console.log(smallest[0]);

// const otp = () => {
//   // const characters =
//   //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   // let result = "";
//   // for (let i = 0; i < 6; i++) {
//   //   result += characters.charAt(Math.floor(Math.random() * characters.length));
//   // }
//   // return result;
//   // return Math.floor(100000 + Math.random() * 900000); // Generate 6 digit OTP between 100000 and 999999

//   return Math.floor(Math.random() * 9000); // Generate 6 digit OTP between 0 and 999999
// };

// console.log(otp());

// const arr = [1, 2, 3, 4, 5, 6, 7];

// try {
//   arr.forEach((num) => {
//     console.log(num);
//     if (num === 3) {
//       // arr.length = 0;
//       throw new Error("hello world!");
//     }
//   });
// } catch (error) {
//   console.log(error);
// }
// ! not solved this problem
// const person = [
//   { id: 101, age: 20, name: "Shohag", city: "pabna" },
//   { id: 102, age: 22, name: "Shadhon", city: "faridpur" },
//   { id: 103, age: 20, name: "Sajib", city: "jhenaidah" },
//   { id: 104, age: 21, name: "Samad", city: "kushtia" },
//   { id: 105, age: 19, name: "Nazmul", city: "pabna" },
// ];
// function BigDataFind(accept = "Not Found") {
//   for (let el = 0; el < person.length; el++) {
//     if (person[el].age == accept || person[el].city == accept || person[el].name == accept){
//       return
//     }
// }

// const arr = [1, 2, 3, 10, 8, 7, 81, 4, 5, 6, 501];

// // <------------------------------->
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

// // <------------------------------->
// for (const array in arr) {
//   if (array % 2 == 0) {
//     console.log(array);
//   }
// }
