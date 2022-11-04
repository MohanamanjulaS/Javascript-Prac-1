
/*
    1. Basic alert & log using variable
    2. variable using concatenation
    3. Variable without passing values
    4. +,-, *,/,% any 2 numbers
    5. Differentiate let and const with the same code and then add the another value when using const
    6. JS Data Types - Examples
    7. Dynamic Typing - Using Data types - find DataTypes
    8. Declare set of Variables into objects
    9. Fetch Data from objects using DOT and BRACKET Notations
    10. Add one more (key:value) pair to the existing object
    11. Create sub-object with existing object and log them
    12. Code an example for array and call the index-1
    13. Add the one more array to the existing array
    14. Find the length of the array
    15. Create a simple function
    16. Add parameter to the function and Argument to the funtion name calls
    17. Check the parameter with parameter call in the varaiable with same name / without same name
    18. use concatination with function calls
    19. +,-, *,/,% any 2 numbers using function
*/


// 1. Basic alert & log using variable
//var myName = ""; // empty space shown in console, typeof myName  - 'string'
//var myName = ''; // empty space shown in console, typeof myName  - 'string'
//var myName = Hana; // 1-basic.js:27 Uncaught ReferenceError: Hana is not defined,  typeof myName  - 'undefined'
//var myName = null; // null,  typeof myName - 'object'
//var myName = undefined; // undefined
//var myName = NaN; // NaN, typeof myName  - 'number'
//var myName = "Mithra"; // Mithra
//console.log(myName);


//2. variable using concatenation
// var myName = "Mithra";
// //var msg = "This is " myName " .+ Web Developer";
// //var msg = "This is "+ myName. + "  Web Developer";
// var msg = "This is "+ myName + ",  Web Developer.";
// console.log(msg);


//3. Variable without passing values
// var myName;
// var x = (typeof myName);
// console.log(x, myName); // undefined undefined


//4. +,-, *,/,% any 2 numbers
// var numOne = 5;
// var numTwo = 2;
// // var result = numOne + numTwo; // 7
// // var result = numOne - numTwo; // 3
// // var result = numOne * numTwo; // 10
// // var result = numOne / numTwo; // 2.5
// // var result = numOne % numTwo; // 1 (remaining value)
// // var result = numOne ** numTwo; // 25
// // var result = numOne(numTwo); // Uncaught TypeError: numOne is not a function
// // var result = numOne[numTwo]; // undefined
// // var result = numOne{numTwo}; // Uncaught SyntaxError: Unexpected token '{'
// console.log(result);


//5. Differentiate let and const with the same code and then add the another value when using const
// var myName = "Mithra"; // Mithra
// myName = "Hana"; // Hana
// console.log(myName);

// let myName = "Mithra"; // Mithra
// //let myName = "Hana"; // Uncaught SyntaxError: Identifier 'myName' has already been declared
// //myName = Hana; // Uncaught ReferenceError: hana is not defined
// //myName = "Hana"; // Hana
// console.log(myName);

// const myName = "Mithra"; // Mithra
// myName = "Hana" // Uncaught TypeError: Assignment to constant variable.
// console.log(myName);


//6. JS Data Types - Examples
// var myName = "Mithra"
// var dob = 21101995;
// var dobUpdate = 21-10-1995;
// dobUpdate = 21/10/1995;
// var isAlive = true;
// var lastName = null;
//  // lastName = "Hana"; // string
// var firstName = undefined;
//  // firstName = "Mithra";
//  // firstName = Mithra; // Uncaught ReferenceError: Mithra is not defined
//  // firstName = 2; // number
// var rank = NaN;
//  // rank = "Hi"; // string
//  // rank = true; // boolean
// var x = () => true; console.log(typeof x); // function
// var x = () => "true"; console.log(typeof x); // function
// var x = () => 123; console.log(typeof x); // function
// var x = [] => true; console.log(typeof x); // Uncaught SyntaxError: Malformed arrow function parameter list
// var x = [] ; console.log(typeof x); // object
// var x = () ; console.log(typeof x); // Uncaught SyntaxError: Unexpected token ')'
// var x = {} ; console.log(typeof x); // object


//7. Dynamic Typing - Using Data types - find DataTypes
// console.log(typeof myName); // string
// console.log(typeof dob); // number
// console.log(typeof dobUpdate); // number
// console.log(typeof isAlive); // boolean
// console.log(typeof lastName); // object
// console.log(typeof firstName); //undefined
// console.log(typeof rank); // number


//8. Declare set of Variables into objects
// let person = {
//   name : "Hana",
//   age : 27,
//   profile: "Developer"
// }
//
// //9. Fetch Data from objects using DOT and BRACKET Notations
// console.log(name); // empty space shown in console
// console.log(person.name); // Hana
// console.log(person['name']); // Hana
// console.log(typeof name); // string
// console.log(typeof person.name); // string


//10. Add one more (key:value) pair to the existing object
// let person = {
//   name : "Hana",
//   age : 27,
//   profile: "Developer"
// }
// // name = "hana"; //Uncaught SyntaxError: Unexpected identifier 'name'
// // Let name = "Mi"; //Uncaught SyntaxError: Unexpected identifier 'name'
// //Let person.name = "Mi"; // Uncaught SyntaxError: Unexpected identifier 'person'
// //person.name = "Mithra" // Mithra
// console.log(person.name);


//11. Create sub-object with existing object and log them
// let person = {
//   name : "Hana",
//   age : 27,
//   profile: "Developer",
//   siblings : {
//     brother: "Saravana",
//     sister : "Suja"
//   }
// }
//
// console.log(person.siblings.brother); // Saravana
// console.log(person.siblings['sister']); // Suja


// 12. Code an example for array and call the index-2

// let colors = [];
// console.log(colors); // []

// var array = ["red", 'green', 'blue', "black"];
// // console.log([]); // []
// // console.log(array); // (4) ['red', 'green', 'blue', 'black']
// // console.log(array[2]); // blue
// //console.log(array[i]); // Uncaught ReferenceError: i is not defined
// // console.log(array[]); // Uncaught SyntaxError: Unexpected token ']'
// ////////////////////////console.log(array.get(index));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let index = fruits.indexOf("Apple"); // 2
// // let index = fruits.indexOf(""); // -1
// // let index = fruits.indexOf(); // -1
// // let index = fruits.indexOf("Goa"); // -1
// // let index = fruits.indexOf("Apple", 1); // 2
// console.log(index); // 2

// const letters = [{ letter: 'a',}, {letter: 'b',}, {letter: 'c',}]
// //const index = letters.indexOf({ letter: 'b'}) // 1
// /*const index = letters.findIndex((element, index) => {
//   if (element.letter === 'b') {
//     return true
//   }
// }) */  // 1
// console.log(index);

// 13. Add the one more array to the existing array
// var array = ["red", 'green', 'blue', "black"];
// array[] = ['grey']; // Uncaught SyntaxError: Unexpected token ']'
// // array  = ['pink']; // ['pink'] - It updates Array
// //array[5]  = ['pink']; // (6) ['red', 'green', 'blue', 'black', empty, Array(1)]
// // array[8]  = ['pink']; // (9) ['red', 'green', 'blue', 'black', empty × 4, Array(1)]
// // array[8]  = 'pink'; //  (9) ['red', 'green', 'blue', 'black', empty × 4, 'pink']
// // array[3] = ['grey']; // (4) ['red', 'green', 'blue', Array(1)]
// console.log(array);


// 14. Find the length of the array
// var array = ["red", 'green', 'blue', "black"];
// console.log(array.length); // 4


// 15. Create a simple function
// function myFunction() {} // Shows empty space
// // console.log(myFunction()); // undefined
// myFunction();
// console.log(myFunction()); // undefined

// function greets() {
//   //let msg = Welcome; // Uncaught ReferenceError: Welcome is not defined
//   let msg = "Welcome"; // Welcome
//   console.log(msg);
// }


// 16. Add parameter to the function and Argument to the funtion name calls with concatenation
// function greets(myName) {
//   let msg = myName + " The Web Developer !"
//   console.log(msg);
// }
// greets(); // undefined The Web Developer !
// greets(myName); // Uncaught ReferenceError: myName is not defined
// greets(Mithra); // Uncaught ReferenceError: Mithra is not defined
// greets("Mithra"); // Mithra The Web Developer !
//greets("Mithra", "Hana"); // Mithra The Web Developer !


// 17. Check the parameter with parameter call in the varaiable with same name / without same name
// function greets(FName, LName) {
//   // let msg = "This is " + FName + myName; // Uncaught ReferenceError: myName is not defined
//   // let msg = "This is " + FName + +LName; // This is MithraNaN
//   // let msg = "This is " + FName + LName; // This is Mithraundefined
//   // let msg = "This is " + FName + " " +LName; // This is Mithra undefined
//   console.log(msg);
// }
// greets("Mithra");


// 18. use concatination with function calls
// function greets(FName, LName) {
//   let msg = "This is " + FName + " " + LName; // This is Mithra hana
//   console.log(msg);
// }
// greets("Mithra", "hana");


// 19. +,-, *,/,% any 2 numbers using function
// function operation(numOne, numTwo) {
//   let result = numOne + numTwo;
//   // let result = numOne - numTwo;
//   // let result = numOne * numTwo;
//   // let result = numOne / numTwo;
//   // let result = numOne % numTwo;
//   // let result = numOne ** numTwo;
//   console.log(result);
// }
// operation(90, 10); // 100

















//
