/***Conditions***/
/*
    1. Example for condition without {}
    2. Ex for multiple condition with boolean
    3. Create simple app with time dependency statically
    4. Create simple app with time dependency dynamically
    5. Ex for Switch-case using Grade Feedback system (with and without break)
    6. Switch-case using Mark - value, variable declaration
    7. Check priority for case using the exmaple (witch-case using Mark - value, variable declaration)
    8. Create a simple app for Mobile buying seggestion
*/

/***Loops (For, while, do-while, for-in, for-of)***/
/*
    1. Create a simple condition using for-loop that shows index value starts from (0 & 1)
    2. Use the concatenation in the for-loop
    3. Seperate odd number & even number using for-loop
    4. Create a for-loop with reverse order
    5. Difference between for-loop, while-loop, do-while-loop
    6. Create a simple while-loop and convert that into proper way
    7. Create a simple example for Do-While loop
    8. Create a simple example - OBJECT using For-In loop and display the Key and Value ==> (Key; Value; Key:Value)
    9. Name the methods used to displaye the value in for loop
    10. Create a simple example - ARRAY using For-In loop and display the Key and Value ==> (Key; Value; Key:Value)
    11. Create a simple example - ARRAY using For-Of loop
    12. Difference between For-In, For-Of.
    13. Create an example for infinite loop and fix it
*/


/*******************************************Conditions****************************************************/
// 1. Example for condition without {}
/******Single-condition******/
// const number = 8;
// if(number < 1) // // For Single-condition we no need to use {}
//   console.log("Condition A Executed");
//  else
//   console.log("Condition B Executed");

/******Multi-condition******/
// const numberA = 8;
// if(numberA > 1) { // For Multi-condition we need to use {}
//   console.log("Condition A Executed");
//   console.log("numberA");
// } else {
//   console.log("Condition B Executed");
// }


// 2. Ex for multiple condition with boolean
// let isRaining = false;
// let isCloudy = true;
// if(isRaining || isCloudy) { // Any one of the following is true the o/p will be true
//   console.log("It may rain");
// } else if(isRaining && isCloudy) { // Any both of the following is true the o/p will be true
//   console.log("It will rain");
// } else { // nothing matches it will execute
//   console.log("Enjoy the Climate");
// }


// 3. Create simple app with time dependency statically
// let hour = new Date();
// console.log(hour); // Thu Nov 03 2022 22:11:10 GMT+0530 (India Standard Time)

/*
  1. If hour between 12AM(0 hr) - 1PM(13 hr)
  2. If hour between 1PM(13 hr) - 5PM(17 hr)
  3. If hour between 5PM(17 hr) - 12AM(0 hr)
*/
// let hour = 20;
// if(hour >= 0 && hour <= 13) {
//   console.log("Morning-Afternoon");
// } else if(hour >= 13 && hour <= 17) {
//   console.log("Afternoon-Evening");
// } else { // 17 - 0
//     console.log("Evening-Night");
// }


// 4. Create simple app with time dependency dynamically
// let hour = new Date();
// console.log("Hour : "+ hour.getHours());
// // console.log("Minutes : "+ hour.getMinutess()); // hour.getMinutess is not a function
// console.log("Seconds : "+ hour.getSeconds());
// // console.log("MilliSeconds : "+ hour.getMilliSeconds()); // hour.getMilliSeconds is not a function
// console.log("MilliSeconds : "+ hour.getMilliseconds()); // hour.getMilliSeconds is not a function
// console.log("Time : "+ hour.getTime());
// console.log("Day " + hour.getDay() ); // It shows as a number like (Mon-1, Tues-2, Wed-3, Thurs-4, Fri-5, Sat-6, Sun-7)

// let hours = new Date(); // Simplify this 2 line into one
// let hour = hours.getHours();
// if(hour >= 0 && hour <= 13) {
//   console.log("Morning-Afternoon");
// } else if(hour >= 13 && hour <= 17) {
//   console.log("Afternoon-Evening");
// } else { // 17 - 0
//     console.log("Evening-Night");
// }

// let hour = new Date().getHours();
// if(hour >= 0 && hour <= 13) {
//   console.log("Morning-Afternoon");
// } else if(hour >= 13 && hour <= 17) {
//   console.log("Afternoon-Evening");
// } else { // 17 - 0
//     console.log("Evening-Night");
// }


// 5. Ex for Switch-case using Grade Feedback system (with and without break)
// let grade = A; // This ex shows ==> Uncaught SyntaxError: missing ) after argument list
// switch (grade) {
//   case S: // Need to give the expression inside "S"
//     console.log("Grade : ", Excellent);
//   default:
//     console.log("Grade : ", Unknown Grade);
// }

// let grade = "A";
// switch (grade) {
//   case "S":
//     console.log("Excellent");
//   case "U":
//     console.log("Fail");
//   default:
//     console.log("Unknown Grade");
// }

// let grade = "A";
// switch (grade) {
//   case "S":
//     console.log("Excellent");
//     break;
//   case "A":
//     console.log("Good");
//     break;
//   default:
//     console.log("Unknown Grade");
// }

// let grade = "E";
// switch (grade) {
//   case "S":
//     console.log("Excellent");
//     break;
//   case "A":
//     console.log("Good");
//   case "B":
//   case "D":
//   case "E":
//     console.log("Not Fair");
//     break;
//   default:
//     console.log("Unknown Grade");
// }


// 6. Switch-case using Mark - value, variable declaration
// let marks = 60;
// // let marks = 90;
// // switch(marks) {  // If we use boolean value we should pass "true"/"false" in the switch()
// switch(true) {
//     case marks > 50:
//         console.log("Pass");
//         break;
//     case marks < 50:
//         console.log("Fail");
//         break;
//     case marks > 90:
//         console.log("Good Mark");
//         break;
//     default:
//         console.log("Unknow Grade");
// }


// 7. Check priority for case using the exmaple (witch-case using Mark - value, variable declaration)
// let marks = 60;
// marks = 92;
// // switch(marks) {
// switch(true) {
//     case marks > 90:
//         console.log("Good Mark");
//         break;
//     case marks = 50:
//         console.log("Pass");
//         break;
//     case marks < 50:
//         console.log("Fail");
//         break;
//     default:
//         console.log("Unknow Grade");
// }


// 8. Create a simple app for Mobile buying seggestion
// let amount = 100;
// // amount = 10000;
// if (amount >= 60000 ) {
//     console.log("Buy iPhone");
// }
// else if ( amount >= 5000 && amount <= 10000) {
//     console.log("Buy Android");
// }
// else {
//     console.log("No offers");
// }


/**********************************Loops**********************************/

/*****************Loops (For, while, do-while, for-in, for-of)*****************/
// 1. Create a simple condition using for-loop that shows index value starts from (0 & 1)
// for(i=0; i<5; i++) {
//   console.log("No # : ", i ); // 0, 1, 2, 3, 4
// }

// for(i=0; i<=5; i++) {
//   console.log("No # : ", i ); // 0, 1, 2, 3, 4, 5
// }


// 2. Use the concatenation in the for-loop
// for (i=1; i<=5; i++) {
//   console.log("No #"+ i); // Using + ==> (#1..... #5)
// }


// 3. Seperate odd number & even number using for-loop
// for (i=0; i<=10 ; i++) { // Both Will Display
//   if(i % 2 == 0 ) {
//     console.log("Even Number: " , i);
//   } else {
//     console.log("Odd Number: " , i);
//   }
// }

/*Even Number*/
// for (i=0; i<=10 ; i++) {
//   if(i % 2 == 0 ) {
//     console.log("Even Number: " , i); // 0, 2, 4, 6, 8, 10
//   }
// }

/*Odd Number*/
// for (j=0; j<=10 ; j++) {
//   if(j % 2 != 0 ) {
//     console.log("Odd Number: " , j); // 1, 3, 5, 7, 9
//   }
// }


// 4. Create a for-loop with reverse order
// for(i=10; 1>=0; i--) { // it will make an infinite error when missing let keyword
//   console.log(i);
// }


// for (let i=10; i>=0; i--) { // Local Declaration ==> 10, 9 , 8, ..... 0
//     console.log(i);
// }

// 5. Difference between for-loop, while-loop, do-while-loop
//Need to check

// 6. Create a simple while-loop and convert that into proper way
// let i = 10; // Global declaration
// for (; i>=0; i--) {
//     console.log(i);
// }

// let i = 10; // error to check
// for (; i>=0 ;) {
//    if(any) {
//        console.log(i);
//    }
//    i--;
// }

// let i = 15;
// while(i>=1) {
//    if {
//        console.log(i);
//    }
//    i--;
// }

// 7. Create a simple example for Do-While loop


// 8. Create a simple example - OBJECT using For-In loop and display the Key and Value ==> (Key; Value; Key:Value)
// const person = {
//   name: "Mithra",
//   age : 26,
//   gender: "Female"
// }

// for (let key in person) { // Only Key will display
//   console.log("Key:" , key);
// }

// 9. Name the methods used to display the value in for loop
// const person = {
//     name: "Mithra",
//     age : 26,
//     gender: "Female"
// }

// for (let key in person) { // Only Value will display
//   console.log("Value:" , person[key]);
// }

// for (let key in person) { // Both Key:Value will display
//   console.log(key + " : " + person[key]);
// }


// 10. Create a simple example - ARRAY using For-In loop and display the Key and Value ==> (Key; Value; Key:Value)
// let colors = ["red", "green", "blue"];
// for (let key in colors) {
//     // console.log(key);
//     console.log(colors[key]);
// }


// 11. Create a simple example - ARRAY using For-Of loop
// let favColor = ["black", "yellow", "blue"];
// for (let color of favColor) {
//     console.log("Favourite: " + color);
//     console.log("Favourite: " , color);
// }


// 12. Difference between For-In, For-Of.


// 13. Create an example for infinite loop and fix it
// for (; ;) {
//     console.log("This is infinite loop");
// }


/******************************************************************************************/
//To do
    //5. Difference between for-loop, while-loop, do-while-loop
    //6. Create a simple while-loop and convert that into proper way
    // 7. Check priority for case using the exmaple (switch-case using Mark - value, variable declaration)
    // While, Do-while
     // 12. Difference between For-In, For-Of.










//

















//
