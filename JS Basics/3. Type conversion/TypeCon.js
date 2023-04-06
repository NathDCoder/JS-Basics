// Type Conversion is the process of changing a datatype to another 
// (string, numbers, booleans)

// let age = window.prompt("How old are you?")

// age += 1;

// console.log("You are", age, "years old");

// The code above just concactenates the number typed in which is a string to 1
// If you want to add + 1 to the number inputted we can use a number constructor like so
// This is one way of converting a string to a number

// let age = window.prompt("How old are you?")

// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;

// console.log("You are", age, "years old");

//Method 2
// These examples use all three constructors(String,Number,Boolean)

let x;
let y;
let z;

x = Number("3.14")
y = String(3.14)
// If quotes are left empty boolean will be false
z = Boolean("meat")

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)