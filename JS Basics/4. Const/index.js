// const = a variable that can't be changed
// Once a const is declared it cannot be changed or there will be an error

const pi = 3.14159;
let radius;
let circumference;


radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

/*since pi is a const this cannot be changed and an error will occur, so it 
 must be commented out.*/
// pi = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is:", circumference);
