// //answer 1
// // iniput and print one number
// var num = Number(window.prompt(" Enter Your Number "));
// console.log(num);

// //answer 2
// // divide
// var num = Number(window.prompt("Enter Your Number "));
// if (num % 3 == 0 && num % 4 == 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// //answer 3
// //max number
// var num1 = Number(window.prompt("Enter First number"));
// var num2 = Number(window.prompt("Enter Scond number"));
// if (num1 > num2) {
//   console.log("num1");
// } else {
//   console.log("num2");
// }

// //answer 4
// // check if number is positive or negative
// var number = Number(window.prompt("Enter Your Number"));
// if (number > 0) {
//   console.log("The number is positive");
// } else if (number == 0) {
//   console.log("The number is zero");
// } else {
//   console.log("The number is negative");
// }

// //answer 5
// //iniput three number and print max number
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Scond Number"));
// var num3 = Number(window.prompt("Enter Third Number"));
// if (num1 > num2 && num1 > num3) {
//   console.log(" The Max Number = num1 ");
// } else if (num2 > num1 && num2 > num3) {
//   console.log(" The Max Number = num2 ");
// } else if (num3 > num1 && num3 > num2) {
//   console.log(" The Max Number = num3 ");
// }
// //answer 6 && //answer 7
// // a number is oven or odd
// var number = Number(window.prompt("Enter Your Number"));

// if (number % 2 == 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }

// //answer 8
// // program to check if a given character is vowel or consonant.
// var input = prompt("Enter a character ");
// function vowelOrConsonant(x) {
//   if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//     console.log("Vowel");
//   } else {
//     console.log("Consonant");
//   }
// }
// vowelOrConsonant(input);

// //answer 9
// // print all numbers between 1 to 5
// var userNumber = prompt("Enter Number");
// for (var i = 1; i <= userNumber; i++) {
//   console.log(i);
// }
// //answer 10
// // insert integer then print a multiplication table up to 12.
// var num = Number(window.prompt("Enter Your Number"));
// for (i = 1; i < 13; i++) {
//   console.log(num * i);
// }

// //answer 11
// // insert number and print all even numbers between 1 to this number
// for (i = 1; i <= 14; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// //answer 12
// //input two integers and print the power
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Scond Number"));
// var result = 1;
// for (i = 0; i < num2; i++) {
//   result = result * num1;
// }

// console.log(result);

// //answer 12
// var total = 0;
// for (var i = 0; i < 5; i++) {
//   total = total + Number(prompt("Enter mark of subject " + (i + 1)));
// }

// console.log("Total marks = " + total);
// console.log("Average Marks = " + total/5);
// console.log("Percentage = " + total/5);

// //answer 13
// //input and print number of days in that month
// var getDaysInMonth = function (month, year) {
//   return new Date(year, month, 0).getDate();
// };
// console.log(getDaysInMonth(1, 2022));

// //answer 14
// // input marks of five subjects and Computer, Find percentage and grade
// // Function for calculating grades
// const calculate = () => {
//   let phy = document.querySelector("#phy").value;
//   let chemistry = document.querySelector("#chemistry").value;
//   let biology = document.querySelector("#biology").value;
//   let maths = document.querySelector("#maths").value;
//   let computer = document.querySelector("#computer").value;
//   let grades = "";

//   let totalgrades =
//     parseFloat(phy) +
//     parseFloat(chemistry) +
//     parseFloat(biology) +
//     parseFloat(maths);
//   parseFloat(computer);

//   let percentage = (totalgrades / 500) * 100;
//   if (percentage <= 100 && percentage >= 90) {
//     grades = "A";
//   } else if (percentage <= 90 && percentage >= 80) {
//     grades = "B";
//   } else if (percentage <= 80 && percentage >= 70) {
//     grades = "C";
//   } else if (percentage <= 70 && percentage >= 60) {
//     grades = "D";
//   } else if (percentage <= 50 && percentage >= 40) {
//     grades = "E";
//   } else {
//     grades = "F";
//   }

//   if (
//     phy == "" ||
//     chemistry == "" ||
//     biology == "" ||
//     maths == "" ||
//     computer == ""
//   ) {
//     document.querySelector("#showdata").innerHTML =
//       "Please enter all the fields";
//   } else {
//     if (percentage < 40) {
//       document.querySelector(
//         "#showdata"
//       ).innerHTML = ` Out of 400 your total is ${totalgrades}
//             and percentage is ${percentage}%. <br>
//             Your grade is ${grades}. You are Pass. `;
//     } else {
//       document.querySelector(
//         "#showdata"
//       ).innerHTML = ` Out of 400 your total is ${totalgrades}
//             and percentage is ${percentage}%. <br>
//             Your grade is ${grades}. You are Fail. `;
//     }
//   }
// };

// // swith case between num 15 : num 20
// //answer 15 switch case
// // print total number of days in month
// var Month = Number(window.prompt(" Enter Your  Month ")) ;

// switch (Month) {
//   case 1:
//     console.log(31);
//     break;

  // case 2:
  //   "Month = February";

  // case 3:
  //   "Month = March";

  // case 4:
  //   "Month = April";

  // case 5:
  //   "Month = May";

  // case 6:
  //   "Month = June";

  // case 7:
  //   "Month = July";

  // case 8:
  //   "Month = August";

  // case 9:
  //   "Month = September";

  // case 10:
  //   "Month = October";

  // case 11:
  //   "Month = November";

  // case 12:
  //   "Month = December";
  //   document.getElementById("num").innerHTML = "total";
  //   break;
  // default:
  //   "Month = ";
// }


// //answer 16 switch case
// // check whether is vowel or consonant
// function vowel() {
//   var ch;
//   ch = document.getElementById("first").value;
//   switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//       document.getElementById("num").innerHTML = "vowel";
//       break;
//     default:
//       document.getElementById("num").innerHTML = "consonant";
//       break;
//   }
// }

// //answer 17 switch case
// // find maximum between two numbers
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Scond Number"));
// switch (true) {
//   case num1 > num2:
//     console.log(" The Max Number = num1");
//     break;

//   default:
//     console.log("The Max Number = num2");
//     break;
// }

// //answer 18 switch case
// // check whether a number is even or odd
// var Number = window.prompt("Enter Your Number");
// switch (Number) {
//   case "Number % 2 == 0":
//     console.log("The number is even");
//     break;

//   default:
//     console.log("The number is odd");
//     break;
// }

// //answer 19 switch case
// // check whether a number is positive or negative or zero
// var userNumber = Number(window.prompt("Enter Your Number"));
// switch (true) {
//   case userNumber > 0:
//     console.log("The number is positive");
//     break;

//   case userNumber == 0:
//     console.log("The number is zero");
//     break;

//   default:
//     console.log("The number is negative");
//     break;
// }

// //answer 20 switch case
// // create Simple Calculator
// let result;
// const operator = prompt("Enter operator ( either +, -, * or / ): ");
// const Number1 = parseFloat(prompt("Enter the first Number "));
// const Number2 = parseFloat(prompt("Enter the second Number: "));
// switch (operator) {
//   case "+":
//     result = Number1 + Number2;
//     console.log(`${Number1} + ${Number2} = ${result}`);
//     break;

//   case "-":
//     result = Number1 - Number2;
//     console.log(`${Number1} - ${Number2} = ${result}`);
//     break;

//   case "*":
//     result = Number1 * Number2;
//     console.log(`${Number1} * ${Number2} = ${result}`);
//     break;

//   case "/":
//     result = Number1 / Number2;
//     console.log(`${Number1} / ${Number2} = ${result}`);
//     break;

//   default:
//     console.log("Invalid operator found");
//     break;
// }
