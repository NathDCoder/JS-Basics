/* return =  returns a value back to the place where you invoked a function */

let area;
let height;
let width;

height = window.prompt("Enter a Number")
width = window.prompt("Enter a Number")

area = areaCalc(height, width);

console.log("The area is: " + area);


function areaCalc(height, width){
    let result = height * width;
    return result;
   
}

/* You can also write it like this */
// function areaCalc(height, width){
//    return height * width;  
// }
