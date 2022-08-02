//what are diffrent datatypes available in javascript?

//there are 2 types of datatype in js.first is primitive,second is non-primitive.
//primitive DT-string,boolean,number,null,undefined,symbol
//non-primitive DT-object,array

//in how many ways can we declare a variable?

//we can declared a variable using three keywords in js.they are var,let and const.

//what is hoisting?

//hoisting is the default behaviour moving all the function and variable declaration at the top of scope before code execution.
//in js,only variable declaration is hoisted,initialization is not hoisted.
//example1-
console.log(test);//undefined
var test=10;
//example2-
console.log(test1);//reference error
let test=10;

//what is temporal dead zone?
//a TDZ is a area of block where a variable is inaccessible until the moment computer initializes it with a value.
//let and const are not hoisted.if we try to access them without initialization,we get reference error ,that is temporal dead zone for them.

//what is difference between == and === operator?
//both are comparison operators.while == is used to compare only the values ,=== is used to compare both value and datatypes.
//example-
let a=10;
let b="10";
console.log(a==b)//true
console.log(a===b)//false

//what are different types of operators in js?
//there are 7 types of operators in js.
// 1.arithmatic operator
// 2.bitwise operator
// 3.comma operator
// 4.comparison operator
// 5.consitional or ternary operator
// 6.logical operator
// 7.increment-decrement operator