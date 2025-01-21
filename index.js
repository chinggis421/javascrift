//  //let number = prompt("zuv bicheerei zaluu");
//  //let count = 5;

// //alert(`${number} event`);
// // let number = prompt("chinggis");
// // // // // // if (number % 4 == 0) {
// // // // // //   alert("even");
// // // // // // }else{
// // // // // //     alert("odd")
// // // // // // }
// // // // // const number = prompt("shalgaltiin dun");
// // // // // if (number >= 90 && number <= 100) {
// // // // //   alert("onts");
// // // // // }
// // // // // if (number >= 80 && number <= 89) {
// // // // //   alert("sain");
// // // // // }
// // // // // if (number >= 70 && number <= 79) {
// // // // //   alert("dahiad joohn hicheegerei");
// // // // // }
// // // // // if (number >= 60 && number <= 69) {
// // // // //   alert("muu");
// // // // // }
// // // // // if (number >= 0 && number <= 59) {
// // // // //   alert("huugduh erhiin bichig olgov");
// // // // // }
// // // // const month = prompt("seasons and month");
// // // // if (month == "september" || month == "october" || month == "november") {
// // // //   alert(`${month} is autumn season`);
// // // // }
// // // // if (month == "december" || month == "january" || month == "february") {
// // // //   alert(`{month} is winter season`);
// // // // }
// // // // if (month == "march" || month == "april" || month == "may") {
// // // //   alert(`${month} is spring season`);
// // // // }
// // // // if (month == "june" || month == "july" || month == "august") {
// // // //   alert(`${month} is summer season`);

// // // // }
// // // const day = Number(prompt("choose day)"));
// // // switch (day) {
// // //   case 1:
// // //     alert("monday");
// // //     break;
// // //   case 2:
// // //     alert("tuesday");
// // //     break;
// // //   case 3:
// // //     alert("wednesday");
// // //     break;
// // //   case 4:
// // //     alert("thursday");
// // //     break;
// // //   case 5:
// // //     alert("friday");
// // //     break;
// // //   case 6:
// // //     alert("saturday");
// // //     break;

// // //   default:
// // //     alert("sunday");
// // // }
// // for (let i = 1; (i = 10); i = i + 1) {
// //   console.log(i)

// // }
// let sum = 0;
// const n = prompt("niiler ol");
// // alert(sum);
// for (let i = 1; i <= n; i = i + 1) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log(sum);
// let str = "hello";
// let revereStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   revereStr = revereStr + str[i];
// }

// console.log(revereStr, str);
// let num = 5;
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(num + " * " + i + " = ", num * i);
// }

// for (let i = 1; i <= 10; i = i + 1) {
//   for (let k = 1; k <= 10; k = k + 1) {
//     console.log(i + " * " + k + " = ", i * k);
//   }
//   console.log("");
// }
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for

//   for (let k = 0; k < i; k++) {
//     stars += " * ";
//   }
//   console.log(stars);
// }

// ("        *");
// ("* *");
// ("* * *");
// ("* * * *");
// ("* * * * *");
// const star = 5;

// for (let a = 1; a <= 5; a++) {
//   let stars = " ";

//   for (let b = 5; b >= a; b--) {
//     stars += "* ";
//   }

//   console.log(stars);
// }
// 1-100 toonii sondgoi toonuudiin niilberiig ol
// "hello world!" string-iin tegsh index deerh usgiig uppercase bolgoh
// ect: e -> E
// n too palindmore too bol true ugui bol false gj hevle

// let sum = 0;

// for (let a = 1; a <= 100; a = a + 1) {
//   if (a % 2 !== 0) {
//     sum = sum + a;
//   }
// }

// let scores = [10, 20, 30, 40, 50];
// let sum = 0;
// let twosum = 0;
// for (let i = 0; i <= scores.length - 1; i++) {
//   scores[i] = scores[i] + 0;
//   sum = sum + scores[i];
//   twosum = scores[1] + scores[3];
// }
// scores.push(twosum);
// scores.push(sum);
// console.log(scores);
// console.log(sum);
// let fruits = ["Apple", "banana", "cherry", "date"];
// fruits.push("elderberry");
// fruits.push("tumuruuberry");
// fruits.push("chinggisberry");
// fruits[1] = "blueberry";
// console.log(fruits);
// const ispalindrome = function (x) {
//     for(let )
// };
// let num = 121;
// reverse = "";
// num = num.toString();
// for (i = num.length - 1; i >= 0; i--) {
//   reverse = reverse + num[i];
// }
// console.log(reverse);
// let array1  = [1,2,3];
// let array2 = [4,5,6];
// output => [1,2,3,4,5,6];
// let numbers1 = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// for (let i = 0; i < numbers2.length; i++) {
//   numbers1.push(numbers2[i]);
// }
// console.log(numbers1);
// let array1 = [2, 3, 4];
// let array2 = [5, 6, 7];
// let array3 = [];
// for (let i = 0; i < array2.length; i++) {
//   array3.push(array2[i] + array1[i]);
// }
// let elements = [2017, 2018, 2019];

// // for (let i = 0; i < elements.length; i++) {
// //   console.log(elements[i]);
// // }
// let sum = 0;
// let max = 0;
// let rev = [];

// for (let k = 0; k < elements.length; k++) {
//   sum = sum + elements[k];
// }
// console.log(sum);
// for (let c = 0; c < elements.length; c++) {
//   if (max < elements[c]) {
//     max = elements[c];
//   }
// }
// console.log(max);
// for (let a = elements.length - 1; a >= 0; a--) {
//   rev.push(elements[a]);
//   console.log(elements[a]);
// }
// console.log(rev);
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0;
let odd = 0;
for (let i = 0; i <= elements.length; i++) {
  if (elements[i] % 2) {
    even = even + 2;
    console.log(even);
  }
}
