
// In this exercise we will practice calculating the hypotenuse of triangle


//  let a;
//  let b;
//  let c;

//  /*
//  a = window.prompt("Enter side A");
//  a = Number(a)

//  b =  window.prompt("Enter side B");
//  b = Number(b);

//  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//  console.log("Side C:", c)
//  */

// //More professional way


//    document.getElementById("submit").onClick = function(){

//         a = document.getElementById("aTextBox").value;
//         a = Number(a)
       
//         b = document.getElementById("bTextBox").value;
//         b = Number(b);
       
//         c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
       
//         var cLabel = document.getElementById("cLabel"); 
//         cLabel.innerHTML = "Side C: " + c;
//         console.log(c)
//     }


// Define the lengths of the two sides of the right triangle
let a; 
let b;

// Calculate the length of the hypotenuse using the Pythagorean theorem
document.getElementById("submit").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a)

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    
    document.getElementById("cLabel").innerHTML = c;

    console.log("The hypotenuse of the triangle is: " + c);
}



