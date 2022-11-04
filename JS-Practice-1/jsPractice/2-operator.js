/*
    Operators ==> Arithmetic, Comparison, Assignment, Logical, Bitwise

    //Assignment Operator: (+= , -= , *= , /= , %=)
    1. Create a simple log using  = operator
    2. Create a simple log using operators ==> += , -= , *= , /= , %=
    3. Difference between =+ and +=

    //Arithmetic Operator: (+, -, *, /, %)
    4. Sum of 2 numbers using console
    5. JS Exponential of numbers (**)
    6. Example of Increment operator (++)
    7. Example of Decrement operator (--)
    8. Difference between (X++) & (++X)
    9. Difference between (X--) & (--X)

    //Comparision Operator: (>, <)
    10. Example for:  > & <.

    //Relational (>= , <=,)
        11. Example for:  >= & <=.

    //Equality (=, ==, ===, !==)
        12. Example for:  =, ==, ===, !==.
        13. Ex for Strict Equality operator
        14. Ex for Lose Equality operator

    //String Comparision
        15. Example for String Comparision
        16. Example with different DataTypes

    //Ternary Operator:
        17.  Difference between: If condition & Ternary method with example
            ( Note: If age > 18 is Adult & age < is Child )

    //Logical Operator: (AND, OR, NOT)
        18. Simple log for (&&, ||, !!)
            ( Check bank loan eligibility with High-Income, CIBIL-Score )

    //Logical Operator with Non-Boolean: (Truthy / Falsy)
        19. Create a simple log using Logical Operations with Non-Boolean values
        20. Example for Short-Circuting using
            1. log
            2. colors

    //Bitwise Operator (&, |, ! )
        21. Check Bitwise Operations using simple log
        22. Do Bitwise Operations with variable values (Write: 4, Read:2, Execute:1)

    //Operator Precedence
        23. Simple example for : Operator Precedence
        24. Example for Operator Precedence in priority basis
*************************************************************************/


// 1. Create a simple log using  = operator
// var x = 5;
// console.log(x); // 5


// 2. Create a simple log using operators ==> += , -= , *= , /= , %=
// let x = 4;
// x += 5; // 9
// x = x + 6; // 10
// X = x + 6; // 4 (because the value stored in X but in console we called x)
// Y = x + 6; // 4
// x = x += 5; x = x += 2  // 11 It is bcz ==> x = 4 + 5 = 9 + 2 = 11
// x = y += 2; // y is not defined
// console.log(x);
// same cand be done for (-= , *= , /= , %=)


// 3. Difference between =+ and +=
// let x =+ 2; // 2
// console.log(x);

// let z =- 2; // -2
// console.log(z);

// let y += 2; // Uncaught SyntaxError: Unexpected token '+='
// console.log(y);


//Arithmetic Operator: (+, -, *, /, %)
// 4. Sum of 2 numbers using console
// let num1 = 8;
// let num2 = 2;
// // console.log(num1 + num2); // 10
// // console.log(num1 - num2); // 6
// // console.log(num1 * num2); // 16
// // console.log(num1 / num2); // 4
// // console.log(num1 % num2); // 0


// 5. JS Exponential of numbers (**)
// let num1 = 8;
// let num2 = 2;
// // console.log(num1 ** num2); // 64 ==> (8 * 8 = 64)
// // console.log(num2 ** num1); // 64 ==> (2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 =  256)


// 6. Example of Increment operator (++)
// let no1 = 4;
// console.log(no1++); // 4 ==> (4 + 1)
// console.log(no1); // 5

// let no2 = 7;
// console.log(++no2); // 8
// console.log(++no2); // 9
// console.log(no2); // 9


// 7. Example of Decrement operator (--)
// let no1 = 4;
// console.log(no1--); // 4 ==> (4 - 1)
// console.log(no1); // 3

// let no2 = 7;
// console.log(--no2); // 6
// console.log(--no2); // 5
// console.log(no2); // 5

// let no3 = -2;
// console.log(no3--); // -2 ==> (-2+(-1))
// console.log(no3); // -3


// 8. Difference between (X++) & (++X)
// POSTFIX INCREMENT
// let x = 3;
// const y = x++; // 3
// console.log(`x: ${x}, y: ${y}`); // x: 4, y: 3

// PREFIX INCREMENT
// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`); // a:4, b:4

// const a = 3;
// let b = ++a;
// console.log(`a:${a}, b:${b}`); // Uncaught TypeError: Assignment to constant variable.

// const a = 3;
// console.log(a); // 3
// console.log(`${a}`); // 3

// 9. Difference between (X--) & (--X)
// POSTFIX DECREMENT
// let x = 6;
// const y = x--;
// console.log(`x: ${x}, y: ${y}`); // x: 5, y: 6

// PREFIX DECREMENT
// let a = 3;
// const b = --a;
// // let b = --a;
// console.log(`a: ${a}, b: ${b}`); // a:2 , b: 2

// const a = 3;
// let b = --a;
// console.log(`a:${a}, b:${b}`); // Uncaught TypeError: Assignment to constant variable.


// Comparision Operator: (>, <)
// 10. Example for:  > & <.
// let x = 3;
// console.log(x > 1); // True ==> 3 > 1
// console.log(x > 5); // False ==> 3 > 5
// console.log(x < 1); // false ==> 3 < 1
// console.log(x < 4); // True ==> 3 < 4
// console.log(y > 5); // Cannot access 'y' before initialization


// Relational (>= , <=,)
// 11. Example for:  >= & <=.
// let y = 5;
// console.log(y >= 4); // True (5 >= 4)
// console.log(y >= 6); // False (5 >= 4)

// let z = 2;
// console.log(z <= 4); // True (2 <= 4)
// console.log(z <= 1); // False (2 <= 4)


// Equality (=, ==, ===, !==)
/****** = is used for assigning values to a variable in JavaScript.
        == is used for comparison between two variables irrespective of the datatype of variable.
        === is used for comparision between two variables but this will check strict type, which means
        it will check datatype and compare two values.*******/

// 12. Example for:  =, ==, ===, !==.
// let x = 10;
// console.log( x == 2);
// console.log( x == 10);

// if( x == 10) {
//   console.log("Condition A Executed");
// } else {
//   console.log("Condition B Executed");
// }

// let y = 4;
// let y = 10;
// if( y == 10) {
//   console.log("Condition A Executed");
// } else if( y !== 10 ) {
//   console.log("Condition B Executed");
// } else {
//   console.log("Condition C Executed");
// }


// 13. Ex for Strict Equality operator
// console.log( 1 === 1); // true
// console.log( 1 === 2); // False
// console.log( "1" === 1); // false  ==> (Should be in SAME dataType)


// 14. Ex for Lose Equality operator
// console.log( 1 == 1); // true
// console.log( 1 == 2); // False
// console.log( "1" == 1); // true  ==> (Should be in any dataType)


//String Comparision
// 15. Example for String Comparision
// console.log('ABC' > 'ABD'); // false ==> (C comes before D ie: c > D ==> C Smaller than D)
// console.log('ABC' < 'ABD'); // true ==> (C comes after D ie: c < D ==> D Greater than C)
// console.log('AB' > 'AB'); // false ==> (AB is Equal to AB)
// console.log('AB' < 'AB'); // false
// console.log('AB' == 'AB'); // true
// console.log('AB' = 'AB'); // Invalid left-hand side in assignment


// 16. Example with different DataTypes
// console.log('1' < 5); // true
// console.log(true < 5); // true (Here true represents 1)
// console.log(true > 5); // false
// console.log(false > 5); // false (Here false represents 0)
// console.log(false < 5); // true



//Ternary Operator:
// 17.  Difference between: If condition & Ternary method with example
//     ( Note: If age > 18 is Adult & age < is Child )
// let age = 16
// //age = 20;
// if (age < 18) {
//     console.log("This is Child");
// } else {
//     console.log("This is Adult");
// }

/****Ternary Method****/
// let age = 24
// //age = 16;
// let type = age > 18 ? "Adult" : "Child";
// console.log(type);



    //Logical Operator: (AND, OR, NOT)
        // console.log( true && true); // true (1 && 1)
        // console.log( true && false); // false (1 && 0)
        // console.log( true || true); // true (1 || 1)
        // console.log( true || false); // true (1 || 0)
        // console.log( !false); // true
        // console.log( !true); // false

        // 18. Simple log for (&&, ||, !!)
        //     ( Check bank loan eligibility with High-Income, CIBIL-Score )
        // let highIncome = true;
        // let CIBILScore = true;
        // console.log(highIncome && CIBILScore); // true

        // /**AND**/
        // // let eligiblePerson = highIncome && CIBILScore;
        // // console.log("Status: " + eligiblePerson); // Status: true

        // /**OR**/
        // // let eligiblePerson = highIncome || CIBILScore;
        // // console.log("Status: " + eligiblePerson); // Status: true

        // /**NOT**/
        // // CIBILScore = false;
        // // let eligiblePerson = highIncome || CIBILScore;

        // // let ApplicationStatus = eligiblePerson;
        // // ApplicationStatus = !eligiblePerson;

        // // console.log("Loan Status: " + eligiblePerson); // true
        // // console.log("Application Status: " + ApplicationStatus); // false


    //Logical Operator with Non-Boolean: (Truthy / Falsy)
    // 19. Create a simple log using Logical Operations with Non-Boolean values
    // console.log(false || true); // true (Boolean)
    // console.log(false || "Mithra"); // Mithra (String)
    // console.log(false || 4); // 4 (Number)

        // 20. Example for Short-Circuting using
        //     1. log
        // console.log(true || false || true); // true - it take only 1st 2 operands only
        // console.log(true != true == true); // false

        //     2. colors
        // let userColor = "red";
        // // userColor = undefined;
        // let defaultColor = "black";
        // let currentColor = userColor || defaultColor;
        // console.log("Selected color: " + currentColor);

    //Bitwise Operator (&, |, ! )
        // 21. Check Bitwise Operations using simple log
        // 22. Do Bitwise Operations with variable values (Write: 4, Read:2, Execute:1)

        // //Operator Precedence
          // 23. Simple example for : Operator Precedence
              // let x = 2 + 5;
              // //console.log(x); // 7

              // x = 2 + 5 * 10 //(==> left to right for human : 2+5 = 7 & 7*10 = 70.)
              // console.log(x); // 52

          // 24. Example for Operator Precedence in priority basis

              // x = (2 + 5) * 10;
              // console.log(x); // 52  (For this complex calculation we use priority "JavaScript Precedence")










//
