//Followed by Basic Interview Questions:

// alert("Hi");
// alert(4+5);
//console.log(this);

//console.log(3>2>1); // False
//console.log(3>2); // True it is bcz it take only 1st 2 values

// var a; // Undefined
// let a; // Undefined.. If both then throws error "identifier a alrdy dclared"
// console.log(a);

//let value: number[] = []; // Uncaught SyntaxError: Unexpected token ':'


// // let a = 2; // true
// let a = 1; // false
// let b = 2;
// console.log(a===b); // Uncaught ReferenceError: a is not defined
// Diff betw === & ==

// let str = 'Mohana';
// console.log(str.split(''));


// let str = "Mohana, This is JS!"; // m o h a i
// console.log(str[0]); //
// console.log(str[1]); //
// console.log(str[2]); //
// console.log(str[3]); //
// console.log(str[10]); //

// clear
// ƒ clear() { [native code] }

//Write a code to calculate the sum(3)(4) using closures in JavaScript?
// function sum(a) {
//     return function(b) {
//       return a + b; // takes "a" from the outer lexical environment
//     };
// }
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4


// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//       alert(i);
//     }, 1000 + i);
//   }

// (function() {
//   var a = b = 5;
// })();
//
// console.log(b);
