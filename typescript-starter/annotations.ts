import { valueOrDefault } from "chart.js/helpers";

//Strings
let myName: string = "Max";

myName = "Anna";
// myName= 10;
// Error - Type 'number' is not assignable to type 'string'.
console.log(myName);

//Numbers
let myAge: number = 27;
myAge = 27.5;
console.log(myAge);

//Boolean
let isMarried: boolean = false;
isMarried = false;
console.log(isMarried);

//Object
let isObject: object = {
  val: 11,
};

console.log(isObject);

//Inferred types
let myName2 = "Max";
// myName2 = 21; // Error - Type 'number' is not assignable to type 'string'.
console.log(typeof myName2);

//Any type
let somvar: any = "Max";
somvar = 21;
console.log(somvar);

//Function parameter annotations
//Regular function
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Max");

//Arrow function
