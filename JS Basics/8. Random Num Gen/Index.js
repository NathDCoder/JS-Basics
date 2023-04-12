
/*Math.random() will generate a random decimal number if written by itself.
Adding Math.floor() to the code rounds down to a whole number. Remember computers count from 0.
So the result will always be from 0-5.*/


// let z = Math.floor(Math.random() * 6);
// console.log(z);

// If we want 0=6 we just add + 1
// let x = Math.floor(Math.random() * 6) + 1 ;
// console.log(x);

//Example

document.getElementById("rollBtn").onclick = function(){
    
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    
    console.log(a);
    console.log(b);
    console.log(c);
    
    document.getElementById("aLabel").innerHTML = a;
    document.getElementById("bLabel").innerHTML = b;
    document.getElementById("cLabel").innerHTML = c;
}